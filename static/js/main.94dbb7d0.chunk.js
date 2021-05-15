(this["webpackJsonpdisneyplus-clone"]=this["webpackJsonpdisneyplus-clone"]||[]).push([[0],{18:function(n,e,t){n.exports={row:"Counter_row__3a8ge",value:"Counter_value__3rV2K",button:"Counter_button__T_me-",textbox:"Counter_textbox__37LnD",asyncButton:"Counter_asyncButton__bpGIt Counter_button__T_me-"}},50:function(n,e,t){},58:function(n,e,t){},83:function(n,e,t){"use strict";t.r(e);var i=t(3),r=t.n(i),c=t(31),o=t.n(c),a=(t(50),t(26)),s=t(14),d=t(27),l=t.n(d),p=t(32),b=t(20);function j(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(e){return setTimeout((function(){return e({data:n})}),500)}))}var x=Object(b.b)("counter/fetchCount",function(){var n=Object(p.a)(l.a.mark((function n(e){var t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j(e);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),u=Object(b.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(n){n.value+=1},decrement:function(n){n.value-=1},incrementByAmount:function(n,e){n.value+=e.payload}},extraReducers:function(n){n.addCase(x.pending,(function(n){n.status="loading"})).addCase(x.fulfilled,(function(n,e){n.status="idle",n.value+=e.payload}))}}),g=u.actions,h=(g.increment,g.decrement,g.incrementByAmount,u.reducer,t(18),t(2));t(58);var m,O,f,v,w,y,k=t(5),S=t(6),z=t(11),I=Object(b.c)({name:"user",initialState:{name:"",email:"",photo:""},reducers:{setUserLogin:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOut:function(n){n.name=null,n.email=null,n.photo=null}}}),_=I.actions,M=_.setUserLogin,A=_.setSignOut,C=function(n){return n.user.name},R=function(n){return n.user.photo},E=I.reducer;var L,T,P,B,G,D,W,F,U,H=function(){return Object(h.jsx)(J,{children:Object(h.jsxs)(N,{children:[Object(h.jsx)(V,{src:"/images/cta-logo-one.svg"}),Object(h.jsx)(K,{children:"GET ALL THERE"}),Object(h.jsx)(Y,{children:"Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1."}),Object(h.jsx)(X,{src:"/images/cta-logo-two.png"})]})})},J=S.a.div(m||(m=Object(k.a)(['\n    position: relative;\n    height: calc(100vh - 70px);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &:before {\n        position: absolute;\n        content: "";\n        right: 0;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        background-color: rgba(0,0,0,0.7);\n        background: url("/images/login-background.jpg") top / cover no-repeat;\n        z-index: -10;\n    }\n']))),N=S.a.div(O||(O=Object(k.a)(["\n    max-width: 650px;\n    padding: 80px 40px;\n    width: 90%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n"]))),V=S.a.img(f||(f=Object(k.a)(["\n\n"]))),X=S.a.img(v||(v=Object(k.a)(["\n    width: 90%;\n"]))),K=S.a.a(w||(w=Object(k.a)(["\n    width: 100%;\n    background-color: #0063e5;\n    font-weight: bold;\n    padding: 17px 0;\n    color: #f9f9f9;\n    border-radius: 4px;\n    text-align: center;\n    font-size: 18px;\n    cursor: pointer;\n    transition: all 250ms;\n    letter-spacing: 1.5px;\n    margin-top: 8px;\n    margin-bottom: 12px; \n\n    &:hover {\n        background-color: #0483ee; \n    }\n"]))),Y=S.a.p(y||(y=Object(k.a)(["\n    font-size: 12px;\n    letter-spacing: 1.5px;\n    line-height: 1.5;\n    text-align: center;\n"]))),$=t(29),Q=$.a.initializeApp({apiKey:"AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",authDomain:"disneyplus-clone-a33d5.firebaseapp.com",projectId:"disneyplus-clone-a33d5",storageBucket:"disneyplus-clone-a33d5.appspot.com",messagingSenderId:"37918794208",appId:"1:37918794208:web:dbe9842dfe1dda522a4b85",measurementId:"G-DRVLJKWRWG"}).firestore(),q=$.a.auth(),Z=new $.a.auth.GoogleAuthProvider,nn=($.a.storage(),Q);var en,tn,rn=function(){var n=Object(s.b)(),e=Object(z.f)(),t=Object(s.c)(R),r=Object(s.c)(C);return Object(i.useEffect)((function(){q.onAuthStateChanged(function(){var t=Object(p.a)(l.a.mark((function t(i){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i&&(n(M({name:i.displayName,email:i.email,photo:i.photoURL})),e.push("/"));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())})),Object(h.jsxs)(cn,{children:[Object(h.jsx)(on,{src:"/images/logo.svg"}),r?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(an,{children:[Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/home-icon.svg"}),Object(h.jsx)("span",{children:"HOME"})]}),Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/search-icon.svg"}),Object(h.jsx)("span",{children:"SEARCH"})]}),Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/watchlist-icon.svg"}),Object(h.jsx)("span",{children:"WATCHLIST"})]}),Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/original-icon.svg"}),Object(h.jsx)("span",{children:"ORIGINALS"})]}),Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/movie-icon.svg"}),Object(h.jsx)("span",{children:"MOVIES"})]}),Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/series-icon.svg"}),Object(h.jsx)("span",{children:"SERIES"})]})]}),Object(h.jsxs)(sn,{children:[Object(h.jsx)(dn,{src:t}),Object(h.jsxs)(ln,{children:[Object(h.jsx)(pn,{children:"Profile"}),Object(h.jsx)(pn,{onClick:function(){q.signOut().then((function(){n(A()),e.push("/login")}))},children:"SignOut"})]})]})]}):Object(h.jsx)(jn,{children:Object(h.jsx)(bn,{onClick:function(){q.signInWithPopup(Z).then((function(t){var i=t.user;n(M({name:i.displayName,email:i.email,photo:i.photoURL})),e.push("/")}))},children:"Login"})})]})},cn=S.a.nav(L||(L=Object(k.a)(["\n    height: 70px;\n    background: #090b13;\n    display: flex;\n    align-items: center;\n    padding: 0 36px;\n"]))),on=S.a.img(T||(T=Object(k.a)(["\n    width: 80px;\n"]))),an=S.a.div(P||(P=Object(k.a)(['\n    display: flex;\n    flex: 1;\n    margin-left: 25px;\n    align-items: center;\n    a {\n        display: flex;\n        align-items: center;\n        padding: 0 12px;\n        cursor: pointer;\n\n\n        img {\n            height: 20px;\n        }\n\n        span {\n            font-size: 13px;\n            letter-spacing: 1.42px;\n            position: relative;\n\n            &:after{\n                content: "";\n                height: 2px;\n                background: white;\n                left: 0;\n                right: 0;\n                bottom: -6px;\n                position: absolute;\n                opacity: 0;\n                transform-origin: left center;\n                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n                transform: scaleX(0);\n            }\n        }\n        \n        &:hover{\n            span:after {\n                opacity: 1;\n                transform: scaleX(1);\n            }\n        }\n    }\n\n    @media (max-width: 805px) {\n        display: none;\n    }\n']))),sn=S.a.div(B||(B=Object(k.a)(["\n    display: inline-block;\n    position: relative;\n    &:hover div{\n        display: block;\n    }\n\n    @media (max-width: 805px) {\n        width: 100%;\n        text-align: right;\n    }\n"]))),dn=S.a.img(G||(G=Object(k.a)(["\n    width: 35px;\n    height: 35px;\n    padding: 1px;\n    border-radius: 50%;\n    cursor: pointer;\n    transition: all 250ms ease 0s;\n\n    &:hover {\n        border: solid 2px #f9f9f9;\n    }\n"]))),ln=S.a.div(D||(D=Object(k.a)(['\n    position: absolute;\n    display: none;\n    background-color: #f9f9f9;\n    border-radius: 5px;\n    right: 0;\n    z-index: 5;\n\n    &:after{\n        content: "";\n        position: absolute;\n        top: -5px;\n        right: 11px;\n        display: block;\n        border-bottom: solid 7px white;\n        border-right: solid 7px transparent;\n        border-left: solid 7px transparent;\n    }\n']))),pn=S.a.span(W||(W=Object(k.a)(["\n    display: block;\n    color: black;\n    padding: 5px 20px;\n    cursor: pointer;\n    transition: all 250ms;\n    margin: 15px 0;\n\n    &:hover{\n        background-color: rgba(0,0,0,0.1);\n    }\n"]))),bn=S.a.div(F||(F=Object(k.a)(["\n    border: 1px solid #f9f9f9;\n    border-radius: 4px;\n    padding: 8px 16px;\n    letter-spacing: 1.5px;\n    text-transform: uppercase;\n    background-color: rgba(0,0,0, 0.6);\n    transition: all 250ms ease 0s;\n    cursor: pointer;\n\n    &:hover {\n        background-color: #f9f9f9;\n        color: black;\n        border-color: transparent;\n    }\n"]))),jn=S.a.div(U||(U=Object(k.a)(["\n    display: flex;\n    flex: 1;\n    justify-content: flex-end;\n"]))),xn=t(22),un=t(45),gn=t.n(un);t(81),t(82);var hn,mn,On,fn=function(){return Object(h.jsxs)(vn,Object(xn.a)(Object(xn.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:[Object(h.jsx)(wn,{children:Object(h.jsx)("img",{src:"/images/slider-badging.jpg"})}),Object(h.jsx)(wn,{children:Object(h.jsx)("img",{src:"/images/slider-badag.jpg"})}),Object(h.jsx)(wn,{children:Object(h.jsx)("img",{src:"/images/slider-scale.jpg"})}),Object(h.jsx)(wn,{children:Object(h.jsx)("img",{src:"/images/slider-scales.jpg"})})]}))},vn=Object(S.a)(gn.a)(en||(en=Object(k.a)(["\n    margin: 25px calc(3.5vw + 5px);\n\n    .slick-list {\n        overflow: visible;\n    }\n    \n\n    .slick-prev, .slick-next {\n        opacity: .3;\n        \n        &:hover {\n            opacity: 1;\n        }\n    }\n\n    ul li button {\n        &:before{\n            font-size: 10px;\n            color: rgb(150, 158, 171);\n        }\n    }\n\n    li.slick-active button:before{\n        color: white;\n    }\n\n    button {\n        z-index: 1;\n    }\n"]))),wn=S.a.div(tn||(tn=Object(k.a)(["\n    cursor: pointer;\n\n    img {\n        width: 100%;\n        height: 100%;\n        border: solid 4px transparent;\n        border-radius: 4px;\n        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n        rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n        transition-duration: 300ms;\n\n        &:hover {\n            border: solid 4px rgb(249, 249, 249, 0.8);\n        }\n    }\n"]))),yn=t(19),kn=Object(b.c)({name:"movie",initialState:{movies:[]},reducers:{setMovies:function(n,e){n.movies=e.payload}}}),Sn=kn.actions.setMovies,zn=function(n){return n.movie.movies},In=kn.reducer;var _n,Mn,An=function(){var n=Object(s.c)(zn);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(Cn,{children:[Object(h.jsx)("h4",{children:"Recommended for you"}),Object(h.jsx)(Rn,{children:n&&n.map((function(n){return Object(h.jsx)(En,{children:Object(h.jsx)(yn.b,{to:"/detail/".concat(n.id),children:Object(h.jsx)("img",{src:n.cardImg})})},n.id)}))})]}),Object(h.jsxs)(Cn,{children:[Object(h.jsx)("h4",{children:"Featured"}),Object(h.jsx)(Rn,{children:n&&n.map((function(n){return Object(h.jsx)(En,{children:Object(h.jsx)(yn.b,{to:"/detail/".concat(n.id),children:Object(h.jsx)("img",{src:n.cardImg})})},n.id)}))})]}),Object(h.jsxs)(Cn,{children:[Object(h.jsx)("h4",{children:"Continue watching"}),Object(h.jsx)(Rn,{children:n&&n.map((function(n){return Object(h.jsx)(En,{children:Object(h.jsx)(yn.b,{to:"/detail/".concat(n.id),children:Object(h.jsx)("img",{src:n.cardImg})})},n.id)}))})]}),Object(h.jsxs)(Cn,{children:[Object(h.jsx)("h4",{children:"Movies"}),Object(h.jsx)(Rn,{children:n&&n.map((function(n){return Object(h.jsx)(En,{children:Object(h.jsx)(yn.b,{to:"/detail/".concat(n.id),children:Object(h.jsx)("img",{src:n.cardImg})})},n.id)}))})]})]})},Cn=S.a.div(hn||(hn=Object(k.a)(["\n    h4 {\n        margin-left: 10px;\n    }\n"]))),Rn=S.a.div(mn||(mn=Object(k.a)(["\n    display: flex;\n    overflow-x: auto;\n    margin-bottom: 20px;\n    padding: 10px;\n\n    &::-webkit-scrollbar {\n        display: none;\n    }\n"]))),En=S.a.div(On||(On=Object(k.a)(["\n    min-width: 270px;\n    height: 150px;\n    line-height: 110px;\n    cursor: pointer;\n    margin: 0px 30px 40px 0px; \n    border-radius: 10px;\n    overflow: hidden;\n    border: 3px solid rgba(249, 249, 249, 0.1);\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n\n    img {\n        width: 100%;\n        height: 100%; \n        object-fit: cover;\n    }\n\n    &:hover{\n        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16,\n        rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n        transform: scale(1.05);\n        border-color: rgba(249, 249, 249, 0.8);\n    }\n"])));var Ln,Tn=function(){var n=Object(i.useState)(0),e=Object(a.a)(n,2),t=e[0],r=e[1];return Object(h.jsxs)(Pn,{children:[Object(h.jsxs)(Bn,{onMouseOver:function(){return r(1)},onMouseOut:function(){return r(0)},children:[Object(h.jsx)("img",{src:"/images/viewers-disney.png"}),1==t&&Object(h.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,src:"/videos/1564674844-disney.mp4"})]}),Object(h.jsxs)(Bn,{onMouseOver:function(){return r(2)},onMouseOut:function(){return r(0)},children:[Object(h.jsx)("img",{src:"/images/viewers-pixar.png"}),2==t&&Object(h.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,src:"/videos/1564676714-pixar.mp4"})]}),Object(h.jsxs)(Bn,{onMouseOver:function(){return r(3)},onMouseOut:function(){return r(0)},children:[Object(h.jsx)("img",{src:"/images/viewers-marvel.png"}),3==t&&Object(h.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,src:"/videos/1564676115-marvel.mp4"})]}),Object(h.jsxs)(Bn,{onMouseOver:function(){return r(4)},onMouseOut:function(){return r(0)},children:[Object(h.jsx)("img",{src:"/images/viewers-starwars.png"}),4==t&&Object(h.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,src:"/videos/1608229455-star-wars.mp4"})]}),Object(h.jsxs)(Bn,{onMouseOver:function(){return r(5)},onMouseOut:function(){return r(0)},children:[Object(h.jsx)("img",{src:"/images/viewers-national.png"}),5==t&&Object(h.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,src:"/videos/1564676296-national-geographic.mp4"})]})]})},Pn=S.a.div(_n||(_n=Object(k.a)(["\n    margin: 25px calc(3.5vw + 5px);\n    display: grid;\n    padding: 30px 0 26px;\n    grid-gap: 25px;\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n"]))),Bn=S.a.div(Mn||(Mn=Object(k.a)(["\n    display: flex;\n    position: relative;\n    cursor: pointer;\n    border: 3px solid rgba(249, 249, 249, 0.1);\n    border-radius: 10px;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n\n    img {\n        width: 100%;\n        height: 100%; \n        object-fit: cover;\n    }\n\n    video {\n        position: absolute;\n        width: 100%;\n        border-radius: 7px;\n        height: 100%;\n        right: 0; \n        top: 0;\n        bottom: 0;\n        left: 0; \n        object-fit: cover;\n        z-index: -5;\n    }\n\n    &:hover{\n        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16,\n        rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n        transform: scale(1.05);\n        border-color: rgba(249, 249, 249, 0.8);\n    }\n"])));var Gn,Dn,Wn,Fn,Un,Hn,Jn,Nn,Vn,Xn,Kn,Yn=function(){var n=Object(s.b)();return Object(i.useEffect)((function(){nn.collection("movies").onSnapshot((function(e){var t=e.docs.map((function(n){return Object(xn.a)({id:n.id},n.data())}));n(Sn(t))}))}),[]),Object(h.jsxs)($n,{children:[Object(h.jsx)(fn,{}),Object(h.jsx)(Tn,{}),Object(h.jsx)(An,{})]})},$n=S.a.main(Ln||(Ln=Object(k.a)(['\n    min-height: calc(100vh - 70px);\n    position: relative;\n    overflow-x: hidden;\n\n    &:before {\n        content: "";\n        background: url("/images/home-background.png") center center / cover no-repeat fixed;\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: -10;\n    }\n'])));var Qn=function(){var n=Object(z.g)().id,e=Object(i.useState)(),t=Object(a.a)(e,2),r=t[0],c=t[1];return Object(i.useEffect)((function(){nn.collection("movies").doc(n).get().then((function(n){n.exists&&c(n.data())}))}),[]),console.log(r),Object(h.jsx)(qn,{children:r&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Zn,{children:Object(h.jsx)("img",{src:r.backgroundImg})}),Object(h.jsx)(ne,{children:Object(h.jsx)("img",{src:r.titleImg})}),Object(h.jsxs)(ee,{children:[Object(h.jsxs)(te,{children:[Object(h.jsx)("img",{src:"/images/play-icon-black.png"}),Object(h.jsx)("span",{children:"PLAY"})]}),Object(h.jsxs)(ie,{children:[Object(h.jsx)("img",{src:"/images/play-icon-white.png"}),Object(h.jsx)("span",{children:"TRAILER"})]}),Object(h.jsxs)(se,{children:[Object(h.jsx)(re,{children:Object(h.jsx)("span",{children:"+"})}),Object(h.jsx)(ce,{children:Object(h.jsx)("img",{src:"/images/group-icon.png"})})]})]}),Object(h.jsx)(oe,{children:r.subTitle}),Object(h.jsx)(ae,{children:r.description})]})})},qn=S.a.div(Gn||(Gn=Object(k.a)(["\n    min-height: calc(100vh - 70px);\n    padding: 0 calc(3.5vw + 5px);\n    position: relative;\n"]))),Zn=S.a.div(Dn||(Dn=Object(k.a)(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n    background-color: rgba(0,0,0,0.7);\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n"]))),ne=S.a.div(Wn||(Wn=Object(k.a)(["\n    height: 30vh;\n    min-width: 170px;\n    width: 35vw;\n    min-width: 200px;\n    margin-top: 50px;\n    margin-bottom: 20px;\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n    }\n"]))),ee=S.a.div(Fn||(Fn=Object(k.a)(["\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n"]))),te=S.a.button(Un||(Un=Object(k.a)(["\n    height: 56px;\n    width: 130px;\n    margin-right: 22px;\n    letter-spacing: 1.8px;\n    display: flex;\n    cursor: pointer;\n    border-radius: 4px;\n    border: none;\n    font-size: 15px;\n    align-items: center;\n    justify-content: center;\n    transition-duration: 300ms;\n\n    &:hover{\n        background: rgb(198,198,198);\n    }\n"]))),ie=Object(S.a)(te)(Hn||(Hn=Object(k.a)(["\n    border: solid 1px rgb(249, 249, 249);\n    background: rgba(0,0,0,0.3);\n    color: rgb(249, 249, 249);\n"]))),re=S.a.button(Jn||(Jn=Object(k.a)(["\n    border-radius: 50%;\n    margin-right: 16px;\n    width: 44px;\n    height: 44px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: solid 2px white;\n    cursor: pointer;\n    background: rgba(0,0,0, 0.6);\n\n    span {\n        font-size: 30px;\n        color: white;\n    }\n"]))),ce=Object(S.a)(re)(Nn||(Nn=Object(k.a)(["\n    background: rgb(0,0,0);\n"]))),oe=S.a.div(Vn||(Vn=Object(k.a)(["\n    color: rgb(249, 249, 249);\n    font-size: 15px;\n    min-height: 20px;\n    margin-top: 26px;\n"]))),ae=S.a.div(Xn||(Xn=Object(k.a)(["\n    line-height: 1.4;\n    font-size: 20px;\n    margin-top: 16px;\n    color: rgb(249, 249, 249);\n    max-width: 760px;\n"]))),se=S.a.div(Kn||(Kn=Object(k.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 65px;\n"])));var de=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(yn.a,{children:[Object(h.jsx)(rn,{}),Object(h.jsxs)(z.c,{children:[Object(h.jsx)(z.a,{path:"/detail/:id",children:Object(h.jsx)(Qn,{})}),Object(h.jsx)(z.a,{path:"/login",children:Object(h.jsx)(H,{})}),Object(h.jsx)(z.a,{path:"/",children:Object(h.jsx)(Yn,{})})]})]})})},le=Object(b.a)({reducer:{movie:In,user:E}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(s.a,{store:le,children:Object(h.jsx)(de,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[83,1,2]]]);
//# sourceMappingURL=main.94dbb7d0.chunk.js.map