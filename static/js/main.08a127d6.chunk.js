(this.webpackJsonpalive=this.webpackJsonpalive||[]).push([[0],[,,,,,function(e,t,a){e.exports={MountainsSlide:"MountainsSlide___LbZwo",mountain:"MountainsSlide___1KSAn",alive:"MountainsSlide___1X2Rd",man:"MountainsSlide___XSD8e",cloudsParent:"MountainsSlide___1MTox",clouds:"MountainsSlide___2HFz5"}},function(e,t,a){e.exports={OceanSlide:"OceanSlide___Jahmv",Ocean_video:"OceanSlide____Db2j",Wrapper_Ocean:"OceanSlide___3_VOr",Ocean:"OceanSlide___1KqE7",Wrapper_Reef:"OceanSlide___1eZhR",Reef:"OceanSlide___33Dae",Wrapper_SeaGirl:"OceanSlide___1g-n4",SeaGirl:"OceanSlide___3F3yh",Wrapper_Divers:"OceanSlide___30W99",Divers:"OceanSlide___3bkRm",Wrapper_Turtle:"OceanSlide___2YDs5",Turtle:"OceanSlide___1-x2j",Wrapper_IS:"OceanSlide___2skdm",I_letter:"OceanSlide___3iJ2G",S_letter:"OceanSlide___MlERJ",FullSize:"OceanSlide___328Wb"}},,function(e,t,a){e.exports={MainBody:"MainBody___1iAr5",scrollSnap:"MainBody___HLoMk"}},,,function(e,t,a){e.exports={App:"App___1o-Fp"}},function(e,t,a){e.exports={PageContainer:"PageContainer___1_W7E"}},function(e,t,a){e.exports={NavigationBar:"NavigationBar___3ZwD4"}},function(e,t,a){e.exports=a.p+"static/media/clouds.308ee0f6.png"},function(e,t,a){e.exports=a.p+"static/media/reef.5847a8de.png"},function(e,t,a){e.exports=a.p+"static/media/seagirl.b56de899.png"},function(e,t,a){e.exports=a.p+"static/media/divers.5f6b8871.png"},function(e,t,a){e.exports=a.p+"static/media/turtle.9d423780.png"},function(e,t,a){e.exports=a.p+"static/media/ocean_background.487b9822.mp4"},function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/ocean.37906d49.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),l=(a(25),a(1)),s=a(2),c=a(4),m=a(3),d=a(11),u=a.n(d),p=a(12),_=a.n(p),v=a(13),f=a.n(v),O=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:f.a.NavigationBar},"Hello, its me")}}]),a}(n.Component),h=a(8),E=a.n(h),S=a(7),b=a(5),y=a.n(b),g=a(14),j=a.n(g),w=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movement:{alive:{speed:.8,transform:"translateY(0)"},clouds:{speed:-.8,transform:"translateY(0)"},man:{speed:.4,transform:"translateY(0)"},mountains:{speed:.03,transform:"translateY(0)"}}},e.scrollHandler=function(){var t=window.pageYOffset,a=Object(S.a)({},e.state.movement);Object.keys(a).forEach((function(e){var n=t*a[e].speed;a[e].transform="translateY("+n+"px)"})),e.setState({movement:a})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.scrollHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.scrollHandler)}},{key:"render",value:function(){return r.a.createElement("div",{className:y.a.MountainsSlide},r.a.createElement("div",{style:{transform:this.state.movement.mountains.transform},className:y.a.mountain}),r.a.createElement("div",{style:{transform:this.state.movement.alive.transform},className:y.a.alive},r.a.createElement("span",{className:y.a.al},"AL"),r.a.createElement("span",{className:y.a.ve},"VE")),r.a.createElement("div",{style:{transform:this.state.movement.man.transform},className:y.a.man}),r.a.createElement("div",{className:y.a.cloudsParent},r.a.createElement("img",{style:{transform:this.state.movement.clouds.transform},src:j.a,className:y.a.clouds,alt:"clouds"})))}}]),a}(n.Component),k=a(6),N=a.n(k),x=(a(26),a(15)),M=a.n(x),W=a(16),Y=a.n(W),A=a(17),D=a.n(A),H=a(18),B=a.n(H),L=a(19),T=a.n(L),C=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={renderObjects:{reef:{name:"Reef",image:M.a,speed:-.2,transform:"translateY(0px)"},seagirl:{name:"SeaGirl",image:Y.a,speed:.25,transform:"translateY(0px)"},divers:{name:"Divers",image:D.a,speed:-.3,transform:"translateY(0px)"},turtle:{name:"Turtle",image:B.a,speed:-.4,transform:"translateY(0px)"},label:{speed:-.1,transform:"translateY(0px)"}}},e.scrollHandler=function(){var t=window.pageYOffset,a=Object(S.a)({},e.state.renderObjects);Object.keys(a).forEach((function(e){var n=t*a[e].speed;a[e].transform="translateY("+n+"px)"})),e.setState({renderObjects:a})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.scrollHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.scrollHandler)}},{key:"render",value:function(){var e=this.state.renderObjects,t=Object.keys(e).map((function(t){if(void 0!==e[t].image){var a=e[t].name,n=N.a["Wrapper_"+a],o=N.a[a];return r.a.createElement("div",{key:t,style:{transform:e[t].transform},className:n},r.a.createElement("img",{className:o,src:e[t].image,alt:a}))}return""}));return r.a.createElement("div",{className:N.a.OceanSlide},r.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:N.a.Ocean_video},r.a.createElement("source",{src:T.a,type:"video/mp4"})),t,r.a.createElement("div",{style:{transform:this.state.renderObjects.label.transform},className:N.a.Wrapper_IS},r.a.createElement("div",{className:N.a.I_letter},"I"),r.a.createElement("div",{className:N.a.S_letter},"S")),r.a.createElement("div",{className:N.a.FullSize}))}}]),a}(n.Component),I=function(e,t){var a=R(e,t);if(0!==a){var n=document.documentElement,r=Math.round(n.scrollTop);r=0===r?1:r;var o=600,i=setInterval((function(){if(o>=0){var e=r*(1-a*P((600-o)/600,3));n.scrollTop=e,o--}else clearInterval(i)}),1)}},R=function(e,t){return 1===e&&t?-(window.innerHeight-1):2===e?t?-1:1:3!==e||t?0:.5},P=function(e,t){return e<.5?.5*Math.pow(2*e,t):.5*(2-Math.pow(2*(1-e),t))},F=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={position:1,timeAnimation:0},e.scrollHandler=function(t){var a=t.deltaY>0,n=e.state.position;(new Date).getTime()-e.state.timeAnimation>2500&&(a&&3!==n?(I(e.state.position,!0),e.setState({position:n+1,timeAnimation:(new Date).getTime()})):a||1===n||(I(e.state.position,!1),e.setState({position:n-1,timeAnimation:(new Date).getTime()})))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{onWheel:function(t){return e.scrollHandler(t)},className:E.a.MainBody},r.a.createElement(w,null),r.a.createElement(C,null),r.a.createElement("section",{style:{background:"yellow"},className:E.a.scrollSnap}))}}]),a}(n.Component),J=function(e){return r.a.createElement("div",{className:_.a.PageContainer},r.a.createElement("header",null,r.a.createElement(O,null)),r.a.createElement("main",null,r.a.createElement(F,null)))},G=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).loaded=function(){},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.loaded)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",this.loaded)}},{key:"render",value:function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(J,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=r.a.createElement(G,null);i.a.render(z,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.08a127d6.chunk.js.map