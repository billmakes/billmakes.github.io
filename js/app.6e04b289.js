(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],u=0,d=[];u<o.length;u++)r=o[u],i[r]&&d.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4966:function(e,t,n){"use strict";var a=n("caf6"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Resume"),e._m(0)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("span",[e._v("\n      Made with\n      "),n("a",{attrs:{href:"https://github.com/billmakes/vue-rg",target:"_blank"}},[e._v("Resume Generator")]),e._v("\n      by\n      "),n("a",{attrs:{href:"https://github.com/billmakes",target:"_blank"}},[e._v("@billmakes")])])])}],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Resume"},[n("div",{staticClass:"Resume__Header SectionBlock"},[n("Header",{attrs:{bio:e.bio,social:e.social}})],1),n("div",{staticClass:"Resume__Experience SectionBlock"},[n("h4",{staticClass:"Resume__BlockHeader"},[e._v("EXPERIENCE")]),e._l(e.experience,function(e){return n("div",{key:e.company},[n("Experience",{attrs:{item:e}})],1)})],2),e.education?n("div",{staticClass:"Resume__Education SectionBlock"},[n("h4",{staticClass:"Resume__BlockHeader"},[e._v("EDUCATION")]),e._l(e.education,function(e){return n("div",{key:e.company},[n("Experience",{attrs:{item:e}})],1)})],2):e._e(),n("div",{staticClass:"Resume__Skills SectionBlock"},[n("h4",{staticClass:"Resume__BlockHeader"},[e._v("PROFICIENCIES")]),e._l(e.skills,function(t){return n("span",{key:t,staticClass:"tag"},[e._v(e._s(t))])})],2),n("div",{staticClass:"Resume__References SectionBlock"},[n("hr",{staticClass:"divider"}),n("span",[n("a",{attrs:{href:"mailto:"+e.bio.email,target:"_blank"}},[e._v("References available upon request")])])])])},o=[],l=n("a1bc"),c=function(e,t){var n=t._c;return n("div",{staticClass:"Header"},[n("div",{staticClass:"Header__Name"},[n("h1",[t._v(t._s(t.props.bio.name))]),n("span",{staticClass:"Header__Name--Title"},[t._v(t._s(t.props.bio.title))])]),n("div",{staticClass:"Header__Details"},[n("span",[t._v(t._s(t.props.bio.phone))]),n("span",[n("a",{attrs:{href:"mailto:"+t.props.bio.email,target:"_blank"}},[t._v("\n        "+t._s(t.props.bio.email)+"\n      ")])]),n("span",[t._v(t._s(t.props.bio.location))])]),n("div",{staticClass:"Header__Container"},[t.props.social?n("div",{staticClass:"Header__Social"},[n("ul",t._l(t.props.social,function(e){return n("li",{key:e.label},[e.display?n("span",[n("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.label))])]):t._e()])}),0)]):t._e(),n("div",{staticClass:"Header__Desc"},[n("p",[t._v(t._s(t.props.bio.desc))])])])])},p=[],u={name:"Header",props:{bio:{type:Object,required:!0},social:{type:Object}}},d=u,_=(n("7bcd"),n("2877")),m=Object(_["a"])(d,c,p,!0,null,"1e57c4d5",null),v=m.exports,f=function(e,t){var n=t._c;return n("div",{staticClass:"Experience"},[n("div",{staticClass:"Experience__Container"},[n("div",{staticClass:"Experience__Title"},[n("h2",[t._v(t._s(t.props.item.title))])]),n("div",{staticClass:"Experience__Details"},[n("span",[t._v(t._s(t.props.item.company))]),n("span",[t._v("\n        "+t._s(t.props.item.start)+" -\n        "),"Present"===t.props.item.end||"present"===t.props.item.end?n("span",[n("em",[t._v("Present")])]):n("span",[t._v(t._s(t.props.item.end))])]),n("span",[t._v(t._s(t.props.item.location))])]),n("div",{staticClass:"Experience__Desc"},[n("span",[t._v(t._s(t.props.item.desc))])])])])},b=[],h={name:"Experience",props:{item:{type:Object,required:!0}}},g=h,y=(n("5e19"),Object(_["a"])(g,f,b,!0,null,"dda28892",null)),C=y.exports,S={name:"Resume",components:{Header:v,Experience:C},data:function(){return{bio:l["bio"],social:l["social"],experience:l["experience"],education:l["education"],skills:l["skills"]}}},E=S,k=(n("4966"),Object(_["a"])(E,r,o,!1,null,"23446607",null)),x=k.exports,w={name:"app",components:{Resume:x}},O=w,R=(n("5c0b"),Object(_["a"])(O,i,s,!1,null,null,null)),P=R.exports;n("7981");a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(P)}}).$mount("#app")},"5ab2":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),i=n.n(a);i.a},"5e19":function(e,t,n){"use strict";var a=n("e11e"),i=n.n(a);i.a},"5e27":function(e,t,n){},7981:function(e,t,n){},"7bcd":function(e,t,n){"use strict";var a=n("5ab2"),i=n.n(a);i.a},a1bc:function(e,t){e.exports={bio:{name:"Robert A. Patterson",title:"Software Developer",email:"mail@mail.com",phone:"(555) 555-3215",location:"Sometown, MA",desc:"Software developer with experience in e-commerce, enterprise and high-performance web technologies. Skilled at defining, designing and implementing a highly secure, continuous-deployment pipeline to update applications in cloud environments."},social:{first:{display:!0,label:"Github",url:"https://github.com/"},second:{display:!0,label:"LinkedIn",url:"https://linkedin.com"}},experience:{first:{title:"Software Developer",company:"ABC COMPANY",start:"Jan 2019",end:"Present",location:"Sometown, MA",desc:"Serve in a client-facing role translating business requirements into viable, scalable cloud solutions. Collaborate with Engineering team to drive the DevOps strategy and prototype/execute on platform upgrades."},second:{title:"Software Engineer",company:"DEF COMPANY (now GHI CO.)",start:"Mar 2015",end:"Dec 2018",location:"Sometown, MA",desc:"Recruited to help expand the capabilities of DEF’s cloud-based security applications. Positioning early-stage startup as a recognized industry leader and setting the stage for lucrative sale to GHI Co."},third:{title:"Web Developer",company:"SECURE CORP",start:"Sep 2012",end:"Mar 2015",location:"Sometown, MA",desc:"Delivering the company’s first persistent, end-to-end data protection that allow users to control security protocols across multiple devices."}},education:{first:{title:"BS in Computer Engineering",company:"ABC UNIVERISTY",start:"Aug 2006",end:"May 2010",location:"Sometown, MA",desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi elementum id nibh a posuere."}},skills:["Go","Java","JavaScript","J2EE","C++","C","C#",".NET","Framework","AngularJS","jQuery","Git","PERL","Bash","Python","Smalltalk","Eclipse","JSP","ASP.NET","VB.NET","WebSphere","Hibernate","Mobile Development","AJAX","JSON","XML","HTML","CSS","Linux","SQL","Azure"]}},caf6:function(e,t,n){},e11e:function(e,t,n){}});
//# sourceMappingURL=app.6e04b289.js.map