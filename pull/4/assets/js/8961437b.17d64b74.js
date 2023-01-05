"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),h=n,b=m["".concat(s,".").concat(h)]||m[h]||p[h]||l;return a?r.createElement(b,o(o({ref:t},c),{},{components:a})):r.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(7462),n=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:o,values:p,groupId:h,className:b}=e,d=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=p??d.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),k=(0,i.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??d.find((e=>e.props.default))?.props.value??d[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:g}=(0,s.U)(),[w,T]=(0,n.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=h){const e=f[h];null!=e&&e!==w&&y.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,a=N.indexOf(t),r=y[a].value;r!==w&&(O(t),T(r),null!=h&&g(h,String(r)))},I=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]??N[N.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},b)},y.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:I,onClick:E},o,{className:(0,l.Z)("tabs__item",m,o?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,n.cloneElement)(d.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},d.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,o.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},158:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var r=a(7462),n=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={},s="View the webcam",u={unversionedId:"users/view-webcam",id:"users/view-webcam",title:"View the webcam",description:"You can watch the Old Faithful live streaming webcam.",source:"@site/docs/users/view-webcam.md",sourceDirName:"users",slug:"/users/view-webcam",permalink:"/docs-preview/pull/4/users/view-webcam",draft:!1,editUrl:"https://github.com/geysertimes/docs/edit/main/docs/users/view-webcam.md",tags:[],version:"current",frontMatter:{}},c={},m=[{value:"Cast the webcam to your TV",id:"cast-the-webcam-to-your-tv",level:2},{value:"Chat with others",id:"chat-with-others",level:2}],p={toc:m};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"view-the-webcam"},"View the webcam"),(0,n.kt)("p",null,"You can watch the Old Faithful live streaming webcam."),(0,n.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit the ",(0,n.kt)("a",{parentName:"li",href:"https://chat.geysertimes.org/"},"GeyserTimes Webcam Dashboard")," with your browser."))),(0,n.kt)(o.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,n.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,n.kt)("strong",{parentName:"li"},"Webcam"),". "))),(0,n.kt)(o.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,n.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,n.kt)("strong",{parentName:"li"},"Webcam"),".")))),(0,n.kt)("h2",{id:"cast-the-webcam-to-your-tv"},"Cast the webcam to your TV"),(0,n.kt)("p",null,"You can cast the Old Faithful live stream to your TV using Google Chromecast."),(0,n.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,n.kt)("p",null,"This feature is only available with the Google Chrome and Microsoft Edge browsers."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit the ",(0,n.kt)("a",{parentName:"li",href:"https://chat.geysertimes.org/"},"GeyserTimes Webcam Dashboard")," with your browser."),(0,n.kt)("li",{parentName:"ul"},"If using Google Chrome, click the ",(0,n.kt)("strong",{parentName:"li"},"More icon (\u22ee)")," \u203a ",(0,n.kt)("strong",{parentName:"li"},"Cast..."),". If using Microsoft Edge, click the ",(0,n.kt)("strong",{parentName:"li"},"Settings and More icon (\u2026)")," \u203a ",(0,n.kt)("strong",{parentName:"li"},"More tools")," \u203a ",(0,n.kt)("strong",{parentName:"li"},"Cast media to device"),". "))),(0,n.kt)(o.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,n.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,n.kt)("strong",{parentName:"li"},"Webcam"),". "),(0,n.kt)("li",{parentName:"ul"},"Tap the ",(0,n.kt)("strong",{parentName:"li"},"Cast icon")," in the bottom bar of the video player."))),(0,n.kt)(o.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,n.kt)("p",null,"Chromecast is not available on your iPhone or iPad, but you can use AirPlay instead."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,n.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,n.kt)("strong",{parentName:"li"},"Webcam"),"."),(0,n.kt)("li",{parentName:"ul"},"Tap the ",(0,n.kt)("strong",{parentName:"li"},"Cast icon")," in the upper right-hand corner.")))),(0,n.kt)("h2",{id:"chat-with-others"},"Chat with others"),(0,n.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit the ",(0,n.kt)("a",{parentName:"li",href:"https://chat.geysertimes.org/"},"GeyserTimes Webcam Dashboard")," with your browser."),(0,n.kt)("li",{parentName:"ul"},"Enter a nickname and click ",(0,n.kt)("strong",{parentName:"li"},"OK"),"."),(0,n.kt)("li",{parentName:"ul"},"To send a message, enter your message into the text field of the chat and click ",(0,n.kt)("strong",{parentName:"li"},"Send"),"."))),(0,n.kt)(o.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,n.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,n.kt)("strong",{parentName:"li"},"Webcam"),". "),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Join Chat")," to visit the ",(0,n.kt)("a",{parentName:"li",href:"https://chat.geysertimes.org/mchat.php"},"GeyserTimes Webcam Chat")," with your browser. ")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Split the screen to simultenously watch the webcam on the GeyserTimes app and chat with your browser. "))),(0,n.kt)(o.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit the ",(0,n.kt)("a",{parentName:"li",href:"https://chat.geysertimes.org/mchat.php"},"GeyserTimes Webcam Chat")," with your browser.")))))}h.isMDXComponent=!0}}]);