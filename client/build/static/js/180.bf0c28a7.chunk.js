"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[180],{180:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var r=s(791),a=s(87),l=s(184);const n=e=>{let{showAlert:t}=e;const[s,a]=(0,r.useState)(!1),n=()=>{a(!0)};return t?(0,l.jsxs)("div",{className:"flex items-center justify-between bg-emerald-500 text-white p-4 rounded-2xl ".concat(s?"hidden":""),children:[(0,l.jsxs)("div",{className:"flex items-center justify-center",children:[(0,l.jsx)("span",{className:"mr-1",children:"Tap"}),(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-share",children:[(0,l.jsx)("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),(0,l.jsx)("polyline",{points:"16 6 12 2 8 6"}),(0,l.jsx)("line",{x1:"12",y1:"2",x2:"12",y2:"15"})]}),(0,l.jsxs)("span",{className:"ml-1 pr-1",children:["then ",(0,l.jsx)("strong",{children:"Add to Home Screen"})]}),(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-plus-square",children:[(0,l.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),(0,l.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),(0,l.jsx)("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]})]}),(0,l.jsx)("button",{className:"text-white font-bold ml-2 hover:bg-emerald-600 rounded",onClick:n,children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-x",children:[(0,l.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,l.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}):null};s(508);var x=s(198),i=s(37);const c=function(){const[e,t]=(0,r.useState)([]),[s,c]=(0,r.useState)(""),[d,o]=(0,r.useState)(!0),[h,m]=(0,r.useState)(null);let j=!1;!(()=>{const e=window.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(e)})()||"standalone"in window.navigator&&window.navigator.standalone||(j=!0);const y=()=>{o(!0),console.log("Fetching prayer data..."),fetch("/api/prayer").then((e=>e.json())).then((e=>{console.log("Prayer data received:",e),t(e),localStorage.setItem("prayerData",JSON.stringify(e))})).catch((e=>{m(e),console.error("Error fetching prayer data:",e)})),fetch("/api/nextPrayer").then((e=>e.json())).then((e=>{console.log("Next prayer received: ",e),c(e),localStorage.setItem("nextPrayer",JSON.stringify(e))})).catch((e=>{m(e),console.error("Error fetching next prayer:",e)})).finally((()=>o(!1)));const e=JSON.parse(localStorage.getItem("prayerData")),s=JSON.parse(localStorage.getItem("nextPrayer"));e&&t(e),s&&c(s)};return(0,r.useEffect)((()=>{y();const e=setInterval(y,3e5),t=()=>{document.hidden||(y(),window.location.reload(!0))};return document.addEventListener("visibilitychange",t),()=>{clearInterval(e),document.removeEventListener("visibilitychange",t)}}),[]),d?(0,l.jsx)("div",{}):h?(0,l.jsxs)("div",{children:["Error loading data: ",h.message]}):(0,l.jsx)(i.Z,{children:(0,l.jsxs)("div",{className:"space-y-4 w-fit xl:w-3/4 2xl:w-3/4 mx-auto",children:[(0,l.jsxs)("div",{className:"bg-gray-200 dark:bg-gray-800 dark:text-white rounded-2xl overflow-hidden text-left xs:text-center xl:text-left 2xl:text-left mt-4 shadow-lg px-4",children:[(0,l.jsx)("img",{src:x,alt:"logo",className:"h-10 mt-2 xs:mx-auto xl:mx-0 2xl:mx-0"}),(0,l.jsx)("h1",{className:"text-4xl xs:text-3xl font-bold",children:"Al-Salam Centre"}),(0,l.jsx)("h1",{className:"text-3xl xs:text-2xl",children:e.length>0?"".concat(e[0].month_s," ").concat(e[0].day_s,", ").concat(e[0].year_s):""}),(0,l.jsx)("h1",{className:"text-3xl xs:text-2xl",children:e.length>0?"".concat(e[0].hijri_month," ").concat(e[0].hijri_day,", ").concat(e[0].hijri_year," AH"):""}),(0,l.jsxs)("h1",{className:"text-3xl xs:text-2xl",children:["Next Up: ",(0,l.jsx)("span",{className:"font-semibold text-emerald-500",children:s.next})]})]}),(0,l.jsx)("div",{className:"rounded-2xl overflow-hidden shadow-lg",children:(0,l.jsxs)("table",{className:"w-full border-collapse",children:[(0,l.jsx)("thead",{className:"bg-gray-200 dark:bg-gray-800 dark:text-white",children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{className:"py-2 px-4 text-2xl flex",children:"Prayer"}),(0,l.jsx)("th",{className:"py-2 pr-4 text-2xl text-center",children:"Adhan"}),(0,l.jsx)("th",{className:"py-2 px-4 text-2xl text-right",children:"Iqama"})]})}),(0,l.jsx)("tbody",{children:e.map((e=>(0,l.jsxs)(r.Fragment,{children:[(0,l.jsxs)("tr",{className:"bg-white dark:bg-gray-700 dark:text-white",children:[(0,l.jsx)("td",{className:"py-2 px-4 text-xl",children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-star",className:"mr-3 stroke-emerald-500",children:(0,l.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),(0,l.jsx)("span",{children:"Fajr"})]})}),(0,l.jsxs)("td",{className:"py-2 pr-4 text-xl text-center ".concat("Fajr Adhan"===s.next?"text-emerald-500 font-bold":""),children:[e.fajr_adhan," AM"]}),(0,l.jsxs)("td",{className:"py-2 text-xl pr-2 text-right ".concat("Fajr Iqama"===s.next?"text-emerald-500 font-bold":""),children:[e.fajr_iqama," AM"]})]}),(0,l.jsxs)("tr",{className:"bg-gray-100 dark:bg-gray-800 dark:text-white",children:[(0,l.jsx)("td",{className:"py-2 px-4 text-xl",children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-sunrise",className:"mr-3 stroke-emerald-500",children:[(0,l.jsx)("path",{d:"M17 18a5 5 0 0 0-10 0"}),(0,l.jsx)("line",{x1:"12",y1:"2",x2:"12",y2:"9"}),(0,l.jsx)("line",{x1:"4.22",y1:"10.22",x2:"5.64",y2:"11.64"}),(0,l.jsx)("line",{x1:"1",y1:"18",x2:"3",y2:"18"}),(0,l.jsx)("line",{x1:"21",y1:"18",x2:"23",y2:"18"}),(0,l.jsx)("line",{x1:"18.36",y1:"11.64",x2:"19.78",y2:"10.22"}),(0,l.jsx)("line",{x1:"23",y1:"22",x2:"1",y2:"22"}),(0,l.jsx)("polyline",{points:"8 6 12 2 16 6"})]}),(0,l.jsx)("span",{children:"Sunrise"})]})}),(0,l.jsxs)("td",{className:"py-2 pr-4 text-xl text-center ".concat("Sunrise"===s.next?"text-emerald-500 font-bold":""),children:[e.sunrise," AM"]}),(0,l.jsx)("td",{className:"py-2 text-xl pr-2 text-center xl:text-right 2xl:text-right",children:"---"})]}),(0,l.jsxs)("tr",{className:"bg-white dark:bg-gray-700 dark:text-white",children:[(0,l.jsx)("td",{className:"py-2 px-4 text-xl",children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-sun",className:"mr-3 stroke-emerald-500",children:[(0,l.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,l.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),(0,l.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),(0,l.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),(0,l.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),(0,l.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),(0,l.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),(0,l.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),(0,l.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),(0,l.jsx)("span",{children:"Dhuhr"})]})}),(0,l.jsxs)("td",{className:"py-2 pr-4 text-xl text-center ".concat("Dhuhr Adhan"===s.next?"text-emerald-500 font-bold":""),children:[e.dhuhr_adhan," PM"]}),(0,l.jsxs)("td",{className:"py-2 text-xl pr-2 text-right ".concat("Dhuhr Iqama"===s.next?"text-emerald-500 font-bold":""),children:[e.dhuhr_iqama," PM"]})]}),(0,l.jsxs)("tr",{className:"bg-gray-100 dark:bg-gray-800 dark:text-white",children:[(0,l.jsx)("td",{className:"py-2 px-4 text-xl",children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-circle",className:"mr-3 stroke-emerald-500",children:(0,l.jsx)("circle",{cx:"12",cy:"12",r:"10"})}),(0,l.jsx)("span",{children:"Asr"})]})}),(0,l.jsxs)("td",{className:"py-2 pr-4 text-xl text-center ".concat("Asr Adhan"===s.next?"text-emerald-500 font-bold":""),children:[e.asr_adhan," PM"]}),(0,l.jsxs)("td",{className:"py-2 text-xl pr-2 text-right ".concat("Asr Iqama"===s.next?"text-emerald-500 font-bold":""),children:[e.asr_iqama," PM"]})]}),(0,l.jsxs)("tr",{className:"bg-white dark:bg-gray-700 dark:text-white",children:[(0,l.jsx)("td",{className:"py-2 px-4 text-xl",children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-sunset",className:"mr-3 stroke-emerald-500",children:[(0,l.jsx)("path",{d:"M17 18a5 5 0 0 0-10 0"}),(0,l.jsx)("line",{x1:"12",y1:"9",x2:"12",y2:"2"}),(0,l.jsx)("line",{x1:"4.22",y1:"10.22",x2:"5.64",y2:"11.64"}),(0,l.jsx)("line",{x1:"1",y1:"18",x2:"3",y2:"18"}),(0,l.jsx)("line",{x1:"21",y1:"18",x2:"23",y2:"18"}),(0,l.jsx)("line",{x1:"18.36",y1:"11.64",x2:"19.78",y2:"10.22"}),(0,l.jsx)("line",{x1:"23",y1:"22",x2:"1",y2:"22"}),(0,l.jsx)("polyline",{points:"16 5 12 9 8 5"})]}),(0,l.jsx)("span",{children:"Maghrib"})]})}),(0,l.jsxs)("td",{className:"py-2 pr-4 text-xl text-center ".concat("Maghrib Adhan"===s.next?"text-emerald-500 font-bold":""),children:[e.maghrib_adhan," PM"]}),(0,l.jsxs)("td",{className:"py-2 pr-2 text-xl text-right ".concat("Maghrib Iqama"===s.next?"text-emerald-500 font-bold":""),children:[e.maghrib_iqama," PM"]})]}),(0,l.jsxs)("tr",{className:"bg-gray-100 dark:bg-gray-800 dark:text-white",children:[(0,l.jsx)("td",{className:"py-2 px-4 text-xl",children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-moon",className:"mr-3 stroke-emerald-500",children:(0,l.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),(0,l.jsx)("span",{children:"Isha"})]})}),(0,l.jsxs)("td",{className:"py-2 pr-4 text-xl text-center ".concat("Isha Adhan"===s.next?"text-emerald-500 font-bold":""),children:[e.isha_adhan," PM"]}),(0,l.jsxs)("td",{className:"py-2 pr-2 text-xl text-right ".concat("Isha Iqama"===s.next?"text-emerald-500 font-bold":""),children:[e.isha_iqama," PM"]})]})]},e.id)))})]})}),(0,l.jsxs)("div",{className:"bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden text-center text-emerald-500 font-semibold shadow-lg text-3xl xs:text-2xl xl:text-4xl 2xl:text-4xl px-4",children:[(0,l.jsx)("h1",{children:e.length>0?(0,l.jsxs)("span",{children:["1",(0,l.jsx)("sup",{children:"st"})," Jumuah: ",e[0].jumuah_1]}):""}),(0,l.jsx)("h1",{children:e.length>0?(0,l.jsxs)("span",{children:["2",(0,l.jsx)("sup",{children:"nd"})," Jumuah: ",e[0].jumuah_2]}):""})]}),(0,l.jsx)(a.rU,{to:"/Month",children:(0,l.jsx)("div",{className:"flex flex-col items-center",children:(0,l.jsx)("button",{className:"bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl py-2 px-4 rounded-lg shadow-lg mt-4",children:"Monthly Times"})})}),(0,l.jsx)(n,{showAlert:j}),(0,l.jsx)("footer",{className:"text-gray-500 text-xl text-center",children:"Beta"})]})})}},37:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(763),a=s(184);const l={initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:20}},n=e=>{let{children:t}=e;return(0,a.jsx)(r.E.div,{variants:l,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.5},children:t})}},198:(e,t,s)=>{e.exports=s.p+"static/media/Calgary-neo.fc731a7897e5a3c666e1.png"}}]);
//# sourceMappingURL=180.bf0c28a7.chunk.js.map