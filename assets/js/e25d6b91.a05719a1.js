"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[962],{3510:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=o(2322),r=o(5392);const s={sidebar_position:4,title:"Create Modal Component"},a=void 0,l={id:"async-modal-react/create-modal-component",title:"Create Modal Component",description:"1. Create Modal with essential props",source:"@site/docs/async-modal-react/create-modal-component.mdx",sourceDirName:"async-modal-react",slug:"/async-modal-react/create-modal-component",permalink:"/livemehere-dev-packs/docs/async-modal-react/create-modal-component",draft:!1,unlisted:!1,editUrl:"https://github.com/livemehere/livemehere-dev-packs/docs/async-modal-react/create-modal-component.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Create Modal Component"},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/livemehere-dev-packs/docs/async-modal-react/setup"},next:{title:"hooks",permalink:"/livemehere-dev-packs/docs/async-modal-react/hooks"}},c={},d=[{value:"1. Create Modal with essential props",id:"1-create-modal-with-essential-props",level:2},{value:"typescript supports",id:"typescript-supports",level:3}];function i(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"1-create-modal-with-essential-props",children:"1. Create Modal with essential props"}),"\n",(0,n.jsxs)(t.p,{children:["There are 3 essential props to create modal component. ",(0,n.jsx)(t.code,{children:"close"}),", ",(0,n.jsx)(t.code,{children:"resolve"}),", ",(0,n.jsx)(t.code,{children:"reject"}),".\nif one of those called, modal will be closed and return or throw value to caller.(",(0,n.jsx)(t.code,{children:"pushModal()"})," : next step will explain)"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'const ExampleModal = ({ close, resolve, reject }) => {\n  return (\n    <div>\n      <h2>ExampleModal</h2>\n      <button onClick={() => resolve(`resolve value here`)}>RESOLVE</button>\n      <button onClick={() => reject("reject value here")}>REJECT</button>\n      <button onClick={close}>Close</button>\n    </div>\n  );\n};\n\nexport default ExampleModal;\n'})}),"\n",(0,n.jsx)(t.h3,{id:"typescript-supports",children:"typescript supports"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"export interface ModalProps {\n  close: () => void;\n  resolve: <Result = any>(v: Result) => void;\n  reject: <Reason = any>(reason: Reason) => void;\n}\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { ModalProps } from "async-modal-react/types/modal";\n\nexport interface ExampleProps extends ModalProps {\n  name: string;\n}\n\nconst ExampleModal = ({ close, resolve, reject, name }: ExampleProps) => {\n  return (\n    <div>\n      <h2>ExampleModal</h2>\n      <button onClick={() => resolve(`resolve value here`)}>RESOLVE</button>\n      <button onClick={() => reject("reject value here")}>REJECT</button>\n      <button onClick={close}>Close</button>\n    </div>\n  );\n};\n\nexport default ExampleModal;\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},5392:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>a});var n=o(2784);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);