(this.webpackJsonpbetter_twitchtv=this.webpackJsonpbetter_twitchtv||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(5),s=n.n(c),i=(n(11),n(2)),o=n.n(i),u=n(3),j=n(6),m=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.twitch.tv/helix/games/top?first=50",{method:"GET",headers:new Headers({"Client-ID":"igmu2hehs0ztcjdqy6k9wpp7meh7lk",Authorization:"Bearer ".concat("9xcz2w205nqoiivnv5we0168y3zmq1")})});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log(n),e.abrupt("return",n.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=n(0),h=function(e){var t=e.id,n=e.name,r=e.box_art_url.replace("{width}","200").replace("{height}","300");return Object(d.jsxs)("div",{className:"topGames__game",children:[Object(d.jsx)("div",{children:t}),Object(d.jsx)("img",{src:r,loading:"lazy",alt:"game",className:"topGames__game__img"}),Object(d.jsx)("div",{className:"topGames__game__name",children:n})]})},p=function(){var e=Object(r.useState)(Object(d.jsx)(d.Fragment,{})),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,a(t.map((function(e){return Object(d.jsx)(h,{id:e.id,name:e.name,box_art_url:e.box_art_url},e.id)})));case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(d.jsx)("div",{className:"topGames",children:n})},l=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(p,{})})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7a7201b0.chunk.js.map