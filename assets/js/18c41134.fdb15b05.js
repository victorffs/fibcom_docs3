"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[859],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3494:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},Highlight:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},l="Markdown Features",c={unversionedId:"tutorial-basics/markdown-features",id:"tutorial-basics/markdown-features",title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/tutorial-basics/markdown-features.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/markdown-features",permalink:"/fibcom_docs3/docs/tutorial-basics/markdown-features",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/markdown-features.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a Blog Post",permalink:"/fibcom_docs3/docs/tutorial-basics/create-a-blog-post"},next:{title:"Deploy your site",permalink:"/fibcom_docs3/docs/tutorial-basics/deploy-your-site"}},u=[{value:"Front Matter",id:"front-matter",children:[],level:2},{value:"Links",id:"links",children:[],level:2},{value:"Images",id:"images",children:[],level:2},{value:"Code Blocks",id:"code-blocks",children:[],level:2},{value:"Admonitions",id:"admonitions",children:[],level:2},{value:"MDX and React Components",id:"mdx-and-react-components",children:[],level:2}],d=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:function(){alert("You clicked the color "+n+" with label "+t)}},t)},p={toc:u,Highlight:d};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"markdown-features"},"Markdown Features"),(0,o.kt)("p",null,"Docusaurus supports ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown"))," and a few ",(0,o.kt)("strong",{parentName:"p"},"additional features"),"."),(0,o.kt)("h2",{id:"front-matter"},"Front Matter"),(0,o.kt)("p",null,"Markdown documents have metadata at the top called ",(0,o.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("p",null,"Regular Markdown links are supported, using url paths or relative file paths."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](/create-a-page).\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](./create-a-page.md).\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Let's see how to ",(0,o.kt)("a",{parentName:"p",href:"/fibcom_docs3/docs/tutorial-basics/create-a-page"},"Create a page"),"."),(0,o.kt)("h2",{id:"images"},"Images"),(0,o.kt)("p",null,"Regular Markdown images are supported."),(0,o.kt)("p",null,"Add an image at ",(0,o.kt)("inlineCode",{parentName:"p"},"static/img/docusaurus.png")," and display it in Markdown:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](/img/docusaurus.png)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus logo",src:n(7920).Z})),(0,o.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,o.kt)("p",null,"Markdown code blocks are supported with Syntax highlighting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),(0,o.kt)("h2",{id:"admonitions"},"Admonitions"),(0,o.kt)("p",null,"Docusaurus has a special syntax to create admonitions and callouts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":::tip My tip\n\nUse this awesome feature option\n\n:::\n\n:::danger Take care\n\nThis action is dangerous\n\n:::\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"My tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use this awesome feature option"))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Take care")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This action is dangerous"))),(0,o.kt)("h2",{id:"mdx-and-react-components"},"MDX and React Components"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," can make your documentation more ",(0,o.kt)("strong",{parentName:"p"},"interactive")," and allows using any ",(0,o.kt)("strong",{parentName:"p"},"React components inside Markdown"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n")),(0,o.kt)("p",null,"This is ",(0,o.kt)(d,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !"),(0,o.kt)("p",null,"This is ",(0,o.kt)(d,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," !"))}m.isMDXComponent=!0},7920:function(e,t,n){t.Z=n.p+"assets/images/docusaurus-2c8a5302ba317d0784757cf578511cd9.png"}}]);