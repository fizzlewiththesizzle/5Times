"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[379],{379:(e,l,r)=>{r.r(l),r.d(l,{default:()=>o});var t=r(791),s=r(87),a=(r(508),r(198)),d=r(37),n=r(184);const o=function(){const[e,l]=(0,t.useState)({}),[r,o]=(0,t.useState)("jan");return(0,t.useEffect)((()=>{(async()=>{console.log("Fetching monthly data..."),fetch("/api/month").then((e=>e.json())).then((e=>{console.log("Monthly data received:",e),l(e),localStorage.setItem("monthlyData",JSON.stringify(e))})).catch((e=>console.error("Error fetching monthly data:",e)))})();const e=JSON.parse(localStorage.getItem("monthlyData"));e&&l(e)}),[]),console.log("Monthly Data:",e),(0,n.jsx)(d.Z,{children:(0,n.jsxs)("div",{className:"px-4 w-screen dark:text-white",children:[(0,n.jsxs)("div",{className:"bg-gray-200 dark:bg-gray-800 dark:text-white rounded-2xl overflow-hidden text-left xs:text-center xl:text-left 2xl:text-left mt-4 shadow-lg px-4 mb-4",children:[(0,n.jsx)("img",{src:a,alt:"logo",className:"h-10 mt-2 xs:mx-auto xl:mx-0 2xl:mx-0"}),(0,n.jsx)("h1",{className:"text-4xl xs:text-3xl font-bold",children:"Al-Salam Centre"})]}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsxs)("select",{className:"bg-gray-200 dark:bg-gray-800 font-semibold rounded-lg shadow-lg block w-full p-2.5 appearance-none",value:r,onChange:e=>{o(e.target.value)},children:[(0,n.jsx)("option",{value:"jan",children:"January"}),(0,n.jsx)("option",{value:"feb",children:"February"}),(0,n.jsx)("option",{value:"mar",children:"March"}),(0,n.jsx)("option",{value:"apr",children:"April"}),(0,n.jsx)("option",{value:"may",children:"May"}),(0,n.jsx)("option",{value:"jun",children:"June"}),(0,n.jsx)("option",{value:"jul",children:"July"}),(0,n.jsx)("option",{value:"aug",children:"August"}),(0,n.jsx)("option",{value:"sep",children:"September"}),(0,n.jsx)("option",{value:"oct",children:"October"}),(0,n.jsx)("option",{value:"nov",children:"November"}),(0,n.jsx)("option",{value:"dec",children:"December"})]}),(0,n.jsx)("div",{className:"absolute top-0 right-0 h-full flex items-center pr-2 pointer-events-none",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-down",children:(0,n.jsx)("polyline",{points:"6 9 12 15 18 9"})})})]}),(0,n.jsxs)("table",{className:"text-center xs:text-sm w-full border-separate border-spacing-y-4",children:[(0,n.jsx)("thead",{className:"bg-gray-200 dark:bg-gray-800",children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"py-3 pl-4 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg",children:"Day"}),(0,n.jsx)("th",{className:"py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg",children:"Fajr"}),(0,n.jsx)("th",{className:"py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg",children:"Sunrise"}),(0,n.jsx)("th",{className:"py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg",children:"Dhuhr"}),(0,n.jsx)("th",{className:"py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg",children:"Asr"}),(0,n.jsx)("th",{className:"py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg",children:"Maghrib"}),(0,n.jsx)("th",{className:"py-3 pr-2 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg",children:"Isha"})]})}),(0,n.jsx)("tbody",{className:"bg-white dark:bg-gray-700",children:e[r]&&e[r].map(((e,l)=>(0,n.jsxs)("tr",{className:l%2===0?"bg-gray-100 dark:bg-gray-700":"bg-gray-200 dark:bg-gray-800",children:[(0,n.jsx)("td",{className:"py-3 pl-2 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg",children:e.day}),(0,n.jsx)("td",{className:"py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg",children:e.fajr_adhan}),(0,n.jsx)("td",{className:"py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg",children:e.sunrise}),(0,n.jsx)("td",{className:"py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg",children:e.dhuhr_adhan}),(0,n.jsx)("td",{className:"py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg",children:e.asr_adhan}),(0,n.jsx)("td",{className:"py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg",children:e.maghrib_adhan}),(0,n.jsx)("td",{className:"py-3 pr-2 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg",children:e.isha_adhan})]},e.id)))})]}),(0,n.jsx)(s.rU,{to:"/",children:(0,n.jsx)("div",{className:"flex flex-col items-center",children:(0,n.jsx)("button",{className:"bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl py-2 px-4 rounded-lg shadow-lg",children:"Daily Times"})})}),(0,n.jsx)("footer",{className:"text-gray-500 text-xl text-center pt-2 pb-4",children:"Beta"})]})})}},37:(e,l,r)=>{r.d(l,{Z:()=>d});var t=r(763),s=r(184);const a={initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:20}},d=e=>{let{children:l}=e;return(0,s.jsx)(t.E.div,{variants:a,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.5},children:l})}},198:(e,l,r)=>{e.exports=r.p+"static/media/Calgary-neo.fc731a7897e5a3c666e1.png"}}]);
//# sourceMappingURL=379.a6572110.chunk.js.map