(window["webpackJsonpgreenify-react"]=window["webpackJsonpgreenify-react"]||[]).push([[0],{166:function(e,t,a){e.exports=a.p+"static/media/plant_feature.841213cf.png"},187:function(e,t,a){e.exports=a(338)},192:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},199:function(e,t,a){},338:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(46),o=a.n(r),s=(a(192),a(9)),i=a(40),c=(a(193),a(166)),u=a.n(c);a(194);var m=function(){return l.a.createElement("div",null,l.a.createElement("h1",{class:"greenify-text"},"Greenify"),l.a.createElement("img",{src:u.a,className:"featureImage"}))},h=a(4),d=a(5),p=a(7),b=a(6),g=a(3),f=a(8),v=a(55),E=a.n(v),j=a(56),O=a.n(j),y=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(b.a)(t).call(this))).state={image:""},e._handleHover=e._handleHover.bind(Object(g.a)(e)),e._handleOut=e._handleOut.bind(Object(g.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"_handleHover",value:function(){console.log("hover"),this.setState({image:O.a})}},{key:"_handleOut",value:function(){console.log("out"),this.setState({image:E.a})}},{key:"render",value:function(){return l.a.createElement("div",{className:"nav"},l.a.createElement(s.b,{to:"/",className:"headerTitle"},l.a.createElement("h1",{onMouseOver:this._handleHover,onMouseOut:this._handleOut},"greenify",l.a.createElement("img",{src:E.a,className:"logo nohover"}),l.a.createElement("img",{src:O.a,className:"logo hover"}))),l.a.createElement("div",{className:"links"},l.a.createElement(s.b,{to:"/"},"Home"),l.a.createElement(s.b,{to:"/plants"},"Plants"),l.a.createElement(s.b,{to:"/plants/new"},"Add Plant"),l.a.createElement(s.b,{to:"/quiz"},"Quiz"),l.a.createElement(s.b,{to:"/users"},"Users"),localStorage.getItem("jwt")?l.a.createElement(s.b,{to:"/SignOut"},"Sign Out"):l.a.createElement("span",null,l.a.createElement(s.b,{to:"/SignIn"},"Sign In")," or",l.a.createElement(s.b,{to:"/SignUp"}," Sign Up"))))}}]),t}(n.Component),w=(a(199),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(b.a)(t).call(this))).state={},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("span",null,"\xa9 greenify 2019"),l.a.createElement("div",{className:"footerPos"},l.a.createElement("div",{class:"plantContainer"},l.a.createElement("div",{class:"plant"},l.a.createElement("div",{class:"branch"}),l.a.createElement("div",{class:"branch"}),l.a.createElement("div",{class:"branch"}),l.a.createElement("div",{class:"branch"}),l.a.createElement("div",{class:"branch"}),l.a.createElement("div",{class:"branch"})))))}}]),t}(n.Component)),S=a(10),C=a.n(S),_=function(e){return"https://greenify-your-life.herokuapp.com/"+e},k=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(b.a)(t).call(this))).state={name:"",email:"",password:"",confirm_password:"",seller:!1},e._handleSumbit=e._handleSumbit.bind(Object(g.a)(e)),e._handleInputName=e._handleInputName.bind(Object(g.a)(e)),e._handleInputEmail=e._handleInputEmail.bind(Object(g.a)(e)),e._handleInputPassword=e._handleInputPassword.bind(Object(g.a)(e)),e._handleInputPasswordConfirmation=e._handleInputPasswordConfirmation.bind(Object(g.a)(e)),e._handleInputSeller=e._handleInputSeller.bind(Object(g.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"_handleSumbit",value:function(e){var t=this;e.preventDefault();var a=_("/api/users");C.a.post(a,{user:{name:this.state.name,email:this.state.email,password:this.state.password,password_confirmation:this.state.confirm_password,is_seller:this.state.seller}}).then(function(e){console.log(e);var a=_("api/user_token");C.a.post(a,{auth:{email:t.state.email,password:t.state.password}}).then(function(e){console.log(e.data),console.log(window),localStorage.setItem("jwt",e.data.jwt),t.props.history.push("/"),window.location.reload()}).catch(function(e){return console.log("error",e)})})}},{key:"_handleInputName",value:function(e){this.setState({name:e.target.value})}},{key:"_handleInputEmail",value:function(e){this.setState({email:e.target.value})}},{key:"_handleInputPassword",value:function(e){this.setState({password:e.target.value})}},{key:"_handleInputPasswordConfirmation",value:function(e){this.setState({confirm_password:e.target.value})}},{key:"_handleInputSeller",value:function(e){this.setState({seller:!this.state.seller})}},{key:"render",value:function(){return l.a.createElement("div",{className:"centerForm"},l.a.createElement("form",{onSubmit:this._handleSumbit},l.a.createElement("label",{htmlFor:"name"},"Name:",l.a.createElement("input",{type:"text",id:"name",onChange:this._handleInputName})),l.a.createElement("label",{htmlFor:"email"},"Email:",l.a.createElement("input",{type:"email",id:"email",onChange:this._handleInputEmail})),l.a.createElement("label",{htmlFor:"password"},"Password:",l.a.createElement("input",{type:"password",id:"password",onChange:this._handleInputPassword})),l.a.createElement("label",{htmlFor:"confirm_password"},"Confirm Password:",l.a.createElement("input",{type:"password",id:"confirm_password",onChange:this._handleInputPasswordConfirmation})),l.a.createElement("label",{htmlFor:"seller"},"Seller:",l.a.createElement("input",{type:"checkbox",id:"seller",onChange:this._handleInputSeller})),l.a.createElement("input",{type:"submit",value:"Create User"})))}}]),t}(n.Component),I=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(b.a)(t).call(this))).state={name:"",email:"",password:""},e._handleSumbit=e._handleSumbit.bind(Object(g.a)(e)),e._handleInputEmail=e._handleInputEmail.bind(Object(g.a)(e)),e._handleInputPassword=e._handleInputPassword.bind(Object(g.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"_handleSumbit",value:function(e){var t=this;e.preventDefault();var a=_("api/user_token");C.a.post(a,{auth:{email:this.state.email,password:this.state.password}}).then(function(e){console.log(e.data),console.log(window),localStorage.setItem("jwt",e.data.jwt),t.props.history.push("/"),window.location.reload()}).catch(function(e){return console.log("error",e)})}},{key:"_handleInputEmail",value:function(e){this.setState({email:e.target.value})}},{key:"_handleInputPassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"centerForm"},l.a.createElement("form",{onSubmit:this._handleSumbit},l.a.createElement("label",{htmlFor:"email"},"Email:",l.a.createElement("input",{type:"email",id:"email",onChange:this._handleInputEmail})),l.a.createElement("label",{htmlFor:"password"},"Password:",l.a.createElement("input",{type:"password",id:"password",onChange:this._handleInputPassword})),l.a.createElement("input",{type:"submit",value:"Sign In"})))}}]),t}(n.Component),D=function(){return localStorage.removeItem("jwt"),window.location.reload(),l.a.createElement(i.a,{to:"/signin"})},N=a(39),x=_("plants.json"),P=function(e){function t(){var e;Object(h.a)(this,t),(e=Object(p.a)(this,Object(b.a)(t).call(this))).state={plants:[],query:""},e._handleSubmit=e._handleSubmit.bind(Object(g.a)(e)),e._handleInputSearch=e._handleInputSearch.bind(Object(g.a)(e));return function t(){C.a.get(x).then(function(a){e.setState({plants:a.data}),console.log(e.state.plants),setTimeout(t,4e4)})}(),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"_handleSubmit",value:function(e){e.preventDefault(),this.setState({query:""}),console.log("click")}},{key:"_handleInputSearch",value:function(e){this.setState({query:e.target.value}),console.log(e.target.value)}},{key:"render",value:function(){return l.a.createElement("div",{className:"centerForm"},l.a.createElement("h2",null,"This is a plant area. See our plants:"),l.a.createElement("form",{onSubmit:this._handleSubmit},l.a.createElement("label",{htmlFor:"query"},l.a.createElement("p",null,"Search:"),l.a.createElement("input",{type:"search",id:"query",onInput:this._handleInputSearch})),l.a.createElement("input",{type:"submit",value:"Filter"})),l.a.createElement(B,{plants:this.state.plants,query:this.state.query}))}}]),t}(n.Component),B=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"allPlantsGrid"},this.props.plants.map(function(t){var a=l.a.createElement("p",{key:t.id},t.name,l.a.createElement(s.b,{to:"/plants/"+t.id},l.a.createElement(N.Image,{cloudName:"dto4pzoz6",publicId:t.images,width:"300",className:"allPlantsShow"})));console.log(a);var n=e.props.query.toLowerCase();if(-1!==t.name.toLowerCase().indexOf(n))return a}))}}]),t}(n.Component),F=P,q=a(57),T=a(118),A=a.n(T),z=a(50),L=(a(165),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(b.a)(t).call(this))).state={date_from:"",date_to:""},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"centerForm"},l.a.createElement("form",{onSubmit:this.props.onSubmit},l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",name:"name",value:this.props.plant.name,onChange:this.props.onTextChange})),l.a.createElement("br",null),l.a.createElement("label",null,"image:",l.a.createElement("input",{type:"file",name:"file",onChange:this.props.onFileChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Age:",l.a.createElement("input",{type:"text",name:"age",value:this.props.plant.age,onChange:this.props.onTextChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Status:",l.a.createElement("input",{type:"text",name:"status",value:this.props.plant.status,onChange:this.props.onTextChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Cost:",l.a.createElement("input",{type:"text",name:"cost",value:this.props.plant.cost,onChange:this.props.onTextChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Worth:",l.a.createElement("input",{type:"text",name:"worth",value:this.props.plant.worth,onChange:this.props.onTextChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Desciption:",l.a.createElement("textarea",{name:"description",value:this.props.plant.description,onChange:this.props.onTextChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Availability:",l.a.createElement("div",{class:"plantProfileBookingGrid"},l.a.createElement("span",null,l.a.createElement("p",null,"From:"),l.a.createElement(z.a,{name:"date_from",todayButton:"Today",selected:this.props.date_from,selectsStart:!0,startDate:this.props.date_from,endDate:this.props.date_to,onChange:this.props.onDateFromChange,placeholderText:"Select a Start Date"})),l.a.createElement("span",null,l.a.createElement("p",null,"To:"),l.a.createElement(z.a,{name:"date_to",todayButton:"Today",selected:this.props.date_to,selectsEnd:!0,startDate:this.props.date_from,endDate:this.props.date_to,onChange:this.props.onDateToChange,placeholderText:"Select an End Date"})))),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:this.props.buttonLabel})))}}]),t}(n.Component)),H=_("plants"),M=_("plants/"),W=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(b.a)(t).call(this))).state={},e.handleChange=e.handleChange.bind(Object(g.a)(e)),e.handleDateFromChange=e.handleDateFromChange.bind(Object(g.a)(e)),e.handleDateToChange=e.handleDateToChange.bind(Object(g.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(g.a)(e)),e.handleFileChange=e.handleFileChange.bind(Object(g.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(q.a)({},e.target.name,e.target.value))}},{key:"handleDateFromChange",value:function(e){console.log("from"),this.setState({date_from:e})}},{key:"handleDateToChange",value:function(e){this.setState({date_to:e})}},{key:"handleFileChange",value:function(e){this.setState({file:e.target.files[0]})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n={name:a.name,age:a.age,status:a.status,cost:a.cost,worth:a.worth,description:a.description},l="Bearer "+localStorage.getItem("jwt");C()({method:"post",url:H,headers:{Authorization:l},data:{plant:n}}).then(function(e){var a=new FormData;a.append("file",t.state.file),console.log(a),console.log(t.state.file);var n=M+e.data.id+".json";C()({method:"put",url:n,headers:{Authorization:l},data:a}).then(function(e){t.props.history.push("/plants")})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"centerForm"},l.a.createElement("h2",null," Create New Plant "),l.a.createElement(L,{heading:"Create New Plant",onTextChange:this.handleChange,onFileChange:this.handleFileChange,onDateFromChange:this.handleDateFromChange,onDateToChange:this.handleDateToChange,date_from:this.state.date_from,date_to:this.state.date_to,onSubmit:this.handleSubmit,buttonLabel:"Add Plant",plant:{}}))}}]),t}(n.Component);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach(function(t){Object(q.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}_("plants.json"),_("plants/");var Q=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={plant:{}},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(a)),a.handleFileChange=a.handleFileChange.bind(Object(g.a)(a)),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState({plant:R({},this.state.plant,Object(q.a)({},e.target.name,e.target.value))})}},{key:"handleFileChange",value:function(e){this.setState({file:e.target.files[0]})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=R({},this.state.plant);console.log("saving plant",a);var n="Bearer "+localStorage.getItem("jwt");C()({method:"patch",url:_("plants/".concat(a.id)),headers:{Authorization:n},data:{plant:a}}).then(function(e){var l=new FormData;t.state.file&&l.append("file",t.state.file),C()({method:"put",url:_("plants/".concat(a.id)),data:l,headers:{Authorization:n}}).then(function(e){t.props.history.push("/plants/".concat(a.id))})}).catch(function(e){console.log(e)})}},{key:"componentDidMount",value:function(){var e=this,t="Bearer "+localStorage.getItem("jwt");C()({method:"get",url:_("plants/".concat(this.props.match.params.id)),headers:{Authorization:t}}).then(function(t){console.log(t),e.setState({plant:t.data})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"centerForm"},l.a.createElement("h2",null," Edit form "),l.a.createElement(N.Image,{cloudName:"dto4pzoz6",publicId:this.state.plant.images,width:"300"}),l.a.createElement(L,{onTextChange:this.handleChange,onFileChange:this.handleFileChange,onSubmit:this.handleSubmit,buttonLabel:"Plant Edited",plant:this.state.plant}))}}]),t}(n.Component),U=a(84),$=a.n(U),J=a(85),V=a.n(J),Y=a(86),K=a.n(Y),X=a(87),Z=a.n(X),ee=a(88),te=a.n(ee),ae=a(89),ne=a.n(ae),le=a(90),re=a.n(le),oe=a(91),se=a.n(oe),ie=a(92),ce=a.n(ie),ue=function(e){function t(e){var a;Object(h.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={user:""},console.log(Object(g.a)(a));var n=_("/api/users/"+a.props.match.params.id);localStorage.getItem("jwt"),function(){var e=this;C.a.get(n).then(function(t){e.setState({user:t.data})}).catch(function(e){return console.log("error",e)})}.bind(Object(g.a)(a))();return a.randomImg=a.randomImg.bind(Object(g.a)(a)),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"randomImg",value:function(){var e=[$.a,V.a,K.a,Z.a,te.a,ne.a,re.a,se.a,ce.a],t=e.length;return e[Math.floor(Math.random()*t)]}},{key:"render",value:function(){var e=this.randomImg();this.state.user;return l.a.createElement("div",{className:"userProfile"},l.a.createElement("div",{key:this.state.user.id},l.a.createElement("h2",null,this.state.user.name),l.a.createElement("img",{src:e,className:"profile"}),this.state.user.email,this.state.user.admin,this.state.user.is_seller))}}]),t}(n.Component),me=function(e){function t(){var e;Object(h.a)(this,t),(e=Object(p.a)(this,Object(b.a)(t).call(this))).state={users:[]};var a=_("api/users"),n="Bearer "+localStorage.getItem("jwt");(function(){var e=this;C()({method:"get",url:a,headers:{Authorization:n}}).then(function(t){e.setState({users:t.data})}).catch(function(e){return console.log("error",e)})}).bind(Object(g.a)(e))();return e.randomImg=e.randomImg.bind(Object(g.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"randomImg",value:function(){var e=[$.a,V.a,K.a,Z.a,te.a,ne.a,re.a,se.a,ce.a],t=e.length;return e[Math.floor(Math.random()*t)]}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"profileGrid"},this.state.users.map(function(t){return l.a.createElement("div",{key:t.id},l.a.createElement("h2",null,l.a.createElement("img",{src:e.randomImg(),className:"profileSmall"})," ",l.a.createElement(s.b,{to:"/users/".concat(t.id)},t.name)),t.email,t.admin,t.is_seller)}))}}]),t}(n.Component),he=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"bookings"})}}]),t}(n.Component),de=function(e){function t(e){return Object(h.a)(this,t),Object(p.a)(this,Object(b.a)(t).call(this,e))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.rating;t++)e.push(1);for(;e.length<5;)e.push(0);return l.a.createElement("span",{className:"commentRating"},e.map(function(e){return 1===e?l.a.createElement("img",{className:"ratingImg",src:O.a}):0===e?l.a.createElement("img",{className:"ratingImg",src:E.a}):void 0}))}}]),t}(n.Component),pe=function(e){function t(e){var a;Object(h.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={plantInfo:[],availability:[],bookings:[],comments:[],comment:"",rating:"",startDate:new Date,endDate:new Date},a.handleChangeStart=a.handleChangeStart.bind(Object(g.a)(a)),a.handleChangeEnd=a.handleChangeEnd.bind(Object(g.a)(a)),a._handleSubmit=a._handleSubmit.bind(Object(g.a)(a)),a._handleSubmitComment=a._handleSubmitComment.bind(Object(g.a)(a)),a._handleChangeRating=a._handleChangeRating.bind(Object(g.a)(a)),a._handleChangeComment=a._handleChangeComment.bind(Object(g.a)(a));var n=a.props.match.params.id,l=_("plants/"+n+".json"),r=_("plants/"+n+"/availabilities"),o=_("plants/"+n+"/bookings"),s=_("plants/"+n+"/comments");!function e(){C.a.get(l).then(function(t){a.setState({plantInfo:t.data}),console.log(t.data[0]),setTimeout(e,4e4)})}();C.a.get(r).then(function(e){a.setState({availability:e.data}),console.log(e.data)});C.a.get(o).then(function(e){a.setState({bookings:e.data})});return function e(){C.a.get(s).then(function(e){a.setState({comments:e.data})}),setTimeout(e,4e3)}(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleChangeStart",value:function(e){this.setState({startDate:e})}},{key:"handleChangeEnd",value:function(e){this.setState({endDate:e})}},{key:"_handleSubmit",value:function(e){e.preventDefault();var t=this.state.startDate,a=this.state.endDate;console.log("from "+t),console.log("to "+a);var n="Bearer "+localStorage.getItem("jwt");C()({method:"post",url:_("plants/".concat(this.props.match.params.id,"/bookings")),headers:{Authorization:n},data:{booking:{from:t,to:a}}}).then(function(){return window.location.reload()})}},{key:"_handleSubmitComment",value:function(e){e.preventDefault();var t="Bearer "+localStorage.getItem("jwt");C()({method:"post",url:_("plants/".concat(this.props.match.params.id,"/comments")),headers:{Authorization:t},data:{comment:{comment:this.state.comment,rating:this.state.rating}}}).then(function(){return window.location.reload()})}},{key:"_handleChangeComment",value:function(e){this.setState({comment:e.target.value})}},{key:"_handleChangeRating",value:function(e){this.setState({rating:e.target.value})}},{key:"render",value:function(){var e=[],t=(this.state.availability.map(function(t){for(var a=new Date(t.from),n=new Date(t.to),l=a;l<=n;l.setDate(l.getDate()+1))e.push(new Date(l))}),[]);this.state.bookings.map(function(e){for(var a=new Date(e.from),n=new Date(e.to),l=a;l<=n;l.setDate(l.getDate()+1))t.push(new Date(l))});var a=[{bookedDates:t}];return l.a.createElement("div",null,l.a.createElement("h1",{className:"plantProfileTitle"},this.state.plantInfo.name),l.a.createElement("div",{className:"plantProfileGrid"},l.a.createElement("div",{className:"plantProfileImage"},l.a.createElement(N.Image,{cloudName:"dto4pzoz6",publicId:this.state.plantInfo.images,width:"300"})),l.a.createElement("div",{className:"plantProfileStats"},l.a.createElement("p",null,l.a.createElement("span",{className:"plantProfileBold"},"Age: "),this.state.plantInfo.age),l.a.createElement("p",null,l.a.createElement("span",{className:"plantProfileBold"},"Cost: "),"$",this.state.plantInfo.cost),l.a.createElement("p",null,l.a.createElement("span",{className:"plantProfileBold"},"Worth: "),"$",this.state.plantInfo.worth),l.a.createElement("p",null,l.a.createElement("span",{className:"plantProfileBold"},"Description: "),this.state.plantInfo.description)),l.a.createElement("div",{className:"plantProfileBookingDates"},l.a.createElement("h3",null,"Book this plant:"),l.a.createElement("div",{class:"plantProfileBookingGrid"},l.a.createElement("span",null,l.a.createElement("p",null,"From:"),l.a.createElement(z.a,{todayButton:"Today",selected:this.state.startDate,selectsStart:!0,startDate:this.state.startDate,endDate:this.state.endDate,onChange:this.handleChangeStart,minDate:e[0],maxDate:e[e.length-1],highlightDates:a,excludeDates:t,placeholderText:"Select a Start Date"})),l.a.createElement("span",null,l.a.createElement("p",null,"To:"),l.a.createElement(z.a,{todayButton:"Today",selected:this.state.endDate,selectsEnd:!0,startDate:this.state.startDate,endDate:this.state.endDate,onChange:this.handleChangeEnd,minDate:e[0],maxDate:e[e.length-1],highlightDates:a,excludeDates:t,placeholderText:"Select an End Date"}))),l.a.createElement("form",{onSubmit:this._handleSubmit},l.a.createElement("input",{type:"submit",value:"Book Now"})))),l.a.createElement("div",{className:"commentSection"},l.a.createElement("h3",null,"Comments"),this.state.comments.map(function(e){return l.a.createElement("div",{className:"comment"},l.a.createElement("p",null,l.a.createElement(de,{rating:e.rating})," ",l.a.createElement("span",{className:"commentTime"},"- ",l.a.createElement(s.b,{to:"/users/".concat(e.user.id)},e.user.name)," on ",A()(e.updated_at).format("LLL"))),l.a.createElement("p",null,e.comment))}),l.a.createElement("h3",null,"Make a comment"),l.a.createElement("form",{onSubmit:this._handleSubmitComment},"Rating:",l.a.createElement("select",{onChange:this._handleChangeRating,required:!0},l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5")),"Comment:",l.a.createElement("input",{type:"textarea",onChange:this._handleChangeComment,required:!0}),l.a.createElement("input",{type:"submit",value:"sumbit"}))),l.a.createElement("div",{className:"plantProfileButtonArea"},l.a.createElement(s.b,{to:"/plants/"+this.props.match.params.id+"/edit"},"Edit Plant")))}}]),t}(n.Component),be=[{question:"What percentage of life is found in the ocean?",answers:["85%","50%","75%","60%"],correct:"85%",questionID:"1"},{question:"What country is named after a tree?",answers:["Peru","Brazil","Spain","Portugal"],correct:"Brazil",questionID:"2"},{question:"Where does the suicide plant grow?",answers:["Singapoire","Malaysia","Australia","Hong Kong"],correct:"Australia",questionID:"3"},{question:"Where was the first founded botanical garden?",answers:["Italy","San Remo","Vatican","France"],correct:"Vatican",questionID:"4"},{question:"One of the below is the name of the flower",answers:["Hooker's Bum","Hooker's Lips","Lips of an angel","Bubblebe Bum"],correct:"Hooker's Lips",questionID:"5"},{question:"One of the below is the name of the flower",answers:["Hooker's Bum","Hooker's Lips","Lips of an angel","Bubblebe Bum"],correct:"Hooker's Lips",questionID:"6"},{question:"What is the word's fastest growing plant?",answers:["Bamboo","Sunflower","Grass","Daisy"],correct:"Bamboo",questionID:"7"}],ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;return Promise.resolve(be.sort(function(){return.5-Math.random()}).slice(0,e))},fe=a(186),ve=function(e){var t=e.question,a=e.options,r=e.selected,o=Object(n.useState)(a),s=Object(fe.a)(o,2),i=s[0],c=s[1];return l.a.createElement("div",{className:"questionBox"},l.a.createElement("div",{className:"question"}," ",t," "),i.map(function(e,t){return l.a.createElement("button",{key:t,className:"answerBtn",onClick:function(){c([e]),r(e)}},e)}))},Ee=_("plants.json"),je=function(e){function t(){var e;Object(h.a)(this,t),(e=Object(p.a)(this,Object(b.a)(t).call(this))).state={plants:[]};return C.a.get(Ee).then(function(t){e.setState({plants:t.data[0]}),console.log(t.data)}),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",{key:this.state.plants.id}," Your spirit plant is:",this.state.plants.name," "),l.a.createElement(s.b,{to:"/plants/58"},l.a.createElement(N.Image,{cloudName:"dto4pzoz6",publicId:this.state.plants.images,width:"300",className:"allPlantsShow"})))}}]),t}(n.Component),Oe=function(e){var t=e.score,a=e.playAgain;return l.a.createElement("div",{className:"score-board"},l.a.createElement("div",{className:"score"}," You scored ",t," / 4 "),l.a.createElement("button",{className:"playBtn",onClick:a},"Play Again!"),l.a.createElement(je,null))},ye=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(l)))).state={questionBank:[],score:0,responses:0},a.getQuestions=function(){ge().then(function(e){a.setState({questionBank:e})})},a.computeAnswer=function(e,t){e===t&&a.setState({score:a.state.score+1}),a.setState({responses:a.state.responses<4?a.state.responses+1:5})},a.playAgain=function(){a.getQuestions(),a.setState({score:0,responses:0})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getQuestions()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"title"}," Quiz "),this.state.questionBank.length>0&&this.state.responses<4&&this.state.questionBank.map(function(t){var a=t.question,n=t.answers,r=t.correct,o=t.questionID;return l.a.createElement(ve,{question:a,options:n,key:o,selected:function(t){return e.computeAnswer(t,r)}})}),4===this.state.responses?l.a.createElement(Oe,{score:this.state.score,playAgain:this.playAgain}):null)}}]),t}(n.Component);o.a.render(l.a.createElement(ye,null),document.getElementById("root"));var we=ye,Se=l.a.createElement(s.a,null,l.a.createElement(y,null),l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",null,l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/",component:m}),l.a.createElement(i.b,{exact:!0,path:"/plants",component:F}),l.a.createElement(i.b,{exact:!0,path:"/plants/new",component:W}),l.a.createElement(i.b,{exact:!0,path:"/plants/:id",component:pe}),l.a.createElement(i.b,{exact:!0,path:"/plants/:id/edit",component:Q}),l.a.createElement(i.b,{exact:!0,path:"/users/:id",component:ue}),l.a.createElement(i.b,{exact:!0,path:"/users",component:me}),l.a.createElement(i.b,{exact:!0,path:"/bookings",component:he}),l.a.createElement(i.b,{exact:!0,path:"/quiz",component:we}),l.a.createElement(i.b,{exact:!0,path:"/SignUp",component:k}),localStorage.getItem("jwt")?l.a.createElement(i.b,{exact:!0,path:"/SignOut",component:D}):l.a.createElement(i.b,{exact:!0,path:"/SignIn",component:I})))),l.a.createElement(w,null));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Se,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,t,a){e.exports=a.p+"static/media/leaf_dark.173f02d7.png"},56:function(e,t,a){e.exports=a.p+"static/media/leaf_green.0ed838a1.png"},84:function(e,t,a){e.exports=a.p+"static/media/boy-1.8547ceae.svg"},85:function(e,t,a){e.exports=a.p+"static/media/boy.eae74d36.svg"},86:function(e,t,a){e.exports=a.p+"static/media/girl-1.038dbd32.svg"},87:function(e,t,a){e.exports=a.p+"static/media/girl.cd63945d.svg"},88:function(e,t,a){e.exports=a.p+"static/media/man-1.dabcdaa2.svg"},89:function(e,t,a){e.exports=a.p+"static/media/man-2.333fa0cb.svg"},90:function(e,t,a){e.exports=a.p+"static/media/man-3.fcfc134f.svg"},91:function(e,t,a){e.exports=a.p+"static/media/man-4.bef3aabb.svg"},92:function(e,t,a){e.exports=a.p+"static/media/man.93ef09bc.svg"}},[[187,1,2]]]);
//# sourceMappingURL=main.0718eaa9.chunk.js.map