import{c as t,r as c,j as e,m as s}from"./index-D_sEnfqj.js";import{X as y}from"./x-CNgDAax2.js";import{M as p}from"./mail-DuD4lRVs.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=t("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=t("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=t("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),v=c.memo(({isDark:o,toggleTheme:i})=>{const[r,n]=c.useState(!1),l=c.useCallback(a=>{const x=document.getElementById(a);x&&(x.scrollIntoView({behavior:"smooth"}),n(!1))},[]),d=[{icon:e.jsx(k,{className:"w-4 h-4"}),label:"Início",id:"top"},{icon:e.jsx(g,{className:"w-4 h-4"}),label:"Galeria",id:"portfolio"},{icon:e.jsx(w,{className:"w-4 h-4"}),label:"Sobre",id:"about"},{icon:e.jsx(p,{className:"w-4 h-4"}),label:"Contato",id:"contact"}];return e.jsxs("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsx(s.a,{href:"#top",onClick:()=>l("top"),className:"text-xl font-medium tracking-tight",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Marcel Amestí"}),e.jsxs("div",{className:"hidden md:flex items-center space-x-1",children:[d.map(a=>e.jsxs(s.a,{href:`#${a.id}`,onClick:()=>l(a.id),className:"flex items-center px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-md",whileHover:{x:4},whileTap:{x:0},children:[a.icon,e.jsx("span",{className:"ml-2",children:a.label})]},a.id)),e.jsx(s.button,{onClick:i,className:"flex items-center px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-md",whileHover:{x:4},whileTap:{x:0},children:o?e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"w-4 h-4"}),e.jsx("span",{className:"ml-2",children:"Modo Claro"})]}):e.jsxs(e.Fragment,{children:[e.jsx(h,{className:"w-4 h-4"}),e.jsx("span",{className:"ml-2",children:"Modo Escuro"})]})})]}),e.jsx("div",{className:"md:hidden",children:e.jsx("button",{onClick:()=>n(!r),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg transition-colors",children:r?e.jsx(y,{className:"w-6 h-6"}):e.jsx(j,{className:"w-6 h-6"})})})]})}),r&&e.jsx(s.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800",children:e.jsxs("div",{className:"px-4 py-2 space-y-1",children:[d.map(a=>e.jsxs(s.a,{href:`#${a.id}`,onClick:()=>l(a.id),className:"flex items-center px-3 py-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",whileHover:{x:4},whileTap:{x:0},children:[a.icon,e.jsx("span",{className:"ml-2",children:a.label})]},a.id)),e.jsx(s.button,{onClick:i,className:"flex w-full items-center px-3 py-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",whileHover:{x:4},whileTap:{x:0},children:o?e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"w-4 h-4"}),e.jsx("span",{className:"ml-2",children:"Modo Claro"})]}):e.jsxs(e.Fragment,{children:[e.jsx(h,{className:"w-4 h-4"}),e.jsx("span",{className:"ml-2",children:"Modo Escuro"})]})})]})})]})});v.displayName="Navbar";export{v as default};
