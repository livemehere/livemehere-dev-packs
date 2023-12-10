"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[519],{6080:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var s=n(2322),t=n(5392);const l={sidebar_position:5,title:"hooks"},a=void 0,r={id:"async-modal-react/hooks",title:"hooks",description:"useModal hooks example",source:"@site/docs/async-modal-react/hooks.mdx",sourceDirName:"async-modal-react",slug:"/async-modal-react/hooks",permalink:"/livemehere-dev-packs/ko/docs/async-modal-react/hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/livemehere/livemehere-dev-packs/docs/async-modal-react/hooks.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"hooks"},sidebar:"tutorialSidebar",previous:{title:"Create Modal Component",permalink:"/livemehere-dev-packs/ko/docs/async-modal-react/create-modal-component"},next:{title:"Customization",permalink:"/livemehere-dev-packs/ko/docs/async-modal-react/customize"}},d={},c=[{value:"useModal hooks example",id:"usemodal-hooks-example",level:2},{value:"pushModal Full Options",id:"pushmodal-full-options",level:3}];function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"usemodal-hooks-example",children:"useModal hooks example"}),"\n",(0,s.jsx)(o.p,{children:"There are two functions in the useModal hook."}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"pushModal"})," : add modal to modal stack"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"closeAllModals"})," : clear all modal stack"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-tsx",children:'import ExampleModal from "./components/ExampleModal";\nimport { useModal } from "async-modal-react";\n\nfunction App() {\n  const { pushModal, closeAllModals } = useModal();\n\n  const openModal = async () => {\n    try {\n      // resolve\n      const result = await pushModal(ExampleModal);\n      console.log(result);\n    } catch (e) {\n      // reject, close\n      console.log(e);\n    }\n  };\n\n  return (\n    <div>\n      <button onClick={openModal}>OPEN</button>\n    </div>\n  );\n}\n\nexport default App;\n'})}),"\n",(0,s.jsx)(o.h3,{id:"pushmodal-full-options",children:"pushModal Full Options"}),"\n",(0,s.jsxs)(o.p,{children:["In ",(0,s.jsx)(o.code,{children:"Setup"})," section, you can see the default options with ",(0,s.jsx)(o.code,{children:"ModalProvider"}),".\nYou can override the default options by passing the options as the third parameter of ",(0,s.jsx)(o.code,{children:"pushModal"}),"."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-tsx",children:"const result = await pushModal<ReturnType, Props>(\n  ExampleModal, // Modal Component\n  {}, // ExampleModal props\n  {\n    // Individual options\n    onClickOutsideClose: true,\n    disableScroll: true,\n  },\n);\n"})})]})}function p(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},5392:(e,o,n)=>{n.d(o,{Z:()=>r,a:()=>a});var s=n(2784);const t={},l=s.createContext(t);function a(e){const o=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:o},e.children)}}}]);