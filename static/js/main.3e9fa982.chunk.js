(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"aamon - marquis of hell","image":"./images/aamon - marquis of hell.jpg"},{"id":2,"name":"asmodeus - prince of demons","image":"./images/asmodeus - prince of demons.jpg"},{"id":3,"name":"astaroth - great duke of hell","image":"./images/astaroth - great duke of hell.jpg"},{"id":4,"name":"barbatos - duke of hell","image":"./images/barbatos - duke of hell.jpg"},{"id":5,"name":"buer - great president of hell","image":"./images/buer - great president of hell.jpg"},{"id":6,"name":"gaap - demon","image":"./images/gaap - demon.jpg"},{"id":7,"name":"king baal","image":"./images/king baal.jpg"},{"id":8,"name":"marchocias - marquis of hell","image":"./images/marchocias - marquis of hell.jpg"},{"id":9,"name":"naberius - marquis of hell","image":"./images/naberius - marquis of hell.jpg"},{"id":10,"name":"purson - great king of hell","image":"./images/purson - great king of hell.jpg"},{"id":11,"name":"ronove - great earl of hell","image":"./images/ronove - great earl of hell.jpg"},{"id":12,"name":"vual - great duke of hell","image":"./images/vual - great duke of hell.jpg"}]')},,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),o=t.n(l),i=(t(15),t(7)),s=t(3),m=t(4),c=t(8),u=t(5),g=t(9),h=(t(16),function(){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement("a",{href:"#",className:"navbar-brand text text-light"},r.a.createElement("h3",null,"Chris Mikstas")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link text text-light",href:"../Bootstap-Portfolio/assets/resume/Resume - Chris Mikstas.pdf"},"Resume")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link text text-light",href:"../Bootstap-Portfolio/portfolio.html"},"Return to Portfolio")))))}),d=(t(17),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.handleIncrement(e.id)}})))}),f=(t(18),function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"The Game of Clicks"),r.a.createElement("h2",null,"Test your hand at Demonology"),r.a.createElement("h2",null,"Click on a demon's image to earn points, but don't click on the same demon twice!"),r.a.createElement("br",null),r.a.createElement("h3",null,"Current Score: ",e.count),r.a.createElement("h2",null,"High Score: ",e.highCount),r.a.createElement("br",null),r.a.createElement("h1",null,e.gameMessage))}),p=t(6),v=(t(19),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={count:0,highCount:0,shuffledArr:[],clickedArr:[],gameMessage:"Click a card to begin"},t.handleIncrement=function(e){var a,n=Object(i.a)(t.state.clickedArr),r=t.state.count,l=t.state.highCount;console.log(e),n.includes(e)?(a="You have chosen foolishly, start again.",n=[],r=0):(a="You have chosen wisely",n.push(e),++r>l&&(l=r)),t.setState({count:r,highCount:l,gameMessage:a,clickedArr:n}),t.cardRandomizer()},t.cardRandomizer=function(){for(var e=[],a=[];e.length<12;){var n=Math.floor(12*Math.random());e.includes(n)||e.push(n)}for(var r=0;r<e.length;r++)a.push(p[e[r]]);t.setState({shuffledArr:a})},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.cardRandomizer()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"htmlBody"},r.a.createElement("div",null,r.a.createElement(h,null)),r.a.createElement("div",{className:"jumbotron jumbo text-center"},r.a.createElement(f,{count:this.state.count,gameMessage:this.state.gameMessage,highCount:this.state.highCount})),r.a.createElement("div",{className:"container containerDiv"},this.state.shuffledArr.map((function(a){return r.a.createElement(d,{name:a.name,image:a.image,id:a.id,key:a.id,handleIncrement:e.handleIncrement})}))))}}]),a}(n.Component));o.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.3e9fa982.chunk.js.map