"use strict";(self.webpackChunklivemehere_dev_packs=self.webpackChunklivemehere_dev_packs||[]).push([[2260],{5173:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(2322),i=t(5392);const r={sidebar_position:6,title:"Customization"},s=void 0,a={id:"async-modal-react/customize",title:"Customization",description:"This library focuses on providing a simple and easy to use API for creating.",source:"@site/docs/async-modal-react/customize.mdx",sourceDirName:"async-modal-react",slug:"/async-modal-react/customize",permalink:"/livemehere-dev-packs/ko/docs/async-modal-react/customize",draft:!1,unlisted:!1,editUrl:"https://github.com/livemehere/livemehere-dev-packs/docs/async-modal-react/customize.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Customization"},sidebar:"tutorialSidebar",previous:{title:"hooks",permalink:"/livemehere-dev-packs/ko/docs/async-modal-react/hooks"},next:{title:"simple-tooltip-react",permalink:"/livemehere-dev-packs/ko/docs/category/simple-tooltip-react"}},c={},l=[{value:"Customizing top container",id:"customizing-top-container",level:2},{value:"Customizing modal position",id:"customizing-modal-position",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This library focuses on providing a simple and easy to use API for creating.\r\nso it has common styles for default. (background, centering)."}),"\n",(0,o.jsx)(n.p,{children:"And this lib can open multiple modals at the same time but those modals layout is flexbox."}),"\n",(0,o.jsx)(n.h2,{id:"customizing-top-container",children:"Customizing top container"}),"\n",(0,o.jsxs)(n.p,{children:["select top container by ",(0,o.jsx)(n.code,{children:'id="modal-root"'}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"title='default'",children:'<div\r\n  id="modal-root"\r\n  style={{\r\n    position: "fixed",\r\n    top: 0,\r\n    left: 0,\r\n    width: "100%",\r\n    height: "100%",\r\n    background: "rgba(0, 0, 0, 0.5)",\r\n    display: "flex",\r\n    justifyContent: "center",\r\n    alignItems: "center",\r\n  }}\r\n>\r\n  {children}\r\n</div>\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",metastring:"title='global.css'",children:"#modal-root {\r\n  background: blue !important;\r\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"customizing-modal-position",children:"Customizing modal position"}),"\n",(0,o.jsxs)(n.p,{children:["Normally, modal is centered by ",(0,o.jsx)(n.code,{children:"display: flex; justify-content: center; align-items: center;"}),".\r\nIf there are more than 2 modal opened, those modals are displayed in a row.\r\nso maybe you need to give ",(0,o.jsx)(n.code,{children:"position: absolute;"})," to each modal."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"title='example-modal'",children:'// ...\r\nreturn (\r\n  <div\r\n    style={{\r\n      background: "white",\r\n      position: "absolute",\r\n    }}\r\n  >\r\n    <h2>ExampleModal</h2>\r\n    <button onClick={() => resolve(`resolve! ${name}`)}>RESOLVE</button>\r\n    <button onClick={() => reject("reject T-T")}>REJECT</button>\r\n    <button onClick={close}>Close</button>\r\n    <button onClick={openModal}>OPEN</button>\r\n  </div>\r\n);\n'})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},5392:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(2784);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);