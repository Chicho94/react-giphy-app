(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),a=n(7),i=n.n(a),s=n(2),u=n(9);var o=function(t){var e=t.setCategories,n=Object(r.useState)(),a=Object(s.a)(n,2),i=a[0],o=a[1];return Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(c.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),b=n.n(d),l=n(8),p=function(){var t=Object(l.a)(b.a.mark((function t(e){var n,c,r,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=Uz3cb8XcNqSJYlPriFLAIWrgNkjrV2VO"),t.next=4,fetch(n);case 4:return c=t.sent,t.next=7,c.json();case 7:return r=t.sent,a=r.data,i=a.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){t.id;var e=t.title,n=t.url;return Object(c.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(c.jsx)("img",{src:n,alt:e}),Object(c.jsx)("p",{children:e})]})},O=function(t){var e=t.category,n=function(t){var e=t.category,n=Object(r.useState)({data:[],loading:!0}),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){p(e).then((function(t){setTimeout((function(){i({data:t,loading:!1})}),3e3)}))}),[e]),a}({category:e}),a=n.data,i=n.loading;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:e}),i&&Object(c.jsx)("p",{children:"Loading"}),Object(c.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(c.jsx)(f,Object(j.a)({},t),t.id)}))})]})};function h(){var t=Object(r.useState)(["One Punch"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"GifExpertApp"}),Object(c.jsx)(o,{setCategories:a}),Object(c.jsx)("hr",{}),Object(c.jsx)("ol",{children:n.map((function(t){return Object(c.jsx)(O,{category:t},t)}))})]})}n(17);i.a.render(Object(c.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3befe9e6.chunk.js.map