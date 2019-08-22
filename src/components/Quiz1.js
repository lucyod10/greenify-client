import React, {Component} from 'react';

class Quiz1 extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      index: 0,
      isgamefinished: false,
      quizStart:false,
      quizz: [{
        question: "The first type of plant to evolve on Earth was?",
        answers: ["Algae", "Fern"],
        correct: 1
        },
        {
          question: 'How often should I change my plant’s potting mix?',
          answers: ["Every Month", "In one or two years"],
          correct: 2
        },
        {
          question: 'When to water the indoor plants?',
          answers: ["Every day", "As required"],
          correct: 2
        },
        {
          question: "An extract from which species of succulent is used to produce Tequila?",
          answers: ["Agave", "Aloe"],
          correct: 1
        },
        {
          question: "What do plants need to grow and survive?",
          answers: ["Sunlight", "Sand"],
          correct: 1
        },
        {
          question: "What is the best way to make sure that a plant grows to its full and healthy height?",
          answers: ["Sing it a song", "Water it as required"],
          correct: 2
        },
        {
          question: "Which seed will grow best?",
          answers: ["A seed planted in wet soil", "Water planted seed every day"],
          correct: 1
        },
        {
          question: "Which colour light is the most important for plant growth and flowering?",
          answers: ["Red and green", "Blue and red"],
          correct: 1
        },
      ]

    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClickStart = this.handleClickStart.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.displayPlants = this.displayPlants.bind(this);

  }
  handleClickStart(){
    this.setState ({
      quizStart: true
    });
  }
  handleClick(id) {

    console.log('clicked', id);
    if (this.state.quizz[this.state.index].correct === id) {
      this.setState({
        score: this.state.score+1
      })
    }

    if (this.state.quizz.length-1 <= this.state.index){
     this.setState({
       isgamefinished: true
     })
     return;
    }


    this.setState({
        index: this.state.index+1
      }
    );
  }

  handleClick1() {
    this.handleClick(1);
  }

  handleClick2() {
    this.handleClick(2);
  }
  handleReset() {
    console.log("clicked");
      this.setState({
        index: 0,
        score: 0,
        isgamefinished: false,
        quizStart:false,

    });
  }

  displayPlants (score) {
    if (score > 80) {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQLi0FWoJsR_j0d2Tsh9bY9JamzsAFUHqNIcYw1zzgj1MLRKg"
    }
    else if (score > 35) {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2iDokEGy_0ektSu1gXICFuxDZTebUmVb3kWgrQnY8nZ9hQ76K"
    }
    else {

       return "http://www.bcgardenclub.org/_/rsrc/1539102774545/files/calendar/events/2018oct30plantdiseasesbyhowardwaterworthphd/sickplant.png?height=400&width=294"
    }
  }


  render () {
    return (
      <div className="backgroundimg">
        <h1 className="title"> Quizz about Plants </h1>
        <div className= {this.state.quizStart ? 'hidden quizEndDiv': 'quizEndDiv'}  >
          <h2 className="subtitle">Do you have the green thumbs and know-how to ace this quiz on plants and flowers? Challenge yourself to get 100%</h2>
          <button className="answerBtn" onClick ={this.handleClickStart}>Start the Quiz</button>
        </div>

        <div className={this.state.isgamefinished || !this.state.quizStart? 'hidden' : ''}>
            <h3 className="subtitle">{this.state.quizz[this.state.index].question}</h3>
            <button className="answerBtn" onClick ={ this.handleClick1 }>
                {this.state.quizz[this.state.index].answers[0]}
            </button><br/><br/>
            <button className="answerBtn" onClick ={ this.handleClick2 }>
              {this.state.quizz[this.state.index].answers[1]}
            </button>
        </div>
        <div className={this.state.isgamefinished ? '' : 'hidden'}>
            <h1>your knowledge on plants is: {((this.state.score/this.state.quizz.length)*100).toFixed(2)}%</h1>
            <img className="finalImg" src = {this.displayPlants((this.state.score/this.state.quizz.length)*100)}/>
            <button className="answerBtn" onClick = {this.handleReset}>Reset</button>
        </div>
      </div>

    )
  }

}


export default Quiz1;
