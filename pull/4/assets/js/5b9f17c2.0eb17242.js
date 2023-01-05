"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[511],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:o,values:m,groupId:d,className:y}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,i.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:g}=(0,s.U)(),[N,T]=(0,r.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=d){const e=h[d];null!=e&&e!==N&&k.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,a=O.indexOf(t),n=k[a].value;n!==N&&(w(t),T(n),null!=d&&g(d,String(n)))},S=e=>{let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},y)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:S,onClick:I},o,{className:(0,l.Z)("tabs__item",c,o?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},833:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={},s="Customize the sync and database settings of your app",u={unversionedId:"users/settings-sync",id:"users/settings-sync",title:"Customize the sync and database settings of your app",description:"You can customize your sync and database settings of your app.",source:"@site/docs/users/settings-sync.md",sourceDirName:"users",slug:"/users/settings-sync",permalink:"/docs-preview/pull/4/users/settings-sync",draft:!1,editUrl:"https://github.com/geysertimes/docs/edit/main/docs/users/settings-sync.md",tags:[],version:"current",frontMatter:{}},p={},c=[{value:"Customize to only sync over Wi-Fi",id:"customize-to-only-sync-over-wi-fi",level:2},{value:"Customize automatic sync",id:"customize-automatic-sync",level:2},{value:"Customize sync interval",id:"customize-sync-interval",level:2},{value:"Customize first date in the database",id:"customize-first-date-in-the-database",level:2},{value:"Clean database",id:"clean-database",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"customize-the-sync-and-database-settings-of-your-app"},"Customize the sync and database settings of your app"),(0,r.kt)("p",null,"You can customize your sync and database settings of your app. "),(0,r.kt)("h2",{id:"customize-to-only-sync-over-wi-fi"},"Customize to only sync over Wi-Fi"),(0,r.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,r.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,r.kt)("strong",{parentName:"li"},"Settings"),". "),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Sync")," settings, turn ",(0,r.kt)("strong",{parentName:"li"},"Sync over Wi-Fi only")," on to restrict automatic data downloads to Wi-Fi connections only or off to allow automatic data downloads regardless of network type."))),(0,r.kt)(o.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,r.kt)("p",null,"This feature is not available on the app for iOS yet. "))),(0,r.kt)("h2",{id:"customize-automatic-sync"},"Customize automatic sync"),(0,r.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,r.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,r.kt)("strong",{parentName:"li"},"Settings"),". "),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Sync")," settings, turn ",(0,r.kt)("strong",{parentName:"li"},"Automatic sync")," on to allow automatic data downloads after a period of time or immediatly when new data is available or off to allow manual data downloads only."))),(0,r.kt)(o.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,r.kt)("p",null,"This feature is not available on the app for iOS yet. "))),(0,r.kt)("h2",{id:"customize-sync-interval"},"Customize sync interval"),(0,r.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,r.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,r.kt)("strong",{parentName:"li"},"Settings"),". "),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Sync")," settings, tap ",(0,r.kt)("strong",{parentName:"li"},"Sync interval"),"."),(0,r.kt)("li",{parentName:"ul"},"Tap the desired sync interval (e.g. ",(0,r.kt)("strong",{parentName:"li"},"Automatic"),", if you want automatic data downloads).")),(0,r.kt)("p",null,"The following sync intervals are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Every 15 minutes"),(0,r.kt)("li",{parentName:"ul"},"Every 30 minutes"),(0,r.kt)("li",{parentName:"ul"},"Every 1 hour"),(0,r.kt)("li",{parentName:"ul"},"Every 2 hours"),(0,r.kt)("li",{parentName:"ul"},"Every 3 hours"),(0,r.kt)("li",{parentName:"ul"},"Automatic"))),(0,r.kt)(o.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,r.kt)("p",null,"This feature is not available on the app for iOS yet. "))),(0,r.kt)("h2",{id:"customize-first-date-in-the-database"},"Customize first date in the database"),(0,r.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,r.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,r.kt)("strong",{parentName:"li"},"Settings"),". "),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Database")," settings, tap ",(0,r.kt)("strong",{parentName:"li"},"First date in database"),"."),(0,r.kt)("li",{parentName:"ul"},"Enter the desired first date in the database with the date picker. "),(0,r.kt)("li",{parentName:"ul"},"Tap ",(0,r.kt)("strong",{parentName:"li"},"OK")," to proceed."))),(0,r.kt)(o.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,r.kt)("p",null,"This feature is not available on the app for iOS yet. "))),(0,r.kt)("h2",{id:"clean-database"},"Clean database"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If you clean the database, all local data will be deleted and downloaded again. Entries and changes that have not been synced yet will be lost. A data connection is required and Wi-Fi is recommended.  ")),(0,r.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,r.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,r.kt)("strong",{parentName:"li"},"Settings"),". "),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Database")," settings, tap ",(0,r.kt)("strong",{parentName:"li"},"Clean database"),"."),(0,r.kt)("li",{parentName:"ul"},"Read the warning and tap ",(0,r.kt)("strong",{parentName:"li"},"Continue")," in the dialog to proceed.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can check for unsynced data through the settings:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,r.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,r.kt)("strong",{parentName:"li"},"Settings"),". "),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Account")," settings, tap ",(0,r.kt)("strong",{parentName:"li"},"Sync Info"),".")))),(0,r.kt)(o.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,r.kt)("p",null,"This feature is not available on the app for iOS yet. "))))}d.isMDXComponent=!0}}]);