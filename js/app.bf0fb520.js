(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],d=0,u=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Resume"),e._m(0)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("span",[e._v("\n      Made with\n      "),n("a",{attrs:{href:"https://github.com/billmakes/vue-rg",target:"_blank"}},[e._v("Resume Generator")]),e._v("\n      by\n      "),n("a",{attrs:{href:"https://github.com/billmakes",target:"_blank"}},[e._v("@billmakes")])])])}],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Resume"},[n("div",{staticClass:"Resume__Header SectionBlock"},[n("Header",{attrs:{bio:e.bio,social:e.social}})],1),n("div",{staticClass:"Resume__Experience SectionBlock"},[n("h4",{staticClass:"Resume__BlockHeader"},[e._v("EXPERIENCE")]),e._l(e.experience,(function(e){return n("div",{key:e.company},[n("Experience",{attrs:{item:e}})],1)}))],2),e.education?n("div",{staticClass:"Resume__Education SectionBlock"},[n("h4",{staticClass:"Resume__BlockHeader"},[e._v("EDUCATION")]),e._l(e.education,(function(e){return n("div",{key:e.company},[n("Experience",{attrs:{item:e}})],1)}))],2):e._e(),n("div",{staticClass:"Resume__Skills SectionBlock"},[n("h4",{staticClass:"Resume__BlockHeader"},[e._v("PROFICIENCIES")]),e._l(e.skills,(function(t){return n("span",{key:t,staticClass:"tag"},[e._v(e._s(t))])}))],2),n("div",{staticClass:"Resume__References SectionBlock"},[n("hr",{staticClass:"divider"}),n("span",[n("a",{attrs:{href:"mailto:"+e.bio.email,target:"_blank"}},[e._v("References available upon request")])])])])},o=[],l=(n("7f7f"),n("a1bc")),c=function(e,t){var n=t._c;return n("div",{staticClass:"Header"},[n("div",{staticClass:"Header__Name"},[n("h1",[t._v(t._s(t.props.bio.name))]),n("span",{staticClass:"Header__Name--Title"},[t._v(t._s(t.props.bio.title))])]),n("div",{staticClass:"Header__Details"},[n("span",[t._v(t._s(t.props.bio.phone))]),n("span",[n("a",{attrs:{href:"mailto:"+t.props.bio.email,target:"_blank"}},[t._v("\n        "+t._s(t.props.bio.email)+"\n      ")])]),n("span",[t._v(t._s(t.props.bio.location))])]),n("div",{staticClass:"Header__Container"},[t.props.social?n("div",{staticClass:"Header__Social"},[n("ul",t._l(t.props.social,(function(e){return n("li",{key:e.label},[e.display?n("span",[n("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.label))])]):t._e()])})),0)]):t._e(),n("div",{staticClass:"Header__Desc"},[n("p",[t._v(t._s(t.props.bio.desc))])])])])},p=[],d={name:"Header",props:{bio:{type:Object,required:!0},social:{type:Object}}},u=d,m=(n("7bcd"),n("2877")),f=Object(m["a"])(u,c,p,!0,null,"1e57c4d5",null),v=f.exports,_=function(e,t){var n=t._c;return n("div",{staticClass:"Experience"},[n("div",{staticClass:"Experience__Container"},[n("div",{staticClass:"Experience__Title"},[n("h2",[t._v(t._s(t.props.item.title))])]),n("div",{staticClass:"Experience__Details"},[n("span",[t._v(t._s(t.props.item.company))]),n("span",[t._v("\n        "+t._s(t.props.item.start)+" -\n        "),"Present"===t.props.item.end||"present"===t.props.item.end?n("span",[n("em",[t._v("Present")])]):n("span",[t._v(t._s(t.props.item.end))])]),n("span",[t._v(t._s(t.props.item.location))])]),n("div",{staticClass:"Experience__Desc"},[n("span",[t._v(t._s(t.props.item.desc))])])])])},b=[],h={name:"Experience",props:{item:{type:Object,required:!0}}},g=h,y=(n("5e19"),Object(m["a"])(g,_,b,!0,null,"dda28892",null)),k=y.exports,C={name:"Resume",components:{Header:v,Experience:k},data:function(){return{bio:l["bio"],social:l["social"],experience:l["experience"],education:l["education"],skills:l["skills"]}},created:function(){document.title=this.bio.name}},w=C,x=(n("a611"),Object(m["a"])(w,r,o,!1,null,"64d6c4ad",null)),S=x.exports,E={name:"app",components:{Resume:S}},O=E,R=(n("5c0b"),Object(m["a"])(O,i,s,!1,null,null,null)),P=R.exports;n("7981");a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(P)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("e332"),i=n.n(a);i.a},"5e19":function(e,t,n){"use strict";var a=n("684a"),i=n.n(a);i.a},"684a":function(e,t,n){},"740f":function(e,t,n){},7981:function(e,t,n){},"7bcd":function(e,t,n){"use strict";var a=n("ebb4"),i=n.n(a);i.a},a1bc:function(e,t){e.exports={bio:{name:"Bill Hilbert",title:"Professional Software Engineer",email:"hilbertwilliam@gmail.com",phone:"(941) 726-1508",location:"St. Petersburg, FL",desc:"An experienced Software Engineer with a passion for the latest technology, tooling, quality code, and best practices. Skilled at defining, designing, and implementing client ideas into real world applications."},social:{first:{display:!0,label:"Github",url:"https://github.com/billmakes/"},second:{display:!0,label:"LinkedIn",url:"https://www.linkedin.com/in/bill-hilbert-414bb5123/"}},experience:{first:{title:"Professional Software Engineer",company:"DXC Technology (formerly Tribridge)",start:"Dec 2018",end:"Present",location:"Tampa, FL",desc:"Developing and maintaining an enterprise level learning management platform. I have a hand in implementing and maintaining a previous Angular version of the app while leading a team in the development of a VueJS version. I have also lead a team in the development of several administrative tools and interfaces. Various other duties including documentation writing, onboarding, release management, and deployments."},second:{title:"Senior Developer",company:"Haneke Design",start:"Nov 2018",end:"Jun 2019",location:"Tampa, FL",desc:"Haneke Design is a strategic, interactive design and development firm focused on delivering user-centered solutions for desktop, mobile, tablet, and wearable devices. Here I assisted with any in-house needs, primarly worked under contract with DXC Technology."},third:{title:"Engineer",company:"ATLARGE INC",start:"Mar 2018",end:"Nov 2018",location:"Sarasota, FL",desc:"Full stack developer, also developed a QA department and intergration of these processes into the development lifecycle. Worked with a variety of clients and mainly worked in Drupal and Laravel projects and various mobile applications."},fourth:{title:"Developer",company:"billmakes",start:"Feb 2016",end:"Present",location:"Remote",desc:"My freelance services, I have taken a variety of projects and requiring the use of many different full stack technologies with an emphasis on front end and delivering great UI/UX experiences."}},skills:["JavaScript","Webpack","Parcel","NPM","Yarn","Vue","React","Angular","TypeScript","Git","jQuery","Mobile Development","Bash","AJAX","Axios","JSON","XML","HTML","CSS / CSS Preprocessors","Linux","Docker","SQL","Onboarding","Documentation","Release Management","E2E Testing","Unit Testing","Pong"]}},a611:function(e,t,n){"use strict";var a=n("740f"),i=n.n(a);i.a},e332:function(e,t,n){},ebb4:function(e,t,n){}});
//# sourceMappingURL=app.bf0fb520.js.map