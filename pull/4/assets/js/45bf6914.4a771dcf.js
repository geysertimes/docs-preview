"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[205],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(7462),n=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:o,values:c,groupId:d,className:k}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),y=(0,i.l)(N,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:f}=(0,s.U)(),[v,T]=(0,n.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=d){const e=h[d];null!=e&&e!==v&&N.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=w.indexOf(t),r=N[a].value;r!==v&&(I(t),T(r),null!=d&&f(d,String(r)))},x=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},k)},N.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>w.push(e),onKeyDown:x,onClick:O},o,{className:(0,l.Z)("tabs__item",m,o?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,n.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function d(e){const t=(0,o.Z)();return n.createElement(c,(0,r.Z)({key:String(t)},e))}},7008:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var r=a(7462),n=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={title:"Manage Account"},s="View your profile and manage your account",u={unversionedId:"users/account",id:"users/account",title:"Manage Account",description:"In your profile, you can view your contributions and manage your account. This includes the option to permanently delete your account.",source:"@site/docs/users/account.md",sourceDirName:"users",slug:"/users/account",permalink:"/docs-preview/pull/4/users/account",draft:!1,editUrl:"https://github.com/geysertimes/docs/edit/main/docs/users/account.md",tags:[],version:"current",frontMatter:{title:"Manage Account"},sidebar:"users",previous:{title:"Login & Logout",permalink:"/docs-preview/pull/4/users/account-login"},next:{title:"Submit Eruption",permalink:"/docs-preview/pull/4/users/submit-eruption"}},p={},m=[{value:"View your contributions",id:"view-your-contributions",level:2},{value:"View and update your user profile",id:"view-and-update-your-user-profile",level:2},{value:"Update your password",id:"update-your-password",level:2},{value:"Reset your password",id:"reset-your-password",level:2},{value:"Delete your account",id:"delete-your-account",level:2}],c={toc:m};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"view-your-profile-and-manage-your-account"},"View your profile and manage your account"),(0,n.kt)("p",null,"In your profile, you can view your contributions and manage your account. This includes the option to permanently delete your account. "),(0,n.kt)("h2",{id:"view-your-contributions"},"View your contributions"),(0,n.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit ",(0,n.kt)("a",{parentName:"li",href:"https://geysertimes.org"},"GeyserTimes")," with your browser."),(0,n.kt)("li",{parentName:"ul"},"Log in to your account."),(0,n.kt)("li",{parentName:"ul"},"In the top toolbar, click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://geysertimes.org/user/"},"\ud83d\udc64 ","<","Username",">")),"."))),(0,n.kt)(o.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,n.kt)("li",{parentName:"ul"},"Log in to your account."),(0,n.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,n.kt)("strong",{parentName:"li"},"Settings"),". "),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Account")," settings, tap ",(0,n.kt)("strong",{parentName:"li"},"<","Username",">"),"."))),(0,n.kt)(o.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,n.kt)("li",{parentName:"ul"},"Log in to your account."),(0,n.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,n.kt)("strong",{parentName:"li"},"Settings"),". "),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Account")," settings, tap ",(0,n.kt)("strong",{parentName:"li"},"<","Username",">"),".")))),(0,n.kt)("h2",{id:"view-and-update-your-user-profile"},"View and update your user profile"),(0,n.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit ",(0,n.kt)("a",{parentName:"li",href:"https://geysertimes.org"},"GeyserTimes")," with your browser."),(0,n.kt)("li",{parentName:"ul"},"Log in to your account."),(0,n.kt)("li",{parentName:"ul"},"In the top toolbar, click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://geysertimes.org/user/"},"\ud83d\udc64 ","<","Username",">")),"."),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Tools")," card, click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://geysertimes.org/user/manageProfile.php"},"Manage Profile")),"."),(0,n.kt)("li",{parentName:"ul"},"Enter your updated name or your updated email address. "),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Submit"),"."))),(0,n.kt)(o.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,n.kt)("li",{parentName:"ul"},"Log in to your account."),(0,n.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,n.kt)("strong",{parentName:"li"},"Settings"),". "),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Account")," settings, tap ",(0,n.kt)("strong",{parentName:"li"},"Manage Account"),"."),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Forgot password?"),"."),(0,n.kt)("li",{parentName:"ul"},"Enter your updated name and your updated email address. "),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Update Profile"),"."))),(0,n.kt)(o.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,n.kt)("li",{parentName:"ul"},"Log in to your account."),(0,n.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,n.kt)("strong",{parentName:"li"},"Settings"),". "),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Account")," settings, tap ",(0,n.kt)("strong",{parentName:"li"},"Manage Account"),"."),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Forgot password?"),"."),(0,n.kt)("li",{parentName:"ul"},"Enter your updated name and your updated email address."),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Update Profile"),".")))),(0,n.kt)("h2",{id:"update-your-password"},"Update your password"),(0,n.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit ",(0,n.kt)("a",{parentName:"li",href:"https://geysertimes.org"},"GeyserTimes")," with your browser."),(0,n.kt)("li",{parentName:"ul"},"Log in to your account."),(0,n.kt)("li",{parentName:"ul"},"In the top toolbar, click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://geysertimes.org/user/"},"\ud83d\udc64 ","<","Username",">")),"."),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Tools")," card, click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://geysertimes.org/user/manageProfile.php"},"Manage Profile")),"."),(0,n.kt)("li",{parentName:"ul"},"Enter your old and updated password. "),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Submit"),"."))),(0,n.kt)(o.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,n.kt)("li",{parentName:"ul"},"Log in to your account."),(0,n.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,n.kt)("strong",{parentName:"li"},"Settings"),". "),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Account")," settings, tap ",(0,n.kt)("strong",{parentName:"li"},"Manage Account"),"."),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Forgot password?"),"."),(0,n.kt)("li",{parentName:"ul"},"Enter your old and updated password. "),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Update Password"),"."))),(0,n.kt)(o.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,n.kt)("li",{parentName:"ul"},"Log in to your account."),(0,n.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,n.kt)("strong",{parentName:"li"},"Settings"),". "),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Account")," settings, tap ",(0,n.kt)("strong",{parentName:"li"},"Manage Account"),"."),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Forgot password?"),"."),(0,n.kt)("li",{parentName:"ul"},"Enter your old and updated password. "),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Update Password"),".")))),(0,n.kt)("h2",{id:"reset-your-password"},"Reset your password"),(0,n.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit ",(0,n.kt)("a",{parentName:"li",href:"https://geysertimes.org"},"GeyserTimes")," with your browser."),(0,n.kt)("li",{parentName:"ul"},"In the top toolbar, click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://geysertimes.org/login.php"},"Sign In")),"."),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Forgot password?"),"."),(0,n.kt)("li",{parentName:"ul"},"Enter the email address of your account into the text field. "),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Reset Password"),"."))),(0,n.kt)(o.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,n.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,n.kt)("strong",{parentName:"li"},"Settings"),". "),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Account")," settings, tap ",(0,n.kt)("strong",{parentName:"li"},"Login"),"."),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Forgot password?"),"."),(0,n.kt)("li",{parentName:"ul"},"Enter the email address of your account into the text field. "),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Reset Password"),"."))),(0,n.kt)(o.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,n.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,n.kt)("strong",{parentName:"li"},"Settings"),". "),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Account")," settings, tap ",(0,n.kt)("strong",{parentName:"li"},"Login"),"."),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Forgot password?"),"."),(0,n.kt)("li",{parentName:"ul"},"Enter the email address of your account into the text field. "),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Reset Password"),".")))),(0,n.kt)("h2",{id:"delete-your-account"},"Delete your account"),(0,n.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit ",(0,n.kt)("a",{parentName:"li",href:"https://geysertimes.org"},"GeyserTimes")," with your browser."),(0,n.kt)("li",{parentName:"ul"},"Log in to your account."),(0,n.kt)("li",{parentName:"ul"},"In the top toolbar, click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://geysertimes.org/user/"},"\ud83d\udc64 ","<","Username",">")),"."),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Tools")," card, click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://geysertimes.org/user/manageProfile.php"},"Manage Profile")),"."),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Delete Account"),"."))),(0,n.kt)(o.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,n.kt)("li",{parentName:"ul"},"Log in to your account."),(0,n.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,n.kt)("strong",{parentName:"li"},"Settings"),". "),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Account")," settings, tap ",(0,n.kt)("strong",{parentName:"li"},"Manage Account"),"."),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Delete Account"),"."),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Delete")," in the dialog to proceed."))),(0,n.kt)(o.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,n.kt)("li",{parentName:"ul"},"Log in to your account."),(0,n.kt)("li",{parentName:"ul"},"In the bottom navigation bar, tap ",(0,n.kt)("strong",{parentName:"li"},"Settings"),". "),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Account")," settings, tap ",(0,n.kt)("strong",{parentName:"li"},"Manage Account"),"."),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Delete Account"),"."),(0,n.kt)("li",{parentName:"ul"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Delete")," in the dialog to proceed.")))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"If you delete your account, all personal data will be immediately and permanently deleted. Once deleted, an account can't be restored.")))}d.isMDXComponent=!0}}]);