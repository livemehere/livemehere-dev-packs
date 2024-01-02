"use strict";(self.webpackChunklivemehere_dev_packs=self.webpackChunklivemehere_dev_packs||[]).push([[5398],{477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=r(2322),a=r(5392),o=r(7336),l=r(2009);const s={sidebar_position:3,title:"Setup"},u=void 0,i={id:"async-modal-react/setup",title:"Setup",description:"Wrap your top level component with the ModalProvider",source:"@site/docs/async-modal-react/setup.mdx",sourceDirName:"async-modal-react",slug:"/async-modal-react/setup",permalink:"/livemehere-dev-packs/ko/docs/async-modal-react/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/livemehere/livemehere-dev-packs/docs/async-modal-react/setup.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Setup"},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/livemehere-dev-packs/ko/docs/async-modal-react/install"},next:{title:"Create Modal Component",permalink:"/livemehere-dev-packs/ko/docs/async-modal-react/create-modal-component"}},c={},d=[{value:"Wrap your top level component with the <code>ModalProvider</code>",id:"wrap-your-top-level-component-with-the-modalprovider",level:2},{value:"with props",id:"with-props",level:3}];function p(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h2,{id:"wrap-your-top-level-component-with-the-modalprovider",children:["Wrap your top level component with the ",(0,n.jsx)(t.code,{children:"ModalProvider"})]}),"\n",(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(l.Z,{value:"react",label:"React",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:"title='main.jsx'",children:'import { ModalProvider } from "async-modal-react";\r\n\r\nReactDOM.createRoot(document.getElementById("root")).render(\r\n    <ModalProvider>\r\n        <App />\r\n    </ModalProvider>,\r\n);\n'})})}),(0,n.jsx)(l.Z,{value:"next.js",label:"Next.js",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="pages/_app.jsx"',children:'import { ModalProvider } from "async-modal-react";\r\n\r\nexport default function MyApp({ Component, pageProps }) {\r\n    return <ModalProvider>\r\n             <Component {...pageProps} />\r\n           </ModalProvider>\r\n    }\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"with-props",children:"with props"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="main.jsx"',children:"<ModalProvider\r\n  closeOnOutsideClick={true} // default: true, close modal when clicking outside of the modal\r\n  disableBodyScrollWhenOpen={true} // default: true, disable body scroll when modal is open\r\n  closeOnRouteChange={true} // default: true, close modal when route changes (exactly close on popstate event from window)\r\n>\r\n  // ...\r\n</ModalProvider>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Done! Now you can use the ",(0,n.jsx)(t.code,{children:"useModal"})," hook to open and close modals."]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},2009:(e,t,r)=>{r.d(t,{Z:()=>l});r(2784);var n=r(489);const a={tabItem:"tabItem_OMyP"};var o=r(2322);function l(e){let{children:t,hidden:r,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:r,children:t})}},7336:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(2784),a=r(489),o=r(4126),l=r(7267),s=r(164),u=r(2424),i=r(2244),c=r(4155);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,d]=h({queryString:r,groupId:a}),[v,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=i??v;return m({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=r(9741);const b={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};var g=r(2322);function y(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=s[r].value;a!==n&&(i(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=v(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function j(e){const t=(0,f.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},5392:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>l});var n=r(2784);const a={},o=n.createContext(a);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);