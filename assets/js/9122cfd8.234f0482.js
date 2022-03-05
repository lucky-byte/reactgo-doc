"use strict";(self.webpackChunkreactgo_doc=self.webpackChunkreactgo_doc||[]).push([[9387],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||c;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1928:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=["components"],a={},u="\u4e24\u56e0\u7d20\u8ba4\u8bc1",l={unversionedId:"\u8fdb\u9636\u6307\u5357/\u7528\u6237\u767b\u5f55/\u4e24\u56e0\u7d20\u8ba4\u8bc1",id:"\u8fdb\u9636\u6307\u5357/\u7528\u6237\u767b\u5f55/\u4e24\u56e0\u7d20\u8ba4\u8bc1",title:"\u4e24\u56e0\u7d20\u8ba4\u8bc1",description:"ReactGO \u652f\u6301\u77ed\u4fe1\u548c TOTP \u4e24\u56e0\u7d20\u8ba4\u8bc1\uff0c\u4ee5\u63d0\u9ad8\u5b89\u5168\u6027\uff0c\u8fd9\u4e24\u79cd\u65b9\u5f0f\u90fd\u662f\u53ef\u4ee5\u6839\u636e\u9700\u8981\u6253\u5f00\u548c\u5173\u95ed\u3002",source:"@site/docs/3-\u8fdb\u9636\u6307\u5357/6-\u7528\u6237\u767b\u5f55/1-\u4e24\u56e0\u7d20\u8ba4\u8bc1.md",sourceDirName:"3-\u8fdb\u9636\u6307\u5357/6-\u7528\u6237\u767b\u5f55",slug:"/\u8fdb\u9636\u6307\u5357/\u7528\u6237\u767b\u5f55/\u4e24\u56e0\u7d20\u8ba4\u8bc1",permalink:"/docs/\u8fdb\u9636\u6307\u5357/\u7528\u6237\u767b\u5f55/\u4e24\u56e0\u7d20\u8ba4\u8bc1",editUrl:"https://github.com/lucky-byte/reactgo/tree/main/doc/docs/3-\u8fdb\u9636\u6307\u5357/6-\u7528\u6237\u767b\u5f55/1-\u4e24\u56e0\u7d20\u8ba4\u8bc1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/\u8fdb\u9636\u6307\u5357/\u7528\u6237\u767b\u5f55/\u4ecb\u7ecd"},next:{title:"\u627e\u56de\u767b\u5f55\u5bc6\u7801",permalink:"/docs/\u8fdb\u9636\u6307\u5357/\u7528\u6237\u767b\u5f55/\u627e\u56de\u5bc6\u7801"}},p={},s=[{value:"\u77ed\u4fe1\u9a8c\u8bc1\u7801\u8ba4\u8bc1",id:"\u77ed\u4fe1\u9a8c\u8bc1\u7801\u8ba4\u8bc1",level:2},{value:"TOTP \u53e3\u4ee4\u8ba4\u8bc1",id:"totp-\u53e3\u4ee4\u8ba4\u8bc1",level:2}],f={toc:s};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u4e24\u56e0\u7d20\u8ba4\u8bc1"},"\u4e24\u56e0\u7d20\u8ba4\u8bc1"),(0,c.kt)("p",null,"ReactGO \u652f\u6301\u77ed\u4fe1\u548c TOTP \u4e24\u56e0\u7d20\u8ba4\u8bc1\uff0c\u4ee5\u63d0\u9ad8\u5b89\u5168\u6027\uff0c\u8fd9\u4e24\u79cd\u65b9\u5f0f\u90fd\u662f\u53ef\u4ee5\u6839\u636e\u9700\u8981\u6253\u5f00\u548c\u5173\u95ed\u3002"),(0,c.kt)("h2",{id:"\u77ed\u4fe1\u9a8c\u8bc1\u7801\u8ba4\u8bc1"},"\u77ed\u4fe1\u9a8c\u8bc1\u7801\u8ba4\u8bc1"),(0,c.kt)("p",null,'\u5728\u7528\u6237\u7ba1\u7406\u4e2d\uff0c\u6bcf\u4e2a\u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e"\u767b\u5f55\u65f6\u5fc5\u987b\u9a8c\u8bc1\u77ed\u4fe1\u9a8c\u8bc1\u7801"\uff0c\u5982\u679c\u8fd9\u4e2a\u5f00\u5173\u6253\u5f00\uff0c\n\u90a3\u4e48\u7528\u6237\u767b\u5f55\u65f6\u9664\u4e86\u9700\u8981\u9a8c\u8bc1\u5bc6\u7801\u5916\uff0c\u8fd8\u9700\u8981\u9a8c\u8bc1\u77ed\u4fe1\u9a8c\u8bc1\u7801\u3002'),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u77ed\u4fe1\u9a8c\u8bc1\u7801\u9700\u8981\u5148\u914d\u7f6e\u597d\u77ed\u4fe1\u670d\u52a1\uff0c\u5426\u5219\u4e0d\u80fd\u53d1\u9001\u77ed\u4fe1\u3002")),(0,c.kt)("h2",{id:"totp-\u53e3\u4ee4\u8ba4\u8bc1"},"TOTP \u53e3\u4ee4\u8ba4\u8bc1"),(0,c.kt)("p",null,'TOTP \u7531\u7528\u6237\u81ea\u5df1\u8bbe\u7f6e\uff0c\u5728\u7528\u6237\u767b\u5f55\u540e\uff0c\u5728\u7528\u6237\u83dc\u5355\u4e2d\uff0c\u6709\u4e00\u4e2a"\u5b89\u5168\u8bbe\u7f6e"\uff0c\u6253\u5f00\u540e\uff0c\u8fdb\u5165"\u4e24\u56e0\u7d20\u8ba4\u8bc1"\uff0c\n\u5982\u4e0b\u56fe:'),(0,c.kt)("p",null,(0,c.kt)("img",{loading:"lazy",alt:"\u4e24\u56e0\u7d20\u8ba4\u8bc1",src:r(9571).Z,width:"1850",height:"1408"})),(0,c.kt)("p",null,"\u5982\u679c\u7528\u6237\u8bbe\u7f6e\u4e86 TOTP \u8ba4\u771f\uff0c\u90a3\u4e48\u767b\u5f55\u65f6\u5c06\u4f18\u5148\u4f7f\u7528 TOTP \u8ba4\u8bc1\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u5207\u6362\u5230\u77ed\u4fe1\u8ba4\u8bc1\uff08\u5982\u679c\u5141\u8bb8\u7684\u8bdd\uff09\u3002"))}d.isMDXComponent=!0},9571:function(e,t,r){t.Z=r.p+"assets/images/TOTP\u8bbe\u7f6e-bbcab456090320f606cbd6d196ae4c02.png"}}]);