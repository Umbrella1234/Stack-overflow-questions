(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(72)},44:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(5),i=n.n(o),l=(n(42),n(44),n(8)),c=n.n(l),u=n(16),s=n(10),d=n(25),m=n(26),h=n(35),p=n(27),f=n(36),v=n(4),E=n(6),g=n(7),b=n(31),w=n.n(b);function k(){var e=Object(E.a)(["\n  &:hover {\n    cursor: pointer;\n  }\n"]);return k=function(){return e},e}var y=g.a.tr(k()),O=function(e){var t=e.openQuestion,n=e.question,a=n.owner,o=n.title,i=n.creation_date,l=n.question_id;return r.a.createElement(y,{onClick:function(){return t(l)}},r.a.createElement("td",null,a.display_name),r.a.createElement("td",null,o),r.a.createElement("td",null,w()(1e3*i).format("MMMM Do YYYY, h:mm:ss a")))},Q=n(32),j=n.n(Q);function C(){var e=Object(E.a)(["\n  margin-bottom: 15px;\n"]);return C=function(){return e},e}var q=g.a.div(C()),M=function(e){var t=e.isOpen,n=e.title,a=e.body,o=e.onClose,i=e.link;return r.a.createElement("div",null,r.a.createElement(v.d,{size:"lg",isOpen:t},r.a.createElement(v.g,null,n),r.a.createElement(v.e,null,r.a.createElement(q,null,"Link: ",r.a.createElement("a",{href:i},i)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})),r.a.createElement(v.f,null,r.a.createElement(v.a,{color:"secondary",onClick:o},"Close"))))};function x(){var e=Object(E.a)(["\n  text-align: center;\n  ",";\n"]);return x=function(){return e},e}var _=g.a.h2(x(),function(e){return e.isCentered&&"\n    position: absolute;\n    top: 50%;\n    left 50%;\n    transform: translate(-50%, 50%);\n  "}),I=function(e){var t=e.isCentered;return r.a.createElement("div",null,r.a.createElement(_,{isCentered:t},"Loading..."))},S=n(34),L=n.n(S),Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return L.a.get("".concat("https://api.stackexchange.com/2.2/","/questions"),{params:{site:"stackoverflow",page:e,pageSize:t,order:"desc",sort:"creation",filter:"withbody"}})},N=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={questions:[],pageNum:1,openedQuestionId:null,hasMore:!0},n.getQuestions=Object(s.a)(c.a.mark(function e(){var t,a,r,o,i,l,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.pageNum,r=t.questions,e.next=3,Y(a);case 3:o=e.sent,i=o.data,l=i.items,s=i.has_more,n.setState({questions:Object(u.a)(r).concat(Object(u.a)(l)),pageNum:a+1,hasMore:s});case 8:case"end":return e.stop()}},e,this)})),n.openQuestion=function(e){n.setState({openedQuestionId:e})},n.closeQuestion=function(){n.setState({openedQuestionId:null})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getQuestions();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.questions,a=t.hasMore,o=t.openedQuestionId,i=n.find(function(e){return e.question_id===o});return r.a.createElement(v.c,null,n.length?r.a.createElement(v.h,null,r.a.createElement(v.b,{xs:12},r.a.createElement(j.a,{dataLength:n.length,next:this.getQuestions,hasMore:a,loader:r.a.createElement(I,null)},r.a.createElement(v.i,{hover:!0,bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Author"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Creation date"))),r.a.createElement("tbody",null,n.map(function(t){return r.a.createElement(O,{key:t.question_id,openQuestion:e.openQuestion,question:t})})))))):r.a.createElement(I,{isCentered:!0}),o&&r.a.createElement(M,{title:i.title,body:i.body,link:i.link,isOpen:!!o,onClose:this.closeQuestion}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,2,1]]]);
//# sourceMappingURL=main.b43aef2b.chunk.js.map