(this.webpackJsonpbetter_twitchtv=this.webpackJsonpbetter_twitchtv||[]).push([[0],{43:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(21),s=n.n(r),i=(n(43),n(4)),o=n.n(i),l=n(7),u=n(5),j=new Headers({"Client-ID":"igmu2hehs0ztcjdqy6k9wpp7meh7lk",Authorization:"Bearer ".concat("9xcz2w205nqoiivnv5we0168y3zmq1")}),_=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Search categories"),a="https://api.twitch.tv/helix/search/categories?query=".concat(t,"&first=40"),n&&(a+="&after=".concat(n)),e.next=5,fetch(a,{method:"GET",headers:j});case 5:return c=e.sent,e.next=8,c.json();case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Search users"),a="https://api.twitch.tv/helix/search/channels?query=".concat(t,"&first=40"),n&&(a+="&after=".concat(n)),e.next=5,fetch(a,{method:"GET",headers:j});case 5:return c=e.sent,e.next=8,c.json();case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=n(32),b=n(10),h=n(19),O=n(33),x=n(34),v=n.p+"static/media/Category.6745fb12.svg",p=n(24),f=n(1),g=function(e){var t=e.id,n=e.name,a=e.box_art_url;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(b.b,{to:"".concat("/better_ttv","/redirect/").concat(n,"/").concat(t),children:Object(f.jsxs)("div",{className:"categoryItems__item",children:[Object(f.jsx)("img",{className:"categoryItems__item__img",src:a,alt:"Category"}),Object(f.jsx)("div",{className:"categoryItems__item__name",children:n})]})})})},N=function(e,t){Object(a.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(!1)};return window.addEventListener("mousedown",n),window.addEventListener("touchstart",n),function(){window.removeEventListener("mousedown",n),window.removeEventListener("touchstart",n)}}),[e,t])},w=function(e){var t=e.display_name,n=(e.game_id,e.game_name),a=(e.id,e.is_live);return console.log(a),Object(f.jsx)(f.Fragment,{children:a?Object(f.jsx)(b.b,{to:"".concat("/better_ttv","/Streamer/").concat(t),children:Object(f.jsxs)("div",{className:"userItems__item",children:[Object(f.jsx)(h.Icon,{className:"userItems__item__icon",icon:p.a}),Object(f.jsxs)("div",{className:"userItems__item__desc",children:[Object(f.jsxs)("div",{className:"userItems__item__desc__top",children:[Object(f.jsx)("div",{className:"userItems__item__desc__top__name",children:t}),Object(f.jsx)("div",{className:"userItems__item__desc__top__dot"})]}),Object(f.jsxs)("div",{className:"userItems__item__desc__game",children:["Playing ",n]})]})]})}):Object(f.jsxs)("div",{className:"userItems__item--short",children:[Object(f.jsx)(h.Icon,{className:"userItems__item__icon",icon:p.a}),Object(f.jsx)("div",{className:"userItems__item__desc__top__name",children:t})]})})},I=n(73),y=n(72),S=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),s=Object(u.a)(r,2),i=s[0],j=s[1],S=Object(a.useState)(""),k=Object(u.a)(S,2),G=k[0],E=k[1],F=Object(a.useState)(""),C=Object(u.a)(F,2),L=C[0],M=C[1],D=Object(a.useState)(null),z=Object(u.a)(D,2),Y=z[0],A=z[1],J=Object(a.useRef)(null);N(J,j),Object(a.useEffect)((function(){i||(A(null),M(""))}),[i]);var q=Object(a.useCallback)(Object(m.debounce)(function(){var e=Object(l.a)(o.a.mark((function e(t,n,a){var c,r,s,l,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A(null),c={data:[]},!(t.length>0&&!0===a)){e.next=9;break}return e.next=5,d(t,n);case 5:c=e.sent,(null===(r=c)||void 0===r||null===(s=r.data)||void 0===s?void 0:s.length)>0&&A(Object(f.jsx)("div",{className:i?"userItems":"userItems--closed",children:c.data.map((function(e){return Object(f.jsx)(w,{id:e.id,display_name:e.display_name,game_name:e.game_name,game_id:e.game_id,is_live:e.is_live},e.id)}))})),e.next=14;break;case 9:if(!(t.length>0)){e.next=14;break}return e.next=12,_(t,n);case 12:c=e.sent,(null===(l=c)||void 0===l||null===(u=l.data)||void 0===u?void 0:u.length)>0&&A(Object(f.jsx)("div",{className:i?"categoryItems":"categoryItems--closed",children:c.data.map((function(e){return Object(f.jsx)(g,{id:e.id,name:e.name,box_art_url:e.box_art_url},e.id)}))}));case 14:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),500),[]);return Object(a.useEffect)((function(){q(L,G,n)}),[L,G,q,n]),Object(f.jsxs)("div",{className:"navbar",children:[Object(f.jsx)(b.b,{className:"navbar__twitch",to:"".concat("/better_ttv","/"),children:Object(f.jsx)(h.Icon,{icon:x.a})}),Object(f.jsxs)("div",{className:"navbar__search",children:[Object(f.jsxs)("div",{className:"navbar__search__mid",ref:J,children:[Object(f.jsxs)("div",{className:"navbar__search__mid__searchDiv",onClick:function(){return j(!0)},children:[Object(f.jsx)("input",{type:"text",className:"navbar__search__mid__searchDiv__input",placeholder:"Search",onChange:function(e){return function(e){M(e.target.value),""!==G&&E("")}(e)},value:L,id:"input"}),Object(f.jsx)("label",{htmlFor:"input",children:Object(f.jsx)("div",{className:"navbar__search__mid__searchDiv__icon",children:Object(f.jsx)(h.Icon,{icon:O.a,className:"navbar__search__mid__searchDiv__icon__svg"})})})]}),Y||""]}),Object(f.jsxs)(y.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(f.jsx)(y.a,{item:!0,children:Object(f.jsx)("img",{className:"categoryIcon",src:v,alt:"category"})}),Object(f.jsx)(y.a,{item:!0,children:Object(f.jsx)(I.a,{checked:n,onChange:function(){return c(!n)}})}),Object(f.jsx)(y.a,{item:!0,children:Object(f.jsx)(h.Icon,{className:"userIcon",icon:p.a})})]})]})]})},k=n(8),G=n(16),E=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Get Games"),n="https://api.twitch.tv/helix/games/top?first=100",t&&(n="".concat(n,"&after=").concat(t)),e.next=5,fetch(n,{method:"GET",headers:j});case 5:return a=e.sent,e.next=8,a.json();case 8:return c=e.sent,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e){var t=e.id,n=e.name,a=e.box_art_url.replace("{width}","220").replace("{height}","325");return Object(f.jsxs)("div",{className:"topGames__game",children:[Object(f.jsx)(b.b,{to:"".concat("/better_ttv","/StreamersForGame/").concat(n,"/").concat(t),children:Object(f.jsx)("img",{src:a,loading:"lazy",alt:"game",className:"topGames__game__img"})}),Object(f.jsx)("div",{className:"topGames__game__name",children:Object(f.jsx)(b.b,{to:"".concat("/better_ttv","/StreamersForGame/").concat(n,"/").concat(t),children:Object(f.jsx)("p",{className:"topGames__game__name__text",children:n})})})]})},C=n(22),L=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(u.a)(r,2),i=s[0],j=s[1],_=Object(a.useState)(0),d=Object(u.a)(_,2),m=d[0],b=d[1],h=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(i);case 2:return t=e.sent,e.t0=j,e.next=6,t.pagination.cursor;case 6:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=10,t.data;case 10:return a=e.sent,b(m+a.length),c([].concat(Object(G.a)(n),[a.map((function(e){return Object(f.jsx)(F,{id:e.id,name:e.name,box_art_url:e.box_art_url},e.id)}))])),e.abrupt("return",n);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){h()}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(C.a,{className:"topGames",dataLength:m,next:h,hasMore:!0,loader:Object(f.jsx)("h4",{children:"Loading..."}),endMessage:Object(f.jsx)("p",{style:{textAlign:"center"},children:Object(f.jsx)("b",{children:"Yay! You have seen it all"})}),children:n})})},M=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Get Streamers"),a="https://api.twitch.tv/helix/streams?first=40",t&&(a="https://api.twitch.tv/helix/streams?first=70",a+="&after=".concat(t)),n&&(a+="&game_id=".concat(n)),e.next=6,fetch(a,{method:"GET",headers:j});case 6:return c=e.sent,e.next=9,c.json();case 9:return r=e.sent,e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Get User"),n="https://api.twitch.tv/helix/users?id=".concat(t),e.next=4,fetch(n,{method:"GET",headers:j});case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c.data[0]);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e){var t=e.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],a=e.getDay();return"Joined ".concat(0===a?1:a," ").concat(n," ").concat(t)},Y=n(35),A=n(36),J=function(e){var t=e.user_id,n=Object(a.useState)(!1),c=Object(u.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(),j=Object(u.a)(i,2),_=j[0],d=j[1],m=Object(a.useState)(),b=Object(u.a)(m,2),O=b[0],x=b[1],v=Object(a.useState)(""),p=Object(u.a)(v,2),g=p[0],w=p[1],I=Object(a.useRef)(null);return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:n=e.sent,x(n),w(z(new Date(n.created_at))),s(!0),d(Object(f.jsx)(h.Icon,{className:"profileIcon__svg",icon:Y.a}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),N(I,s),Object(f.jsx)(f.Fragment,{children:r?Object(f.jsxs)("div",{className:r?"channelInfo":"channelInfo--closed",id:"channelInfo",ref:I,children:[Object(f.jsx)("div",{className:"channelInfo__close",onClick:function(){return s(!1)},children:Object(f.jsx)(h.Icon,{className:"channelInfo__close__svg",icon:A.a})}),Object(f.jsxs)("div",{className:"channelInfo__top",children:[Object(f.jsx)("div",{className:"channelInfo__top__image",children:Object(f.jsx)("img",{className:"channelInfo__top__image__img",src:null===O||void 0===O?void 0:O.profile_image_url,alt:"profile"})}),Object(f.jsxs)("div",{className:"channelInfo__top__info",children:[Object(f.jsx)("div",{className:"channelInfo__top__info__name",children:null===O||void 0===O?void 0:O.display_name}),Object(f.jsx)("div",{className:"channelInfo__top__info__type",children:null===O||void 0===O?void 0:O.broadcaster_type}),Object(f.jsxs)("div",{className:"channelInfo__top__info__views",children:[null===O||void 0===O?void 0:O.view_count," views"]}),Object(f.jsx)("div",{className:"channelInfo__top__info__created",children:g})]})]}),Object(f.jsx)("div",{className:"channelInfo__description",children:Object(f.jsx)("div",{className:"",children:null===O||void 0===O?void 0:O.description})})]}):Object(f.jsx)("div",{className:r?"profileIcon--closed":"profileIcon",onClick:function(){return s(!0)},children:_})})},q=function(e){var t=e.game_name,n=e.language,c=e.thumbnail_url,r=e.title,s=e.user_login,i=e.viewer_count,j=e.user_id,_=Object(a.useState)(),d=Object(u.a)(_,2),m=d[0],h=d[1],O=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m||h(Object(f.jsx)(J,{user_id:j}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=c.replace("{width}","450").replace("{height}","254");return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"topStreamers__stream",children:[m||"",Object(f.jsx)(b.b,{to:"".concat("/better_ttv","/Streamer/").concat(s),children:Object(f.jsxs)("div",{className:"topStreamers__stream__thumbnail",children:[Object(f.jsx)("img",{className:"topStreamers__stream__thumbnail__img",src:x,loading:"lazy",alt:"thumbnail"}),Object(f.jsxs)("div",{className:"topStreamers__stream__thumbnail__count",children:[i," widz\xf3w"]})]})}),Object(f.jsxs)("div",{className:"topStreamers__stream__info",children:[Object(f.jsx)("div",{className:"topStreamers__stream__info__title",children:r}),Object(f.jsx)("div",{className:"topStreamers__stream__info__username",children:Object(f.jsx)("p",{onClick:O,className:"topStreamers__stream__info__username__text",children:s})}),Object(f.jsx)("div",{className:"topStreamers__stream__info__game",children:t}),Object(f.jsx)("div",{children:n})]})]})})},T=function(){var e=Object(k.g)().GameId,t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(0),i=Object(u.a)(s,2),j=i[0],_=i[1],d=Object(a.useState)([]),m=Object(u.a)(d,2),b=m[0],h=m[1],O=function(){var t=Object(l.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(c,e);case 2:return n=t.sent,t.t0=r,t.next=6,n.pagination.cursor;case 6:return t.t1=t.sent,(0,t.t0)(t.t1),t.next=10,n.data;case 10:a=t.sent,_(j+a.length),h([].concat(Object(G.a)(b),[a.map((function(e){return Object(f.jsx)(q,{game_name:e.game_name,language:e.language,thumbnail_url:e.thumbnail_url,title:e.title,user_login:e.user_login,viewer_count:e.viewer_count,user_id:e.user_id},e.user_login)}))]));case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){O()}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(C.a,{className:"topStreamers",dataLength:j,next:O,hasMore:!0,loader:Object(f.jsx)("h4",{children:"Loading..."}),endMessage:Object(f.jsx)("p",{style:{textAlign:"center"},children:Object(f.jsx)("b",{children:"Yay! You have seen it all"})}),children:b})})},B=function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(u.a)(r,2)[1];return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"button",children:[Object(f.jsx)("div",{className:"button__option",onClick:function(){s(!1),c(!0)},children:"Kategorie"}),Object(f.jsx)("div",{className:"button__option",onClick:function(){c(!1),s(!0)},children:"Kana\u0142y na \u017cywo"})]}),n?Object(f.jsx)(L,{}):Object(f.jsx)(T,{})]})},K=function(){var e=Object(k.g)(),t=e.GameName,n=e.GameId,c=Object(a.useState)(""),r=Object(u.a)(c,2),s=r[0],i=r[1],j=Object(a.useState)(0),_=Object(u.a)(j,2),d=_[0],m=_[1],b=Object(a.useState)([]),h=Object(u.a)(b,2),O=h[0],x=h[1],v=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(s,n);case 2:return t=e.sent,e.t0=i,e.next=6,t.pagination.cursor;case 6:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=10,t.data;case 10:a=e.sent,console.log("called specific game streams api"),m(d+a.length),x([].concat(Object(G.a)(O),[a.map((function(e){return Object(f.jsx)(q,{game_name:e.game_name,language:e.language,thumbnail_url:e.thumbnail_url,title:e.title,user_login:e.user_login,viewer_count:e.viewer_count,user_id:e.user_id},e.user_login)}))]));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v()}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"gameName",children:t}),Object(f.jsx)(C.a,{className:"topStreamers",dataLength:d,next:v,hasMore:!0,loader:Object(f.jsx)("h4",{children:"Loading..."}),endMessage:Object(f.jsx)("p",{style:{textAlign:"center"},children:Object(f.jsx)("b",{children:"Yay! You have seen it all"})}),children:O})]})},P=n(37),R=function(){var e=Object(k.g)().Name;return Object(f.jsx)("div",{className:"streamWrapper",children:Object(f.jsx)("div",{className:"twitchEmbed",children:Object(f.jsx)(P.a,{id:"twitchEmbed",channel:e,theme:"dark",width:"100%",height:"100%",muted:!0,withChat:!1,onVideoPause:function(){return console.log(":(")}})})})},H=function(){return Object(f.jsx)(b.a,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(S,{}),Object(f.jsxs)(k.d,{children:[Object(f.jsx)(k.a,{exact:!0,from:"/",to:"".concat("/better_ttv","/")}),Object(f.jsx)(k.b,{path:"".concat("/better_ttv","/"),exact:!0,children:Object(f.jsx)(B,{})}),Object(f.jsx)(k.b,{path:"".concat("/better_ttv","/StreamersForGame/:GameName/:GameId"),children:Object(f.jsx)(K,{})}),Object(f.jsx)(k.b,{exact:!0,path:"".concat("/better_ttv","/redirect/:GameName/:GameId"),render:function(e){return Object(f.jsx)(k.a,{to:"".concat("/better_ttv","/StreamersForGame/").concat(e.match.params.GameName,"/").concat(e.match.params.GameId)})}}),Object(f.jsx)(k.b,{path:"".concat("/better_ttv","/Streamer/:Name"),children:Object(f.jsx)(R,{})})]})]})})};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(H,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.b25bcc5d.chunk.js.map