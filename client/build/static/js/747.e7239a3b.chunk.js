"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[747],{339:(e,x,t)=>{t.r(x),t.d(x,{default:()=>g});var l=t(791),s=t(887),r=(t(508),t(344)),a=t(798);const n=[t.p+"static/media/slide-1.ff150bee7c44a1a4d5b3.png",t.p+"static/media/slide-2.b60b8ee4287c7c42e51e.png",t.p+"static/media/slide-3.f964bc70518ef1b53ef4.png",t.p+"static/media/5times-ad.d7f2c53678e91ebd43ae.png"],d=e=>n[e%n.length];var i=t(184);const c=e=>{const{slides:x,options:t}=e,[l]=(0,r.Z)(t,[(0,a.Z)({delay:1e4})]);return(0,i.jsx)("div",{className:"embla",children:(0,i.jsx)("div",{className:"embla__viewport",ref:l,children:(0,i.jsx)("div",{className:"embla__container embla__round",children:x.map((e=>(0,i.jsxs)("div",{className:"embla__slide",children:[(0,i.jsx)("div",{className:"embla__slide__number",children:(0,i.jsx)("span",{children:e+1})}),(0,i.jsx)("img",{className:"embla__slide__img",src:d(e),alt:"Your alt text"})]},e)))})})})},h=()=>{const[e,x]=(0,l.useState)(""),t=()=>{const e=new Date;let t=e.getHours(),l=e.getMinutes(),s=e.getSeconds();t=t.toString().padStart(2,"0"),l=l.toString().padStart(2,"0"),s=s.toString().padStart(2,"0");const r=(e=>{let x=e.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/)||[e];return x.length>1&&(x=x.slice(1),x[5]=+x[0]<12?" AM":" PM",x[0]=+x[0]%12||12),x.join("")})(t+":"+l+":"+s);x(r)};return(0,l.useEffect)((()=>{const e=setInterval(t,1e3);return()=>clearInterval(e)})),(0,i.jsx)("div",{id:"clock",children:e})};var o=t(198);const p=e=>fetch(e).then((e=>e.json())),m={},y=Array.from(Array(4).keys()),j=window.innerWidth>=3840?"70px":window.innerWidth>=1920?"40px":"24px";const g=function(){const{data:e,error:x,isLoading:t}=(0,s.ZP)("/api/prayer",p,{refreshInterval:3e5});if(x)return(0,i.jsx)("div",{children:"Error loading data"});if(t)return(0,i.jsx)("div",{});const r=e.prayers[0].month_s,a=e.prayers[0].day,n=e.prayers[0].year_s,d=e.prayers[0].hijri_month,g=e.prayers[0].hijri_day,w=e.prayers[0].hijri_year,f=e.prayers[0].fajr_adhan,u=e.prayers[0].fajr_iqama,b=e.prayers[0].sunrise,N=e.prayers[0].dhuhr_adhan,k=e.prayers[0].dhuhr_iqama,v=e.prayers[0].asr_adhan,_=e.prayers[0].dhuhr_iqama,M=e.prayers[0].maghrib_adhan,A=e.prayers[0].maghrib_iqama,I=e.prayers[0].isha_adhan,P=e.prayers[0].isha_iqama,S=e.prayers[0].jumuah_1,q=e.prayers[0].jumuah_2,C=e.nextPrayer;return(0,i.jsx)(l.Fragment,{children:(0,i.jsxs)("div",{className:"grid grid-cols-3 gap-4 4xl:gap-8 mt-6 4xl:mt-12 ml-4 4xl:ml-8 mr-4 4xl:mr-8",children:[(0,i.jsx)("div",{className:"col-span-2",children:(0,i.jsx)(c,{slides:y,options:m})}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("table",{className:"rounded-2xl 4xl:rounded-3xl overflow-hidden shadow-lg w-full border-collapse",children:[(0,i.jsx)("thead",{className:"bg-gray-200 dark:bg-gray-800 dark:text-white",children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-3xl 2xl:text-4xl 4xl:text-8xl flex",children:"Prayer"}),(0,i.jsx)("th",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-3xl 2xl:text-4xl 4xl:text-8xl text-center",children:"Adhan"}),(0,i.jsx)("th",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-3xl 2xl:text-4xl 4xl:text-8xl text-right",children:"Iqama"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{className:"bg-white dark:bg-gray-700 dark:text-white",children:[(0,i.jsx)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl",children:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:j,height:j,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-star",className:"mr-3 stroke-emerald-500 4xl:w-50 4xl:h-50",children:(0,i.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),(0,i.jsx)("span",{children:"Fajr"})]})}),(0,i.jsxs)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl text-center ".concat("Fajr Adhan"===C?"text-emerald-500 font-bold":""),children:[f," AM"]}),(0,i.jsxs)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl text-right ".concat("Fajr Iqama"===C?"text-emerald-500 font-bold":""),children:[u," AM"]})]}),(0,i.jsxs)("tr",{className:"bg-gray-100 dark:bg-gray-800 dark:text-white",children:[(0,i.jsx)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl",children:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:j,height:j,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-sunrise",className:"mr-3 stroke-emerald-500",children:[(0,i.jsx)("path",{d:"M17 18a5 5 0 0 0-10 0"}),(0,i.jsx)("line",{x1:"12",y1:"2",x2:"12",y2:"9"}),(0,i.jsx)("line",{x1:"4.22",y1:"10.22",x2:"5.64",y2:"11.64"}),(0,i.jsx)("line",{x1:"1",y1:"18",x2:"3",y2:"18"}),(0,i.jsx)("line",{x1:"21",y1:"18",x2:"23",y2:"18"}),(0,i.jsx)("line",{x1:"18.36",y1:"11.64",x2:"19.78",y2:"10.22"}),(0,i.jsx)("line",{x1:"23",y1:"22",x2:"1",y2:"22"}),(0,i.jsx)("polyline",{points:"8 6 12 2 16 6"})]}),(0,i.jsx)("span",{children:"Sunrise"})]})}),(0,i.jsxs)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl text-center ".concat("Sunrise"===C?"text-emerald-500 font-bold":""),children:[b," AM"]}),(0,i.jsx)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl text-center xl:text-right 2xl:text-right",children:"---"})]}),(0,i.jsxs)("tr",{className:"bg-white dark:bg-gray-700 dark:text-white",children:[(0,i.jsx)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl",children:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:j,height:j,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-sun",className:"mr-3 stroke-emerald-500",children:[(0,i.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,i.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),(0,i.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),(0,i.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),(0,i.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),(0,i.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),(0,i.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),(0,i.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),(0,i.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),(0,i.jsx)("span",{children:"Dhuhr"})]})}),(0,i.jsxs)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl text-center ".concat("Dhuhr Adhan"===C?"text-emerald-500 font-bold":""),children:[N," PM"]}),(0,i.jsxs)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl text-right ".concat("Dhuhr Iqama"===C?"text-emerald-500 font-bold":""),children:[k," PM"]})]}),(0,i.jsxs)("tr",{className:"bg-gray-100 dark:bg-gray-800 dark:text-white",children:[(0,i.jsx)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl",children:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:j,height:j,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-circle",className:"mr-3 stroke-emerald-500",children:(0,i.jsx)("circle",{cx:"12",cy:"12",r:"10"})}),(0,i.jsx)("span",{children:"Asr"})]})}),(0,i.jsxs)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl text-center ".concat("Asr Adhan"===C?"text-emerald-500 font-bold":""),children:[v," PM"]}),(0,i.jsxs)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl text-right ".concat("Asr Iqama"===C?"text-emerald-500 font-bold":""),children:[_," PM"]})]}),(0,i.jsxs)("tr",{className:"bg-white dark:bg-gray-700 dark:text-white",children:[(0,i.jsx)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl",children:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:j,height:j,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-sunset",className:"mr-3 stroke-emerald-500",children:[(0,i.jsx)("path",{d:"M17 18a5 5 0 0 0-10 0"}),(0,i.jsx)("line",{x1:"12",y1:"9",x2:"12",y2:"2"}),(0,i.jsx)("line",{x1:"4.22",y1:"10.22",x2:"5.64",y2:"11.64"}),(0,i.jsx)("line",{x1:"1",y1:"18",x2:"3",y2:"18"}),(0,i.jsx)("line",{x1:"21",y1:"18",x2:"23",y2:"18"}),(0,i.jsx)("line",{x1:"18.36",y1:"11.64",x2:"19.78",y2:"10.22"}),(0,i.jsx)("line",{x1:"23",y1:"22",x2:"1",y2:"22"}),(0,i.jsx)("polyline",{points:"16 5 12 9 8 5"})]}),(0,i.jsx)("span",{children:"Maghrib"})]})}),(0,i.jsxs)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl text-center ".concat("Maghrib Adhan"===C?"text-emerald-500 font-bold":""),children:[M," PM"]}),(0,i.jsxs)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl text-right ".concat("Maghrib Iqama"===C?"text-emerald-500 font-bold":""),children:[A," PM"]})]}),(0,i.jsxs)("tr",{className:"bg-gray-100 dark:bg-gray-800 dark:text-white",children:[(0,i.jsx)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl",children:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:j,height:j,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-moon",className:"mr-3 stroke-emerald-500",children:(0,i.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),(0,i.jsx)("span",{children:"Isha"})]})}),(0,i.jsxs)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl text-center ".concat("Isha Adhan"===C?"text-emerald-500 font-bold":""),children:[I," PM"]}),(0,i.jsxs)("td",{className:"py-2 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-3xl 4xl:text-7xl text-right ".concat("Isha Iqama"===C?"text-emerald-500 font-bold":""),children:[P," PM"]})]})]})]}),(0,i.jsxs)("div",{className:"bg-gray-200 dark:bg-gray-800 rounded-2xl 4xl:rounded-3xl overflow-hidden text-center text-emerald-500 font-semibold shadow-lg xl:text-4xl 2xl:text-5xl 4xl:text-8xl px-4 mt-4 4xl:mt-8 space-y-8",children:[(0,i.jsx)("h1",{className:"pt-4",children:(0,i.jsxs)("span",{children:["1",(0,i.jsx)("sup",{children:"st"})," Jumuah: ",S]})}),(0,i.jsx)("h1",{className:"pb-4",children:(0,i.jsxs)("span",{children:["2",(0,i.jsx)("sup",{children:"nd"})," Jumuah: ",q]})})]})]}),(0,i.jsxs)("div",{className:"pl-4 4xl:pl-8 dark:text-white col-span-1 bg-gray-200 dark:bg-gray-800 rounded-2xl 4xl:rounded-3xl overflow-hidden shadow-lg",children:[(0,i.jsx)("h1",{className:"text-6xl 4xl:text-9xl font-bold pt-4",children:"Al-Salam Centre"}),(0,i.jsxs)("h1",{className:"text-5xl 4xl:text-8xl",children:[r," ",a,", ",n]}),(0,i.jsxs)("h1",{className:"text-4.5xl 4xl:text-7.5xl",children:[d," ",g,", ",w," AH"]}),(0,i.jsx)("img",{src:o,alt:"logo",className:"pt-4 w-4/5 h-auto pb-4"})]}),(0,i.jsxs)("div",{className:"rounded-2xl 4xl:rounded-3xl overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-800 text-center flex flex-col justify-center items-center",children:[(0,i.jsx)("h1",{className:"text-6xl 4xl:text-9xl dark:text-white font-bold pt-4",children:" Next Up: "}),(0,i.jsx)("h1",{className:"text-6xl 4xl:text-10xl font-semibold text-emerald-500 my-auto",children:C})]}),(0,i.jsx)("div",{className:"dark:text-white text-center xl:text-7xl 2xl:text-8xl 4xl:text-12xl clock-font font-bold flex justify-center items-center",children:(0,i.jsx)(h,{})})]})})}},198:(e,x,t)=>{e.exports=t.p+"static/media/Calgary-neo.fc731a7897e5a3c666e1.png"}}]);
//# sourceMappingURL=747.e7239a3b.chunk.js.map