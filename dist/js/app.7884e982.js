(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"42fd5294"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,a[1](l)}i[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("8a23"),i=a.n(n);i.a},"261a":function(t,e,a){},"2b71":function(t,e,a){"use strict";var n=a("feda"),i=a.n(n);i.a},3740:function(t,e,a){"use strict";var n=a("261a"),i=a.n(n);i.a},"3c07":function(t,e,a){},5337:function(t,e,a){},5401:function(t,e,a){"use strict";var n=a("c39c"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{background:"black"}},[a("Header"),a("v-content",[a("MainArea")],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-content",[a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{class:{"ml-1 mr-1":t.$vuetify.breakpoint.smAndDown,"ml-6 mr-6":t.$vuetify.breakpoint.mdAndUp},attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("transition",{attrs:{name:"jade",mode:"in-out"}},[0==t.counter?a("p",{staticClass:"gradient-0 text-md-left floating font-weight-bold",class:t.bigFont},[t._v(t._s(t.heading))]):t._e(),1==t.counter?a("p",{staticClass:"gradient-1 text-md-left floating font-weight-bold",class:t.bigFont},[t._v(t._s(t.heading))]):t._e(),2==t.counter?a("p",{staticClass:"gradient-2 text-md-left floating font-weight-bold",class:t.bigFont},[t._v(t._s(t.heading))]):t._e()])],1),a("v-flex",{attrs:{md6:"",xs12:""}},[a("transition",{attrs:{name:"fade"}},[t.remainingFontVisible?a("p",{staticClass:"text-left display-1 font-weight-regular"},[t._v(" Imagine all the people "),a("br"),t._v("living life in peace. ")]):t._e()])],1),a("v-spacer"),a("br"),a("v-flex",{attrs:{md6:"",xs12:""}},[a("transition",{attrs:{name:"fade"}},[t.remainingFontVisible?a("p",{staticClass:"grey--text text-left .body-1 font-weight-regular"},[t._v(" Hi, my name is Baybora. I'm a software developer with a mechatronical engineering background. I love beautiful designed products, so I started getting into UI/UX & Design. You can look through my career and my resume and also get in contact with me. ")]):t._e()])],1),a("br"),a("v-flex",{attrs:{"mt-8":"",wrap:"",md12:"",xs12:""}},[a("transition",{attrs:{name:"fade"}},[t.remainingFontVisible?a("v-toolbar",{attrs:{color:"black"}},[a("v-spacer"),a("v-chip-group",{attrs:{mandatory:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},t._l(t.sections,(function(e){return a("v-chip",{key:e.section,staticClass:"black",attrs:{"active-class":e.gradient,value:e.section}},[t._v(t._s(e.section))])})),1),a("v-spacer")],1):t._e()],1)],1)],1)],1)],1),a("v-content",[a("v-container",{attrs:{"fill-height":""}},[a("transition",{attrs:{name:"slide-fade"}},[a("Career",{directives:[{name:"show",rawName:"v-show",value:"Career"==t.selection,expression:"selection == 'Career'"}]})],1),a("transition",{attrs:{name:"slide-fade"}},[a("Education",{directives:[{name:"show",rawName:"v-show",value:"Education"==t.selection,expression:"selection == 'Education'"}]})],1),a("transition",{attrs:{name:"slide-fade"}},[a("Skills",{directives:[{name:"show",rawName:"v-show",value:"Skills"==t.selection,expression:"selection == 'Skills'"}]})],1),a("transition",{attrs:{name:"slide-fade"}},[a("About",{directives:[{name:"show",rawName:"v-show",value:"About"==t.selection,expression:"selection == 'About'"}]})],1)],1)],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},t._l(t.sections,(function(e){return a("ResumeSections",{key:e.date,attrs:{date:e.date,stationHeading:e.headings,stationBody:e.body,location:e.location,gradient:t.gradient}})})),1)],1)},l=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{class:{"ml-0 mr-0":t.$vuetify.breakpoint.smAndDown,"ml-6 mr-6":t.$vuetify.breakpoint.mdAndUp},attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{md6:"",xs12:""}},[a("transition",{attrs:{mode:"out-in",name:"fade"}},[t.remainingFontVisible?a("p",{staticClass:" text-left headline font-weight-regular",class:t.gradient},[t._v(t._s(t.date))]):t._e()])],1),a("v-flex",{attrs:{md6:"",xs12:""}},[a("transition",{attrs:{mode:"out-in",name:"fade"}},[t.remainingFontVisible?a("p",{staticClass:"text-left .body-1 font-weight-bold"},[a("span",{staticClass:"white--text"},[t._v(t._s(t.location))]),a("br"),a("span",{staticClass:"grey--text"},[t._v(t._s(t.stationHeading))])]):t._e()]),a("transition",{attrs:{mode:"out-in",name:"fade"}},[t.remainingFontVisible?a("p",{staticClass:"grey--text text-left .body-1 font-weight-regular"},[t._v(t._s(t.stationBody))]):t._e()])],1)],1)},u=[],p={name:"ResumeSection",methods:{toggleFontVisible:function(){var t=this;setTimeout((function(){t.counter=0}),500),setTimeout((function(){t.remainingFontVisible=!0}),1500)}},computed:{},data:function(){return{remainingFontVisible:!1}},mounted:function(){this.toggleFontVisible()},props:["date","stationHeading","stationBody","location","gradient"]},f=p,m=(a("b21e"),a("2877")),g=a("6544"),v=a.n(g),b=a("0e8f"),h=a("a722"),y=Object(m["a"])(f,d,u,!1,null,"00ee2f00",null),x=y.exports;v()(y,{VFlex:b["a"],VLayout:h["a"]});var w={name:"Career",components:{ResumeSections:x},methods:{},computed:{},data:function(){return{gradient:"gradient-0",sections:[{date:"October 19 - now",location:"Silicon Valley, Sunnyvale California",headings:"Mercedes-Benz Research & Development North America Inc.",body:"Master thesis candidate @ Speech and Digital Assistants in Silicon Valley Headquarters for Mercedes-Benz North America Inc. Mainly doing frontend development, UI/UX for internal & future external products for data collection. Designed a chat-bot for simulating the digital in-car assistant in a WebApp.  "},{date:"October 18 - October 19",location:"Sindelfingen, Baden-Württemberg",headings:"Mercedes-Benz Cars AG",body:"The department of UX/UI @ Mercedes-Benz is developing the digital in-car assistant called #HeyMercedes. In this team I worked in the area of user and situation-adaptive speech generation in the design and implementation of a prototype for speech recognition and speech generation."},{date:"March 18 - October 18",location:"Detroit, Michigan",headings:"Mercedes-Benz Research & Development North America Inc.",body:"Internship at the department of testing and certification for the cars S-Class/E-Class Hybrid and Electric. Supported the Team with automated CAN/FlexRay/LIN-Tests. Additionally developed a new device for test automation on base of an Arduino in car-networking. "},{date:"October 17 - March 18",location:"Stuttgart, Baden-Württemberg",headings:"Mercedes-Benz Cars AG",body:"Bachelor's Thesis at the electric powertrain department of the Vans segment of Mercedes-Benz. For the integration of a new CAN-Network architecture I developed a tool for automated software generation from specifications. Additionaly created a mini-Hardware-in-the-Loop together with automated test cases, to validate the software."},{date:"April 17 - October 17",location:"Stuttgart, Baden-Württemberg",headings:"Mercedes-Benz Cars AG",body:"Development of a Microcontroller based Headunit-Component to display CAN-Signals from the Central Powertrain Controller. I developed the full product which inherited designing the electrical circuits, the UI/UX and the C++ Codebase for an Arduino Due. "}]}},mounted:function(){}},C=w,_=(a("c118"),a("a523")),k=Object(m["a"])(C,c,l,!1,null,"7f5a1406",null),A=k.exports;v()(k,{VContainer:_["a"],VLayout:h["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},t._l(t.sections,(function(e){return a("ResumeSections",{key:e.date,attrs:{date:e.date,stationHeading:e.headings,stationBody:e.body,location:e.location,gradient:t.gradient}})})),1)],1)},S=[],M={name:"Education",components:{ResumeSections:x},methods:{},computed:{},data:function(){return{gradient:"gradient-1",sections:[{date:"January 20 - March 20",location:"Stanford University, Continuing Studies",headings:"The Frontiers of Artificial Intelligence",body:"Visited the Stanford university for the on-campus continuing studies course about the frontiers of Aritificial Intelligence. Mainly focusing on Natural Language Processing, Computer Vision and the future posibilities of AI."},{date:"March 18 - March 20",location:"University of Applied Sciences Reutlingen",headings:"Master of Science, Busines Information Systems. Grade-Ø 1.5",body:"Master thesis candidate @ Speech and Digital Assistants in Silicon Valley Headquarters for Mercedes-Benz North America Inc. "},{date:"March 14 - March 18",location:"University of Applied Sciences Ulm",headings:"Bachelor of Engineering, Medical/Mechatronical Engineering. Grade-Ø 1.8",body:"Bachelor's Degree in the area of Medical/Mechatronical Engineering. In the studies I had a special focus on electrical and software engineering."}]}},mounted:function(){}},$=M,B=(a("2b71"),Object(m["a"])($,V,S,!1,null,"2862ab82",null)),F=B.exports;v()(B,{VContainer:_["a"],VLayout:h["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-layout",{class:{"ml-0 mr-0":t.$vuetify.breakpoint.smAndDown,"ml-6 mr-6":t.$vuetify.breakpoint.mdAndUp},attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{md12:"",xs12:""}},[a("v-layout",[a("transition",{attrs:{mode:"out-in",name:"fade"}},[t.remainingFontVisible?a("p",{staticClass:"gradient-2 text-left headline font-weight-regular"},[t._v("Languages")]):t._e()])],1)],1),a("v-flex",{staticClass:"mb-6",attrs:{md6:"",xs12:""}},[a("transition",{attrs:{mode:"out-in",name:"fade"}},[t.remainingFontVisible?a("p",{staticClass:"text-left .body-2 font-weight-bold"},[a("span",{staticClass:"white--text"},[t._v("German")]),a("br"),a("span",{staticClass:"grey--text"},[t._v("native")])]):t._e()]),a("transition",{attrs:{mode:"out-in",name:"fade"}},[a("div",{attrs:{id:"progress-bar-container"}},[a("div",{staticClass:"progress-bar-child progress"}),a("div",{staticClass:"progress-bar-child shrinker timelapse"})])]),a("transition",{attrs:{mode:"out-in",name:"fade"}},[t.remainingFontVisible?a("p",{staticClass:"text-left .body-2 font-weight-bold"},[a("span",{staticClass:"white--text"},[t._v("Turkish")]),a("br"),a("span",{staticClass:"grey--text"},[t._v("native")])]):t._e()]),a("transition",{attrs:{mode:"out-in",name:"fade"}},[a("div",{attrs:{id:"progress-bar-container"}},[a("div",{staticClass:"progress-bar-child progress"}),a("div",{staticClass:"progress-bar-child shrinker timelapse"})])])],1),a("v-flex",{staticClass:"mb-6",attrs:{md6:"",xs12:""}},[a("transition",{attrs:{mode:"out-in",name:"fade"}},[t.remainingFontVisible?a("p",{staticClass:"text-left .body-2 font-weight-bold"},[a("span",{staticClass:"white--text"},[t._v("English")]),a("br"),a("span",{staticClass:"grey--text"},[t._v("fluent")])]):t._e()]),a("transition",{attrs:{mode:"out-in",name:"fade"}},[a("div",{attrs:{id:"progress-bar-container"}},[a("div",{staticClass:"progress-bar-child progress"}),a("div",{staticClass:"progress-bar-child shrinker",staticStyle:{width:"10%"}})])]),a("transition",{attrs:{mode:"out-in",name:"fade"}},[t.remainingFontVisible?a("p",{staticClass:"text-left .body-1 font-weight-bold"},[a("span",{staticClass:"white--text"},[t._v("French")]),a("br"),a("span",{staticClass:"grey--text"},[t._v("basics")])]):t._e()]),a("transition",{attrs:{mode:"out-in",name:"fade"}},[a("div",{attrs:{id:"progress-bar-container"}},[a("div",{staticClass:"progress-bar-child progress"}),a("div",{staticClass:"progress-bar-child shrinker",staticStyle:{width:"60%"}})])])],1),a("v-flex",{staticClass:"mt-12",attrs:{md12:"",xs12:""}},[a("v-layout",[a("transition",{attrs:{mode:"out-in",name:"fade"}},[t.remainingFontVisible?a("p",{staticClass:"gradient-2 text-left headline font-weight-regular"},[t._v("Programming Skills")]):t._e()])],1)],1),a("transition",{attrs:{mode:"out-in",name:"fade"}},[a("v-flex",{attrs:{"mb-2":"",md3:"",xs4:""}},[t.remainingFontVisible?a("v-card",{attrs:{color:"black","max-width":"200px"}},[a("v-icon",{class:{"display-1":t.$vuetify.breakpoint.smAndDown,"display-4":t.$vuetify.breakpoint.mdAndUp},attrs:{color:"#5368d6"}},[t._v("mdi-language-javascript")]),a("v-spacer"),a("v-card-title",{staticClass:"  justify-center gradient-2",class:{"body-2":t.$vuetify.breakpoint.smAndDown}},[a("p",{staticClass:"gradient-2"},[t._v("JavaScripty")])])],1):t._e()],1)],1),a("v-flex",{attrs:{"mb-2":"",md3:"",xs4:""}},[a("v-card",{attrs:{color:"black","max-width":"200px"}},[a("v-icon",{class:{"display-1":t.$vuetify.breakpoint.smAndDown,"display-4":t.$vuetify.breakpoint.mdAndUp},attrs:{color:"#5368d6"}},[t._v("mdi-language-python")]),a("v-spacer"),a("v-card-title",{staticClass:"justify-center gradient-2",class:{"body-2":t.$vuetify.breakpoint.smAndDown}},[a("p",{staticClass:"gradient-2"},[t._v("Python")])])],1)],1),a("v-flex",{attrs:{"mb-2":"",md3:"",xs4:""}},[a("v-card",{attrs:{color:"black","max-width":"200px"}},[a("v-icon",{class:{"display-1":t.$vuetify.breakpoint.smAndDown,"display-4":t.$vuetify.breakpoint.mdAndUp},attrs:{color:"#5368d6"}},[t._v("mdi-language-cpp")]),a("v-spacer"),a("v-card-title",{staticClass:"justify-center gradient-2",class:{"body-2":t.$vuetify.breakpoint.smAndDown}},[a("p",{staticClass:"gradient-2"},[t._v("Embedded")])])],1)],1),a("v-flex",{attrs:{md3:""}}),a("v-flex",{attrs:{"mb-2":"",md3:"",xs4:""}},[a("v-card",{attrs:{dark:"",color:"black","max-width":"200px"}},[a("v-icon",{class:{"display-1":t.$vuetify.breakpoint.smAndDown,"display-4":t.$vuetify.breakpoint.mdAndUp},attrs:{color:"#5368d6"}},[t._v("mdi-language-css3")]),a("v-spacer"),a("v-card-title",{staticClass:"justify-center gradient-2",class:{"body-2":t.$vuetify.breakpoint.smAndDown}},[a("p",{staticClass:"gradient-2"},[t._v("CSS3")])])],1)],1),a("v-flex",{attrs:{"mb-2":"",md3:"",xs4:""}},[a("v-card",{attrs:{dark:"","max-width":"200px",color:"black","max-height":"200px"}},[a("v-icon",{class:{"display-1":t.$vuetify.breakpoint.smAndDown,"display-4":t.$vuetify.breakpoint.mdAndUp},attrs:{color:"#5368d6"}},[t._v("mdi-language-csharp")]),a("v-spacer"),a("v-card-title",{staticClass:"justify-center gradient-2",class:{"body-2":t.$vuetify.breakpoint.smAndDown}},[a("p",{staticClass:"gradient-2"},[t._v("Visual C#")])])],1)],1),a("v-flex",{attrs:{"mb-2":"",md3:"",xs4:""}},[a("v-card",{staticClass:"black",attrs:{dark:"","max-width":"200px"}},[a("v-icon",{class:{"display-1":t.$vuetify.breakpoint.smAndDown,"display-4":t.$vuetify.breakpoint.mdAndUp},attrs:{color:"#5368d6"}},[t._v("mdi-language-html5")]),a("v-spacer"),a("v-card-title",{staticClass:"justify-center gradient-2",class:{"body-2":t.$vuetify.breakpoint.smAndDown}},[a("p",{staticClass:"gradient-2"},[t._v("HTML5")])])],1)],1),a("v-flex",{attrs:{md3:""}}),a("v-flex",{staticClass:"mt-12",attrs:{md12:"",xs12:""}},[a("v-layout",[a("transition",{attrs:{mode:"out-in",name:"fade"}},[t.remainingFontVisible?a("p",{staticClass:"gradient-2 text-left headline font-weight-regular"},[t._v("Technologies")]):t._e()])],1)],1),a("v-flex",{attrs:{"mb-2":"",md3:"",xs4:""}},[a("v-card",{staticClass:'black grey--text max-width="200px"',attrs:{dark:""}},[a("v-icon",{class:{"display-1":t.$vuetify.breakpoint.smAndDown,"display-4":t.$vuetify.breakpoint.mdAndUp},attrs:{color:"#5368d6"}},[t._v("mdi-cloud")]),a("v-spacer"),a("v-card-title",{staticClass:"justify-center ",class:{"mt-2 body-2":t.$vuetify.breakpoint.smAndDown}},[a("p",{staticClass:"gradient-2"},[t._v("Cloud")])])],1)],1),a("v-flex",{attrs:{"mb-2":"",md3:"",xs4:""}},[a("v-card",{staticClass:"black slategrey",attrs:{"max-width":"200px","max-height":"200px"}},[a("p",{staticClass:"slategrey",class:{"headline ":t.$vuetify.breakpoint.smAndDown,"mt-5 display-3":t.$vuetify.breakpoint.mdAndUp}},[t._v("UI/UX")]),a("v-spacer"),a("v-card-title",{staticClass:"justify-center",class:{"body-2":t.$vuetify.breakpoint.smAndDown}},[a("p",{staticClass:"gradient-2"},[t._v("Frontend")])])],1)],1),a("v-flex",{attrs:{"mb-2":"",md3:"",xs4:""}},[a("v-card",{attrs:{color:"black\n        ","max-width":"200px"}},[a("v-icon",{staticClass:"slategrey",class:{"display-1":t.$vuetify.breakpoint.smAndDown,"display-4":t.$vuetify.breakpoint.mdAndUp},attrs:{color:"#5368d6"}},[t._v("mdi-azure")]),a("v-spacer"),a("v-card-title",{staticClass:" justify-center",class:{"body-2 mt-2":t.$vuetify.breakpoint.smAndDown}},[a("p",{staticClass:"gradient-2"},[t._v("CI/CD")])])],1)],1),a("v-flex",{attrs:{"md-3":"","xs-3":""}})],1)],1)],1)},D=[],U={name:"ResumeSection",methods:{toggleFontVisible:function(){var t=this;setTimeout((function(){t.counter=0}),500),setTimeout((function(){t.remainingFontVisible=!0}),1500)}},computed:{},data:function(){return{remainingFontVisible:!1}},mounted:function(){this.toggleFontVisible()},props:["date","stationHeading","stationBody","location","gradient"]},j=U,E=(a("5401"),a("b0af")),O=a("99d9"),T=a("132d"),H=a("2fa4"),N=Object(m["a"])(j,I,D,!1,null,"1f1d0b47",null),P=N.exports;v()(N,{VCard:E["a"],VCardTitle:O["a"],VContainer:_["a"],VFlex:b["a"],VIcon:T["a"],VLayout:h["a"],VSpacer:H["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},t._l(t.sections,(function(e){return a("ResumeSections",{key:e.date,attrs:{date:e.date,stationHeading:e.headings,stationBody:e.body,location:e.location,gradient:t.gradient}})})),1)],1)},G=[],R={name:"Education",components:{ResumeSections:x},methods:{},computed:{},data:function(){return{gradient:"gradient-1",sections:[{date:"March 18 - March 20",location:"University of Applied Sciences Reutlingen",headings:"Master of Science, Busines Information Systems. Grade-Ø 1.5",body:"Master thesis candidate @ Speech and Digital Assistants in Silicon Valley Headquarters for Mercedes-Benz North America Inc. "},{date:"March 14 - March 18",location:"University of Applied Sciences Ulm",headings:"Bachelor of Engineering, Medical/Mechatronical Engineering. Grade-Ø 1.8",body:"Bachelor's Degree in the area of Medical/Mechatronical Engineering. In the studies I had a special focus on electrical and software engineering."}]}},mounted:function(){}},z=R,X=(a("5778"),Object(m["a"])(z,L,G,!1,null,"1d804e46",null)),q=X.exports;v()(X,{VContainer:_["a"],VLayout:h["a"]});var J={name:"MainArea",components:{Career:A,Education:F,Skills:P,About:q},methods:{toggleFontVisible:function(){var t=this;setTimeout((function(){t.counter=0}),500),setTimeout((function(){t.remainingFontVisible=!0}),1500)},changeHeading:function(){var t=this;setInterval((function(){t.fontVisible=!1,t.counter++,t.counter>2&&(t.counter=0),t.heading=t.headings[t.counter],t.gradient="gradient-"+t.counter,t.fontVisible=!0}),5e3)}},computed:{bigFont:function(){return console.warn(this.$vuetify.breakpoint.mdAndUp),this.$vuetify.breakpoint.mdAndUp?"big-font":"display-4"}},data:function(){return{fontVisible:!1,remainingFontVisible:!1,counter:-1,heading:"Product.",headings:["Product.","UI/UX.","Design."],gradient:"gradient-0",gradients:["gradient-0","gradient-1","gradient-2","gradient-3"],selection:"Career",sections:[{section:"Career",gradient:"chip-gradient-0"},{section:"Education",gradient:"chip-gradient-1"},{section:"Skills",gradient:"chip-gradient-2"},{section:"About",gradient:"chip-gradient-3"}]}},mounted:function(){this.toggleFontVisible(),this.changeHeading()}},W=J,Y=(a("3740"),a("f1fe"),a("cc20")),K=a("ef9a"),Q=a("a75b"),Z=a("71d9"),tt=Object(m["a"])(W,r,o,!1,null,"04139c15",null),et=tt.exports;v()(tt,{VChip:Y["a"],VChipGroup:K["a"],VContainer:_["a"],VContent:Q["a"],VFlex:b["a"],VLayout:h["a"],VSpacer:H["a"],VToolbar:Z["a"]});var at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"black",dark:""}},[n("v-spacer"),n("v-spacer"),n("div",{staticClass:"align-center"},[n("transition",{attrs:{name:"fade"}},[t.appBarVisible?n("v-img",{staticClass:"contain",attrs:{alt:"Baybora Guelec",src:a("5b62"),width:"85"}}):t._e()],1)],1),n("v-spacer"),n("v-spacer"),n("v-spacer"),n("v-spacer"),n("v-spacer"),n("transition",{attrs:{name:"fade"}},[t.appBarVisible?n("v-btn",{attrs:{color:"grey",href:"https://www.linkedin.com/in/baybora-gülec-60465a160",target:"_blank",text:""}},[n("span",{staticClass:"mr-0 text"},[t._v("LinkedIN")])]):t._e()],1),n("transition",{attrs:{name:"fade"}},[t.appBarVisible?n("v-btn",{attrs:{color:"grey",href:"https://www.xing.com/profile/Baybora_Guelec",target:"_blank",text:""}},[n("span",{staticClass:"mr-0 text"},[t._v("XING")])]):t._e()],1),n("transition",{attrs:{name:"fade"}},[t.appBarVisible?n("v-btn",{attrs:{color:"grey",href:"https://github.com/gaskraank",target:"_blank",text:""}},[n("span",{staticClass:"mr-0 text"},[t._v("GitHub")])]):t._e()],1),n("transition",{attrs:{name:"fade"}},[t.appBarVisible?n("v-btn",{staticClass:"hidden-sm-and-down",attrs:{color:"grey",target:"_blank",text:""}},[n("span",{staticClass:"mr-0  text"},[t._v("bayboragulec@gmail.com")])]):t._e()],1),n("v-spacer"),n("v-spacer")],1)},nt=[],it={name:"Header",methods:{toggleAppBarVisible:function(){var t=this;setTimeout((function(){t.appBarVisible=!0}),1500)}},data:function(){return{appBarVisible:!1}},mounted:function(){this.toggleAppBarVisible()}},st=it,rt=(a("c600"),a("40dc")),ot=a("8336"),ct=a("adda"),lt=Object(m["a"])(st,at,nt,!1,null,"101f1f68",null),dt=lt.exports;v()(lt,{VAppBar:rt["a"],VBtn:ot["a"],VImg:ct["a"],VSpacer:H["a"]});var ut={name:"App",components:{MainArea:et,Header:dt},data:function(){return{}}},pt=ut,ft=(a("034f"),a("7496")),mt=Object(m["a"])(pt,i,s,!1,null,null,null),gt=mt.exports;v()(mt,{VApp:ft["a"],VContent:Q["a"]});a("d3b7");var vt=a("8c4f"),bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("MainArea")],1)},ht=[],yt={name:"home",components:{MainArea:et}},xt=yt,wt=Object(m["a"])(xt,bt,ht,!1,null,null,null),Ct=wt.exports;n["a"].use(vt["a"]);var _t=[{path:"/",name:"home",component:Ct},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],kt=new vt["a"]({routes:_t}),At=kt,Vt=a("2f62");n["a"].use(Vt["a"]);var St=new Vt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Mt=a("f309");n["a"].use(Mt["a"]);var $t=new Mt["a"]({icons:{iconfont:"mdi"},theme:{dark:!0,themes:{dark:{primary:"black",secondary:"#6575f0"},light:{primary:"#dedfe6",secondary:"#a1a4b8"}}}});n["a"].config.productionTip=!1,new n["a"]({template:"<App />",router:At,store:St,vuetify:$t,render:function(t){return t(gt)}}).$mount("#app")},5778:function(t,e,a){"use strict";var n=a("5337"),i=a.n(n);i.a},"5b62":function(t,e,a){t.exports=a.p+"img/logo.24bd7b1b.png"},"83ee":function(t,e,a){},"8a23":function(t,e,a){},a8e6:function(t,e,a){},b21e:function(t,e,a){"use strict";var n=a("a8e6"),i=a.n(n);i.a},bc37:function(t,e,a){},c118:function(t,e,a){"use strict";var n=a("83ee"),i=a.n(n);i.a},c39c:function(t,e,a){},c600:function(t,e,a){"use strict";var n=a("bc37"),i=a.n(n);i.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},f1fe:function(t,e,a){"use strict";var n=a("3c07"),i=a.n(n);i.a},feda:function(t,e,a){}});
//# sourceMappingURL=app.7884e982.js.map