(this.webpackJsonpbetter_twitchtv=this.webpackJsonpbetter_twitchtv||[]).push([[0],{17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),s=n.n(c),i=(n(17),n(3)),o=n(11),u=n(12),l=n(0),j=function(){return Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("input",{type:"text",className:"navbar__search",placeholder:"Search"}),Object(l.jsx)("div",{className:"navbar__icon",children:Object(l.jsx)(o.Icon,{icon:u.a,className:"navbar__icon__svg"})})]})},b=n(2),h=n.n(b),m=n(8),d=n(4),_=function(){var e=Object(d.a)(h.a.mark((function e(t){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.twitch.tv/helix/games/top?first=100",t&&(n="".concat(n,"&after=").concat(t)),e.next=4,fetch(n,{method:"GET",headers:new Headers({"Client-ID":"igmu2hehs0ztcjdqy6k9wpp7meh7lk",Authorization:"Bearer ".concat("9xcz2w205nqoiivnv5we0168y3zmq1")})});case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,console.log(r),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.id,n=e.name,a=e.box_art_url.replace("{width}","200").replace("{height}","300");return Object(l.jsxs)("div",{className:"topGames__game",children:[Object(l.jsx)("div",{children:t}),Object(l.jsx)("img",{src:a,loading:"lazy",alt:"game",className:"topGames__game__img"}),Object(l.jsx)("div",{className:"topGames__game__name",children:n})]})},x=n(7),O=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),o=s[0],u=s[1],j=Object(a.useState)(0),b=Object(i.a)(j,2),O=b[0],v=b[1],g=function(){var e=Object(d.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(o);case 2:return t=e.sent,e.t0=u,e.next=6,t.pagination.cursor;case 6:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=10,t.data;case 10:return a=e.sent,v(O+a.length),console.log("called games api"),r([].concat(Object(m.a)(n),[a.map((function(e){return Object(l.jsx)(p,{id:e.id,name:e.name,box_art_url:e.box_art_url},e.id)}))])),e.abrupt("return",n);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g()}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(x.a,{className:"topGames",dataLength:O,next:g,hasMore:!0,loader:Object(l.jsx)("h4",{children:"Loading..."}),endMessage:Object(l.jsx)("p",{style:{textAlign:"center"},children:Object(l.jsx)("b",{children:"Yay! You have seen it all"})}),children:n})})},v=function(){var e=Object(d.a)(h.a.mark((function e(t){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.twitch.tv/helix/streams?first=70",t&&(n="".concat(n,"&after=").concat(t)),e.next=4,fetch(n,{method:"GET",headers:new Headers({"Client-ID":"igmu2hehs0ztcjdqy6k9wpp7meh7lk",Authorization:"Bearer ".concat("9xcz2w205nqoiivnv5we0168y3zmq1")})});case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.game_name,n=e.language,a=e.thumbnail_url,r=e.title,c=e.user_login,s=e.viewer_count,i=a.replace("{width}","300").replace("{height}","200");return Object(l.jsxs)("div",{className:"topStreamers__stream",children:[Object(l.jsxs)("div",{className:"topStreamers__stream__thumbnail",children:[Object(l.jsx)("img",{src:i,loading:"lazy",alt:"thumbnail"}),Object(l.jsxs)("div",{className:"topStreamers__stream__thumbnail__count",children:[s," widz\xf3w"]})]}),Object(l.jsxs)("div",{className:"topStreamers__stream__info",children:[Object(l.jsx)("div",{className:"topStreamers__stream__info__title",children:r}),Object(l.jsx)("div",{className:"topStreamers__stream__info__username",children:c}),Object(l.jsx)("div",{className:"topStreamers__stream__info__game",children:t}),Object(l.jsx)("div",{children:n})]})]})},f=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(0),s=Object(i.a)(c,2),o=s[0],u=s[1],j=Object(a.useState)([]),b=Object(i.a)(j,2),_=b[0],p=b[1],O=function(){var e=Object(d.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(n);case 2:return t=e.sent,e.t0=console,e.next=6,t;case 6:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.t2=r,e.next=11,t.pagination.cursor;case 11:return e.t3=e.sent,(0,e.t2)(e.t3),e.next=15,t.data;case 15:a=e.sent,console.log("called streams api"),u(o+a.length),p([].concat(Object(m.a)(_),[a.map((function(e){return Object(l.jsx)(g,{game_name:e.game_name,language:e.language,thumbnail_url:e.thumbnail_url,title:e.title,user_login:e.user_login,viewer_count:e.viewer_count},e.user_login)}))]));case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){O()}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(x.a,{className:"topStreamers",dataLength:o,next:O,hasMore:!0,loader:Object(l.jsx)("h4",{children:"Loading..."}),endMessage:Object(l.jsx)("p",{style:{textAlign:"center"},children:Object(l.jsx)("b",{children:"Yay! You have seen it all"})}),children:_})})},w=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(i.a)(c,2)[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsxs)("div",{className:"button",children:[Object(l.jsx)("div",{className:"button__option",onClick:function(){s(!1),r(!0)},children:"Kategorie"}),Object(l.jsx)("div",{className:"button__option",onClick:function(){r(!1),s(!0)},children:"Kana\u0142y na \u017cywo"})]}),n?Object(l.jsx)(O,{}):Object(l.jsx)(f,{})]})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d87f252b.chunk.js.map