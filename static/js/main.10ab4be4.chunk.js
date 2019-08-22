(window["webpackJsonpgreenify-react"]=window["webpackJsonpgreenify-react"]||[]).push([[0],{166:function(e,t,a){e.exports=a.p+"static/media/plant_feature.841213cf.png"},186:function(e,t,a){e.exports=a.p+"static/media/teapot_01.64904416.png"},187:function(e,t,a){e.exports=a.p+"static/media/teapot_02.8ea4348a.png"},188:function(e,t,a){e.exports=a.p+"static/media/teapot_03.b04f7c13.png"},189:function(e,t,a){e.exports=a(340)},194:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){},217:function(e,t,a){},340:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(88),r=a.n(s),o=(a(194),a(9)),i=a(41),c=(a(195),a(166)),u=a.n(c);a(196);var m=function(){return l.a.createElement("div",null,l.a.createElement("h1",{class:"greenify-text"},"Greenify"),l.a.createElement("img",{src:u.a,className:"featureImage"}))},h=a(4),d=a(5),p=a(7),g=a(6),b=a(3),f=a(8),E=a(64),v=a.n(E),w=a(65),y=a.n(w),j=a(10),O=a.n(j),S=function(e){return"https://greenify-your-life.herokuapp.com/"+e},C=a(47),k=a.n(C),_=a(48),I=a.n(_),N=a(49),D=a.n(N),x=a(50),P=a.n(x),z=a(51),q=a.n(z),F=a(52),T=a.n(F),B=a(53),A=a.n(B),M=a(54),R=a.n(M),W=a(55),L=a.n(W),Y=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).state={image:"",user:""},e._handleHover=e._handleHover.bind(Object(b.a)(e)),e._handleOut=e._handleOut.bind(Object(b.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"_handleHover",value:function(){console.log("hover"),this.setState({image:y.a})}},{key:"_handleOut",value:function(){console.log("out"),this.setState({image:v.a})}},{key:"componentDidMount",value:function(){var e=this;if(localStorage.getItem("jwt")){var t="Bearer "+localStorage.getItem("jwt");console.log(t),O()({method:"get",url:S("/current_user"),headers:{Authorization:t}}).then(function(t){e.setState({user:t.data})}).catch(function(e){return console.log("error",e)})}}},{key:"randomImg",value:function(){var e=[k.a,I.a,D.a,P.a,q.a,T.a,A.a,R.a,L.a],t=e.length;return e[Math.floor(Math.random()*t)]}},{key:"render",value:function(){var e=this.randomImg();return l.a.createElement("div",{className:"nav"},l.a.createElement(o.b,{to:"/",className:"headerTitle"},l.a.createElement("h1",{onMouseOver:this._handleHover,onMouseOut:this._handleOut},"greenify",l.a.createElement("img",{src:v.a,className:"logo nohover"}),l.a.createElement("img",{src:y.a,className:"logo hover"}))),l.a.createElement("div",{className:"links"},l.a.createElement(o.b,{to:"/"},"Home"),l.a.createElement(o.b,{to:"/plants"},"Plants"),this.state.user.is_seller?l.a.createElement(o.b,{to:"/plants/new"},"Add Plant"):"",l.a.createElement(o.b,{to:"/quiztest"},"Quiz"),this.state.user.admin?l.a.createElement(o.b,{to:"/users"},"Users"):"",l.a.createElement(o.b,{to:"/quiz1"},"Quiz1"),localStorage.getItem("jwt")?l.a.createElement("span",null,l.a.createElement(o.b,{to:"/users/"+this.state.user.id},l.a.createElement("img",{className:"avatar",src:e,width:"50",height:"50"}),this.state.user.name),l.a.createElement(o.b,{to:"/SignOut"},"Sign Out")):l.a.createElement("span",null,l.a.createElement(o.b,{to:"/SignIn"},"Sign In")," or",l.a.createElement(o.b,{to:"/SignUp"}," Sign Up"))))}}]),t}(n.Component),G=(a(217),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).state={},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("span",null,"\xa9 greenify 2019"),l.a.createElement("div",{className:"footerPos"},l.a.createElement("div",{class:"plantContainer"},l.a.createElement("div",{class:"plant"},l.a.createElement("div",{class:"branch"}),l.a.createElement("div",{class:"branch"}),l.a.createElement("div",{class:"branch"}),l.a.createElement("div",{class:"branch"}),l.a.createElement("div",{class:"branch"}),l.a.createElement("div",{class:"branch"})))))}}]),t}(n.Component)),U=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).state={name:"",email:"",password:"",confirm_password:"",seller:!1},e._handleSumbit=e._handleSumbit.bind(Object(b.a)(e)),e._handleInputName=e._handleInputName.bind(Object(b.a)(e)),e._handleInputEmail=e._handleInputEmail.bind(Object(b.a)(e)),e._handleInputPassword=e._handleInputPassword.bind(Object(b.a)(e)),e._handleInputPasswordConfirmation=e._handleInputPasswordConfirmation.bind(Object(b.a)(e)),e._handleInputSeller=e._handleInputSeller.bind(Object(b.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"_handleSumbit",value:function(e){var t=this;e.preventDefault();var a=S("/api/users");O.a.post(a,{user:{name:this.state.name,email:this.state.email,password:this.state.password,password_confirmation:this.state.confirm_password,is_seller:this.state.seller}}).then(function(e){console.log(e);var a=S("api/user_token");O.a.post(a,{auth:{email:t.state.email,password:t.state.password}}).then(function(e){console.log(e.data),console.log(window),localStorage.setItem("jwt",e.data.jwt),t.props.history.push("/"),window.location.reload()}).catch(function(e){return console.log("error",e)})})}},{key:"_handleInputName",value:function(e){this.setState({name:e.target.value})}},{key:"_handleInputEmail",value:function(e){this.setState({email:e.target.value})}},{key:"_handleInputPassword",value:function(e){this.setState({password:e.target.value})}},{key:"_handleInputPasswordConfirmation",value:function(e){this.setState({confirm_password:e.target.value})}},{key:"_handleInputSeller",value:function(e){this.setState({seller:!this.state.seller})}},{key:"render",value:function(){return l.a.createElement("div",{className:"centerForm"},l.a.createElement("form",{onSubmit:this._handleSumbit},l.a.createElement("label",{htmlFor:"name"},"Name:",l.a.createElement("input",{type:"text",id:"name",onChange:this._handleInputName})),l.a.createElement("label",{htmlFor:"email"},"Email:",l.a.createElement("input",{type:"email",id:"email",onChange:this._handleInputEmail})),l.a.createElement("label",{htmlFor:"password"},"Password:",l.a.createElement("input",{type:"password",id:"password",onChange:this._handleInputPassword})),l.a.createElement("label",{htmlFor:"confirm_password"},"Confirm Password:",l.a.createElement("input",{type:"password",id:"confirm_password",onChange:this._handleInputPasswordConfirmation})),l.a.createElement("label",{htmlFor:"seller"},"Seller:",l.a.createElement("input",{type:"checkbox",id:"seller",onChange:this._handleInputSeller})),l.a.createElement("input",{type:"submit",value:"Create User"})))}}]),t}(n.Component),H=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).state={name:"",email:"",password:""},e._handleSumbit=e._handleSumbit.bind(Object(b.a)(e)),e._handleInputEmail=e._handleInputEmail.bind(Object(b.a)(e)),e._handleInputPassword=e._handleInputPassword.bind(Object(b.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"_handleSumbit",value:function(e){var t=this;e.preventDefault();var a=S("api/user_token");O.a.post(a,{auth:{email:this.state.email,password:this.state.password}}).then(function(e){console.log(e.data),console.log(window),localStorage.setItem("jwt",e.data.jwt),t.props.history.push("/"),window.location.reload()}).catch(function(e){return console.log("error",e)})}},{key:"_handleInputEmail",value:function(e){this.setState({email:e.target.value})}},{key:"_handleInputPassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"centerForm"},l.a.createElement("form",{onSubmit:this._handleSumbit},l.a.createElement("label",{htmlFor:"email"},"Email:",l.a.createElement("input",{type:"email",id:"email",onChange:this._handleInputEmail})),l.a.createElement("label",{htmlFor:"password"},"Password:",l.a.createElement("input",{type:"password",id:"password",onChange:this._handleInputPassword})),l.a.createElement("input",{type:"submit",value:"Sign In"})))}}]),t}(n.Component),Q=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(g.a)(t).call(this))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){localStorage.removeItem("jwt"),this.props.history.push("/"),window.location.reload()}}]),t}(n.Component),$=a(17),J=a(21),V=a.n(J),K=S("plants.json"),X=function(e){function t(){var e;Object(h.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).state={plants:[],query:""},e._handleSubmit=e._handleSubmit.bind(Object(b.a)(e)),e._handleInputSearch=e._handleInputSearch.bind(Object(b.a)(e));return function t(){O.a.get(K).then(function(a){e.setState({plants:a.data}),console.log(e.state.plants),setTimeout(t,4e4)})}(),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"_handleSubmit",value:function(e){e.preventDefault(),this.setState({query:""}),console.log("click")}},{key:"_handleInputSearch",value:function(e){this.setState({query:e.target.value}),console.log(e.target.value)}},{key:"render",value:function(){return l.a.createElement("div",{className:"centerForm"},l.a.createElement("h2",null,"This is a plant area. See our plants:"),l.a.createElement("form",{onSubmit:this._handleSubmit},l.a.createElement("label",{htmlFor:"query"},l.a.createElement("p",null,"Search:"),l.a.createElement("input",{type:"search",id:"query",onInput:this._handleInputSearch})),l.a.createElement("input",{type:"submit",value:"Filter"})),l.a.createElement(Z,{plants:this.state.plants,query:this.state.query}))}}]),t}(n.Component),Z=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"checkingdate",value:function(e){var t=e;console.log(t);if(V()().format("l")==V()(t).format("l"))return!0}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"allPlantsGrid"},this.props.plants.map(function(t){var a=l.a.createElement("p",{key:t.id},l.a.createElement(o.b,{to:"/plants/"+t.id},l.a.createElement($.Image,{cloudName:"dto4pzoz6",publicId:t.images,width:"300",className:"allPlantsShow"})),l.a.createElement("h4",null,t.name),e.checkingdate(t.created_at)?l.a.createElement("span",{className:"newPlant"},"NEW"):"");console.log(a);var n=e.props.query.toLowerCase();if(-1!==t.name.toLowerCase().indexOf(n))return a}))}}]),t}(n.Component),ee=X,te=a(66),ae=a(59),ne=(a(165),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).state={date_from:"",date_to:""},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"centerForm"},l.a.createElement("form",{onSubmit:this.props.onSubmit},l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",name:"name",value:this.props.plant.name,onChange:this.props.onTextChange})),l.a.createElement("br",null),l.a.createElement("label",null,"image:",l.a.createElement("input",{type:"file",name:"file",onChange:this.props.onFileChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Age:",l.a.createElement("input",{type:"text",name:"age",value:this.props.plant.age,onChange:this.props.onTextChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Status:",l.a.createElement("input",{type:"text",name:"status",value:this.props.plant.status,onChange:this.props.onTextChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Cost:",l.a.createElement("input",{type:"text",name:"cost",value:this.props.plant.cost,onChange:this.props.onTextChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Worth:",l.a.createElement("input",{type:"text",name:"worth",value:this.props.plant.worth,onChange:this.props.onTextChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Desciption:",l.a.createElement("textarea",{name:"description",value:this.props.plant.description,onChange:this.props.onTextChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Availability:",l.a.createElement("div",{class:"plantProfileBookingGrid"},l.a.createElement("span",null,l.a.createElement("p",null,"From:"),l.a.createElement(ae.a,{name:"date_from",todayButton:"Today",selected:this.props.date_from,selectsStart:!0,startDate:this.props.date_from,endDate:this.props.date_to,onChange:this.props.onDateFromChange,placeholderText:"Select a Start Date"})),l.a.createElement("span",null,l.a.createElement("p",null,"To:"),l.a.createElement(ae.a,{name:"date_to",todayButton:"Today",selected:this.props.date_to,selectsEnd:!0,startDate:this.props.date_from,endDate:this.props.date_to,onChange:this.props.onDateToChange,placeholderText:"Select an End Date"})))),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:this.props.buttonLabel})))}}]),t}(n.Component)),le=S("plants"),se=S("plants/"),re=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).state={},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleDateFromChange=e.handleDateFromChange.bind(Object(b.a)(e)),e.handleDateToChange=e.handleDateToChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e.handleFileChange=e.handleFileChange.bind(Object(b.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(te.a)({},e.target.name,e.target.value))}},{key:"handleDateFromChange",value:function(e){console.log("from"),this.setState({from:e})}},{key:"handleDateToChange",value:function(e){this.setState({to:e})}},{key:"handleFileChange",value:function(e){this.setState({file:e.target.files[0]})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.name,l=a.age,s=a.status,r=a.cost,o=a.worth,i=a.description,c=(a.from,a.to,{name:n,age:l,status:s,cost:r,worth:o,description:i,availability:{from:this.state.from,to:this.state.to}});console.log(c);var u="Bearer "+localStorage.getItem("jwt");O()({method:"post",url:le,headers:{Authorization:u},data:{plant:c}}).then(function(e){var a=new FormData;a.append("file",t.state.file),console.log(a),console.log(t.state.file);var n=se+e.data.id+".json";O()({method:"put",url:n,headers:{Authorization:u},data:a}).then(function(e){t.props.history.push("/plants")})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"centerForm"},l.a.createElement("h2",null," Create New Plant "),l.a.createElement(ne,{heading:"Create New Plant",onTextChange:this.handleChange,onFileChange:this.handleFileChange,onDateFromChange:this.handleDateFromChange,onDateToChange:this.handleDateToChange,date_from:this.state.from,date_to:this.state.to,onSubmit:this.handleSubmit,buttonLabel:"Add Plant",plant:{}}))}}]),t}(n.Component);function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ie(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(a,!0).forEach(function(t){Object(te.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}S("plants.json"),S("plants/");var ce=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={plant:{}},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleFileChange=a.handleFileChange.bind(Object(b.a)(a)),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState({plant:ie({},this.state.plant,Object(te.a)({},e.target.name,e.target.value))})}},{key:"handleFileChange",value:function(e){this.setState({file:e.target.files[0]})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=ie({},this.state.plant);console.log("saving plant",a);var n="Bearer "+localStorage.getItem("jwt");O()({method:"patch",url:S("plants/".concat(a.id)),headers:{Authorization:n},data:{plant:a}}).then(function(e){var l=new FormData;t.state.file&&l.append("file",t.state.file),O()({method:"put",url:S("plants/".concat(a.id)),data:l,headers:{Authorization:n}}).then(function(e){t.props.history.push("/plants/".concat(a.id))})}).catch(function(e){console.log(e)})}},{key:"componentDidMount",value:function(){var e=this,t="Bearer "+localStorage.getItem("jwt");O()({method:"get",url:S("plants/".concat(this.props.match.params.id)),headers:{Authorization:t}}).then(function(t){console.log(t),e.setState({plant:t.data})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"centerForm"},l.a.createElement("h2",null," Edit form "),l.a.createElement($.Image,{cloudName:"dto4pzoz6",publicId:this.state.plant.images,width:"300"}),l.a.createElement(ne,{onTextChange:this.handleChange,onFileChange:this.handleFileChange,onSubmit:this.handleSubmit,buttonLabel:"Plant Edited",plant:this.state.plant}))}}]),t}(n.Component),ue=function(e){function t(e){var a;Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={user:"",isLoaded:!1},console.log(Object(b.a)(a));var n=S("/api/users/"+a.props.match.params.id);localStorage.getItem("jwt"),function(){var e=this;O.a.get(n).then(function(t){e.setState({user:t.data})}).then(function(t){e.setState({isLoaded:!0})}).catch(function(e){return console.log("error",e)})}.bind(Object(b.a)(a))();return a.randomImg=a.randomImg.bind(Object(b.a)(a)),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"randomImg",value:function(){var e=[k.a,I.a,D.a,P.a,q.a,T.a,A.a,R.a,L.a],t=e.length;return e[Math.floor(Math.random()*t)]}},{key:"render",value:function(){var e=this.randomImg();this.state.user;return this.state.isLoaded?(console.log(this.state.user),l.a.createElement("div",{className:"userProfile"},l.a.createElement("div",{key:this.state.user.user.id},l.a.createElement("h2",null,this.state.user.user.name),l.a.createElement("img",{src:e,className:"profile"}),this.state.user.user.email,this.state.user.user.admin,this.state.user.user.is_seller),l.a.createElement("h3",null,"Plants:"),l.a.createElement("div",{className:"userAssociationGrid"},this.state.user.user.plants.map(function(e){return l.a.createElement("p",{className:"UserPlantOwn",key:e.id},l.a.createElement(o.b,{to:"/plants/"+e.id},l.a.createElement($.Image,{cloudName:"dto4pzoz6",publicId:e.images,width:"300",className:"allPlantsShow"})),l.a.createElement("h4",null,e.name))})),l.a.createElement("h3",null,"Bookings:"),l.a.createElement("div",{className:"userAssociationGrid"},this.state.user.user.bookings.map(function(e){return l.a.createElement("p",{className:"UserPlantBook",key:e.id},l.a.createElement(o.b,{to:"/plants/"+e.plant_id},l.a.createElement($.Image,{cloudName:"dto4pzoz6",publicId:e.plant.images,width:"300",className:"allPlantsShow"})),l.a.createElement("h4",null,e.plant.name),V()(e.from).format("MMM Do")," - ",V()(e.to).format("MMM Do"))})))):l.a.createElement("div",null,"loading...")}}]),t}(n.Component),me=function(e){function t(){var e;Object(h.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).state={users:[]};var a=S("api/users"),n="Bearer "+localStorage.getItem("jwt");(function(){var e=this;O()({method:"get",url:a,headers:{Authorization:n}}).then(function(t){e.setState({users:t.data})}).catch(function(e){return console.log("error",e)})}).bind(Object(b.a)(e))();return e.randomImg=e.randomImg.bind(Object(b.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"randomImg",value:function(){var e=[k.a,I.a,D.a,P.a,q.a,T.a,A.a,R.a,L.a],t=e.length;return e[Math.floor(Math.random()*t)]}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"profileGrid"},this.state.users.map(function(t){return l.a.createElement("div",{key:t.id},l.a.createElement("h2",null,l.a.createElement("img",{src:e.randomImg(),className:"profileSmall"})," ",l.a.createElement(o.b,{to:"/users/".concat(t.id)},t.name)),t.email,t.admin,t.is_seller)}))}}]),t}(n.Component),he=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"bookings"})}}]),t}(n.Component),de=function(e){function t(e){return Object(h.a)(this,t),Object(p.a)(this,Object(g.a)(t).call(this,e))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.rating;t++)e.push(1);for(;e.length<5;)e.push(0);return l.a.createElement("span",{className:"commentRating"},e.map(function(e){return 1===e?l.a.createElement("img",{className:"ratingImg",src:y.a}):0===e?l.a.createElement("img",{className:"ratingImg",src:v.a}):void 0}))}}]),t}(n.Component),pe=function(e){function t(e){var a;Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={user:"",plantInfo:[],availability:[],bookings:[],comments:[],comment:"",rating:"",startDate:new Date,endDate:new Date},a.handleChangeStart=a.handleChangeStart.bind(Object(b.a)(a)),a.handleChangeEnd=a.handleChangeEnd.bind(Object(b.a)(a)),a._handleSubmit=a._handleSubmit.bind(Object(b.a)(a)),a._handleSubmitComment=a._handleSubmitComment.bind(Object(b.a)(a)),a._handleChangeRating=a._handleChangeRating.bind(Object(b.a)(a)),a._handleChangeComment=a._handleChangeComment.bind(Object(b.a)(a));var n=a.props.match.params.id,l=S("plants/"+n+".json"),s=S("plants/"+n+"/availabilities"),r=S("plants/"+n+"/bookings"),o=S("plants/"+n+"/comments");!function e(){O.a.get(l).then(function(t){a.setState({plantInfo:t.data}),console.log(t.data[0]),setTimeout(e,4e4)})}();O.a.get(s).then(function(e){a.setState({availability:e.data}),console.log(e.data)});O.a.get(r).then(function(e){a.setState({bookings:e.data})});return function e(){O.a.get(o).then(function(e){a.setState({comments:e.data})}),setTimeout(e,4e3)}(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleChangeStart",value:function(e){this.setState({startDate:e})}},{key:"handleChangeEnd",value:function(e){this.setState({endDate:e})}},{key:"_handleSubmit",value:function(e){e.preventDefault();var t=this.state.startDate,a=this.state.endDate;console.log("from "+t),console.log("to "+a);var n="Bearer "+localStorage.getItem("jwt");O()({method:"post",url:S("plants/".concat(this.props.match.params.id,"/bookings")),headers:{Authorization:n},data:{booking:{from:t,to:a}}}).then(function(){return window.location.reload()})}},{key:"_handleSubmitComment",value:function(e){e.preventDefault();var t="Bearer "+localStorage.getItem("jwt");O()({method:"post",url:S("plants/".concat(this.props.match.params.id,"/comments")),headers:{Authorization:t},data:{comment:{comment:this.state.comment,rating:this.state.rating}}}).then(function(){return window.location.reload()})}},{key:"_handleChangeComment",value:function(e){this.setState({comment:e.target.value})}},{key:"_handleChangeRating",value:function(e){this.setState({rating:e.target.value})}},{key:"checkingdate",value:function(){var e=this.state.plantInfo.created_at;console.log(e);if(V()().format("l")==V()(e).format("l"))return"New"}},{key:"componentDidMount",value:function(){var e=this;if(localStorage.getItem("jwt")){var t="Bearer "+localStorage.getItem("jwt");O()({method:"get",url:S("/current_user"),headers:{Authorization:t}}).then(function(t){e.setState({user:t.data}),console.log(e.state.user)}).catch(function(e){return console.log("error",e)})}}},{key:"render",value:function(){var e=[],t=(this.state.availability.map(function(t){for(var a=new Date(t.from),n=new Date(t.to),l=a;l<=n;l.setDate(l.getDate()+1))e.push(new Date(l))}),[]);this.state.bookings.map(function(e){for(var a=new Date(e.from),n=new Date(e.to),l=a;l<=n;l.setDate(l.getDate()+1))t.push(new Date(l))});var a=[{bookedDates:t}];return l.a.createElement("div",null,l.a.createElement("h1",{className:"plantProfileTitle"},this.state.plantInfo.name),l.a.createElement("div",{className:"plantProfileGrid"},l.a.createElement("div",{className:"plantProfileImage"},l.a.createElement($.Image,{cloudName:"dto4pzoz6",publicId:this.state.plantInfo.images,width:"300"})),l.a.createElement("div",{className:"plantProfileStats"},l.a.createElement("p",null,l.a.createElement("span",{className:"plantProfileBold"},"Age: "),this.state.plantInfo.age),l.a.createElement("p",null,l.a.createElement("span",{className:"plantProfileBold"},"Cost: "),"$",this.state.plantInfo.cost),l.a.createElement("p",null,l.a.createElement("span",{className:"plantProfileBold"},"Worth: "),"$",this.state.plantInfo.worth),l.a.createElement("p",null,this.checkingdate()),l.a.createElement("p",null,l.a.createElement("span",{className:"plantProfileBold"},"Created "),V()(this.state.plantInfo.created_at).format("l")),l.a.createElement("p",null,l.a.createElement("span",{className:"plantProfileBold"},"Description: "),this.state.plantInfo.description)),localStorage.getItem("jwt")?l.a.createElement("div",{className:"plantProfileBookingDates"},l.a.createElement("h3",null,"Book this plant:"),l.a.createElement("div",{class:"plantProfileBookingGrid"},l.a.createElement("span",null,l.a.createElement("p",null,"From:"),l.a.createElement(ae.a,{todayButton:"Today",selected:this.state.startDate,selectsStart:!0,startDate:this.state.startDate,endDate:this.state.endDate,onChange:this.handleChangeStart,minDate:e[0],maxDate:e[e.length-1],highlightDates:a,excludeDates:t,placeholderText:"Select a Start Date"})),l.a.createElement("span",null,l.a.createElement("p",null,"To:"),l.a.createElement(ae.a,{todayButton:"Today",selected:this.state.endDate,selectsEnd:!0,startDate:this.state.startDate,endDate:this.state.endDate,onChange:this.handleChangeEnd,minDate:e[0],maxDate:e[e.length-1],highlightDates:a,excludeDates:t,placeholderText:"Select an End Date"}))),l.a.createElement("form",{onSubmit:this._handleSubmit},l.a.createElement("input",{type:"submit",value:"Book Now"}))):""),l.a.createElement("div",{className:"commentSection"},l.a.createElement("h3",null,"Comments"),this.state.comments.map(function(e){return l.a.createElement("div",{className:"comment"},l.a.createElement("p",null,l.a.createElement(de,{rating:e.rating})," ",l.a.createElement("span",{className:"commentTime"},"- ",l.a.createElement(o.b,{to:"/users/".concat(e.user.id)},e.user.name)," on ",V()(e.updated_at).format("LLL"))),l.a.createElement("p",null,e.comment))}),localStorage.getItem("jwt")?l.a.createElement("div",null,l.a.createElement("h3",null,"Make a comment"),l.a.createElement("form",{onSubmit:this._handleSubmitComment},"Rating:",l.a.createElement("select",{onChange:this._handleChangeRating,required:!0},l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5",selected:"selected"},"5")),"Comment:",l.a.createElement("input",{type:"textarea",onChange:this._handleChangeComment,required:!0}),l.a.createElement("input",{type:"submit",value:"submit"}))):""),this.state.user.id===this.state.plantInfo.user_id?l.a.createElement("div",{className:"plantProfileButtonArea"},l.a.createElement(o.b,{to:"/plants/"+this.props.match.params.id+"/edit"},"Edit Plant")):"")}}]),t}(n.Component),ge=a(186),be=a.n(ge),fe=a(187),Ee=a.n(fe),ve=a(188),we=a.n(ve),ye=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).state={score:0,index:0,isgamefinished:!1,quizStart:!1,quizz:[{question:"The first type of plant to evolve on Earth was?",answers:["Algae","Fern"],correct:1},{question:"How often should I change my plant\u2019s potting mix?",answers:["Every Month","In one or two years"],correct:2},{question:"When to water the indoor plants?",answers:["Every day","As required"],correct:2},{question:"An extract from which species of succulent is used to produce Tequila?",answers:["Agave","Aloe"],correct:1},{question:"What do plants need to grow and survive?",answers:["Sunlight","Sand"],correct:1},{question:"What is the best way to make sure that a plant grows to its full and healthy height?",answers:["Sing it a song","Water it as required"],correct:2},{question:"Which seed will grow best?",answers:["A seed planted in wet soil","Water planted seed every day"],correct:1},{question:"Which colour light is the most important for plant growth and flowering?",answers:["Red and green","Blue and red"],correct:1}]},e.handleClick=e.handleClick.bind(Object(b.a)(e)),e.handleClick1=e.handleClick1.bind(Object(b.a)(e)),e.handleClick2=e.handleClick2.bind(Object(b.a)(e)),e.handleClickStart=e.handleClickStart.bind(Object(b.a)(e)),e.handleReset=e.handleReset.bind(Object(b.a)(e)),e.displayPlants=e.displayPlants.bind(Object(b.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleClickStart",value:function(){this.setState({quizStart:!0})}},{key:"handleClick",value:function(e){console.log("clicked",e),this.state.quizz[this.state.index].correct===e&&this.setState({score:this.state.score+1}),this.state.quizz.length-1<=this.state.index?this.setState({isgamefinished:!0}):this.setState({index:this.state.index+1})}},{key:"handleClick1",value:function(){this.handleClick(1)}},{key:"handleClick2",value:function(){this.handleClick(2)}},{key:"handleReset",value:function(){console.log("clicked"),this.setState({index:0,score:0,isgamefinished:!1,quizStart:!1})}},{key:"displayPlants",value:function(e){return e>80?be.a:e>35?Ee.a:we.a}},{key:"render",value:function(){return l.a.createElement("div",{className:"backgroundimg"},l.a.createElement("h1",{className:"title"}," Quizz about Plants "),l.a.createElement("div",{className:this.state.quizStart?"hidden quizEndDiv":"quizEndDiv"},l.a.createElement("h2",{className:"subtitle"},"Do you have the green thumbs and know-how to ace this quiz on plants and flowers? Challenge yourself to get 100%"),l.a.createElement("button",{className:"answerBtn",onClick:this.handleClickStart},"Start the Quiz")),l.a.createElement("div",{className:this.state.isgamefinished||!this.state.quizStart?"hidden":""},l.a.createElement("h3",{className:"subtitle"},this.state.quizz[this.state.index].question),l.a.createElement("button",{className:"answerBtn",onClick:this.handleClick1},this.state.quizz[this.state.index].answers[0]),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"answerBtn",onClick:this.handleClick2},this.state.quizz[this.state.index].answers[1])),l.a.createElement("div",{className:this.state.isgamefinished?"":"hidden"},l.a.createElement("h1",null,"your knowledge on plants is: ",(this.state.score/this.state.quizz.length*100).toFixed(2),"%"),l.a.createElement("img",{className:"finalImg",src:this.displayPlants(this.state.score/this.state.quizz.length*100)}),l.a.createElement("button",{className:"answerBtn",onClick:this.handleReset},"Reset")))}}]),t}(n.Component),je=S("/plants?name=Venus%20Fly%20Trap"),Oe=S("/plants?name=Maranta"),Se=S("/plants?name=Micro%20Lotus"),Ce=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).handleResult=function(t){t?e.setState(function(e){return{correct:e.correct+1,count:e.count+1}}):e.setState(function(e){return{inCorrect:e.inCorrect+1,count:e.count+1}});O.a.get(je).then(function(t){e.setState({venus:t.data}),console.log(t.data)});O.a.get(Oe).then(function(t){e.setState({maranta:t.data}),console.log(t.data)});O.a.get(Se).then(function(t){e.setState({lotus:t.data}),console.log(t.data)})},e.state={data:[{question:"Do you prefer a cosy night in or an adventourous night out?",options:["A cosy night in","Adventourous night out"],answer:"A cosy night in"},{question:"Which season do you prefer?",options:["Summer","Winter"],answer:"Summer"},{question:"Which of the following do you thing better suit you?",options:["Charming","Misterious"],answer:"Misterious"},{question:"Do you like standing out from the crowd?",options:["Yes","No"],answer:"Yes"},{question:"Do you like cuddles?",options:["Yes","No"],answer:"No"}],count:0,correct:0,inCorrect:0,plantName2:"Venus Flytrap",plantName1:"Maranta",venus:[],maranta:[],lotus:[]},e.whatPlant=e.whatPlant.bind(Object(b.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"whatPlant",value:function(){return 3===this.state.correct&&5===this.state.count?l.a.createElement("div",null," ",l.a.createElement("h1",null," Your spirit plant is : ",this.state.plantName1," ")," ",l.a.createElement("p",null," You are protective, friendly, and people can count on you to get things done! "),l.a.createElement("p",null," Are you interested in renting it out? Click on the picture below: "),l.a.createElement(o.b,{to:"/plants/"+this.state.maranta.id},l.a.createElement($.Image,{cloudName:"dto4pzoz6",publicId:this.state.maranta.images,width:"300",className:"allPlantsShow"}))):2===this.state.correct&&5===this.state.count?l.a.createElement("div",null," ",l.a.createElement("h2",null," Your spirit plant is: ",this.state.plantName2," "),l.a.createElement("p",null," You're known for being misterious, extremely clever, and a bit shy, too! ")," ",l.a.createElement("p",null,"Are you interested in renting it out? Click on the picture below:"),l.a.createElement(o.b,{to:"/plants/"+this.state.venus.id},l.a.createElement($.Image,{cloudName:"dto4pzoz6",publicId:this.state.venus.images,width:"300",className:"allPlantsShow"}))):4!==this.state.correct&&1!==this.state.correct||5!==this.state.count?void 0:l.a.createElement("div",null," ",l.a.createElement("h2",null,"Your spirit plant is : You are a lotus flower! ")," ",l.a.createElement("p",null,"You're beautiful inside and out and known to be quite charismatic and wise! ")," ",l.a.createElement("p",null,"Are you interested in renting it out? Click on the picture below: "),l.a.createElement(o.b,{to:"/plants/"+this.state.lotus.id},l.a.createElement($.Image,{cloudName:"dto4pzoz6",publicId:this.state.lotus.images,width:"300",className:"allPlantsShow"})))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{class:"quiztest"}," What is your spirit plant? "),l.a.createElement("h3",{class:"quiztest"}," Answer questions below to find out: "),this.state.count<5&&l.a.createElement(ke,{question:this.state.data[this.state.count].question,options:this.state.data[this.state.count].options,answer:this.state.data[this.state.count].answer,correct:this.state.correct,inCorrect:this.state.inCorrect,handleResult:this.handleResult}),this.whatPlant())}}]),t}(l.a.Component),ke=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).handleClick=function(e){e.target.value===a.props.answer?a.props.handleResult(!0):a.props.handleResult(!1)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(e){var t=this;return l.a.createElement("div",null,l.a.createElement("h2",null,this.props.question),this.props.options.map(function(e){return l.a.createElement("button",{className:"answerBtn",onClick:t.handleClick,value:e},e)}))}}]),t}(l.a.Component),_e=Ce,Ie=l.a.createElement(o.a,null,l.a.createElement(Y,null),l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:m}),l.a.createElement(i.a,{exact:!0,path:"/plants",component:ee}),l.a.createElement(i.a,{exact:!0,path:"/plants/new",component:re}),l.a.createElement(i.a,{exact:!0,path:"/plants/:id",component:pe}),l.a.createElement(i.a,{exact:!0,path:"/plants/:id/edit",component:ce}),l.a.createElement(i.a,{exact:!0,path:"/users/:id",component:ue}),l.a.createElement(i.a,{exact:!0,path:"/users",component:me}),l.a.createElement(i.a,{exact:!0,path:"/bookings",component:he}),l.a.createElement(i.a,{exact:!0,path:"/quiz1",component:ye}),l.a.createElement(i.a,{exact:!0,path:"/quiztest",component:_e}),l.a.createElement(i.a,{exact:!0,path:"/SignUp",component:U}),localStorage.getItem("jwt")?l.a.createElement(i.a,{exact:!0,path:"/SignOut",component:Q}):l.a.createElement(i.a,{exact:!0,path:"/SignIn",component:H})))),l.a.createElement(G,null));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Ie,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},47:function(e,t,a){e.exports=a.p+"static/media/boy-1.8547ceae.svg"},48:function(e,t,a){e.exports=a.p+"static/media/boy.eae74d36.svg"},49:function(e,t,a){e.exports=a.p+"static/media/girl-1.038dbd32.svg"},50:function(e,t,a){e.exports=a.p+"static/media/girl.cd63945d.svg"},51:function(e,t,a){e.exports=a.p+"static/media/man-1.dabcdaa2.svg"},52:function(e,t,a){e.exports=a.p+"static/media/man-2.333fa0cb.svg"},53:function(e,t,a){e.exports=a.p+"static/media/man-3.fcfc134f.svg"},54:function(e,t,a){e.exports=a.p+"static/media/man-4.bef3aabb.svg"},55:function(e,t,a){e.exports=a.p+"static/media/man.93ef09bc.svg"},64:function(e,t,a){e.exports=a.p+"static/media/leaf_dark.173f02d7.png"},65:function(e,t,a){e.exports=a.p+"static/media/leaf_green.0ed838a1.png"}},[[189,1,2]]]);
//# sourceMappingURL=main.10ab4be4.chunk.js.map