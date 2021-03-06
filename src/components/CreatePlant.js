import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PlantForm from './PlantForm';
import serverURL from "../ServerURL";

const PLANT_API = serverURL('plants');
const PLANT_IMAGE_API = serverURL('plants/');

class CreatePlant extends Component {
  constructor(){
    super();
    this.state = {
      submitting: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleDateFromChange = this.handleDateFromChange.bind(this);
    this.handleDateToChange = this.handleDateToChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleDateFromChange(event) {
    console.log("from");
    this.setState({ from: event});
  }

  handleDateToChange(event) {
    this.setState({ to: event});
  }

  handleFileChange(event) {
    this.setState({ file: event.target.files[0] });
  }

  handleSubmit(event) {
      event.preventDefault();

      //1. Create plant object by collecting different attributes from state.
      const { name, age, status, cost, worth, description, from, to } = this.state;
      const plant = {name, age, status, cost, worth, description,
        availability: {
          from: this.state.from,
          to: this.state.to}};
      console.log(plant);
      //2. Plant object doesn't have image/file, since file is uploaded as Multipart Form Data request in HTTP **. (read more at https://stackoverflow.com/questions/16958448/what-is-http-multipart-request)
      //** - Although there is a workaround to encode file in base64 and then use it in json payload. ////However this is not recommended.

      // // to get the token and send it through the header, you need to add "bearer" with a space after it at the beginning.
      const token = "Bearer " + localStorage.getItem("jwt");

      //File upload is handled in two step process, since Create Plant is a REST based API, which does not handle file upload directly.
      // a. first we create new plant object in server without images by calling /POST endpoint.
      // b. once the plant is created, we updated the plant with /PUT call which is not REST call but actually a multipart form submit which includes file. On server side, this PUT request will get the file content and upload it in Cloudinary and then update the plant object.

      if (this.state.submitting === false) {
        console.log("submitting" + this.state.submitting);
        this.setState({submitting: true});
        axios({method: 'post', url: PLANT_API, headers: {'Authorization': token}, data: { plant }})
          .then(result => {
            const formData = new FormData();
            formData.append('file', this.state.file);
              console.log(formData)
              console.log(this.state.file);
               const plantImage = PLANT_IMAGE_API + result.data.id + '.json';
               axios({method: 'put', url: plantImage, headers: {'Authorization': token}, data: formData })
                 .then(res => {
                   this.props.history.push('/plants');
                   this.setState({submitting: false});
                 });

            //this.props.history.push("/plants");

          })
          .catch(error => {
            console.log(error);
          });
      }

  }

  render() {
    return (
      <div className="centerForm">
        <h2> Create New Plant </h2>
        <PlantForm
          heading = "Create New Plant"
          onTextChange={this.handleChange}
          onFileChange={this.handleFileChange}
          onDateFromChange={this.handleDateFromChange}
          onDateToChange={this.handleDateToChange}
          date_from={this.state.from}
          date_to={this.state.to}
          onSubmit={this.handleSubmit}
          buttonLabel = "Add Plant"
          plant={{}} />
      </div>

    )
  }
}


export default CreatePlant;
