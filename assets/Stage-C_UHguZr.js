var Tp=Object.defineProperty;var Ap=(s,e,t)=>e in s?Tp(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var z=(s,e,t)=>Ap(s,typeof e!="symbol"?e+"":e,t);import{j as ie,r as pt,a as Rp,s as Cp,$ as tu,a0 as Pp,a1 as Kd,L as Dp,a2 as Lp,M as Ip,a3 as Np,K as Up,a4 as Fp}from"./index-BHxEbPSx.js";import{u as qo}from"./useQuery-B1PtFgvh.js";import{t as Zc,c as Kr}from"./status-r9kZolcF.js";import{T as Wl,E as ql,S as Yd}from"./words-CE1FTGwC.js";import{b as Op,o as zp,s as kp}from"./kept-BXhOwZpE.js";import{s as Bp,a as Gp}from"./voice-3B-oGxCy.js";const us=1e3,Xo=640,pa=64,Ss={w:196,h:164},jo=Kr("offline"),Hp=s=>s.warning?Zc(s.warning):s.down.length?"offline":null,Vp=s=>{const e=Number(s.slice(0,2))+Number(s.slice(3))/60,t=Math.max(0,Math.min(1,(Math.cos((e-13)/24*2*Math.PI)+.35)/1.35));return{day:t,top:`hsl(215 ${40+20*t}% ${12+70*t}%)`,bottom:`hsl(205 ${30+30*t}% ${20+70*t}%)`,x:40+(e+18)%24/24*(us-80)}},Wp=({x:s,y:e,posture:t,fallen:n})=>{const i=n?Kr("calling"):"#1E293B";return t==="away"?null:t==="lying"||t==="floor"?ie.jsxs("g",{children:[n&&ie.jsx("circle",{cx:s,cy:e,r:11,fill:"none",stroke:i,strokeWidth:1.5,opacity:.6,children:ie.jsx("animate",{attributeName:"r",values:"8;14;8",dur:"1.2s",repeatCount:"indefinite"})}),ie.jsx("circle",{cx:s-7,cy:e,r:3,fill:i}),ie.jsx("line",{x1:s-4,y1:e,x2:s+8,y2:e,stroke:i,strokeWidth:2.5,strokeLinecap:"round"})]}):t==="seated"?ie.jsxs("g",{children:[ie.jsx("circle",{cx:s,cy:e-8,r:3,fill:i}),ie.jsx("polyline",{points:`${s},${e-5} ${s},${e+1} ${s+5},${e+1} ${s+5},${e+6}`,fill:"none",stroke:i,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"})]}):ie.jsxs("g",{children:[ie.jsx("circle",{cx:s,cy:e-9,r:3,fill:i}),ie.jsx("line",{x1:s,y1:e-6,x2:s,y2:e+6,stroke:i,strokeWidth:2.5,strokeLinecap:"round"})]})},nu=({s,x:e,y:t,w:n,h:i,selected:r,room:a,onSelect:o})=>{const l=s.plan.rooms,c=Math.max(...l.map(y=>y.x+y.w)),h=Math.max(...l.map(y=>y.y+y.h)),u=s.kind==="home"?22:12,d=8,m=Math.min((n-2*d)/c,(i-u-18-2*d)/h),v=e+(n-c*m)/2,x=t+u+d,p=Hp(s),g=p&&Kr(p,"ink"),_=p&&Kr(p),b={};return ie.jsxs("g",{onClick:()=>o(s.site),style:{cursor:"pointer"},role:"button","aria-label":`${s.label}${s.warning?`, ${s.warning.type} ${s.warning.state}`:""}`,children:[s.kind==="home"?ie.jsx("polygon",{points:`${e-4},${t+u} ${e+n/2},${t} ${e+n+4},${t+u}`,fill:_??"#9A3412",opacity:p?1:.75}):ie.jsx("rect",{x:e,y:t,width:n,height:u,fill:_??"#334155",rx:2}),ie.jsx("rect",{x:e,y:t+u,width:n,height:i-u,fill:"#FFFBF5",stroke:r?"#0369A1":g??"#CBD5E1",strokeWidth:r?3:g?2.5:1,rx:2}),l.map(y=>{const S=s.covered[y.room],T=s.people.filter(w=>w.room===y.room),M=r&&a===y.room;return ie.jsxs("g",{onClick:w=>{w.stopPropagation(),o(s.site,y.room)},children:[ie.jsx("rect",{x:v+y.x*m,y:x+y.y*m,width:y.w*m,height:y.h*m,fill:M?"#E0F2FE":S?"#F1F5F9":"#FAFAFA",stroke:"#CBD5E1",strokeWidth:.8}),ie.jsx("text",{x:v+y.x*m+3,y:x+y.y*m+9,fontSize:7.5,fill:"#64748B",children:y.name}),T.map((w,A)=>{const I=b[y.room]=(b[y.room]??0)+1,D=v+(y.x+y.w/2)*m+(I-1-(T.length-1)/2)*16,N=x+(y.y+y.h/2)*m+6;return ie.jsx(Wp,{x:D,y:N,posture:w.posture,fallen:w.fallen},A)})]},y.room)}),s.devices.filter(y=>s.down.includes(y.device)).map(y=>{const S=s.plan.positions[y.device];return S?ie.jsxs("g",{children:[ie.jsx("circle",{cx:v+S.x*m,cy:x+S.y*m,r:5,fill:"#FFF",stroke:jo,strokeWidth:1.5}),ie.jsx("line",{x1:v+S.x*m-3,y1:x+S.y*m-3,x2:v+S.x*m+3,y2:x+S.y*m+3,stroke:jo,strokeWidth:1.5}),ie.jsx("line",{x1:v+S.x*m+3,y1:x+S.y*m-3,x2:v+S.x*m-3,y2:x+S.y*m+3,stroke:jo,strokeWidth:1.5})]},y.device):null}),s.people.every(y=>y.posture==="away")&&ie.jsx("text",{x:e+n/2,y:x+h*m/2,fontSize:9,textAnchor:"middle",fill:"#64748B",children:"out"}),ie.jsx("text",{x:e+n/2,y:t+i-5,fontSize:9.5,fontWeight:600,textAnchor:"middle",fill:"#1E293B",children:s.label}),s.warning&&ie.jsx("text",{x:e+n/2,y:t+u-(s.kind==="home"?5:3),fontSize:9,fontWeight:700,textAnchor:"middle",fill:p==="offline"?"#FFF":"#0F172A",children:s.warning.type==="device_offline"?"offline":s.warning.state})]})},qp=({state:s,selected:e,room:t,onSelect:n})=>{const i=s.sites.filter(v=>v.kind==="home"),r=s.sites.filter(v=>v.kind==="carehome"),{day:a,top:o,bottom:l,x:c}=Vp(s.clock.time),h=3,u=16,d=14,f=20,m=pa+22;return ie.jsxs("svg",{viewBox:`0 0 ${us} ${Xo}`,preserveAspectRatio:"xMidYMin meet",className:"w-full h-full",role:"img","aria-label":`The village at ${s.clock.time}`,children:[ie.jsx("defs",{children:ie.jsxs("linearGradient",{id:"sky",x1:"0",y1:"0",x2:"0",y2:"1",children:[ie.jsx("stop",{offset:"0",stopColor:o}),ie.jsx("stop",{offset:"1",stopColor:l})]})}),ie.jsx("rect",{width:us,height:Xo,fill:"url(#sky)"}),ie.jsx("rect",{y:pa,width:us,height:Xo-pa,fill:`hsl(95 ${20+15*a}% ${30+42*a}%)`}),ie.jsx("circle",{cx:c,cy:pa-22,r:14,fill:a>.3?"#FDE68A":"#E2E8F0",opacity:.95}),ie.jsx("text",{x:us/2,y:40,fontSize:30,fontWeight:700,textAnchor:"middle",fill:a>.5?"#0F172A":"#F8FAFC",children:s.clock.time}),ie.jsx("text",{x:us/2,y:57,fontSize:11,textAnchor:"middle",fill:a>.5?"#334155":"#CBD5E1",children:s.clock.paused?"paused":s.clock.effective===1?"real time: something is happening":`a day in ${Math.round(1440/s.clock.effective)} minutes`}),i.map((v,x)=>ie.jsx(nu,{s:v,x:f+x%h*(Ss.w+u),y:m+Math.floor(x/h)*(Ss.h+d),w:Ss.w,h:Ss.h,selected:e===v.site,room:t,onSelect:n},v.site)),r.map((v,x)=>ie.jsx(nu,{s:v,x:f+h*(Ss.w+u)+10,y:m+x*300,w:us-f-h*(Ss.w+u)-30,h:280,selected:e===v.site,room:t,onSelect:n},v.site))]})},Xp=""+new URL("asphalt_c-W0H13RZ8.webp",import.meta.url).href,jp=""+new URL("asphalt_n-C9ZxWH0K.webp",import.meta.url).href,Kp=""+new URL("asphalt_r-kgqATFHO.webp",import.meta.url).href,Yp=""+new URL("bark_c-fdRV5Yg1.webp",import.meta.url).href,Jp=""+new URL("bark_n-BXLH42Wk.webp",import.meta.url).href,Zp=""+new URL("bark_r-CiRo03co.webp",import.meta.url).href,$p=""+new URL("cobble_c-T1_zCDDA.webp",import.meta.url).href,Qp=""+new URL("cobble_n-DF05v26k.webp",import.meta.url).href,e0=""+new URL("cobble_r-BENUymIY.webp",import.meta.url).href,t0=""+new URL("field_c-BuDt6CPg.webp",import.meta.url).href,n0=""+new URL("field_n-DEIPffVg.webp",import.meta.url).href,i0=""+new URL("field_r-B2ugut-0.webp",import.meta.url).href,s0=""+new URL("grass_c-DbEg8l_2.webp",import.meta.url).href,r0=""+new URL("grass_n-Tbz8WTmc.webp",import.meta.url).href,a0=""+new URL("grass_r-DYYPn527.webp",import.meta.url).href,o0=""+new URL("parquet_c-DmoiQLnz.webp",import.meta.url).href,l0=""+new URL("parquet_n-1X7IuYlg.webp",import.meta.url).href,c0="data:image/webp;base64,UklGRsoOAABXRUJQVlA4IL4OAACQbACdASoAAgACPm02lUmkIqcmoAjQ4A2JaW7ZcrKbFT0fwa2z4H8Y/8P3s5/csJzeAQtZX3Td2vvf4v/Nje3YB8+258nBoB//3rI+A//vpv98Te8PwATtFtCt2XiMY9ezTak2heuMiVZ3qopOumzUnXRULQla8aF+IEedM0AZ+A5l5LPNGbKOXug7a54QiUkUvt3g6akMmGjeUttsYvqVWYavblkZJGAd+4Ay2LxPkk/3/0tyLypGgiTg18vG3FyEm/9jOIyjRm7o+r6M5KG2w5zGXzDd11qs104TLjIIThRIAzAQauJdZ+Nr4S5Pdr829HaLmg/NpwAeSOqpJ2lI5GY5DpMGLhWoMaYUp2r+KVdjRVF2gwEfWRs2DeeqULvjQLGy916aJc9zf/oWjuFcSZc8UpIuH+tO96ujyows/Lj1mXZmNvOHZ7JAbnYm+DgK35vaBtYGZRouJ28mSOI84zygy55anrMFAA8suPiNnu5fqNH20gtg8Es5sfY386Iv9Q7KP2/LpbQs3VrbvsgZSJrCpdg+p0eky5MSa0Fp8S3QL20/o3Cpiao/njl674hSnE0H4FJM2R0YKAOP0GwmIU7SxkziVJcBrZQDGxrGvJCZIu225Q27/j/z/bvSQ8U04Fn9nTfUiJtgT5bMzCIFIyXPALmumUIU4gw4Xmzz+sVVDhdmvcAQ5lKyNl0tKgQGYaJOZLcODee4/DpoBRCUy+6W3E01I/6VXgkUSoQzRSBfTzIjtnGTylq8RubcgMX4p/BKNlR6sibLXcqnHl6/T5ZGG9B/fKWOTkLTx6Hg4yzc1yrOqYBPzYKtdDNhw6/Ga/q4tY9dkcZBXcncga9Aq64a8aCYdpuRFJSRboIQZt0QOOonoekj7NJ3qqjF8wO1iJMjczrzNoWZxkdML5cvIm79/7vpFkqLEqKzidU4WfxOlnb/DecTiEKDRL3R9JPXIXso4lBIKswSv78RqcxnWuKaWTG86+gkxS/O0/kA+Le0N/whQGnuT03PJWzYUocn2TIzmoA3a5TqpyFzKksAKLOhlDroqBQkIRIzuG5VCbS8Uxz1hUgtdoqHBprhlAzPJs+dl5QCxcFpLCIwxZK7vW0nX5YDxdKHrmnFvqxygUNf68V9nTKRq1xfZyBO4qLup6/Ag8TgmWOYV48oAP7upCxP//mCf9vP9A/7mf//wJ3/99pf/vtL/+kfQ96ppY98i5uMbsnup+exlFeo4Hc5ged5asYHHg8VfrV6M9fShPx2Ll9tyQ+yFlw1zzTtBxNtN3IYNU+V2RdjTcAC69vkAx/9uokj99d6aM9m+lie7dTxsnlgT1RJNv/pwUrri9DdwJgunDOE6nrqI1NKPs6uXe8z0EbCAFaUbYmSHniuqEBJ+E33QeRF+B08nbcrgSqHlKU33UaOmJdHfMMN/dxxMVTtE5bxXY446cDx7uiHJVQvPJZeF5StSJbJmjeAXqHp3b7EPmUls4h9RJ2Ncbf9p1hq2zeSMnKnxnMGSXngHzys3IOdGL/xezY51sx/XHXgtbQ+a1FRtdXUscmBwD52JB+19wE7Nn92Ss4KUAnpFRBzTzAP6f4bqV/VQGpAfuh5b/3KBu0KtNSdhv18S5f5thBfSMh2SqboMupbCxV+riyH4yfDSP5IQJPOFkPH6yzcJcfdgZ8vbFd+61TtSFlcEq0D7kA8bXr5f+t9nHJ/fK9yOdrNRgBhbq+qSjB2Qtn+IeROD8LA8NDy7J33XSGLvOlu1qByb2Uijz6fFlV1BF4BwpD3HIIogQSgHGjOLRcwi24EYJmT3+CEzyiXQiMULT4JqZsA/JqEKhjKmbQ6X5hUdYwWkcGlfcmXLBGT0cUxYdDwD9GjQg8Wanq0RHnlU6cxpHkD016tjaTlanCIG4PGk6xyTQUl5XvnWwR6pKiB51tAd0DrEEzk7VaF0rzS1oOvGi2vr9gQ1Tb/LzkKzRD8EMQJKSKuUvoMg025g1NdrCpELikVg7Y6UWJ9ibGNgdV6jC/LlZShjmJsTqb5KyBkWkUPhqUUX3WJni1IiPgFNmxG9AwjgGGkzsZgef8XjLWOv58tEFlXCI2awrl2qdAZIA4cyYhkIU/xwbhHkwYSF3qKLpRyeSpTabbemTesJIfcxHkIIUA5LjjfIrZBk10F05uBkUnq2w0hZY5Zg3BFo0iBy52EfL62K2XLqWGzqnBcCzI1SYHzonWBVs7FVQbMfA+gRdoS6tArKaCrvLTpbQvn3TAVmVv+M3vtaP1uHrEWKjhWlhsnm8qvb8XwyECWFHxl2tRXe3RvheaBWaZUXV3Hphm98RCLK36mpkRpiZVTReeKuusYIg8zVHg5sKx+T5RzI9Sw8hvEUjAsnY7Q4YKx0/eZWMK7tugyK1FhAwQkNcA6HljDyO5H+yMsoRPS8wKqO25nR39/c8XN2rfhqQqrYP6MSedjKpKFuKDPco9caxgvyRYHqBHeT/Db1CDcLEU0ya/R+CqLA01hTx0qsz/LltpnYWOzLV+3Y2OZWO2fupKIzqIZA5d50n+JgWlMq6FbzJyci0m0IkMyaH+cbEQ2+QlC/bQJoy+AgSgf2eGG4zaS8QGfB5eHzZelG397US1zINuDOSYcrqC2TrS0ny7fo6PjeoKzSB38znkirF4U5vMwypj+Ys0rC27fgR24+1NXQTJw1Ej2rfVjKxVyw8k25vpZMRToF+35KcWL6ybc1CmugYfGqT13FqvkF3iznOKqDrjCY/eVmOV5j8Q2Uo9+nePXxrXBxhfDfa8rMM5bHiMNvqE+Hq79mUmA6orPnZdReWYopWHNuF+L/mQBeWghvoW3iNk+PgFkcmbOmJBbcK59c0PeAviTubcKAFyCEmkph4Md3GlsbE+yBSI+6Va+QMEO5I6Ibq0FBP9xVN5o7Apm0Yt4YFsa7ySDVVns91TXx5KibsrEQZTMAUFJq3VS5KD644q+Ys1Uc5AZkY/QrC5VQ8Rlufa9o/joxwutCoHEAUWKF7aHqpZjINyRF5JfIxDVFOXUsbbpAxoMpFsssPk6GoQCCA0ZZR+uY93MC81jv5Iv3DOom4sOh7bH357aVEOeVFSshZDlKVBTL/2xdxhD2cvhS6rmrUbD0AL2fTuFqJXXk+G7ZO6AtD6xD4ihtXy9Nwhlaap1NWILo6CatEwiJjhAeDvXBBU6vsKltY7WZIv65Oi7p1eCBkCOr/G+CaqUTghc78RRa9baK63rMV+IUL8WqLsL8jdUiFhfJoi8JCIgZEJuw/hbwuvxcT2iVVHbHcY9ozhZeFSCv/axHFaeR5NAViPyTfZHzZews99FlG1OR9+Hv/q26txR8WmxVcw9fRgaJt/Ri8LgB+NHYsH2KUAkoXCXlUrF/NPKvtQ6q8pDHwQH/XYaEJMdfb0qVJZeshYX/Sb2MjHyMQcecwikY4V44obmhKiLdwBjQzFYrw0kQossGgjzf8+rVwDRfyN4Ar8m8y+4q5bX26r3zk6YApVQbMWsFXP1HC0yTXDyzearr+UVZKcznK39RkVWVwFkyGghbjywTnXcFX52HZv5os1yatiP6+5pRPOntS3d3pJA+PCUpCRJRiRWsbMeIlHdKo4q2baYZk8L8UzpFG066Z0rDfo4+qOq/9hhRxlB60re7r8DMb6j4MiFnPTbgRF1W8x2LkgWDya34VZAwVBIOpizJXgRQ1tkK77xv/CIO7dd7ZIcEL0XfTUvXlzcYmGtJdHX4i9Ef4eR3rQYRT4Ttx4/9/YsfGxOW4J1jW3zC9WiMoEhSiuoLVYcy/E2qZfohUw4PeyJkno9MJemBprrH3sYwzV3cWU3RVaECWAOyCa/3cdjQhOaVMwLCA1VM0CIU2+aGW8JRUjdSjP2R0+hCULLw8nyra4FoEtOx5F6kft7DJOisjQByCGRrlWdbyKfsRAeMP80AaVkBe7yJFwta9mQ03dcbGOFGYAhirIXkdIEEnN0Q8dtLVWTIReI9YTfGB+v4GQ8VFlIyMJP4me/CpSTo8+fMq2peF7NotSSnpqWj7i1DG34DEiud/XAdKMhQXI7TYlFARszx+ayfqYdHpgAR2xV8MME6Hnd/HoJrnkesgrqUq5mVDivEuMRrBI5ZAwVBXJ4Yq+oN9BY34GyRoaiNCJGvNrt3WV86URufPywnfAVkBVSCgJXGWndXWfetDTzx91RS7G4MW6Gdoyk6DzTmVGTeb5Vx/0V4BU7uglHA32oeZ3OfcLFt7Mq6u8TIXH9hzDn0p2+r+vAbtI9t5yolR6xn6uIXMUGISUPTvE8C4XIu3kXeBxi4i4lF4jpi3G9Xz8IvEv+DqaC/WZat3o8oyk4x7H2aMEtgjqoDRZK++Hv7ixhTrUlSTJBeAkda6cIgjdPA7cq8WuxmSDs4Q8DsWZU3EioazrN3DeGkid66r0SXXQU8eGBbvr3NwwgVkWnMDNGGBxohhsZkY4T1An9GXluzKXTjH0MzRuUn0fOypqIKeLbscHQFW1syRgS7YwsbBZ4kJHT81P/+OssKSxM9lcTnHdQSs9LGOSrprhkFdK2ryDLv9nqbZUfOAd/x41tQ0exgWcRUTRV1L4Noq9i+Hh0KlwPSb41Eh87d4cCgdpK+10aPgIsmuGyr0mgT85vnzj7anGDM5BLLSIzG2Mnc98/yJ4SJD0uzIH2TUmwmN76uVT5Zzpwf98CaH1mck7D0EtDaNtWG+lReoQo6APoSd/Oy0FHLw3sOxgImLqMTdVDz9I6fv++nRApaJYJdWMQUBcgYG2/y+629jbj0LirjnuiAtJQnKsbpu/ZQ5tm5H31fmiq8FSbOG8Mm7kSgSMi4lB/MsnaRsd/zFLLH7+IqrEAHsGQfswYHtu7eKpHgNNMCD5jyu5xmAQPzPQtVKwL7SUNzj8vuScdYDcJhZaoGjBbEZjUqCdkyI1mQDVrEY9UHoBCJtBMGumq9WNd2xrujIQoZI16uuCLwskLDB54A8AYukr7KtoJM7UxjvLd7Fu8V4ZzRQY6hoc31MMUxAewbFGxM1lGuKG+ia8aKpiVs1ZJAAA=",h0=""+new URL("plaster_c-DFiP1tpU.webp",import.meta.url).href,u0=""+new URL("plaster_n-CqmAhuwo.webp",import.meta.url).href,d0="data:image/webp;base64,UklGRjQFAABXRUJQVlA4ICgFAAAQQwCdASoAAgACPm02mUmkIqKhIAgAgA2JaW7hdTIuV3XQu9/r+Ae1eGFtpJ9e9PoAT2Ae+2UUSwIvteLk5D32ycf6Ed30Hwfa7SrcafYt4B61REvSr3/QRe6/J8NOdUqBWkKkUsnCI8QqCIrSCvNIDFsv7aR2BNcgD4jkoZBycL5DfWfcyl/2QOknfsRdqid/09snRSJE9WhQae6HOfXjhjbFNk1oerSL1KaqeJb0pJmRWBQMxTZLtaOXsRRWS8pEw5I/JEYV1VEWv3KvpqE/W3sB7MGUi+l2vEtxps2DMBSLhRBdmpv2Hk5Df/z3vtm7jubXHc5Raq9QM8nIb+0/p7ZOQ96VC71EOGfzxRhHychvUDZO68YPH4sMvzgyiVwgu00+/RT11X5WiH7SkNhFDipBYbJGyUtKfJFIc6U2lQK1urel2vS24W2ZBy3qXa8XLepdrxcnJIEya/rhBdmpw/yiBZLlm0pQGtisMA99ZsLhKWwi4mB61RFych9AiplSC6RET9PbJyXVmzo+5sv8bzbm14uTkPfbHFTRzWbBdpUCyXa8XJzE0CntOoYG3Nlp0tKgWSmoObva9B9VEXHEtwZ5OP8r5D4PsklA50up6s2lQLMae7pLrPyoi+yF2lQLJdrxcnIe+2TkpQpkPfbJyHvtzL+w8nIe+2TkPfb3mVUCyXa8XJyHvtk5D32ych77ZOQ+CuqENx4EUjAODAPWAAD+/v1H//4cp//DlP/4cp/4cp/9we2P3M1mT7xbr7dG2X+qzePfBYYCukU5x4HcEykFK0PXmTGRdvvW9KuFQ7EYceT86oEDMXdAe1S7uYnGqcrc5yLWtuMYUyOhbg81n3zq696SJr46RwP7XmWs78KTVVn/7cNcBoAqR2M9MvdLWB38tbYKmR/xHeVSZ1uEe3Pic2mEN7UU+m6Cx+oQz6ZWaK2xc8EN3DDg3DYhiZrhiu+bk1wjGgqN3aOTK5AsXBeYAfAp3W3Lf3xfOqrtdMfIJrW7BRtaJtuuMcxNgo7nSuUyUGQkjEDmLx50+dGPH+usBgcZLYn08AJUg0If8m9gmkQHHfWzGnhDW7Z/092ufcVENu2LZgil9TmokjU00yRELEIM02F5dDpXMrZnwi2QOXKTlFbHAUTL01l28cyBWvz+ExzWybtFkB9RLlEw3CUC17EBAYez0+xbAthotYK97ulwEdo2Y2B7IoaKliyXWA4NdDYKgu1EOnT+aLvG2Knh/822fMLfxVCG8Onbqv6hld/gF0ijpUkx09692V02nGgT+HqFEvA/SVG787CJdvkisslUd+wQrgApi/7fIbKcAtttlaTkcKQVIshckro6eoau4ukiw1ERgk9S0sLNmfqId5eQl+ic5g5pKQmawximLMBm3pnazcIl2Vv21IK1Wu8oSspcka9l2zXjBBO1YVr8NNbHawQOafNl0C3kyeMliOJ7Pyab61P3aKyTHLdxaj5vR7UglkVt3n9VZSXl5hR/L/VDItAOxDyXUOAPUA5nFI6E1JDnyFi08uksQcYMFvweZYETDDnvMjSwZnSdTdtR7vTzBsmrUldWxivN80wn3PgCuW5HAiCtCvTJOMVswJJ50a5TXwhp6OHylnEMyaFXlZ8vXQ2QfiLW/6BS7LZjO5oDS8K4anvghCCchcPjc6YpQbGVa3phETADWubo1p35mei8lWMLf8ZFaYov8PSgh/RUhC5NNp/UQJFQhBSrzELX7039CnelqiGZNt2h9IaynHinIAA=",f0=""+new URL("roof_c-BEceHK_B.webp",import.meta.url).href,p0=""+new URL("roof_n-8rweZwvt.webp",import.meta.url).href,m0=""+new URL("roof_r-_zqI_tG0.webp",import.meta.url).href,g0=""+new URL("sand_c-C_n3yLzC.webp",import.meta.url).href,x0=""+new URL("sand_n-Du8cIQ_M.webp",import.meta.url).href,b0=""+new URL("sand_r-DVEHVNca.webp",import.meta.url).href,v0=""+new URL("stone_c-DA-o2DmD.webp",import.meta.url).href,_0=""+new URL("stone_n-BkTx-DY-.webp",import.meta.url).href,y0=""+new URL("stone_r-bpXRYalv.webp",import.meta.url).href,M0=""+new URL("tiles_c-ComfSmbI.webp",import.meta.url).href,S0=""+new URL("tiles_n-VpNO0juY.webp",import.meta.url).href,w0=""+new URL("tiles_r-cuhKQ9fV.webp",import.meta.url).href,E0=""+new URL("wood_c-DJ2ZYGvE.webp",import.meta.url).href,T0=""+new URL("wood_n-Dkgp_Kiq.webp",import.meta.url).href,A0=""+new URL("wood_r-DqQKRuQJ.webp",import.meta.url).href;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="186",Xs={ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},R0=0,iu=1,C0=2,eo=1,Jd=2,Lr=3,Fi=0,bn=1,pn=2,sn=0,zr=1,xi=2,su=3,ru=4,Zd=5,fi=100,P0=101,D0=102,L0=103,I0=104,Ir=200,N0=201,U0=202,F0=203,$d=204,Qd=205,Xl=206,O0=207,jl=208,z0=209,k0=210,B0=211,G0=212,H0=213,V0=214,Kl=0,Yl=1,Jl=2,Yr=3,Zl=4,$l=5,Ql=6,ec=7,ef=0,W0=1,q0=2,bi=0,Qc=1,eh=2,th=3,No=4,nh=5,ih=6,Uo=7,au="attached",X0="detached",tf=300,xs=301,Qs=302,Ko=303,Yo=304,Fo=306,Tn=1e3,$n=1001,po=1002,qt=1003,nf=1004,Nr=1005,Yt=1006,to=1007,pi=1008,Sn=1009,sf=1010,rf=1011,Jr=1012,sh=1013,vi=1014,Vn=1015,$t=1016,rh=1017,ah=1018,er=1020,af=35902,of=35899,lf=1021,cf=1022,Fn=1023,Oi=1026,Qi=1027,oh=1028,lh=1029,bs=1030,ch=1031,hh=1033,no=33776,io=33777,so=33778,ro=33779,tc=35840,nc=35841,ic=35842,sc=35843,rc=36196,ac=37492,oc=37496,lc=37488,cc=37489,mo=37490,hc=37491,uc=37808,dc=37809,fc=37810,pc=37811,mc=37812,gc=37813,xc=37814,bc=37815,vc=37816,_c=37817,yc=37818,Mc=37819,Sc=37820,wc=37821,Ec=36492,Tc=36494,Ac=36495,Rc=36283,Cc=36284,go=36285,Pc=36286,hf=2200,uf=2201,j0=2202,Zr=2300,$r=2301,Jo=2302,ou=2303,Gs=2400,Hs=2401,xo=2402,uh=2500,K0=2501,Y0=0,df=1,Dc=2,J0=3200,bo=0,Z0=1,Yn="",Ft="srgb",zn="srgb-linear",vo="linear",_t="srgb",Zo=7680,$0=519,Q0=512,em=513,tm=514,dh=515,nm=516,im=517,fh=518,sm=519,ff=35044,lu="300 es",mi=2e3,Qr=2001;function rm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function am(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ea(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function om(){const s=ea("canvas");return s.style.display="block",s}const cu={};function _o(...s){const e="THREE."+s.shift();console.log(e,...s)}function pf(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function qe(...s){s=pf(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ze(...s){s=pf(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function js(...s){const e=s.join(" ");e in cu||(cu[e]=!0,qe(...s))}function lm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const cm={[Kl]:Yl,[Jl]:Ql,[Zl]:ec,[Yr]:$l,[Yl]:Kl,[Ql]:Jl,[ec]:Zl,[$l]:Yr};class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hu=1234567;const kr=Math.PI/180,tr=180/Math.PI;function Wn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function nt(s,e,t){return Math.max(e,Math.min(t,s))}function ph(s,e){return(s%e+e)%e}function hm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function um(s,e,t){return s!==e?(t-s)/(e-s):0}function Br(s,e,t){return(1-t)*s+t*e}function dm(s,e,t,n){return Br(s,e,1-Math.exp(-t*n))}function fm(s,e=1){return e-Math.abs(ph(s,e*2)-e)}function pm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function mm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function gm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function xm(s,e){return s+Math.random()*(e-s)}function bm(s){return s*(.5-Math.random())}function vm(s){s!==void 0&&(hu=s);let e=hu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _m(s){return s*kr}function ym(s){return s*tr}function Mm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Sm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Em(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*h,o*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const mf={DEG2RAD:kr,RAD2DEG:tr,generateUUID:Wn,clamp:nt,euclideanModulo:ph,mapLinear:hm,inverseLerp:um,lerp:Br,damp:dm,pingpong:fm,smoothstep:pm,smootherstep:mm,randInt:gm,randFloat:xm,randFloatSpread:bm,seededRandom:vm,degToRad:_m,radToDeg:ym,isPowerOfTwo:Mm,ceilPowerOfTwo:Sm,floorPowerOfTwo:wm,setQuaternionFromProperEuler:Em,normalize:wt,denormalize:Jn},Bh=class Bh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bh.prototype.isVector2=!0;let de=Bh;class vn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==m){let x=l*d+c*f+h*m+u*v;x<0&&(d=-d,f=-f,m=-m,v=-v,x=-x);let p=1-o;if(x<.9995){const g=Math.acos(x),_=Math.sin(g);p=Math.sin(p*g)/_,o=Math.sin(o*g)/_,l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+v*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+v*o;const g=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=g,c*=g,h*=g,u*=g}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Gh=class Gh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gh.prototype.isVector3=!0;let F=Gh;const $o=new F,uu=new vn,Hh=class Hh{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],x=i[3],p=i[6],g=i[1],_=i[4],b=i[7],y=i[2],S=i[5],T=i[8];return r[0]=a*v+o*g+l*y,r[3]=a*x+o*_+l*S,r[6]=a*p+o*b+l*T,r[1]=c*v+h*g+u*y,r[4]=c*x+h*_+u*S,r[7]=c*p+h*b+u*T,r[2]=d*v+f*g+m*y,r[5]=d*x+f*_+m*S,r[8]=d*p+f*b+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hh.prototype.isMatrix3=!0;let Qe=Hh;const Qo=new Qe,du=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fu=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tm(){const s={enabled:!0,workingColorSpace:zn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(i.r=Ks(i.r),i.g=Ks(i.g),i.b=Ks(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yn?vo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[zn]:{primaries:e,whitePoint:n,transfer:vo,toXYZ:du,fromXYZ:fu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:du,fromXYZ:fu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),s}const ot=Tm();function Ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ws;class Am{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=ea("canvas")),ws.width=e.width,ws.height=e.height;const i=ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ws}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rm=0;class mh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(el(i[a].image)):r.push(el(i[a]))}else r=el(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function el(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Am.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let Cm=0;const tl=new F;class Jt extends ki{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=$n,i=$n,r=Yt,a=pi,o=Fn,l=Sn,c=Jt.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Wn(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tl).x}get height(){return this.source.getSize(tl).y}get depth(){return this.source.getSize(tl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tn:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tn:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=tf;Jt.DEFAULT_ANISOTROPY=1;const Vh=class Vh{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],x=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+x)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,b=(f+1)/2,y=(p+1)/2,S=(h+d)/4,T=(u+v)/4,M=(m+x)/4;return _>b&&_>y?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=S/n,r=T/n):b>y?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=S/i,r=M/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=T/r,i=M/r),this.set(n,i,r,t),this}let g=Math.sqrt((x-m)*(x-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(x-m)/g,this.y=(u-v)/g,this.z=(d-h)/g,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vh.prototype.isVector4=!0;let xt=Vh;class Pm extends ki{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Jt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new mh(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends Pm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gh extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dm extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Io=class Io{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,m,v,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,m,v,x)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,m,v,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Io().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d+v*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lm,e,Im)}lookAt(e,t,n){const i=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Wi.crossVectors(n,An),Wi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Wi.crossVectors(n,An)),Wi.normalize(),ma.crossVectors(An,Wi),i[0]=Wi.x,i[4]=ma.x,i[8]=An.x,i[1]=Wi.y,i[5]=ma.y,i[9]=An.y,i[2]=Wi.z,i[6]=ma.z,i[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],x=n[10],p=n[14],g=n[3],_=n[7],b=n[11],y=n[15],S=i[0],T=i[4],M=i[8],w=i[12],A=i[1],I=i[5],D=i[9],N=i[13],O=i[2],B=i[6],Y=i[10],W=i[14],se=i[3],j=i[7],te=i[11],ee=i[15];return r[0]=a*S+o*A+l*O+c*se,r[4]=a*T+o*I+l*B+c*j,r[8]=a*M+o*D+l*Y+c*te,r[12]=a*w+o*N+l*W+c*ee,r[1]=h*S+u*A+d*O+f*se,r[5]=h*T+u*I+d*B+f*j,r[9]=h*M+u*D+d*Y+f*te,r[13]=h*w+u*N+d*W+f*ee,r[2]=m*S+v*A+x*O+p*se,r[6]=m*T+v*I+x*B+p*j,r[10]=m*M+v*D+x*Y+p*te,r[14]=m*w+v*N+x*W+p*ee,r[3]=g*S+_*A+b*O+y*se,r[7]=g*T+_*I+b*B+y*j,r[11]=g*M+_*D+b*Y+y*te,r[15]=g*w+_*N+b*W+y*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],x=e[11],p=e[15],g=l*f-c*d,_=o*f-c*u,b=o*d-l*u,y=a*f-c*h,S=a*d-l*h,T=a*u-o*h;return t*(v*g-x*_+p*b)-n*(m*g-x*y+p*S)+i*(m*_-v*y+p*T)-r*(m*b-v*S+x*T)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],x=e[14],p=e[15],g=t*o-n*a,_=t*l-i*a,b=t*c-r*a,y=n*l-i*o,S=n*c-r*o,T=i*c-r*l,M=h*v-u*m,w=h*x-d*m,A=h*p-f*m,I=u*x-d*v,D=u*p-f*v,N=d*p-f*x,O=g*N-_*D+b*I+y*A-S*w+T*M;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/O;return e[0]=(o*N-l*D+c*I)*B,e[1]=(i*D-n*N-r*I)*B,e[2]=(v*T-x*S+p*y)*B,e[3]=(d*S-u*T-f*y)*B,e[4]=(l*A-a*N-c*w)*B,e[5]=(t*N-i*A+r*w)*B,e[6]=(x*b-m*T-p*_)*B,e[7]=(h*T-d*b+f*_)*B,e[8]=(a*D-o*A+c*M)*B,e[9]=(n*A-t*D-r*M)*B,e[10]=(m*S-v*b+p*g)*B,e[11]=(u*b-h*S-f*g)*B,e[12]=(o*w-a*I-l*M)*B,e[13]=(t*I-n*w+i*M)*B,e[14]=(v*_-m*y-x*g)*B,e[15]=(h*y-u*_+d*g)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,v=a*h,x=a*u,p=o*u,g=l*c,_=l*h,b=l*u,y=n.x,S=n.y,T=n.z;return i[0]=(1-(v+p))*y,i[1]=(f+b)*y,i[2]=(m-_)*y,i[3]=0,i[4]=(f-b)*S,i[5]=(1-(d+p))*S,i[6]=(x+g)*S,i[7]=0,i[8]=(m+_)*T,i[9]=(x-g)*T,i[10]=(1-(d+v))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Es.set(i[0],i[1],i[2]).length();const o=Es.set(i[4],i[5],i[6]).length(),l=Es.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Xn.copy(this);const c=1/a,h=1/o,u=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,t.setFromRotationMatrix(Xn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=mi,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===mi)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Qr)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=mi,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===mi)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===Qr)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Io.prototype.isMatrix4=!0;let Ye=Io;const Es=new F,Xn=new Ye,Lm=new F(0,0,0),Im=new F(1,1,1),Wi=new F,ma=new F,An=new F,pu=new Ye,mu=new vn;class zi{constructor(e=0,t=0,n=0,i=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mu.setFromEuler(this),this.setFromQuaternion(mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nm=0;const gu=new F,Ts=new vn,Si=new Ye,ga=new F,mr=new F,Um=new F,Fm=new vn,xu=new F(1,0,0),bu=new F(0,1,0),vu=new F(0,0,1),_u={type:"added"},Om={type:"removed"},As={type:"childadded",child:null},nl={type:"childremoved",child:null};class zt extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new F,t=new zi,n=new vn,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Qe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(bu,e)}rotateZ(e){return this.rotateOnAxis(vu,e)}translateOnAxis(e,t){return gu.copy(e).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(bu,e)}translateZ(e){return this.translateOnAxis(vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(mr,ga,this.up):Si.lookAt(ga,mr,this.up),this.quaternion.setFromRotationMatrix(Si),i&&(Si.extractRotation(i.matrixWorld),Ts.setFromRotationMatrix(Si),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_u),As.child=e,this.dispatchEvent(As),As.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Om),nl.child=e,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_u),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}zt.DEFAULT_UP=new F(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gt extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zm={type:"move"};class il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,n),p=this._getHandJoint(c,v);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},xa={h:0,s:0,l:0};function sl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=ph(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=sl(a,r,e+1/3),this.g=sl(a,r,e),this.b=sl(a,r,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return ot.workingToColorSpace(hn.copy(this),e),Math.round(nt(hn.r*255,0,255))*65536+Math.round(nt(hn.g*255,0,255))*256+Math.round(nt(hn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(hn.copy(this),t);const n=hn.r,i=hn.g,r=hn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Ft){ot.workingToColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,i=hn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(xa);const n=Br(qi.h,xa.h,t),i=Br(qi.s,xa.s,t),r=Br(qi.l,xa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Ie;Ie.NAMES=gf;class bh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new bh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xf extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jn=new F,wi=new F,rl=new F,Ei=new F,Rs=new F,Cs=new F,yu=new F,al=new F,ol=new F,ll=new F,cl=new xt,hl=new xt,ul=new xt;class Zn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jn.subVectors(e,t),i.cross(jn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){jn.subVectors(i,t),wi.subVectors(n,t),rl.subVectors(e,t);const a=jn.dot(jn),o=jn.dot(wi),l=jn.dot(rl),c=wi.dot(wi),h=wi.dot(rl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return cl.setScalar(0),hl.setScalar(0),ul.setScalar(0),cl.fromBufferAttribute(e,t),hl.fromBufferAttribute(e,n),ul.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(cl,r.x),a.addScaledVector(hl,r.y),a.addScaledVector(ul,r.z),a}static isFrontFacing(e,t,n,i){return jn.subVectors(n,t),wi.subVectors(e,t),jn.cross(wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),jn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Zn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Rs.subVectors(i,n),Cs.subVectors(r,n),al.subVectors(e,n);const l=Rs.dot(al),c=Cs.dot(al);if(l<=0&&c<=0)return t.copy(n);ol.subVectors(e,i);const h=Rs.dot(ol),u=Cs.dot(ol);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Rs,a);ll.subVectors(e,r);const f=Rs.dot(ll),m=Cs.dot(ll);if(m>=0&&f<=m)return t.copy(r);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Cs,o);const x=h*m-f*u;if(x<=0&&u-h>=0&&f-m>=0)return yu.subVectors(r,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(yu,o);const p=1/(x+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Rs,a).addScaledVector(Cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Bi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(r,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),va.subVectors(this.max,gr),Ps.subVectors(e.a,gr),Ds.subVectors(e.b,gr),Ls.subVectors(e.c,gr),Xi.subVectors(Ds,Ps),ji.subVectors(Ls,Ds),ss.subVectors(Ps,Ls);let t=[0,-Xi.z,Xi.y,0,-ji.z,ji.y,0,-ss.z,ss.y,Xi.z,0,-Xi.x,ji.z,0,-ji.x,ss.z,0,-ss.x,-Xi.y,Xi.x,0,-ji.y,ji.x,0,-ss.y,ss.x,0];return!dl(t,Ps,Ds,Ls,va)||(t=[1,0,0,0,1,0,0,0,1],!dl(t,Ps,Ds,Ls,va))?!1:(_a.crossVectors(Xi,ji),t=[_a.x,_a.y,_a.z],dl(t,Ps,Ds,Ls,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ti=[new F,new F,new F,new F,new F,new F,new F,new F],Kn=new F,ba=new Bi,Ps=new F,Ds=new F,Ls=new F,Xi=new F,ji=new F,ss=new F,gr=new F,va=new F,_a=new F,rs=new F;function dl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){rs.fromArray(s,r);const o=i.x*Math.abs(rs.x)+i.y*Math.abs(rs.y)+i.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Kt=new F,ya=new de;let km=0;class Gt extends ki{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:km++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ff,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class bf extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vf extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Bm=new Bi,xr=new F,fl=new F;class _i{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(fl)),this.expandByPoint(xr.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gm=0;const Bn=new Ye,pl=new zt,Is=new F,Rn=new Bi,br=new Bi,nn=new F;class At extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rm(e)?vf:bf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];br.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Rn.min,br.min),Rn.expandByPoint(nn),nn.addVectors(Rn.max,br.max),Rn.expandByPoint(nn)):(Rn.expandByPoint(br.min),Rn.expandByPoint(br.max))}Rn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)nn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(nn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)nn.fromBufferAttribute(o,c),l&&(Is.fromBufferAttribute(e,c),nn.add(Is)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new F,l[M]=new F;const c=new F,h=new F,u=new F,d=new de,f=new de,m=new de,v=new F,x=new F;function p(M,w,A){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,A),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,A),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),x.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),o[M].add(v),o[w].add(v),o[A].add(v),l[M].add(x),l[w].add(x),l[A].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let M=0,w=g.length;M<w;++M){const A=g[M],I=A.start,D=A.count;for(let N=I,O=I+D;N<O;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const _=new F,b=new F,y=new F,S=new F;function T(M){y.fromBufferAttribute(i,M),S.copy(y);const w=o[M];_.copy(w),_.sub(y.multiplyScalar(y.dot(w))).normalize(),b.crossVectors(S,w);const I=b.dot(l[M])<0?-1:1;a.setXYZW(M,_.x,_.y,_.z,I)}for(let M=0,w=g.length;M<w;++M){const A=g[M],I=A.start,D=A.count;for(let N=I,O=I+D;N<O;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,x=l.length;v<x;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Gt(d,h,u)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ff,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const gn=new F;class vh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_o("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_o("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ml=new F,Vm=new F,Wm=new Qe;class Mn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ml.subVectors(n,t).cross(Vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(ml),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wm.getNormalMatrix(e),i=this.coplanarPoint(ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let qm=0;class Qn extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=zr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$d,this.blendDst=Qd,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new de().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ai=new F,gl=new F,Ma=new F,Sa=new F;class cr{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gl.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),Sa.copy(this.origin).sub(gl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ma),o=Sa.dot(this.direction),l=-Sa.dot(Ma),c=Sa.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(gl).addScaledVector(Ma,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);const n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,v=t.y-a.y,x=t.z-a.z,p=n.x-a.x,g=n.y-a.y,_=n.z-a.z,b=Math.abs(l),y=Math.abs(c),S=Math.abs(h);let T,M,w,A,I,D,N,O,B,Y,W,se;if(b>=y&&b>=S?(w=l,D=u,B=m,se=p,l>=0?(T=c,M=h,A=d,I=f,N=v,O=x,Y=g,W=_):(T=h,M=c,A=f,I=d,N=x,O=v,Y=_,W=g)):y>=S?(w=c,D=d,B=v,se=g,c>=0?(T=h,M=l,A=f,I=u,N=x,O=m,Y=_,W=p):(T=l,M=h,A=u,I=f,N=m,O=x,Y=p,W=_)):(w=h,D=f,B=x,se=_,h>=0?(T=l,M=c,A=u,I=d,N=m,O=v,Y=p,W=g):(T=c,M=l,A=d,I=u,N=v,O=m,Y=g,W=p)),w===0)return null;const j=T/w,te=M/w,ee=1/w,ge=A-j*D,pe=I-te*D,Fe=N-j*B,Se=O-te*B,Oe=Y-j*se,ne=W-te*se,oe=Oe*Se-ne*Fe,xe=ge*ne-pe*Oe,L=Fe*pe-Se*ge;if(i){if(oe<0||xe<0||L<0)return null}else if((oe<0||xe<0||L<0)&&(oe>0||xe>0||L>0))return null;const R=oe+xe+L;if(R===0)return null;const P=ee*(oe*D+xe*B+L*se);return(R>0?P<0:P>0)?null:this.at(P/R,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mu=new Ye,as=new cr,wa=new _i,Su=new F,Ea=new F,Ta=new F,Aa=new F,xl=new F,Ra=new F,wu=new F,Ca=new F;class Ke extends zt{constructor(e=new At,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(xl.fromBufferAttribute(u,e),a?Ra.addScaledVector(xl,h):Ra.addScaledVector(xl.sub(t),h))}t.add(Ra)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(wa.containsPoint(as.origin)===!1&&(as.intersectSphere(wa,Su)===null||as.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(Mu.copy(r).invert(),as.copy(e.ray).applyMatrix4(Mu),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const x=d[m],p=a[x.materialIndex],g=Math.max(x.start,f.start),_=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let b=g,y=_;b<y;b+=3){const S=o.getX(b),T=o.getX(b+1),M=o.getX(b+2);i=Pa(this,p,e,n,c,h,u,S,T,M),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let x=m,p=v;x<p;x+=3){const g=o.getX(x),_=o.getX(x+1),b=o.getX(x+2);i=Pa(this,a,e,n,c,h,u,g,_,b),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const x=d[m],p=a[x.materialIndex],g=Math.max(x.start,f.start),_=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let b=g,y=_;b<y;b+=3){const S=b,T=b+1,M=b+2;i=Pa(this,p,e,n,c,h,u,S,T,M),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let x=m,p=v;x<p;x+=3){const g=x,_=x+1,b=x+2;i=Pa(this,a,e,n,c,h,u,g,_,b),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function Xm(s,e,t,n,i,r,a,o){let l;if(e.side===bn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Fi,o),l===null)return null;Ca.copy(o),Ca.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ca);return c<t.near||c>t.far?null:{distance:c,point:Ca.clone(),object:s}}function Pa(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ea),s.getVertexPosition(l,Ta),s.getVertexPosition(c,Aa);const h=Xm(s,e,t,n,Ea,Ta,Aa,wu);if(h){const u=new F;Zn.getBarycoord(wu,Ea,Ta,Aa,u),i&&(h.uv=Zn.getInterpolatedAttribute(i,o,l,c,u,new de)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,o,l,c,u,new de)),a&&(h.normal=Zn.getInterpolatedAttribute(a,o,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new F,materialIndex:0};Zn.getNormal(Ea,Ta,Aa,d.normal),h.face=d,h.barycoord=u}return h}const vr=new xt,Eu=new xt,Tu=new xt,jm=new xt,Au=new Ye,Da=new F,bl=new _i,Ru=new Ye,vl=new cr;class Km extends Ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=au,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Da),this.boundingBox.expandByPoint(Da)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _i),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Da),this.boundingSphere.expandByPoint(Da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(i),e.ray.intersectsSphere(bl)!==!1&&(Ru.copy(i).invert(),vl.copy(e.ray).applyMatrix4(Ru),!(this.boundingBox!==null&&vl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===au?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===X0?this.bindMatrixInverse.copy(this.bindMatrix).invert():qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Eu.fromBufferAttribute(i.attributes.skinIndex,e),Tu.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(vr.copy(t),t.set(0,0,0,0)):(vr.set(...t,1),t.set(0,0,0)),vr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Tu.getComponent(r);if(a!==0){const o=Eu.getComponent(r);Au.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(jm.copy(vr).applyMatrix4(Au),a)}}return t.isVector4&&(t.w=vr.w),t.applyMatrix4(this.bindMatrixInverse)}}class _f extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ha extends Jt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=qt,h=qt,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cu=new Ye,Ym=new Ye;class _h{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Ym;Cu.multiplyMatrices(o,t[r]),Cu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new _h(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ha(t,e,e,Fn,Vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(qe("Skeleton: No bone found with UUID:",r),a=new _f),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class yo extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ns=new Ye,Pu=new Ye,La=[],Du=new Bi,Jm=new Ye,_r=new Ke,yr=new _i;class Zm extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),Du.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(Du)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),yr.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),e.ray.intersectsSphere(yr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ns),Pu.multiplyMatrices(n,Ns),_r.matrixWorld=Pu,_r.raycast(e,La);for(let a=0,o=La.length;a<o;a++){const l=La[a];l.instanceId=r,l.object=this,t.push(l)}La.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ha(new Float32Array(i*this.count),i,this.count,oh,Vn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const os=new _i,$m=new de(.5,.5),Ia=new F;class yh{constructor(e=new Mn,t=new Mn,n=new Mn,i=new Mn,r=new Mn,a=new Mn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],x=r[10],p=r[11],g=r[12],_=r[13],b=r[14],y=r[15];if(i[0].setComponents(c-a,f-h,p-m,y-g).normalize(),i[1].setComponents(c+a,f+h,p+m,y+g).normalize(),i[2].setComponents(c+o,f+u,p+v,y+_).normalize(),i[3].setComponents(c-o,f-u,p-v,y-_).normalize(),n)i[4].setComponents(l,d,x,b).normalize(),i[5].setComponents(c-l,f-d,p-x,y-b).normalize();else if(i[4].setComponents(c-l,f-d,p-x,y-b).normalize(),t===mi)i[5].setComponents(c+l,f+d,p+x,y+b).normalize();else if(t===Qr)i[5].setComponents(l,d,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const t=$m.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ia.x=i.normal.x>0?e.max.x:e.min.x,Ia.y=i.normal.y>0?e.max.y:e.min.y,Ia.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yf extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mo=new F,So=new F,Lu=new Ye,Mr=new cr,Na=new _i,_l=new F,Iu=new F;class Mh extends zt{constructor(e=new At,t=new yf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Mo.fromBufferAttribute(t,i-1),So.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Mo.distanceTo(So);e.setAttribute("lineDistance",new rt(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;Lu.copy(i).invert(),Mr.copy(e.ray).applyMatrix4(Lu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,x=m-1;v<x;v+=c){const p=h.getX(v),g=h.getX(v+1),_=Ua(this,e,Mr,l,p,g,v);_&&t.push(_)}if(this.isLineLoop){const v=h.getX(m-1),x=h.getX(f),p=Ua(this,e,Mr,l,v,x,m-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=f,x=m-1;v<x;v+=c){const p=Ua(this,e,Mr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Ua(this,e,Mr,l,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ua(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Mo.fromBufferAttribute(o,i),So.fromBufferAttribute(o,r),t.distanceSqToSegment(Mo,So,_l,Iu)>n)return;_l.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(_l);if(!(c<e.near||c>e.far))return{distance:c,point:Iu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Nu=new F,Uu=new F;class Qm extends Mh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Nu.fromBufferAttribute(t,i),Uu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Nu.distanceTo(Uu);e.setAttribute("lineDistance",new rt(n,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eg extends Mh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ta extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fu=new Ye,Lc=new cr,Fa=new _i,Oa=new F;class wo extends zt{constructor(e=new At,t=new ta){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;Fu.copy(i).invert(),Lc.copy(e.ray).applyMatrix4(Fu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,v=f;m<v;m++){const x=c.getX(m);Oa.fromBufferAttribute(u,x),Ou(Oa,x,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,v=f;m<v;m++)Oa.fromBufferAttribute(u,m),Ou(Oa,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ou(s,e,t,n,i,r,a){const o=Lc.distanceSqToPoint(s);if(o<t){const l=new F;Lc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Mf extends Jt{constructor(e=[],t=xs,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sh extends Jt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nr extends Jt{constructor(e,t,n=vi,i,r,a,o=qt,l=qt,c,h=Oi,u=1){if(h!==Oi&&h!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class tg extends nr{constructor(e,t=vi,n=xs,i,r,a=qt,o=qt,l,c=Oi){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sf extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class on extends At{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function m(v,x,p,g,_,b,y,S,T,M,w){const A=b/T,I=y/M,D=b/2,N=y/2,O=S/2,B=T+1,Y=M+1;let W=0,se=0;const j=new F;for(let te=0;te<Y;te++){const ee=te*I-N;for(let ge=0;ge<B;ge++){const pe=ge*A-D;j[v]=pe*g,j[x]=ee*_,j[p]=O,c.push(j.x,j.y,j.z),j[v]=0,j[x]=0,j[p]=S>0?1:-1,h.push(j.x,j.y,j.z),u.push(ge/T),u.push(1-te/M),W+=1}}for(let te=0;te<M;te++)for(let ee=0;ee<T;ee++){const ge=d+ee+B*te,pe=d+ee+B*(te+1),Fe=d+(ee+1)+B*(te+1),Se=d+(ee+1)+B*te;l.push(ge,pe,Se),l.push(pe,Fe,Se),se+=6}o.addGroup(f,se,w),f+=se,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vs extends At{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+r,v=i+1,x=new F,p=new F;for(let g=0;g<=m;g++){let _=0,b=0,y=0,S=0;if(g<=n){const w=g/n,A=w*Math.PI/2;b=-h-e*Math.cos(A),y=e*Math.sin(A),S=-e*Math.cos(A),_=w*u}else if(g<=n+r){const w=(g-n)/r;b=-h+w*t,y=e,S=0,_=u+w*d}else{const w=(g-n-r)/n,A=w*Math.PI/2;b=h+e*Math.sin(A),y=e*Math.cos(A),S=e*Math.sin(A),_=u+d+w*u}const T=Math.max(0,Math.min(1,_/f));let M=0;g===0?M=.5/i:g===m&&(M=-.5/i);for(let w=0;w<=i;w++){const A=w/i,I=A*Math.PI*2,D=Math.sin(I),N=Math.cos(I);p.x=-y*N,p.y=b,p.z=y*D,o.push(p.x,p.y,p.z),x.set(-y*N,S,y*D),x.normalize(),l.push(x.x,x.y,x.z),c.push(A+M,T)}if(g>0){const w=(g-1)*v;for(let A=0;A<i;A++){const I=w+A,D=w+A+1,N=g*v+A,O=g*v+A+1;a.push(I,D,N),a.push(D,O,N)}}}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Eo extends At{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new F,h=new de;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class En extends At{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const v=[],x=n/2;let p=0;g(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(f,2));function g(){const b=new F,y=new F;let S=0;const T=(t-e)/n;for(let M=0;M<=r;M++){const w=[],A=M/r,I=A*(t-e)+e;for(let D=0;D<=i;D++){const N=D/i,O=N*l+o,B=Math.sin(O),Y=Math.cos(O);y.x=I*B,y.y=-A*n+x,y.z=I*Y,u.push(y.x,y.y,y.z),b.set(B,T,Y).normalize(),d.push(b.x,b.y,b.z),f.push(N,1-A),w.push(m++)}v.push(w)}for(let M=0;M<i;M++)for(let w=0;w<r;w++){const A=v[w][M],I=v[w+1][M],D=v[w+1][M+1],N=v[w][M+1];(e>0||w!==0)&&(h.push(A,I,N),S+=3),(t>0||w!==r-1)&&(h.push(I,D,N),S+=3)}c.addGroup(p,S,0),p+=S}function _(b){const y=m,S=new de,T=new F;let M=0;const w=b===!0?e:t,A=b===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,x*A,0),d.push(0,A,0),f.push(.5,.5),m++;const I=m;for(let D=0;D<=i;D++){const O=D/i*l+o,B=Math.cos(O),Y=Math.sin(O);T.x=w*Y,T.y=x*A,T.z=w*B,u.push(T.x,T.y,T.z),d.push(0,A,0),S.x=B*.5+.5,S.y=Y*.5*A+.5,f.push(S.x,S.y),m++}for(let D=0;D<i;D++){const N=y+D,O=I+D;b===!0?h.push(O,O+1,N):h.push(O+1,O,N),M+=3}c.addGroup(p,M,b===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ir extends En{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ir(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wh extends At{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const _=new F,b=new F,y=new F;for(let S=0;S<t.length;S+=3)f(t[S+0],_),f(t[S+1],b),f(t[S+2],y),l(_,b,y,g)}function l(g,_,b,y){const S=y+1,T=[];for(let M=0;M<=S;M++){T[M]=[];const w=g.clone().lerp(b,M/S),A=_.clone().lerp(b,M/S),I=S-M;for(let D=0;D<=I;D++)D===0&&M===S?T[M][D]=w:T[M][D]=w.clone().lerp(A,D/I)}for(let M=0;M<S;M++)for(let w=0;w<2*(S-M)-1;w++){const A=Math.floor(w/2);w%2===0?(d(T[M][A+1]),d(T[M+1][A]),d(T[M][A])):(d(T[M][A+1]),d(T[M+1][A+1]),d(T[M+1][A]))}}function c(g){const _=new F;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(g),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function h(){const g=new F;for(let _=0;_<r.length;_+=3){g.x=r[_+0],g.y=r[_+1],g.z=r[_+2];const b=x(g)/2/Math.PI+.5,y=p(g)/Math.PI+.5;a.push(b,1-y)}m(),u()}function u(){for(let g=0;g<a.length;g+=6){const _=a[g+0],b=a[g+2],y=a[g+4],S=Math.max(_,b,y),T=Math.min(_,b,y);S>.9&&T<.1&&(_<.2&&(a[g+0]+=1),b<.2&&(a[g+2]+=1),y<.2&&(a[g+4]+=1))}}function d(g){r.push(g.x,g.y,g.z)}function f(g,_){const b=g*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function m(){const g=new F,_=new F,b=new F,y=new F,S=new de,T=new de,M=new de;for(let w=0,A=0;w<r.length;w+=9,A+=6){g.set(r[w+0],r[w+1],r[w+2]),_.set(r[w+3],r[w+4],r[w+5]),b.set(r[w+6],r[w+7],r[w+8]),S.set(a[A+0],a[A+1]),T.set(a[A+2],a[A+3]),M.set(a[A+4],a[A+5]),y.copy(g).add(_).add(b).divideScalar(3);const I=x(y);v(S,A+0,g,I),v(T,A+2,_,I),v(M,A+4,b,I)}}function v(g,_,b,y){y<0&&g.x===1&&(a[_]=g.x-1),b.x===0&&b.z===0&&(a[_]=y/2/Math.PI+.5)}function x(g){return Math.atan2(g.z,-g.x)}function p(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.vertices,e.indices,e.radius,e.detail)}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new de:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new F,i=[],r=[],a=[],o=new F,l=new Ye;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(nt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(nt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Eh extends yi{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new de){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ng extends Eh{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Th(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const zu=new F,ku=new F,yl=new Th,Ml=new Th,Sl=new Th;class ig extends yi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(ku.subVectors(i[0],i[1]).add(i[0]),c=ku);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(zu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=zu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),x<1e-4&&(x=v),yl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,v,x),Ml.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,v,x),Sl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,v,x)}else this.curveType==="catmullrom"&&(yl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ml.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Sl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(yl.calc(l),Ml.calc(l),Sl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bu(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function sg(s,e){const t=1-s;return t*t*e}function rg(s,e){return 2*(1-s)*s*e}function ag(s,e){return s*s*e}function Gr(s,e,t,n){return sg(s,e)+rg(s,t)+ag(s,n)}function og(s,e){const t=1-s;return t*t*t*e}function lg(s,e){const t=1-s;return 3*t*t*s*e}function cg(s,e){return 3*(1-s)*s*s*e}function hg(s,e){return s*s*s*e}function Hr(s,e,t,n,i){return og(s,e)+lg(s,t)+cg(s,n)+hg(s,i)}class wf extends yi{constructor(e=new de,t=new de,n=new de,i=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new de){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,i.x,r.x,a.x,o.x),Hr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ug extends yi{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,i.x,r.x,a.x,o.x),Hr(e,i.y,r.y,a.y,o.y),Hr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ef extends yi{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dg extends yi{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tf extends yi{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Gr(e,i.x,r.x,a.x),Gr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fg extends yi{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Gr(e,i.x,r.x,a.x),Gr(e,i.y,r.y,a.y),Gr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Af extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Bu(o,l.x,c.x,h.x,u.x),Bu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new de().fromArray(i))}return this}}var Ic=Object.freeze({__proto__:null,ArcCurve:ng,CatmullRomCurve3:ig,CubicBezierCurve:wf,CubicBezierCurve3:ug,EllipseCurve:Eh,LineCurve:Ef,LineCurve3:dg,QuadraticBezierCurve:Tf,QuadraticBezierCurve3:fg,SplineCurve:Af});class pg extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ic[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ic[i.type]().fromJSON(i))}return this}}class Gu extends pg{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ef(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Tf(this.currentPoint.clone(),new de(e,t),new de(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new wf(this.currentPoint.clone(),new de(e,t),new de(n,i),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Af(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new Eh(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ah extends Gu{constructor(e){super(e),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Gu().fromJSON(i))}return this}}function mg(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Rf(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=_g(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let h=o,u=l;for(let d=t;d<i;d+=t){const f=s[d],m=s[d+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return na(r,a,t,o,l,c,0),a}function Rf(s,e,t,n,i){let r;if(i===Dg(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=Hu(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Hu(a/n|0,s[a],s[a+1],r);return r&&sr(r,r.next)&&(sa(r),r=r.next),r}function vs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(sr(t,t.next)||kt(t.prev,t,t.next)===0)){if(sa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function na(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Eg(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?xg(s,n,i,r):gg(s)){e.push(l.i,s.i,c.i),sa(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=bg(vs(s),e),na(s,e,t,n,i,r,2)):a===2&&vg(s,e,t,n,i,r):na(vs(s),e,t,n,i,r,1);break}}}function gg(s){const e=s.prev,t=s,n=s.next;if(kt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),d=Math.max(i,r,a),f=Math.max(o,l,c);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Ur(i,o,r,l,a,c,m.x,m.y)&&kt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function xg(s,e,t,n){const i=s.prev,r=s,a=s.next;if(kt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(h,u,d),v=Math.max(o,l,c),x=Math.max(h,u,d),p=Nc(f,m,e,t,n),g=Nc(v,x,e,t,n);let _=s.prevZ,b=s.nextZ;for(;_&&_.z>=p&&b&&b.z<=g;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=x&&_!==i&&_!==a&&Ur(o,h,l,u,c,d,_.x,_.y)&&kt(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=f&&b.x<=v&&b.y>=m&&b.y<=x&&b!==i&&b!==a&&Ur(o,h,l,u,c,d,b.x,b.y)&&kt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=x&&_!==i&&_!==a&&Ur(o,h,l,u,c,d,_.x,_.y)&&kt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=g;){if(b.x>=f&&b.x<=v&&b.y>=m&&b.y<=x&&b!==i&&b!==a&&Ur(o,h,l,u,c,d,b.x,b.y)&&kt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function bg(s,e){let t=s;do{const n=t.prev,i=t.next.next;!sr(n,i)&&Pf(n,t,t.next,i)&&ia(n,i)&&ia(i,n)&&(e.push(n.i,t.i,i.i),sa(t),sa(t.next),t=s=i),t=t.next}while(t!==s);return vs(t)}function vg(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rg(a,o)){let l=Df(a,o);a=vs(a,a.next),l=vs(l,l.next),na(a,e,t,n,i,r,0),na(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function _g(s,e,t,n){const i=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Rf(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Ag(c))}i.sort(yg);for(let r=0;r<i.length;r++)t=Mg(i[r],t);return t}function yg(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Mg(s,e){const t=Sg(s,e);if(!t)return e;const n=Df(t,s);return vs(n,n.next),vs(t,t.next)}function Sg(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,a;if(sr(s,t))return t;do{if(sr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Cf(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);ia(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&wg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function wg(s,e){return kt(s.prev,s,e.prev)<0&&kt(e.next,s,s.next)<0}function Eg(s,e,t,n){let i=s;do i.z===0&&(i.z=Nc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Tg(i)}function Tg(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Nc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Ag(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Cf(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Ur(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&Cf(s,e,t,n,i,r,a,o)}function Rg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Cg(s,e)&&(ia(s,e)&&ia(e,s)&&Pg(s,e)&&(kt(s.prev,s,e.prev)||kt(s,e.prev,e))||sr(s,e)&&kt(s.prev,s,s.next)>0&&kt(e.prev,e,e.next)>0)}function kt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function sr(s,e){return s.x===e.x&&s.y===e.y}function Pf(s,e,t,n){const i=ka(kt(s,e,t)),r=ka(kt(s,e,n)),a=ka(kt(t,n,s)),o=ka(kt(t,n,e));return!!(i!==r&&a!==o||i===0&&za(s,t,e)||r===0&&za(s,n,e)||a===0&&za(t,s,n)||o===0&&za(t,e,n))}function za(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ka(s){return s>0?1:s<0?-1:0}function Cg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Pf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ia(s,e){return kt(s.prev,s,s.next)<0?kt(s,e,s.next)>=0&&kt(s,s.prev,e)>=0:kt(s,e,s.prev)<0||kt(s,s.next,e)<0}function Pg(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Df(s,e){const t=Uc(s.i,s.x,s.y),n=Uc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Hu(s,e,t,n){const i=Uc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function sa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Uc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dg(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Lg{static triangulate(e,t,n=2){return mg(e,t,n)}}class Ws{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Ws.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Vu(e),Wu(n,e);let a=e.length;t.forEach(Vu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Wu(n,t[l]);const o=Lg.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Vu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Wu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Oo extends At{constructor(e=new Ah([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new rt(i,3)),this.setAttribute("uv",new rt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Ig;let _,b=!1,y,S,T,M;if(p){_=p.getSpacedPoints(h),b=!0,d=!1;const k=p.isCatmullRomCurve3?p.closed:!1;y=p.computeFrenetFrames(h,k),S=new F,T=new F,M=new F}d||(x=0,f=0,m=0,v=0);const w=o.extractPoints(c);let A=w.shape;const I=w.holes;if(!Ws.isClockWise(A)){A=A.reverse();for(let k=0,X=I.length;k<X;k++){const Q=I[k];Ws.isClockWise(Q)&&(I[k]=Q.reverse())}}function N(k){const Q=10000000000000001e-36;let ce=k[0];for(let fe=1;fe<=k.length;fe++){const Te=fe%k.length,we=k[Te],ke=we.x-ce.x,Je=we.y-ce.y,G=ke*ke+Je*Je,ft=Math.max(Math.abs(we.x),Math.abs(we.y),Math.abs(ce.x),Math.abs(ce.y)),tt=Q*ft*ft;if(G<=tt){k.splice(Te,1),fe--;continue}ce=we}}N(A),I.forEach(N);const O=I.length,B=A;for(let k=0;k<O;k++){const X=I[k];A=A.concat(X)}function Y(k,X,Q){return X||Ze("ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(X,Q)}const W=A.length;function se(k,X,Q){let ce,fe,Te;const we=k.x-X.x,ke=k.y-X.y,Je=Q.x-k.x,G=Q.y-k.y,ft=we*we+ke*ke,tt=we*G-ke*Je;if(Math.abs(tt)>Number.EPSILON){const U=Math.sqrt(ft),E=Math.sqrt(Je*Je+G*G),K=X.x-ke/U,J=X.y+we/U,ae=Q.x-G/E,be=Q.y+Je/E,ve=((ae-K)*G-(be-J)*Je)/(we*G-ke*Je);ce=K+we*ve-k.x,fe=J+ke*ve-k.y;const le=ce*ce+fe*fe;if(le<=2)return new de(ce,fe);Te=Math.sqrt(le/2)}else{let U=!1;we>Number.EPSILON?Je>Number.EPSILON&&(U=!0):we<-Number.EPSILON?Je<-Number.EPSILON&&(U=!0):Math.sign(ke)===Math.sign(G)&&(U=!0),U?(ce=-ke,fe=we,Te=Math.sqrt(ft)):(ce=we,fe=ke,Te=Math.sqrt(ft/2))}return new de(ce/Te,fe/Te)}const j=[];for(let k=0,X=B.length,Q=X-1,ce=k+1;k<X;k++,Q++,ce++)Q===X&&(Q=0),ce===X&&(ce=0),j[k]=se(B[k],B[Q],B[ce]);const te=[];let ee,ge=j.concat();for(let k=0,X=O;k<X;k++){const Q=I[k];ee=[];for(let ce=0,fe=Q.length,Te=fe-1,we=ce+1;ce<fe;ce++,Te++,we++)Te===fe&&(Te=0),we===fe&&(we=0),ee[ce]=se(Q[ce],Q[Te],Q[we]);te.push(ee),ge=ge.concat(ee)}let pe;if(x===0)pe=Ws.triangulateShape(B,I);else{const k=[],X=[];for(let Q=0;Q<x;Q++){const ce=Q/x,fe=f*Math.cos(ce*Math.PI/2),Te=m*Math.sin(ce*Math.PI/2)+v;for(let we=0,ke=B.length;we<ke;we++){const Je=Y(B[we],j[we],Te);xe(Je.x,Je.y,-fe),ce===0&&k.push(Je)}for(let we=0,ke=O;we<ke;we++){const Je=I[we];ee=te[we];const G=[];for(let ft=0,tt=Je.length;ft<tt;ft++){const U=Y(Je[ft],ee[ft],Te);xe(U.x,U.y,-fe),ce===0&&G.push(U)}ce===0&&X.push(G)}}pe=Ws.triangulateShape(k,X)}const Fe=pe.length,Se=m+v;for(let k=0;k<W;k++){const X=d?Y(A[k],ge[k],Se):A[k];b?(T.copy(y.normals[0]).multiplyScalar(X.x),S.copy(y.binormals[0]).multiplyScalar(X.y),M.copy(_[0]).add(T).add(S),xe(M.x,M.y,M.z)):xe(X.x,X.y,0)}for(let k=1;k<=h;k++)for(let X=0;X<W;X++){const Q=d?Y(A[X],ge[X],Se):A[X];b?(T.copy(y.normals[k]).multiplyScalar(Q.x),S.copy(y.binormals[k]).multiplyScalar(Q.y),M.copy(_[k]).add(T).add(S),xe(M.x,M.y,M.z)):xe(Q.x,Q.y,u/h*k)}for(let k=x-1;k>=0;k--){const X=k/x,Q=f*Math.cos(X*Math.PI/2),ce=m*Math.sin(X*Math.PI/2)+v;for(let fe=0,Te=B.length;fe<Te;fe++){const we=Y(B[fe],j[fe],ce);xe(we.x,we.y,u+Q)}for(let fe=0,Te=I.length;fe<Te;fe++){const we=I[fe];ee=te[fe];for(let ke=0,Je=we.length;ke<Je;ke++){const G=Y(we[ke],ee[ke],ce);b?xe(G.x,G.y+_[h-1].y,_[h-1].x+Q):xe(G.x,G.y,u+Q)}}}Oe(),ne();function Oe(){const k=i.length/3;if(d){let X=0,Q=W*X;for(let ce=0;ce<Fe;ce++){const fe=pe[ce];L(fe[2]+Q,fe[1]+Q,fe[0]+Q)}X=h+x*2,Q=W*X;for(let ce=0;ce<Fe;ce++){const fe=pe[ce];L(fe[0]+Q,fe[1]+Q,fe[2]+Q)}}else{for(let X=0;X<Fe;X++){const Q=pe[X];L(Q[2],Q[1],Q[0])}for(let X=0;X<Fe;X++){const Q=pe[X];L(Q[0]+W*h,Q[1]+W*h,Q[2]+W*h)}}n.addGroup(k,i.length/3-k,0)}function ne(){const k=i.length/3;let X=0;oe(B,X),X+=B.length;for(let Q=0,ce=I.length;Q<ce;Q++){const fe=I[Q];oe(fe,X),X+=fe.length}n.addGroup(k,i.length/3-k,1)}function oe(k,X){let Q=k.length;for(;--Q>=0;){const ce=Q;let fe=Q-1;fe<0&&(fe=k.length-1);for(let Te=0,we=h+x*2;Te<we;Te++){const ke=W*Te,Je=W*(Te+1),G=X+ce+ke,ft=X+fe+ke,tt=X+fe+Je,U=X+ce+Je;R(G,ft,tt,U)}}}function xe(k,X,Q){l.push(k),l.push(X),l.push(Q)}function L(k,X,Q){P(k),P(X),P(Q);const ce=i.length/3,fe=g.generateTopUV(n,i,ce-3,ce-2,ce-1);V(fe[0]),V(fe[1]),V(fe[2])}function R(k,X,Q,ce){P(k),P(X),P(ce),P(X),P(Q),P(ce);const fe=i.length/3,Te=g.generateSideWallUV(n,i,fe-6,fe-3,fe-2,fe-1);V(Te[0]),V(Te[1]),V(Te[3]),V(Te[1]),V(Te[2]),V(Te[3])}function P(k){i.push(l[k*3+0]),i.push(l[k*3+1]),i.push(l[k*3+2])}function V(k){r.push(k.x),r.push(k.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ng(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ic[i.type]().fromJSON(i)),new Oo(n,e.options)}}const Ig={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new de(r,a),new de(o,l),new de(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],v=e[r*3],x=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new de(a,1-l),new de(c,1-u),new de(d,1-m),new de(v,1-p)]:[new de(o,1-l),new de(h,1-u),new de(f,1-m),new de(x,1-p)]}};function Ng(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class To extends wh{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new To(e.radius,e.detail)}}class rn extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],v=[],x=[];for(let p=0;p<h;p++){const g=p*d-a;for(let _=0;_<c;_++){const b=_*u-r;m.push(b,-g,0),v.push(0,0,1),x.push(_/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<o;g++){const _=g+c*p,b=g+c*(p+1),y=g+1+c*(p+1),S=g+1+c*p;f.push(_,b,S),f.push(b,y,S)}this.setIndex(f),this.setAttribute("position",new rt(m,3)),this.setAttribute("normal",new rt(v,3)),this.setAttribute("uv",new rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ao extends At{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new F,m=new de;for(let v=0;v<=i;v++){for(let x=0;x<=n;x++){const p=r+x/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<i;v++){const x=v*(n+1);for(let p=0;p<n;p++){const g=p+x,_=g,b=g+n+1,y=g+n+2,S=g+1;o.push(_,b,S),o.push(b,y,S)}}this.setIndex(o),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ns extends At{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new F,d=new F,f=[],m=[],v=[],x=[];for(let p=0;p<=n;p++){const g=[],_=p/n,b=a+_*o,y=e*Math.cos(b),S=Math.sqrt(e*e-y*y);let T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let M=0;M<=t;M++){const w=M/t,A=i+w*r;u.x=-S*Math.cos(A),u.y=y,u.z=S*Math.sin(A),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),x.push(w+T,1-_),g.push(c++)}h.push(g)}for(let p=0;p<n;p++)for(let g=0;g<t;g++){const _=h[p][g+1],b=h[p][g],y=h[p+1][g],S=h[p+1][g+1];(p!==0||a>0)&&f.push(_,b,S),(p!==n-1||l<Math.PI)&&f.push(b,y,S)}this.setIndex(f),this.setAttribute("position",new rt(m,3)),this.setAttribute("normal",new rt(v,3)),this.setAttribute("uv",new rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rh extends At{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],u=[],d=new F,f=new F,m=new F;for(let v=0;v<=n;v++){const x=a+v/n*o;for(let p=0;p<=i;p++){const g=p/i*r;f.x=(e+t*Math.cos(x))*Math.cos(g),f.y=(e+t*Math.cos(x))*Math.sin(g),f.z=t*Math.sin(x),c.push(f.x,f.y,f.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/i),u.push(v/n)}}for(let v=1;v<=n;v++)for(let x=1;x<=i;x++){const p=(i+1)*v+x-1,g=(i+1)*(v-1)+x-1,_=(i+1)*(v-1)+x,b=(i+1)*v+x;l.push(p,g,b),l.push(g,_,b)}this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function rr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(qu(i))i.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(qu(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function xn(s){const e={};for(let t=0;t<s.length;t++){const n=rr(s[t]);for(const i in n)e[i]=n[i]}return e}function qu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ug(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Lf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Un={clone:rr,merge:xn};var Fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bt extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fg,this.fragmentShader=Og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=Ug(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(i.value);break;case"v2":this.uniforms[n].value=new de().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new xt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ye().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class If extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lt extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mi extends lt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zg extends Qn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class kg extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bg extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ji(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ao(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Gg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Xu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Hg(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class hr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Vg extends hr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gs,endingEnd:Gs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hs:r=e,o=2*t-n;break;case xo:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hs:a=e,l=2*n-t;break;case xo:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,x=v*m,p=-d*x+2*d*v-d*m,g=(1+d)*x+(-1.5-2*d)*v+(-.5+d)*m+1,_=(-1-f)*x+(1.5+f)*v+.5*m,b=f*x-f*v;for(let y=0;y!==o;++y)r[y]=p*a[h+y]+g*a[c+y]+_*a[l+y]+b*a[u+y];return r}}class Nf extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class Wg extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class qg extends hr{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){const m=(n-t)/(i-t),v=1-m;for(let x=0;x!==o;++x)r[x]=a[c+x]*v+a[l+x]*m;return r}const d=o*2,f=e-1;for(let m=0;m!==o;++m){const v=a[c+m],x=a[l+m],p=f*d+m*2,g=u[p],_=u[p+1],b=e*d+m*2,y=h[b],S=h[b+1],T=jg(n,t,g,y,i);r[m]=Uf(T,v,_,S,x)}return r}}function Uf(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Xg(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function jg(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){const o=Uf(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;const l=Xg(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class ei{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ji(t,this.TimeBufferType),this.values=Ji(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ji(e.times,Array),values:Ji(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),ao(e.settings)&&(n.settings={inTangents:Ji(e.settings.inTangents,Array),outTangents:Ji(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new qg(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case $r:t=this.InterpolantFactoryMethodLinear;break;case Jo:t=this.InterpolantFactoryMethodSmooth;break;case ou:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return $r;case this.InterpolantFactoryMethodSmooth:return Jo;case this.InterpolantFactoryMethodBezier:return ou}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;ao(this.settings)&&(ju(this.settings.inTangents,e),ju(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&am(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Jo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,ao(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function ju(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=$r;class ur extends ei{constructor(e,t,n){super(e,t,n)}}ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Zr;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Ff extends ei{constructor(e,t,n,i){super(e,t,n,i)}}Ff.prototype.ValueTypeName="color";class ra extends ei{constructor(e,t,n,i){super(e,t,n,i)}}ra.prototype.ValueTypeName="number";class Kg extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)vn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class aa extends ei{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Kg(this.times,this.values,this.getValueSize(),e)}}aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;class dr extends ei{constructor(e,t,n){super(e,t,n)}}dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Zr;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ro extends ei{constructor(e,t,n,i){super(e,t,n,i)}}Ro.prototype.ValueTypeName="vector";class Fc{constructor(e="",t=-1,n=[],i=uh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Wn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Jg(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(ei.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Gg(l);l=Xu(l,1,h),c=Xu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ra(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Yg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ra;case"vector":case"vector2":case"vector3":case"vector4":return Ro;case"color":return Ff;case"quaternion":return aa;case"bool":case"boolean":return ur;case"string":return dr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Jg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Yg(s.type);if(s.times===void 0){const n=[],i=[];Hg(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),ao(s.settings)&&(t.settings={inTangents:Ji(s.settings.inTangents,Float32Array),outTangents:Ji(s.settings.outTangents,Float32Array)}),t}const Di={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Ku(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Ku(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Ku(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Zg{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const $g=new Zg;class fr{constructor(e){this.manager=e!==void 0?e:$g,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}fr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ri={};class Qg extends Error{constructor(e,t){super(e),this.response=t}}class Of extends fr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Di.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:i});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ri[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let v=0;const x=new ReadableStream({start(p){g();function g(){u.read().then(({done:_,value:b})=>{if(_)p.close();else{v+=b.byteLength;const y=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let S=0,T=h.length;S<T;S++){const M=h[S];M.onProgress&&M.onProgress(y)}p.enqueue(b),g()}},_=>{p.error(_)})}}});return new Response(x)}else throw new Qg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Di.add(`file:${e}`,c);const h=Ri[e];delete Ri[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Ri[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Us=new WeakMap;class ex extends fr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Di.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Us.get(a);u===void 0&&(u=[],Us.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=ea("img");function l(){h(),t&&t(this);const u=Us.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Us.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Di.remove(`image:${e}`);const d=Us.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}Us.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Di.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class tx extends fr{constructor(e){super(e)}load(e,t,n,i){const r=new Jt,a=new ex(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class zo extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class nx extends zo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const wl=new Ye,Yu=new F,Ju=new F;class Ch{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yh,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yu),Ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ju),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(wl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Qr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ba=new F,Ga=new vn,ii=new F;class zf extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ba,Ga,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,Ga,ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ba,Ga,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,Ga,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new F,Zu=new de,$u=new de;class fn extends zf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,Zu,$u),t.subVectors($u,Zu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ix extends Ch{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=tr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class sx extends zo{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ix}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class rx extends Ch{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}}class kf extends zo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ua extends zf{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ax extends Ch{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oc extends zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new ax}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Vr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const El=new WeakMap;class ox extends fr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Di.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{El.has(a)===!0?(i&&i(El.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Di.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),El.set(l,c),Di.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Fs=-90,Os=1;class Bf extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new fn(Fs,Os,e,t);i.layers=this.layers,this.add(i);const r=new fn(Fs,Os,e,t);r.layers=this.layers,this.add(r);const a=new fn(Fs,Os,e,t);a.layers=this.layers,this.add(a);const o=new fn(Fs,Os,e,t);o.layers=this.layers,this.add(o);const l=new fn(Fs,Os,e,t);l.layers=this.layers,this.add(l);const c=new fn(Fs,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class lx extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class cx{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=hx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function hx(){this._document.hidden===!1&&this.reset()}class ux{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){vn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;vn.multiplyQuaternionsFlat(e,a,e,t,e,n),vn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Ph="\\[\\]\\.:\\/",dx=new RegExp("["+Ph+"]","g"),Dh="[^"+Ph+"]",fx="[^"+Ph.replace("\\.","")+"]",px=/((?:WC+[\/:])*)/.source.replace("WC",Dh),mx=/(WCOD+)?/.source.replace("WCOD",fx),gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dh),xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dh),bx=new RegExp("^"+px+mx+gx+xx+"$"),vx=["material","materials","bones","map"];class _x{constructor(e,t,n){const i=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class yt{constructor(e,t,n){this.path=t,this.parsedPath=n||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,n):new yt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dx,"")}static parseTrackName(e){const t=bx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);vx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=_x;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class yx{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Gs,endingEnd:Gs};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=uf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case K0:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case uh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===j0;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===hf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Hs,i.endingEnd=Hs):(e?i.endingStart=this.zeroSlopeAtStart?Hs:Gs:i.endingStart=xo,t?i.endingEnd=this.zeroSlopeAtEnd?Hs:Gs:i.endingEnd=xo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const Mx=new Float32Array(1);class Sx extends ki{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;m=new ux(yt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Nf(new Float32Array(2),new Float32Array(2),1,Mx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Fc.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=uh),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new yx(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Fc.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Qu=new Ye;class wx{constructor(e,t,n=0,i=1/0){this.ray=new cr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new xh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qu),this}intersectObject(e,t=!0,n=[]){return zc(e,this,n,t),n.sort(ed),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)zc(e[i],this,n,t);return n.sort(ed),n}}function ed(s,e){return s.distance-e.distance}function zc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)zc(r[a],e,t,!0)}}class Ex{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,qe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class kc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Wh=class Wh{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Wh.prototype.isMatrix2=!0;let td=Wh;class Tx extends ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function nd(s,e,t,n){const i=Ax(n);switch(t){case lf:return s*e;case oh:return s*e/i.components*i.byteLength;case lh:return s*e/i.components*i.byteLength;case bs:return s*e*2/i.components*i.byteLength;case ch:return s*e*2/i.components*i.byteLength;case cf:return s*e*3/i.components*i.byteLength;case Fn:return s*e*4/i.components*i.byteLength;case hh:return s*e*4/i.components*i.byteLength;case no:case io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case so:case ro:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(s,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(s,8)*Math.max(e,8)/2;case rc:case ac:case lc:case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case oc:case mo:case hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case yc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case wc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ec:case Tc:case Ac:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rc:case Cc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case go:case Pc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ax(s){switch(s){case Sn:case sf:return{byteLength:1,components:1};case Jr:case rf:case $t:return{byteLength:2,components:1};case rh:case ah:return{byteLength:2,components:4};case vi:case sh:case Vn:return{byteLength:4,components:1};case af:case of:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gf(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Rx(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Px=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ux=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ox=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$x=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ob=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_b=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ab=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Db=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$b=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ov=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$v=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:Cx,alphahash_pars_fragment:Px,alphamap_fragment:Dx,alphamap_pars_fragment:Lx,alphatest_fragment:Ix,alphatest_pars_fragment:Nx,aomap_fragment:Ux,aomap_pars_fragment:Fx,batching_pars_vertex:Ox,batching_vertex:zx,begin_vertex:kx,beginnormal_vertex:Bx,bsdfs:Gx,iridescence_fragment:Hx,bumpmap_pars_fragment:Vx,clipping_planes_fragment:Wx,clipping_planes_pars_fragment:qx,clipping_planes_pars_vertex:Xx,clipping_planes_vertex:jx,color_fragment:Kx,color_pars_fragment:Yx,color_pars_vertex:Jx,color_vertex:Zx,common:$x,cube_uv_reflection_fragment:Qx,defaultnormal_vertex:eb,displacementmap_pars_vertex:tb,displacementmap_vertex:nb,emissivemap_fragment:ib,emissivemap_pars_fragment:sb,colorspace_fragment:rb,colorspace_pars_fragment:ab,envmap_fragment:ob,envmap_common_pars_fragment:lb,envmap_pars_fragment:cb,envmap_pars_vertex:hb,envmap_physical_pars_fragment:yb,envmap_vertex:ub,fog_vertex:db,fog_pars_vertex:fb,fog_fragment:pb,fog_pars_fragment:mb,gradientmap_pars_fragment:gb,lightmap_pars_fragment:xb,lights_lambert_fragment:bb,lights_lambert_pars_fragment:vb,lights_pars_begin:_b,lights_toon_fragment:Mb,lights_toon_pars_fragment:Sb,lights_phong_fragment:wb,lights_phong_pars_fragment:Eb,lights_physical_fragment:Tb,lights_physical_pars_fragment:Ab,lights_fragment_begin:Rb,lights_fragment_maps:Cb,lights_fragment_end:Pb,lightprobes_pars_fragment:Db,logdepthbuf_fragment:Lb,logdepthbuf_pars_fragment:Ib,logdepthbuf_pars_vertex:Nb,logdepthbuf_vertex:Ub,map_fragment:Fb,map_pars_fragment:Ob,map_particle_fragment:zb,map_particle_pars_fragment:kb,metalnessmap_fragment:Bb,metalnessmap_pars_fragment:Gb,morphinstance_vertex:Hb,morphcolor_vertex:Vb,morphnormal_vertex:Wb,morphtarget_pars_vertex:qb,morphtarget_vertex:Xb,normal_fragment_begin:jb,normal_fragment_maps:Kb,normal_pars_fragment:Yb,normal_pars_vertex:Jb,normal_vertex:Zb,normalmap_pars_fragment:$b,clearcoat_normal_fragment_begin:Qb,clearcoat_normal_fragment_maps:ev,clearcoat_pars_fragment:tv,iridescence_pars_fragment:nv,opaque_fragment:iv,packing:sv,premultiplied_alpha_fragment:rv,project_vertex:av,dithering_fragment:ov,dithering_pars_fragment:lv,roughnessmap_fragment:cv,roughnessmap_pars_fragment:hv,shadowmap_pars_fragment:uv,shadowmap_pars_vertex:dv,shadowmap_vertex:fv,shadowmask_pars_fragment:pv,skinbase_vertex:mv,skinning_pars_vertex:gv,skinning_vertex:xv,skinnormal_vertex:bv,specularmap_fragment:vv,specularmap_pars_fragment:_v,tonemapping_fragment:yv,tonemapping_pars_fragment:Mv,transmission_fragment:Sv,transmission_pars_fragment:wv,uv_pars_fragment:Ev,uv_pars_vertex:Tv,uv_vertex:Av,worldpos_vertex:Rv,background_vert:Cv,background_frag:Pv,backgroundCube_vert:Dv,backgroundCube_frag:Lv,cube_vert:Iv,cube_frag:Nv,depth_vert:Uv,depth_frag:Fv,distance_vert:Ov,distance_frag:zv,equirect_vert:kv,equirect_frag:Bv,linedashed_vert:Gv,linedashed_frag:Hv,meshbasic_vert:Vv,meshbasic_frag:Wv,meshlambert_vert:qv,meshlambert_frag:Xv,meshmatcap_vert:jv,meshmatcap_frag:Kv,meshnormal_vert:Yv,meshnormal_frag:Jv,meshphong_vert:Zv,meshphong_frag:$v,meshphysical_vert:Qv,meshphysical_frag:e_,meshtoon_vert:t_,meshtoon_frag:n_,points_vert:i_,points_frag:s_,shadow_vert:r_,shadow_frag:a_,sprite_vert:o_,sprite_frag:l_},Ce={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ui={basic:{uniforms:xn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:xn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:xn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:xn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:xn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:xn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:xn([Ce.points,Ce.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:xn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:xn([Ce.common,Ce.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:xn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:xn([Ce.sprite,Ce.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:xn([Ce.common,Ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:xn([Ce.lights,Ce.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ui.physical={uniforms:xn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Ha={r:0,b:0,g:0},c_=new Ye,Hf=new Qe;Hf.set(-1,0,0,0,1,0,0,0,1);function h_(s,e,t,n,i,r){const a=new Ie(0);let o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(g){let _=g.isScene===!0?g.background:null;if(_&&_.isTexture){const b=g.backgroundBlurriness>0;_=e.get(_,b)}return _}function m(g){let _=!1;const b=f(g);b===null?x(a,o):b&&b.isColor&&(x(b,1),_=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(g,_){const b=f(_);b&&(b.isCubeTexture||b.mapping===Fo)?(c===void 0&&(c=new Ke(new on(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:rr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(c_.makeRotationFromEuler(_.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hf),c.material.toneMapped=ot.getTransfer(b.colorSpace)!==_t,(h!==b||u!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=s.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ke(new rn(2,2),new Bt({name:"BackgroundMaterial",uniforms:rr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ot.getTransfer(b.colorSpace)!==_t,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,_){g.getRGB(Ha,Lf(s)),t.buffers.color.setClear(Ha.r,Ha.g,Ha.b,_,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),o=_,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,x(a,o)},render:m,addToRenderList:v,dispose:p}}function u_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(I,D,N,O,B){let Y=!1;const W=u(I,O,N,D);r!==W&&(r=W,c(r.object)),Y=f(I,O,N,B),Y&&m(I,O,N,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(I,D,N,O),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function u(I,D,N,O){const B=O.wireframe===!0;let Y=n[D.id];Y===void 0&&(Y={},n[D.id]=Y);const W=I.isInstancedMesh===!0?I.id:0;let se=Y[W];se===void 0&&(se={},Y[W]=se);let j=se[N.id];j===void 0&&(j={},se[N.id]=j);let te=j[B];return te===void 0&&(te=d(l()),j[B]=te),te}function d(I){const D=[],N=[],O=[];for(let B=0;B<t;B++)D[B]=0,N[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:O,object:I,attributes:{},index:null}}function f(I,D,N,O){const B=r.attributes,Y=D.attributes;let W=0;const se=N.getAttributes();for(const j in se)if(se[j].location>=0){const ee=B[j];let ge=Y[j];if(ge===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor)),ee===void 0||ee.attribute!==ge||ge&&ee.data!==ge.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function m(I,D,N,O){const B={},Y=D.attributes;let W=0;const se=N.getAttributes();for(const j in se)if(se[j].location>=0){let ee=Y[j];ee===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));const ge={};ge.attribute=ee,ee&&ee.data&&(ge.data=ee.data),B[j]=ge,W++}r.attributes=B,r.attributesNum=W,r.index=O}function v(){const I=r.newAttributes;for(let D=0,N=I.length;D<N;D++)I[D]=0}function x(I){p(I,0)}function p(I,D){const N=r.newAttributes,O=r.enabledAttributes,B=r.attributeDivisors;N[I]=1,O[I]===0&&(s.enableVertexAttribArray(I),O[I]=1),B[I]!==D&&(s.vertexAttribDivisor(I,D),B[I]=D)}function g(){const I=r.newAttributes,D=r.enabledAttributes;for(let N=0,O=D.length;N<O;N++)D[N]!==I[N]&&(s.disableVertexAttribArray(N),D[N]=0)}function _(I,D,N,O,B,Y,W){W===!0?s.vertexAttribIPointer(I,D,N,B,Y):s.vertexAttribPointer(I,D,N,O,B,Y)}function b(I,D,N,O){v();const B=O.attributes,Y=N.getAttributes(),W=D.defaultAttributeValues;for(const se in Y){const j=Y[se];if(j.location>=0){let te=B[se];if(te===void 0&&(se==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),se==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),te!==void 0){const ee=te.normalized,ge=te.itemSize,pe=e.get(te);if(pe===void 0)continue;const Fe=pe.buffer,Se=pe.type,Oe=pe.bytesPerElement,ne=Se===s.INT||Se===s.UNSIGNED_INT||te.gpuType===sh;if(te.isInterleavedBufferAttribute){const oe=te.data,xe=oe.stride,L=te.offset;if(oe.isInstancedInterleavedBuffer){for(let R=0;R<j.locationSize;R++)p(j.location+R,oe.meshPerAttribute);I.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let R=0;R<j.locationSize;R++)x(j.location+R);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let R=0;R<j.locationSize;R++)_(j.location+R,ge/j.locationSize,Se,ee,xe*Oe,(L+ge/j.locationSize*R)*Oe,ne)}else{if(te.isInstancedBufferAttribute){for(let oe=0;oe<j.locationSize;oe++)p(j.location+oe,te.meshPerAttribute);I.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let oe=0;oe<j.locationSize;oe++)x(j.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let oe=0;oe<j.locationSize;oe++)_(j.location+oe,ge/j.locationSize,Se,ee,ge*Oe,ge/j.locationSize*oe*Oe,ne)}}else if(W!==void 0){const ee=W[se];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(j.location,ee);break;case 3:s.vertexAttrib3fv(j.location,ee);break;case 4:s.vertexAttrib4fv(j.location,ee);break;default:s.vertexAttrib1fv(j.location,ee)}}}}g()}function y(){w();for(const I in n){const D=n[I];for(const N in D){const O=D[N];for(const B in O){const Y=O[B];for(const W in Y)h(Y[W].object),delete Y[W];delete O[B]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;const D=n[I.id];for(const N in D){const O=D[N];for(const B in O){const Y=O[B];for(const W in Y)h(Y[W].object),delete Y[W];delete O[B]}}delete n[I.id]}function T(I){for(const D in n){const N=n[D];for(const O in N){const B=N[O];if(B[I.id]===void 0)continue;const Y=B[I.id];for(const W in Y)h(Y[W].object),delete Y[W];delete B[I.id]}}}function M(I){for(const D in n){const N=n[D],O=I.isInstancedMesh===!0?I.id:0,B=N[O];if(B!==void 0){for(const Y in B){const W=B[Y];for(const se in W)h(W[se].object),delete W[se];delete B[Y]}delete N[O],Object.keys(N).length===0&&delete n[D]}}}function w(){A(),a=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:A,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:x,disableUnusedAttributes:g}}function d_(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function f_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Fn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const M=T===$t&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Sn&&T!==Vn&&!M&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:b,maxSamples:y,samples:S}}function p_(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Mn,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,x=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!x)r?h(null):c();else{const g=r?0:n,_=g*4;let b=p.clippingState||null;l.value=b,b=h(m,d,_,f);for(let y=0;y!==_;++y)b[y]=t[y];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let x=null;if(v!==0){if(x=l.value,m!==!0||x===null){const p=f+v*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<p)&&(x=new Float32Array(p));for(let _=0,b=f;_!==v;++_,b+=4)a.copy(u[_]).applyMatrix4(g,o),a.normal.toArray(x,b),x[b+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}const qs=4,m_=6,g_=20,x_=256,Sr=new ua,id=new Ie;let Tl=null,Al=0,Rl=0,Cl=!1;const b_=new F,ls=new F;class Bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=b_}=r;Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tl,Al,Rl),this._renderer.xr.enabled=Cl,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:$t,format:Fn,colorSpace:zn,depthBuffer:!1},i=sd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=v_(r)),this._blurMaterial=y_(r,e,t),this._ggxMaterial=__(r,e,t)}return i}_compileMaterial(e){const t=new Ke(new At,e);this._renderer.compile(t,Sr)}_sceneToCubeUV(e,t,n,i,r){const l=new fn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(id),u.toneMapping=bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ke(new on,new Lt({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,x=v.material;let p=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,p=!0):(x.color.copy(id),p=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):b===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const y=this._cubeSize;zs(i,b*y,_>2?y:0,y,y),u.setRenderTarget(i),p&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xs||e.mapping===Qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Sr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:m}=this,v=this._sizeLods[n],x=3*v*(n>m-qs?n-m+qs:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,zs(r,x,p,3*v,2*v),i.setRenderTarget(r),i.render(o,Sr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,zs(e,x,p,3*v,2*v),i.setRenderTarget(e),i.render(o,Sr)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],u=3*h*(i>this._lodMax-qs?i-this._lodMax+qs:0),d=4*(this._cubeSize-h);zs(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,Sr)}}function v_(s){const e=[],t=[];let n=s;const i=s-qs+1+m_;for(let r=0;r<i;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,m=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let p=0;p<u;p++){const g=p%3*2/3-1,_=p>2?0:-1,b=[g,_,0,g+2/3,_,0,g+2/3,_+1,0,g,_,0,g+2/3,_+1,0,g,_+1,0];m.set(b,f*d*p);for(let y=0;y<d;y++){const S=h[y*2]*2-1,T=h[y*2+1]*2-1;p===0?ls.set(1,T,S):p===1?ls.set(-S,1,-T):p===2?ls.set(-S,T,1):p===3?ls.set(-1,T,-S):p===4?ls.set(-S,-1,T):ls.set(S,T,-1),ls.toArray(v,(p*d+y)*f)}}const x=new At;x.setAttribute("position",new Gt(m,f)),x.setAttribute("outputDirection",new Gt(v,f)),t.push(new Ke(x,null)),n>qs&&n--}return{lodMeshes:t,sizeLods:e}}function sd(s,e,t){const n=new Qt(s,e,t);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function __(s,e,t){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ko(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function y_(s,e,t){return new Bt({name:"SphericalGaussianBlur",defines:{SAMPLES:g_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ko(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function rd(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function ad(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Lh extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mf(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new on(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:sn});r.uniforms.tEquirect.value=t;const a=new Ke(i,r),o=t.minFilter;return t.minFilter===pi&&(t.minFilter=Yt),new Bf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function M_(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Ko||f===Yo)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const v=new Lh(m.height);return v.fromEquirectangularTexture(s,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,m=f===Ko||f===Yo,v=f===xs||f===Qs;if(m||v){let x=t.get(d);const p=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Bc(s)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const g=d.image;return m&&g&&g.height>0||v&&g&&l(g)?(n===null&&(n=new Bc(s)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}function o(d,f){return f===Ko?d.mapping=xs:f===Yo&&(d.mapping=Qs),d}function l(d){let f=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&f++;return f===m}function c(d){const f=d.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function S_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&js("WebGLRenderer: "+n+" extension not supported."),i}}}function w_(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(m===void 0)return;if(f!==null){const g=f.array;v=f.version;for(let _=0,b=g.length;_<b;_+=3){const y=g[_+0],S=g[_+1],T=g[_+2];d.push(y,S,S,T,T,y)}}else{const g=m.array;v=m.version;for(let _=0,b=g.length/3-1;_<b;_+=3){const y=_+0,S=_+1,T=_+2;d.push(y,S,S,T,T,y)}}const x=new(m.count>=65535?vf:bf)(d,1);x.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,x)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function E_(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let x=0;x<f;x++)v+=d[x];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function T_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function A_(s,e,t){const n=new WeakMap,i=new xt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let _=0;f===!0&&(_=1),m===!0&&(_=2),v===!0&&(_=3);let b=o.attributes.position.count*_,y=1;b>e.maxTextureSize&&(y=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const S=new Float32Array(b*y*4*u),T=new gh(S,b,y,u);T.type=Vn,T.needsUpdate=!0;const M=_*4;for(let A=0;A<u;A++){const I=x[A],D=p[A],N=g[A],O=b*y*4*A;for(let B=0;B<I.count;B++){const Y=B*M;f===!0&&(i.fromBufferAttribute(I,B),S[O+Y+0]=i.x,S[O+Y+1]=i.y,S[O+Y+2]=i.z,S[O+Y+3]=0),m===!0&&(i.fromBufferAttribute(D,B),S[O+Y+4]=i.x,S[O+Y+5]=i.y,S[O+Y+6]=i.z,S[O+Y+7]=0),v===!0&&(i.fromBufferAttribute(N,B),S[O+Y+8]=i.x,S[O+Y+9]=i.y,S[O+Y+10]=i.z,S[O+Y+11]=N.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new de(b,y)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function R_(s,e,t,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const C_={[Qc]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[No]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[Uo]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function P_(s,e,t,n,i,r){const a=new Qt(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new At;c.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new rt([0,2,0,0,2,0],2));const h=new If({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ke(c,h),d=new ua(-1,1,1,-1,0,1);let f=null,m=null,v=!1,x,p=null,g=[],_=!1;this.setSize=function(b,y){a.setSize(b,y),o!==null&&o.setSize(b,y),l!==null&&l.setSize(b,y);for(let S=0;S<g.length;S++){const T=g[S];T.setSize&&T.setSize(b,y)}},this.setEffects=function(b){g=b,_=g.length>0&&g[0].isRenderPass===!0;const y=a.width,S=a.height;g.length>0&&o===null&&(o=new Qt(y,S,{type:$t,depthBuffer:!1,stencilBuffer:!1}),l=new Qt(y,S,{type:$t,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<g.length;T++){const M=g[T];M.setSize&&M.setSize(y,S)}},this.begin=function(b,y){if(v||b.toneMapping===bi&&g.length===0)return!1;if(p=y,y!==null){const S=y.width,T=y.height;(a.width!==S||a.height!==T)&&this.setSize(S,T)}return _===!1&&b.setRenderTarget(a),x=b.toneMapping,b.toneMapping=bi,!0},this.hasRenderPass=function(){return _},this.end=function(b,y){b.toneMapping=x,v=!0;let S=a,T=o;for(let M=0;M<g.length;M++){const w=g[M];w.enabled!==!1&&(w.render(b,T,S,y),w.needsSwap!==!1&&(S=T,T=T===o?l:o))}if(f!==b.outputColorSpace||m!==b.toneMapping){f=b.outputColorSpace,m=b.toneMapping,h.defines={},ot.getTransfer(f)===_t&&(h.defines.SRGB_TRANSFER="");const M=C_[m];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(p),b.render(u,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Vf=new Jt,Gc=new nr(1,1),Wf=new gh,qf=new Dm,Xf=new Mf,od=[],ld=[],cd=new Float32Array(16),hd=new Float32Array(9),ud=new Float32Array(4);function pr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=od[i];if(r===void 0&&(r=new Float32Array(i),od[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Bo(s,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function D_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function L_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function I_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function N_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function U_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;ud.set(n),s.uniformMatrix2fv(this.addr,!1,ud),tn(t,n)}}function F_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;hd.set(n),s.uniformMatrix3fv(this.addr,!1,hd),tn(t,n)}}function O_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;cd.set(n),s.uniformMatrix4fv(this.addr,!1,cd),tn(t,n)}}function z_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function k_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function B_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function G_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function H_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function V_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function W_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function q_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function X_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Gc.compareFunction=t.isReversedDepthBuffer()?fh:dh,r=Gc):r=Vf,t.setTexture2D(e||r,i)}function j_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qf,i)}function K_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Xf,i)}function Y_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wf,i)}function J_(s){switch(s){case 5126:return D_;case 35664:return L_;case 35665:return I_;case 35666:return N_;case 35674:return U_;case 35675:return F_;case 35676:return O_;case 5124:case 35670:return z_;case 35667:case 35671:return k_;case 35668:case 35672:return B_;case 35669:case 35673:return G_;case 5125:return H_;case 36294:return V_;case 36295:return W_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return Y_}}function Z_(s,e){s.uniform1fv(this.addr,e)}function $_(s,e){const t=pr(e,this.size,2);s.uniform2fv(this.addr,t)}function Q_(s,e){const t=pr(e,this.size,3);s.uniform3fv(this.addr,t)}function e1(s,e){const t=pr(e,this.size,4);s.uniform4fv(this.addr,t)}function t1(s,e){const t=pr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function n1(s,e){const t=pr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function i1(s,e){const t=pr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function s1(s,e){s.uniform1iv(this.addr,e)}function r1(s,e){s.uniform2iv(this.addr,e)}function a1(s,e){s.uniform3iv(this.addr,e)}function o1(s,e){s.uniform4iv(this.addr,e)}function l1(s,e){s.uniform1uiv(this.addr,e)}function c1(s,e){s.uniform2uiv(this.addr,e)}function h1(s,e){s.uniform3uiv(this.addr,e)}function u1(s,e){s.uniform4uiv(this.addr,e)}function d1(s,e,t){const n=this.cache,i=e.length,r=Bo(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Gc:a=Vf;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function f1(s,e,t){const n=this.cache,i=e.length,r=Bo(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||qf,r[a])}function p1(s,e,t){const n=this.cache,i=e.length,r=Bo(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Xf,r[a])}function m1(s,e,t){const n=this.cache,i=e.length,r=Bo(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Wf,r[a])}function g1(s){switch(s){case 5126:return Z_;case 35664:return $_;case 35665:return Q_;case 35666:return e1;case 35674:return t1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return s1;case 35667:case 35671:return r1;case 35668:case 35672:return a1;case 35669:case 35673:return o1;case 5125:return l1;case 36294:return c1;case 36295:return h1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}class x1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=J_(t.type)}}class b1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g1(t.type)}}class v1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Pl=/(\w+)(\])?(\[|\.)?/g;function dd(s,e){s.seq.push(e),s.map[e.id]=e}function _1(s,e,t){const n=s.name,i=n.length;for(Pl.lastIndex=0;;){const r=Pl.exec(n),a=Pl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){dd(t,c===void 0?new x1(o,s,e):new b1(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new v1(o),dd(t,u)),t=u}}}class oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);_1(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function fd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const y1=37297;let M1=0;function S1(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const pd=new Qe;function w1(s){ot._getMatrix(pd,ot.workingColorSpace,s);const e=`mat3( ${pd.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(s)){case vo:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function md(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+S1(s.getShaderSource(e),o)}else return r}function E1(s,e){const t=w1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const T1={[Qc]:"Linear",[eh]:"Reinhard",[th]:"Cineon",[No]:"ACESFilmic",[ih]:"AgX",[Uo]:"Neutral",[nh]:"Custom"};function A1(s,e){const t=T1[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Va=new F;function R1(){ot.getLuminanceCoefficients(Va);const s=Va.x.toFixed(4),e=Va.y.toFixed(4),t=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function P1(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function D1(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Fr(s){return s!==""}function gd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const L1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(s){return s.replace(L1,N1)}const I1=new Map;function N1(s,e){let t=st[e];if(t===void 0){const n=I1.get(e);if(n!==void 0)t=st[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Hc(t)}const U1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(s){return s.replace(U1,F1)}function F1(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function vd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const O1={[eo]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function z1(s){return O1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const k1={[xs]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[Fo]:"ENVMAP_TYPE_CUBE_UV"};function B1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":k1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const G1={[Qs]:"ENVMAP_MODE_REFRACTION"};function H1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":G1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const V1={[ef]:"ENVMAP_BLENDING_MULTIPLY",[W0]:"ENVMAP_BLENDING_MIX",[q0]:"ENVMAP_BLENDING_ADD"};function W1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":V1[s.combine]||"ENVMAP_BLENDING_NONE"}function q1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function X1(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=z1(t),c=B1(t),h=H1(t),u=W1(t),d=q1(t),f=C1(t),m=P1(r),v=i.createProgram();let x,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Fr).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Fr).join(`
`),p.length>0&&(p+=`
`)):(x=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),p=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?st.tonemapping_pars_fragment:"",t.toneMapping!==bi?A1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,E1("linearToOutputTexel",t.outputColorSpace),R1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),a=Hc(a),a=gd(a,t),a=xd(a,t),o=Hc(o),o=gd(o,t),o=xd(o,t),a=bd(a),o=bd(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=g+x+a,b=g+p+o,y=fd(i,i.VERTEX_SHADER,_),S=fd(i,i.FRAGMENT_SHADER,b);i.attachShader(v,y),i.attachShader(v,S),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function T(I){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(v)||"",N=i.getShaderInfoLog(y)||"",O=i.getShaderInfoLog(S)||"",B=D.trim(),Y=N.trim(),W=O.trim();let se=!0,j=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(se=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,y,S);else{const te=md(i,y,"vertex"),ee=md(i,S,"fragment");Ze("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+te+`
`+ee)}else B!==""?qe("WebGLProgram: Program Info Log:",B):(Y===""||W==="")&&(j=!1);j&&(I.diagnostics={runnable:se,programLog:B,vertexShader:{log:Y,prefix:x},fragmentShader:{log:W,prefix:p}})}i.deleteShader(y),i.deleteShader(S),M=new oo(i,v),w=D1(i,v)}let M;this.getUniforms=function(){return M===void 0&&T(this),M};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(v,y1)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=S,this}let j1=0;class K1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Y1(e),t.set(e,n)),n}}class Y1{constructor(e){this.id=j1++,this.code=e,this.usedTimes=0}}function J1(s){return s===bs||s===mo||s===go}function Z1(s,e,t,n,i,r){const a=new xh,o=new K1,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function v(M,w,A,I,D,N){const O=I.fog,B=D.geometry,Y=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,W=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,se=e.get(M.envMap||Y,W),j=se&&se.mapping===Fo?se.image.height:null,te=f[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&qe("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ee=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ge=ee!==void 0?ee.length:0;let pe=0;B.morphAttributes.position!==void 0&&(pe=1),B.morphAttributes.normal!==void 0&&(pe=2),B.morphAttributes.color!==void 0&&(pe=3);let Fe,Se,Oe,ne;if(te){const Pt=ui[te];Fe=Pt.vertexShader,Se=Pt.fragmentShader}else{Fe=M.vertexShader,Se=M.fragmentShader;const Pt=o.getVertexShaderStage(M),bt=o.getFragmentShaderStage(M);o.update(M,Pt,bt),Oe=Pt.id,ne=bt.id}const oe=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),L=D.isInstancedMesh===!0,R=D.isBatchedMesh===!0,P=!!M.map,V=!!M.matcap,k=!!se,X=!!M.aoMap,Q=!!M.lightMap,ce=!!M.bumpMap&&M.wireframe===!1,fe=!!M.normalMap,Te=!!M.displacementMap,we=!!M.emissiveMap,ke=!!M.metalnessMap,Je=!!M.roughnessMap,G=M.anisotropy>0,ft=M.clearcoat>0,tt=M.dispersion>0,U=M.retroreflectivity>0,E=M.iridescence>0,K=M.sheen>0,J=M.transmission>0,ae=G&&!!M.anisotropyMap,be=ft&&!!M.clearcoatMap,ve=ft&&!!M.clearcoatNormalMap,le=ft&&!!M.clearcoatRoughnessMap,ue=E&&!!M.iridescenceMap,Ee=E&&!!M.iridescenceThicknessMap,Ve=K&&!!M.sheenColorMap,Me=K&&!!M.sheenRoughnessMap,_e=!!M.specularMap,ze=!!M.specularColorMap,Xe=!!M.specularIntensityMap,$e=J&&!!M.transmissionMap,q=J&&!!M.thicknessMap,Ae=!!M.gradientMap,he=!!M.alphaMap,Re=M.alphaTest>0,Le=!!M.alphaHash,me=!!M.extensions;let je=bi;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(je=s.toneMapping);const He={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:Fe,fragmentShader:Se,defines:M.defines,customVertexShaderID:Oe,customFragmentShaderID:ne,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:R,batchingColor:R&&D._colorsTexture!==null,instancing:L,instancingColor:L&&D.instanceColor!==null,instancingMorph:L&&D.morphTexture!==null,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:P,matcap:V,envMap:k,envMapMode:k&&se.mapping,envMapCubeUVHeight:j,aoMap:X,lightMap:Q,bumpMap:ce,normalMap:fe,displacementMap:Te,emissiveMap:we,normalMapObjectSpace:fe&&M.normalMapType===Z0,normalMapTangentSpace:fe&&M.normalMapType===bo,packedNormalMap:fe&&M.normalMapType===bo&&J1(M.normalMap.format),metalnessMap:ke,roughnessMap:Je,anisotropy:G,anisotropyMap:ae,clearcoat:ft,clearcoatMap:be,clearcoatNormalMap:ve,clearcoatRoughnessMap:le,dispersion:tt,retroreflection:U,iridescence:E,iridescenceMap:ue,iridescenceThicknessMap:Ee,sheen:K,sheenColorMap:Ve,sheenRoughnessMap:Me,specularMap:_e,specularColorMap:ze,specularIntensityMap:Xe,transmission:J,transmissionMap:$e,thicknessMap:q,gradientMap:Ae,opaque:M.transparent===!1&&M.blending===zr&&M.alphaToCoverage===!1,alphaMap:he,alphaTest:Re,alphaHash:Le,combine:M.combine,mapUv:P&&m(M.map.channel),aoMapUv:X&&m(M.aoMap.channel),lightMapUv:Q&&m(M.lightMap.channel),bumpMapUv:ce&&m(M.bumpMap.channel),normalMapUv:fe&&m(M.normalMap.channel),displacementMapUv:Te&&m(M.displacementMap.channel),emissiveMapUv:we&&m(M.emissiveMap.channel),metalnessMapUv:ke&&m(M.metalnessMap.channel),roughnessMapUv:Je&&m(M.roughnessMap.channel),anisotropyMapUv:ae&&m(M.anisotropyMap.channel),clearcoatMapUv:be&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&m(M.sheenRoughnessMap.channel),specularMapUv:_e&&m(M.specularMap.channel),specularColorMapUv:ze&&m(M.specularColorMap.channel),specularIntensityMapUv:Xe&&m(M.specularIntensityMap.channel),transmissionMapUv:$e&&m(M.transmissionMap.channel),thicknessMapUv:q&&m(M.thicknessMap.channel),alphaMapUv:he&&m(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(fe||G),vertexNormals:!!B.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(P||he),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||B.attributes.normal===void 0&&fe===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:pe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:je,decodeVideoTexture:P&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===_t,decodeVideoTextureEmissive:we&&M.emissiveMap.isVideoTexture===!0&&ot.getTransfer(M.emissiveMap.colorSpace)===_t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pn,flipSided:M.side===bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:me&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&M.extensions.multiDraw===!0||R)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function x(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const A in M.defines)w.push(A),w.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(p(w,M),g(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function p(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numSunLights),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numSunLightShadows),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function g(M,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function _(M){const w=f[M.type];let A;if(w){const I=ui[w];A=Un.clone(I.uniforms)}else A=M.uniforms;return A}function b(M,w){let A=h.get(w);return A!==void 0?++A.usedTimes:(A=new X1(s,w,M,i),c.push(A),h.set(w,A)),A}function y(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function S(M){o.remove(M)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:_,acquireProgram:b,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:T}}function $1(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Q1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function _d(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,v,x,p){let g=s[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:x,group:p},s[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=m,g.materialVariant=a(d),g.groupOrder=v,g.renderOrder=d.renderOrder,g.z=x,g.group=p),e++,g}function l(d,f,m,v,x,p,g){g.reversedDepth===!0&&(x=-x);const _=o(d,f,m,v,x,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function c(d,f,m,v,x,p){const g=o(d,f,m,v,x,p);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function h(d,f){t.length>1&&t.sort(d||Q1),n.length>1&&n.sort(f||_d),i.length>1&&i.sort(f||_d)}function u(){for(let d=e,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function ey(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new yd,s.set(n,[a])):i>=r.length?(a=new yd,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function ty(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ie};break;case"SpotLight":t={position:new F,direction:new F,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function ny(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let iy=0;function sy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ry(s){const e=new ty,t=ny(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,r=new Ye,a=new Ye;function o(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,v=0,x=0,p=0,g=0,_=0,b=0,y=0,S=0,T=0,M=0,w=0,A=0;c.sort(sy);for(let D=0,N=c.length;D<N;D++){const O=c[D],B=O.color,Y=O.intensity,W=O.distance;let se=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===bs?se=O.shadow.map.texture:se=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=B.r*Y,u+=B.g*Y,d+=B.b*Y;else if(O.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(O.sh.coefficients[j],Y);A++}else if(O.isSunLight){const j=e.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const te=O.shadow,ee=t.get(O);ee.shadowIntensity=te.intensity,ee.shadowBias=te.bias,ee.shadowNormalBias=te.normalBias,ee.shadowRadius=te.radius,ee.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[m]=ee,n.sunShadowMap[m]=se;const ge=te.getViewportCount();for(let pe=0;pe<ge;pe++)n.sunShadowMatrix[v+pe]=te.getMatrix(pe),n.sunShadowCascade[v+pe]=te._cascadeData[pe];v+=ge,m++}n.sun[f]=j,f++}else if(O.isDirectionalLight){const j=e.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const te=O.shadow,ee=t.get(O);ee.shadowIntensity=te.intensity,ee.shadowBias=te.bias,ee.shadowNormalBias=te.normalBias,ee.shadowRadius=te.radius,ee.shadowMapSize=te.mapSize,n.directionalShadow[x]=ee,n.directionalShadowMap[x]=se,n.directionalShadowMatrix[x]=O.shadow.matrix,y++}n.directional[x]=j,x++}else if(O.isSpotLight){const j=e.get(O);j.position.setFromMatrixPosition(O.matrixWorld),j.color.copy(B).multiplyScalar(Y),j.distance=W,j.coneCos=Math.cos(O.angle),j.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),j.decay=O.decay,n.spot[g]=j;const te=O.shadow;if(O.map&&(n.spotLightMap[M]=O.map,M++,te.updateMatrices(O),O.castShadow&&w++),n.spotLightMatrix[g]=te.matrix,O.castShadow){const ee=t.get(O);ee.shadowIntensity=te.intensity,ee.shadowBias=te.bias,ee.shadowNormalBias=te.normalBias,ee.shadowRadius=te.radius,ee.shadowMapSize=te.mapSize,n.spotShadow[g]=ee,n.spotShadowMap[g]=se,T++}g++}else if(O.isRectAreaLight){const j=e.get(O);j.color.copy(B).multiplyScalar(Y),j.halfWidth.set(O.width*.5,0,0),j.halfHeight.set(0,O.height*.5,0),n.rectArea[_]=j,_++}else if(O.isPointLight){const j=e.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity),j.distance=O.distance,j.decay=O.decay,O.castShadow){const te=O.shadow,ee=t.get(O);ee.shadowIntensity=te.intensity,ee.shadowBias=te.bias,ee.shadowNormalBias=te.normalBias,ee.shadowRadius=te.radius,ee.shadowMapSize=te.mapSize,ee.shadowCameraNear=te.camera.near,ee.shadowCameraFar=te.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=se,n.pointShadowMatrix[p]=O.shadow.matrix,S++}n.point[p]=j,p++}else if(O.isHemisphereLight){const j=e.get(O);j.skyColor.copy(O.color).multiplyScalar(Y),j.groundColor.copy(O.groundColor).multiplyScalar(Y),n.hemi[b]=j,b++}}_>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.sunLength!==f||I.directionalLength!==x||I.pointLength!==p||I.spotLength!==g||I.rectAreaLength!==_||I.hemiLength!==b||I.numSunShadows!==m||I.numDirectionalShadows!==y||I.numPointShadows!==S||I.numSpotShadows!==T||I.numSpotMaps!==M||I.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=x,n.spot.length=g,n.rectArea.length=_,n.point.length=p,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,I.sunLength=f,I.directionalLength=x,I.pointLength=p,I.spotLength=g,I.rectAreaLength=_,I.hemiLength=b,I.numSunShadows=m,I.numDirectionalShadows=y,I.numPointShadows=S,I.numSpotShadows=T,I.numSpotMaps=M,I.numLightProbes=A,n.version=iy++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0,x=0;const p=h.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){const b=c[g];if(b.isSunLight){const y=n.sun[u];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),u++}else if(b.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(b.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function Md(s){const e=new ry(s),t=[],n=[],i=[];function r(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){i.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ay(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Md(s),e.set(i,[o])):r>=a.length?(o=new Md(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ly=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cy=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],hy=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Sd=new Ye,wr=new F,Dl=new F;function uy(s,e,t){let n=new yh;const i=new de,r=new de,a=new xt,o=new kg,l=new Bg,c={},h=t.maxTextureSize,u={[Fi]:bn,[bn]:Fi,[pn]:pn},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:oy,fragmentShader:ly}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new At;m.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ke(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let p=this.type;this.render=function(S,T,M){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||S.length===0)return;this.type===Jd&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=eo);const w=s.getRenderTarget(),A=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),D=s.state;D.setBlending(sn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=p!==this.type;N&&T.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(B=>B.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,B=S.length;O<B;O++){const Y=S[O],W=Y.shadow;if(W===void 0){qe("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const se=W.getFrameExtents();i.multiply(se),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/se.x),i.x=r.x*se.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/se.y),i.y=r.y*se.y,W.mapSize.y=r.y));const j=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=j,W.map===null||N===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Lr){if(Y.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Qt(i.x,i.y,{format:bs,type:$t,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new nr(i.x,i.y,Vn),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=Oi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=qt,W.map.depthTexture.magFilter=qt}else Y.isPointLight?(W.map=new Lh(i.x),W.map.depthTexture=new tg(i.x,vi)):(W.map=new Qt(i.x,i.y),W.map.depthTexture=new nr(i.x,i.y,vi)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=Oi,this.type===eo?(W.map.depthTexture.compareFunction=j?fh:dh,W.map.depthTexture.minFilter=Yt,W.map.depthTexture.magFilter=Yt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=qt,W.map.depthTexture.magFilter=qt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);const te=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Y.isPointLight!==!0&&W.updateMatrices(Y,M);for(let ee=0;ee<te;ee++){const ge=W.getCamera(ee);if(Y.isPointLight){const pe=W.camera,Fe=W.matrix,Se=Y.distance||pe.far;Se!==pe.far&&(pe.far=Se,pe.updateProjectionMatrix()),wr.setFromMatrixPosition(Y.matrixWorld),pe.position.copy(wr),Dl.copy(pe.position),Dl.add(cy[ee]),pe.up.copy(hy[ee]),pe.lookAt(Dl),pe.updateMatrixWorld(),Fe.makeTranslation(-wr.x,-wr.y,-wr.z),Sd.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Sd,pe.coordinateSystem,pe.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,ee),s.clear();else{ee===0&&(s.setRenderTarget(W.map),s.clear());const pe=W.getViewport(ee);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),D.viewport(a)}n=W.getFrustum(ee),b(T,M,ge,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Lr&&g(W,M),W.needsUpdate=!1}p=this.type,x.needsUpdate=!1,s.setRenderTarget(w,A,I)};function g(S,T){const M=e.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Qt(i.x,i.y,{format:bs,type:$t}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(T,null,M,d,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(T,null,M,f,v,null)}function _(S,T,M,w){let A=null;const I=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)A=I;else if(A=M.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const D=A.uuid,N=T.uuid;let O=c[D];O===void 0&&(O={},c[D]=O);let B=O[N];B===void 0&&(B=A.clone(),O[N]=B,T.addEventListener("dispose",y)),A=B}if(A.visible=T.visible,A.wireframe=T.wireframe,w===Lr?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:u[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const D=s.properties.get(A);D.light=M}return A}function b(S,T,M,w,A){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Lr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);const N=e.update(S),O=S.material;if(Array.isArray(O)){const B=N.groups;for(let Y=0,W=B.length;Y<W;Y++){const se=B[Y],j=O[se.materialIndex];if(j&&j.visible){const te=_(S,j,w,A);S.onBeforeShadow(s,S,T,M,N,te,se),s.renderBufferDirect(M,null,N,te,S,se),S.onAfterShadow(s,S,T,M,N,te,se)}}}else if(O.visible){const B=_(S,O,w,A);S.onBeforeShadow(s,S,T,M,N,B,null),s.renderBufferDirect(M,null,N,B,S,null),S.onAfterShadow(s,S,T,M,N,B,null)}}const D=S.children;for(let N=0,O=D.length;N<O;N++)b(D[N],T,M,w,A)}function y(S){S.target.removeEventListener("dispose",y);for(const M in c){const w=c[M],A=S.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function dy(s,e){function t(){let q=!1;const Ae=new xt;let he=null;const Re=new xt(0,0,0,0);return{setMask:function(Le){he!==Le&&!q&&(s.colorMask(Le,Le,Le,Le),he=Le)},setLocked:function(Le){q=Le},setClear:function(Le,me,je,He,Pt){Pt===!0&&(Le*=He,me*=He,je*=He),Ae.set(Le,me,je,He),Re.equals(Ae)===!1&&(s.clearColor(Le,me,je,He),Re.copy(Ae))},reset:function(){q=!1,he=null,Re.set(-1,0,0,0)}}}function n(){let q=!1,Ae=!1,he=null,Re=null,Le=null;return{setReversed:function(me){if(Ae!==me){const je=e.get("EXT_clip_control");me?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ae=me;const He=Le;Le=null,this.setClear(He)}},getReversed:function(){return Ae},setTest:function(me){me?oe(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(me){he!==me&&!q&&(s.depthMask(me),he=me)},setFunc:function(me){if(Ae&&(me=cm[me]),Re!==me){switch(me){case Kl:s.depthFunc(s.NEVER);break;case Yl:s.depthFunc(s.ALWAYS);break;case Jl:s.depthFunc(s.LESS);break;case Yr:s.depthFunc(s.LEQUAL);break;case Zl:s.depthFunc(s.EQUAL);break;case $l:s.depthFunc(s.GEQUAL);break;case Ql:s.depthFunc(s.GREATER);break;case ec:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Re=me}},setLocked:function(me){q=me},setClear:function(me){Le!==me&&(Le=me,Ae&&(me=1-me),s.clearDepth(me))},reset:function(){q=!1,he=null,Re=null,Le=null,Ae=!1}}}function i(){let q=!1,Ae=null,he=null,Re=null,Le=null,me=null,je=null,He=null,Pt=null;return{setTest:function(bt){q||(bt?oe(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(bt){Ae!==bt&&!q&&(s.stencilMask(bt),Ae=bt)},setFunc:function(bt,qn,ti){(he!==bt||Re!==qn||Le!==ti)&&(s.stencilFunc(bt,qn,ti),he=bt,Re=qn,Le=ti)},setOp:function(bt,qn,ti){(me!==bt||je!==qn||He!==ti)&&(s.stencilOp(bt,qn,ti),me=bt,je=qn,He=ti)},setLocked:function(bt){q=bt},setClear:function(bt){Pt!==bt&&(s.clearStencil(bt),Pt=bt)},reset:function(){q=!1,Ae=null,he=null,Re=null,Le=null,me=null,je=null,He=null,Pt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d={},f=new WeakMap,m=[],v=null,x=!1,p=null,g=null,_=null,b=null,y=null,S=null,T=null,M=new Ie(0,0,0),w=0,A=!1,I=null,D=null,N=null,O=null,B=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,se=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=se>=1):j.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=se>=2);let te=null,ee={};const ge=s.getParameter(s.SCISSOR_BOX),pe=s.getParameter(s.VIEWPORT),Fe=new xt().fromArray(ge),Se=new xt().fromArray(pe);function Oe(q,Ae,he,Re){const Le=new Uint8Array(4),me=s.createTexture();s.bindTexture(q,me),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<he;je++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,Re,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ae+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return me}const ne={};ne[s.TEXTURE_2D]=Oe(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=Oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=Oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=Oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(s.DEPTH_TEST),a.setFunc(Yr),ce(!1),fe(iu),oe(s.CULL_FACE),X(sn);function oe(q){h[q]!==!0&&(s.enable(q),h[q]=!0)}function xe(q){h[q]!==!1&&(s.disable(q),h[q]=!1)}function L(q,Ae){return d[q]!==Ae?(s.bindFramebuffer(q,Ae),d[q]=Ae,q===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Ae),q===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function R(q,Ae){let he=m,Re=!1;if(q){he=f.get(Ae),he===void 0&&(he=[],f.set(Ae,he));const Le=q.textures;if(he.length!==Le.length||he[0]!==s.COLOR_ATTACHMENT0){for(let me=0,je=Le.length;me<je;me++)he[me]=s.COLOR_ATTACHMENT0+me;he.length=Le.length,Re=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,Re=!0);Re&&s.drawBuffers(he)}function P(q){return v!==q?(s.useProgram(q),v=q,!0):!1}const V={[fi]:s.FUNC_ADD,[P0]:s.FUNC_SUBTRACT,[D0]:s.FUNC_REVERSE_SUBTRACT};V[L0]=s.MIN,V[I0]=s.MAX;const k={[Ir]:s.ZERO,[N0]:s.ONE,[U0]:s.SRC_COLOR,[$d]:s.SRC_ALPHA,[k0]:s.SRC_ALPHA_SATURATE,[jl]:s.DST_COLOR,[Xl]:s.DST_ALPHA,[F0]:s.ONE_MINUS_SRC_COLOR,[Qd]:s.ONE_MINUS_SRC_ALPHA,[z0]:s.ONE_MINUS_DST_COLOR,[O0]:s.ONE_MINUS_DST_ALPHA,[B0]:s.CONSTANT_COLOR,[G0]:s.ONE_MINUS_CONSTANT_COLOR,[H0]:s.CONSTANT_ALPHA,[V0]:s.ONE_MINUS_CONSTANT_ALPHA};function X(q,Ae,he,Re,Le,me,je,He,Pt,bt){if(q===sn){x===!0&&(xe(s.BLEND),x=!1);return}if(x===!1&&(oe(s.BLEND),x=!0),q!==Zd){if(q!==p||bt!==A){if((g!==fi||y!==fi)&&(s.blendEquation(s.FUNC_ADD),g=fi,y=fi),bt)switch(q){case zr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xi:s.blendFunc(s.ONE,s.ONE);break;case su:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ru:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ze("WebGLState: Invalid blending: ",q);break}else switch(q){case zr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case su:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ru:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",q);break}_=null,b=null,S=null,T=null,M.set(0,0,0),w=0,p=q,A=bt}return}Le=Le||Ae,me=me||he,je=je||Re,(Ae!==g||Le!==y)&&(s.blendEquationSeparate(V[Ae],V[Le]),g=Ae,y=Le),(he!==_||Re!==b||me!==S||je!==T)&&(s.blendFuncSeparate(k[he],k[Re],k[me],k[je]),_=he,b=Re,S=me,T=je),(He.equals(M)===!1||Pt!==w)&&(s.blendColor(He.r,He.g,He.b,Pt),M.copy(He),w=Pt),p=q,A=!1}function Q(q,Ae){q.side===pn?xe(s.CULL_FACE):oe(s.CULL_FACE);let he=q.side===bn;Ae&&(he=!he),ce(he),q.blending===zr&&q.transparent===!1?X(sn):X(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);const Re=q.stencilWrite;o.setTest(Re),Re&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),we(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ce(q){I!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),I=q)}function fe(q){q!==R0?(oe(s.CULL_FACE),q!==D&&(q===iu?s.cullFace(s.BACK):q===C0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),D=q}function Te(q){q!==N&&(W&&s.lineWidth(q),N=q)}function we(q,Ae,he){q?(oe(s.POLYGON_OFFSET_FILL),(O!==Ae||B!==he)&&(O=Ae,B=he,a.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,he))):xe(s.POLYGON_OFFSET_FILL)}function ke(q){q?oe(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function Je(q){q===void 0&&(q=s.TEXTURE0+Y-1),te!==q&&(s.activeTexture(q),te=q)}function G(q,Ae,he){he===void 0&&(te===null?he=s.TEXTURE0+Y-1:he=te);let Re=ee[he];Re===void 0&&(Re={type:void 0,texture:void 0},ee[he]=Re),(Re.type!==q||Re.texture!==Ae)&&(te!==he&&(s.activeTexture(he),te=he),s.bindTexture(q,Ae||ne[q]),Re.type=q,Re.texture=Ae)}function ft(){const q=ee[te];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function tt(){try{s.compressedTexImage2D(...arguments)}catch(q){Ze("WebGLState:",q)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(q){Ze("WebGLState:",q)}}function E(){try{s.texSubImage2D(...arguments)}catch(q){Ze("WebGLState:",q)}}function K(){try{s.texSubImage3D(...arguments)}catch(q){Ze("WebGLState:",q)}}function J(){try{s.compressedTexSubImage2D(...arguments)}catch(q){Ze("WebGLState:",q)}}function ae(){try{s.compressedTexSubImage3D(...arguments)}catch(q){Ze("WebGLState:",q)}}function be(){try{s.texStorage2D(...arguments)}catch(q){Ze("WebGLState:",q)}}function ve(){try{s.texStorage3D(...arguments)}catch(q){Ze("WebGLState:",q)}}function le(){try{s.texImage2D(...arguments)}catch(q){Ze("WebGLState:",q)}}function ue(){try{s.texImage3D(...arguments)}catch(q){Ze("WebGLState:",q)}}function Ee(q){return u[q]!==void 0?u[q]:s.getParameter(q)}function Ve(q,Ae){u[q]!==Ae&&(s.pixelStorei(q,Ae),u[q]=Ae)}function Me(q){Fe.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),Fe.copy(q))}function _e(q){Se.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Se.copy(q))}function ze(q,Ae){let he=c.get(Ae);he===void 0&&(he=new WeakMap,c.set(Ae,he));let Re=he.get(q);Re===void 0&&(Re=s.getUniformBlockIndex(Ae,q.name),he.set(q,Re))}function Xe(q,Ae){const Re=c.get(Ae).get(q);l.get(Ae)!==Re&&(s.uniformBlockBinding(Ae,Re,q.__bindingPointIndex),l.set(Ae,Re))}function $e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},te=null,ee={},d={},f=new WeakMap,m=[],v=null,x=!1,p=null,g=null,_=null,b=null,y=null,S=null,T=null,M=new Ie(0,0,0),w=0,A=!1,I=null,D=null,N=null,O=null,B=null,Fe.set(0,0,s.canvas.width,s.canvas.height),Se.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:xe,bindFramebuffer:L,drawBuffers:R,useProgram:P,setBlending:X,setMaterial:Q,setFlipSided:ce,setCullFace:fe,setLineWidth:Te,setPolygonOffset:we,setScissorTest:ke,activeTexture:Je,bindTexture:G,unbindTexture:ft,compressedTexImage2D:tt,compressedTexImage3D:U,texImage2D:le,texImage3D:ue,pixelStorei:Ve,getParameter:Ee,updateUBOMapping:ze,uniformBlockBinding:Xe,texStorage2D:be,texStorage3D:ve,texSubImage2D:E,texSubImage3D:K,compressedTexSubImage2D:J,compressedTexSubImage3D:ae,scissor:Me,viewport:_e,reset:$e}}function fy(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap,u=new Set;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,E){return m?new OffscreenCanvas(U,E):ea("canvas")}function x(U,E,K){let J=1;const ae=tt(U);if((ae.width>K||ae.height>K)&&(J=K/Math.max(ae.width,ae.height)),J<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const be=Math.floor(J*ae.width),ve=Math.floor(J*ae.height);d===void 0&&(d=v(be,ve));const le=E?v(be,ve):d;return le.width=be,le.height=ve,le.getContext("2d").drawImage(U,0,0,be,ve),qe("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+be+"x"+ve+")."),le}else return"data"in U&&qe("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),U;return U}function p(U){return U.generateMipmaps}function g(U){s.generateMipmap(U)}function _(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(U,E,K,J,ae,be=!1){if(U!==null){if(s[U]!==void 0)return s[U];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ve;J&&(ve=e.get("EXT_texture_norm16"),ve||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=E;if(E===s.RED&&(K===s.FLOAT&&(le=s.R32F),K===s.HALF_FLOAT&&(le=s.R16F),K===s.UNSIGNED_BYTE&&(le=s.R8),K===s.UNSIGNED_SHORT&&ve&&(le=ve.R16_EXT),K===s.SHORT&&ve&&(le=ve.R16_SNORM_EXT)),E===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(le=s.R8UI),K===s.UNSIGNED_SHORT&&(le=s.R16UI),K===s.UNSIGNED_INT&&(le=s.R32UI),K===s.BYTE&&(le=s.R8I),K===s.SHORT&&(le=s.R16I),K===s.INT&&(le=s.R32I)),E===s.RG&&(K===s.FLOAT&&(le=s.RG32F),K===s.HALF_FLOAT&&(le=s.RG16F),K===s.UNSIGNED_BYTE&&(le=s.RG8),K===s.UNSIGNED_SHORT&&ve&&(le=ve.RG16_EXT),K===s.SHORT&&ve&&(le=ve.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(le=s.RG8UI),K===s.UNSIGNED_SHORT&&(le=s.RG16UI),K===s.UNSIGNED_INT&&(le=s.RG32UI),K===s.BYTE&&(le=s.RG8I),K===s.SHORT&&(le=s.RG16I),K===s.INT&&(le=s.RG32I)),E===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(le=s.RGB8UI),K===s.UNSIGNED_SHORT&&(le=s.RGB16UI),K===s.UNSIGNED_INT&&(le=s.RGB32UI),K===s.BYTE&&(le=s.RGB8I),K===s.SHORT&&(le=s.RGB16I),K===s.INT&&(le=s.RGB32I)),E===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),K===s.UNSIGNED_INT&&(le=s.RGBA32UI),K===s.BYTE&&(le=s.RGBA8I),K===s.SHORT&&(le=s.RGBA16I),K===s.INT&&(le=s.RGBA32I)),E===s.RGB&&(K===s.UNSIGNED_SHORT&&ve&&(le=ve.RGB16_EXT),K===s.SHORT&&ve&&(le=ve.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(le=s.R11F_G11F_B10F)),E===s.RGBA){const ue=be?vo:ot.getTransfer(ae);K===s.FLOAT&&(le=s.RGBA32F),K===s.HALF_FLOAT&&(le=s.RGBA16F),K===s.UNSIGNED_BYTE&&(le=ue===_t?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&ve&&(le=ve.RGBA16_EXT),K===s.SHORT&&ve&&(le=ve.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function y(U,E){let K;return U?E===null||E===vi||E===er?K=s.DEPTH24_STENCIL8:E===Vn?K=s.DEPTH32F_STENCIL8:E===Jr&&(K=s.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vi||E===er?K=s.DEPTH_COMPONENT24:E===Vn?K=s.DEPTH_COMPONENT32F:E===Jr&&(K=s.DEPTH_COMPONENT16),K}function S(U,E){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==qt&&U.minFilter!==Yt?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function T(U){const E=U.target;E.removeEventListener("dispose",T),w(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function M(U){const E=U.target;E.removeEventListener("dispose",M),I(E)}function w(U){const E=n.get(U);if(E.__webglInit===void 0)return;const K=U.source,J=f.get(K);if(J){const ae=J[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&A(U),Object.keys(J).length===0&&f.delete(K)}n.remove(U)}function A(U){const E=n.get(U);s.deleteTexture(E.__webglTexture);const K=U.source,J=f.get(K);delete J[E.__cacheKey],a.memory.textures--}function I(U){const E=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let ae=0;ae<E.__webglFramebuffer[J].length;ae++)s.deleteFramebuffer(E.__webglFramebuffer[J][ae]);else s.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)s.deleteFramebuffer(E.__webglFramebuffer[J]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=U.textures;for(let J=0,ae=K.length;J<ae;J++){const be=n.get(K[J]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(K[J])}n.remove(U)}let D=0;function N(){D=0}function O(){return D}function B(U){D=U}function Y(){const U=D;return U>=i.maxTextures&&qe("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,U}function W(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function se(U,E){const K=n.get(U);if(U.isVideoTexture&&G(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){const J=U.image;if(J===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(K,U,E);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+E)}function j(U,E){const K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){xe(K,U,E);return}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+E)}function te(U,E){const K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){xe(K,U,E);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+E)}function ee(U,E){const K=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&K.__version!==U.version){L(K,U,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+E)}const ge={[Tn]:s.REPEAT,[$n]:s.CLAMP_TO_EDGE,[po]:s.MIRRORED_REPEAT},pe={[qt]:s.NEAREST,[nf]:s.NEAREST_MIPMAP_NEAREST,[Nr]:s.NEAREST_MIPMAP_LINEAR,[Yt]:s.LINEAR,[to]:s.LINEAR_MIPMAP_NEAREST,[pi]:s.LINEAR_MIPMAP_LINEAR},Fe={[Q0]:s.NEVER,[sm]:s.ALWAYS,[em]:s.LESS,[dh]:s.LEQUAL,[tm]:s.EQUAL,[fh]:s.GEQUAL,[nm]:s.GREATER,[im]:s.NOTEQUAL};function Se(U,E){if(E.type===Vn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Yt||E.magFilter===to||E.magFilter===Nr||E.magFilter===pi||E.minFilter===Yt||E.minFilter===to||E.minFilter===Nr||E.minFilter===pi)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,ge[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,ge[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,ge[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,pe[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,pe[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qt||E.minFilter!==Nr&&E.minFilter!==pi||E.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Oe(U,E){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",T));const J=E.source;let ae=f.get(J);ae===void 0&&(ae={},f.set(J,ae));const be=W(E);if(be!==U.__cacheKey){ae[be]===void 0&&(ae[be]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ae[be].usedTimes++;const ve=ae[U.__cacheKey];ve!==void 0&&(ae[U.__cacheKey].usedTimes--,ve.usedTimes===0&&A(E)),U.__cacheKey=be,U.__webglTexture=ae[be].texture}return K}function ne(U,E,K){return Math.floor(Math.floor(U/K)/E)}function oe(U,E,K,J){const be=U.updateRanges;if(be.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,K,J,E.data);else{be.sort((Ve,Me)=>Ve.start-Me.start);let ve=0;for(let Ve=1;Ve<be.length;Ve++){const Me=be[ve],_e=be[Ve],ze=Me.start+Me.count,Xe=ne(_e.start,E.width,4),$e=ne(Me.start,E.width,4);_e.start<=ze+1&&Xe===$e&&ne(_e.start+_e.count-1,E.width,4)===Xe?Me.count=Math.max(Me.count,_e.start+_e.count-Me.start):(++ve,be[ve]=_e)}be.length=ve+1;const le=t.getParameter(s.UNPACK_ROW_LENGTH),ue=t.getParameter(s.UNPACK_SKIP_PIXELS),Ee=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ve=0,Me=be.length;Ve<Me;Ve++){const _e=be[Ve],ze=Math.floor(_e.start/4),Xe=Math.ceil(_e.count/4),$e=ze%E.width,q=Math.floor(ze/E.width),Ae=Xe,he=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(s.UNPACK_SKIP_ROWS,q),t.texSubImage2D(s.TEXTURE_2D,0,$e,q,Ae,he,K,J,E.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,le),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ee)}}function xe(U,E,K){let J=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=s.TEXTURE_3D);const ae=Oe(U,E),be=E.source;t.bindTexture(J,U.__webglTexture,s.TEXTURE0+K);const ve=n.get(be);if(be.version!==ve.__version||ae===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const he=ot.getPrimaries(ot.workingColorSpace),Re=E.colorSpace===Yn?null:ot.getPrimaries(E.colorSpace),Le=E.colorSpace===Yn||he===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let ue=x(E.image,!1,i.maxTextureSize);ue=ft(E,ue);const Ee=r.convert(E.format,E.colorSpace),Ve=r.convert(E.type);let Me=b(E.internalFormat,Ee,Ve,E.normalized,E.colorSpace,E.isVideoTexture);Se(J,E);let _e;const ze=E.mipmaps,Xe=E.isVideoTexture!==!0,$e=ve.__version===void 0||ae===!0,q=be.dataReady,Ae=S(E,ue);if(E.isDepthTexture)Me=y(E.format===Qi,E.type),$e&&(Xe?t.texStorage2D(s.TEXTURE_2D,1,Me,ue.width,ue.height):t.texImage2D(s.TEXTURE_2D,0,Me,ue.width,ue.height,0,Ee,Ve,null));else if(E.isDataTexture)if(ze.length>0){Xe&&$e&&t.texStorage2D(s.TEXTURE_2D,Ae,Me,ze[0].width,ze[0].height);for(let he=0,Re=ze.length;he<Re;he++)_e=ze[he],Xe?q&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,_e.width,_e.height,Ee,Ve,_e.data):t.texImage2D(s.TEXTURE_2D,he,Me,_e.width,_e.height,0,Ee,Ve,_e.data);E.generateMipmaps=!1}else Xe?($e&&t.texStorage2D(s.TEXTURE_2D,Ae,Me,ue.width,ue.height),q&&oe(E,ue,Ee,Ve)):t.texImage2D(s.TEXTURE_2D,0,Me,ue.width,ue.height,0,Ee,Ve,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Xe&&$e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Me,ze[0].width,ze[0].height,ue.depth);for(let he=0,Re=ze.length;he<Re;he++)if(_e=ze[he],E.format!==Fn)if(Ee!==null)if(Xe){if(q)if(E.layerUpdates.size>0){const Le=nd(_e.width,_e.height,E.format,E.type);for(const me of E.layerUpdates){const je=_e.data.subarray(me*Le/_e.data.BYTES_PER_ELEMENT,(me+1)*Le/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,me,_e.width,_e.height,1,Ee,je)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ue.depth,Ee,_e.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,Me,_e.width,_e.height,ue.depth,0,_e.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?q&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ue.depth,Ee,Ve,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,Me,_e.width,_e.height,ue.depth,0,Ee,Ve,_e.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Xe&&$e&&t.texStorage2D(s.TEXTURE_2D,Ae,Me,ze[0].width,ze[0].height);for(let he=0,Re=ze.length;he<Re;he++)_e=ze[he],E.format!==Fn?Ee!==null?Xe?q&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,_e.width,_e.height,Ee,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,he,Me,_e.width,_e.height,0,_e.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?q&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,_e.width,_e.height,Ee,Ve,_e.data):t.texImage2D(s.TEXTURE_2D,he,Me,_e.width,_e.height,0,Ee,Ve,_e.data)}else if(E.isDataArrayTexture)if(Xe){if($e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Me,ue.width,ue.height,ue.depth),q)if(E.layerUpdates.size>0){const he=nd(ue.width,ue.height,E.format,E.type);for(const Re of E.layerUpdates){const Le=ue.data.subarray(Re*he/ue.data.BYTES_PER_ELEMENT,(Re+1)*he/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Re,ue.width,ue.height,1,Ee,Ve,Le)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Ve,ue.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Me,ue.width,ue.height,ue.depth,0,Ee,Ve,ue.data);else if(E.isData3DTexture)Xe?($e&&t.texStorage3D(s.TEXTURE_3D,Ae,Me,ue.width,ue.height,ue.depth),q&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Ve,ue.data)):t.texImage3D(s.TEXTURE_3D,0,Me,ue.width,ue.height,ue.depth,0,Ee,Ve,ue.data);else if(E.isFramebufferTexture){if($e)if(Xe)t.texStorage2D(s.TEXTURE_2D,Ae,Me,ue.width,ue.height);else{let he=ue.width,Re=ue.height;for(let Le=0;Le<Ae;Le++)t.texImage2D(s.TEXTURE_2D,Le,Me,he,Re,0,Ee,Ve,null),he>>=1,Re>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const he=s.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),ue.parentNode!==he){he.appendChild(ue),u.add(E),he.onpaint=Re=>{const Le=Re.changedElements;for(const me of u)Le.includes(me.image)&&(me.needsUpdate=!0)},he.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ue);else{const Le=s.RGBA,me=s.RGBA,je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Le,me,je,ue)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Xe&&$e){const he=tt(ze[0]);t.texStorage2D(s.TEXTURE_2D,Ae,Me,he.width,he.height)}for(let he=0,Re=ze.length;he<Re;he++)_e=ze[he],Xe?q&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ee,Ve,_e):t.texImage2D(s.TEXTURE_2D,he,Me,Ee,Ve,_e);E.generateMipmaps=!1}else if(Xe){if($e){const he=tt(ue);t.texStorage2D(s.TEXTURE_2D,Ae,Me,he.width,he.height)}q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Ve,ue)}else t.texImage2D(s.TEXTURE_2D,0,Me,Ee,Ve,ue);p(E)&&g(J),ve.__version=be.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function L(U,E,K){if(E.image.length!==6)return;const J=Oe(U,E),ae=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+K);const be=n.get(ae);if(ae.version!==be.__version||J===!0){t.activeTexture(s.TEXTURE0+K);const ve=ot.getPrimaries(ot.workingColorSpace),le=E.colorSpace===Yn?null:ot.getPrimaries(E.colorSpace),ue=E.colorSpace===Yn||ve===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,Ve=E.image[0]&&E.image[0].isDataTexture,Me=[];for(let me=0;me<6;me++)!Ee&&!Ve?Me[me]=x(E.image[me],!0,i.maxCubemapSize):Me[me]=Ve?E.image[me].image:E.image[me],Me[me]=ft(E,Me[me]);const _e=Me[0],ze=r.convert(E.format,E.colorSpace),Xe=r.convert(E.type),$e=b(E.internalFormat,ze,Xe,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,Ae=be.__version===void 0||J===!0,he=ae.dataReady;let Re=S(E,_e);Se(s.TEXTURE_CUBE_MAP,E);let Le;if(Ee){q&&Ae&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,$e,_e.width,_e.height);for(let me=0;me<6;me++){Le=Me[me].mipmaps;for(let je=0;je<Le.length;je++){const He=Le[je];E.format!==Fn?ze!==null?q?he&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,He.width,He.height,ze,He.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,$e,He.width,He.height,0,He.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,He.width,He.height,ze,Xe,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,$e,He.width,He.height,0,ze,Xe,He.data)}}}else{if(Le=E.mipmaps,q&&Ae){Le.length>0&&Re++;const me=tt(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,$e,me.width,me.height)}for(let me=0;me<6;me++)if(Ve){q?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Me[me].width,Me[me].height,ze,Xe,Me[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$e,Me[me].width,Me[me].height,0,ze,Xe,Me[me].data);for(let je=0;je<Le.length;je++){const Pt=Le[je].image[me].image;q?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,Pt.width,Pt.height,ze,Xe,Pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,$e,Pt.width,Pt.height,0,ze,Xe,Pt.data)}}else{q?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ze,Xe,Me[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$e,ze,Xe,Me[me]);for(let je=0;je<Le.length;je++){const He=Le[je];q?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,ze,Xe,He.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,$e,ze,Xe,He.image[me])}}}p(E)&&g(s.TEXTURE_CUBE_MAP),be.__version=ae.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function R(U,E,K,J,ae,be){const ve=r.convert(K.format,K.colorSpace),le=r.convert(K.type),ue=b(K.internalFormat,ve,le,K.normalized,K.colorSpace),Ee=n.get(E),Ve=n.get(K);if(Ve.__renderTarget=E,!Ee.__hasExternalTextures){const Me=Math.max(1,E.width>>be),_e=Math.max(1,E.height>>be);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,be,ue,Me,_e,E.depth,0,ve,le,null):t.texImage2D(ae,be,ue,Me,_e,0,ve,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Je(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,ae,Ve.__webglTexture,0,ke(E)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,ae,Ve.__webglTexture,be),t.bindFramebuffer(s.FRAMEBUFFER,null)}function P(U,E,K){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const J=E.depthTexture,ae=J&&J.isDepthTexture?J.type:null,be=y(E.stencilBuffer,ae),ve=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Je(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke(E),be,E.width,E.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke(E),be,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,be,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,U)}else{const J=E.textures;for(let ae=0;ae<J.length;ae++){const be=J[ae],ve=r.convert(be.format,be.colorSpace),le=r.convert(be.type),ue=b(be.internalFormat,ve,le,be.normalized,be.colorSpace);Je(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke(E),ue,E.width,E.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke(E),ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ue,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function V(U,E,K){const J=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ae=n.get(E.depthTexture);if(ae.__renderTarget=E,(!ae.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),ae.__webglTexture===void 0){ae.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),Se(s.TEXTURE_CUBE_MAP,E.depthTexture);const Ee=r.convert(E.depthTexture.format),Ve=r.convert(E.depthTexture.type);let Me;E.depthTexture.format===Oi?Me=s.DEPTH_COMPONENT24:E.depthTexture.format===Qi&&(Me=s.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Me,E.width,E.height,0,Ee,Ve,null)}}else se(E.depthTexture,0);const be=ae.__webglTexture,ve=ke(E),le=J?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,ue=E.depthTexture.format===Qi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Oi)Je(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,le,be,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,ue,le,be,0);else if(E.depthTexture.format===Qi)Je(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,le,be,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,ue,le,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function k(U){const E=n.get(U),K=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const J=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",ae)};J.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=J}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let J=0;J<6;J++)V(E.__webglFramebuffer[J],U,J);else{const J=U.texture.mipmaps;J&&J.length>0?V(E.__webglFramebuffer[0],U,0):V(E.__webglFramebuffer,U,0)}else if(K){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=s.createRenderbuffer(),P(E.__webglDepthbuffer[J],U,!1);else{const ae=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=E.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,be)}}else{const J=U.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),P(E.__webglDepthbuffer,U,!1);else{const ae=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,be)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function X(U,E,K){const J=n.get(U);E!==void 0&&R(J.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&k(U)}function Q(U){const E=U.texture,K=n.get(U),J=n.get(E);U.addEventListener("dispose",M);const ae=U.textures,be=U.isWebGLCubeRenderTarget===!0,ve=ae.length>1;if(ve||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=E.version,a.memory.textures++),be){K.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[le]=[];for(let ue=0;ue<E.mipmaps.length;ue++)K.__webglFramebuffer[le][ue]=s.createFramebuffer()}else K.__webglFramebuffer[le]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)K.__webglFramebuffer[le]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(ve)for(let le=0,ue=ae.length;le<ue;le++){const Ee=n.get(ae[le]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),a.memory.textures++)}if(U.samples>0&&Je(U)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let le=0;le<ae.length;le++){const ue=ae[le];K.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[le]);const Ee=r.convert(ue.format,ue.colorSpace),Ve=r.convert(ue.type),Me=b(ue.internalFormat,Ee,Ve,ue.normalized,ue.colorSpace,U.isXRRenderTarget===!0),_e=ke(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,Me,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,K.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),P(K.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(be){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Se(s.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)R(K.__webglFramebuffer[le][ue],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else R(K.__webglFramebuffer[le],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(E)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let le=0,ue=ae.length;le<ue;le++){const Ee=ae[le],Ve=n.get(Ee);let Me=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Me=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Me,Ve.__webglTexture),Se(Me,Ee),R(K.__webglFramebuffer,U,Ee,s.COLOR_ATTACHMENT0+le,Me,0),p(Ee)&&g(Me)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(le=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),Se(le,E),E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)R(K.__webglFramebuffer[ue],U,E,s.COLOR_ATTACHMENT0,le,ue);else R(K.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,le,0);p(E)&&g(le),t.unbindTexture()}U.depthBuffer&&k(U)}function ce(U){const E=U.textures;for(let K=0,J=E.length;K<J;K++){const ae=E[K];if(p(ae)){const be=_(U),ve=n.get(ae).__webglTexture;t.bindTexture(be,ve),g(be),t.unbindTexture()}}}const fe=[],Te=[];function we(U){if(U.samples>0){if(Je(U)===!1){const E=U.textures,K=U.width,J=U.height;let ae=s.COLOR_BUFFER_BIT;const be=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(U),le=E.length>1;if(le)for(let Ee=0;Ee<E.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const ue=U.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[Ee]);const Ve=n.get(E[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ve,0)}s.blitFramebuffer(0,0,K,J,0,0,K,J,ae,s.NEAREST),l===!0&&(fe.length=0,Te.length=0,fe.push(s.COLOR_ATTACHMENT0+Ee),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(fe.push(be),Te.push(be),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Te)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let Ee=0;Ee<E.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,ve.__webglColorRenderbuffer[Ee]);const Ve=n.get(E[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,Ve,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ke(U){return Math.min(i.maxSamples,U.samples)}function Je(U){const E=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function G(U){const E=a.render.frame;h.get(U)!==E&&(h.set(U,E),U.update())}function ft(U,E){const K=U.colorSpace,J=U.format,ae=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==zn&&K!==Yn&&(ot.getTransfer(K)===_t?(J!==Fn||ae!==Sn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",K)),E}function tt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=N,this.getTextureUnits=O,this.setTextureUnits=B,this.setTexture2D=se,this.setTexture2DArray=j,this.setTexture3D=te,this.setTextureCube=ee,this.rebindTextures=X,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=R,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function py(s,e){function t(n,i=Yn){let r;const a=ot.getTransfer(i);if(n===Sn)return s.UNSIGNED_BYTE;if(n===rh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ah)return s.UNSIGNED_SHORT_5_5_5_1;if(n===af)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===of)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===sf)return s.BYTE;if(n===rf)return s.SHORT;if(n===Jr)return s.UNSIGNED_SHORT;if(n===sh)return s.INT;if(n===vi)return s.UNSIGNED_INT;if(n===Vn)return s.FLOAT;if(n===$t)return s.HALF_FLOAT;if(n===lf)return s.ALPHA;if(n===cf)return s.RGB;if(n===Fn)return s.RGBA;if(n===Oi)return s.DEPTH_COMPONENT;if(n===Qi)return s.DEPTH_STENCIL;if(n===oh)return s.RED;if(n===lh)return s.RED_INTEGER;if(n===bs)return s.RG;if(n===ch)return s.RG_INTEGER;if(n===hh)return s.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===nc||n===ic||n===sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===ac||n===oc||n===lc||n===cc||n===mo||n===hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rc||n===ac)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===lc)return r.COMPRESSED_R11_EAC;if(n===cc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===mo)return r.COMPRESSED_RG11_EAC;if(n===hc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===bc||n===vc||n===_c||n===yc||n===Mc||n===Sc||n===wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ec||n===Tc||n===Ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ec)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rc||n===Cc||n===go||n===Pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const my=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Sf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bt({vertexShader:my,fragmentShader:gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class by extends ki{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",x=new xy,p={},g=t.getContextAttributes();let _=null,b=null;const y=[],S=[],T=new de;let M=null,w=null;const A=new fn;A.viewport=new xt;const I=new fn;I.viewport=new xt;const D=[A,I],N=new lx;let O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let oe=y[ne];return oe===void 0&&(oe=new il,y[ne]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ne){let oe=y[ne];return oe===void 0&&(oe=new il,y[ne]=oe),oe.getGripSpace()},this.getHand=function(ne){let oe=y[ne];return oe===void 0&&(oe=new il,y[ne]=oe),oe.getHandSpace()};function Y(ne){const oe=S.indexOf(ne.inputSource);if(oe===-1)return;const xe=y[oe];xe!==void 0&&(xe.update(ne.inputSource,ne.frame,c||a),xe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function W(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",se);for(let ne=0;ne<y.length;ne++){const oe=S[ne];oe!==null&&(S[ne]=null,y[ne].disconnect(oe))}O=null,B=null,x.reset();for(const ne in p)delete p[ne];if(e.setRenderTarget(_),f=null,d=null,u=null,i=null,b=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(T.width,T.height,!1),w!==null){const ne=w.camera;ne.fov=w.fov,ne.zoom=w.zoom,ne.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",W),i.addEventListener("inputsourceschange",se),g.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,L=null,R=null;g.depth&&(R=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=g.stencil?Qi:Oi,L=g.stencil?er:vi);const P={colorFormat:t.RGBA8,depthFormat:R,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(P),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Qt(d.textureWidth,d.textureHeight,{format:Fn,type:Sn,depthTexture:new nr(d.textureWidth,d.textureHeight,L,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const xe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Qt(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function se(ne){for(let oe=0;oe<ne.removed.length;oe++){const xe=ne.removed[oe],L=S.indexOf(xe);L>=0&&(S[L]=null,y[L].disconnect(xe))}for(let oe=0;oe<ne.added.length;oe++){const xe=ne.added[oe];let L=S.indexOf(xe);if(L===-1){for(let P=0;P<y.length;P++)if(P>=S.length){S.push(xe),L=P;break}else if(S[P]===null){S[P]=xe,L=P;break}if(L===-1)break}const R=y[L];R&&R.connect(xe)}}const j=new F,te=new F;function ee(ne,oe,xe){j.setFromMatrixPosition(oe.matrixWorld),te.setFromMatrixPosition(xe.matrixWorld);const L=j.distanceTo(te),R=oe.projectionMatrix.elements,P=xe.projectionMatrix.elements,V=R[14]/(R[10]-1),k=R[14]/(R[10]+1),X=(R[9]+1)/R[5],Q=(R[9]-1)/R[5],ce=(R[8]-1)/R[0],fe=(P[8]+1)/P[0],Te=V*ce,we=V*fe,ke=L/(-ce+fe),Je=ke*-ce;if(oe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Je),ne.translateZ(ke),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),R[10]===-1)ne.projectionMatrix.copy(oe.projectionMatrix),ne.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const G=V+ke,ft=k+ke,tt=Te-Je,U=we+(L-Je),E=X*k/ft*G,K=Q*k/ft*G;ne.projectionMatrix.makePerspective(tt,U,E,K,G,ft),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ge(ne,oe){oe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(oe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let oe=ne.near,xe=ne.far;x.texture!==null&&(x.depthNear>0&&(oe=x.depthNear),x.depthFar>0&&(xe=x.depthFar)),N.near=I.near=A.near=oe,N.far=I.far=A.far=xe,(O!==N.near||B!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,B=N.far),N.layers.mask=ne.layers.mask|6,A.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;const L=ne.parent,R=N.cameras;ge(N,L);for(let P=0;P<R.length;P++)ge(R[P],L);R.length===2?ee(N,A,I):N.projectionMatrix.copy(A.projectionMatrix),w===null&&ne.isPerspectiveCamera&&(w={camera:ne,fov:ne.fov,zoom:ne.zoom}),pe(ne,N,L)};function pe(ne,oe,xe){xe===null?ne.matrix.copy(oe.matrixWorld):(ne.matrix.copy(xe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(oe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(oe.projectionMatrix),ne.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=tr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(N)},this.getCameraTexture=function(ne){return p[ne]};let Fe=null;function Se(ne,oe){if(h=oe.getViewerPose(c||a),m=oe,h!==null){const xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let L=!1;xe.length!==N.cameras.length&&(N.cameras.length=0,L=!0);for(let k=0;k<xe.length;k++){const X=xe[k];let Q=null;if(f!==null)Q=f.getViewport(X);else{const fe=u.getViewSubImage(d,X);Q=fe.viewport,k===0&&(e.setRenderTargetTextures(b,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(b))}let ce=D[k];ce===void 0&&(ce=new fn,ce.layers.enable(k),ce.viewport=new xt,D[k]=ce),ce.matrix.fromArray(X.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(X.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Q.x,Q.y,Q.width,Q.height),k===0&&(N.matrix.copy(ce.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),L===!0&&N.cameras.push(ce)}const R=i.enabledFeatures;if(R&&R.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const k=u.getDepthInformation(xe[0]);k&&k.isValid&&k.texture&&x.init(k,i.renderState)}if(R&&R.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let k=0;k<xe.length;k++){const X=xe[k].camera;if(X){let Q=p[X];Q||(Q=new Sf,p[X]=Q);const ce=u.getCameraImage(X);Q.sourceTexture=ce}}}}for(let xe=0;xe<y.length;xe++){const L=S[xe],R=y[xe];L!==null&&R!==void 0&&R.update(L,oe,c||a)}Fe&&Fe(ne,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),m=null}const Oe=new Gf;Oe.setAnimationLoop(Se),this.setAnimationLoop=function(ne){Fe=ne},this.dispose=function(){}}}const vy=new Ye,jf=new Qe;jf.set(-1,0,0,0,1,0,0,0,1);function _y(s,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,Lf(s)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function i(x,p,g,_,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(x,p):p.isMeshLambertMaterial?(r(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(x,p),u(x,p)):p.isMeshPhongMaterial?(r(x,p),h(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(x,p),d(x,p),p.isMeshPhysicalMaterial&&f(x,p,b)):p.isMeshMatcapMaterial?(r(x,p),m(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),v(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?l(x,p,g,_):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===bn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===bn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const g=e.get(p),_=g.envMap,b=g.envMapRotation;_&&(x.envMap.value=_,x.envMapRotation.value.setFromMatrix4(vy.makeRotationFromEuler(b)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(jf),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,g,_){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*g,x.scale.value=_*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function u(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function f(x,p,g){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.retroreflectivity>0&&(x.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function v(x,p){const g=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yy(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const S=y.program;n.uniformBlockBinding(b,S)}function c(b,y){let S=i[b.id];S===void 0&&(x(b),S=h(b),i[b.id]=S,b.addEventListener("dispose",g));const T=y.program;n.updateUBOMapping(b,T);const M=e.render.frame;r[b.id]!==M&&(d(b),r[b.id]=M)}function h(b){const y=u();b.__bindingPointIndex=y;const S=s.createBuffer(),T=b.__size,M=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,T,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,S),S}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=i[b.id],S=b.uniforms,T=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let M=0,w=S.length;M<w;M++){const A=S[M];if(Array.isArray(A))for(let I=0,D=A.length;I<D;I++)f(A[I],M,I,T);else f(A,M,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,y,S,T){if(v(b,y,S,T)===!0){const M=b.__offset,w=b.value;if(Array.isArray(w)){let A=0;for(let I=0;I<w.length;I++){const D=w[I],N=p(D);m(D,b.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,b.__data)}}function m(b,y,S){typeof b=="number"||typeof b=="boolean"?y[0]=b:b.isMatrix3?(y[0]=b.elements[0],y[1]=b.elements[1],y[2]=b.elements[2],y[3]=0,y[4]=b.elements[3],y[5]=b.elements[4],y[6]=b.elements[5],y[7]=0,y[8]=b.elements[6],y[9]=b.elements[7],y[10]=b.elements[8],y[11]=0):ArrayBuffer.isView(b)?y.set(new b.constructor(b.buffer,b.byteOffset,y.length)):b.toArray(y,S)}function v(b,y,S,T){const M=b.value,w=y+"_"+S;if(T[w]===void 0)return typeof M=="number"||typeof M=="boolean"?T[w]=M:ArrayBuffer.isView(M)?T[w]=M.slice():T[w]=M.clone(),!0;{const A=T[w];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return T[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function x(b){const y=b.uniforms;let S=0;const T=16;for(let w=0,A=y.length;w<A;w++){const I=Array.isArray(y[w])?y[w]:[y[w]];for(let D=0,N=I.length;D<N;D++){const O=I[D],B=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,W=B.length;Y<W;Y++){const se=B[Y],j=p(se),te=S%T,ee=te%j.boundary,ge=te+ee;S+=ee,ge!==0&&T-ge<j.storage&&(S+=T-ge),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=j.storage}}}const M=S%T;return M>0&&(S+=T-M),b.__size=S,b.__cache={},this}function p(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){const y=b.target;y.removeEventListener("dispose",g);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function _(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:_}}const My=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function Sy(){return si===null&&(si=new ha(My,16,16,bs,$t),si.name="DFG_LUT",si.minFilter=Yt,si.magFilter=Yt,si.wrapS=$n,si.wrapT=$n,si.generateMipmaps=!1,si.needsUpdate=!0),si}class wy{constructor(e={}){const{canvas:t=om(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Sn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=f,x=new Set([hh,ch,lh]),p=new Set([Sn,vi,Jr,er,rh,ah]),g=new Uint32Array(4),_=new Int32Array(4),b=new F;let y=null,S=null;const T=[],M=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let I=!1,D=null,N=null,O=null,B=null;this._outputColorSpace=Ft;let Y=0,W=0,se=null,j=-1,te=null;const ee=new xt,ge=new xt;let pe=null;const Fe=new Ie(0);let Se=0,Oe=t.width,ne=t.height,oe=1,xe=null,L=null;const R=new xt(0,0,Oe,ne),P=new xt(0,0,Oe,ne);let V=!1;const k=new yh;let X=!1,Q=!1;const ce=new Ye,fe=new F,Te=new xt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Je(){return se===null?oe:1}let G=n;function ft(C,H){return t.getContext(C,H)}let tt,U,E,K,J,ae,be,ve,le,ue,Ee,Ve,Me,_e,ze,Xe,$e,q,Ae,he,Re,Le,me;try{const C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$c}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",qn,!1),G===null){const H="webgl2";if(G=ft(H,C),G===null)throw ft(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(C){throw t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),Ze("WebGLRenderer: "+C.message),C}function je(){tt=new S_(G),tt.init(),Re=new py(G,tt),U=new f_(G,tt,e,Re),E=new dy(G,tt),U.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),N=G.createFramebuffer(),O=G.createFramebuffer(),B=G.createFramebuffer(),K=new T_(G),J=new $1,ae=new fy(G,tt,E,J,U,Re,K),be=new M_(A),ve=new Rx(G),Le=new u_(G,ve),le=new w_(G,ve,K,Le),ue=new R_(G,le,ve,Le,K),q=new A_(G,U,ae),ze=new p_(J),Ee=new Z1(A,be,tt,U,Le,ze),Ve=new _y(A,J),Me=new ey,_e=new ay(tt),$e=new h_(A,be,E,ue,m,l),Xe=new uy(A,ue,U),me=new yy(G,K,U,E),Ae=new d_(G,tt,K),he=new E_(G,tt,K),K.programs=Ee.programs,A.capabilities=U,A.extensions=tt,A.properties=J,A.renderLists=Me,A.shadowMap=Xe,A.state=E,A.info=K}v!==Sn&&(w=new P_(v,t.width,t.height,o,i,r));const He=new by(A,G);this.xr=He,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(C){C!==void 0&&(oe=C,this.setSize(Oe,ne,!1))},this.getSize=function(C){return C.set(Oe,ne)},this.setSize=function(C,H,re=!0){if(He.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=C,ne=H,t.width=Math.floor(C*oe),t.height=Math.floor(H*oe),re===!0&&(t.style.width=C+"px",t.style.height=H+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(Oe*oe,ne*oe).floor()},this.setDrawingBufferSize=function(C,H,re){Oe=C,ne=H,oe=re,t.width=Math.floor(C*re),t.height=Math.floor(H*re),this.setViewport(0,0,C,H)},this.setEffects=function(C){if(v===Sn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let H=0;H<C.length;H++)if(C[H].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ee)},this.getViewport=function(C){return C.copy(R)},this.setViewport=function(C,H,re,Z){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,H,re,Z),E.viewport(ee.copy(R).multiplyScalar(oe).round())},this.getScissor=function(C){return C.copy(P)},this.setScissor=function(C,H,re,Z){C.isVector4?P.set(C.x,C.y,C.z,C.w):P.set(C,H,re,Z),E.scissor(ge.copy(P).multiplyScalar(oe).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(C){E.setScissorTest(V=C)},this.setOpaqueSort=function(C){xe=C},this.setTransparentSort=function(C){L=C},this.getClearColor=function(C){return C.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,re=!0){let Z=0;if(C){let $=!1;if(se!==null){const De=se.texture.format;$=x.has(De)}if($){const De=se.texture.type,Ue=p.has(De),Pe=$e.getClearColor(),Be=$e.getClearAlpha(),We=Pe.r,it=Pe.g,ut=Pe.b;Ue?(g[0]=We,g[1]=it,g[2]=ut,g[3]=Be,G.clearBufferuiv(G.COLOR,0,g)):(_[0]=We,_[1]=it,_[2]=ut,_[3]=Be,G.clearBufferiv(G.COLOR,0,_))}else Z|=G.COLOR_BUFFER_BIT}H&&(Z|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(Z|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&G.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),D=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),$e.dispose(),Me.dispose(),_e.dispose(),J.dispose(),be.dispose(),ue.dispose(),Le.dispose(),me.dispose(),Ee.dispose(),He.dispose(),He.removeEventListener("sessionstart",Xh),He.removeEventListener("sessionend",jh),is.stop()};function Pt(C){C.preventDefault(),_o("WebGLRenderer: Context Lost."),I=!0}function bt(){_o("WebGLRenderer: Context Restored."),I=!1;const C=K.autoReset,H=Xe.enabled,re=Xe.autoUpdate,Z=Xe.needsUpdate,$=Xe.type;je(),K.autoReset=C,Xe.enabled=H,Xe.autoUpdate=re,Xe.needsUpdate=Z,Xe.type=$}function qn(C){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ti(C){const H=C.target;H.removeEventListener("dispose",ti),vp(H)}function vp(C){_p(C),J.remove(C)}function _p(C){const H=J.get(C).programs;H!==void 0&&(H.forEach(function(re){Ee.releaseProgram(re)}),C.isShaderMaterial&&Ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,re,Z,$,De){H===null&&(H=we);const Ue=$.isMesh&&$.matrixWorld.determinantAffine()<0,Pe=Sp(C,H,re,Z,$);E.setMaterial(Z,Ue);let Be=re.index,We=1;if(Z.wireframe===!0){if(Be=le.getWireframeAttribute(re),Be===void 0)return;We=2}const it=re.drawRange,ut=re.attributes.position;let Ge=it.start*We,vt=(it.start+it.count)*We;De!==null&&(Ge=Math.max(Ge,De.start*We),vt=Math.min(vt,(De.start+De.count)*We)),Be!==null?(Ge=Math.max(Ge,0),vt=Math.min(vt,Be.count)):ut!=null&&(Ge=Math.max(Ge,0),vt=Math.min(vt,ut.count));const jt=vt-Ge;if(jt<0||jt===1/0)return;Le.setup($,Z,Pe,re,Be);let It,Ct=Ae;if(Be!==null&&(It=ve.get(Be),Ct=he,Ct.setIndex(It)),$.isMesh)Z.wireframe===!0?(E.setLineWidth(Z.wireframeLinewidth*Je()),Ct.setMode(G.LINES)):Ct.setMode(G.TRIANGLES);else if($.isLine){let ln=Z.linewidth;ln===void 0&&(ln=1),E.setLineWidth(ln*Je()),$.isLineSegments?Ct.setMode(G.LINES):$.isLineLoop?Ct.setMode(G.LINE_LOOP):Ct.setMode(G.LINE_STRIP)}else $.isPoints?Ct.setMode(G.POINTS):$.isSprite&&Ct.setMode(G.TRIANGLES);if($.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))Ct.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ln=$._multiDrawStarts,Ne=$._multiDrawCounts,mn=$._multiDrawCount,mt=Be?ve.get(Be).bytesPerElement:1,kn=J.get(Z).currentProgram.getUniforms();for(let ni=0;ni<mn;ni++)kn.setValue(G,"_gl_DrawID",ni),Ct.render(ln[ni]/mt,Ne[ni])}else if($.isInstancedMesh)Ct.renderInstances(Ge,jt,$.count);else if(re.isInstancedBufferGeometry){const ln=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ne=Math.min(re.instanceCount,ln);Ct.renderInstances(Ge,jt,Ne)}else Ct.render(Ge,jt)};function qh(C,H,re,Z){D!==null&&C.isNodeMaterial&&D.setObject(Z,C),X===!0&&ze.setState(C,re,!1),C.transparent===!0&&C.side===pn&&C.forceSinglePass===!1?(C.side=bn,C.needsUpdate=!0,fa(C,H,Z),C.side=Fi,C.needsUpdate=!0,fa(C,H,Z),C.side=pn):fa(C,H,Z)}this.compile=function(C,H,re=null){re===null&&(re=C),D!==null&&D.renderStart(C,H,re),S=_e.get(re),S.init(H),M.push(S),re.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),C!==re&&C.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),S.setupLights(),D!==null&&D.updateLights(S.state.lightsArray),Q=this.localClippingEnabled,X=ze.init(this.clippingPlanes,Q),X===!0&&ze.setGlobalState(this.clippingPlanes,H),D!==null&&Xe.render(S.state.shadowsArray,re,H);const Z=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const De=$.material;if(De)if(Array.isArray(De))for(let Ue=0;Ue<De.length;Ue++){const Pe=De[Ue];qh(Pe,re,H,$),Z.add(Pe)}else qh(De,re,H,$),Z.add(De)}),S=M.pop(),D!==null&&D.renderEnd(),Z},this.compileAsync=function(C,H,re=null){const Z=this.compile(C,H,re);return new Promise($=>{function De(){if(Z.forEach(function(Ue){const Be=J.get(Ue).currentProgram;(Be===void 0||Be.isReady())&&Z.delete(Ue)}),Z.size===0){$(C);return}setTimeout(De,10)}tt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Vo=null;function yp(C){Vo&&Vo(C)}function Xh(){is.stop()}function jh(){is.start()}const is=new Gf;is.setAnimationLoop(yp),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(C){Vo=C,He.setAnimationLoop(C),C===null?is.stop():is.start()},He.addEventListener("sessionstart",Xh),He.addEventListener("sessionend",jh),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(C,H);const re=He.enabled===!0&&He.isPresenting===!0,Z=w!==null&&(se===null||re)&&w.begin(A,se);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(H),H=He.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,H,se),S=_e.get(C,M.length),S.init(H),S.state.textureUnits=ae.getTextureUnits(),M.push(S),ce.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),k.setFromProjectionMatrix(ce,mi,H.reversedDepth),Q=this.localClippingEnabled,X=ze.init(this.clippingPlanes,Q),y=Me.get(C,T.length),y.init(),T.push(y),He.enabled===!0&&He.isPresenting===!0){const Ue=A.xr.getDepthSensingMesh();Ue!==null&&Wo(Ue,H,-1/0,A.sortObjects)}Wo(C,H,0,A.sortObjects),y.finish(),D!==null&&D.updateLights(S.state.lightsArray),A.sortObjects===!0&&y.sort(xe,L),ke=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,ke&&$e.addToRenderList(y,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),X===!0&&ze.beginShadows();const $=S.state.shadowsArray;if(Xe.render($,C,H),X===!0&&ze.endShadows(),(Z&&w.hasRenderPass())===!1){const Ue=y.opaque,Pe=y.transmissive;if(S.setupLights(),H.isArrayCamera){const Be=H.cameras;if(Pe.length>0)for(let We=0,it=Be.length;We<it;We++){const ut=Be[We];Yh(Ue,Pe,C,ut)}ke&&$e.render(C);for(let We=0,it=Be.length;We<it;We++){const ut=Be[We];Kh(y,C,ut,ut.viewport)}}else Pe.length>0&&Yh(Ue,Pe,C,H),ke&&$e.render(C),Kh(y,C,H)}se!==null&&W===0&&(ae.updateMultisampleRenderTarget(se),ae.updateRenderTargetMipmap(se)),Z&&w.end(A),C.isScene===!0&&C.onAfterRender(A,C,H),Le.resetDefaultState(),j=-1,te=null,M.pop(),M.length>0?(S=M[M.length-1],ae.setTextureUnits(S.state.textureUnits),X===!0&&ze.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?y=T[T.length-1]:y=null,D!==null&&D.renderEnd()};function Wo(C,H,re,Z){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLightProbeGrid)S.pushLightProbeGrid(C);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(k)){Z&&Te.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ce);const Ue=ue.update(C),Pe=C.material;Pe.visible&&y.push(C,Ue,Pe,re,Te.z,null,H)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(k))){const Ue=ue.update(C),Pe=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Te.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Te.copy(Ue.boundingSphere.center)),Te.applyMatrix4(C.matrixWorld).applyMatrix4(ce)),Array.isArray(Pe)){const Be=Ue.groups;for(let We=0,it=Be.length;We<it;We++){const ut=Be[We],Ge=Pe[ut.materialIndex];Ge&&Ge.visible&&y.push(C,Ue,Ge,re,Te.z,ut,H)}}else Pe.visible&&y.push(C,Ue,Pe,re,Te.z,null,H)}}const De=C.children;for(let Ue=0,Pe=De.length;Ue<Pe;Ue++)Wo(De[Ue],H,re,Z)}function Kh(C,H,re,Z){const{opaque:$,transmissive:De,transparent:Ue}=C;S.setupLightsView(re),X===!0&&ze.setGlobalState(A.clippingPlanes,re),Z&&E.viewport(ee.copy(Z)),$.length>0&&da($,H,re),De.length>0&&da(De,H,re),Ue.length>0&&da(Ue,H,re),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Yh(C,H,re,Z){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Z.id]===void 0){const Ge=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Z.id]=new Qt(1,1,{generateMipmaps:!0,type:Ge?$t:Sn,minFilter:pi,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const De=S.state.transmissionRenderTarget[Z.id],Ue=Z.viewport||ee;De.setSize(Ue.z*A.transmissionResolutionScale,Ue.w*A.transmissionResolutionScale);const Pe=A.getRenderTarget(),Be=A.getActiveCubeFace(),We=A.getActiveMipmapLevel();A.setRenderTarget(De),A.getClearColor(Fe),Se=A.getClearAlpha(),Se<1&&A.setClearColor(16777215,.5),A.clear(),ke&&$e.render(re);const it=A.toneMapping;A.toneMapping=bi;const ut=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),S.setupLightsView(Z),X===!0&&ze.setGlobalState(A.clippingPlanes,Z),da(C,re,Z),ae.updateMultisampleRenderTarget(De),ae.updateRenderTargetMipmap(De),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let vt=0,jt=H.length;vt<jt;vt++){const It=H[vt],{object:Ct,geometry:ln,material:Ne,group:mn}=It;if(Ne.side===pn&&Ct.layers.test(Z.layers)){const mt=Ne.side;Ne.side=bn,Ne.needsUpdate=!0,Jh(Ct,re,Z,ln,Ne,mn),Ne.side=mt,Ne.needsUpdate=!0,Ge=!0}}Ge===!0&&(ae.updateMultisampleRenderTarget(De),ae.updateRenderTargetMipmap(De))}A.setRenderTarget(Pe,Be,We),A.setClearColor(Fe,Se),ut!==void 0&&(Z.viewport=ut),A.toneMapping=it}function da(C,H,re){const Z=H.isScene===!0?H.overrideMaterial:null;for(let $=0,De=C.length;$<De;$++){const Ue=C[$],{object:Pe,geometry:Be,group:We}=Ue;let it=Ue.material;it.allowOverride===!0&&Z!==null&&(it=Z),Pe.layers.test(re.layers)&&Jh(Pe,H,re,Be,it,We)}}function Jh(C,H,re,Z,$,De){D!==null&&$.isNodeMaterial&&D.setObject(C,$),C.onBeforeRender(A,H,re,Z,$,De),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(A,H,re,Z,C,De),$.transparent===!0&&$.side===pn&&$.forceSinglePass===!1?($.side=bn,$.needsUpdate=!0,A.renderBufferDirect(re,H,Z,$,C,De),$.side=Fi,$.needsUpdate=!0,A.renderBufferDirect(re,H,Z,$,C,De),$.side=pn):A.renderBufferDirect(re,H,Z,$,C,De),C.onAfterRender(A,H,re,Z,$,De)}function fa(C,H,re){H.isScene!==!0&&(H=we);const Z=J.get(C),$=S.state.lights,De=S.state.shadowsArray,Ue=$.state.version,Pe=Ee.getParameters(C,$.state,De,H,re,S.state.lightProbeGridArray),Be=Ee.getProgramCacheKey(Pe);let We=Z.programs;Z.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?H.environment:null,Z.fog=H.fog;const it=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Z.envMap=be.get(C.envMap||Z.environment,it),Z.envMapRotation=Z.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,We===void 0&&(C.addEventListener("dispose",ti),We=new Map,Z.programs=We);let ut=We.get(Be);if(ut!==void 0){if(Z.currentProgram===ut&&Z.lightsStateVersion===Ue)return $h(C,Pe),ut}else Pe.uniforms=Ee.getUniforms(C),D!==null&&C.isNodeMaterial&&D.build(C,re,Pe),C.onBeforeCompile(Pe,A),ut=Ee.acquireProgram(Pe,Be),We.set(Be,ut),Z.uniforms=Pe.uniforms;const Ge=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=ze.uniform),$h(C,Pe),Z.needsLights=Ep(C),Z.lightsStateVersion=Ue,Z.needsLights&&(Ge.ambientLightColor.value=$.state.ambient,Ge.lightProbe.value=$.state.probe,Ge.sunLights.value=$.state.sun,Ge.sunLightShadows.value=$.state.sunShadow,Ge.directionalLights.value=$.state.directional,Ge.directionalLightShadows.value=$.state.directionalShadow,Ge.spotLights.value=$.state.spot,Ge.spotLightShadows.value=$.state.spotShadow,Ge.rectAreaLights.value=$.state.rectArea,Ge.ltc_1.value=$.state.rectAreaLTC1,Ge.ltc_2.value=$.state.rectAreaLTC2,Ge.pointLights.value=$.state.point,Ge.pointLightShadows.value=$.state.pointShadow,Ge.hemisphereLights.value=$.state.hemi,Ge.sunShadowMatrix.value=$.state.sunShadowMatrix,Ge.sunShadowCascade.value=$.state.sunShadowCascade,Ge.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ge.spotLightMatrix.value=$.state.spotLightMatrix,Ge.spotLightMap.value=$.state.spotLightMap,Ge.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.lightProbeGrid=S.state.lightProbeGridArray.length>0,Z.currentProgram=ut,Z.uniformsList=null,ut}function Zh(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=oo.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function $h(C,H){const re=J.get(C);re.outputColorSpace=H.outputColorSpace,re.batching=H.batching,re.batchingColor=H.batchingColor,re.instancing=H.instancing,re.instancingColor=H.instancingColor,re.instancingMorph=H.instancingMorph,re.skinning=H.skinning,re.morphTargets=H.morphTargets,re.morphNormals=H.morphNormals,re.morphColors=H.morphColors,re.morphTargetsCount=H.morphTargetsCount,re.numClippingPlanes=H.numClippingPlanes,re.numIntersection=H.numClipIntersection,re.vertexAlphas=H.vertexAlphas,re.vertexTangents=H.vertexTangents,re.toneMapping=H.toneMapping}function Mp(C,H){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;b.setFromMatrixPosition(H.matrixWorld);for(let re=0,Z=C.length;re<Z;re++){const $=C[re];if($.texture!==null&&$.boundingBox.containsPoint(b))return $}return null}function Sp(C,H,re,Z,$){H.isScene!==!0&&(H=we),ae.resetTextureUnits();const De=H.fog,Ue=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?H.environment:null,Pe=se===null?A.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ot.workingColorSpace,Be=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,We=be.get(Z.envMap||Ue,Be),it=Z.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ut=!!re.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ge=!!re.morphAttributes.position,vt=!!re.morphAttributes.normal,jt=!!re.morphAttributes.color;let It=bi;Z.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(It=A.toneMapping);const Ct=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ln=Ct!==void 0?Ct.length:0,Ne=J.get(Z),mn=S.state.lights;if(X===!0&&(Q===!0||C!==te)){const Dt=C===te&&Z.id===j;ze.setState(Z,C,Dt)}let mt=!1;Z.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==mn.state.version||Ne.outputColorSpace!==Pe||$.isBatchedMesh&&Ne.batching===!1||!$.isBatchedMesh&&Ne.batching===!0||$.isBatchedMesh&&Ne.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ne.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ne.instancing===!1||!$.isInstancedMesh&&Ne.instancing===!0||$.isSkinnedMesh&&Ne.skinning===!1||!$.isSkinnedMesh&&Ne.skinning===!0||$.isInstancedMesh&&Ne.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ne.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ne.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ne.instancingMorph===!1&&$.morphTexture!==null||Ne.envMap!==We||Z.fog===!0&&Ne.fog!==De||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ze.numPlanes||Ne.numIntersection!==ze.numIntersection)||Ne.vertexAlphas!==it||Ne.vertexTangents!==ut||Ne.morphTargets!==Ge||Ne.morphNormals!==vt||Ne.morphColors!==jt||Ne.toneMapping!==It||Ne.morphTargetsCount!==ln||!!Ne.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Ne.__version=Z.version);let kn=Ne.currentProgram;mt===!0&&(kn=fa(Z,H,$),D&&Z.isNodeMaterial&&D.onUpdateProgram(Z,kn,Ne));let ni=!1,Gi=!1,ys=!1;const Rt=kn.getUniforms(),Ht=Ne.uniforms;if(E.useProgram(kn.program)&&(ni=!0,Gi=!0,ys=!0),Z.id!==j&&(j=Z.id,Gi=!0),Ne.needsLights){const Dt=Mp(S.state.lightProbeGridArray,$);Ne.lightProbeGrid!==Dt&&(Ne.lightProbeGrid=Dt,Gi=!0)}if(ni||te!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Rt.setValue(G,"projectionMatrix",C.projectionMatrix),Rt.setValue(G,"viewMatrix",C.matrixWorldInverse);const Vi=Rt.map.cameraPosition;Vi!==void 0&&Vi.setValue(G,fe.setFromMatrixPosition(C.matrixWorld)),U.logarithmicDepthBuffer&&Rt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Rt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),te!==C&&(te=C,Gi=!0,ys=!0)}if(Ne.needsLights&&(mn.state.sunShadowMap.length>0&&Rt.setValue(G,"sunShadowMap",mn.state.sunShadowMap,ae),mn.state.directionalShadowMap.length>0&&Rt.setValue(G,"directionalShadowMap",mn.state.directionalShadowMap,ae),mn.state.spotShadowMap.length>0&&Rt.setValue(G,"spotShadowMap",mn.state.spotShadowMap,ae),mn.state.pointShadowMap.length>0&&Rt.setValue(G,"pointShadowMap",mn.state.pointShadowMap,ae)),$.isSkinnedMesh){Rt.setOptional(G,$,"bindMatrix"),Rt.setOptional(G,$,"bindMatrixInverse");const Dt=$.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Rt.setValue(G,"boneTexture",Dt.boneTexture,ae))}$.isBatchedMesh&&(Rt.setOptional(G,$,"batchingTexture"),Rt.setValue(G,"batchingTexture",$._matricesTexture,ae),Rt.setOptional(G,$,"batchingIdTexture"),Rt.setValue(G,"batchingIdTexture",$._indirectTexture,ae),Rt.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&Rt.setValue(G,"batchingColorTexture",$._colorsTexture,ae));const Hi=re.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&q.update($,re,kn),(Gi||Ne.receiveShadow!==$.receiveShadow)&&(Ne.receiveShadow=$.receiveShadow,Rt.setValue(G,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&H.environment!==null&&(Ht.envMapIntensity.value=H.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=Sy()),Gi){if(Rt.setValue(G,"toneMappingExposure",A.toneMappingExposure),Ne.needsLights&&wp(Ht,ys),De&&Z.fog===!0&&Ve.refreshFogUniforms(Ht,De),Ve.refreshMaterialUniforms(Ht,Z,oe,ne,S.state.transmissionRenderTarget[C.id]),Ne.needsLights&&Ne.lightProbeGrid){const Dt=Ne.lightProbeGrid;Ht.probesSH.value=Dt.texture,Ht.probesMin.value.copy(Dt.boundingBox.min),Ht.probesMax.value.copy(Dt.boundingBox.max),Ht.probesResolution.value.copy(Dt.resolution)}oo.upload(G,Zh(Ne),Ht,ae)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(oo.upload(G,Zh(Ne),Ht,ae),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Rt.setValue(G,"center",$.center),Rt.setValue(G,"modelViewMatrix",$.modelViewMatrix),Rt.setValue(G,"normalMatrix",$.normalMatrix),Rt.setValue(G,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){const Dt=Z.uniformsGroups;for(let Vi=0,Ms=Dt.length;Vi<Ms;Vi++){const eu=Dt[Vi];me.update(eu,kn),me.bind(eu,kn)}}return kn}function wp(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.sunLights.needsUpdate=H,C.sunLightShadows.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function Ep(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(C,H,re){const Z=J.get(C);Z.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),J.get(C.texture).__webglTexture=H,J.get(C.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:re,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){const re=J.get(C);re.__webglFramebuffer=H,re.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,re=0){se=C,Y=H,W=re;let Z=null,$=!1,De=!1;if(C){const Pe=J.get(C);if(Pe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(G.FRAMEBUFFER,Pe.__webglFramebuffer),ee.copy(C.viewport),ge.copy(C.scissor),pe=C.scissorTest,E.viewport(ee),E.scissor(ge),E.setScissorTest(pe),j=-1;return}else if(Pe.__webglFramebuffer===void 0)ae.setupRenderTarget(C);else if(Pe.__hasExternalTextures)ae.rebindTextures(C,J.get(C.texture).__webglTexture,J.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const it=C.depthTexture;if(Pe.__boundDepthTexture!==it){if(it!==null&&J.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(C)}}const Be=C.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(De=!0);const We=J.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(We[H])?Z=We[H][re]:Z=We[H],$=!0):C.samples>0&&ae.useMultisampledRTT(C)===!1?Z=J.get(C).__webglMultisampledFramebuffer:Array.isArray(We)?Z=We[re]:Z=We,ee.copy(C.viewport),ge.copy(C.scissor),pe=C.scissorTest}else ee.copy(R).multiplyScalar(oe).floor(),ge.copy(P).multiplyScalar(oe).floor(),pe=V;if(re!==0&&(Z=N),E.bindFramebuffer(G.FRAMEBUFFER,Z)&&E.drawBuffers(C,Z),E.viewport(ee),E.scissor(ge),E.setScissorTest(pe),$){const Pe=J.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pe.__webglTexture,re)}else if(De){const Pe=H;for(let Be=0;Be<C.textures.length;Be++){const We=J.get(C.textures[Be]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Be,We.__webglTexture,re,Pe)}}else if(C!==null&&re!==0){const Pe=J.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pe.__webglTexture,re)}j=-1};function Qh(C){const H=J.get(C);return(H.__readFormat!==C.format||H.__readType!==C.type)&&(H.__readFormat=C.format,H.__readType=C.type,H.__formatReadable=U.textureFormatReadable(C.format),H.__typeReadable=U.textureTypeReadable(C.type)),H}this.readRenderTargetPixels=function(C,H,re,Z,$,De,Ue,Pe=0){if(!(C&&C.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=J.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){E.bindFramebuffer(G.FRAMEBUFFER,Be);try{const We=C.textures[Pe],it=We.format,ut=We.type;C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pe);const Ge=Qh(We);if(Ge.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-Z&&re>=0&&re<=C.height-$&&G.readPixels(H,re,Z,$,Re.convert(it),Re.convert(ut),De)}finally{const We=se!==null?J.get(se).__webglFramebuffer:null;E.bindFramebuffer(G.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(C,H,re,Z,$,De,Ue,Pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=J.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be)if(H>=0&&H<=C.width-Z&&re>=0&&re<=C.height-$){E.bindFramebuffer(G.FRAMEBUFFER,Be);const We=C.textures[Pe],it=We.format,ut=We.type;C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pe);const Ge=Qh(We);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,vt),G.bufferData(G.PIXEL_PACK_BUFFER,De.byteLength,G.STREAM_READ),G.readPixels(H,re,Z,$,Re.convert(it),Re.convert(ut),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);const jt=se!==null?J.get(se).__webglFramebuffer:null;E.bindFramebuffer(G.FRAMEBUFFER,jt);const It=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await lm(G,It,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,vt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,De),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(vt),G.deleteSync(It),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,re=0){const Z=Math.pow(2,-re),$=Math.floor(C.image.width*Z),De=Math.floor(C.image.height*Z),Ue=H!==null?H.x:0,Pe=H!==null?H.y:0;ae.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,re,0,0,Ue,Pe,$,De),E.unbindTexture()},this.copyTextureToTexture=function(C,H,re=null,Z=null,$=0,De=0){let Ue,Pe,Be,We,it,ut,Ge,vt,jt;const It=C.isCompressedTexture?C.mipmaps[De]:C.image;if(re!==null)Ue=re.max.x-re.min.x,Pe=re.max.y-re.min.y,Be=re.isBox3?re.max.z-re.min.z:1,We=re.min.x,it=re.min.y,ut=re.isBox3?re.min.z:0;else{const Ht=Math.pow(2,-$);Ue=Math.floor(It.width*Ht),Pe=Math.floor(It.height*Ht),C.isDataArrayTexture?Be=It.depth:C.isData3DTexture?Be=Math.floor(It.depth*Ht):Be=1,We=0,it=0,ut=0}Z!==null?(Ge=Z.x,vt=Z.y,jt=Z.z):(Ge=0,vt=0,jt=0);const Ct=Re.convert(H.format),ln=Re.convert(H.type);let Ne;H.isData3DTexture?(ae.setTexture3D(H,0),Ne=G.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ae.setTexture2DArray(H,0),Ne=G.TEXTURE_2D_ARRAY):(ae.setTexture2D(H,0),Ne=G.TEXTURE_2D),E.activeTexture(G.TEXTURE0),E.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment);const mn=E.getParameter(G.UNPACK_ROW_LENGTH),mt=E.getParameter(G.UNPACK_IMAGE_HEIGHT),kn=E.getParameter(G.UNPACK_SKIP_PIXELS),ni=E.getParameter(G.UNPACK_SKIP_ROWS),Gi=E.getParameter(G.UNPACK_SKIP_IMAGES);E.pixelStorei(G.UNPACK_ROW_LENGTH,It.width),E.pixelStorei(G.UNPACK_IMAGE_HEIGHT,It.height),E.pixelStorei(G.UNPACK_SKIP_PIXELS,We),E.pixelStorei(G.UNPACK_SKIP_ROWS,it),E.pixelStorei(G.UNPACK_SKIP_IMAGES,ut);const ys=C.isDataArrayTexture||C.isData3DTexture,Rt=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){const Ht=J.get(C),Hi=J.get(H),Dt=J.get(Ht.__renderTarget),Vi=J.get(Hi.__renderTarget);E.bindFramebuffer(G.READ_FRAMEBUFFER,Dt.__webglFramebuffer),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Ms=0;Ms<Be;Ms++)ys&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,J.get(C).__webglTexture,$,ut+Ms),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,J.get(H).__webglTexture,De,jt+Ms)),G.blitFramebuffer(We,it,Ue,Pe,Ge,vt,Ue,Pe,G.DEPTH_BUFFER_BIT,G.NEAREST);E.bindFramebuffer(G.READ_FRAMEBUFFER,null),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||J.has(C)){const Ht=J.get(C),Hi=J.get(H);E.bindFramebuffer(G.READ_FRAMEBUFFER,O),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,B);for(let Dt=0;Dt<Be;Dt++)ys?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ht.__webglTexture,$,ut+Dt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ht.__webglTexture,$),Rt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Hi.__webglTexture,De,jt+Dt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Hi.__webglTexture,De),$!==0?G.blitFramebuffer(We,it,Ue,Pe,Ge,vt,Ue,Pe,G.COLOR_BUFFER_BIT,G.NEAREST):Rt?G.copyTexSubImage3D(Ne,De,Ge,vt,jt+Dt,We,it,Ue,Pe):G.copyTexSubImage2D(Ne,De,Ge,vt,We,it,Ue,Pe);E.bindFramebuffer(G.READ_FRAMEBUFFER,null),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Rt?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Ne,De,Ge,vt,jt,Ue,Pe,Be,Ct,ln,It.data):H.isCompressedArrayTexture?G.compressedTexSubImage3D(Ne,De,Ge,vt,jt,Ue,Pe,Be,Ct,It.data):G.texSubImage3D(Ne,De,Ge,vt,jt,Ue,Pe,Be,Ct,ln,It):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,De,Ge,vt,Ue,Pe,Ct,ln,It.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,De,Ge,vt,It.width,It.height,Ct,It.data):G.texSubImage2D(G.TEXTURE_2D,De,Ge,vt,Ue,Pe,Ct,ln,It);E.pixelStorei(G.UNPACK_ROW_LENGTH,mn),E.pixelStorei(G.UNPACK_IMAGE_HEIGHT,mt),E.pixelStorei(G.UNPACK_SKIP_PIXELS,kn),E.pixelStorei(G.UNPACK_SKIP_ROWS,ni),E.pixelStorei(G.UNPACK_SKIP_IMAGES,Gi),De===0&&H.generateMipmaps&&G.generateMipmap(Ne),E.unbindTexture()},this.initRenderTarget=function(C){J.get(C).__webglFramebuffer===void 0&&ae.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ae.setTextureCube(C,0):C.isData3DTexture?ae.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ae.setTexture2DArray(C,0):ae.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){Y=0,W=0,se=null,E.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}function Kf(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new At;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=wd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);const m=wd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function wd(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Gt(a,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){const v=h.getComponent(d,m);o.setComponent(d+u,m,v)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Ed(s,e){if(e===Y0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Dc||e===df){let t=s.getIndex();if(t===null){const r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Dc)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Yf(s){const e=new Map,t=new Map,n=s.clone();return Jf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Jf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Jf(s.children[n],e.children[n],t)}class Ey extends fr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Py(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new Iy(t)}),this.register(function(t){return new Ny(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new Cy(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new ky(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new Td(t,ct.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Td(t,ct.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Vy(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Vr.extractUrlBase(e);a=Vr.resolveURL(c,this.path)}else a=Vr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Of(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Zf){try{a[ct.KHR_BINARY_GLTF]=new Wy(e)}catch(u){i&&i(u);return}r=JSON.parse(a[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new iM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ct.KHR_MATERIALS_UNLIT:a[u]=new Ry;break;case ct.KHR_DRACO_MESH_COMPRESSION:a[u]=new qy(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:a[u]=new Xy;break;case ct.KHR_MESH_QUANTIZATION:a[u]=new jy;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Ty(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Xt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ay{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ie(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],zn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Oc(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new kf(h),c.distance=u;break;case"spot":c=new sx(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Ry{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return Lt}extendParams(e,t,n){const i=[];e.color=new Ie(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],zn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(i)}}class Cy{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Py{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(r,r)}return Promise.all(i)}}class Dy{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Ly{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class Iy{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],zn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ft)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class Ny{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class Uy{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(r[0],r[1],r[2],zn),Promise.all(i)}}class Fy{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class Oy{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(r[0],r[1],r[2],zn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ft)),Promise.all(i)}}class zy{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class ky{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class By{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Gy{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Hy{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Td{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Vy{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Gn.TRIANGLES&&c.mode!==Gn.TRIANGLE_STRIP&&c.mode!==Gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const v=new Ye,x=new F,p=new vn,g=new F(1,1,1),_=new Zm(m.geometry,m.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&g.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,v.compose(x,p,g));let b=null;for(const y in l)if(y==="_COLOR_0"){const S=l[y];_.instanceColor=new yo(S.array,S.itemSize,S.normalized)}else if(y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"){if(b===null){const T=_.geometry;b=new At,b.name=T.name;for(const M in T.attributes)b.setAttribute(M,T.attributes[M]);for(const M in T.morphAttributes)b.morphAttributes[M]=T.morphAttributes[M];T.index!==null&&b.setIndex(T.index),b.morphTargetsRelative=T.morphTargetsRelative;for(const M of T.groups)b.addGroup(M.start,M.count,M.materialIndex);T.boundingBox!==null&&(b.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(b.boundingSphere=T.boundingSphere.clone()),b.drawRange.start=T.drawRange.start,b.drawRange.count=T.drawRange.count,b.userData=Object.assign({},T.userData),_.geometry=b}const S=l[y];b.setAttribute(y,new yo(S.array,S.itemSize,S.normalized))}zt.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Zf="glTF",Er=12,Ad={JSON:1313821514,BIN:5130562};class Wy{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Er,r=new DataView(e,Er);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Ad.JSON){const c=new Uint8Array(e,Er+a,o);this.content=n.decode(c)}else if(l===Ad.BIN){const c=Er+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class qy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Vc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Vc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ys[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const v=f.attributes[m],x=l[m];x!==void 0&&(v.normalized=x)}u(f)},o,c,zn,d)})})}}class Xy{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class jy{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class $f extends hr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,v=m-c,x=-2*f+3*d,p=f-d,g=1-x,_=p-d+u;for(let b=0;b!==o;b++){const y=a[v+b+o],S=a[v+b+l]*h,T=a[m+b+o],M=a[m+b]*h;r[b]=g*y+_*S+x*T+p*M}return r}}const Ky=new vn;class Yy extends $f{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Ky.fromArray(r).normalize().toArray(r),r}}const Gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rd={9728:qt,9729:Yt,9984:nf,9985:to,9986:Nr,9987:pi},Cd={33071:$n,33648:po,10497:Tn},Ll={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Jy={CUBICSPLINE:void 0,LINEAR:$r,STEP:Zr},Il={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Zy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new lt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fi})),s.DefaultMaterial}function cs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $y(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Qy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function eM(s){let e;const t=s.extensions&&s.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nl(t.attributes):e=s.indices+":"+Nl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Nl(s.targets[n]);return e}function Nl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Wc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function tM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const nM=new Ye;class iM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ty,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new tx(this.options.manager):this.textureLoader=new ox(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Of(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return cs(r,o,i),ci(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Vr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ll[i.type],o=Ys[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Gt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Ll[i.type],c=Ys[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let v,x;if(f&&f!==u){const p=Math.floor(d/f),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=t.cache.get(g);_||(v=new c(o,p*f,i.count*f/h),_=new Hm(v,f/h),t.cache.add(g,_)),x=new vh(_,l,d%f/h,m)}else o===null?v=new c(i.count*l):v=new c(o,d,i.count*l),x=new Gt(v,l,m);if(i.sparse!==void 0){const p=Ll.SCALAR,g=Ys[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,y=new g(a[1],_,i.sparse.count*p),S=new c(a[2],b,i.sparse.count*l);o!==null&&(x=new Gt(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let T=0,M=y.length;T<M;T++){const w=y[T];if(x.setX(w,S[T*l]),l>=2&&x.setY(w,S[T*l+1]),l>=3&&x.setZ(w,S[T*l+2]),l>=4&&x.setW(w,S[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=m}return x})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Rd[d.magFilter]||Yt,h.minFilter=Rd[d.minFilter]||pi,h.wrapS=Cd[d.wrapS]||Tn,h.wrapT=Cd[d.wrapT]||Tn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==Yt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){const x=new Jt(v);x.needsUpdate=!0,d(x)}),t.load(Vr.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),ci(u,a),u.userData.mimeType=a.mimeType||tM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ta,Qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new yf,Qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return lt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){const u=i[ct.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],zn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Ft)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=pn);const h=r.alphaMode||Il.OPAQUE;if(h===Il.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Il.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Lt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new de(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Lt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Lt){const u=r.emissiveFactor;o.emissive=new Ie().setRGB(u[0],u[1],u[2],zn)}return r.emissiveTexture!==void 0&&a!==Lt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),ci(u,r),t.associations.set(u,{materials:e}),r.extensions&&cs(i,u,r),u})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Pd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=eM(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Pd(new At,c,t),c.mode===Gn.TRIANGLE_STRIP?d=d.then(f=>Ed(f,df)):c.mode===Gn.TRIANGLE_FAN&&(d=d.then(f=>Ed(f,Dc))),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Zy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const v=h[f],x=a[f];let p;const g=c[f];if(x.mode===Gn.TRIANGLES||x.mode===Gn.TRIANGLE_STRIP||x.mode===Gn.TRIANGLE_FAN||x.mode===void 0){const _=r.isSkinnedMesh===!0,b=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");_&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=_&&b?new Km(v,g):new Ke(v,g),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(x.mode===Gn.LINES)p=new Qm(v,g);else if(x.mode===Gn.LINE_STRIP)p=new Mh(v,g);else if(x.mode===Gn.LINE_LOOP)p=new eg(v,g);else if(x.mode===Gn.POINTS)p=new wo(v,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(p.geometry.morphAttributes).length>0&&Qy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ci(p,r),x.extensions&&cs(i,p,x),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&cs(i,u[0],r),u[0];const d=new gt;r.extensions&&cs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new fn(mf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ua(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Ye;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new _h(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],v=f.target,x=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,g=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(a.push(this.getDependency("node",x)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",g)),c.push(m),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],v=u[3],x=u[4],p=[];for(let _=0,b=d.length;_<b;_++){const y=d[_],S=f[_],T=m[_],M=v[_],w=x[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const A=n._createAnimationTracks(y,S,T,M,w);if(A)for(let I=0;I<A.length;I++)p.push(A[I])}const g=new Fc(r,void 0,p);return ci(g,i),g})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,nM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,m=u[0];h.pivot=new F().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new _f:c.length>1?h=new gt:c.length===1?h=c[0]:h=new zt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ci(h,r),r.extensions&&cs(n,h,r),r.matrix!==void 0){const u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new gt;n.name&&(r.name=i.createUniqueName(n.name)),ci(r,n),n.extensions&&cs(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?r.add(Yf(d)):r.add(d)}const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Qn||d instanceof Jt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Yi[r.path]===Yi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Yi[r.path]){case Yi.weights:h=ra;break;case Yi.rotation:h=aa;break;case Yi.translation:case Yi.scale:h=Ro;break;default:switch(n.itemSize){case 1:h=ra;break;case 2:case 3:default:h=Ro;break}break}const u=i.interpolation!==void 0?Jy[i.interpolation]:$r,d=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){const v=new h(l[f]+"."+Yi[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Wc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof aa?Yy:$f;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sM(s,e,t){const n=e.attributes,i=new Bi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),o.normalized){const h=Wc(Ys[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new F,l=new F;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const v=Wc(Ys[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new _i;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Pd(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Vc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return ot.workingColorSpace!==zn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),ci(s,e),sM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?$y(s,e.targets,t):s})}var rM=function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var g=new Uint8Array(p.length),_=0;_<p.length;++_){var b=p.charCodeAt(_);g[_]=b>96?b-97:b>64?b-39:b+4}for(var y=0,_=0;_<p.length;++_)g[y++]=g[_]<60?n[g[_]]:(g[_]-60)*64+g[++_];return g.buffer.slice(0,y)}function l(p,g,_,b,y,S,T){var M=p.exports.sbrk,w=b+3&-4,A=M(w*y),I=M(S.length),D=new Uint8Array(p.exports.memory.buffer);D.set(S,I);var N=g(A,b,y,I,S.length);if(N==0&&T&&T(A,w,y),_.set(D.subarray(A,A+b*y)),M(A-M(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var g={object:new Worker(p),pending:0,requests:{}};return g.object.onmessage=function(_){var b=_.data;g.pending-=b.count,g.requests[b.id][b.action](b.value),delete g.requests[b.id]},g}function m(p){for(var g="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+x.name+";"+l.toString()+x.toString(),_=new Blob([g],{type:"text/javascript"}),b=URL.createObjectURL(_),y=u.length;y<p;++y)u[y]=f(b);for(var y=p;y<u.length;++y)u[y].object.postMessage({});u.length=p,URL.revokeObjectURL(b)}function v(p,g,_,b,y){for(var S=u[0],T=1;T<u.length;++T)u[T].pending<S.pending&&(S=u[T]);return new Promise(function(M,w){var A=new Uint8Array(_),I=++d;S.pending+=p,S.requests[I]={resolve:M,reject:w},S.object.postMessage({id:I,count:p,size:g,source:A,mode:b,filter:y},[A.buffer])})}function x(p){var g=p.data;self.ready.then(function(_){if(!g.id)return self.close();try{var b=new Uint8Array(g.count*g.size);l(_,_.exports[g.mode],b,g.count,g.size,g.source,_.exports[g.filter]),self.postMessage({id:g.id,count:g.count,action:"resolve",value:b},[b.buffer])}catch(y){self.postMessage({id:g.id,count:g.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,g,_,b,y){l(r,r.exports.meshopt_decodeVertexBuffer,p,g,_,b,r.exports[c[y]])},decodeIndexBuffer:function(p,g,_,b){l(r,r.exports.meshopt_decodeIndexBuffer,p,g,_,b)},decodeIndexSequence:function(p,g,_,b){l(r,r.exports.meshopt_decodeIndexSequence,p,g,_,b)},decodeGltfBuffer:function(p,g,_,b,y,S){l(r,r.exports[h[y]],p,g,_,b,r.exports[c[S]])},decodeGltfBufferAsync:function(p,g,_,b,y){return u.length>0?v(p,g,_,h[b],c[y]):a.then(function(){var S=new Uint8Array(p*g);return l(r,r.exports[h[b]],S,p,g,_,r.exports[c[y]]),S})}}}();const aM=""+new URL("body_male-DAXherWs.glb",import.meta.url).href,oM=""+new URL("body_female-DKTyquvD.glb",import.meta.url).href,lM=""+new URL("hair-DEyGqI5i.glb",import.meta.url).href,cM=""+new URL("moves-C1wwjkTj.glb",import.meta.url).href;let Or=null,hM=null;function uM(){return hM??(hM=(async()=>{const s=new Ey().setMeshoptDecoder(rM);try{const[e,t,n,i]=await Promise.all([aM,oM,lM,cM].map(a=>s.loadAsync(a))),r=new Map;n.scene.updateMatrixWorld(!0),n.scene.traverse(a=>{a.isMesh&&r.set(a.name.replace(/_\d+$/,""),a)});for(const a of[e.scene,t.scene])a.traverse(o=>{o.isSkinnedMesh&&fM(o)});Or={bodies:{male:e.scene,female:t.scene},hairs:r,clips:new Map(i.animations.map(a=>[a.name,a]))}}catch(e){console.warn("the village's people did not load: the first ones stay",e)}})())}const dM=[[/^(hand|index|middle|ring|pinky|thumb)/,0],[/^(head|neck)/i,0],[/^(foot|ball)/,4],[/^calf/,3],[/^(thigh|pelvis|root)/,2],[/^(spine|clavicle|upperarm|lowerarm)/,1]];function fM(s){var a,o;const e=s.geometry,t=e.getAttribute("skinIndex"),n=e.getAttribute("skinWeight"),i=s.skeleton.bones,r=new Float32Array(t.count);for(let l=0;l<t.count;l++){let c=0,h=-1;for(let d=0;d<4;d++){const f=n.getComponent(l,d);f>h&&(h=f,c=t.getComponent(l,d))}const u=((a=i[c])==null?void 0:a.name)??"";r[l]=((o=dM.find(([d])=>d.test(u)))==null?void 0:o[1])??1}e.setAttribute("part",new Gt(r,1))}function pM(s){const e=new lt({roughness:.82,metalness:0}),t=r=>new Ie(r),n=[t(s.skin),t(s.top),t(s.legs),t(s.below),t(s.shoes)],i={value:0};return e.alarm=i,e.onBeforeCompile=r=>{r.uniforms.parts={value:n},r.uniforms.alarm=i,r.vertexShader=r.vertexShader.replace("void main() {",`attribute float part;
varying float vPart;
void main() {
 vPart = part;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed += normal * (part > 0.5 && part < 1.5 ? 0.022 : part > 1.5 && part < 3.5 ? 0.012 : 0.0);`),r.fragmentShader=r.fragmentShader.replace("void main() {",`uniform vec3 parts[5];
uniform float alarm;
varying float vPart;
void main() {`).replace("#include <color_fragment>",`#include <color_fragment>
 int p = int(vPart + 0.5); diffuseColor.rgb *= parts[p];`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 if (p == 0) roughnessFactor = 0.6; else if (p == 4) roughnessFactor = 0.5;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 if (p == 1) totalEmissiveRadiance += vec3(0.54, 0.11, 0.08) * alarm;`)},e.customProgramCacheKey=()=>"ecos-person",e}function mM(s,e,t,n){if(!Or)return null;const i=Yf(Or.bodies[s?"female":"male"]),r=pM(e);let a=null,o=null,l=null;i.traverse(m=>{const v=m;v.isBone&&(/^head$/i.test(v.name)&&(a=v),v.name==="spine_02"&&(o=v),v.name==="hand_r"&&(l=v));const x=m;x.isSkinnedMesh&&(x.material=r,x.castShadow=!0,x.receiveShadow=!0,x.frustumCulled=!1)}),i.updateMatrixWorld(!0);const c=t?Or.hairs.get(t):void 0;if(c&&a){const m=new Ke(c.geometry,new lt({color:e.hair,roughness:.7}));m.matrix.copy(c.matrixWorld),m.matrix.decompose(m.position,m.quaternion,m.scale),m.castShadow=!0,i.add(m),a.attach(m)}i.scale.setScalar(n);const h=new Sx(i),u=new Map,d=m=>{if(!u.has(m)){const v=Or.clips.get(m);if(!v)return null;u.set(m,h.clipAction(v))}return u.get(m)},f={root:i,mixer:h,spine:o,hand:l,alarm:r.alarm,current:null,action:d,play(m,v={}){const x=d(m);if(!x)return null;const p=v.fade??.3,g=f.current?d(f.current):null;return f.current===m&&!v.once?(x.timeScale=v.speed??1,x):(x.reset(),x.enabled=!0,x.setEffectiveWeight(1),x.timeScale=v.speed??1,x.setLoop(v.once?hf:uf,1/0),x.clampWhenFinished=!!v.once,v.at!==void 0&&(x.time=v.at),x.play(),g&&g!==x&&(p>0?g.crossFadeTo(x,p,!1):g.stop()),f.current=m,x)}};return f}const Tt=typeof location>"u"||new URLSearchParams(location.search).get("look")!=="classic",gM=Object.assign({"./assets/textures/asphalt_c.webp":Xp,"./assets/textures/asphalt_n.webp":jp,"./assets/textures/asphalt_r.webp":Kp,"./assets/textures/bark_c.webp":Yp,"./assets/textures/bark_n.webp":Jp,"./assets/textures/bark_r.webp":Zp,"./assets/textures/cobble_c.webp":$p,"./assets/textures/cobble_n.webp":Qp,"./assets/textures/cobble_r.webp":e0,"./assets/textures/field_c.webp":t0,"./assets/textures/field_n.webp":n0,"./assets/textures/field_r.webp":i0,"./assets/textures/grass_c.webp":s0,"./assets/textures/grass_n.webp":r0,"./assets/textures/grass_r.webp":a0,"./assets/textures/parquet_c.webp":o0,"./assets/textures/parquet_n.webp":l0,"./assets/textures/parquet_r.webp":c0,"./assets/textures/plaster_c.webp":h0,"./assets/textures/plaster_n.webp":u0,"./assets/textures/plaster_r.webp":d0,"./assets/textures/roof_c.webp":f0,"./assets/textures/roof_n.webp":p0,"./assets/textures/roof_r.webp":m0,"./assets/textures/sand_c.webp":g0,"./assets/textures/sand_n.webp":x0,"./assets/textures/sand_r.webp":b0,"./assets/textures/stone_c.webp":v0,"./assets/textures/stone_n.webp":_0,"./assets/textures/stone_r.webp":y0,"./assets/textures/tiles_c.webp":M0,"./assets/textures/tiles_n.webp":S0,"./assets/textures/tiles_r.webp":w0,"./assets/textures/wood_c.webp":E0,"./assets/textures/wood_n.webp":T0,"./assets/textures/wood_r.webp":A0}),xM=["plaster","stone","wood","roof","cobble","grass","field","asphalt","sand","parquet","tiles","bark"],Li=new Map,lo=s=>s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4);let bM=null;function vM(){return Tt?bM??(bM=Promise.all([uM(),...xM.flatMap(s=>["c","n","r"].map(e=>{const t=`${s}_${e}`,n=gM[`./assets/textures/${t}.webp`];if(!n)return Promise.resolve();const i=new Image;return i.decoding="async",i.src=n,i.decode().then(()=>{Li.set(t,i)},()=>{})}))]).then(()=>{})):Promise.resolve()}const Wr=new Map;function Qf(s){const e=document.createElement("canvas");e.width=e.height=32;const t=e.getContext("2d",{willReadFrequently:!0});t.drawImage(s,0,0,32,32);const n=t.getImageData(0,0,32,32).data;let i=0;for(let r=0;r<n.length;r+=4)i+=.2126*lo(n[r]/255)+.7152*lo(n[r+1]/255)+.0722*lo(n[r+2]/255);return Math.max(.02,i/(n.length/4))}function Js(s,e){const t=s instanceof HTMLCanvasElement?new Sh(s):new Jt(s);return t.colorSpace=e?Ft:Yn,t.wrapS=t.wrapT=Tn,t.anisotropy=8,t.needsUpdate=!0,t}function _M(s){if(!Wr.has(s)){const e=Li.get(`${s}_c`),t=Li.get(`${s}_n`),n=Li.get(`${s}_r`);Wr.set(s,Tt&&e&&t&&n?{map:Js(e,!0),normalMap:Js(t,!1),arm:Js(n,!1),lum:Qf(e)}:null)}return Wr.get(s)}function ri(s,e,t,n,i="none",r){const a=Li.get(`${s}_${e}`);if(!a)return null;const o=document.createElement("canvas");o.width=o.height=t;const l=o.getContext("2d"),c=t/n;l.filter=i;for(let h=0;h<n;h++)for(let u=0;u<n;u++)l.drawImage(a,h*c,u*c,c,c);return l.filter="none",r==null||r(l,t),o}function Tr(s,e,t,n=.35){return{map:Js(s,!0),normalMap:Js(e,!1),arm:Js(t,!1),lum:n>0?Qf(s):0,vary:n}}const Zi=new WeakMap;function ep(s,e,t=1){return s.map=e.map,s.normalMap=e.normalMap,s.normalScale.setScalar(t),s.roughnessMap=e.arm,s.aoMap=e.arm,s.aoMapIntensity=.8,s.roughness=1,s.metalness=0,s.metalnessMap=null,e.lum<=0||(s.onBeforeCompile=n=>{n.uniforms.lum={value:e.lum},n.uniforms.vary={value:e.vary??.35},n.fragmentShader=n.fragmentShader.replace("void main() {",`uniform float lum;
uniform float vary;
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
#ifdef USE_MAP
 diffuseColor.rgb *= mix(1.0, dot(texture2D(map, vMapUv * 0.137 + 0.29).rgb, vec3(0.2126, 0.7152, 0.0722)) / lum, vary);
#endif`)},s.customProgramCacheKey=()=>"ecos-ground"),s}const Go=new Set;function ar(s){return Tt&&(s.color.setHex(5596014),s.roughness=.16,s.metalness=.45,s.envMapIntensity=2.6,Go.add(s)),s}function qc(s,e=2.2){return Tt&&(s.envMapIntensity=e,Go.add(s)),s}function ms(s,e={}){const t=new lt({map:s,vertexColors:e.vertexColors??!0,roughness:e.roughness??.9}),n=Tt?Zi.get(s):void 0;return n?ep(t,n.set,n.normal??1):t}const ds={plain:0,plaster:1,stone:2,wood:3,bark:4,grass:5,sand:6},fs=["plaster","stone","wood","bark","grass","sand"],yM=[[2.2,1,1,.85],[1.4,.9,1,.9],[1.2,.8,1,.9],[1,1,1,1],[2.5,.8,1,1],[5,.6,1,1]],Ul=1024;let $i;function MM(){if(!Tt||!fs.every(r=>Li.has(`${r}_c`)&&Li.has(`${r}_n`)&&Li.has(`${r}_r`)))return null;const s=document.createElement("canvas");s.width=s.height=Ul;const e=s.getContext("2d",{willReadFrequently:!0}),t=[],n=(r,a,o,l)=>{s.width=s.height=a,e.save(),e.translate(0,a),e.scale(1,-1),e.drawImage(Li.get(`${fs[l]}_${r}`),0,0,a,a),e.restore();const c=e.getImageData(0,0,a,a).data;if(o.set(c,l*a*a*4),r==="c"){const h=new F,u=f=>lo(f/255);let d=0;for(let f=0;f<c.length;f+=64)h.x+=u(c[f]),h.y+=u(c[f+1]),h.z+=u(c[f+2]),d++;t[l]=h.divideScalar(d)}},i=(r,a,o)=>{const l=new Uint8Array(a*a*4*fs.length);for(let h=0;h<fs.length;h++)n(r,a,l,h);const c=new gh(l,a,a,fs.length);return c.colorSpace=o?Ft:Yn,c.wrapS=c.wrapT=Tn,c.generateMipmaps=!0,c.minFilter=pi,c.magFilter=Yt,c.anisotropy=8,c.needsUpdate=!0,c};return{colour:i("c",Ul,!0),normal:i("n",Ul,!1),arm:i("r",512,!1),mean:t}}function SM(s={}){const e=new lt({vertexColors:!0,roughness:s.roughness??.92,metalness:s.metalness??0});$i===void 0&&($i=MM());const t=$i;return t&&(e.onBeforeCompile=n=>{n.uniforms.tColour={value:t.colour},n.uniforms.tNormal={value:t.normal},n.uniforms.tArm={value:t.arm},n.uniforms.surf={value:yM.map(i=>new xt(...i))},n.uniforms.mean={value:t.mean},n.vertexShader=n.vertexShader.replace("void main() {",`attribute float surface;
varying float vSurface;
varying vec3 vObjPos;
varying vec3 vObjNormal;
void main() {`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vSurface = surface; vObjPos = position; vObjNormal = objectNormal;`),n.fragmentShader=n.fragmentShader.replace("void main() {",`uniform highp sampler2DArray tColour; uniform highp sampler2DArray tNormal; uniform highp sampler2DArray tArm;
uniform vec4 surf[${fs.length}]; uniform vec3 mean[${fs.length}]; uniform mat3 normalMatrix;
varying float vSurface; varying vec3 vObjPos; varying vec3 vObjNormal;
void main() {`).replace("#include <color_fragment>",`#include <color_fragment>
 int sid = int(vSurface + 0.5) - 1; vec3 sArm = vec3(1.0); vec3 sNormal = vec3(0.0);
 if (sid >= 0) {
   vec4 P = surf[sid]; vec3 n0 = normalize(vObjNormal), an = abs(n0); vec2 suv; vec3 sT, sB;
   // projected along the axis the piece faces; T and B are where the picture's u and v go, so its normal map turns with it
   if (an.y >= an.x && an.y >= an.z) { float s = n0.y >= 0.0 ? 1.0 : -1.0; suv = vec2(vObjPos.x, -vObjPos.z * s); sT = vec3(1.0, 0.0, 0.0); sB = vec3(0.0, 0.0, -s); }
   else if (an.x >= an.z) { float s = n0.x >= 0.0 ? 1.0 : -1.0; suv = vec2(-vObjPos.z * s, vObjPos.y); sT = vec3(0.0, 0.0, -s); sB = vec3(0.0, 1.0, 0.0); }
   else { float s = n0.z >= 0.0 ? 1.0 : -1.0; suv = vec2(vObjPos.x * s, vObjPos.y); sT = vec3(s, 0.0, 0.0); sB = vec3(0.0, 1.0, 0.0); }
   suv /= P.x;
   float layer = float(sid);
   vec3 c = texture(tColour, vec3(suv, layer)).rgb / mean[sid];
   float far = dot(texture(tColour, vec3(suv * 0.173 + 0.31, layer)).rgb / mean[sid], vec3(0.3333));   // a much larger scale, so the repeats do not show
   diffuseColor.rgb = min(diffuseColor.rgb * mix(vec3(1.0), c, P.w) * mix(1.0, far, 0.3 * P.w), vec3(0.9));   // no surface sends back more light than white paint
   sArm = texture(tArm, vec3(suv, layer)).rgb;
   vec3 tn = texture(tNormal, vec3(suv, layer)).xyz * 2.0 - 1.0; tn.xy *= P.y;
   sNormal = normalize(sT * tn.x + sB * tn.y + n0 * tn.z);
 }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 if (sid >= 0) roughnessFactor = clamp(mix(roughnessFactor, sArm.g, surf[sid].z), 0.04, 1.0);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
 if (sid >= 0) normal = normalize(normalMatrix * sNormal);`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
 if (sid >= 0) reflectedLight.indirectDiffuse *= mix(1.0, sArm.r, 0.8);`)},e.customProgramCacheKey=()=>"ecos-surface"),e}function wM(){for(const s of Wr.values())s&&(s.map.dispose(),s.normalMap.dispose(),s.arm.dispose());Wr.clear(),$i&&($i.colour.dispose(),$i.normal.dispose(),$i.arm.dispose()),$i=void 0,Go.clear()}const Dd={type:"change"},Ih={type:"start"},tp={type:"end"},Wa=new cr,Ld=new Mn,EM=Math.cos(70*mf.DEG2RAD),Zt=new F,_n=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fl=1e-6;class TM extends Tx{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xs.ROTATE,MIDDLE:Xs.DOLLY,RIGHT:Xs.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new vn,this._lastTargetPosition=new F,this._quat=new vn().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kc,this._sphericalDelta=new kc,this._scale=1,this._panOffset=new F,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new F,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RM.bind(this),this._onPointerDown=AM.bind(this),this._onPointerUp=CM.bind(this),this._onContextMenu=FM.bind(this),this._onMouseWheel=LM.bind(this),this._onKeyDown=IM.bind(this),this._onTouchStart=NM.bind(this),this._onTouchMove=UM.bind(this),this._onMouseDown=PM.bind(this),this._onMouseMove=DM.bind(this),this._interceptControlDown=OM.bind(this),this._interceptControlUp=zM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Et.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dd),this.update(),this.state=Et.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Zt.copy(t).sub(this.target),Zt.applyQuaternion(this._quat),this._spherical.setFromVector3(Zt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=_n:n>Math.PI&&(n-=_n),i<-Math.PI?i+=_n:i>Math.PI&&(i-=_n),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Zt.setFromSpherical(this._spherical),Zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Zt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Wa.origin.copy(this.object.position),Wa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wa.direction))<EM?this.object.lookAt(this.target):(Ld.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wa.intersectPlane(Ld,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Fl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fl||this._lastTargetPosition.distanceToSquared(this.target)>Fl?(this.dispatchEvent(Dd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Zt.setFromMatrixColumn(t,0),Zt.multiplyScalar(-e),this._panOffset.add(Zt)}_panUp(e,t){this.screenSpacePanning===!0?Zt.setFromMatrixColumn(t,1):(Zt.setFromMatrixColumn(t,0),Zt.crossVectors(this.object.up,Zt)),Zt.multiplyScalar(e),this._panOffset.add(Zt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Zt.copy(i).sub(this.target);let r=Zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new de,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function AM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function RM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function CM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tp),this.state=Et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function PM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Et.DOLLY;break;case Xs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Et.ROTATE}break;case Xs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Ih)}function DM(s){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function LM(s){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(s.preventDefault(),this.dispatchEvent(Ih),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(tp))}function IM(s){this.enabled!==!1&&this._handleKeyDown(s)}function NM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Et.TOUCH_ROTATE;break;case Bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case Bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Et.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Ih)}function UM(s){switch(this._trackPointer(s),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Et.NONE}}function FM(s){this.enabled!==!1&&s.preventDefault()}function OM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class _s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const kM=new ua(-1,1,1,-1,0,1);class BM extends At{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}}const GM=new BM;class Ho{constructor(e){this._mesh=new Ke(GM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,kM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class HM extends _s{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Un.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ho(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Id extends _s{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class VM extends _s{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class WM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new de);this._width=n.width,this._height=n.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$t}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new HM(gs),this.copyPass.material.blending=sn,this.timer=new cx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Id!==void 0&&(a instanceof Id?n=!0:a instanceof VM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const qa={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new de},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ye},cameraProjectionMatrixInverse:{value:new Ye},cameraWorldMatrix:{value:new Ye},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Xa={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ol={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function qM(s=5){const e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=XM(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=t[a],l=2*Math.PI*o/n,c=new F(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}const r=new ha(i,e,e);return r.wrapS=Tn,r.wrapT=Tn,r.needsUpdate=!0,r}function XM(s){const e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0);let i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}const ja={defines:{SAMPLES:16,SAMPLE_VECTORS:np(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new de},cameraProjectionMatrixInverse:{value:new Ye},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function np(s,e,t){const n=jM(s,e,t);let i="vec3[SAMPLES](";for(let r=0;r<s;r++){const a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function jM(s,e,t){const n=[];for(let i=0;i<s;i++){const r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new F(Math.cos(r),Math.sin(r),a))}return n}class KM{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,m=e-d,v=t-f;let x,p;m>v?(x=1,p=0):(x=0,p=1);const g=m-x+h,_=v-p+h,b=m-1+2*h,y=v-1+2*h,S=l&255,T=c&255,M=this.perm[S+this.perm[T]]%12,w=this.perm[S+x+this.perm[T+p]]%12,A=this.perm[S+1+this.perm[T+1]]%12;let I=.5-m*m-v*v;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[M],m,v));let D=.5-g*g-_*_;D<0?i=0:(D*=D,i=D*D*this._dot(this.grad3[w],g,_));let N=.5-b*b-y*y;return N<0?r=0:(N*=N,r=N*N*this._dot(this.grad3[A],b,y)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o;const c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),f=1/6,m=(h+u+d)*f,v=h-m,x=u-m,p=d-m,g=e-v,_=t-x,b=n-p;let y,S,T,M,w,A;g>=_?_>=b?(y=1,S=0,T=0,M=1,w=1,A=0):g>=b?(y=1,S=0,T=0,M=1,w=0,A=1):(y=0,S=0,T=1,M=1,w=0,A=1):_<b?(y=0,S=0,T=1,M=0,w=1,A=1):g<b?(y=0,S=1,T=0,M=0,w=1,A=1):(y=0,S=1,T=0,M=1,w=1,A=0);const I=g-y+f,D=_-S+f,N=b-T+f,O=g-M+2*f,B=_-w+2*f,Y=b-A+2*f,W=g-1+3*f,se=_-1+3*f,j=b-1+3*f,te=h&255,ee=u&255,ge=d&255,pe=this.perm[te+this.perm[ee+this.perm[ge]]]%12,Fe=this.perm[te+y+this.perm[ee+S+this.perm[ge+T]]]%12,Se=this.perm[te+M+this.perm[ee+w+this.perm[ge+A]]]%12,Oe=this.perm[te+1+this.perm[ee+1+this.perm[ge+1]]]%12;let ne=.6-g*g-_*_-b*b;ne<0?i=0:(ne*=ne,i=ne*ne*this._dot3(this.grad3[pe],g,_,b));let oe=.6-I*I-D*D-N*N;oe<0?r=0:(oe*=oe,r=oe*oe*this._dot3(this.grad3[Fe],I,D,N));let xe=.6-O*O-B*B-Y*Y;xe<0?a=0:(xe*=xe,a=xe*xe*this._dot3(this.grad3[Se],O,B,Y));let L=.6-W*W-se*se-j*j;return L<0?o=0:(L*=L,o=L*L*this._dot3(this.grad3[Oe],W,se,j)),32*(i+r+a+o)}noise4d(e,t,n,i){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,m;const v=(e+t+n+i)*l,x=Math.floor(e+v),p=Math.floor(t+v),g=Math.floor(n+v),_=Math.floor(i+v),b=(x+p+g+_)*c,y=x-b,S=p-b,T=g-b,M=_-b,w=e-y,A=t-S,I=n-T,D=i-M,N=w>A?32:0,O=w>I?16:0,B=A>I?8:0,Y=w>D?4:0,W=A>D?2:0,se=I>D?1:0,j=N+O+B+Y+W+se,te=a[j][0]>=3?1:0,ee=a[j][1]>=3?1:0,ge=a[j][2]>=3?1:0,pe=a[j][3]>=3?1:0,Fe=a[j][0]>=2?1:0,Se=a[j][1]>=2?1:0,Oe=a[j][2]>=2?1:0,ne=a[j][3]>=2?1:0,oe=a[j][0]>=1?1:0,xe=a[j][1]>=1?1:0,L=a[j][2]>=1?1:0,R=a[j][3]>=1?1:0,P=w-te+c,V=A-ee+c,k=I-ge+c,X=D-pe+c,Q=w-Fe+2*c,ce=A-Se+2*c,fe=I-Oe+2*c,Te=D-ne+2*c,we=w-oe+3*c,ke=A-xe+3*c,Je=I-L+3*c,G=D-R+3*c,ft=w-1+4*c,tt=A-1+4*c,U=I-1+4*c,E=D-1+4*c,K=x&255,J=p&255,ae=g&255,be=_&255,ve=o[K+o[J+o[ae+o[be]]]]%32,le=o[K+te+o[J+ee+o[ae+ge+o[be+pe]]]]%32,ue=o[K+Fe+o[J+Se+o[ae+Oe+o[be+ne]]]]%32,Ee=o[K+oe+o[J+xe+o[ae+L+o[be+R]]]]%32,Ve=o[K+1+o[J+1+o[ae+1+o[be+1]]]]%32;let Me=.6-w*w-A*A-I*I-D*D;Me<0?h=0:(Me*=Me,h=Me*Me*this._dot4(r[ve],w,A,I,D));let _e=.6-P*P-V*V-k*k-X*X;_e<0?u=0:(_e*=_e,u=_e*_e*this._dot4(r[le],P,V,k,X));let ze=.6-Q*Q-ce*ce-fe*fe-Te*Te;ze<0?d=0:(ze*=ze,d=ze*ze*this._dot4(r[ue],Q,ce,fe,Te));let Xe=.6-we*we-ke*ke-Je*Je-G*G;Xe<0?f=0:(Xe*=Xe,f=Xe*Xe*this._dot4(r[Ee],we,ke,Je,G));let $e=.6-ft*ft-tt*tt-U*U-E*E;return $e<0?m=0:($e*=$e,m=$e*$e*this._dot4(r[Ve],ft,tt,U,E)),27*(h+u+d+f+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}}class hi extends _s{constructor(e,t,n=512,i=512,r,a,o){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=qM(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Qt(this.width,this.height,{type:$t,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Bt({defines:Object.assign({},qa.defines),uniforms:Un.clone(qa.uniforms),vertexShader:qa.vertexShader,fragmentShader:qa.fragmentShader,blending:sn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new zg,this.normalMaterial.blending=sn,this.pdMaterial=new Bt({defines:Object.assign({},ja.defines),uniforms:Un.clone(ja.uniforms),vertexShader:ja.vertexShader,fragmentShader:ja.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Bt({defines:Object.assign({},Xa.defines),uniforms:Un.clone(Xa.uniforms),vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader,blending:sn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Bt({uniforms:Un.clone(gs.uniforms),vertexShader:gs.vertexShader,fragmentShader:gs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:jl,blendDst:Ir,blendEquation:fi,blendSrcAlpha:Xl,blendDstAlpha:Ir,blendEquationAlpha:fi}),this.blendMaterial=new Bt({uniforms:Un.clone(Ol.uniforms),vertexShader:Ol.vertexShader,fragmentShader:Ol.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Zd,blendSrc:jl,blendDst:Ir,blendEquation:fi,blendSrcAlpha:Xl,blendDstAlpha:Ir,blendEquationAlpha:fi}),this._fsQuad=new Ho(null),this._originalClearColor=new Ie,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new nr,this.depthTexture.format=Qi,this.depthTexture.type=er,this.normalRenderTarget=new Qt(this.width,this.height,{minFilter:qt,magFilter:qt,type:$t,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=np(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case hi.OUTPUT.Off:break;case hi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=sn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case hi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=sn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case hi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=sn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case hi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case hi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=sn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case hi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=sn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){const t=new KM,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){const l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const r=new ha(i,e,e,Fn,Sn);return r.wrapS=Tn,r.wrapT=Tn,r.needsUpdate=!0,r}}hi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Ka={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class YM extends _s{constructor(){super(),this.isOutputPass=!0,this.uniforms=Un.clone(Ka.uniforms),this.material=new If({name:Ka.name,uniforms:this.uniforms,vertexShader:Ka.vertexShader,fragmentShader:Ka.fragmentShader}),this._fsQuad=new Ho(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===eh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===th?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===No?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ih?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===nh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class JM extends _s{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ie}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const ZM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class or extends _s{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new Ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(r,a,{type:$t,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Qt(r,a,{type:$t,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Qt(r,a,{type:$t,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=ZM;this.highPassUniforms=Un.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new de(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Un.clone(gs.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:gs.vertexShader,fragmentShader:gs.fragmentShader,premultipliedAlpha:!0,blending:xi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ie,this._oldClearAlpha=1,this._basic=new Lt,this._fsQuad=new Ho(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new de(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=or.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=or.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const i=[],r=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),r.push(c)}return new Bt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}or.BlurDirectionX=new de(1,0);or.BlurDirectionY=new de(0,1);const co=(s,e,t)=>{let n=(Math.imul(Math.round(s*97),73856093)^Math.imul(Math.round(e*89),19349663)^Math.imul(Math.round(t*83),83492791))>>>0;return()=>(n=Math.imul(n^n>>>15,2246822507),n=Math.imul(n^n>>>13,3266489909),((n^=n>>>16)>>>0)/4294967296)};function $M(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d"),n=co(1,2,3),i=512/2;for(let a=0;a<4;a++){const o=a%2*i,l=Math.floor(a/2)*i;t.save(),t.beginPath(),t.rect(o,l,i,i),t.clip();for(let c=0;c<46;c++){const h=n()*Math.PI*2,u=Math.sqrt(n())*i*.36,d=o+i/2+Math.cos(h)*u,f=l+i/2+Math.sin(h)*u,m=i*(.13+n()*.07),v=m*(.36+n()*.12),x=h+(n()-.5)*1.4,p=150+Math.floor(n()*105),g=Math.floor(p*.72);t.save(),t.translate(d,f),t.rotate(x);const _=t.createLinearGradient(0,-v,0,v);_.addColorStop(0,`rgb(${g},${g},${g})`),_.addColorStop(.5,`rgb(${p},${p},${p})`),_.addColorStop(1,`rgb(${g},${g},${g})`),t.fillStyle=_,t.beginPath(),t.moveTo(-m/2,0),t.quadraticCurveTo(0,-v,m/2,0),t.quadraticCurveTo(0,v,-m/2,0),t.fill(),t.strokeStyle="rgba(60,60,60,0.35)",t.lineWidth=1,t.beginPath(),t.moveTo(-m/2,0),t.lineTo(m/2,0),t.stroke(),t.restore()}t.restore()}const r=new Sh(e);return r.colorSpace=Ft,r.anisotropy=4,r.generateMipmaps=!0,r}function QM(s){const e=new lt({map:s,vertexColors:!0,alphaTest:.45,side:pn,roughness:.8,metalness:0,alphaToCoverage:!0});return e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
#ifdef DOUBLE_SIDED
 normal *= faceDirection;
#endif`)},e.customProgramCacheKey=()=>"ecos-leaves",e}const Nd=new Ie,Ya={h:0,s:0,l:0};function zl(s){return Nd.setHex(s).getHSL(Ya,Ft),Nd.setHSL(Ya.h+.01,Ya.s*.72,Ya.l*.78,Ft)}class eS{constructor(){z(this,"pos",[]);z(this,"nor",[]);z(this,"uv",[]);z(this,"col",[]);z(this,"c",new Ie)}get empty(){return this.pos.length===0}card(e,t,n,i,r,a){const o=new F(i()-.5,i()-.5,i()-.5).multiplyScalar(1.6).add(t).normalize(),l=new F(0,1,0).cross(o);l.lengthSq()<1e-4&&l.set(1,0,0),l.normalize();const c=new F().crossVectors(o,l),h=i()*Math.PI*2,u=Math.cos(h),d=Math.sin(h),f=l.clone().multiplyScalar(u).addScaledVector(c,d).multiplyScalar(n/2),m=l.clone().multiplyScalar(-d).addScaledVector(c,u).multiplyScalar(n/2),v=Math.floor(i()*4),x=v%2*.5,p=Math.floor(v/2)*.5,g=[[-1,-1,0,0],[1,-1,1,0],[1,1,1,1],[-1,-1,0,0],[1,1,1,1],[-1,1,0,1]];this.c.copy(r).multiplyScalar(a*(.88+i()*.24));for(const[_,b,y,S]of g)this.pos.push(e.x+f.x*_+m.x*b,e.y+f.y*_+m.y*b,e.z+f.z*_+m.z*b),this.nor.push(t.x,t.y,t.z),this.uv.push(x+y*.5,p+S*.5),this.col.push(this.c.r,this.c.g,this.c.b)}canopy(e,t,n,i,r,a,o){const l=co(t,n,i),c=zl(e).clone(),h=(r+a+o)/3,u=Math.min(1.25,.42+h*.28),d=4*Math.PI*Math.pow((Math.pow(r*a,1.6)+Math.pow(r*o,1.6)+Math.pow(a*o,1.6))/3,1/1.6),f=Math.max(10,Math.min(420,Math.round(d/(u*u)*1.9))),m=new F,v=new F;for(let x=0;x<f;x++){if(m.set(l()*2-1,l()*2-1,l()*2-1),m.lengthSq()>1||m.lengthSq()<.01){x--;continue}m.normalize();const p=.62+.38*Math.sqrt(l());v.set(t+m.x*r*p,n+m.y*a*p,i+m.z*o*p);const g=new F(m.x/r,m.y/a,m.z/o).normalize();this.card(v,g,u,l,c,(.62+.38*(m.y*.5+.5))*(.72+.28*p))}}hedge(e,t,n,i,r,a,o){const l=co(t,n+7,i),c=zl(e).clone(),h=Math.min(.62,.3+a*.18),u=[[new F(0,1,0),r*o],[new F(1,0,0),o*a],[new F(-1,0,0),o*a],[new F(0,0,1),r*a],[new F(0,0,-1),r*a]],d=new F;for(const[f,m]of u){const v=Math.max(2,Math.round(m/(h*h)*2.2));for(let x=0;x<v;x++){const p=l()-.5,g=l()-.5,_=l()*.08;f.y?d.set(t+p*r,n+a+_-.04,i+g*o):f.x?d.set(t+f.x*(r/2+_-.03),n+(g+.5)*a,i+p*o):d.set(t+p*r,n+(g+.5)*a,i+f.z*(o/2+_-.03));const b=f.clone().multiplyScalar(.8).add(new F(0,.35,0)).normalize();this.card(d,b,h,l,c,f.y?1:.62+.38*((d.y-n)/a))}}}cone(e,t,n,i,r,a){const o=co(t,n+3,i),l=zl(e).clone(),c=Math.min(.7,.3+r*.32),h=Math.max(12,Math.min(260,Math.round(Math.PI*r*Math.hypot(r,a)/(c*c)*2.2))),u=new F;for(let d=0;d<h;d++){const f=Math.pow(o(),.8),m=o()*Math.PI*2,v=r*(1-f)*(.7+.3*o());u.set(t+Math.cos(m)*v,n+f*a,i+Math.sin(m)*v);const x=new F(Math.cos(m),r/a+.15,Math.sin(m)).normalize();this.card(u,x,c,o,l,.66+.34*f)}}build(e){const t=new At;t.setAttribute("position",new rt(this.pos,3)),t.setAttribute("normal",new rt(this.nor,3)),t.setAttribute("uv",new rt(this.uv,2)),t.setAttribute("color",new rt(this.col,3)),t.computeBoundingSphere(),this.pos=[],this.nor=[],this.uv=[],this.col=[];const n=new Ke(t,e);return n.castShadow=!0,n.receiveShadow=!0,n}}let ip=0;const Ln=()=>performance.now()+ip,tS=s=>{ip+=s};function Wt(s){let e=2166136261;for(const t of s)e^=t.charCodeAt(0),e=Math.imul(e,16777619);return()=>(e=Math.imul(e^e>>>15,2246822507),e=Math.imul(e^e>>>13,3266489909),((e^=e>>>16)>>>0)/4294967296)}const ht=(s,e)=>e[Math.floor(s()*e.length)%e.length],ai=(s,e,t)=>s+(e-s)*t,sp=s=>Math.max(0,Math.min(1,s)),wn=s=>{const e=sp(s);return e*e*(3-2*e)},an=(s,e,t,n)=>e+(s-e)*Math.exp(-t*n),Ja=new on(1,1,1).toNonIndexed(),ps=new Ie,Ud={h:0,s:0,l:0};function nS(s,e){if(!Tt)return ds.plain;ps.setHex(s).getHSL(Ud,Ft);const{h:t,s:n,l:i}=Ud;return t>=.04&&t<=.14&&n>=.22&&n<=.8&&i>=.15&&i<=.56?ds.wood:n<.16&&i>=.38&&i<.8?ds.stone:e==="leaves"&&t>=.17&&t<=.45&&n>.2?ds.grass:e==="solid"&&i>=.78&&n<.9?ds.plaster:ds.plain}let iS=null;function Mt(s,e,t=.06){ps.setHex(s);const n=1+(e()-.5)*2*t;return ps.multiplyScalar(n).getHex()}class et{constructor(e="solid"){z(this,"parts",[]);z(this,"surf",null);z(this,"cards");z(this,"count",0);this.kind=e,this.cards=Tt&&e==="leaves"?new eS:null}on(e){return this.surf=e?ds[e]:null,this}add(e,t,n,i,r,a=0,o=0,l=0,c=1,h=1,u=1,d){const f=e.index?e.toNonIndexed():e.clone();if(d&&f.getAttribute("uv")){const x=f.getAttribute("uv");for(let p=0;p<x.count;p++)x.setXY(p,x.getX(p)*d[0],x.getY(p)*d[1])}f.applyMatrix4(new Ye().compose(new F(n,i,r),new vn().setFromEuler(new zi(o,a,l,"YXZ")),new F(c,h,u)));const m=f.getAttribute("position").count,v=new Float32Array(m*3);ps.setHex(t);for(let x=0;x<m;x++)v[x*3]=ps.r,v[x*3+1]=ps.g,v[x*3+2]=ps.b;f.setAttribute("color",new Gt(v,3)),f.setAttribute("surface",new Gt(new Float32Array(m).fill(this.surf??nS(t,this.kind)),1));for(const x of Object.keys(f.attributes))["position","normal","uv","color","surface"].includes(x)||f.deleteAttribute(x);return f.getAttribute("uv")||f.setAttribute("uv",new Gt(new Float32Array(m*2),2)),this.parts.push(f),this.count++,this}box(e,t,n,i,r,a,o,l=0,c){if(this.cards&&t>=.3&&Math.max(e,n)>=.45){const[h,u]=Math.abs(Math.sin(l))>.7?[n,e]:[e,n];return this.cards.hedge(i,r,a,o,h,t,u),this.add(Ja,Mt(i,()=>0,.5),r,a+(t-.08)/2,o,l,0,0,Math.max(.05,e-.2),t-.08,Math.max(.05,n-.2))}return this.add(Ja,i,r,a+t/2,o,l,0,0,e,t,n,c)}beam(e,t,n,i,r,a,o,l=0,c=0,h=0,u){return this.add(Ja,i,r,a,o,l,c,h,e,t,n,u)}slab(e,t,n,i,r,a,o){return this.box(Math.abs(n-e),a,Math.abs(i-t),o,(e+n)/2,r,(t+i)/2)}cyl(e,t,n,i,r,a,o,l=10,c=0,h=0){return this.add(new En(e,t,n,l),i,r,a+(c||h?0:n/2),o,0,c,h)}cone(e,t,n,i,r,a,o=7,l=0){return this.cards&&t>=2?(this.cards.cone(n,i,r,a,e,t),this.add(new ir(e*.62,t*.9,9),Mt(n,()=>0,.5),i,r+t*.45,a)):this.add(new ir(e,t,Tt?Math.max(o,14):o),n,i,r+t/2,a,l)}ball(e,t,n,i,r,a=1,o=1,l=1,c=1){return this.cards&&e*Math.max(o,l,c)>=.42?(this.cards.canopy(t,n,i,r,e*o,e*l,e*c),this.add(new To(e*.66,2),Mt(t,()=>0,.55),n,i,r,0,0,0,o,l,c)):this.add(new To(e,Tt?e>3?3:e>.35?2:Math.max(a,1):a),t,n,i,r,0,0,0,o,l,c)}gable(e,t,n,i,r,a,o,l=.45,c=0,h=2.4){const u=t/2+l,d=Math.hypot(u,n),f=Math.atan2(n,u),m=.16,v=new Ye().makeRotationY(c),x=new F;for(const p of[-1,1])x.set(0,0,p*u/2).applyMatrix4(v),this.add(Ja,i,r+x.x,a+n/2+m/2,o+x.z,c,p*f,0,e+l*2,m,d+.08,[(e+l*2)/h,d/h]);return this}gableEnds(e,t,n,i,r,a,o,l=.45,c=0){const h=t/2+l,u=n*l/h,d=new Ah;d.moveTo(-t/2,0),d.lineTo(t/2,0),d.lineTo(t/2,u),d.lineTo(0,n),d.lineTo(-t/2,u),d.closePath();const f=new Oo(d,{depth:.2,bevelEnabled:!1}),m=new Ye().makeRotationY(c),v=new F;for(const x of[-e/2,e/2-.2])v.set(x,0,0).applyMatrix4(m),this.add(f,i,r+v.x,a,o+v.z,c+Math.PI/2);return this}empty(){return this.parts.length===0}build(e={}){const t=this.parts.length?Kf(this.parts,!1):new At;for(const r of this.parts)r.dispose();this.parts=[],this.surf=null;const n=e.material??(Tt?SM({roughness:e.roughness,metalness:e.metalness}):new lt({vertexColors:!0,flatShading:e.flat??!0,roughness:e.roughness??.92,metalness:e.metalness??0})),i=new Ke(t,n);return i.castShadow=e.cast??!0,i.receiveShadow=e.receive??!0,this.cards&&!this.cards.empty&&i.add(this.cards.build(iS??(iS=QM($M())))),i}}function St(s,e,t,n,i,r,a,o={}){const l=Tt?Zi.get(t):void 0;if(l){const u=new rn(s,e),d=u.getAttribute("uv"),f=l.metres??n;for(let v=0;v<d.count;v++)d.setXY(v,d.getX(v)*(s/f),d.getY(v)*(e/f));const m=new Ke(u,ep(new lt({color:o.colour??16777215}),l.set,l.normal??1));return m.rotation.x=-Math.PI/2,m.position.set(i,r,a),m.receiveShadow=!0,m}const c=t.clone();c.needsUpdate=!0,c.wrapS=c.wrapT=Tn,c.repeat.set(s/n,e/n);const h=new Ke(new rn(s,e),new lt({map:c,roughness:o.roughness??.95,color:o.colour??16777215}));return h.rotation.x=-Math.PI/2,h.position.set(i,r,a),h.receiveShadow=!0,h}const rp=[15848118,15254688,14264439,16112838],sS=[11887901,8231864,10123936,7311218,13208459,9206635,13939843,6258588],rS=[15263457,13683910,12104362,16052974],aS=s=>{const e=s()<.55;return{shirt:ht(s,sS),legs:e?6050928:ht(s,[4871528,7035723,4147802]),hair:ht(s,rS),skin:ht(s,rp),cap:!e&&s()<.45,bun:e&&s()<.6,skirt:e&&s()<.6,cane:s()<.35,lean:.1+s()*.12,speed:.95+s()*.3,woman:e,old:!0}},ap={shirt:2792847,legs:2792847,hair:3878698,skin:15254688,bun:!0,lean:.02,speed:1.9,woman:!0},oS={...ap,shirt:2834283,legs:2241370,hair:1776411,skin:14264439,bun:!1,woman:!1},Nh={shirt:7163842,legs:3095119,hair:2827296,skin:15848118,lean:.02,speed:2.3},Xc=s=>({shirt:ht(s,[14238764,3106483,15844367,4160858,15921126,9323693,15105570]),legs:ht(s,[3095119,4871528,7035723,2042163]),hair:ht(s,[2827296,5978665,9067051,13683910,1776411]),skin:ht(s,rp),skirt:s()<.2,bun:s()<.3,lean:.02,speed:1.25+s()*.3}),kl=.78,Co=.38,lS=new F(1,0,0),cS=new F(-1,0,0),hS=new F(0,0,1),uS=new F(0,0,-1),Ar=(s,e)=>(s.translate(0,-e,0),s),un={torso:new Vs(.165,.3,3,8),pelvis:new on(.3,.16,.2),head:new ns(.155,12,10),hair:new ns(.165,12,6,0,Math.PI*2,0,Math.PI/2.05),bun:new ns(.075,8,6),cap:new En(.17,.175,.06,12),brim:new on(.2,.025,.14),arm:Ar(new Vs(.05,.36,2,6),.2),thigh:Ar(new Vs(.068,.26,2,6),Co/2),shin:Ar(new Vs(.056,.26,2,6),Co/2),shoe:new on(.1,.07,.23),cane:Ar(new En(.018,.018,.86,5),.43),skirt:Ar(new En(.17,.27,.44,10),.2),ring:new Ao(.55,.78,32),wide:new Ao(1.05,1.35,64).scale(.72,1,1)},Fd={stand:{hip:kl,pitch:0,lift:0,lean:0,thighL:0,thighR:0,kneeL:0,kneeR:0,armL:.04,armR:.04,spread:.07},sit:{hip:.46,pitch:0,lift:0,lean:.04,thighL:-1.45,thighR:-1.45,kneeL:1.45,kneeR:1.45,armL:-.55,armR:-.55,spread:.1},lie:{hip:kl,pitch:-Math.PI/2,lift:.14,lean:0,thighL:0,thighR:0,kneeL:0,kneeR:0,armL:0,armR:0,spread:.14},floor:{hip:kl,pitch:Math.PI/2,lift:.15,lean:-.15,thighL:.3,thighR:-.55,kneeL:.95,kneeR:.25,armL:-2.5,armR:-.7,spread:.85}};class lr{constructor(e){z(this,"group",new gt);z(this,"tilt",new gt);z(this,"hips",new gt);z(this,"spine",new gt);z(this,"arms",[]);z(this,"legs",[]);z(this,"shirt");z(this,"cane",null);z(this,"ring");z(this,"now",{...Fd.stand});z(this,"path",[]);z(this,"then",null);z(this,"after",null);z(this,"yaw",0);z(this,"yawTo",0);z(this,"phase",0);z(this,"moving",0);z(this,"pose","stand");z(this,"seat",0);z(this,"fallen",!1);z(this,"rig",null);z(this,"flip",0);z(this,"rising",0);z(this,"within",null);z(this,"clip",[new Mn,new Mn,new Mn,new Mn]);z(this,"sitting",0);z(this,"jumped",!1);z(this,"hand",new F);z(this,"hurry",1);z(this,"shown",!0);this.look=e;const t=l=>new lt({color:l,roughness:.85,flatShading:!1});if(this.shirt=t(e.shirt),this.rig=Tt?pS(e):null,this.rig){this.tilt.add(this.rig.root),e.cane&&(this.cane=new Ke(new En(.014,.016,.86,8).translate(0,-.43,0),t(5978665)),this.cane.castShadow=!0,this.group.add(this.cane)),this.rig.play("Idle_Loop",{fade:0,speed:e.old?.8:1}),this.ring=new Ke(un.wide,new Lt({color:16726832,transparent:!0,opacity:.85,side:pn,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.set(0,.04,.55),this.ring.visible=!1,this.group.add(this.tilt,this.ring);return}const n=t(e.legs),i=t(e.skin),r=t(e.hair),a=t(2827296),o=(l,c,h=0,u=0,d=0)=>{const f=new Ke(l,c);return f.position.set(h,u,d),f.castShadow=!0,f};this.hips.add(o(un.pelvis,n,0,.02,0)),e.skirt&&this.hips.add(o(un.skirt,n,0,.02,0)),this.spine.add(o(un.torso,this.shirt,0,.36,0),o(un.head,i,0,.74,.01)),e.cap?this.spine.add(o(un.cap,t(4869975),0,.87,0),o(un.brim,t(4869975),0,.845,.16)):this.spine.add(o(un.hair,r,0,.75,-.005)),e.bun&&this.spine.add(o(un.bun,r,0,.83,-.14));for(const l of[-1,1]){const c=new gt;c.position.set(l*.225,.56,0),c.add(o(un.arm,this.shirt),o(un.bun,i,0,-.43,0)),this.arms.push(c),this.spine.add(c);const h=new gt,u=new gt;h.position.set(l*.09,0,0),u.position.y=-Co,h.add(o(un.thigh,n),u),u.add(o(un.shin,n),o(un.shoe,a,0,-Co+.03,.05)),this.legs.push({thigh:h,knee:u}),this.hips.add(h)}e.cane&&(this.cane=o(un.cane,t(5978665),.03,-.4,.06),this.arms[1].add(this.cane)),this.hips.add(this.spine),this.tilt.add(this.hips),this.ring=new Ke(un.ring,new Lt({color:16726832,transparent:!0,opacity:.85,side:pn,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.04,this.ring.visible=!1,this.group.add(this.tilt,this.ring)}get x(){return this.group.position.x}get z(){return this.group.position.z}get walking(){return this.path.length>0}get hidden(){return!this.group.visible}put(e){this.path=[],this.then=null,this.after=null,this.jumped=!0,this.rising=0,this.settle(e),this.now={...this.target()},this.yaw=this.yawTo,this.group.rotation.y=this.yaw}go(e,t,n){this.fallen||(this.path=[...e,{x:t.x,z:t.z}],this.then=t,this.after=n??null,this.pose="stand",this.seat=0)}fall(e){if(!this.fallen&&(this.within=e??null,this.ring.material.clippingPlanes=this.rig&&e?this.clip:null,this.fallen=!0,this.path=[],this.then=null,this.pose="floor",this.shirt.emissive.setHex(9051156),this.shirt.emissiveIntensity=.55,this.rig)){this.rig.alarm.value=1,this.rising=0;const t=this.rig.play("Death01",{once:!0,fade:this.jumped?0:.12});t&&this.jumped&&(t.time=t.getClip().duration,this.flip=Math.PI,this.rig.root.rotation.y=Math.PI)}}rise(){if(this.fallen&&(this.fallen=!1,this.pose="stand",this.shirt.emissiveIntensity=0,this.rig)){this.rig.alarm.value=0;const e=this.rig.play("Death01",{once:!0,fade:0,speed:-.8});e&&(e.time=e.getClip().duration,this.rising=e.getClip().duration/.8)}}get down(){return this.fallen}risen(){const e=this.rig;this.yaw+=e.root.rotation.y,this.yawTo=this.yaw,e.root.rotation.y=0,this.flip=0,this.group.rotation.y=this.yaw}settle(e){if(this.pose=e.pose,this.seat=e.pose==="sit"?e.seat??.46:e.pose==="lie"?e.bed??.5:0,this.group.position.set(e.x,this.group.position.y,e.z),this.yawTo=e.yaw,e.pose==="lie"){const t=-Math.sin(e.yaw),n=-Math.cos(e.yaw);this.group.position.set(e.x-t*.83,this.group.position.y,e.z-n*.83)}}target(){const e=Fd[this.pose],t={...e};return this.pose==="stand"&&(t.lean=this.look.lean),this.pose==="sit"&&(t.hip=this.seat),this.pose==="lie"&&(t.lift=this.seat+.13),t}update(e,t){const n=this.jumped;this.jumped=!1;let i=0;if(this.path.length&&!this.fallen&&this.rising<=0){const f=this.path[0],m=f.x-this.group.position.x,v=f.z-this.group.position.z,x=Math.hypot(m,v),p=this.look.speed*this.hurry,g=p*e;if(x<=g+.02?(this.group.position.x=f.x,this.group.position.z=f.z,this.path.shift()):(this.group.position.x+=m/x*g,this.group.position.z+=v/x*g,this.yawTo=Math.atan2(m,v)),i=p,!this.path.length){const _=this.then,b=this.after;this.then=null,this.after=null,_&&this.settle(_),b==null||b()}}this.moving=an(this.moving,i,8,e),this.phase+=this.moving*e*4.6;let r=this.yawTo-this.yaw;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;if(this.yaw+=r*(1-Math.exp(-9*e)),this.group.rotation.y=this.yaw,this.rig){this.move(e,t,n);return}const a=this.target(),o=this.now,l=this.pose==="floor"?7:6;for(const f of Object.keys(o))o[f]=an(o[f],a[f],f==="pitch"||f==="lift"?l:9,e);const c=Math.min(1,this.moving/.8),h=Math.sin(this.phase),u=Math.cos(this.phase);this.tilt.rotation.x=o.pitch,this.tilt.position.y=o.lift,this.hips.position.y=o.hip+c*Math.abs(u)*.025+(this.pose==="stand"&&!c?Math.sin(t*1.3+this.look.shirt)*.004:0),this.spine.rotation.x=o.lean+(this.pose==="lie"?Math.sin(t*1.6)*.012:0),this.legs[0].thigh.rotation.x=o.thighL+c*h*.52,this.legs[1].thigh.rotation.x=o.thighR-c*h*.52,this.legs[0].knee.rotation.x=o.kneeL+c*Math.max(0,-u)*.75,this.legs[1].knee.rotation.x=o.kneeR+c*Math.max(0,u)*.75;const d=this.cane&&this.pose==="stand";if(this.arms[0].rotation.x=o.armL-c*h*.42,this.arms[1].rotation.x=d?-.38+c*h*.16:o.armR+c*h*.42,this.arms[0].rotation.z=-o.spread,this.arms[1].rotation.z=o.spread,this.cane&&(this.cane.visible=this.pose==="stand"),this.tilt.visible=this.shown,this.ring.visible=this.shown&&this.fallen,this.ring.visible){const f=1+.3*Math.sin(t*5);this.ring.scale.set(f,f,1),this.ring.material.opacity=.55+.3*Math.sin(t*5)}}move(e,t,n){const i=this.rig,r=this.look,a=this.pose==="lie"&&!this.fallen,o=a?this.seat+.15:0;this.tilt.rotation.x=n?a?-Math.PI/2:0:an(this.tilt.rotation.x,a?-Math.PI/2:0,6,e),this.tilt.position.y=n?o:an(this.tilt.position.y,o,6,e),this.rising>0&&(this.rising-=e)<=0&&this.risen(),this.flip=this.fallen||this.rising>0?Math.PI:0,i.root.rotation.y=n?this.flip:an(i.root.rotation.y,this.flip,9,e);const l=this.moving/Math.max(.5,r.speed),c=r.old?.8:1;let h;if(this.fallen||this.rising>0?h=null:this.pose==="sit"&&l<.3?h=this.sitting>0?"Sitting_Enter":"Sitting_Idle_Loop":l>.25?h="Walk_Loop":h="Idle_Loop",h==="Sitting_Enter"||h==="Sitting_Idle_Loop"?this.sitting-=e:this.sitting=n?0:1.2,h&&(i.current==="Death01"&&!this.fallen?i.play(h,{fade:n?0:.25,speed:c}):h==="Walk_Loop"?i.play(h,{fade:.25,speed:Math.min(1.7,Math.max(.5,this.moving/1.25))}):h==="Sitting_Enter"?i.play(h,{once:!0,fade:.25}):i.play(h,{fade:n?0:.3,speed:h==="Idle_Loop"?c:1})),this.shown&&(i.mixer.update(n?0:e),i.spine&&r.old&&!this.fallen&&this.pose==="stand"&&i.spine.rotateX(r.lean*.9)),this.cane&&(this.cane.visible=this.shown&&this.pose==="stand"&&!this.fallen&&this.rising<=0&&!!i.hand,this.cane.visible&&i.hand&&(i.root.updateMatrixWorld(!0),i.hand.getWorldPosition(this.hand),this.group.worldToLocal(this.hand),this.cane.position.copy(this.hand),this.cane.scale.y=Math.max(.3,this.hand.y/.86),this.cane.rotation.set(.12,0,0))),this.tilt.visible=this.shown,this.ring.visible=this.shown&&this.fallen,this.ring.visible){const u=1+.08*Math.sin(t*5);this.ring.scale.set(u,u,1),this.ring.material.opacity=.82+.12*Math.sin(t*5)}if(this.ring.visible&&this.within&&this.group.parent){const u=this.within,d=.06,f=this.group.parent.matrixWorld;this.clip[0].set(lS,-(u.x0-d)).applyMatrix4(f),this.clip[1].set(cS,u.x1+d).applyMatrix4(f),this.clip[2].set(hS,-(u.z0-d)).applyMatrix4(f),this.clip[3].set(uS,u.z1+d).applyMatrix4(f)}}}const dS=["Hair_Buns","Hair_Long","Hair_BuzzedFemale"],fS=["Hair_SimpleParted","Hair_Buzzed"];function pS(s){const e=s.woman??(!!s.skirt||!!s.bun),t=(s.shirt^s.hair*7^s.skin*13)>>>0,n=e?s.bun?"Hair_Buns":dS[t%2+1]:s.cap?"Hair_Buzzed":fS[t%2],i=s.skirt?new Ie(s.skin).multiplyScalar(.82).getHex():s.legs;return mM(e,{skin:s.skin,top:s.shirt,legs:s.legs,below:i,shoes:2827296,hair:s.hair},n,s.old?.88:.93)}const Ii=[-60,-20,20,60],gi=[-33,-9,15,39],Vt=3,Za=2,Nt={z0:-49,z1:-39,water:-.75,bed:-1.7},ho=-54,ye=.14,op=(s,e)=>({x0:Ii[s]+Vt,x1:Ii[s+1]-Vt,z0:gi[e]+Vt,z1:gi[e+1]-Vt}),oa=(s,e)=>{const t=op(s,e);return{x0:t.x0+Za,x1:t.x1-Za,z0:t.z0+Za,z1:t.z1-Za}},lp=.015,mS=.02,dt={w:11.4,d:6.9,core:2.6,floor:3},gS={"Rua do Sal 5":{x:-7.4,z:-22.2,lot:{x0:-15,x1:1,z0:-28,z1:-14}},"Travessa das Flores 3":{x:-47.4,z:1.8,lot:{x0:-55,x1:-39,z0:-4,z1:10}},"Largo da Igreja 2":{x:6.6,z:1.8,lot:{x0:-1,x1:15,z0:-4,z1:10}},"Rua da Fonte 17":{x:-7.4,z:25.8,lot:{x0:-15,x1:1,z0:20,z1:34}},"Rua Nova 21":{x:32.6,z:25.8,lot:{x0:25,x1:41,z0:20,z1:34}}},xS=s=>({x:-44+s*22,z:72.5,lot:{x0:-52+s*22,x1:-36+s*22,z0:66,z1:80}}),Od={"Rua do Cais 14":{x:-40,z:-24.55,floors:4,look:"tiles",lot:oa(0,0)},"Avenida Central 80":{x:-40,z:23.45,floors:6,look:"plain",lot:oa(0,2)}};oa(2,1);function bS(){const s=[];for(const e of gi)s.push({x0:e===-9||e===15?-260:-63,x1:e===-9||e===15?260:63,z0:e-Vt,z1:e+Vt,along:"x"});for(const e of Ii){const t=Math.abs(e)===20,n=[...t?[ho+Vt]:[],...gi.flatMap(i=>[i-Vt,i+Vt]),...t?[260]:[]];for(let i=t?0:1;i+1<n.length;i+=2)s.push({x0:e-Vt,x1:e+Vt,z0:n[i],z1:n[i+1],along:"z"})}return s.push({x0:-110,x1:110,z0:ho-Vt,z1:ho+Vt,along:"x"}),s}const Uh=()=>new lt({color:16775126,emissive:16773296,emissiveIntensity:0});function Fh(s,e="car"){if(Tt)return SS(s,e);const t=new et,n=new gt,i=Uh(),[r,a,o,l]=e==="bus"?[9.5,2.4,2.3,0]:e==="van"?[4.6,1.9,1.5,0]:[3.8,1.7,.62,.62];t.box(r,o,a,s,0,.32,0),l?t.box(r*.5,l,a*.9,12573162,-r*.06,.32+o,0).box(r*.46,.05,a*.86,s,-r*.06,.32+o+l,0):(t.box(r*.84,o*.36,a+.02,12573162,-r*.02,.32+o*.5,0),t.box(.06,o*.5,a*.86,12573162,r/2+.01,.32+o*.42,0)),e==="bus"&&t.box(r,.28,a+.03,14853934,0,.7,0);for(const c of e==="bus"?[-3.2,3]:[-r*.3,r*.3])for(const h of[-a/2,a/2])t.add(new En(.34,.34,.22,10),1776929,c,.34,h,0,Math.PI/2,0);t.box(.05,.14,a*.8,8002580,-r/2-.01,.62,0),n.add(t.build({roughness:.45,metalness:.15}));for(const c of[-a*.32,a*.32]){const h=new Ke(new on(.07,.16,.3),i);h.position.set(r/2+.01,.62,c),n.add(h)}return{group:n,lights:i,length:r}}function Rr(s){const e=new et,t=new gt,n=Uh();e.box(7.4,.5,1.7,2042163,0,-.1,0).box(7.2,.14,1.5,9067051,0,.36,0).box(7.4,.14,1.74,s,0,.3,0),e.beam(2.4,.5,1.2,2042163,4.4,.55,0,0,0,.55).beam(1.9,.42,.7,s,5.2,1.25,0,0,0,1).beam(.7,.5,.34,15921126,5.72,1.95,0,0,0,1.25),e.beam(1.8,.45,1.2,2042163,-4.2,.5,0,0,0,-.5).beam(.9,.4,.6,s,-4.9,.95,0,0,0,-.9);for(const r of[-1.6,0,1.6])e.box(.3,.06,1.5,12159575,r,.5,0);e.cyl(.04,.05,2.6,7032618,-2.4,.4,0,5),t.add(e.build({roughness:.7}));const i=new Ke(new ns(.1,8,6),n);return i.position.set(-2.4,3.05,0),t.add(i),{group:t,lights:n,length:9}}function hs(s,e,t,n=0){const i=new Ah;if(n>0){const[[a,o],[l,c]]=s,h=n;i.moveTo(a+h,o),i.lineTo(l-h,o),i.quadraticCurveTo(l,o,l,o+h),i.lineTo(l,c-h),i.quadraticCurveTo(l,c,l-h,c),i.lineTo(a+h,c),i.quadraticCurveTo(a,c,a,c-h),i.lineTo(a,o+h),i.quadraticCurveTo(a,o,a+h,o)}else{i.moveTo(...s[0]);for(const a of s.slice(1))i.lineTo(...a);i.closePath()}const r=new Oo(i,{depth:Math.max(.01,e-2*t),bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:3,curveSegments:5});return r.translate(0,0,-(e-2*t)/2),r.toNonIndexed()}const vS=new lt({color:1776929,roughness:.9}),_S=new lt({color:12896976,roughness:.3,metalness:.85}),yS=new lt({color:8002580,emissive:10099216,emissiveIntensity:.4,roughness:.4});let jc=null;const Kc=new Map;function MS(){Kc.clear(),jc=null}function SS(s,e){const t=new gt,n=Uh(),i=Kc.get(s)??qc(new lt({color:s,roughness:.3,metalness:.5}),1.4);Kc.set(s,i),jc??(jc=ar(new lt({color:10470360})));const[r,a]=e==="bus"?[9.5,2.4]:e==="van"?[4.6,1.9]:[3.8,1.7],o=[],l=[];e==="car"?(o.push(hs([[-1.9,.28],[1.9,.9]],a,.09,.22)),l.push(hs([[-1.25,.86],[.78,.86],[.36,1.4],[-1.06,1.4]],a-.2,.05)),o.push(hs([[-1.04,1.38],[.34,1.38],[.31,1.45],[-1.01,1.45]],a-.16,.03))):e==="van"?(o.push(hs([[-2.3,.3],[2.3,2]],a,.1,.28)),l.push(hs([[1,1.15],[2.33,1.15],[2.36,1.8],[1,1.8]],a+.02,.02))):(o.push(hs([[-4.75,.3],[4.75,2.95]],a,.1,.3)),l.push(hs([[-4.3,1.45],[4.78,1.45],[4.8,2.5],[-4.3,2.5]],a+.03,.02)));const c=(m,v,x=!0)=>{const p=new Ke(Kf(m,!1),v);return p.castShadow=x,p.receiveShadow=!0,t.add(p),p};if(c(o,i),c(l,jc,!1),e==="bus"){const m=new Ke(new on(r-.4,.26,a+.04),new lt({color:14853934,roughness:.4,metalness:.2}));m.position.y=.95,t.add(m)}const h=[],u=[],d=e==="bus"?.48:.33;for(const m of e==="bus"?[-3.2,3]:[-r*.31,r*.31])for(const v of[-1,1])h.push(new En(d,d,.24,18).rotateX(Math.PI/2).translate(m,d,v*(a/2-.08)).toNonIndexed()),u.push(new En(d*.55,d*.55,.02,14).rotateX(Math.PI/2).translate(m,d,v*(a/2+.05)).toNonIndexed());c(h,vS),c(u,_S,!1);const f=e==="bus"?.75:.66;for(const m of[-a*.33,a*.33]){const v=new Ke(new on(.06,.13,.3),n);v.position.set(r/2+.03,f,m),t.add(v);const x=new Ke(new on(.05,.14,.26),yS);x.position.set(-r/2-.03,f+.04,m),t.add(x)}return{group:t,lights:n,length:r}}function Bl(s,e,t=2.2){const n=s.x1-s.x0-2*t,i=s.z1-s.z0-2*t,r=Math.PI/2*t,a=2*(n+i)+4*r;let o=(e%a+a)%a;s.clockwise||(o=a-o);const l=[[n,c=>({x:s.x0+t+c,z:s.z0,yaw:Math.PI/2})],[r,c=>{const h=c/t;return{x:s.x1-t+Math.sin(h)*t,z:s.z0+t-Math.cos(h)*t,yaw:Math.PI/2-h}}],[i,c=>({x:s.x1,z:s.z0+t+c,yaw:0})],[r,c=>{const h=c/t;return{x:s.x1-t+Math.cos(h)*t,z:s.z1-t+Math.sin(h)*t,yaw:-h}}],[n,c=>({x:s.x1-t-c,z:s.z1,yaw:-Math.PI/2})],[r,c=>{const h=c/t;return{x:s.x0+t-Math.sin(h)*t,z:s.z1-t+Math.cos(h)*t,yaw:-Math.PI/2-h}}],[i,c=>({x:s.x0,z:s.z1-t-c,yaw:Math.PI})],[r,c=>{const h=c/t;return{x:s.x0+t-Math.cos(h)*t,z:s.z0+t-Math.sin(h)*t,yaw:Math.PI-h}}]];for(const[c,h]of l){if(o<=c){const u=h(o);return s.clockwise?u:{...u,yaw:u.yaw+Math.PI}}o-=c}return{x:s.x0,z:s.z0,yaw:0}}function wS(){const s=new gt,e=Wt("street"),t=Vt/2,n=(m,v,x,p,g=!0)=>({x0:Ii[m]+(g?t:-t),x1:Ii[v]-(g?t:-t),z0:gi[x]+(g?t:-t),z1:gi[p]-(g?t:-t),clockwise:g}),i=[14238764,3106483,15921126,4674921,14853934,4160858,2042163,10169434],r=[],a=(m,v,x,p="car",g=!0)=>{const _=Fh(p==="bus"?16250090:p==="van"?15921126:ht(e,i),p);s.add(_.group),r.push({v:_,loop:m,s:v,speed:x,night:g})};a(n(1,2,1,2),5,7.5),a(n(1,2,1,2),62,6.8,"car",!1),a(n(0,3,0,3),20,8.5),a(n(0,3,0,3),150,8,"van",!1),a(n(2,3,0,3),30,7.2,"car",!1),a(n(0,1,0,3),90,7.8),a(n(0,3,0,1),60,7,"car",!1),a(n(0,3,2,3),10,7.4),a(n(0,3,0,3,!1),0,6.2,"bus"),a(n(1,2,0,3,!1),44,7.6,"car",!1);const o=[{v:Rr(12597547),a:-15,b:15,s:.1,speed:1.5},{v:Rr(3106483),a:26,b:96,s:.6,speed:1.9},{v:Rr(14853934),a:-96,b:-26,s:.3,speed:1.7}];for(const m of o)s.add(m.v.group);const l=[Rr(3115605),Rr(12597547)];l[0].group.position.set(-34,Nt.water+.12,Nt.z1-1.4),l[1].group.position.set(42,Nt.water+.12,Nt.z1-1.4),l[1].group.rotation.y=Math.PI,s.add(l[0].group,l[1].group);const c=new At;c.setAttribute("position",new Gt(new Float32Array([0,0,.14,0,0,-.14,.9,.05,0]),3)),c.computeVertexNormals();const h=new Lt({color:16777215,side:pn}),u=Array.from({length:7},(m,v)=>{const x=new gt,p=new Ke(c,h),g=new Ke(c,h);return g.scale.x=-1,x.add(p,g),s.add(x),{g:x,l:p,r:g,cx:-60+e()*120,cz:Nt.z0-6+e()*18,rad:9+e()*16,h:14+e()*12,w:(e()<.5?1:-1)*(.25+e()*.2),ph:v*1.7}}),d=(m,v,x)=>({x0:Ii[m]+Vt+1,x1:Ii[m+1]-Vt-1,z0:gi[v]+Vt+1,z1:gi[v+1]-Vt-1,clockwise:x}),f=[[0,0,!0],[1,0,!1],[2,0,!0],[0,1,!1],[1,1,!0],[2,1,!1],[1,2,!0],[2,2,!0],[0,2,!1],[1,1,!1]].map(([m,v,x],p)=>{const g=new lr(Xc(Wt(`walker${p}`)));return g.group.position.y=ye,s.add(g.group),{f:g,loop:d(m,v,x),s:e()*80,speed:1.15+e()*.35,late:p%4===0}});for(const[m,v,x]of[[3.47,-17.96,2.11],[8.29,-17.65,0],[12.75,-18.19,-2.07],[-32,-37.38,Math.PI],[28,-37.38,Math.PI]]){const p=new lr(Xc(Wt(`sitter${m}`)));p.group.position.y=ye,s.add(p.group),p.put({x:m,z:v,yaw:x,pose:"sit",seat:.47}),p.update(0,0),f.push({f:p,loop:null,s:0,speed:0,late:!1})}return{group:s,update(m,v,x){const p=x>.6;for(const g of r){if(g.v.group.visible=g.night||!p,!g.v.group.visible)continue;g.s+=g.speed*m;const _=Bl(g.loop,g.s);g.v.group.position.set(_.x,.012,_.z),g.v.group.rotation.y=_.yaw-Math.PI/2,g.v.lights.emissiveIntensity=.4+x*4}for(const g of o){g.s+=g.speed*m/(g.b-g.a);const _=g.s%2,b=_<1?_:2-_,y=g.a+(g.b-g.a)*(.5-.5*Math.cos(b*Math.PI));g.v.group.position.set(y,Nt.water+.12+Math.sin(v*1.3+g.a)*.03,(Nt.z0+Nt.z1)/2+(_<1?1.6:-1.6)),g.v.group.rotation.y=_<1?0:Math.PI,g.v.group.rotation.z=Math.sin(v*.9+g.a)*.015,g.v.lights.emissiveIntensity=x*3}for(const g of l)g.group.position.y=Nt.water+.12+Math.sin(v*1.1+g.group.position.x)*.03,g.lights.emissiveIntensity=x*2;for(const g of u){const _=v*g.w+g.ph;g.g.position.set(g.cx+Math.cos(_)*g.rad,g.h+Math.sin(v*.4+g.ph)*1.5,g.cz+Math.sin(_)*g.rad),g.g.rotation.y=-_+(g.w>0?0:Math.PI);const b=Math.sin(v*7+g.ph)*.5;g.l.rotation.z=b,g.r.rotation.z=-b,g.g.visible=x<.5}for(const g of f){if(!g.loop){g.f.group.visible=x<.55;continue}if(g.f.group.visible=g.late||!p,!g.f.group.visible)continue;g.s+=g.speed*m;const _=Bl(g.loop,g.s,.6),b=Bl(g.loop,g.s+.6,.6);g.f.go([],{x:b.x,z:b.z,yaw:_.yaw,pose:"stand"}),g.f.group.position.set(_.x,ye,_.z),g.f.update(m,v)}}}}const cp=[16249834,16447214,15984585,16178848,15848134,13886190,14412242],hp=[3106483,14260767,7305088,4160858,9187129,3115673],up=[8010542,2051705,3104058,5978665,9187129],Ut=12038822,Pn=2830134,On=9067051,ES=10470360,Ot=.2,qr=.9,uo=2.7;function Pi(s,e,t,n,i,r,a=0){return i==="s"?{x:s+r,z:e+n/2+a,ry:0}:i==="n"?{x:s+r,z:e-n/2-a,ry:Math.PI}:i==="e"?{x:s+t/2+a,z:e+r,ry:Math.PI/2}:{x:s-t/2-a,z:e+r,ry:-Math.PI/2}}function zd(s,e,t,n,i,r,a,o,l,c,h){const u=r==="n"||r==="s"?n:i;let d=-u/2;const f=[...h].sort((m,v)=>m[0]-v[0]);for(const[m,v]of[...f,[u/2,u/2]]){if(m-d>.02){const x=(d+m)/2,p=m-d,g=Pi(e,t,n,i,r,x,-c/2);r==="n"||r==="s"?s.box(p,o,c,l,g.x,a,g.z):s.box(c,o,p,l,g.x,a,g.z)}d=Math.max(d,v)}}function la(s,e,t,n,i,r,a,o={}){const l=o.wallH??uo,c=o.y??0,h=.2,u=[],d=[];o.foot!==!1&&s.low.box(n+.36,Ot,i+.36,Ut,e,c,t);const f=c+(o.foot!==!1?Ot:0);for(const m of["n","s","e","w"]){const v=a.filter(x=>x.side===m&&x.kind==="door").map(x=>[x.at-(x.w??.95)/2,x.at+(x.w??.95)/2]);s.low.on("plaster"),zd(s.low,e,t,n,i,m,f,qr,r.trim,h,v),s.low.on(),s.high.on("plaster"),zd(s.high,e,t,n,i,m,f+qr,l-qr,r.wall,h,v),s.high.on()}for(const m of a)if(m.kind==="window"){const v=m.w??1.1,x=1.15,p=f+1,g=Pi(e,t,n,i,m.side,m.at,.02),_=Pi(e,t,n,i,m.side,m.at,.06),b=m.side==="n"||m.side==="s";if(s.high.on("plain").box(b?v+.2:.1,x+.2,b?.1:v+.2,r.trim,g.x,p-.1,g.z).on(),s.high.box(b?v+.36:.22,.08,b?.22:v+.36,Ut,g.x,p-.18,g.z),m.shutters!==!1)for(const y of[-1,1]){const S=Pi(e,t,n,i,m.side,m.at+y*(v/2+.3),.05);s.high.on("plain").box(b?.42:.06,x,b?.06:.42,r.door,S.x,p,S.z).on()}s.glass&&s.glass.box(b?v:.06,x,b?.06:v,ES,_.x,p,_.z),u.push({x:_.x,y:p+x/2,z:_.z,ry:g.ry,w:v,h:x,side:m.side})}else{const v=m.w??.95,x=2.05,p=Pi(e,t,n,i,m.side,m.at,0),g=m.side==="n"||m.side==="s";for(const _ of[-1,1]){const b=Pi(e,t,n,i,m.side,m.at+_*(v/2+.06),.02);s.low.on("plain").box(g?.12:.24,x+.12,g?.24:.12,r.trim,b.x,f,b.z).on()}if(s.high.on("plaster").box(g?v+.24:.24,l-x-0,g?.24:v+.24,r.wall,p.x,f+x,p.z).on(),s.low.box(g?v+.5:.9,.1,g?.9:v+.5,Ut,Pi(e,t,n,i,m.side,m.at,.45).x,c+.08,Pi(e,t,n,i,m.side,m.at,.45).z),o.leaf!==!1){const _=Pi(e,t,n,i,m.side,m.at,-.04);s.low.on("plain").box(g?v:.07,x,g?.07:v,r.door,_.x,f,_.z).on()}d.push({x:p.x,y:f,z:p.z,ry:p.ry,w:v,h:x,side:m.side})}if(o.roof!==!1){const m=f+l,v=r.ridge??"x",x=v==="x"?0:Math.PI/2,p=v==="x"?n:i,g=v==="x"?i:n;if(s.roof.gable(p,g,r.rise,16777215,e,m,t,.5,x),s.high.on("plaster").gableEnds(p,g,r.rise,r.wall,e,m,t,.5,x).on(),r.chimney){const[_,b]=r.chimney,y=g/2+.5,S=v==="x"?b:_,T=r.rise*(1-Math.abs(S)/y);s.high.on("plaster").box(.6,T+1.1,.6,r.wall,e+_,m,t+b).on(),s.roof.box(.78,.12,.78,14277081,e+_,m+T+1.1,t+b)}}return{windows:u,doors:d}}function fo(s,e,t,n,i,r,a="s"){const o={wall:Mt(ht(e,cp),e,.02),trim:ht(e,hp),door:ht(e,up),rise:1.5+e()*.6,chimney:[i*(e()*.4-.2),r*.18],ridge:i>=r?"x":"z"},l=[];for(const c of["n","s","e","w"]){const h=c==="n"||c==="s"?i:r,u=Math.max(1,Math.floor(h/3.2));for(let d=0;d<u;d++){const f=-h/2+(d+.5)*(h/u);c===a&&d===Math.floor(u/2)?l.push({side:c,at:f,kind:"door"}):l.push({side:c,at:f,kind:"window"})}}la(s,t,n,i,r,o,l)}const Ni="outside",$a=.82;class TS{constructor(e,t,n){z(this,"w");z(this,"d");z(this,"rooms",new Map);z(this,"names",new Map);z(this,"doors",[]);z(this,"hub");z(this,"entrance");z(this,"walls",[]);const i=Math.max(...e.map(h=>h.x+h.w)),r=Math.max(...e.map(h=>h.y+h.h));this.w=i*t,this.d=r*t;for(const h of e)this.rooms.set(h.room,{x0:h.x*t-this.w/2,z0:h.y*t-this.d/2,x1:(h.x+h.w)*t-this.w/2,z1:(h.y+h.h)*t-this.d/2}),this.names.set(h.room,h.name);const a=[...this.rooms.keys()],o=e.flatMap(h=>(h.doors??[]).map(u=>({room:h.room,...u}))),l=o.find(h=>h.to===Ni);this.hub=l?l.room:n&&this.rooms.has(n)?n:a.find(h=>/hall|corridor/.test(h))??a.sort((h,u)=>this.area(u)-this.area(h))[0];const c=(h,u)=>this.placed(h.room,h.to,h.x*t-this.w/2,h.y*t-this.d/2,u);if(o.length){for(const h of o)h.to!==Ni&&this.doors.push(c(h,$a));this.entrance=l?c(l,.95):this.wayOut()}else this.workOutDoors(a),this.entrance=this.wayOut();this.buildWalls()}area(e){const t=this.rooms.get(e);return(t.x1-t.x0)*(t.z1-t.z0)}placed(e,t,n,i,r){const a=this.rooms.get(e),o=(Math.abs(i-a.z0)<1e-6||Math.abs(i-a.z1)<1e-6)&&n>a.x0+1e-6&&n<a.x1-1e-6;return{a:e,b:t,x:n,z:i,flat:o,w:r}}workOutDoors(e){const t=[];for(let i=0;i<e.length;i++)for(let r=i+1;r<e.length;r++){const a=this.rooms.get(e[i]),o=this.rooms.get(e[r]);for(const[l,c]of[[a.x1,o.x0],[a.x0,o.x1]])if(Math.abs(l-c)<1e-6){const h=Math.max(a.z0,o.z0),u=Math.min(a.z1,o.z1);u-h>=$a+.06&&t.push({a:e[i],b:e[r],x:l,z:(h+u)/2,flat:!1,len:u-h})}for(const[l,c]of[[a.z1,o.z0],[a.z0,o.z1]])if(Math.abs(l-c)<1e-6){const h=Math.max(a.x0,o.x0),u=Math.min(a.x1,o.x1);u-h>=$a+.06&&t.push({a:e[i],b:e[r],x:(h+u)/2,z:l,flat:!0,len:u-h})}}const n=new Set([this.hub]);for(;n.size<e.length;){const i=t.filter(r=>n.has(r.a)!==n.has(r.b)).sort((r,a)=>+(a.a===this.hub||a.b===this.hub)-+(r.a===this.hub||r.b===this.hub)||a.len-r.len)[0];if(!i)break;this.doors.push({a:i.a,b:i.b,x:i.x,z:i.z,flat:i.flat,w:$a}),n.add(i.a),n.add(i.b)}}wayOut(){const e=this.rooms.get(this.hub),t=1e-6,n=[{on:Math.abs(e.x1-this.w/2)<t,door:{x:e.x1,z:(e.z0+e.z1)/2,flat:!1}},{on:Math.abs(e.x0+this.w/2)<t,door:{x:e.x0,z:(e.z0+e.z1)/2,flat:!1}},{on:Math.abs(e.z1-this.d/2)<t,door:{x:(e.x0+e.x1)/2,z:e.z1,flat:!0}},{on:Math.abs(e.z0+this.d/2)<t,door:{x:(e.x0+e.x1)/2,z:e.z0,flat:!0}}].find(i=>i.on);return{a:this.hub,b:Ni,w:.95,...(n==null?void 0:n.door)??{x:e.x1,z:(e.z0+e.z1)/2,flat:!1}}}buildWalls(){const e=new Map,t=(i,r,a)=>{const o=e.get(i)??[];o.push([r,a]),e.set(i,o)};for(const i of this.rooms.values())t(`x${i.x0.toFixed(3)}`,i.z0,i.z1),t(`x${i.x1.toFixed(3)}`,i.z0,i.z1),t(`z${i.z0.toFixed(3)}`,i.x0,i.x1),t(`z${i.z1.toFixed(3)}`,i.x0,i.x1);const n=[...this.doors,this.entrance];for(const[i,r]of e){const a=i[0]==="x",o=Number(i.slice(1)),l=Math.abs(Math.abs(o)-(a?this.w:this.d)/2)<.001;r.sort((u,d)=>u[0]-d[0]);const c=[];for(const u of r){const d=c[c.length-1];d&&u[0]<=d[1]+1e-6?d[1]=Math.max(d[1],u[1]):c.push([u[0],u[1]])}const h=n.filter(u=>u.flat!==a&&Math.abs((a?u.x:u.z)-o)<.001).map(u=>[(a?u.z:u.x)-u.w/2,(a?u.z:u.x)+u.w/2]).sort((u,d)=>u[0]-d[0]);for(const[u,d]of c){let f=u;for(const[m,v]of[...h.filter(x=>x[1]>u&&x[0]<d),[d,d]])m-f>.03&&this.walls.push(a?{x0:o,z0:f,x1:o,z1:m,outer:l}:{x0:f,z0:o,x1:m,z1:o,outer:l}),f=Math.max(f,v)}}}roomAt(e,t){for(const[n,i]of this.rooms)if(e>=i.x0-.01&&e<=i.x1+.01&&t>=i.z0-.01&&t<=i.z1+.01)return n;return null}centre(e){const t=this.rooms.get(e);return t?{x:(t.x0+t.x1)/2,z:(t.z0+t.z1)/2}:{x:0,z:0}}path(e,t){if(e===t)return[];const n=[...this.doors,this.entrance],i=new Map,r=[e],a=new Set([e]);for(;r.length;){const c=r.shift();if(c===t)break;for(const h of n){const u=h.a===c?h.b:h.b===c?h.a:null;u&&!a.has(u)&&(a.add(u),i.set(u,{via:h,from:c}),r.push(u))}}if(!i.has(t))return[];const o=[];for(let c=t;c!==e;){const h=i.get(c);o.unshift({via:h.via,from:h.from,into:c}),c=h.from}const l=[];for(const c of o){const h=c.from===Ni?null:this.centre(c.from),u=.42,d=h?Math.sign(c.via.flat?h.z-c.via.z:h.x-c.via.x)||1:-(Math.sign(c.via.flat?this.centre(c.into).z-c.via.z:this.centre(c.into).x-c.via.x)||1);l.push(c.via.flat?{x:c.via.x,z:c.via.z+d*u}:{x:c.via.x+d*u,z:c.via.z}),l.push(c.via.flat?{x:c.via.x,z:c.via.z-d*u}:{x:c.via.x-d*u,z:c.via.z})}return l}}const AS=1.6,Cn=Math.PI,Ci=Math.PI/2,yn=0,ks=-Math.PI/2,RS=[8231864,11887901,9412463,11105390,7307164,13215339],oi=16052974,li=12568526;function Dn(s,e,t,n,i=On){s.box(.42,.05,.42,i,e,.42,t,n);const r=-Math.sin(n)*.2,a=-Math.cos(n)*.2;s.box(.42,.5,.05,i,e+r,.44,t+a,n);for(const[o,l]of[[-.17,-.17],[.17,-.17],[-.17,.17],[.17,.17]])s.box(.04,.42,.04,i,e+o,0,t+l);return{x:e,z:t,yaw:n,pose:"sit",seat:.5}}function Po(s,e,t,n,i){s.box(.85,.42,.85,i,e,0,t,n);const r=.34,a=-Math.sin(n)*r,o=-Math.cos(n)*r;s.box(.85,.55,.18,Mt(i,()=>.3),e+a,.42,t+o,n);for(const l of[-1,1])s.box(.16,.2,.7,Mt(i,()=>.3),e+Math.cos(n)*l*.35,.42,t-Math.sin(n)*l*.35,n);return{x:e+Math.sin(n)*.08,z:t+Math.cos(n)*.08,yaw:n,pose:"sit",seat:.5}}function Xr(s,e,t,n,i,r=On){s.box(n,.05,i,r,e,.72,t);for(const[a,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])s.box(.06,.72,.06,r,e+a*(n/2-.07),0,t+o*(i/2-.07))}function es(s,e,t,n=1){s.cyl(.17*n,.13*n,.3*n,11887930,e,0,t,8).ball(.3*n,5214014,e,.55*n,t,0,1,1.2,1).ball(.2*n,6266954,e+.12,.78*n,t-.05,0)}function CS(s,e,t,n,i,r,a,o,l=1,c){const h=(e.x0+e.x1)/2,u=(e.z0+e.z1)/2,d={sit:[],lie:[],stand:[{x:h,z:u,yaw:yn,pose:"stand"}],fall:{x:h,z:u}},f=ht(a,RS);if(s==="living-room"){n.box(2.7,.02,1.9,Mt(12166284,a,.1),e.x0+2.1,.005,e.z0+1.8),n.box(2.1,.42,.85,f,e.x0+2.1,0,e.z0+.58).box(2.1,.52,.2,Mt(f,()=>.3),e.x0+2.1,.42,e.z0+.24);for(const m of[-1,1])n.box(.2,.22,.85,Mt(f,()=>.3),e.x0+2.1+m*.96,.42,e.z0+.58).box(.5,.14,.4,Mt(f,()=>.75),e.x0+2.1+m*.45,.42,e.z0+.6);d.sit.push({x:e.x0+1.62,z:e.z0+.7,yaw:yn,pose:"sit",seat:.5},{x:e.x0+2.58,z:e.z0+.7,yaw:yn,pose:"sit",seat:.5}),d.sit.push(Po(n,e.x0+4.35,e.z0+.7,yn-.35,Mt(f,()=>.8))),n.box(1,.34,.55,On,e.x0+2.1,0,e.z0+1.8).box(.22,.03,.3,15328472,e.x0+1.9,.34,e.z0+1.8),n.box(1.5,.48,.4,5981750,e.x0+1.3,0,e.z1-.32).box(1.12,.64,.06,1447964,e.x0+1.3,.52,e.z1-.3),r.push({x:e.x0+1.3,y:.84,z:e.z1-.34,ry:Cn,w:1.02,h:.56,room:s}),n.box(.36,1.05,1.25,8018492,e.x0+.26,0,e.z0+1.95);for(let m=0;m<3;m++)for(let v=0;v<6;v++)n.box(.2,.24,.16,ht(a,[12597547,3106483,14853934,4160858,15921126,9323693]),e.x0+.3,.1+m*.33,e.z0+1.45+v*.19);n.cyl(.03,.03,1.5,2830134,e.x0+.42,0,e.z0+.42,6).cyl(.13,.13,.03,2830134,e.x0+.42,0,e.z0+.42,8),i.push([e.x0+.42,1.55,e.z0+.42]),es(n,e.x1-.45,e.z0+.45,1.2),d.stand=[{x:e.x0+3.4,z:e.z0+2.4,yaw:Cn,pose:"stand"},{x:e.x1-1.1,z:e.z0+1.7,yaw:ks,pose:"stand"},{x:e.x0+5,z:e.z0+2.6,yaw:ks,pose:"stand"}],d.fall={x:e.x0+3.7,z:e.z0+2.3}}else if(s==="kitchen"){n.box(3.9,.88,.6,15328472,e.x0+2.15,0,e.z0+.34).box(3.96,.05,.66,6120299,e.x0+2.15,.88,e.z0+.34),n.box(.62,.03,.42,li,e.x0+1.2,.93,e.z0+.34).box(.04,.24,.04,li,e.x0+1.2,.93,e.z0+.12),n.box(.62,.02,.48,1776929,e.x0+2.9,.93,e.z0+.34);for(const[m,v]of[[-.15,-.11],[.15,-.11],[-.15,.11],[.15,.11]])n.cyl(.07,.07,.012,4869975,e.x0+2.9+m,.95,e.z0+.34+v,8);n.cyl(.11,.1,.13,12597547,e.x0+3.05,.95,e.z0+.23,8);for(let m=0;m<6;m++)n.box(.02,.5,.01,13617339,e.x0+.5+m*.65,.2,e.z0+.645);n.box(.7,1.8,.68,14672870,e.x1-.46,0,e.z0+.4).box(.03,.5,.03,li,e.x1-.74,1,e.z0+.76),Xr(n,e.x0+1.1,e.z1-.95,1.1,.8),n.cyl(.1,.07,.09,15921126,e.x0+1.1,.77,e.z1-.95,8).ball(.05,15105570,e.x0+1.07,.88,e.z1-.95,0).ball(.05,12597547,e.x0+1.15,.87,e.z1-.92,0),d.sit.push(Dn(n,e.x0+.34,e.z1-.95,Ci),Dn(n,e.x0+1.86,e.z1-.95,ks)),d.stand=[{x:e.x0+1.2,z:e.z0+1,yaw:Cn,pose:"stand"},{x:e.x0+2.9,z:e.z0+1,yaw:Cn,pose:"stand"},{x:e.x1-.6,z:e.z0+1.2,yaw:Cn,pose:"stand"}],d.fall={x:e.x0+3.4,z:e.z0+1.75}}else if(s==="hall"){const m=t.entrance,v=m.x>h;n.box(.75,.016,.52,8215100,m.x+(v?-.6:.6),.003,m.z);const x=v?e.x0+.3:e.x1-.3;n.cyl(.025,.025,1.6,4864554,x,0,e.z1-.2,6).box(.3,.5,.1,4152698,x,.95,e.z1-.22).box(.26,.42,.1,9187129,x+.05,1,e.z1-.16),n.box(.24,.07,.17,1776929,e.x0+1.3,.02,e.z0+.16),i.push([e.x0+1.3,.12,e.z0+.16]),d.stand=[{x:(e.x0+e.x1)/2-.6,z:u,yaw:Ci,pose:"stand"}],d.fall={x:(e.x0+e.x1)/2+.3,z:u}}else if(s==="bedroom"){const m=ht(a,[8231864,11105390,9412463,13215339,9337512]);n.box(2.05,.3,1.66,8018492,e.x0+1.14,0,u).box(1.95,.2,1.56,oi,e.x0+1.16,.3,u).box(.08,.95,1.7,7032627,e.x0+.1,0,u),n.box(1.25,.07,1.6,m,e.x0+1.52,.5,u);for(const v of[-1,1])n.box(.36,.1,.56,16448250,e.x0+.42,.5,u+v*.39).box(.42,.5,.42,8018492,e.x0+.3,0,u+v*1.16).cyl(.05,.07,.16,11887930,e.x0+.3,.5,u+v*1.16,6),i.push([e.x0+.3,.76,u+v*1.16]),d.lie.push({x:e.x0+1.2,z:u+v*.39,yaw:Ci,pose:"lie",bed:.5}),d.sit.push({x:e.x0+1.95,z:u+v*.39,yaw:Ci,pose:"sit",seat:.56});n.box(.56,2,1.7,14273976,e.x1-.34,0,e.z1-1.05).box(.02,1.9,.02,10128500,e.x1-.63,.05,e.z1-1.05),d.sit.push(Dn(n,e.x1-1.5,e.z1-.4,Cn,10123861)),n.box(2,.02,1.3,Mt(11122626,a,.1),e.x0+3.5,.005,u),d.stand=[{x:e.x0+3.2,z:e.z0+.95,yaw:yn,pose:"stand"},{x:e.x0+4.1,z:u+.5,yaw:ks,pose:"stand"},{x:e.x1-1,z:e.z0+1,yaw:Ci,pose:"stand"}],d.fall={x:e.x0+3.6,z:u+.1}}else if(s==="bathroom")n.box(.98,.06,.98,oi,e.x1-.55,0,e.z1-.55).box(.03,1,.98,12575726,e.x1-1.05,.06,e.z1-.55).box(.98,1,.03,12575726,e.x1-.55,.06,e.z1-1.05),n.cyl(.02,.02,1,li,e.x1-.14,.06,e.z1-.3,5),n.box(.58,.4,.38,oi,e.x1-.48,0,e.z0+.95).box(.2,.78,.42,oi,e.x1-.14,0,e.z0+.95).box(.6,.03,.4,15132906,e.x1-.48,.4,e.z0+.95),n.box(.04,.04,.6,li,e.x1-.5,.8,e.z0+.6),n.box(.9,.82,.5,oi,e.x0+1.5,0,e.z1-.3).box(.5,.04,.34,14673642,e.x0+1.5,.82,e.z1-.3).box(.03,.2,.03,li,e.x0+1.5,.86,e.z1-.12),n.box(.6,.85,.6,15132906,e.x0+.42,0,e.z1-.38).add(new En(.2,.2,.03,14),3159098,e.x0+.42,.45,e.z1-.69,0,Math.PI/2),n.box(.8,.02,.5,8369096,e.x1-1.65,.004,e.z1-.6),d.stand=[{x:e.x0+1.5,z:e.z1-1,yaw:yn,pose:"stand"},{x:e.x0+2.9,z:e.z0+1.3,yaw:Ci,pose:"stand"}],d.fall={x:e.x0+3,z:e.z0+1.75};else if(/^room-\d+/.test(s)){const m=t.doors.find(A=>A.a===s||A.b===s),v=m&&Math.abs(m.z-e.z0)<.01?1:-1,x=v>0?e.z0:e.z1,p=(A,I)=>[e.x0+A,x+v*I],g=Math.abs(e.z1-e.z0),_=e.x1-e.x0,b=l>1,y=[],S=[];for(const[A,I]of(b?[.6,_-.6]:[.6]).entries()){const D=A?-1:1,N=ht(a,[8231864,11105390,9412463,13215339,9337512]);let[O,B]=p(I,g-1.12);n.box(.98,.34,2.02,13620182,O,0,B).box(.9,.18,1.94,oi,O,.34,B).box(.9,.07,1.15,N,O,.52,B-v*.36).box(.6,.1,.36,16448250,O,.52,B+v*.74).box(1,.75,.06,13620182,O,0,B+v*1),d.lie.push({x:O,z:B,yaw:v>0?Cn:yn,pose:"lie",bed:.52}),S.push({x:O+D*.42,z:B-v*.2,yaw:D>0?Ci:ks,pose:"sit",seat:.56}),[O,B]=p(I+D*.76,g-.32),n.box(.42,.55,.42,12163698,O,0,B).cyl(.05,.07,.15,11887930,O,.55,B,6),i.push([O,.8,B]),[O,B]=p(b?I+D*1.6:2.42,g-.75),y.push(Po(n,O,B,(v>0?Cn:yn)+D*v*.4,A?Mt(f,a,.2):f))}d.sit.push(...y,...S);let T,M;b&&([T,M]=p(_/2,g-1.05),n.box(.03,1.9,2.1,13624298,T,.05,M).box(.04,.04,2.1,li,T,1.95,M)),o&&([T,M]=p(b?2.15:2.5,.62),n.box(.04,1,1.15,12575726,T-.55,0,M).box(.5,.4,.36,oi,T+.15,0,M-v*.25).box(.5,.02,.5,8369096,T,.004,M+v*.2).box(.04,.04,.5,li,T+.45,.8,M)),(!o||b)&&([T,M]=p(b?_-.5:2.72,.62),n.box(.5,1.9,.95,14273976,T,0,M)),[T,M]=p(b?_/2:1.55,g-2),n.box(1.3,.02,.9,Mt(12166284,a,.12),T,.005,M),d.stand=(b?[p(2.3,1.45),p(_-2.3,1.45),p(_/2,1.1)]:[p(1.6,1.35),p(1.95,2)]).map(([A,I])=>({x:A,z:I,yaw:v>0?yn:Cn,pose:"stand"}));const w=p(b?_/2:1.7,1.55);d.fall={x:w[0],z:w[1]}}else if(s==="dining-room"){for(const m of[e.x0+1.4,e.x1-1.4]){Xr(n,m,u+.35,1.7,.85),n.box(.5,.012,.34,ht(a,[12597547,3106483,15921126]),m,.775,u+.35);for(const v of[-.45,.45])d.sit.push(Dn(n,m+v,u+.35-.72,yn,10123861),Dn(n,m+v,u+.35+.72,Cn,10123861));if(c){for(const v of[-.45,.45])for(const x of[-1,1])c.cyl(.12,.1,.02,16448250,m+v,.775,u+.35+x*.24,12).cyl(.07,.06,.02,ht(a,[14723163,12611642,10469226]),m+v,.795,u+.35+x*.24,8).cyl(.03,.025,.1,14412530,m+v+.18,.775,u+.35+x*.2,6);c.cyl(.06,.05,.2,14412530,m-.1,.775,u+.35,8).box(.24,.07,.16,13215339,m+.15,.775,u+.35)}}c&&c.box(.9,.82,.5,li,e.x1-1.4,0,e.z0+.45).box(.5,.25,.3,15328472,e.x1-1.4,.82,e.z0+.45),n.box(1.6,.85,.42,8018492,h,0,e.z1-.28),es(n,e.x0+.4,e.z1-.4,1.3),es(n,e.x1-.4,e.z0+.4,1.1),d.stand=[{x:h,z:e.z0+.9,yaw:yn,pose:"stand"},{x:h+.5,z:e.z0+1.2,yaw:yn,pose:"stand"}],d.fall={x:h,z:e.z0+1.3}}else if(s==="nursing-station")n.box(2.2,.74,.7,14341576,e.x0+1.4,0,e.z0+.46).box(.62,.4,.05,1447964,e.x0+1.4,.86,e.z0+.3).box(.08,.12,.08,1447964,e.x0+1.4,.74,e.z0+.3).box(.42,.02,.15,3159098,e.x0+1.4,.74,e.z0+.56),r.push({x:e.x0+1.4,y:1.06,z:e.z0+.335,ry:yn,w:.56,h:.34,room:s}),d.sit.push(Dn(n,e.x0+1.4,e.z0+1.2,Cn,3159098)),n.box(.5,1.8,1,15132906,e.x1-.32,0,e.z0+2.2).box(.5,.85,.42,16052974,e.x0+.4,0,e.z1-.9).box(.1,.1,.02,12597547,e.x0+.4,.9,e.z1-.9),d.stand=[{x:e.x0+1.5,z:e.z1-.9,yaw:Cn,pose:"stand"}];else if(s==="shared-bathroom"){for(const m of[0,1]){const v=e.x0+.7+m*1.2;n.box(.5,.4,.38,oi,v,0,e.z1-.4).box(.42,.75,.2,oi,v,0,e.z1-.14).box(.04,1,1.2,13621726,v+.58,0,e.z1-.6).box(.04,.04,.5,li,v-.4,.8,e.z1-.5)}n.box(.5,.82,1.3,oi,e.x1-.3,0,u).box(.34,.04,.5,14673642,e.x1-.3,.82,u-.3).box(.34,.04,.5,14673642,e.x1-.3,.82,u+.3),d.stand=[{x:e.x0+1.5,z:e.z0+1.2,yaw:yn,pose:"stand"},{x:e.x0+2.2,z:e.z0+1.7,yaw:Ci,pose:"stand"}],d.fall={x:e.x0+1.5,z:e.z0+1.4}}else if(s==="corridor"){for(const m of t.walls)if(!m.outer&&Math.abs(m.z0-m.z1)<.01&&(Math.abs(m.z0-e.z0)<.01||Math.abs(m.z0-e.z1)<.01)&&m.x1-m.x0>1){const v=m.z0+(Math.abs(m.z0-e.z0)<.01?.1:-.1);n.box(m.x1-m.x0-.3,.05,.05,10123861,(m.x0+m.x1)/2,.85,v)}es(n,e.x1-.4,u+.4,1.2),n.box(1.2,.42,.4,10123861,e.x0+4.6,0,e.z1-.26),d.sit.push({x:e.x0+4.6,z:e.z1-.3,yaw:Cn,pose:"sit",seat:.5}),d.stand=[-5,-2.2,1.2,4.2,6.4].map((m,v)=>({x:m,z:u+(v%2?.22:-.22),yaw:v%2?ks:Ci,pose:"stand"})),d.fall={x:h-1,z:u}}return d}const PS={"living-room":["parquet",1.4,16777215],bedroom:["parquet",1.4,15917772],kitchen:["tilefloor",1.2,16774886],bathroom:["tilefloor",.9,15135479],hall:["tilefloor",1.2,15327184],corridor:["tilefloor",1.6,15722972],"dining-room":["parquet",1.6,16773336],"nursing-station":["tilefloor",1.2,15003378],"shared-bathroom":["tilefloor",.9,15135479]},kd=15131094,Bd=6333946,DS=new ir(.62,2.1,20,1,!0),LS=new Rh(.3,.022,6,36),IS=new En(.14,.14,.06,14),NS=new on(.24,.155,.02);class Oh{constructor(e,t,n,i){z(this,"group",new gt);z(this,"people",new gt);z(this,"layout");z(this,"figures",[]);z(this,"devices",[]);z(this,"places",new Map);z(this,"last",[]);z(this,"nextWander",[]);z(this,"lampMesh");z(this,"screens",[]);z(this,"light");z(this,"pools",[]);z(this,"meal",null);z(this,"sleeping",new Set);z(this,"rnd");z(this,"state");z(this,"wayOut",[]);z(this,"open",!1);var x,p;this.state=e,this.rnd=Wt(e.site);const r=this.layout=new TS(e.plan.rooms,t),a=new et("inside"),o=[],l=[],c=e.kind==="carehome",h=new et;for(const[g,_]of r.rooms){const[b,y,S]=PS[g]??["parquet",1.4,/^room-/.test(g)?16181974:16777215],T=St(_.x1-_.x0,_.z1-_.z0,n[b],y,(_.x0+_.x1)/2,.002,(_.z0+_.z1)/2,{colour:S,roughness:b==="tilefloor"?.5:.75});T.userData={site:e.site,room:g},this.group.add(T);const M=e.devices.filter(w=>w.room===g&&w.kind==="radar").length;if(this.places.set(g,CS(g,_,r,a,o,l,this.rnd,M>1,c?e.people.filter(w=>w.home===g).length:1,c?h:void 0)),c){const w=new Ke(new rn((_.x1-_.x0)*1.15,(_.z1-_.z0)*1.15),new Lt({map:n.soft,color:16765066,transparent:!0,opacity:0,blending:xi,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.position.set((_.x0+_.x1)/2,.03,(_.z0+_.z1)/2),w.visible=!1,this.pools.push({mesh:w,room:g}),this.group.add(w)}}h.empty()||(this.meal=h.build({roughness:.5}),this.meal.visible=!1,this.group.add(this.meal)),a.on("plaster");for(const g of r.walls){if(g.outer&&!i.outerWalls)continue;const _=g.outer?.9:1.05,b=g.outer?.2:.12,y=g.outer?15328472:16184300;a.box(Math.abs(g.x1-g.x0)+(g.x0===g.x1?b:0),_,Math.abs(g.z1-g.z0)+(g.z0===g.z1?b:0),y,(g.x0+g.x1)/2,0,(g.z0+g.z1)/2),a.box(Math.abs(g.x1-g.x0)+(g.x0===g.x1?b+.02:0),.03,Math.abs(g.z1-g.z0)+(g.z0===g.z1?b+.02:0),13617339,(g.x0+g.x1)/2,_,(g.z0+g.z1)/2)}a.on();for(const g of r.doors)a.box(g.flat?g.w:.14,.012,g.flat?.14:g.w,10128500,g.x,.003,g.z);const u=new ns(.035,8,6),d=new Map;for(const g of e.plan.rooms)for(const _ of g.doors??[]){const b=_.x*t-r.w/2,y=_.y*t-r.d/2,S=[...r.doors,r.entrance].find(T=>Math.hypot(T.x-b,T.z-y)<.05);_.pir&&S&&d.set(_.pir,S)}for(const g of e.devices){const _=e.plan.positions[g.device],b=g.kind==="pir"?d.get(g.device):void 0,y=g.kind==="companion"&&!_?(x=e.carried)==null?void 0:x[g.device]:void 0;if(!_&&!b&&y===void 0)continue;const S=b?b.x:_?_.x*t-r.w/2:0,T=b?b.z:_?_.y*t-r.d/2:0,M=new Ke(u,new Lt({color:3526783})),w={id:g.device,kind:g.kind,room:g.room,at:new F(S,0,T),led:M};if(b){const A=b.flat,I=b.w/2+.04,D=2.1;for(const O of[-1,1])a.box(A?.05:.08,D,A?.08:.05,kd,b.x+(A?O*I:0),0,b.z+(A?0:O*I));a.box(A?b.w+.13:.08,.07,A?.08:b.w+.13,kd,b.x,D,b.z).box(.16,.07,.1,16448250,b.x,D+.07,b.z).ball(.034,3159098,b.x,D+.14,b.z,0,1,.6,1),M.position.set(b.x+(A?.06:0),D+.12,b.z+(A?0:.06)),w.at.y=D+.1;const N=new Ke(DS,new Lt({color:16498468,transparent:!0,opacity:0,side:pn,depthWrite:!1,blending:xi}));N.position.set(b.x,D/2,b.z),N.visible=!1,w.cone=N,this.group.add(N)}else if(y!==void 0){const A=new gt,I=new Ke(new rn(.2,.125),new Lt({color:3003583}));I.position.z=.011,M.position.set(.1,.066,.011),M.scale.setScalar(.6),A.add(new Ke(NS,new lt({color:1776929,roughness:.4})),I,M),w.face=I,w.held=y,w.hold=A,w.at.y=.95,this.devices.push(w);continue}else if(g.kind==="radar"){a.cyl(.13,.13,.05,16448250,S,2.32,T,14).cyl(.012,.012,.5,12106946,S,2.37,T,4),M.position.set(S,2.3,T);const A=new Ke(new ir(1.85,2.3,28,1,!0),new Lt({color:5231045,transparent:!0,opacity:.045,side:pn,depthWrite:!1,blending:xi}));A.position.set(S,1.17,T),w.cone=A,w.at.y=2.32,this.group.add(A);const I=new Ke(LS,new Lt({color:Bd,transparent:!0,opacity:0,depthWrite:!1}));I.rotation.x=-Math.PI/2,I.position.set(S,2.29,T),I.visible=!1,w.ring=I,this.group.add(I);const D=new Ke(IS,new Lt({color:4937059}));D.position.set(S,2.345,T),D.visible=!1,w.off=D,this.group.add(D)}else if(g.kind==="wifi")a.box(.18,.11,.07,16448250,S,1.08,T).box(.012,.16,.012,3159098,S-.06,1.19,T).box(.012,.16,.012,3159098,S+.06,1.19,T),M.position.set(S,1.14,T+.04),w.at.y=1.15;else if(g.kind==="companion"){a.cyl(.26,.26,.04,10123861,S,.52,T,12).cyl(.04,.05,.52,10123861,S,0,T,6).beam(.3,.21,.025,1776929,S,.7,T,0,-.3,0);const A=new Ke(new rn(.26,.17),new Lt({color:3003583}));A.position.set(S,.705,T+.016),A.rotation.x=-.3,w.face=A,this.group.add(A),M.position.set(S+.12,.6,T+.06),w.at.y=.95}else M.position.set(S,1.1,T),w.at.y=1.1;this.devices.push(w),this.group.add(M)}const f=a.build({roughness:.85});f.userData={site:e.site},this.group.add(f);const m=new et;for(const[g,_,b]of o)m.cone(.14,.2,16773577,g,_-.1,b,8);this.lampMesh=m.build({cast:!1,material:new lt({vertexColors:!0,emissive:16762222,emissiveIntensity:0})}),this.group.add(this.lampMesh);for(const g of l){const _=new Ke(new rn(g.w,g.h),new Lt({color:724756}));_.position.set(g.x,g.y,g.z),_.rotation.y=g.ry,this.screens.push({mesh:_,room:g.room}),this.group.add(_)}this.light=new kf(16769712,0,22,1.4),this.light.position.set(0,c?5:3.4,0),this.group.add(this.light);let v=0;e.people.forEach((g,_)=>{const b=g.home==="carer"?c&&v++===0?oS:ap:g.home==="visitor"?Xc(Wt(`${e.site}:visitor`)):aS(Wt(`${e.site}:${_}`)),y=new lr(b);this.figures.push(y),this.people.add(y.group),this.last.push({room:"",posture:"",fallen:!1}),this.nextWander.push(0)});for(const g of this.devices)g.hold&&g.held!==void 0&&((p=this.figures[g.held])==null||p.group.add(g.hold));this.group.add(this.people),this.update(e,1,!0)}roomCentre(e){return this.layout.centre(e)}spotFor(e,t,n,i){const r=this.places.get(t),a=n==="floor"?"stand":n,o=r?a==="sit"?r.sit:a==="lie"?r.lie:r.stand:[];if(!r||!o.length){const h=this.layout.centre(t);return{x:h.x,z:h.z,yaw:0,pose:n==="sit"||n==="lie"?"stand":n}}const l=i.kind==="carehome"&&i.people[e].home===t,c=i.people.filter((h,u)=>u<e&&(l?h.home===t:h.room===t&&h.posture===i.people[e].posture)).length;return o[c%o.length]}update(e,t,n=!1){this.state=e;const i=n||!this.open;e.people.forEach((r,a)=>{const o=this.figures[a],l=this.last[a];if(!o)return;o.hurry=Math.min(t,AS);const c=r.posture==="away"?null:r.posture==="seated"?"sit":r.posture==="lying"?"lie":r.posture==="floor"?"floor":"stand";if(l.room===r.room&&l.posture===r.posture&&l.fallen===r.fallen&&!n)return;if(this.last[a]={room:r.room,posture:r.posture,fallen:r.fallen},!c){if(n||o.hidden){o.group.visible=!1;return}const f=this.layout.roomAt(o.x,o.z)??l.room,m=this.wayOut[this.wayOut.length-1]??this.outside();o.rise(),o.go([...this.layout.path(f,Ni),...this.wayOut.slice(0,-1)],{x:m.x,z:m.z,yaw:0,pose:"stand"},()=>{o.group.visible=!1});return}const h=this.places.get(r.room);if(r.fallen){const f=this.fallSpot(r)??(h==null?void 0:h.fall)??this.layout.centre(r.room),m=this.layout.roomAt(o.x,o.z),v=this.fallYaw(r.room,f),x=this.layout.rooms.get(r.room);if(i||o.hidden){o.group.visible=!0,o.put({x:f.x,z:f.z,yaw:v,pose:"stand"}),o.fall(x);return}o.hurry=1,o.go(m===r.room?[]:this.layout.path(m??l.room,r.room),{x:f.x,z:f.z,yaw:v,pose:"stand"},()=>o.fall(x));return}const u=this.spotFor(a,r.room,c,e);if(o.down&&o.rise(),n||i&&!o.hidden){o.group.visible=!0,o.put(u);return}if(o.hidden){o.group.visible=!0;const f=this.wayOut[this.wayOut.length-1]??this.outside();o.put({x:f.x,z:f.z,yaw:0,pose:"stand"}),o.go([...this.wayOut.slice(0,-1).reverse(),...this.layout.path(Ni,r.room)],u);return}const d=this.layout.roomAt(o.x,o.z)??l.room;o.go(d===r.room?[]:this.layout.path(d,r.room),u),this.nextWander[a]=Ln()+6e3+this.rnd()*6e3})}fallSpot(e){const t=this.layout.rooms.get(e.room);if(!e.at||!t)return null;const n=(i,r,a)=>Math.max(r+.4,Math.min(a-.4,i));return{x:n(t.x0+e.at.x,t.x0,t.x1),z:n(t.z0+e.at.y,t.z0,t.z1)}}fallYaw(e,t){const n=this.layout.rooms.get(e);return n?[[n.z1-t.z,0],[t.x-n.x0,-Math.PI/2],[t.z-n.z0,Math.PI],[n.x1-t.x,Math.PI/2]].sort((r,a)=>a[0]-r[0])[0][1]:0}outside(){const e=this.layout.entrance;return e.flat?{x:e.x,z:e.z+Math.sign(e.z)*.9}:{x:e.x+Math.sign(e.x)*.9,z:e.z}}beside(e){var o;const t=this.figures[e],n=this.layout.centre(((o=this.state.people[e])==null?void 0:o.room)??this.layout.hub),i=n.x-t.x,r=n.z-t.z,a=Math.hypot(i,r)||1;return{x:t.x+i/a*.75+.3,z:t.z+r/a*.75+.5,yaw:Math.atan2(-i,-r),pose:"stand"}}animate(e,t,n,i){var u;const r=Ln(),a=this.state;this.people.children.forEach((d,f)=>{var x;const m=this.figures[f],v=a.people[f];if(!(!m||!v)){if(v.posture==="standing"&&!v.fallen&&!m.walking&&!m.hidden&&r>this.nextWander[f]){this.nextWander[f]=r+(5e3+this.rnd()*7e3)/Math.max(1,Math.min(3,i/30));const p=((x=this.places.get(v.room))==null?void 0:x.stand)??[];p.length>1&&this.layout.roomAt(m.x,m.z)===v.room&&m.go([],p[Math.floor(this.rnd()*p.length)])}m.update(e,t)}}),this.lampMesh.material.emissiveIntensity=n>.4&&a.people.some(d=>d.posture!=="lying"&&d.posture!=="away")?3.2:0;for(const d of this.screens){const f=d.room==="nursing-station"||a.people.some(m=>m.room===d.room&&m.posture==="seated");d.mesh.material.color.setHSL(.58+.08*Math.sin(t*.7),.5,f?.42+.1*Math.sin(t*3.1):.03)}this.light.intensity=this.open?this.pools.length?10+12*n:12+32*n:0;for(const d of this.pools){const f=d.mesh.material,m=n>.3?n*(this.lit(d.room)?.5:d.room==="corridor"||d.room==="nursing-station"?.2:0):0;f.opacity+=(m-f.opacity)*Math.min(1,e*3),d.mesh.visible=f.opacity>.01}this.meal&&(this.meal.visible=a.people.filter(d=>d.room==="dining-room"&&d.posture==="seated").length>=2);const o=a.warning,l=!!o&&o.type==="fall",c=a.saying?this.speaker():void 0,h=a.standby??[];for(const d of this.devices){const f=a.down.includes(d.id)||!!((u=a.unheard)!=null&&u.includes(d.id)),m=l&&o.raised_by===d.id,v=!f&&h.includes(d.id),x=d.led.material;if(x.color.setHex(f?7041664:m?16726832:v?Bd:3526783),v&&x.color.multiplyScalar(.5+.5*Math.sin(t*1.7)**2),d.ring&&(d.ring.visible=v,d.ring.material.opacity=.3+.35*Math.sin(t*1.7)**2),d.off&&(d.off.visible=f),d.kind==="pir"&&d.cone){!f&&this.figures.some(g=>g.shown&&g.walking&&!g.hidden&&Math.hypot(g.x-d.at.x,g.z-d.at.z)<.55)&&(d.seen=r);const p=d.seen===void 0?0:Math.max(0,1-(r-d.seen)/1400);d.cone.material.opacity=.17*p,d.cone.visible=p>.01,p>0&&!f&&x.color.setHex(16498468)}else if(d.cone){!v&&this.sleeping.has(d.id)&&(d.seen=r);const p=d.cone.material,g=a.people.some(b=>b.room===d.room&&b.posture!=="away"),_=d.seen===void 0?0:Math.max(0,1-(r-d.seen)/1500);p.color.setHex(m?16726832:5231045),p.opacity=f||v?0:m?.16+.1*Math.sin(t*7):(g?.05+.015*Math.sin(t*2+d.at.x):.018)+.12*_}if(v?this.sleeping.add(d.id):this.sleeping.delete(d.id),d.face){const p=d.face.material,g=d===c;p.color.setHex(f?3159098:g?16498468:3003583),d.face.scale.setScalar(g?1+.12*Math.sin(t*9):1)}if(d.hold&&d.held!==void 0){const p=this.figures[d.held],g=d.hold,_=(p==null?void 0:p.pose)??"stand";g.visible=!!p&&p.shown&&!p.hidden,_==="lie"?(g.position.set(.5,.6,-.8),g.rotation.set(-Math.PI/2,0,0)):_==="floor"?(g.position.set(.55,.03,.5),g.rotation.set(-Math.PI/2,0,.4)):_==="sit"?(g.position.set(.04,.64,.3),g.rotation.set(-1.15,0,0)):(g.position.set(.2,.95,.25),g.rotation.set(-1,0,0)),p&&d.at.set(p.x,.95,p.z)}}}speaker(){var i,r;const e=((i=this.state.saying)==null?void 0:i.room)??((r=this.state.warning)==null?void 0:r.room)??null,t=this.devices.filter(a=>a.kind==="companion"),n=a=>{var o;return a.held!==void 0?(o=this.state.people[a.held])==null?void 0:o.room:a.room};return t.find(a=>e!==null&&n(a)===e)??t.find(a=>a.held!==void 0)??(this.state.kind==="carehome"?void 0:t[0])}speech(e){const t=this.speaker();if(!t)return null;if(t.held===void 0)return this.group.localToWorld(e.set(t.at.x,1.5,t.at.z));const n=this.figures[t.held];return!n||n.hidden?null:n.group.localToWorld(e.set(0,n.pose==="lie"||n.pose==="floor"?1:2,n.pose==="lie"?-.8:n.pose==="floor"?.6:0))}beds(){const e=[];for(const[t,n]of this.places){const i=this.state.people.filter(r=>r.home===t).length;/^room-/.test(t)&&n.lie.slice(0,i).forEach((r,a)=>e.push({room:t,bed:"AB"[a]??String(a+1),at:{x:r.x,z:r.z}}))}return e}lit(e){return this.state.people.some(t=>t.room===e&&t.posture!=="lying"&&t.posture!=="away")}}const zh=[15158332,15844367,15105712,16777215,10181046,16747069],US=()=>ar(new lt({color:10470360,roughness:.15,metalness:.25,emissive:16762222,emissiveIntensity:0,transparent:!0})),Do=s=>{const e=new Ke(new rn(s.w,s.h),US());return e.position.set(s.x,s.y,s.z),e.rotation.y=s.ry,e},Lo=(s,e,t,n,i,r,a)=>{const o=new Ke(new on(s,e,t),new Lt({visible:!1}));return o.position.set(n,i,r),o.userData=a,o};function Zs(s,e){const t=s.material;t.transparent=e<.999,t.opacity=e,t.depthWrite=e>.5,s.visible=e>.02,s.castShadow=e>.6}function Hn(s,e,t,n,i,r,a=0,o=.75){const l=Math.hypot(i-t,r-n),c=Math.max(1,Math.round(l/1.2));for(let h=0;h<c;h++){const u=(h+.5)/c;s.box(Math.abs(i-t)/c+.5,o*(.92+e()*.16),Math.abs(r-n)/c+.5,Mt(4160826,e,.07),t+(i-t)*u,a,n+(r-n)*u)}}function $s(s,e,t,n,i,r=!1,a=1){const o=(r?1.2:2)*a,l=(r?.95:1.5)*a,c=Mt(ht(t,[5214014,4160826,6266954]),t,.08);if(s.on("bark").cyl(.12*a,.18*a,o,7032618,n,0,i,6).on(),e.ball(l,c,n,o+l*.55,i,1,1,.9,1).ball(l*.7,Mt(c,t,.1),n+l*.5,o+l*.35,i+l*.25,1).ball(l*.64,Mt(c,t,.1),n-l*.5,o+l*.8,i-l*.3,1),r)for(let h=0;h<7;h++)e.ball(.09,16747546,n+(t()-.5)*1.5,o+.3+t()*.9,i+(t()-.5)*1.5,0)}class dp{constructor(e,t,n){z(this,"vehicle");z(this,"state","away");z(this,"t0",0);this.stop=t,this.vehicle=Fh(n),this.vehicle.group.visible=!1,this.vehicle.group.rotation.y=Math.PI,e.add(this.vehicle.group)}come(e){(this.state==="away"||this.state==="leaving")&&(this.state="coming",this.t0=e,this.vehicle.group.visible=!0)}leave(e){(this.state==="here"||this.state==="coming")&&(this.state="leaving",this.t0=e)}update(e,t){const n=Math.min(1,(e-this.t0)/2200),i=this.vehicle.group;this.state==="coming"?(i.position.set(this.stop.x+62*(1-wn(n))**1.6,this.stop.y,this.stop.z),n>=1&&(this.state="here")):this.state==="leaving"&&(i.position.set(this.stop.x-70*n*n,this.stop.y,this.stop.z),n>=1&&(this.state="away",i.visible=!1)),this.vehicle.lights.emissiveIntensity=i.visible?1.2+t*3:0}}class fp{constructor(e,t,n,i,r){z(this,"state","none");z(this,"going",!1);this.run=e,this.home=t,this.walker=n,this.way=i,this.outer=r,n.group.visible=!1,r&&(r.figure.group.visible=!1)}set(e,t){e!==this.going&&(this.going=e,e?(this.run.come(t),this.state="driving"):this.state==="driving"?(this.run.leave(t),this.state="none"):this.state==="in"&&this.walkOut(t))}target(){const e=Math.max(0,this.home.state.people.findIndex(n=>n.fallen)),t=this.home.state.people[e];return{room:t&&t.posture!=="away"?t.room:this.home.layout.hub,index:e}}walkIn(){const e=this.home.layout,{room:t,index:n}=this.target(),i=()=>{const o=this.outer?this.home.outside():this.way[0];this.walker.group.visible=!0,this.walker.put({x:o.x,z:o.z,yaw:0,pose:"stand"});const l=this.home.state.people[n],c=l&&l.posture!=="away"?this.home.beside(n):{...e.centre(e.hub),yaw:0,pose:"stand"};this.walker.go([...this.outer?[]:this.way.slice(1),...e.path(Ni,t)],c)};if(this.state="in",!this.outer)return i();const r=this.outer,a=r.way[r.way.length-1];r.figure.group.visible=!0,r.figure.put({x:r.way[0].x,z:r.way[0].z,yaw:0,pose:"stand"}),r.figure.go(r.way.slice(1,-1),{x:a.x,z:a.z,yaw:0,pose:"stand"},()=>{r.figure.group.visible=!1,i()})}walkOut(e){const t=this.home.layout,n=t.roomAt(this.walker.x,this.walker.z)??t.hub,i=this.home.outside();this.state="out";const r=()=>{this.run.leave(Ln()),this.state="none"};if(!this.outer){const l=[...this.way].reverse();this.walker.go([...t.path(n,Ni),...l.slice(0,-1)],{...l[l.length-1],yaw:0,pose:"stand"},()=>{this.walker.group.visible=!1,r()});return}const a=this.outer,o=[...a.way].reverse();this.walker.go(t.path(n,Ni),{x:i.x,z:i.z,yaw:0,pose:"stand"},()=>{this.walker.group.visible=!1,a.figure.group.visible=!0,a.figure.put({x:o[0].x,z:o[0].z,yaw:0,pose:"stand"}),a.figure.go(o.slice(1,-1),{...o[o.length-1],yaw:0,pose:"stand"},()=>{a.figure.group.visible=!1,r()})})}update(e,t,n,i,r){this.run.update(n,i),this.state==="driving"&&this.run.state==="here"&&this.walkIn(),this.walker.hurry=r,this.walker.update(e,t),this.outer&&(this.outer.figure.hurry=r,this.outer.figure.update(e,t))}}class FS{constructor(e,t,n){z(this,"group",new gt);z(this,"home");z(this,"site");z(this,"want",!1);z(this,"open",0);z(this,"hits",[]);z(this,"high");z(this,"roof");z(this,"panes",[]);z(this,"leaf",new gt);z(this,"doorAt");z(this,"visit");z(this,"state");z(this,"w");z(this,"d");z(this,"top");z(this,"helper");this.site=e.site,this.state=e,this.group.position.set(t.x,ye,t.z);const i=Wt(e.site),r=this.home=new Oh(e,lp,n,{outerWalls:!1}),a=r.layout,o=this.w=a.w,l=this.d=a.d,c=t.lot.x0-t.x,h=t.lot.x1-t.x,u=t.lot.z0-t.z,d=t.lot.z1-t.z,f=new et,m=new et,v=new et,x=new et("leaves"),p={wall:Mt(ht(i,cp),i,.015),trim:ht(i,hp),door:ht(i,up),rise:1.75,chimney:[a.centre("kitchen").x,a.centre("kitchen").z*.6],ridge:"x"},g=[],_=[],b=.001,y=a.entrance;for(const[ee,ge]of a.rooms){const pe=ge.x1-ge.x0,Fe=ge.z1-ge.z0,Se=(Oe,ne,oe)=>{oe>=1.9&&(g.push({side:Oe,at:ne,kind:"window",w:Math.min(1.35,oe-1)}),_.push(ee))};Math.abs(ge.z0+l/2)<b&&Se("n",(ge.x0+ge.x1)/2,pe),Math.abs(ge.z1-l/2)<b&&Se("s",(ge.x0+ge.x1)/2,pe),Math.abs(ge.x0+o/2)<b&&!(ee===a.hub&&y.x<0)&&Se("w",(ge.z0+ge.z1)/2,Fe),Math.abs(ge.x1-o/2)<b&&!(ee===a.hub&&y.x>0)&&Se("e",(ge.z0+ge.z1)/2,Fe)}const S=y.flat?y.z>0?"s":"n":y.x>0?"e":"w";g.push({side:S,at:y.flat?y.x:y.z,kind:"door"});const T=la({low:f,high:m,roof:v},0,0,o,l,p,g,{leaf:!1});this.top=Ot+uo+p.rise;const M=r.outside(),w=M.x+(S==="e"?.35:S==="w"?-.35:0),A=M.z;f.box(1.7,Ot,1.7,Ut,w-(S==="e"?.1:-.1),0,A);for(const ee of[-.7,.7])f.box(.1,2.25,.1,p.trim,w+(S==="e"?.6:-.6),Ot,A+ee);m.box(1.9,.1,1.9,p.wall,w,Ot+2.25,A),v.box(2.05,.06,2.05,16777215,w,Ot+2.35,A,0,[1,1]),this.group.add(St(1.15,d-A-.6,n.sand,1.6,w,.02,(A+.6+d)/2,{colour:15129798}));for(const ee of[-.75,.75])f.box(.24,1.05,.24,p.wall,w+ee,0,d-.12).box(.3,.06,.3,p.trim,w+ee,1.05,d-.12);f.box(.3,.26,.2,p.trim,w+1.05,.9,d-.12).box(.06,.9,.06,Pn,w+1.05,0,d-.12);const I=i()<.5?-1:1;r.wayOut=[{x:w,z:A+.3},{x:w,z:d+1},{x:w+I*15,z:d+1}],Hn(x,i,c+.3,d-.3,w-1,d-.3),Hn(x,i,w+1.3,d-.3,h-.3,d-.3),Hn(x,i,c+.3,u+.3,c+.3,d-.3),Hn(x,i,c+.3,u+.3,h-.3,u+.3),Hn(x,i,h-.3,u+.3,h-.3,d-.3);const D=u+1.5>=-l/2-1.4,N=i()<.5;D?$s(f,x,i,h-1.15,u+1.2,N,.6):$s(f,x,i,c+1.6,u+1.5,N,.9),D||$s(f,x,i,h-2.4,u+1.5,i()<.5,.85);const O=l/2+.5,B=d-O-.9;if(B>1.6){for(let Se=0;Se<16;Se++)x.ball(.16+i()*.07,ht(i,zh),-o/2+.6+i()*(o*.55),.22,O+.25+i()*.4,0);x.box(o*.6,.14,.8,5214014,-o/2+.5+o*.3,0,O+.45);const ee=-o/2+1.6,ge=O+.9+B*.55;for(const Se of[-1.4,1.4])f.box(.06,1.7,.06,14277081,ee+Se,0,ge).box(.5,.05,.05,14277081,ee+Se,1.65,ge);f.box(2.8,.015,.015,15921906,ee,1.66,ge);for(let Se=0;Se<5;Se++)f.box(.42,.5+i()*.25,.02,ht(i,[16777215,12597547,3106483,15844367,10470360,15105712]),ee-1.1+Se*.55,1.1-i()*.1,ge);const pe=o/2-3.2,Fe=O+.8+B*.5;f.box(2.6,.08,1.6,7032627,pe,0,Fe);for(let Se=0;Se<3;Se++)for(let Oe=0;Oe<5;Oe++)x.ball(.13,Se===1?8367704:5214014,pe-1+Oe*.5,.16,Fe-.5+Se*.5,0,1,.8,1)}const Y=f.build();Y.userData={site:e.site},this.group.add(Y,x.build({roughness:1})),this.high=m.build(),this.group.add(this.high),this.roof=v.build({material:ms(n.roof,{roughness:.88})}),this.group.add(this.roof),T.windows.forEach((ee,ge)=>{const pe=Do(ee);this.panes.push({mesh:pe,room:_[ge]}),this.group.add(pe)});const W=T.doors[0];this.doorAt={x:W.x,z:W.z};const se=new Ke(new on(W.side==="e"||W.side==="w"?.06:W.w,W.h,W.side==="e"||W.side==="w"?W.w:.06),new lt({color:p.door,roughness:.6}));W.side==="e"||W.side==="w"?(this.leaf.position.set(W.x,W.y,W.z-W.w/2),se.position.set(0,W.h/2,W.w/2)):(this.leaf.position.set(W.x-W.w/2,W.y,W.z),se.position.set(W.w/2,W.h/2,0)),se.castShadow=!0,this.leaf.add(se),this.group.add(this.leaf),r.group.position.y=Ot+.004,this.group.add(r.group),this.hits.push(Lo(o+.6,uo+p.rise,l+.6,0,(uo+p.rise)/2,0,{site:e.site})),this.group.add(this.hits[0]),r.group.traverse(ee=>{ee.userData.room&&this.hits.push(ee)});const j=new dp(this.group,new F(w+1.6,.012-ye,d+3.5),ht(i,[2450411,12131356,4674921,15921126,1013358])),te=new lr(Nh);r.people.add(te.group),this.visit=new fp(j,r,te,[{x:w+1,z:d+2.3},{x:w,z:d+1},{x:w,z:A+.3}]),this.helper=te}labelAt(e){return e.set(0,this.top+1.5-this.open*(this.top-1.6),-this.open*(this.d/2+.6)).add(this.group.position)}speechAt(e){return this.home.speech(e)??this.labelAt(e)}shot(){return{target:new F(this.group.position.x+.6,ye+1,this.group.position.z+.6),distance:27,polar:.62,azimuth:.22}}update(e,t){this.state=e,this.home.update(e,t);const n=e.warning;this.visit.set(!!n&&n.state==="acknowledged"&&n.type!=="device_offline",Ln())}animate(e,t,n,i){const r=Ln(),a=this.open=an(this.open,this.want?1:0,5,e),o=1+Math.min(2.5,i/60);Zs(this.high,1-a),Zs(this.roof,1-a),this.roof.position.y=a*2.4;for(const h of this.panes){const u=h.mesh.material;u.opacity=1-a,h.mesh.visible=a<.98,u.emissiveIntensity=an(u.emissiveIntensity,n>.35&&this.home.lit(h.room)?2.8:0,3,e)}this.home.open=a>.05,this.home.group.visible=!0;const l=h=>Math.abs(h.x)<this.w/2+.1&&Math.abs(h.z)<this.d/2+.1;let c=this.state.door_open;for(const h of[...this.home.figures,this.helper]){const u=l(h)||Math.abs(h.x-this.home.outside().x)<.9&&Math.abs(h.z-this.home.outside().z)<.9;h.shown=a>.05||!l(h),h.group.position.y=an(h.group.position.y,u?0:-Ot,12,e),!h.hidden&&Math.hypot(h.x-this.doorAt.x,h.z-this.doorAt.z)<1.25&&(c=!0)}for(const h of this.home.group.children)h!==this.home.people&&(h.visible=a>.02);this.leaf.rotation.y=an(this.leaf.rotation.y,c?1.45:0,7,e),this.home.animate(e,t,n,i),this.visit.update(e,t,r,n,o)}}class OS{constructor(e,t,n,i){z(this,"group",new gt);z(this,"flats",[]);z(this,"top");z(this,"glassA");z(this,"glassB");z(this,"stair");z(this,"run");z(this,"helper",new lr(Nh));z(this,"busy",!1);z(this,"way");this.address=e,this.group.position.set(t.x,ye,t.z);const r=Wt(e),a=dt.w*2+dt.core,o=dt.d,l=dt.floor,c=Math.max(t.floors,...n.map(A=>A.floor+1)),h=.3,u=c*l,d=new et,f=new et("leaves"),m=new et,v=new et,x=new et,p=new et,g=t.look==="tiles"?15921126:15852484,_=t.look==="tiles"?3106483:10246716,b=2303531,y=new Map(n.map(A=>[`${A.floor}:${A.side}`,A]));this.top=h+u+.9;const S=t.lot.z1-t.z;this.run=new dp(this.group,new F(2.5,.012-ye,S+3.5),ht(r,[2450411,12131356,4674921,1013358])),this.group.add(this.helper.group),this.helper.group.visible=!1,this.way=[{x:1.6,z:S+2.3},{x:0,z:S+1},{x:0,z:o/2+.6}],d.box(a+.8,.12,o+.8,Ut,0,0,0);for(let A=0;A<=c;A++)d.box(a+.16,.24,o+.16,A===c?_:13618112,0,h+A*l-.24,0);for(const A of[-2.6/2,dt.core/2,-a/2+.11,a/2-.11])d.box(.22,u,o,g,A,h,0);d.box(a,u,.22,g,0,h,-o/2+.11),d.box(dt.core,u,.22,g,0,h,o/2-.11).box(1.5,2.2,.1,3817287,0,h,o/2+.02).box(2.4,.12,1.3,_,0,h+2.35,o/2+.6).box(2,.14,1,Ut,0,.1,o/2+.5),p.box(1,u-3.2,.06,10470360,0,h+2.9,o/2+.03);const T=A=>(A==="left"?-1:1)*(dt.core/2+dt.w/2);for(let A=0;A<c;A++)for(const I of["left","right"]){const D=h+A*l,N=T(I),O=y.get(`${A}:${I}`),B=I==="left"?1:-1,Y=r()<.5?v:x;for(const se of[-2.55,3.15]){const j=N+se*B;d.box(1.5,1.4,.08,_,j,D+.85,-o/2-.01),O||Y.box(1.3,1.2,.06,10470360,j,D+.95,-o/2-.05)}d.box(3.4,.12,1.1,13618112,N-2.55*B,D-.02,-o/2-.55).box(3.4,.9,.05,t.look==="tiles"?2830134:_,N-2.55*B,D+.1,-o/2-1.08);for(const se of[-1.7,1.7])d.box(.05,.9,1.1,t.look==="tiles"?2830134:_,N-2.55*B+se,D+.1,-o/2-.55);t.look==="tiles"&&m.box(dt.w,l-.28,.05,16777215,N,D+.02,-o/2-.02,0,[dt.w/1.2,(l-.28)/1.2]);const W=I==="left"?-a/2-.01:a/2+.01;if(d.box(.08,1.4,1.5,_,W,D+.85,0),Y.box(.06,1.2,1.3,10470360,W+(I==="left"?-.04:.04),D+.95,0),O){for(const[j,te,ee,ge,pe,Fe]of[[dt.w-.3,l-.3,.05,N,D,-o/2+.25],[dt.w-.3,.03,o-.4,N,D,0],[dt.w-.3,.03,o-.4,N,D+l-.3,0],[.05,l-.3,o-.4,N-dt.w/2+.16,D,0],[.05,l-.3,o-.4,N+dt.w/2-.16,D,0]])d.box(j,te,ee,b,ge,pe,Fe);const se=new zS(O.site,this,N,D,I,g,_,t.look==="tiles"?i:null,i);this.flats.push(se),this.group.add(se.panel,se.drawer,se.frame,...se.northPanes,se.hits[0])}else{d.box(dt.w,l-.24,.22,g,N,D,o/2-.11);for(const se of[-2.55,3.15]){const j=N+se*B;d.box(1.5,1.4,.08,_,j,D+.85,o/2+.01),Y.box(1.3,1.2,.06,10470360,j,D+.95,o/2+.05)}t.look==="tiles"&&m.box(dt.w,l-.28,.05,16777215,N,D+.02,o/2+.02,0,[dt.w/1.2,(l-.28)/1.2])}}const M=h+u;for(const[A,I,D,N]of[[a+.2,.2,0,-o/2],[a+.2,.2,0,o/2],[.2,o,-a/2,0],[.2,o,a/2,0]])d.box(A,.7,I,g,D,M,N);d.box(dt.core+.4,2.3,3.2,g,0,M,.6).box(dt.core+.8,.14,3.6,_,0,M+2.3,.6),d.cyl(.7,.7,1.3,14672870,-8.5,M+.3,-1.4,10).cyl(.7,.7,1.3,14672870,9.2,M+.3,1.2,10);for(let A=0;A<4;A++)d.beam(1.5,.06,1,2046559,-5.2+A*1.7,M+.5,1.4,0,.5,0);for(let A=0;A<3;A++)d.beam(1.5,.06,1,2046559,4.2+A*1.7,M+.5,-1.2,0,.5,0);d.box(.05,2.6,.05,Pn,6,M+2.4,.4);for(const A of[-1,1])d.box(.05,1.5,.05,14277081,-9.6+(A+1)*1.6,M,1.6);for(let A=0;A<5;A++)d.box(.44,.5+r()*.2,.02,ht(r,[16777215,12597547,3106483,15844367,15105712]),-9.2+A*.6,M+.85,1.6);this.group.add(St(3.2,S-o/2-.9,i.calcada,3,0,.02,(o/2+.9+S)/2));for(const A of[-1,1]){if($s(d,f,r,A*(a/2+.9),o/2+3.4,!1,1.1),y.has(`0:${A<0?"left":"right"}`)){this.group.add(St(dt.w,o+.9,i.pavement,3,A*(dt.core/2+dt.w/2),.018,o/2+(o+.9)/2+.2,{colour:15327956}));continue}Hn(f,r,A*2.2,o/2+1.2,A*2.2,S-.5,0,.5),Hn(f,r,A*2.4,S-.3,A*a/2,S-.3,0,.5);for(let I=0;I<12;I++)f.ball(.16,ht(r,zh),A*(3+r()*8),.2,S-.9+r()*.5,0);d.box(1.6,.07,.46,On,A*4.2,.42,S-1.3)}this.group.add(d.build(),f.build({roughness:1})),m.empty()||this.group.add(m.build({material:ms(i.azulejo,{roughness:.35})}));const w=()=>ar(new lt({vertexColors:!0,roughness:.15,metalness:.25,emissive:16762222,emissiveIntensity:0}));this.glassA=v.build({cast:!1,material:w()}),this.glassB=x.build({cast:!1,material:w()}),this.stair=p.build({cast:!1,material:w()}),this.group.add(this.glassA,this.glassB,this.stair)}claim(){return this.busy?!1:(this.busy=!0,!0)}release(){this.busy=!1}animate(e,t,n,i){const r=(c,h)=>c<h?i>=c&&i<h:i>=c||i<h,a=this.glassA.material,o=this.glassB.material,l=this.stair.material;a.emissiveIntensity=an(a.emissiveIntensity,n>.35&&(r(18.3,23)||r(6.3,7.5))?2.5:0,1.5,e),o.emissiveIntensity=an(o.emissiveIntensity,n>.35&&r(19.5,.4)?2.3:0,1.5,e),l.emissiveIntensity=an(l.emissiveIntensity,n>.35?1.6:0,1.5,e)}}class zS{constructor(e,t,n,i,r,a,o,l,c){z(this,"site");z(this,"home");z(this,"panel",new gt);z(this,"drawer",new gt);z(this,"frame");z(this,"northPanes",[]);z(this,"want",!1);z(this,"open",0);z(this,"hits",[]);z(this,"wallMesh");z(this,"panes",[]);z(this,"slab");z(this,"visit");z(this,"inner",new lr(Nh));z(this,"state");z(this,"mine",!1);this.block=t,this.cx=n,this.y=i,this.site=e.site,this.state=e;const h=dt.d,u=dt.floor,d=r==="left"?1:-1,f=this.home=new Oh(e,lp,c,{outerWalls:!0}),m=new et;m.box(dt.w,u-.24,.22,a,0,0,0);const v=["bedroom","bathroom"],x=["living-room","kitchen"],p=[-2.55,3.15];for(const _ of p)m.box(1.5,1.4,.08,o,_*d,.85,.12);if(this.wallMesh=m.build({material:l?new lt({map:l.azulejo,roughness:.35}):void 0}),l){const _=this.wallMesh.material.map.clone();_.needsUpdate=!0,_.repeat.set(dt.w/1.2,2.3),this.wallMesh.material.map=_}this.panel.add(this.wallMesh),this.panel.position.set(n,i,h/2-.11),p.forEach((_,b)=>{const y=Do({x:_*d,y:1.55,z:.17,ry:0,w:1.3,h:1.2});this.panes.push({mesh:y,room:v[b]}),this.panel.add(y)}),p.forEach((_,b)=>{const y=Do({x:n+_*d,y:i+1.55,z:-h/2-.06,ry:Math.PI,w:1.3,h:1.2});this.panes.push({mesh:y,room:x[b]}),this.northPanes.push(y)}),this.drawer.position.set(n,i+.01,0),this.drawer.scale.x=d,this.slab=new Ke(new on(dt.w,.14,h),new lt({color:13618112,roughness:.9})),this.slab.position.y=-.07,this.slab.castShadow=!0,this.slab.receiveShadow=!0,this.drawer.add(this.slab,f.group);const g=new et;for(const[_,b,y,S]of[[dt.w,.1,0,0],[dt.w,.1,0,u-.34],[.1,u-.24,-11.4/2+.05,0],[.1,u-.24,dt.w/2-.05,0]])g.box(_,b,.1,16777215,y,S,0);this.frame=g.build({cast:!1,receive:!1,material:new Lt({color:3718648,transparent:!0,opacity:0})}),this.frame.position.set(n,i,h/2+.02),this.hits.push(Lo(dt.w,u-.3,.6,n,i+u/2,h/2+.1,{site:e.site})),f.group.traverse(_=>{_.userData.room&&this.hits.push(_)}),f.people.add(this.inner.group),this.visit=new fp(t.run,f,this.inner,[],{figure:t.helper,way:t.way})}world(e,t,n,i){return this.drawer.localToWorld(i.set(e,t,n))}labelAt(e){return this.open>.3?this.world(0,1.6,-6.9/2-.4,e):e.set(this.cx,this.y+dt.floor/2+.2,dt.d/2+.5).add(this.block.group.position)}speechAt(e){return(this.open>.3?this.home.speech(e):null)??this.labelAt(e)}shot(){return{target:new F(this.cx,this.y+.6,dt.d+.8).add(this.block.group.position),distance:27,polar:.56,azimuth:this.cx<0?.3:-.3}}update(e,t){this.state=e,this.home.update(e,t);const n=e.warning,i=!!n&&n.state==="acknowledged"&&n.type!=="device_offline";i&&!this.mine&&(this.mine=this.block.claim()),this.mine&&this.visit.set(i,Ln()),!i&&this.mine&&this.block.run.state==="away"&&(this.mine=!1,this.block.release())}animate(e,t,n,i){const r=Ln(),a=this.open=an(this.open,this.want?1:0,5,e),o=1+Math.min(2.5,i/60);this.drawer.position.z=wn(a)*(dt.d+.7),Zs(this.wallMesh,1-wn(a*1.6));for(const h of this.panes){const u=h.mesh.material;h.mesh.parent===this.panel&&(u.opacity=1-wn(a*1.6),h.mesh.visible=a<.6),u.emissiveIntensity=an(u.emissiveIntensity,n>.35&&this.home.lit(h.room)?2.8:0,3,e)}const l=this.state.warning,c=this.frame.material;c.opacity=a*(.75+.2*Math.sin(t*5)),c.color.setHex(l&&l.type!=="device_offline"?l.state==="acknowledged"?3462041:l.state==="calling"?16726832:16498468:3718648),this.frame.visible=a>.03,this.drawer.visible=a>.02,this.home.open=a>.05;for(const h of[...this.home.figures,this.inner])h.shown=a>.05;this.home.animate(e,t,n,i),this.mine?this.visit.update(e,t,r,n,o):this.inner.update(e,t)}}const jr=3.2,In=3,Gd=.24,di=3.6,at=.2,kS=4.2,ts={wall:16447214,trim:3115673},pp={wall:16447214,trim:5940142,door:3107663,rise:2.2,ridge:"x"},Nn=16184300,Gl=14275524,Hd=10134443,Vd=10470360,Wd=Math.PI,Cr=Math.PI/2,BS=0,mp=(s,e,t)=>({a:s+.45,b:e-.45,z0:1.3,z1:t/2-at});function gp(s,e,t,n,i,r){const a=(t+n)/2,o=-i/2+at,l=-1.7,{a:c,b:h,z0:u}=mp(t,n,i),d=(_,b,y)=>{_.box(.14,y,l-o,Nn,c,b,(o+l)/2).box(.14,y,l-o,Nn,h,b,(o+l)/2),_.box(a-.6-c,y,.14,Nn,(c+a-.6)/2,b,l).box(h-a-.6,y,.14,Nn,(h+a+.6)/2,b,l)};d(s,0,1.05),d(e,1.05,In-1.05),e.box(1.2,In-2.15,.14,Nn,a,2.15,l);for(const _ of[-1,1])s.box(.56,1.05,.05,Hd,a+_*.29,0,l+.06),e.box(.56,1.05,.05,Hd,a+_*.29,1.05,l+.06);s.box(h-c-.3,.03,l-o-.3,8226189,a,0,(o+l)/2).box(.08,.16,.04,3159098,a+.8,1.05,l+.1);const f=.2,m=9,v=jr/2/m,x=(h-c)/2-.1,p=c+x/2,g=h-x/2;if(r){for(let _=0;_<m;_++)s.box(x,(_+1)*v,f,Mt(Gl,()=>_%2*.5,.04),p,0,u+f*(_+.5));s.box(h-c,jr/2,i/2-at-(u+m*f),Gl,a,0,(u+m*f+i/2-at)/2);for(let _=0;_<m;_++)s.box(x,jr/2+(_+1)*v,f,Mt(Gl,()=>_%2*.5,.04),g,0,u+m*f-f*(_+.5));s.box(.16,1.05,m*f,Nn,a,0,u+m*f/2).box(.06,.06,m*f,On,a,1.05,u+m*f/2)}else{for(const[_,b,y,S]of[[h-c,.05,a,u],[.05,i/2-at-u,c,(u+i/2-at)/2],[.05,i/2-at-u,h,(u+i/2-at)/2]])s.box(_,.05,b,Pn,y,.95,S);for(const _ of[c,a,h])s.box(.04,.95,.04,Pn,_,0,u)}}function GS(s,e,t,n,i,r){const a=(o,l,c,h,u)=>{for(const[d,f,m]of[[h,Math.min(u,qr),ts.trim],[Math.max(h,qr),u,ts.wall]]){if(f-d<.005||c-l<.005)continue;const v=(l+c)/2,x=c-l;s.on("plaster"),o==="n"||o==="s"?s.box(x,f-d,at,m,v,d,(o==="s"?1:-1)*(n/2-at/2)):s.box(at,f-d,x,m,(o==="e"?1:-1)*(t/2-at/2),d,v),s.on()}};for(const o of["n","s","e","w"]){const l=o==="n"||o==="s",c=l?t/2:n/2-at;let h=-c;for(const u of r.filter(d=>d.side===o).sort((d,f)=>d.at-f.at)){const d=u.at-u.w/2,f=u.at+u.w/2,m=(l?n/2:t/2)+.03,v=o==="s"||o==="e"?1:-1;a(o,h,d,0,i),a(o,d,f,0,u.sill),a(o,d,f,u.top,i);const x=(p,g,_,b)=>(l?s.on("plain").box(_,b,.08,ts.trim,p,g,v*m):s.on("plain").box(.08,b,_,ts.trim,v*m,g,p)).on();x(u.at,u.top,u.w+.16,.08),u.sill>0&&x(u.at,u.sill-.08,u.w+.16,.08);for(const p of[-1,1])x(u.at+p*(u.w/2+.04),u.sill,.08,u.top-u.sill);l?e.box(u.w,u.top-u.sill,.03,Vd,u.at,u.sill,v*(n/2-at/2)):e.box(.03,u.top-u.sill,u.w,Vd,v*(t/2-at/2),u.sill,u.at),h=f}a(o,h,c,0,i)}}class HS{constructor(e,t,n,i,r){z(this,"site");z(this,"home");z(this,"group",new gt);z(this,"want",!1);z(this,"open",0);z(this,"aim",null);z(this,"shown",!1);z(this,"lift",0);z(this,"roofOpen",0);z(this,"beds");z(this,"low");z(this,"high");z(this,"roof",null);z(this,"panes",[]);z(this,"tiles",[]);z(this,"box");z(this,"well",[]);z(this,"rooms",[]);z(this,"W");z(this,"px");this.base=t,this.origin=i,this.site=e.site,this.group.position.y=t;const a=this.home=new Oh(e,mS,r,{outerWalls:!1}),o=a.layout,l=o.w,c=o.d,h=this.W=l+di,u=this.px=-di/2;a.group.position.set(u,.004,0),this.group.add(a.group),a.wayOut=[{x:l/2+1.5,z:o.entrance.z-.4},{x:l/2+di/2,z:-1.35}],this.beds=a.beds();const d=new et,f=new et,m=new et,v=[],x=[],p=.001;for(const[D,N]of o.rooms){const O=(B,Y,W)=>{const se=W>5?2:W>=1.9?1:0;for(let j=0;j<se;j++)v.push({side:B,at:Y+(se>1?(j-.5)*(W/2):0),kind:"window",w:Math.min(1.3,W/se-1.1),shutters:!1}),x.push(D)};Math.abs(N.z0+c/2)<p&&O("n",u+(N.x0+N.x1)/2,N.x1-N.x0),Math.abs(N.z1-c/2)<p&&O("s",u+(N.x0+N.x1)/2,N.x1-N.x0),Math.abs(N.x0+l/2)<p&&O("w",(N.z0+N.z1)/2,N.z1-N.z0)}v.push({side:"s",at:u+l/2+di/2,kind:"window",w:1,shutters:!1},{side:"e",at:o.entrance.z,kind:"window",w:1.1,shutters:!1}),x.push("","");const g=la({low:d,high:f,roof:m},0,0,h,c,pp,v,{foot:!1,leaf:!1,wallH:In,roof:n}),_=mp(u+l/2,h/2-at,c),b=h/2+.15,y=c/2+.15,S=(D,N,O,B)=>d.box(N-D,Gd,B-O,14209992,(D+N)/2,-Gd,(O+B)/2);n?(S(-b,_.a,-y,y),S(_.b,b,-y,y),S(_.a,_.b,-y,_.z0),S(_.a,_.b,_.z1,y)):S(-b,b,-y,y);const T=u+l/2,M=o.entrance.z-.55,w=o.entrance.z+.55;for(const[D,N]of[[-c/2+at,M],[w,c/2-at]])d.box(.14,1.05,N-D,Nn,T,0,(D+N)/2).box(.16,.03,N-D,13617339,T,1.05,(D+N)/2),f.box(.14,In-1.05,N-D,Nn,T,1.05,(D+N)/2);f.box(.14,In-2.15,w-M,Nn,T,2.15,o.entrance.z),gp(d,f,T,h/2-at,c,!n);const A=n?_.z0+c/2-at:c-2*at,I=St(di-at,A,r.tilefloor,1.2,T+(di-at)/2,.003,-c/2+at+A/2,{colour:15328472,roughness:.5});if(I.userData={site:e.site},this.tiles.push(I),this.group.add(I),this.low=d.build(),this.low.userData={site:e.site},this.high=f.build(),this.group.add(this.low,this.high),n&&(this.roof=m.build({material:ms(r.roof,{roughness:.88})}),this.group.add(this.roof)),g.windows.forEach((D,N)=>{const O=Do(D);O.translateZ(.035),this.panes.push({mesh:O,room:x[N]}),this.group.add(O)}),this.box=Lo(h+.4,In,c+.4,0,In/2,0,{site:e.site}),this.group.add(this.box),n){const D=Lo(_.b-_.a,.02,_.z1-_.z0,(_.a+_.b)/2,.01,(_.z0+_.z1)/2,{site:e.site});this.well.push(D),this.group.add(D)}a.group.traverse(D=>{D.userData.room&&this.rooms.push(D)})}get hits(){return wn(this.lift)>.3?[]:this.open>.5?[...this.rooms,this.low,...this.tiles,...this.well]:[this.box]}at(e,t,n){return new F(e,this.base+t,n).add(this.origin)}labelAt(e){const t=this.home.layout.d;return this.group.localToWorld(this.open>.3?e.set(this.px,2.4,-t/2-.5):e.set(-this.W/2-.4,1.9,t/2-1.2))}speechAt(e){return(this.open>.3?this.home.speech(e):null)??this.labelAt(e)}bedAt(e,t){const n=this.beds[e];return n&&this.open>.5?this.home.group.localToWorld(t.set(n.at.x,1.35,n.at.z)):t.set(0,-1e5,0)}shot(){const e=this.aim?this.home.layout.rooms.get(this.aim):void 0;return e?{target:this.at(this.px+(e.x0+e.x1)/2,.7,(e.z0+e.z1)/2),distance:16,polar:.6,azimuth:-.15}:{target:this.at(this.px+.6,.7,.4),distance:27,polar:.62,azimuth:-.2}}pass(e){const t=this.home.layout,n=t.rooms.get(t.hub),i=wn(e);return{target:this.at(this.px+n.x0+2+(n.x1-n.x0-4)*i,.6,(n.z0+n.z1)/2),distance:14,polar:.8,azimuth:-.25+.3*i}}update(e,t){this.home.update(e,t)}animate(e,t,n,i){const r=this.open=an(this.open,this.shown?1:0,5,e),a=wn(this.lift),o=1-a;this.group.position.y=this.base+a*kS,Zs(this.low,o),Zs(this.high,(1-r)*o),this.roof&&(Zs(this.roof,(1-this.roofOpen)*o),this.roof.position.y=this.roofOpen*3);for(const l of this.panes){const c=l.mesh.material;c.opacity=(1-r)*o,l.mesh.visible=c.opacity>.02,c.emissiveIntensity=an(c.emissiveIntensity,n>.35&&(l.room===""||this.home.lit(l.room))?2.6:0,3,e)}for(const l of this.tiles)l.visible=a<.4;this.home.open=r>.05,this.home.group.visible=r>.02;for(const l of this.home.figures)l.shown=r>.05;this.home.animate(e,t,n,i)}}class VS{constructor(e,t){z(this,"group",new gt);z(this,"floors",[]);z(this,"address");z(this,"top");z(this,"focus","");z(this,"glass");z(this,"heads");z(this,"shine");z(this,"rooms",[]);var xe,L;this.group.position.set(0,ye,0),this.address=((xe=e[0])==null?void 0:xe.address)||((L=e[0])==null?void 0:L.label.split(",")[0].trim())||"",e.forEach((R,P)=>{const V=new HS(R,Ot+(P+1)*jr,P===e.length-1,this.group.position,t);this.floors.push(V),this.group.add(V.group)});const n=this.floors[0].home.layout,i=n.w,r=n.d,a=i+di,o=-a/2,l=o+i;this.top=Ot+e.length*jr+In+pp.rise;const c=Wt(this.address||"care home"),h=new et,u=new et("inside"),d=new et,f=new et("leaves");h.box(a+.36,Ot,r+.36,Ut,0,0,0);const m=o+8.2,v=[{side:"s",at:o+1.6,w:2,sill:.45,top:2.45},{side:"s",at:o+4.3,w:2,sill:.45,top:2.45},{side:"s",at:m-1.75,w:.9,sill:.3,top:2.45},{side:"s",at:m,w:1.9,sill:0,top:2.45},{side:"s",at:m+1.75,w:.9,sill:.3,top:2.45},{side:"s",at:l-3.4,w:1.6,sill:.6,top:2.3},{side:"s",at:l-1.3,w:1.6,sill:.6,top:2.3},{side:"s",at:l+di/2,w:1,sill:.9,top:2.6},{side:"n",at:o+1.8,w:1.3,sill:1,top:2.2},{side:"n",at:o+4.2,w:1.3,sill:1,top:2.2},{side:"n",at:o+7.6,w:1,sill:1,top:2.2},{side:"n",at:l-4,w:1.3,sill:.9,top:2.2},{side:"n",at:l-1.6,w:1.3,sill:.9,top:2.2},{side:"w",at:2.5,w:1.6,sill:.45,top:2.45},{side:"w",at:0,w:1,sill:0,top:2.2},{side:"w",at:-2.5,w:1.2,sill:1,top:2.2},{side:"e",at:n.entrance.z,w:1.1,sill:.9,top:2.4}],x=new et;GS(x,d,a,r,In,v);const p=-.8,g=.8,_=(R,P,V,k,X=[])=>{const Q=P===k,ce=Q?R:P,fe=Q?V:k;let Te=ce;for(const[we,ke]of[...X.sort((Je,G)=>Je[0]-G[0]),[fe,fe]])u.on("plaster"),we-Te>.02&&(Q?u.box(we-Te,In,.12,Nn,(Te+we)/2,0,P):u.box(.12,In,we-Te,Nn,R,0,(Te+we)/2)),ke<fe&&(Q?u.box(ke-we,In-2.15,.12,Nn,(we+ke)/2,2.15,P):u.box(.12,In-2.15,ke-we,Nn,R,2.15,(we+ke)/2)),Te=ke,u.on()},b=o+5.8,y=o+10.6,S=r/2-at,T=-r/2+at;_(o+at,g,b,g,[[o+3.6,o+4.9]]),_(y,g,l,g,[[l-2.6,l-1.6]]),_(o+at,p,l,p,[[o+2.4,o+3.3],[o+6.9,o+7.8],[l-3.6,l-2.7]]),_(b,g,b,S),_(y,g,y,S),_(o+5.8,T,o+5.8,p),_(o+9,T,o+9,p),_(l,T,l,S,[[n.entrance.z-.6,n.entrance.z+.6]]);const M=(R,P,V,k,X,Q)=>{const ce=St(V,k,t[X],X==="parquet"?1.4:1.2,R,Ot+.003,P,{colour:Q,roughness:X==="parquet"?.75:.5});this.group.add(ce)};M((o+at+b)/2,(g+S)/2,b-o-at,S-g,"parquet",16777215),M((b+l)/2,0,l-b,r-2*at,"tilefloor",15722972),M((o+at+b)/2,(T+g)/2,b-o-at,g-T,"tilefloor",16774886),M(l+(di-at)/2,0,di-at,r-2*at,"tilefloor",15328472);const w=ht(c,[8231864,9412463,11105390]);u.box(3,.02,2,Mt(12166284,c,.1),o+2.9,.005,2.6),u.box(2.2,.42,.85,w,o+2.9,0,S-.6).box(2.2,.52,.2,Mt(w,()=>.3),o+2.9,.42,S-.22),Po(u,o+1,2.5,Cr-.3,Mt(w,()=>.85)),Po(u,o+4.8,2.5,a+.3,Mt(w,()=>.85)),u.box(1.6,.5,.42,5981750,o+2.9,0,g+.3).box(1.3,.72,.06,1447964,o+2.9,.52,g+.3),u.box(.36,1.8,1.4,8018492,o+at+.2,0,1.6),es(u,b-.45,S-.45,1.3),es(u,o+at+.4,S-.4,1.1),u.box(.6,1.05,2,14341576,y-.95,0,2.3).box(.7,.05,2.1,On,y-.95,1.05,2.3).box(.05,.32,.5,1447964,y-.8,1.1,2),Dn(u,y-.4,2.3,a,3159098);for(let R=0;R<3;R++)Dn(u,b+.45,g+.9+R*.6,Cr,3115673);es(u,m-1.4,S-.45,1.2),es(u,m+1.4,S-.45,1.2),u.box(1.4,.016,.9,8215100,m,.003,S-.7),u.box(.04,.8,1.2,13215339,b+.08,1.1,2.3),Xr(u,l-2.4,2.2,2.4,.9);for(const R of[-.8,0,.8])Dn(u,l-2.4+R,1.55,BS,10123861),Dn(u,l-2.4+R,2.85,Wd,10123861);for(const R of[3.25,3.75]){u.box(2.4,.04,.04,12568526,l-2.6,.95,R);for(const P of[l-3.8,l-1.4])u.box(.05,.95,.05,12568526,P,0,R)}u.box(.36,1.6,1.6,8018492,l-.3,0,2.6);for(let R=0;R<6;R++)u.box(.24,.2,.2,ht(c,[12597547,3106483,14853934,4160858]),l-.3,.3+R%3*.45,2.1+Math.floor(R/3)*.9);u.box(b-o-.6,.9,.62,15328472,(o+b)/2,0,T+.35).box(b-o-.6,.05,.66,6120299,(o+b)/2,.9,T+.35),u.box(2.2,.9,.9,15328472,(o+b)/2,0,-2.3).box(.75,1.9,.7,14672870,b-.5,0,-1.4);for(let R=0;R<3;R++)u.box(.62,.85,.6,16052974,b+.6+R*.75,0,T+.35).cyl(.2,.2,.03,3159098,b+.6+R*.75,.55,T+.66,12,Math.PI/2);u.box(1.6,.85,.7,On,o+7.4,0,-2),Xr(u,l-2.8,-2.5,1.6,.8),Dn(u,l-2.8,-1.85,Wd,3159098),u.box(.5,.3,.04,1447964,l-2.8,.77,-2.75);for(let R=0;R<3;R++)u.box(.45,1.3,.5,12106946,l-4.6+R*.5,0,T+.3);u.box(l-o-.8,.05,.05,10123861,(o+l)/2,.85,p+.1),gp(u,u,l,a/2-at,r,!0);const A=u.build({roughness:.85});A.position.y=Ot,this.group.add(A);const I=x.build();I.position.y=Ot,this.group.add(I),this.glass=d.build({cast:!1,material:ar(new lt({vertexColors:!0,roughness:.08,metalness:.3,transparent:!0,opacity:.32,emissive:16769192,emissiveIntensity:0,depthWrite:!1}))}),this.glass.position.y=Ot,this.group.add(this.glass);const D=(R,P)=>V=>R<P?V>=R&&V<P:V>=R||V<P;for(const[R,P,V,k,X]of[[(o+b)/2,(g+S)/2,5.8,3.4,D(17.5,22.5)],[(b+y)/2,1.6,4.8,4.8,D(0,24)],[(y+l)/2,(g+S)/2,4.6,3.4,D(17.5,20)],[(o+l)/2,0,i,1.6,D(0,24)]]){const Q=new Ke(new rn(V*1.1,k*1.1),new Lt({map:t.soft,color:16765066,transparent:!0,opacity:0,blending:xi,depthWrite:!1}));Q.rotation.x=-Math.PI/2,Q.position.set(R,Ot+.02,P),Q.visible=!1,this.rooms.push({mesh:Q,lit:X}),this.group.add(Q)}h.box(3.6,.14,2.2,ts.trim,m,Ot+2.55,r/2+1.1);for(const R of[-1.6,1.6])h.box(.12,2.55,.12,16448250,m+R,Ot,r/2+2.05);h.box(1.6,.6,.06,16448250,m,Ot+2.74,r/2+2.22).box(.36,.1,.02,3115605,m-.45,Ot+2.99,r/2+2.26).box(.1,.36,.02,3115605,m-.45,Ot+2.86,r/2+2.26),h.box(2.6,Ot*.5,1.2,Ut,m,0,r/2+.6).beam(1.4,.08,2.6,13618112,m+2.6,Ot/2,r/2+1.3,0,.075,0);const N={x0:-17,x1:17,z0:-12,z1:15},O=m;h.box(N.x1-N.x0,ye,N.z1-N.z0,Ut,0,-ye,(N.z0+N.z1)/2),this.group.add(St(N.x1-N.x0,N.z1-N.z0,t.grass,3,0,.002,(N.z0+N.z1)/2)),this.group.add(St(2.4,N.z1-r/2-2.2,t.calcada,3,O,.02,(r/2+2.2+N.z1)/2)),this.group.add(St(5.6,3,t.wood,1.6,o+2.9,.025,r/2+2.1,{colour:14271397}));for(const[R,P]of[[o+1.6,r/2+2.2],[o+4.2,r/2+2.2]])Xr(h,R,P,.9,.9,15921126),Dn(h,R-.6,P,Cr,15921126),Dn(h,R+.6,P,a,15921126),h.cyl(.03,.03,2.3,13619151,R,0,P,5).cone(1.3,.45,ht(c,[ts.trim,15921126,14260767]),R,2.15,P,8);for(const R of[O-2.2,O+2.2])h.box(1.6,.07,.46,On,R,.42,9.2,Cr).box(1.6,.5,.06,On,R+(R<O?-.22:.22),.46,9.2,Cr);const B=m+3.6,Y=a/2-.6;for(let R=0;R<22;R++)f.ball(.16+c()*.06,ht(c,zh),B+c()*(Y-B),.2,r/2+.45+c()*.4,0);f.box(Y-B,.14,.8,5214014,(B+Y)/2,0,r/2+.65),Hn(f,c,N.x0+.3,N.z1-.3,O-1.6,N.z1-.3),Hn(f,c,O+1.6,N.z1-.3,N.x1-.3,N.z1-.3),Hn(f,c,N.x0+.3,N.z0+.3,N.x0+.3,N.z1-.3),Hn(f,c,N.x0+.3,N.z0+.3,N.x1-.3,N.z0+.3),Hn(f,c,N.x1-.3,N.z0+.3,N.x1-.3,N.z1-.3);for(const R of[-1,1])h.box(.4,1.3,.4,ts.wall,O+R*1.4,0,N.z1-.3).box(.5,.08,.5,ts.trim,O+R*1.4,1.3,N.z1-.3);for(const[R,P,V]of[[-14,-9,1.1],[-7,-9.6,.9],[3,-9.4,1],[12.5,-9,1.1],[-14.3,1,1],[14.3,-2,1],[-14.5,11.5,.9],[14.5,11.8,.9],[13.8,6,.8]])$s(h,f,c,R,P,c()<.3,V);h.box(3.2,.12,1.6,7032627,8.5,0,-7.6);for(let R=0;R<3;R++)for(let P=0;P<6;P++)f.ball(.13,R===1?8367704:5214014,7.2+P*.5,.18,-8.1+R*.5,0,1,.8,1);const W=new et,se=new et,j=new et,te=new et,ee=new et,ge=new et,pe={z0:16.5,z1:22.5},Fe=260;this.group.add(St(900,900,t.field,9,0,-ye-.03,0)),this.group.add(St(Fe,pe.z1-pe.z0,t.asphalt,4,0,-ye+.004,(pe.z0+pe.z1)/2));for(const[R,P]of[[N.z1,pe.z0],[pe.z1,pe.z1+2.2]])W.box(Fe,ye,P-R,13618112,0,-ye,(R+P)/2),this.group.add(St(Fe,P-R,t.pavement,2,0,.004,(R+P)/2,{colour:15327956}));for(let R=-Fe/2+2;R<Fe/2;R+=5)se.box(2.4,.01,.14,16052974,R,-ye+.008,(pe.z0+pe.z1)/2);for(const[R,P]of[[-12,N.z1+.6],[5,N.z1+.6],[21,N.z1+.6],[-20,pe.z1+.6],[-3,pe.z1+.6],[13,pe.z1+.6]]){const V=P<pe.z0?1:-1;W.cyl(.06,.08,4.4,Pn,R,0,P,6).box(.08,.08,.9,Pn,R,4.35,P+V*.4),j.box(.36,.14,.5,16773836,R,4.22,P+V*.85),ge.add(new rn(6,6),16777215,R,.03,P+V*1.4,0,-Math.PI/2)}const Se=Fh(3106483).group;Se.position.set(9,-ye,pe.z0+1.1),Se.rotation.y=Math.PI,this.group.add(Se);const Oe=R=>({low:R,high:R,roof:te,glass:ee}),ne=Wt("care street");for(const[R,P,V,k,X]of[[-25,31,9,7.5,"n"],[-9,31.5,10,8,"n"],[9,31,9,7.5,"n"],[26,31.5,10,8,"n"],[-28,-1,8.5,9,"s"],[28,0,8.5,9,"s"]])fo(Oe(W),ne,R,P,V,k,X),W.box(V+6,ye,k+6,Ut,R,-ye,P),this.group.add(St(V+6,k+6,t.grass,3,R,.003,P));for(const R of[-30,-16,0,17,32])$s(W,f,ne,R,pe.z1+1.6,!1,1.15);const oe=W.build();this.group.add(oe,se.build({cast:!1}),te.build({material:ms(t.roof,{roughness:.88})})),this.group.add(ee.build({cast:!1,material:ar(new lt({vertexColors:!0,roughness:.15,metalness:.2,emissive:16762222,emissiveIntensity:0}))})),this.heads=j.build({cast:!1,material:new lt({vertexColors:!0,emissive:16765562,emissiveIntensity:0,roughness:.4})}),this.shine=ge.build({cast:!1,receive:!1,material:new Lt({map:t.soft,color:16762478,transparent:!0,opacity:0,blending:xi,depthWrite:!1})}),this.group.add(this.heads,this.shine),this.group.add(h.build(),f.build({roughness:1}))}labelAt(e){const t=this.floors[this.floors.length-1];return e.set(-1.5,this.top+1.2+(t?t.group.position.y-t.base+t.roofOpen*3:0),0).add(this.group.position)}animate(e,t,n,i){const r=this.floors.find(c=>c.site===this.focus&&c.want)??this.floors.find(c=>c.want)??null;let a=0;for(const c of this.floors)c.shown=c===r,c.lift=a,a=Math.max(a,c.open);const o=this.floors[this.floors.length-1];o&&(o.roofOpen=Math.max(...this.floors.map(c=>c.open)));const l=wn((n-.3)/.35);this.heads.material.emissiveIntensity=5.5*l,this.shine.material.opacity=(Tt?.2:.42)*l,this.glass.material.emissiveIntensity=.55*l;for(const c of this.rooms){const h=c.mesh.material;h.opacity=an(h.opacity,c.lit(i)?.5*l:0,2,e),c.mesh.visible=h.opacity>.01}}}const WS=`
.v3-layer{position:absolute;inset:0;overflow:hidden;pointer-events:none;isolation:isolate;font-family:var(--font-sans)}
.v3-tag{position:absolute;left:0;top:0;display:flex;flex-direction:column;align-items:center;gap:5px;will-change:transform;transition:opacity .25s}
.v3-pill{display:flex;align-items:center;gap:6px;padding:3px 9px 3px 7px;border-radius:999px;background:rgba(15,23,42,.78);color:#f8fafc;font-size:11.5px;font-weight:600;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,.35);backdrop-filter:blur(4px);pointer-events:auto;cursor:pointer;border:1px solid rgba(255,255,255,.14)}
.v3-pill i{width:8px;height:8px;border-radius:50%;background:var(--status-ok);box-shadow:0 0 0 2px color-mix(in srgb,var(--status-ok) 25%,transparent)}
.v3-tag.sel .v3-pill{border-color:#38bdf8;box-shadow:0 0 0 2px rgba(56,189,248,.45),0 2px 8px rgba(0,0,0,.35)}
.v3-tag.block .v3-pill{background:rgba(255,255,255,.9);color:#0f172a;border-color:rgba(15,23,42,.15)}
.v3-tag.block .v3-pill i{display:none}
.v3-sign{display:none;align-items:center;gap:8px;padding:6px 12px 6px 6px;border-radius:14px;color:#fff;font-size:13px;font-weight:700;white-space:nowrap;box-shadow:0 6px 18px rgba(0,0,0,.4);animation:v3-pop .28s cubic-bezier(.2,1.4,.4,1)}
.v3-sign b{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,.22);font-size:16px}
.v3-sign small{display:block;font-size:10.5px;font-weight:500;opacity:.9}
.v3-tag.asking{--tone:var(--status-asking);--tone-ink:var(--status-asking-ink)}.v3-tag.calling{--tone:var(--status-calling);--tone-ink:var(--status-calling-ink)}
.v3-tag.acknowledged{--tone:var(--status-acknowledged);--tone-ink:var(--status-acknowledged-ink)}.v3-tag.offline{--tone:var(--status-offline);--tone-ink:var(--status-offline-ink)}
.v3-tag.done{--tone:var(--status-ok);--tone-ink:var(--status-ok-ink)}
.v3-tag.lit .v3-sign{display:flex;background:var(--tone-ink)}.v3-tag.calling .v3-sign{animation:v3-pop .28s cubic-bezier(.2,1.4,.4,1),v3-beat 1s ease-in-out infinite}
.v3-tag.lit .v3-pill i{background:var(--tone);box-shadow:0 0 0 2px color-mix(in srgb,var(--tone) 32%,transparent)}.v3-tag.offline .v3-pill i{box-shadow:none}
.v3-bubble{position:absolute;left:0;top:0;max-width:240px;padding:9px 13px;border-radius:16px;background:#fff;color:#0f172a;font-size:14.5px;font-weight:600;line-height:1.25;box-shadow:0 8px 22px rgba(0,0,0,.35);will-change:transform;animation:v3-pop .25s cubic-bezier(.2,1.4,.4,1)}
.v3-bubble:after{content:"";position:absolute;left:50%;bottom:-8px;margin-left:-8px;border:8px solid transparent;border-top-color:#fff;border-bottom:0}
.v3-bubble em{display:block;font-style:normal;font-size:10.5px;font-weight:600;color:#0d9488;text-transform:uppercase;letter-spacing:.06em;margin-bottom:2px}
@keyframes v3-pop{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}
@keyframes v3-beat{0%,100%{box-shadow:0 6px 18px rgba(0,0,0,.4),0 0 0 0 color-mix(in srgb,var(--status-calling) 55%,transparent)}50%{box-shadow:0 6px 18px rgba(0,0,0,.4),0 0 0 12px color-mix(in srgb,var(--status-calling) 0%,transparent)}}
`,qS=s=>(Yd[s]??s).replace(/^\w/,e=>e.toLowerCase());class XS{constructor(e,t){z(this,"root",document.createElement("div"));z(this,"tags",new Map);z(this,"bubbles",new Map);z(this,"v",new F);if(this.onPick=t,!document.getElementById("v3-style")){const n=document.createElement("style");n.id="v3-style",n.textContent=WS,document.head.appendChild(n)}this.root.className="v3-layer",e.appendChild(this.root)}tag(e,t,n,i={}){const r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),l=document.createElement("i"),c=document.createElement("span");r.className=`v3-tag${i.block?" block":""}`,a.className="v3-sign",o.className="v3-pill",c.textContent=t,o.append(l,c),r.append(a,o),this.root.appendChild(r),i.site&&o.addEventListener("click",h=>{h.stopPropagation(),this.onPick(i.site)}),this.tags.set(e,{el:r,pill:o,name:c,sign:a,at:n,key:"",near:i.near??0,alert:!1,base:r.className})}state(e,t,n){const i=this.tags.get(e);if(!i)return;const r=t.warning,a=t.closed,o=r&&Zc(r),l=o&&o!=="ok"?o:a&&a.type!=="device_offline"?"done":t.down.length?"offline":"",c=`${l}|${(r==null?void 0:r.step)??""}|${(a==null?void 0:a.closed_as)??""}|${t.down.length}|${n}`;if(c===i.key)return;i.key=c,i.alert=!!l,i.el.className=`${i.base} ${l}${l?" lit":""}${n?" sel":""}`;const h=l==="calling"?"!":l==="acknowledged"?"✓":l==="offline"?"×":l==="done"?"✓":"?",u=r?Wl[r.type]??r.type:a?ql[a.closed_as??""]??ql.handled:t.down.length>1?`${t.down.length} devices offline`:Wl.device_offline,d=r?`${r.room?r.room.replace(/-/g," ")+" · ":""}${qS(r.step)}`:a?"closed":t.down.join(", ").replace(/-/g," ");i.sign.innerHTML=l?`<b>${h}</b><span>${u}<small>${d}</small></span>`:""}say(e,t,n){const i=this.bubbles.get(e);if(!t){i&&(i.el.remove(),this.bubbles.delete(e));return}if(i&&i.key===t){i.at=n;return}i==null||i.el.remove();const r=document.createElement("div");r.className="v3-bubble",r.innerHTML=`<em>the avatar</em>${t}`,this.root.appendChild(r),this.bubbles.set(e,{el:r,at:n,key:t})}place(e,t,n,i,r=0){const a=(o,l,c,h)=>{const u=l(this.v),d=u.distanceTo(i);u.project(e);const f=u.z>1||u.z<-1||Math.abs(u.x)>1.15||Math.abs(u.y)>1.2||c>0&&d>c||r>0&&(u.x*.5+.5)*t>t-r*.9;o.style.opacity=f?"0":"1",o.style.pointerEvents=f?"none":"",!f&&(o.style.zIndex=String(1e5-Math.round(d*10)),o.style.transform=`translate(${((u.x*.5+.5)*t).toFixed(1)}px, ${((-u.y*.5+.5)*n-h).toFixed(1)}px) translate(-50%, -100%)`)};for(const o of this.tags.values())a(o.el,o.at,o.alert?0:o.near,0);for(const o of this.bubbles.values())a(o.el,o.at,0,34)}dispose(){this.root.remove()}}let Yc=class xp extends Ke{constructor(){const e=xp.SkyShader,t=new Bt({name:e.name,uniforms:Un.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:bn,depthWrite:!1});super(new on(1,1,1),t),this.isSky=!0}};Yc.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new F},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const kh=s=>e=>{const t=(e%24+24)%24;for(let n=0;n<s.length;n++){const[i,r]=s[n],[a,o]=s[(n+1)%s.length],l=a>i?a:a+24,c=t>=i?t:t+24;if(c>=i&&c<=l)return new Ie(r).lerp(new Ie(o),(c-i)/(l-i||1))}return new Ie(s[0][1])},jS=kh([[0,659744],[5,857384],[6.2,7035512],[7,15250570],[8.2,13623534],[12,13952756],[17.5,13819881],[19,15771768],[20,8018556],[21.2,1055280]]),KS=kh([[0,3820154],[5,4149120],[6.5,12098216],[8,16183782],[12,16777215],[17,16774110],[19,16758912],[20.3,9075368],[21.5,3820154]]),YS=kh([[0,10466559],[5.5,10466559],[6.5,16756848],[8,16773336],[12,16775920],[17,16773328],[19,16751184],[20.2,16742992],[20.8,10466559]]);class JS{constructor(e=90){z(this,"group",new gt);z(this,"key",new Oc(16777215,3));z(this,"air",new nx(16777215,9083504,.6));z(this,"fill",new Oc(12571903,.25));z(this,"dome",new Yc);z(this,"stars");z(this,"moon");z(this,"clouds",[]);z(this,"night",0);z(this,"exposure",.6);z(this,"fogColour",new Ie);z(this,"sunDir",new F(0,1,0));z(this,"envScene",new xf);z(this,"envDome",new Yc);z(this,"cube",new Lh(128,{type:$t}));z(this,"cubeCam",new Bf(1,2e3,this.cube));z(this,"pmrem",null);z(this,"env",null);z(this,"envHour",-99);z(this,"envAt",0);z(this,"time",0);z(this,"envScale",.05);this.reach=e,this.dome.scale.setScalar(4e3);const t=this.dome.material.uniforms;t.turbidity.value=4,t.rayleigh.value=1.4,t.mieCoefficient.value=.004,t.mieDirectionalG.value=.82,t.cloudCoverage&&(t.cloudCoverage.value=Tt?.42:.32,t.cloudDensity.value=Tt?.5:.35),this.group.add(this.dome);const n=Wt("stars"),i=900,r=new Float32Array(i*3);for(let u=0;u<i;u++){const d=n()*Math.PI*2,f=Math.asin(.08+n()*.92),m=3e3;r[u*3]=Math.cos(d)*Math.cos(f)*m,r[u*3+1]=Math.sin(f)*m,r[u*3+2]=Math.sin(d)*Math.cos(f)*m}const a=new At;a.setAttribute("position",new Gt(r,3)),this.stars=new wo(a,new ta({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1})),this.moon=new Ke(new ns(60,20,14),new Lt({color:15986914,fog:!1,transparent:!0,opacity:0})),this.group.add(this.stars,this.moon);const o=this.key;o.castShadow=!0,o.shadow.mapSize.set(4096,4096),o.shadow.bias=-4e-4,o.shadow.normalBias=.05;const l=o.shadow.camera;l.left=-e,l.right=e,l.top=e*.75,l.bottom=-e*.75,l.near=10,l.far=420,this.group.add(o,o.target,this.air,this.fill);const c=this.envDome.material;if(c.uniforms.showSunDisc.value=0,c.uniforms.envScale={value:this.envScale},c.fragmentShader=c.fragmentShader.replace("void main() {",`uniform float envScale;
void main() {`).replace("gl_FragColor = vec4( texColor, 1.0 );","gl_FragColor = vec4( texColor * envScale, 1.0 );"),this.envDome.scale.setScalar(1e3),this.envScene.add(this.envDome),Tt)return;const h=Wt("clouds");for(let u=0;u<9;u++){const d=new et,f=4+Math.floor(h()*4);for(let v=0;v<f;v++)d.ball(11+h()*10,16777215,(v-f/2)*13+h()*6,h()*5,(h()-.5)*14,1,1.3,.62,1);const m=d.build({cast:!1,receive:!1,material:new lt({vertexColors:!0,flatShading:!0,roughness:1,emissive:16777215,emissiveIntensity:.25,transparent:!0,opacity:.94,fog:!1})});m.position.set(-420+h()*840,230+h()*80,-480+h()*520),this.clouds.push({mesh:m,speed:1.2+h()*1.6}),this.group.add(m)}}update(e,t){const n=(e-6.4)/13.2*Math.PI,i=Math.sin(n),r=Math.cos(n);this.sunDir.set(r*.82,Math.max(i,-.25),-.42-.2*i).normalize();const a=wn((i+.06)/.3);this.night=1-a;const o=a>.02?this.sunDir.clone():new F(-.35,.8,.45).normalize();a>.02&&o.y<.12&&(o.y=.12,o.normalize()),this.key.position.copy(o).multiplyScalar(200),this.key.target.position.set(0,0,0),this.key.color.copy(YS(e)),this.key.intensity=ai(.6,3,a)*(a>.02?.35+.65*wn(i/.5):1),this.air.color.copy(KS(e)),this.air.groundColor.setHex(9083504).lerp(new Ie(1712691),this.night),this.air.intensity=ai(.5,1.35,a),this.fill.position.set(-o.x*120,60,-o.z*120),this.fill.intensity=ai(.14,.55,a),this.fogColour.copy(jS(e)),this.exposure=ai(1.1,.78,a),this.dome.material.uniforms.sunPosition.value.copy(this.sunDir),this.dome.material.uniforms.rayleigh.value=ai(.6,1.3,a)+2.2*sp(1-Math.abs(i)*3.2)*a,Tt&&(this.time+=t,this.dome.material.uniforms.time&&(this.dome.material.uniforms.time.value=this.time));for(const c of["sunPosition","rayleigh","turbidity","mieCoefficient","mieDirectionalG","cloudCoverage","cloudDensity","time"]){const h=this.dome.material.uniforms[c],u=this.envDome.material.uniforms[c];h&&u&&(h.value.isVector3?u.value.copy(h.value):u.value=h.value)}this.stars.material.opacity=wn((this.night-.55)/.45)*.9;const l=this.moon.material;l.opacity=wn((this.night-.4)/.5),this.moon.position.set(-900,1900,1100),Tt&&(this.key.intensity=ai(.35,3.4,a)*(a>.02?.5+.5*wn(i/.4):1),this.air.intensity=ai(.22,.12,a),this.fill.intensity=ai(.08,0,a),this.exposure=ai(1.5,.95,a));for(const c of this.clouds){c.mesh.position.x+=c.speed*t,c.mesh.position.x>440&&(c.mesh.position.x=-440);const h=c.mesh.material;h.emissiveIntensity=ai(.02,.3,a),h.color.setHex(16777215).lerp(new Ie(3160140),this.night*.85)}}environment(e,t){if(!Tt)return null;const n=performance.now();let i=Math.abs(t-this.envHour);return i>12&&(i=24-i),this.env&&(i<.08||n-this.envAt<1e3)?this.env.texture:(this.pmrem??(this.pmrem=new Bc(e)),this.envDome.material.uniforms.envScale.value=this.envScale,this.cubeCam.update(e,this.envScene),this.env=this.pmrem.fromCubemap(this.cube.texture,this.env),this.envHour=t,this.envAt=n,this.env.texture)}dispose(){var e,t;(e=this.pmrem)==null||e.dispose(),(t=this.env)==null||t.dispose(),this.cube.dispose(),this.key.dispose(),this.envDome.geometry.dispose(),this.envDome.material.dispose()}}function dn(s,e){const t=document.createElement("canvas");t.width=t.height=s;const n=t.getContext("2d");n&&e(n,s);const i=new Sh(t);return i.colorSpace=Ft,i.wrapS=i.wrapT=Tn,i.anisotropy=8,i.generateMipmaps=!0,i}function Qa(s,e,t){return(n,i)=>{const r=Wt(t);n.fillStyle=s,n.fillRect(0,0,i,i);for(const[a,o,l]of e){n.fillStyle=a;for(let c=0;c<o;c++){const h=r()*i,u=r()*i,d=l*(.5+r());n.beginPath(),n.ellipse(h,u,d,d*(.5+r()),r()*3,0,7),n.fill()}}}}function ZS(){const s=dn(256,Qa("#6f9c4d",[["#7fae58",900,2.2],["#5f8a41",700,2.6],["#8ab862",260,1.4],["#56803a",160,3.4]],"grass")),e=dn(256,(p,g)=>{Qa("#86a85a",[["#93b565",600,2.4],["#7a9b50",500,2.4]],"field")(p,g),p.strokeStyle="rgba(70,95,45,0.35)",p.lineWidth=3;for(let _=8;_<g;_+=16)p.beginPath(),p.moveTo(0,_),p.lineTo(g,_),p.stroke()}),t=dn(256,Qa("#3f444c",[["#4a5059",1400,1.2],["#353a41",1100,1.4],["#5a606a",220,.8]],"asphalt")),n=dn(128,Qa("#d9c9a3",[["#e3d5b3",500,1.4],["#cbb98f",400,1.4]],"sand")),i=dn(256,(p,g)=>{const _=Wt("pavement"),b=16,y=g/b;p.fillStyle="#8f9299",p.fillRect(0,0,g,g);for(let S=0;S<b;S++)for(let T=0;T<b;T++){const M=196+Math.floor(_()*26);p.fillStyle=`rgb(${M},${M},${M+4})`,p.fillRect(S*y+1,T*y+1,y-2,y-2)}}),r=dn(512,(p,g)=>{p.fillStyle="#e9e6dc",p.fillRect(0,0,g,g),bp(p,g,"#2b2d31"),p.strokeStyle="rgba(120,120,115,0.35)",p.lineWidth=1;for(let _=0;_<g;_+=8)p.beginPath(),p.moveTo(_,0),p.lineTo(_,g),p.stroke(),p.beginPath(),p.moveTo(0,_),p.lineTo(g,_),p.stroke()}),a=dn(256,(p,g)=>{const _=Wt("roof"),b=12,y=16,S=g/b,T=g/y;p.fillStyle="#c66f45",p.fillRect(0,0,g,g);for(let M=0;M<b;M++)for(let w=0;w<y;w++){const A=_();p.fillStyle=A<.2?"#d68252":A<.5?"#c96f44":A<.85?"#cf784a":"#b0603b",p.beginPath(),p.roundRect(w*T+1,M*S+1,T-2,S-1,[0,0,T/2.4,T/2.4]),p.fill()}p.fillStyle="rgba(60,20,8,0.2)";for(let M=0;M<b;M++)p.fillRect(0,M*S,g,2.5)}),o=dn(128,(p,g)=>{const _=Wt("slate");p.fillStyle="#56606e",p.fillRect(0,0,g,g);for(let b=0;b<8;b++)for(let y=0;y<8;y++)p.fillStyle=_()<.5?"#5d6877":"#4d5663",p.fillRect(y*16+b%2*8+1,b*16+1,14,14)}),l=dn(256,(p,g)=>{const b=g/8;p.fillStyle="#f4f2ea",p.fillRect(0,0,g,g);for(let y=0;y<8;y++)for(let S=0;S<8;S++){const T=y*b+b/2,M=S*b+b/2;p.strokeStyle="#c9d6e6",p.lineWidth=1,p.strokeRect(y*b+.5,S*b+.5,b-1,b-1),p.fillStyle="#2c5fa8";for(let w=0;w<4;w++)p.beginPath(),p.ellipse(T+Math.cos(w*Math.PI/2)*b*.2,M+Math.sin(w*Math.PI/2)*b*.2,b*.17,b*.085,w*Math.PI/2,0,7),p.fill();p.fillStyle="#e3b23c",p.beginPath(),p.arc(T,M,b*.07,0,7),p.fill(),p.fillStyle="#2c5fa8";for(const[w,A]of[[0,0],[b,0],[0,b],[b,b]])p.beginPath(),p.arc(y*b+w,S*b+A,b*.1,0,7),p.fill()}}),c=dn(64,(p,g)=>{p.fillStyle="#ffffff",p.fillRect(0,0,g,g),p.fillStyle="#808080",p.fillRect(0,0,g/2,g),p.fillStyle="rgba(0,0,0,0.12)",p.fillRect(g/2-1,0,2,g),p.fillRect(g-2,0,2,g)}),h=dn(128,(p,g)=>{const _=Wt("stone");p.fillStyle="#8d8a82",p.fillRect(0,0,g,g);for(let b=0;b<6;b++){let y=b%2*-12;for(;y<g;){const S=22+_()*22,T=150+Math.floor(_()*40);p.fillStyle=`rgb(${T},${T-3},${T-10})`,p.fillRect(y+1,b*(g/6)+1,S-2,g/6-2),y+=S}}}),u=dn(128,(p,g)=>{const _=Wt("wood");p.fillStyle="#9a6b3f",p.fillRect(0,0,g,g);for(let b=0;b<8;b++)p.fillStyle=_()<.5?"#a47444":"#8e6038",p.fillRect(b*16,0,15,g)}),d=dn(128,(p,g)=>{const _=Wt("parquet");p.fillStyle="#c79a66",p.fillRect(0,0,g,g);for(let b=0;b<8;b++)for(let y=0;y<4;y++){const S=_();p.fillStyle=S<.33?"#cfa370":S<.66?"#c0915c":"#b98a57",p.fillRect(y*32+b%2*16+1,b*16+1,30,14)}}),f=dn(128,(p,g)=>{p.fillStyle="#dfe6ea",p.fillRect(0,0,g,g),p.strokeStyle="#b9c4cb",p.lineWidth=2;for(let _=0;_<=g;_+=32)p.beginPath(),p.moveTo(_,0),p.lineTo(_,g),p.stroke(),p.beginPath(),p.moveTo(0,_),p.lineTo(g,_),p.stroke()}),m=dn(64,(p,g)=>{const _=p.createRadialGradient(g/2,g/2,0,g/2,g/2,g/2);_.addColorStop(0,"rgba(255,255,255,1)"),_.addColorStop(.35,"rgba(255,255,255,0.55)"),_.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=_,p.fillRect(0,0,g,g)});m.wrapS=m.wrapT=$n;const v=dn(256,(p,g)=>{const _=p.createImageData(g,g),b=Math.PI*2/g;for(let y=0;y<g;y++)for(let S=0;S<g;S++){const T=Math.cos(S*b*3+y*b)*.5+Math.cos(S*b*7-y*b*2)*.3+Math.cos(S*b*13+y*b*5)*.2,M=Math.cos(y*b*4+S*b)*.5+Math.cos(y*b*9-S*b*3)*.3+Math.cos(y*b*15+S*b*4)*.2,w=(y*g+S)*4;_.data[w]=128+T*60,_.data[w+1]=128+M*60,_.data[w+2]=255,_.data[w+3]=255}p.putImageData(_,0,0)});v.colorSpace=Yn;const x={grass:s,field:e,asphalt:t,pavement:i,calcada:r,roof:a,slate:o,azulejo:l,stripes:c,stone:h,wood:u,soft:m,waves:v,sand:n,tilefloor:f,parquet:d};return Tt&&$S(x),x}function bp(s,e,t){const i=e/4;s.fillStyle=t;for(let r=0;r<4;r++){s.beginPath();for(let a=0;a<=e;a+=4)s.lineTo(a,r*i+i*.25+Math.sin(a/e*Math.PI*4)*i*.2);for(let a=e;a>=0;a-=4)s.lineTo(a,r*i+i*.75+Math.sin(a/e*Math.PI*4)*i*.2);s.closePath(),s.fill()}}function $S(s){const e=(y,S,T,M)=>{const w=_M(S);w&&Zi.set(y,{set:w,metres:T,normal:M})},t=ri("grass","c",1024,1,"contrast(0.9) brightness(0.98)",(y,S)=>{y.globalCompositeOperation="color",y.globalAlpha=.68,y.fillStyle="#4f7d2a",y.fillRect(0,0,S,S),y.globalAlpha=1,y.globalCompositeOperation="source-over"}),n=ri("grass","n",1024,1),i=ri("grass","r",512,1,"none",(y,S)=>{y.globalCompositeOperation="lighter",y.fillStyle="rgb(120,0,0)",y.fillRect(0,0,S,S),y.globalCompositeOperation="source-over"});t&&n&&i&&Zi.set(s.grass,{set:Tr(t,n,i,.16),metres:1.6,normal:.6});const r=ri("field","c",512,1,"contrast(0.78) brightness(1.02)",(y,S)=>{y.globalCompositeOperation="color",y.globalAlpha=.55,y.fillStyle="#5a7d30",y.fillRect(0,0,S,S),y.globalAlpha=1,y.globalCompositeOperation="source-over"}),a=ri("field","n",512,1),o=ri("field","r",512,1);r&&a&&o&&Zi.set(s.field,{set:Tr(r,a,o,.25),metres:15,normal:.6}),e(s.asphalt,"asphalt",4,.8),e(s.sand,"sand",6,.7),e(s.parquet,"parquet",2.4,.6),e(s.tilefloor,"tiles",1.27,.8),e(s.wood,"wood",1.2),e(s.roof,"roof",void 0,1.1);const l="brightness(1.7) saturate(0.25) contrast(1.15)",c=ri("cobble","n",1024,2),h=ri("cobble","r",512,2),u=ri("cobble","c",1024,2,l),d=ri("cobble","c",1024,2,l,(y,S)=>{y.globalCompositeOperation="multiply",bp(y,S,"#3a3c40"),y.globalCompositeOperation="source-over"});c&&h&&u&&d&&(Zi.set(s.pavement,{set:Tr(u,c,h),metres:3,normal:.9}),Zi.set(s.calcada,{set:Tr(d,c,h),normal:.9}));const f=s.azulejo.image,m=f.width,v=m/8,x=Wt("azulejo"),p=document.createElement("canvas"),g=document.createElement("canvas");p.width=p.height=g.width=g.height=m;const _=p.getContext("2d"),b=g.getContext("2d");b.fillStyle="rgb(255,200,0)",b.fillRect(0,0,m,m);for(let y=0;y<8;y++)for(let S=0;S<8;S++){const T=y*v,M=S*v,w=128+(x()-.5)*18,A=128+(x()-.5)*18;_.fillStyle="rgb(128,128,255)",_.fillRect(T,M,v,v),_.fillStyle="rgb(128,175,225)",_.fillRect(T,M,v,2),_.fillStyle="rgb(128,81,225)",_.fillRect(T,M+v-2,v,2),_.fillStyle="rgb(81,128,225)",_.fillRect(T,M,2,v),_.fillStyle="rgb(175,128,225)",_.fillRect(T+v-2,M,2,v),_.fillStyle=`rgb(${w|0},${A|0},250)`,_.fillRect(T+2,M+2,v-4,v-4),b.fillStyle=`rgb(255,${22+Math.floor(x()*16)},0)`,b.fillRect(T+1,M+1,v-2,v-2)}Zi.set(s.azulejo,{set:Tr(f,p,g,0),normal:.6})}class QS extends Ke{constructor(e,t={}){super(e),this.isWater=!0;const n=this,i=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,o=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new F(.70707,.70707,0),u=new Ie(t.sunColor!==void 0?t.sunColor:16777215),d=new Ie(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new F(0,0,0),m=t.distortionScale!==void 0?t.distortionScale:20,v=t.side!==void 0?t.side:Fi,x=t.fog!==void 0?t.fog:!1,p=new Mn,g=new F,_=new F,b=new F,y=new Ye,S=new F(0,0,-1),T=new xt,M=new F,w=new F,A=new xt,I=new Ye,D=new fn,N=new Qt(i,r,{type:$t}),O={name:"MirrorShader",uniforms:Un.merge([Ce.fog,Ce.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ye},sunColor:{value:new Ie(8355711)},sunDirection:{value:new F(.70707,.70707,0)},eye:{value:new F},waterColor:{value:new Ie(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},B=new Bt({name:O.name,uniforms:Un.clone(O.uniforms),vertexShader:O.vertexShader,fragmentShader:O.fragmentShader,lights:!0,side:v,fog:x});B.uniforms.mirrorSampler.value=N.texture,B.uniforms.textureMatrix.value=I,B.uniforms.alpha.value=o,B.uniforms.time.value=l,B.uniforms.normalSampler.value=c,B.uniforms.sunColor.value=u,B.uniforms.waterColor.value=d,B.uniforms.sunDirection.value=h,B.uniforms.distortionScale.value=m,B.uniforms.eye.value=f,n.material=B,n.onBeforeRender=function(Y,W,se){if(_.setFromMatrixPosition(n.matrixWorld),b.setFromMatrixPosition(se.matrixWorld),y.extractRotation(n.matrixWorld),g.set(0,0,1),g.applyMatrix4(y),M.subVectors(_,b),M.dot(g)>0)return;M.reflect(g).negate(),M.add(_),y.extractRotation(se.matrixWorld),S.set(0,0,-1),S.applyMatrix4(y),S.add(b),w.subVectors(_,S),w.reflect(g).negate(),w.add(_),D.position.copy(M),D.up.set(0,1,0),D.up.applyMatrix4(y),D.up.reflect(g),D.lookAt(w),D.far=se.far,D.updateMatrixWorld(),D.projectionMatrix.copy(se.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(D.projectionMatrix),I.multiply(D.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(g,_),p.applyMatrix4(D.matrixWorldInverse),T.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const j=D.projectionMatrix;A.x=(Math.sign(T.x)+j.elements[8])/j.elements[0],A.y=(Math.sign(T.y)+j.elements[9])/j.elements[5],A.z=-1,A.w=(1+j.elements[10])/j.elements[14],T.multiplyScalar(2/T.dot(A)),j.elements[2]=T.x,j.elements[6]=T.y,j.elements[10]=T.z+1-a,j.elements[14]=T.w,f.setFromMatrixPosition(se.matrixWorld);const te=Y.getRenderTarget(),ee=Y.xr.enabled,ge=Y.shadowMap.autoUpdate;n.visible=!1,Y.xr.enabled=!1,Y.shadowMap.autoUpdate=!1,Y.setRenderTarget(N),Y.state.buffers.depth.setMask(!0),Y.autoClear===!1&&Y.clear(),Y.render(W,D),n.visible=!0,Y.xr.enabled=ee,Y.shadowMap.autoUpdate=ge,Y.setRenderTarget(te);const pe=se.viewport;pe!==void 0&&Y.state.viewport(pe)}}}const e2=[5214014,4160826,6266954,4687935],Hl=[15158332,15844367,15105712,16777215,10181046,16747069],qd=(s,e,t)=>[s*Math.cos(t)+e*Math.sin(t),-s*Math.sin(t)+e*Math.cos(t)];function t2(s){const e=new gt,t=Wt("town"),n=new et,i=new et("leaves"),r=new et,a=new et,o=new et,l=new et,c=new et,h=new et,u=new et,d=new et,f={},m=[],v=L=>({low:n,high:n,roof:r,glass:L%2?u:d}),x=(L,R,P,V=0,k=1)=>{const X=Mt(ht(t,e2),t,.08);if(L==="bush"){i.ball(.55*k,X,R,V+.4*k,P,1,1.2,.9,1.2);return}if(L==="cypress"){n.on("bark").cyl(.1,.13,.8,5915430,R,V,P,6).on(),i.cone(.75*k,5.2*k,3104058,R,V+.6,P,7);return}if(L==="palm"){n.on("bark").cyl(.14,.22,4.6*k,9073488,R,V,P,7).on();for(let fe=0;fe<8;fe++){const Te=fe/8*Math.PI*2;i.beam(.34,.05,2.3,5214014,R+Math.sin(Te)*1,V+4.5*k-.25,P+Math.cos(Te)*1,Te,.42,0)}i.ball(.3,4160826,R,V+4.6*k,P);return}const Q=(L==="tall"?3:L==="pine"?4.2:L==="orange"?1.2:1.9)*k;if(n.on("bark").cyl(.13*k,.2*k,Q,7032618,R,V,P,6).on(),L==="pine"){i.ball(2.2*k,3829562,R,V+Q+.4,P,1,1.25,.42,1.25),i.ball(1.4*k,4487744,R+.5,V+Q+.95,P-.3,1,1.2,.4,1.2);return}const ce=(L==="tall"?2:L==="orange"?.95:1.5)*k;if(i.ball(ce,X,R,V+Q+ce*.55,P,1,1,.9,1),i.ball(ce*.72,Mt(X,t,.1),R+ce*.55,V+Q+ce*.35,P+ce*.25,1),i.ball(ce*.66,Mt(X,t,.1),R-ce*.5,V+Q+ce*.8,P-ce*.3,1),L==="orange")for(let fe=0;fe<7;fe++)i.ball(.09,16747546,R+(t()-.5)*1.5,V+Q+.3+t()*.9,P+(t()-.5)*1.5,0)},p=(L,R,P=ye)=>{n.cyl(.06,.1,3.9,2044713,L,P,R,6).cyl(.16,.16,.12,2044713,L,P,R,6).cone(.3,.22,2044713,L,P+4.3,R,4,Math.PI/4),o.box(.3,.38,.3,16774084,L,P+3.92,R),l.add(new rn(11,11),16777215,L,P+.03,R,0,-Math.PI/2),m.push(L,P+4.1,R)},g=(L,R,P=0,V=ye)=>{n.box(1.6,.07,.46,On,L,V+.42,R,P);const[k,X]=qd(0,-.22,P);n.box(1.6,.5,.06,On,L+k,V+.46,R+X,P);for(const Q of[-.65,.65]){const[ce,fe]=qd(Q,0,P);n.box(.07,.42,.42,Pn,L+ce,V,R+fe,P)}},_=(L,R,P=ye,V=1.2)=>{n.box(V,.5,.6,Ut,L,P,R);for(let k=0;k<5;k++)i.ball(.16+t()*.08,ht(t,Hl),L+(t()-.5)*(V-.3),P+.56+t()*.1,R+(t()-.5)*.3,0);i.ball(.3,5214014,L,P+.5,R,0,V/.9,.5,.8)},b=(L,R,P=ye)=>{n.cyl(.2,.14,.34,11887930,L,P,R,8),i.ball(.26,ht(t,Hl),L,P+.5,R,0),i.ball(.2,5214014,L+.08,P+.38,R,0)},y=(L,R,P,V,k=ye,X=.8)=>{const Q=Math.hypot(P-L,V-R),ce=Math.max(1,Math.round(Q/1.2));for(let fe=0;fe<ce;fe++){const Te=(fe+.5)/ce;i.box(Math.abs(P-L)/ce+.5,X*(.92+t()*.16),Math.abs(V-R)/ce+.5,Mt(4160826,t,.07),L+(P-L)*Te,k,R+(V-R)*Te)}},S=(L,R,P,V)=>{n.cyl(.5,.5,.05,15921126,L,P+.72,R,10).cyl(.05,.05,.72,Pn,L,P,R,6);for(let k=0;k<3;k++){const X=k*2.1+.5;n.box(.4,.45,.4,9080726,L+Math.cos(X)*.85,P,R+Math.sin(X)*.85,X)}n.cyl(.03,.03,2.3,13619151,L,P,R,5).cone(1.35,.45,V,L,P+2.15,R,8)},T=L=>f[L]??(f[L]=new et);e.add(St(900,459,s.grass,7,0,0,Nt.z1+229.5)),e.add(St(900,22,s.grass,7,0,0,Nt.z0-11)),Tt?n.on("sand").box(900,.2,52,14470052,0,-.2,Nt.z0-48).on():e.add(St(900,52,s.sand,5,0,0,Nt.z0-48)),e.add(St(900,10,s.sand,4,0,Nt.bed,(Nt.z0+Nt.z1)/2,{colour:7305820}));const M=new Ke(new rn(1800,900),qc(new lt({color:2977679,roughness:.25,metalness:.3})));M.rotation.x=-Math.PI/2,M.position.set(0,-.2,Nt.z0-74-450),e.add(M);for(const[L,R]of[[Nt.z1-.25,1],[Nt.z0+.25,-1]])n.box(900,1.7+.02,.5,10131084,0,Nt.bed,L),n.box(900,.12,.8,13223354,0,.02,L+R*.15);for(let L=0;L<26;L++){const R=-330+L*26+t()*12,P=Nt.z0-26-t()*14;n.on("sand").ball(7+t()*6,14470052,R,-1.5,P,1,1.6,.42,1).on();for(let V=0;V<3;V++)i.cone(.4,.9,9085018,R+(t()-.5)*10,1.2+t(),P+(t()-.5)*5,5)}let w,A=!Tt;const I=s.waves.clone();if(I.needsUpdate=!0,I.repeat.set(900/7,9/7),Tt)w=new Ke(new rn(900,9),qc(new lt({color:1457996,roughness:.08,metalness:.2,normalMap:I,normalScale:new de(.35,.35)}),2.6));else try{const L=new QS(new rn(900,9),{textureWidth:512,textureHeight:512,waterNormals:s.waves,sunDirection:new F(.3,.8,-.4),sunColor:16777215,waterColor:1789793,distortionScale:1.4,fog:!0,alpha:.96});L.material.uniforms.size.value=9,w=L}catch{A=!1,w=new Ke(new rn(900,9),new lt({color:2054766,roughness:.15,metalness:.4}))}w.rotation.x=-Math.PI/2,w.position.set(0,Nt.water,(Nt.z0+Nt.z1)/2),e.add(w);for(const L of bS()){const R=L.x1-L.x0,P=L.z1-L.z0,V=(L.x0+L.x1)/2,k=(L.z0+L.z1)/2;e.add(St(R,P,s.asphalt,3.5,V,.012,k));const X=(Q,ce)=>ce.some(fe=>Math.abs(Q-fe)<Vt+3.2);if(L.along==="x")for(let Q=L.x0+2;Q<L.x1;Q+=4.5)!X(Q,Ii)&&Math.abs(Q)<130&&a.box(2.2,.012,.13,14869218,Q,.014,k);else for(let Q=L.z0+2;Q<L.z1;Q+=4.5)!X(Q,[...gi,ho])&&Q<130&&a.box(.13,.012,2.2,14869218,V,.014,Q)}for(const L of Ii)for(const R of gi)for(const P of[-1,1])for(let V=-2;V<=2;V++)a.box(2.2,.012,.5,15263976,L+P*(Vt+1.5),.014,R+V*1.05),a.box(.5,.012,2.2,15263976,L+V*1.05,.014,R+P*(Vt+1.5));for(let L=0;L<3;L++)for(let R=0;R<3;R++){const P=op(L,R),V=oa(L,R);n.slab(P.x0,P.z0,P.x1,P.z1,0,ye,10330278),e.add(St(P.x1-P.x0,P.z1-P.z0,s.pavement,4,(P.x0+P.x1)/2,ye+.004,(P.z0+P.z1)/2)),e.add(St(V.x1-V.x0,V.z1-V.z0,s.grass,5,(V.x0+V.x1)/2,ye+.012,(V.z0+V.z1)/2));for(const[k,X]of[[P.x0+.7,P.z0+.7],[P.x1-.7,P.z0+.7],[P.x0+.7,P.z1-.7],[P.x1-.7,P.z1-.7],[(P.x0+P.x1)/2,P.z0+.7],[(P.x0+P.x1)/2,P.z1-.7]])p(k,X)}const D=(L,R=s.pavement,P=4)=>{n.slab(L.x0,L.z0,L.x1,L.z1,0,ye,10330278),e.add(St(L.x1-L.x0,L.z1-L.z0,R,P,(L.x0+L.x1)/2,ye+.004,(L.z0+L.z1)/2))};D({x0:-66,x1:-63,z0:-36,z1:44}),D({x0:63,x1:66,z0:-36,z1:44}),D({x0:-63,x1:63,z0:42,z1:44});for(const[L,R]of[[-110,-23.4],[-16.6,16.6],[23.4,110]])D({x0:L,x1:R,z0:-39,z1:-36},s.calcada,3),D({x0:L,x1:R,z0:-51,z1:-49});for(let L=-100;L<=100;L+=3.4)Math.abs(Math.abs(L)-20)>4&&(n.cyl(.11,.13,.55,Pn,L,ye,-38.6,6),n.ball(.13,Pn,L,ye+.6,-38.6,0));for(let L=-90;L<=90;L+=15)Math.abs(Math.abs(L)-20)>5&&(p(L+3,-37.3),Math.abs(L)%30===0?g(L-2,-37.4,Math.PI):x("palm",L-3.5,-37.4,ye));for(const L of[-20,20]){n.box(8,.45,11,11117978,L,-.44,-44),n.box(1.4,1.7-.4,1.6,9407361,L,Nt.bed,-44);for(const R of[-1,1]){n.box(.35,.95,11.4,12894388,L+R*3.85,.02,-44).box(.5,.1,11.6,14078662,L+R*3.85,.97,-44),n.box(.8,ye,11,10330278,L+R*3.4,.012,-44);for(const P of[-49.4,-38.6])n.box(.6,1.5,.6,12894388,L+R*3.85,.02,P),o.box(.26,.3,.26,16774084,L+R*3.85,1.55,P),m.push(L+R*3.85,1.75,P)}}for(let L=-52;L<=52;L+=8)if(Math.abs(Math.abs(L)-20)>5&&Math.abs(Math.abs(L)-60)>5)for(const R of[12-.9,18+.9])n.box(1.3,.16,1.3,8219221,L,ye,R),x("tall",L,R,ye+.1,.95);{const L=oa(2,0),R=(L.x0+L.x1)/2,P=(L.z0+L.z1)/2;e.add(St(L.x1-L.x0,1.7,s.sand,3,R,ye+.02,P)),e.add(St(1.7,L.z1-L.z0,s.sand,3,R,ye+.021,P)),h.add(new Eo(3.6,24),16777215,R,ye+.024,P,0,-Math.PI/2),n.cyl(2.5,2.7,.5,Ut,R,ye,P,8).cyl(2.2,2.2,.06,14272416,R,ye+.5,P,8);for(let X=0;X<8;X++){const Q=(X+.5)*Math.PI/4;n.cyl(.06,.06,2.5,2044713,R+Math.cos(Q)*2.25,ye+.5,P+Math.sin(Q)*2.25,6),X!==2&&n.beam(1.75,.5,.05,2044713,R+Math.cos(Q+Math.PI/8)*2.1,ye+1,P+Math.sin(Q+Math.PI/8)*2.1,-(Q+Math.PI/8)+Math.PI/2)}n.cone(3,1.25,3107663,R,ye+3,P,8,Math.PI/8).ball(.16,13938487,R,ye+4.35,P,0);for(const[X,Q,ce]of[[-11,-4.5,"round"],[-6,4.6,"pine"],[-12,4,"round"],[6.5,-4.6,"round"],[11.5,-3.6,"pine"],[5.5,4.6,"round"],[-3.2,-5,"tall"],[13,4.8,"cypress"],[-13.8,-1,"cypress"],[9.5,.6,"orange"]])x(ce,R+X,P+Q,ye);for(const[X,Q,ce]of[[-6,-1.4,0],[6,1.4,Math.PI],[-1.4,5,Math.PI/2],[1.4,-5,-Math.PI/2]])g(R+X,P+Q,ce);for(const[X,Q]of[[-8.5,-2.6],[8.5,2.6],[-8.5,2.6],[8.5,-2.6]]){y(R+X-2,P+Q,R+X+2,P+Q,ye,.4);for(let ce=0;ce<9;ce++)i.ball(.17,ht(t,Hl),R+X-1.8+t()*3.6,ye+.5,P+Q+(t()-.5)*.5,0)}p(R-4,P-4),p(R+4,P+4);const V=L.x1-5.5,k=L.z0+3.6;e.add(St(7,5,s.sand,2.5,V,ye+.022,k));for(const X of[-1,1])n.beam(.08,2.6,.08,14238764,V-1.6+X*1.3,ye+1.2,k-.45,0,.35,0).beam(.08,2.6,.08,14238764,V-1.6+X*1.3,ye+1.2,k+.45,0,-.35,0);n.box(2.8,.08,.08,14238764,V-1.6,ye+2.4,k);for(const X of[-.55,.55])n.box(.02,1.7,.02,Pn,V-1.6+X,ye+.7,k).box(.5,.04,.2,15844367,V-1.6+X,ye+.66,k);n.box(1,.08,1,3106483,V+1.8,ye+1.5,k).beam(.6,.06,2.6,15844367,V+1.8,ye+.82,k+1.6,0,-.56,0);for(const[X,Q]of[[-.45,-.45],[.45,-.45],[-.45,.45],[.45,.45]])n.box(.07,1.5,.07,3106483,V+1.8+X,ye,k+Q)}la({low:n,high:n,roof:r,glass:u},8.2,-24.6,8,5.4,{wall:16447214,trim:3107663,door:3104058,rise:1.5,chimney:[2.4,-1]},[{side:"s",at:0,kind:"door",w:1.3},{side:"s",at:-2.5,kind:"window",w:1.8,shutters:!1},{side:"s",at:2.5,kind:"window",w:1.8,shutters:!1},{side:"e",at:0,kind:"window"},{side:"w",at:0,kind:"window"},{side:"n",at:-2,kind:"window"},{side:"n",at:2,kind:"window"}]),T(12597547).beam(8.4,.07,1.9,16777215,8.2,ye+2.45,-24.6+3.5,0,.3,0,[8,1]),n.box(1.5,.5,.07,2307371,8.2,ye+3.3,-24.6+2.76),e.add(St(13,6,s.calcada,3,8,ye+.02,-17.6)),S(4.2,-18.4,ye,12597547),S(8.3,-16.8,ye,15921126),S(12,-18.6,ye,12597547),S(5.6,-15.4,ye,15921126),_(2.2,-20.2),_(14,-20.2),b(6.9,-21.5),b(9.5,-21.5),x("orange",13.6,-15.2,ye),y(1.4,-14.4,14.6,-14.4,ye,.55),n.cone(1,1.1,16448250,2.6,ye,-26.6,7).cone(.7,.75,15921906,4,ye,-27.2,7).beam(.05,1.8,.05,On,3.4,ye+.8,-26.2,0,0,.5);{e.add(St(3,14,s.calcada,3,-37.5,ye+.02,3));for(let L=-3.2;L<=9.4;L+=1.55)b(-38.75,L),b(-36.25,L+.7);for(const L of[-3.6,9.6]){n.box(.14,2.5,.14,16249834,-38.9,ye,L).box(.14,2.5,.14,16249834,-36.1,ye,L).box(3,.14,.14,16249834,-37.5,ye+2.5,L);for(let R=0;R<12;R++)i.ball(.24+t()*.14,t()<.75?14037898:5214014,-38.9+t()*2.8,ye+2.5+t()*.5,L+(t()-.5)*.4,0)}fo(v(1),t,-30.3,2.4,9,6.2),y(-35.4,9.4,-25.4,9.4),x("orange",-26.6,7.4,ye),x("round",-33.6,-2.2,ye,.8)}{const L=ye,R=16447472,P=14853934;la({low:n,high:n,roof:r},-10.5,2.15,8,5.5,{wall:R,trim:P,door:5978665,rise:2.3,ridge:"x"},[{side:"n",at:-1.8,kind:"window",w:.7,shutters:!1},{side:"s",at:-2.2,kind:"window",w:.7,shutters:!1},{side:"s",at:1.4,kind:"window",w:.7,shutters:!1}],{wallH:5.2,y:L}),c.box(.08,5,5.3,16777215,-6.46,L+.3,2.15,0,[4,4]),n.box(.2,2.6,1.5,5978665,-6.4,L+.2,2.15).box(.26,.3,1.9,Ut,-6.38,L+2.8,2.15),n.add(new En(.75,.75,.14,16),2969482,-6.4,L+4.4,2.15,0,0,Math.PI/2);for(const X of[-.6,4.9])n.box(.4,5.6,.4,P,-6.5,L,X);n.box(.08,1,.08,Ut,-6.5,L+7.6,2.15).box(.08,.08,.6,Ut,-6.5,L+8.2,2.15);for(let X=0;X<3;X++)n.box(1.4-X*.3,.16,3.2-X*.5,Ut,-5.7+X*.15,L+X*.16-.1,2.15);const V=-7.8,k=-2.05;n.box(2.6,9.6,2.6,R,V,L,k).box(2.9,.25,2.9,P,V,L+6.9,k).box(2.9,.3,2.9,P,V,L+9.6,k).box(2.7,.9,2.7,P,V,L,k);for(const[X,Q]of[[0,1.31],[0,-1.31],[1.31,0],[-1.31,0]])n.box(X?.06:.9,1.6,X?.9:.06,2830134,V+X,L+7.5,k+Q),n.ball(.3,12092975,V+X*.72,L+8.3,k+Q*.72,0,1,1.2,1);r.cone(2.05,2.3,16777215,V,L+9.9,k,4,Math.PI/4),n.box(.1,1.1,.1,13938487,V,L+12.2,k).box(.6,.1,.1,13938487,V,L+12.9,k),x("cypress",-14,-2.6,L),x("cypress",-12.2,-3,L),x("cypress",-14,7.6,L),e.add(St(6,14,s.calcada,3,-3.5,L+.02,3));for(let X=0;X<3;X++)n.cyl(1.5-X*.38,1.5-X*.38,.2,Ut,-3.5,L+X*.2,6.6,8);n.cyl(.11,.14,2.7,Ut,-3.5,L+.6,6.6,8).box(.14,.9,.14,Ut,-3.5,L+3.3,6.6).box(.7,.14,.14,Ut,-3.5,L+3.75,6.6),g(-5.4,-1.6,Math.PI/2),g(-1.6,.2,-Math.PI/2),_(-3.5,-3.1),x("orange",-5.2,9,L),x("orange",-1.8,9,L),p(-5.6,3.4),p(-1.4,-2.6)}{const L=ye,R=8,P=27;e.add(St(14,14,s.calcada,3.5,R,L+.02,P)),n.cyl(2.5,2.6,.55,Ut,R,L,P,14).cyl(.34,.42,1.4,Ut,R,L+.5,P,8).cyl(1,.5,.28,Ut,R,L+1.9,P,10).cyl(.14,.2,.6,Ut,R,L+2.15,P,6);for(const[V,k,X]of[[-4.6,0,Math.PI/2],[4.6,0,-Math.PI/2],[0,4.8,Math.PI]])g(R+V,P+k,X);x("round",2.4,21.6,L),x("round",13.6,21.4,L),x("pine",2.6,32.6,L,.9),p(3.4,30),p(12.6,24),n.cyl(1.25,1.25,2.3,3107663,12.4,L,31.6,8).cone(1.75,.8,2380861,12.4,L+2.3,31.6,8).ball(.14,13938487,12.4,L+3.2,31.6,0).box(1.4,.7,.06,15921126,12.4,L+1.1,30.33);for(const V of[-1.4,1.4])n.box(.08,2.3,.08,Pn,8+V,L,18.7);n.box(3.4,.08,1.3,3837340,8,L+2.3,19.1).box(3,1.4,.05,12376038,8,L+.7,19.55).box(2.4,.07,.4,On,8,L+.45,19.3).box(.08,2.6,.08,Pn,10.2,L,18.5).box(.5,.5,.06,3106483,10.2,L+2.3,18.5)}const N=new Ke(new Eo(2.25,20),new lt({color:4891588,roughness:.1,metalness:.3,emissive:1793914,emissiveIntensity:.25}));N.rotation.x=-Math.PI/2,N.position.set(8,ye+.5,27),e.add(N);const O=70,B=new Float32Array(O*3),Y=Array.from({length:O},()=>({a:t()*6.28,t:t()})),W=new At;W.setAttribute("position",new Gt(B,3));const se=new wo(W,new ta({map:s.soft,color:14677247,size:.34,transparent:!0,opacity:.85,depthWrite:!1}));se.frustumCulled=!1,e.add(se),fo(v(0),t,48.3,26.6,10,6.4),y(41.6,33.4,54.6,33.4),x("round",53,22,ye),x("orange",43.4,31.6,ye);for(const[L,R,P,V,k]of[[-74.5,-20,8,9,"e"],[-75,3,8,10,"e"],[-74.5,27,8,9,"e"],[74.5,-21,8,9,"w"],[75,3,8,10,"w"],[74.5,27,8,9,"w"],[-33,52,10,6.5,"n"],[-10,52.5,9,6.5,"n"],[13,52,10,6.5,"n"],[36,52.5,9,6.5,"n"]])fo(v(Math.round(L)),t,L,R,P,V,k),x(ht(t,["round","orange","pine"]),L+(t()-.5)*3,R+(k==="n"?6.5:0)+(t()-.5)*2+(k==="n"?0:t()<.5?-8:8));for(const[L,R,P,V,k]of[[-150,20,130,150,14674112],[150,40,130,170,15786664],[-20,120,200,110,15128736],[-150,-8,60,40,13163680],[140,150,150,80,13689e3]])e.add(St(P,V,s.field,9,L,.006,R,{colour:k}));for(let L=0;L<70;L++){const R=t()*Math.PI*2,P=82+t()*130,V=Math.cos(R)*P*1.2,k=6+Math.sin(R)*P;k>-36&&!(Math.abs(V)<70&&k<60)&&x(ht(t,["round","round","pine","tall","cypress"]),V,k,0,.9+t()*.6)}for(let L=0;L<16;L++){const R=L/16*Math.PI+(t()-.5)*.15,P=250+t()*70;n.on("grass").ball(70+t()*50,Mt(7311194,t,.12),Math.cos(R)*P,-12,20+Math.sin(R)*P,1,1.5,.36+t()*.16,1.1).on()}const j=[12597547,3106483,3115605,14853934,3115673];for(let L=0;L<12;L++){const R=-66+L*12+(t()-.5)*1.2,P=-62.4,V=5.6,k=7,X=4.4;T(j[L%j.length]).box(V,X,k,16777215,R,.25,P,0,[V/.9,1]).gableEnds(k,V,1.9,16777215,R,.25+X,P,.35,Math.PI/2),n.box(V+.3,.25,k+.3,Ut,R,0,P),r.gable(k,V,1.9,16777215,R,.25+X,P,.35,Math.PI/2),n.box(.95,2,.08,16448250,R,.25,P+k/2+.03),(L%2?u:d).box(.9,.9,.06,10470360,R-1.6,1.5,P+k/2+.04).box(.9,.9,.06,10470360,R+1.6,1.5,P+k/2+.04).box(.8,.8,.06,10470360,R,3.6,P+k/2+.04),n.box(V,.1,1.1,15921126,R,2.75,P+k/2+.5).box(V,.6,.05,16448250,R,2.85,P+k/2+1.03),L%3===1&&x("palm",R+4.6,P+3,0,.9)}for(let L=-96;L<=96;L+=16)p(L,-50,ye);const te=[];for(const[L,R,P]of[[215,-70,46],[262,-20,52],[236,48,48]]){n.cyl(.9,1.5,P,15921906,L,4,R,8);const V=new gt,k=new et;for(let X=0;X<3;X++)k.beam(1.5,19,.3,16119285,Math.sin(X*2.094)*9.5,Math.cos(X*2.094)*9.5,0,0,0,-X*2.094);V.add(k.build({cast:!1})),V.position.set(L-1.6,P+4,R),V.rotation.y=Math.PI/2,te.push(V),e.add(V)}e.add(n.build()),e.add(i.build({roughness:1})),e.add(r.build({material:ms(s.roof,{roughness:.88})})),e.add(c.build({material:ms(s.azulejo,{roughness:.35})})),e.add(h.build({cast:!1,material:ms(s.calcada,{roughness:.95,vertexColors:!1})}));for(const[L,R]of Object.entries(f)){const P=s.stripes.clone();P.needsUpdate=!0,e.add(R.build({material:new lt({map:P,vertexColors:!0,roughness:.85,color:16777215,emissive:Number(L),emissiveIntensity:0})}));const V=e.children[e.children.length-1].material;V.onBeforeCompile=k=>{k.uniforms.paint={value:new Ie(Number(L))},k.fragmentShader=k.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.rgb = mix(paint, vec3(1.0), smoothstep(0.35, 0.75, diffuseColor.r));`).replace("void main() {",`uniform vec3 paint;
void main() {`)},V.customProgramCacheKey=()=>`stripe-${L}`}const ee=a.build({cast:!1,material:new lt({vertexColors:!0,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})});e.add(ee);const ge=L=>ar(new lt({vertexColors:!0,roughness:.15,metalness:.2,emissive:L,emissiveIntensity:0})),pe=u.build({cast:!1,material:ge(16762222)}),Fe=d.build({cast:!1,material:ge(16767130)}),Se=o.build({cast:!1,material:new lt({vertexColors:!0,emissive:16765562,emissiveIntensity:0,roughness:.4})}),Oe=l.build({cast:!1,receive:!1,material:new Lt({map:s.soft,color:16762478,transparent:!0,opacity:0,blending:xi,depthWrite:!1})}),ne=new At;ne.setAttribute("position",new Gt(new Float32Array(m),3));const oe=new wo(ne,new ta({map:s.soft,color:16766346,size:3.4,transparent:!0,opacity:0,blending:xi,depthWrite:!1}));e.add(pe,Fe,Se,Oe,oe);const xe=(L,R,P)=>R<P?L>=R&&L<P:L>=R||L<P;return{group:e,update(L,R,P,V,k){const X=wn((P-.3)/.35);Se.material.emissiveIntensity=5.5*X,Oe.material.opacity=(Tt?.2:.42)*X,oe.material.opacity=.9*X;const Q=pe.material,ce=Fe.material;Q.emissiveIntensity=Xd(Q.emissiveIntensity,X>.2&&(xe(V,18,23.2)||xe(V,6.2,7.6))?2.6:0,L),ce.emissiveIntensity=Xd(ce.emissiveIntensity,X>.2&&xe(V,19.2,.6)?2.4:0,L);const fe=w;A&&(fe.material.uniforms.time.value+=L*.35,fe.material.uniforms.sunDirection.value.copy(k),fe.material.uniforms.waterColor.value.setHex(1789793).lerp(new Ie(398365),P),fe.material.uniforms.sunColor.value.setScalar(1-P*.85)),M.material.color.setHex(2977679).lerp(new Ie(464420),P),A||(I.offset.x+=L*.012,I.offset.y+=L*.004,Tt&&w.material.color.setHex(1457996).lerp(new Ie(332314),P));for(const Te of te)Te.rotation.x+=L*.9;for(let Te=0;Te<O;Te++){const we=Y[Te];we.t+=L*.75,we.t>1&&(we.t-=1,we.a=Math.random()*6.28);const ke=we.t*1.7;B[Te*3]=8+Math.cos(we.a)*ke,B[Te*3+2]=27+Math.sin(we.a)*ke,B[Te*3+1]=ye+2.7+2.6*we.t-5.4*we.t*we.t}W.attributes.position.needsUpdate=!0}}}const Xd=(s,e,t)=>e+(s-e)*Math.exp(-1.6*t),n2={target:new F(0,0,-2),distance:178,polar:.9,azimuth:.36},i2={target:new F(0,3.5,4),distance:54,polar:.98,azimuth:-.32},s2=2e4,jd=3e4,r2=6e3,a2=8,Pr=16e3,Vl=14e3;class o2{constructor(e,t,n,i="city"){z(this,"renderer");z(this,"composer",null);z(this,"bloom",null);z(this,"scene",new xf);z(this,"camera",new fn(30,1,2,2600));z(this,"controls");z(this,"tex");z(this,"sky");z(this,"town",null);z(this,"street",null);z(this,"care",null);z(this,"overlay");z(this,"views",new Map);z(this,"blocks",[]);z(this,"overviewShot");z(this,"state",null);z(this,"clock",new Ex);z(this,"raf",0);z(this,"hour",9);z(this,"hourShown",9);z(this,"effective",60);z(this,"size",{w:2,h:2});z(this,"inset",0);z(this,"heldUntil",0);z(this,"selected","");z(this,"room");z(this,"chosenAt",-1e9);z(this,"since",new Map);z(this,"closedAt",new Map);z(this,"focus","");z(this,"due","");z(this,"bound",null);z(this,"idleSince",Ln());z(this,"passing",!1);z(this,"heard",!1);z(this,"frames",{n:0,since:0,slow:0});z(this,"ray",new wx);z(this,"down",null);z(this,"eye",new F);z(this,"page");z(this,"quality","high");z(this,"household","home-014");z(this,"fixedHour",null);z(this,"onHappened",()=>{});z(this,"told",new Map);z(this,"wasDown",new Map);z(this,"onDown",e=>{this.down={x:e.clientX,y:e.clientY}});z(this,"onUp",e=>{const t=this.down;if(this.down=null,!t||Math.hypot(e.clientX-t.x,e.clientY-t.y)>6)return;const n=this.canvas.getBoundingClientRect();this.ray.setFromCamera(new de((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),this.camera);const i=[];for(const a of this.views.values())for(const o of a.hits)(!o.userData.room||a.open>.5)&&i.push(o);const r=this.ray.intersectObjects(i,!1)[0];r?this.choose(r.object.userData.site,r.object.userData.room):this.overview()});z(this,"elapsed",0);z(this,"frame",()=>{const e=Math.min(.1,this.clock.getDelta());this.elapsed+=e,this.tick(e,this.elapsed,!0),this.raf=requestAnimationFrame(this.frame)});z(this,"fps",60);z(this,"story","");this.canvas=e,this.onPick=n,this.mode=i,this.renderer=new wy({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Jd,this.renderer.toneMapping=Tt?Uo:No,this.renderer.outputColorSpace=Ft,this.renderer.localClippingEnabled=!0,this.scene.fog=new bh(13623534,.0017),this.tex=ZS(),this.sky=new JS(i==="care"?42:90),this.scene.add(this.sky.group),i==="city"&&(this.town=t2(this.tex),this.scene.add(this.town.group),this.street=wS(),this.scene.add(this.street.group)),this.overviewShot=i==="care"?i2:n2,this.overlay=new XS(t,a=>this.choose(a)),this.page=e.getRootNode(),this.controls=new TM(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=9,this.controls.maxDistance=i==="care"?140:270,this.controls.maxPolarAngle=1.42,this.controls.minPolarAngle=.12;const r=this.overviewShot;this.controls.target.copy(r.target),this.camera.position.setFromSphericalCoords(r.distance,r.polar,r.azimuth).add(r.target),this.controls.addEventListener("start",()=>{this.heldUntil=Ln()+s2}),e.addEventListener("pointerdown",this.onDown),e.addEventListener("pointerup",this.onUp),this.setQuality("high"),this.raf=requestAnimationFrame(this.frame)}dropComposer(){if(this.composer){for(const e of this.composer.passes)e.dispose();this.composer.dispose(),this.composer=null,this.bloom=null}}setQuality(e){if(this.quality=e,this.dropComposer(),e==="low"){this.renderer.setPixelRatio(1),this.resize(this.size.w,this.size.h);return}if(this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,e==="high"?2:1.5)),this.composer=new WM(this.renderer,new Qt(4,4,{type:$t,samples:4})),this.composer.addPass(new JM(this.scene,this.camera)),e==="high"){const t=new hi(this.scene,this.camera,4,4);t.blendIntensity=.72,t.updateGtaoMaterial({radius:1.6,distanceExponent:1.4,thickness:1.2,scale:1.15,samples:12,distanceFallOff:1}),this.composer.addPass(t)}this.composer.addPass(this.bloom=new or(new de(4,4),.34,.6,1.5)),this.composer.addPass(new YM),this.resize(this.size.w,this.size.h)}resize(e,t,n=this.inset){var i,r;this.size={w:Math.max(2,e),h:Math.max(2,t)},this.inset=Math.max(0,Math.min(n,this.size.w*.7)),this.renderer.setSize(this.size.w,this.size.h,!1),(i=this.composer)==null||i.setPixelRatio(this.renderer.getPixelRatio()),(r=this.composer)==null||r.setSize(this.size.w,this.size.h),this.inset>0?this.camera.setViewOffset(this.size.w+this.inset,this.size.h,this.inset,0,this.size.w,this.size.h):(this.camera.clearViewOffset(),this.camera.aspect=this.size.w/this.size.h),this.camera.updateProjectionMatrix()}choose(e,t){this.views.has(e)&&(this.selected=e,this.room=t,this.chosenAt=Ln(),this.heldUntil=0,this.onPick(e,t))}overview(){this.chosenAt=-1e9,this.idleSince=Ln(),this.heldUntil=0,this.passing&&(this.passing=!1,this.focus="")}build(e){const t=r=>r.address||r.label.split(",")[0].trim(),n=new Map;let i=0;if(this.mode==="care"){const r=e.sites.filter(o=>o.kind==="carehome"&&o.plan).sort((o,l)=>Number(o.floor)-Number(l.floor));if(!r.length)return;const a=this.care=new VS(r,this.tex);this.scene.add(a.group),this.overlay.tag(`block:${a.address}`,a.address,o=>a.labelAt(o),{block:!0});for(const o of a.floors){const l=r.find(c=>c.site===o.site);this.views.set(o.site,o),this.overlay.tag(o.site,l.floor?`Floor ${l.floor}`:l.label,c=>o.labelAt(c),{site:o.site}),o.beds.forEach((c,h)=>this.overlay.tag(`bed:${o.site}:${h}`,`Room ${c.room.replace(/^room-/,"")} · bed ${c.bed}`,u=>o.bedAt(h,u),{block:!0,near:34}))}return}for(const r of e.sites){if(!r.plan||r.kind==="carehome")continue;const a=t(r);if(r.floor!==null&&r.floor!==void 0&&Od[a]){const l=(r.door??r.label.split(",")[1]??"").toLowerCase();n.set(a,[...n.get(a)??[],{site:r,floor:Number(r.floor)||0,side:/right|dto|\bb\b|direito/.test(l)?"right":"left"}]);continue}const o=new FS(r,gS[a]??xS(i++),this.tex);this.views.set(r.site,o),this.scene.add(o.group),this.overlay.tag(r.site,r.label,l=>o.labelAt(l),{site:r.site})}for(const[r,a]of n){const o=new OS(r,Od[r],a,this.tex);this.blocks.push(o),this.scene.add(o.group),this.overlay.tag(`block:${r}`,r,l=>l.set(0,o.top+1.4,0).add(o.group.position),{block:!0});for(const l of o.flats){this.views.set(l.site,l);const c=a.find(h=>h.site.site===l.site).site;this.overlay.tag(l.site,c.label.replace(`${r}, `,""),h=>l.labelAt(h),{site:l.site})}}}update(e,t,n){var g,_,b;const i=Ln();this.state=e,this.hour=Number(e.clock.time.slice(0,2))+Number(e.clock.time.slice(3))/60,this.effective=e.clock.effective,this.views.size||this.build(e),this.selected||(this.selected=t),n!==void 0&&(this.room=n);const r=1+Math.min(2.5,e.clock.effective/60),a=[];for(const y of e.sites){const S=this.views.get(y.site);if(!S)continue;S.update(y,r);const T=y.warning&&y.warning.type!=="device_offline"?y.warning:null;T?(this.since.has(y.site)||this.since.set(y.site,i),a.push(y.site),this.closedAt.delete(y.site)):this.since.delete(y.site)&&this.closedAt.set(y.site,i);const M=this.told.get(y.site)??"",w=T?T.state==="calling"?"calling":T.state==="acknowledged"?"coming":"alert":"";w!==M&&(this.told.set(y.site,w),this.state!==null&&this.views.size&&this.heard&&this.onHappened(w||(M?"closed":"quiet"),y.site));const A=y.down.length;this.heard&&A>(this.wasDown.get(y.site)??0)&&this.onHappened("offline",y.site),this.wasDown.set(y.site,A),this.overlay.state(y.site,y,y.site===this.selected&&i-this.chosenAt<jd),this.overlay.say(y.site,((g=y.saying)==null?void 0:g.text)??null,I=>S.speechAt(I))}for(const[y,S]of this.closedAt)i-S>r2&&this.closedAt.delete(y);this.heard=!0;const o=e.attract?e.script:null,l=y=>y&&this.views.has(y)?y:"",c=a.sort((y,S)=>(this.since.get(S)??0)-(this.since.get(y)??0))[0]??"",h=l((_=o==null?void 0:o.playing)==null?void 0:_.site),u=[...this.closedAt.keys()][0]??"",d=o==null?void 0:o.next;((d==null?void 0:d.row)===void 0||d.row===null||d.row!==this.bound)&&(this.bound=null),this.bound===null&&(d==null?void 0:d.row)!=null&&e.next_in!==null&&e.next_in<=a2&&(this.bound=d.row);const f=this.bound!==null?l(d==null?void 0:d.site):"",m=i-this.chosenAt<jd?this.selected:"",v=c||h||f;v!==this.due&&!this.down&&(v&&(this.heldUntil=0),this.due=v);const x=v||u;(x||m||!e.attract)&&(this.idleSince=i);const p=this.mode==="care"?l(d==null?void 0:d.site)||([...this.views.keys()][0]??""):l(this.household);this.passing=!x&&!m&&!!p&&(i-this.idleSince)%(Pr+Vl)>=Pr,this.focus=x||m||(this.passing?p:""),this.story=c||h||u;for(const[y,S]of this.views){S.want=y===this.focus||a.includes(y)||y===h||this.closedAt.has(y);const T=e.sites.find(w=>w.site===y),M=T!=null&&T.warning&&T.warning.type!=="device_offline"?T.warning:null;S.aim=(M==null?void 0:M.room)??(this.closedAt.has(y)?(b=T==null?void 0:T.closed)==null?void 0:b.room:null)??(y===m?this.room:null)??null}this.care&&(this.care.focus=this.focus)}dispose(){cancelAnimationFrame(this.raf),this.canvas.removeEventListener("pointerdown",this.onDown),this.canvas.removeEventListener("pointerup",this.onUp);const e=new Set(Object.values(this.tex));this.scene.traverse(n=>{var r,a,o,l;const i=n;(r=i.geometry)==null||r.dispose(),n.isSkinnedMesh&&n.skeleton.dispose();for(const c of i.material?[i.material].flat():[]){for(const u of Object.values(c))u!=null&&u.isTexture&&e.add(u);for(const u of Object.values(c.uniforms??{}))(a=u.value)!=null&&a.isTexture&&e.add(u.value);const h=(l=(o=this.renderer.properties.get(c).uniforms)==null?void 0:o.dfgLUT)==null?void 0:l.value;h&&e.add(h),c.dispose()}});for(const n of e)n.dispose();wM(),MS(),this.overlay.dispose(),this.controls.dispose();const t=this.controls;t._interceptControlDown&&this.page.removeEventListener("keydown",t._interceptControlDown,{capture:!0}),t._interceptControlUp&&this.page.removeEventListener("keyup",t._interceptControlUp,{capture:!0}),this.dropComposer(),this.sky.dispose(),this.renderer.dispose(),this.canvas.isConnected||this.renderer.forceContextLoss()}advance(e,t=30){const n=1/t;for(let i=0;i<Math.round(e*t);i++)tS(n*1e3),this.elapsed+=n,this.tick(n,this.elapsed,i===Math.round(e*t)-1)}tick(e,t,n){var l,c,h;const i=Ln();let a=(this.fixedHour??this.hour)-this.hourShown;a>12&&(a-=24),a<-12&&(a+=24),this.hourShown=(an(this.hourShown,this.hourShown+a,2.5,e)%24+24)%24,this.sky.update(this.hourShown,e),this.scene.fog.color.copy(this.sky.fogColour),this.scene.background=this.sky.fogColour,this.renderer.toneMappingExposure=this.sky.exposure,Tt&&this.bloom&&(this.bloom.threshold=1.5+6*(1-this.sky.night),this.bloom.strength=.12+.22*this.sky.night);const o=this.scene.environment=this.sky.environment(this.renderer,this.hourShown);if(o)for(const u of Go)u.envMap!==o&&(u.envMap=o,u.needsUpdate=!0);(l=this.town)==null||l.update(e,t,this.sky.night,this.hourShown,this.sky.sunDir),(c=this.street)==null||c.update(e,t,this.sky.night);for(const u of this.blocks)u.animate(e,t,this.sky.night,this.hourShown);(h=this.care)==null||h.animate(e,t,this.sky.night,this.hourShown);for(const u of this.views.values())u.animate(e,t,this.sky.night,this.effective);if(i>this.heldUntil){const u=(i-this.idleSince)%(Pr+Vl),d=this.passing&&u>=Pr,f=this.passing&&!d?void 0:this.views.get(this.focus),m=1-Math.exp(-e*(d?1.4:f?3.4:2.2)),v=this.overviewShot;let x=f?f.shot():{...v,distance:v.distance*(1+.5*this.inset/this.size.w)},p=f?.16*Math.sin(t*.22):.3*Math.sin(t*.045);if(f&&d){const y=Math.max(0,Math.min(1,(u-Pr)/Vl));x=f.pass?f.pass(y):{...x,distance:x.distance*1.3,polar:x.polar+.12,azimuth:x.azimuth-.7+1.4*y},p=0}const g=this.camera.position.clone().sub(this.controls.target),_=new kc().setFromVector3(g);let b=x.azimuth+p-_.theta;for(;b>Math.PI;)b-=Math.PI*2;for(;b<-Math.PI;)b+=Math.PI*2;this.controls.target.lerp(x.target,m),_.radius+=(x.distance-_.radius)*m,_.phi+=(x.polar-_.phi)*m,_.theta+=b*m,this.camera.position.setFromSpherical(_).add(this.controls.target)}if(this.controls.update(),!!n){if(this.composer?this.composer.render(e):this.renderer.render(this.scene,this.camera),this.camera.getWorldPosition(this.eye),this.overlay.place(this.camera,this.size.w,this.size.h,this.eye,this.inset),document.hidden||e>.2){this.frames={n:0,since:i,slow:this.frames.slow};return}if(this.frames.n++,i-this.frames.since>3e3){const u=this.frames.n*1e3/(i-this.frames.since);this.fps=u,this.frames={n:0,since:i,slow:u<24?this.frames.slow+1:0},this.frames.slow>=3&&this.quality!=="low"&&(this.frames.slow=0,this.setQuality(this.quality==="high"?"medium":"low"))}}}get night(){return this.sky.night}}const l2=({state:s,selected:e,room:t,onSelect:n,inset:i=0,onHappened:r,mode:a="city",household:o})=>{const l=pt.useRef(null),c=pt.useRef(null),h=pt.useRef(null),u=pt.useRef(n);u.current=n;const d=pt.useRef(i);d.current=i;const f=pt.useRef(r);f.current=r;const m=pt.useRef({state:s,selected:e,room:t,household:o});m.current={state:s,selected:e,room:t,household:o};const[v,x]=pt.useState(!1);return pt.useEffect(()=>{const p=l.current,g=p==null?void 0:p.parentElement,_=c.current;if(!p||!g||!_)return;let b=!1,y=null;return vM().then(()=>{if(b)return;try{h.current=new o2(p,_,(M,w)=>u.current(M,w),a)}catch(M){console.error(M),x(!0);return}h.current.onHappened=(M,w)=>{var A;return(A=f.current)==null?void 0:A.call(f,M,w)};const S=m.current;S.household&&(h.current.household=S.household),h.current.update(S.state,S.selected,S.room),new URLSearchParams(location.search).has("debug")&&(window.__v3=h.current);const T=()=>{var M;return(M=h.current)==null?void 0:M.resize(g.clientWidth,g.clientHeight,d.current)};T(),y=new ResizeObserver(T),y.observe(g)}),()=>{var S;b=!0,y==null||y.disconnect(),(S=h.current)==null||S.dispose(),h.current=null}},[a]),pt.useEffect(()=>{h.current&&o&&(h.current.household=o)},[o,a]),pt.useEffect(()=>{var p;(p=h.current)==null||p.update(s,e,t)},[s,e,t,a]),pt.useEffect(()=>{var g,_;const p=(g=l.current)==null?void 0:g.parentElement;p&&((_=h.current)==null||_.resize(p.clientWidth,p.clientHeight,i))},[i]),v?ie.jsx(qp,{state:s,selected:e,room:t,onSelect:n}):ie.jsxs("div",{className:"relative w-full h-full overflow-hidden","aria-label":`The village at ${s.clock.time}`,role:"img",children:[ie.jsx("canvas",{ref:l,className:"block w-full h-full touch-none cursor-grab active:cursor-grabbing"},a),ie.jsx("div",{ref:c})]})};class c2{constructor(){z(this,"ctx",null);z(this,"out",null);z(this,"ringing",null);z(this,"air",null);z(this,"night",0);z(this,"on",!0)}wake(){if(this.ctx){this.ctx.resume();return}const e=window.AudioContext??window.webkitAudioContext;e&&(this.ctx=new e,this.out=this.ctx.createGain(),this.out.gain.value=.5,this.out.connect(this.ctx.destination),this.air=window.setInterval(()=>this.breathe(),2600))}set(e){this.on=e,e||this.stopRing(),this.out&&this.ctx&&this.out.gain.setTargetAtTime(e?.5:0,this.ctx.currentTime,.05)}setNight(e){this.night=e}note(e,t,n,i=.2,r="sine",a){const o=this.ctx,l=this.out;if(!o||!l||!this.on)return;const c=o.createOscillator(),h=o.createGain(),u=o.currentTime+t;c.type=r,c.frequency.setValueAtTime(e,u),a&&c.frequency.exponentialRampToValueAtTime(a,u+n),h.gain.setValueAtTime(1e-4,u),h.gain.exponentialRampToValueAtTime(i,u+.015),h.gain.exponentialRampToValueAtTime(1e-4,u+n),c.connect(h),h.connect(l),c.start(u),c.stop(u+n+.05)}play(e){if(!(!this.ctx||!this.on))if(e==="alert"){this.stopRing();for(const[t,n]of[[880,0],[660,.18],[880,.42],[660,.6]])this.note(t,n,.22,.22,"triangle")}else if(e==="calling"){this.stopRing();const t=()=>{for(const n of[0,.5])this.note(440,n,.36,.1),this.note(480,n,.36,.1)};t(),this.ringing=window.setInterval(t,2600)}else if(e==="coming")this.stopRing(),this.note(523,0,.18,.2,"triangle"),this.note(784,.16,.32,.2,"triangle");else if(e==="closed"){this.stopRing();for(const[t,n]of[[523,0],[659,.12],[784,.24],[1047,.38]])this.note(t,n,.45,.16,"sine")}else e==="offline"?this.note(220,0,.3,.16,"square",150):this.stopRing()}stopRing(){this.ringing!==null&&(clearInterval(this.ringing),this.ringing=null)}breathe(){if(!(!this.ctx||!this.on||this.ringing!==null)){if(this.night>.6){for(let e=0;e<5;e++)this.note(4300+Math.random()*300,e*.07+Math.random()*.8,.035,.012,"sine");return}if(Math.random()<.55){const e=2200+Math.random()*1400,t=2+Math.floor(Math.random()*3);for(let n=0;n<t;n++)this.note(e,n*.13,.09,.02,"sine",e*(1.15+Math.random()*.3))}}}dispose(){var e;this.stopRing(),this.air!==null&&clearInterval(this.air),(e=this.ctx)==null||e.close(),this.ctx=null}}const ca=s=>(s??"").replace(/-/g," "),Dr=({kind:s,src:e,title:t,lit:n})=>{const[i,r]=s==="phone"?[390,800]:s==="tablet"?[1024,700]:[1280,760],a=s==="phone"?9:s==="tablet"?12:9,o=s==="phone"?34:s==="tablet"?20:10,l=pt.useRef(null),[c,h]=pt.useState(.3);return pt.useEffect(()=>{const u=l.current;if(!u)return;const d=()=>h(Math.max(.05,Math.min((u.clientWidth-2*a)/i,(u.clientHeight-2*a-(s==="screen"?26:0))/r)));d();const f=new ResizeObserver(d);return f.observe(u),()=>f.disconnect()},[i,r,a,s]),ie.jsxs("figure",{className:"flex flex-col min-h-0 min-w-0 flex-1 gap-1.5",children:[ie.jsxs("figcaption",{className:"flex items-center gap-2 px-1 text-[12px] font-semibold tracking-wide whitespace-nowrap",style:{color:n?"#7dd3fc":"#94a3b8"},children:[ie.jsx("span",{className:"inline-block w-1.5 h-1.5 rounded-full shrink-0",style:{background:n?"#38bdf8":"#475569",boxShadow:n?"0 0 0 4px rgba(56,189,248,.25)":"none"}}),ie.jsx("span",{className:"truncate",title:t,children:t}),e&&!Kd&&ie.jsx("button",{type:"button",onClick:()=>Np(e,(u,d)=>window.open(u,d)),className:"ml-auto shrink-0 font-normal underline text-slate-500 hover:text-slate-200",title:"Open this tool in a tab of its own",children:"open ↗"})]}),ie.jsx("div",{ref:l,className:"relative flex-1 min-h-0 min-w-0 grid items-start justify-items-center",children:ie.jsxs("div",{className:"relative transition-transform duration-300",style:{width:i*c+2*a,transform:n?"scale(1.015)":"none"},children:[ie.jsx("div",{style:{width:i*c+2*a,height:r*c+2*a,padding:a,borderRadius:o,background:"#0b0f17",boxShadow:n?"0 0 0 2px #38bdf8, 0 0 34px rgba(56,189,248,.45), 0 18px 40px rgba(0,0,0,.55)":"0 0 0 1px #334155, 0 18px 40px rgba(0,0,0,.55)",transition:"box-shadow .3s"},children:ie.jsx("div",{style:{width:i*c,height:r*c,overflow:"hidden",borderRadius:Math.max(2,o-a),background:"#fff"},children:e&&ie.jsx("iframe",{title:t,src:e,width:i,height:r,style:{transform:`scale(${c})`,transformOrigin:"top left",border:0,background:"#fff"}})})}),s==="phone"&&ie.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 rounded-full bg-black",style:{top:a+4,width:46*Math.max(.6,c*2.2),height:9}}),s==="screen"&&ie.jsxs(ie.Fragment,{children:[ie.jsx("div",{className:"mx-auto bg-slate-700",style:{width:36,height:16}}),ie.jsx("div",{className:"mx-auto rounded-t bg-slate-600",style:{width:150,height:8}})]})]})})]})},Jc=s=>s.live?`${s.label} · Live${s.simulated?" (simulated sensors)":""}`:s.label,h2=({site:s,pace:e})=>{const t=s.warning,n=s.closed,i=(t==null?void 0:t.steps)??(n==null?void 0:n.steps)??[],r=[];for(const c of i){if(c==="call_not_answered")continue;const h=r[r.length-1];h&&h.step===c?h.n++:r.push({step:c,n:1})}const a=Kr(Zc(t),"ink"),o=!t||s.live?null:t.step==="asked"?{s:e.answer_s??30,text:"waiting for an answer"}:t.step==="calling"?{s:e.ring_s??35,text:s.kind==="carehome"?"":"ringing"}:t.step==="said_fine"?{s:e.watch_s??60,text:"still on the floor: watching"}:null,l=o?Math.max(0,o.s-t.step_since):0;return ie.jsxs("div",{className:"pointer-events-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10",style:{background:"rgba(10,15,26,.88)",backdropFilter:"blur(10px)"},children:[ie.jsxs("div",{className:"flex items-center gap-3 px-4 py-2.5",style:{background:a},children:[ie.jsx("span",{className:"grid place-items-center w-8 h-8 rounded-full bg-white/20 text-lg font-bold",children:t?t.state==="calling"?"!":t.state==="acknowledged"?"✓":"?":"✓"}),ie.jsxs("div",{className:"leading-tight",children:[ie.jsx("div",{className:"text-[17px] font-bold",children:t?Wl[t.type]??t.type:ql[(n==null?void 0:n.closed_as)??""]??"Closed"}),ie.jsxs("div",{className:"text-[12.5px] opacity-90",children:[Jc(s),(t==null?void 0:t.room)??(n==null?void 0:n.room)?` · ${ca((t==null?void 0:t.room)??(n==null?void 0:n.room))}`:""]})]}),o&&o.text&&ie.jsxs("div",{className:"ml-auto text-right leading-tight",children:[ie.jsxs("div",{className:"text-[22px] font-bold tabular-nums",children:[Math.ceil(l)," s"]}),ie.jsx("div",{className:"text-[11px] opacity-90",children:o.text})]})]}),o&&o.text&&ie.jsx("div",{className:"h-1 bg-white/10",children:ie.jsx("div",{className:"h-full",style:{width:`${Math.min(100,t.step_since/o.s*100)}%`,background:a,transition:"width .4s linear"}})}),ie.jsx("ol",{className:"flex flex-wrap items-center gap-x-1.5 gap-y-1 px-3 py-2.5 text-[12.5px]",children:r.map((c,h)=>{const u=h===r.length-1&&!!t;return ie.jsxs("li",{className:"flex items-center gap-1.5",children:[h>0&&ie.jsx("span",{className:"text-slate-500",children:"›"}),ie.jsxs("span",{className:"px-2 py-0.5 rounded-full font-semibold",style:u?{background:a,color:"#fff"}:{background:"rgba(255,255,255,.08)",color:"#cbd5e1"},children:[Yd[c.step]??ca(c.step),c.n>1?` ×${c.n}`:""]})]},`${c.step}-${h}`)})})]})},u2={fall:"A fall",help:"A call for help",night_door:"A door open at night",unwell:"Unusual breathing",still:"Still for hours",offline:"A device goes off",late:"A late rising"},d2={day:"the hours go by",night:"night: everyone in bed",story:"real time: something is happening",idle:"waiting",paused:"paused"},f2=({clock:s,script:e},t)=>{if(s.paused)return"paused";if(!e||!s.mode)return s.effective===1?"real time: something is happening":`a day in ${Math.round(1440/s.effective)} minutes`;const n=s.mode==="lapse"?(s.label??"Time-lapse").toLowerCase():s.mode==="night"&&t==="care"?"night: the residents in bed":d2[s.mode]??s.mode;return`Loop ${e.loop} · ${n}`},p2=({script:s,sites:e})=>{var i;const t=s==null?void 0:s.next;if(!t)return null;if(t.kind==="rewind")return[`Next at ${t.time}`,`The day again from ${s.start}`];const n=((i=e.find(r=>r.site===t.site))==null?void 0:i.label)??ca(t.site);return[t.time?`Next at ${t.time}`:"Next",`${u2[t.kind]??ca(t.kind)}, ${n}`]},m2={f:"fall",h:"help",n:"night-door",s:"still",u:"unwell",o:"offline",b:"back",p:"pause",r:"reset",a:"attract",v:"voice",m:"sound",t:"pace",c:"controls",x:"tools",k:"kept"},S2=()=>{var ne,oe,xe,L;const{village:s}=Rp(),e=Lp(s)?s:Pp,{data:t,isError:n}=qo({queryKey:["village",e],queryFn:()=>Up(e),enabled:!!tu(e),refetchInterval:400,refetchIntervalInBackground:!0}),[i,r]=pt.useState({site:"home-014"}),[a,o]=pt.useState(""),[l,c]=pt.useState(!0),[h,u]=pt.useState(!0),[d,f]=pt.useState(!0),[m,v]=pt.useState(!0),[x,p]=pt.useState(0),[g,_]=pt.useState(Op);pt.useEffect(()=>zp(_),[]);const b=pt.useRef(null),y=pt.useRef();y.current||(y.current=new c2);const S=pt.useRef(new Set),T=((ne=Cp())==null?void 0:ne.role)==="admin",{data:M}=qo({queryKey:["stage-sessions"],queryFn:Fp,enabled:T,staleTime:1/0,gcTime:1/0,retry:!1,refetchOnWindowFocus:!1}),w=R=>M===void 0?void 0:`/${R}/${M!=null&&M[R]?"?stage":""}`,{data:A}=qo({queryKey:["stage-family",((oe=M==null?void 0:M.family)==null?void 0:oe.email)??""],refetchInterval:2e4,enabled:M!==void 0,queryFn:async()=>{try{const R=(M==null?void 0:M.family)??JSON.parse(localStorage.getItem("ecos.session:family")??"null");if(!(R!=null&&R.token))return null;const P=await fetch("/api/places",{headers:{authorization:`Bearer ${R.token}`}});return P.ok?(await P.json()).filter(V=>V.kind==="home").map(V=>V.site):null}catch{return null}}});pt.useEffect(()=>{t!=null&&t.sites.length&&!t.sites.some(R=>R.site===i.site)&&r({site:t.sites[0].site})},[t,i.site]),pt.useEffect(()=>{const R=()=>{var V;return(V=y.current)==null?void 0:V.wake()};window.addEventListener("pointerdown",R),window.addEventListener("keydown",R);const P=y.current;return()=>{window.removeEventListener("pointerdown",R),window.removeEventListener("keydown",R),P==null||P.dispose()}},[]),pt.useEffect(()=>{var R;(R=y.current)==null||R.set(m)},[m]),pt.useEffect(()=>{const R=b.current;if(!R||!l){p(0);return}const P=()=>p(R.clientWidth);P();const V=new ResizeObserver(P);return V.observe(R),()=>V.disconnect()},[l]),pt.useEffect(()=>{var P;if(!t)return;const R=Number(t.clock.time.slice(0,2));if((P=y.current)==null||P.setNight(R<6||R>=21?1:0),!!d)for(const V of t.sites){const k=V.saying?`${V.site}:${V.saying.at}`:"";V.saying&&!S.current.has(k)&&(S.current.add(k),Bp(V.saying.text))}},[t,d]);const I=async(R,P={})=>{o("");try{await Ip(R,P,e)}catch(V){o(V instanceof Error?V.message:"refused")}},D=R=>{if(R==="voice"){d&&Gp(),f(!d);return}if(R==="sound"){v(!m);return}if(R==="controls"){u(!h);return}if(R==="tools"){c(!l);return}if(R==="kept"){kp(!g),_(!g);return}if(R==="attract")return I("attract",{on:!(t!=null&&t.attract)});if(R==="pace")return I("pace",{name:(t==null?void 0:t.pace.name)==="demo"?"real":"demo"});if(R==="pause")return I(t!=null&&t.clock.paused?"resume":"pause");if(R==="reset")return I("reset");const P=t==null?void 0:t.sites.find(k=>k.site===i.site);if(!P)return;const V=P.devices.find(k=>k.kind==="radar"&&(!i.room||k.room===i.room))??P.devices.find(k=>k.kind==="radar");if(R==="fall")return I("fall",{site:P.site,room:i.room});if(R==="help")return I("help",{site:P.site});if(R==="night-door")return I("night-door",{site:P.site});if(R==="still")return I("still",{site:P.site});if(R==="unwell")return I("unwell",{site:P.site,room:i.room});if(R==="offline"||R==="back")return I(R,{site:P.site,device:V==null?void 0:V.device})};pt.useEffect(()=>{const R=P=>{var k;if(((k=P.target)==null?void 0:k.tagName)==="INPUT"||P.metaKey||P.ctrlKey||P.altKey)return;const V=m2[P.key.toLowerCase()];V&&(P.preventDefault(),D(V))};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)});const N=pt.useMemo(()=>t?t.sites.filter(P=>P.warning&&P.warning.type!=="device_offline").sort((P,V)=>P.warning.step_since-V.warning.step_since)[0]??t.sites.find(P=>P.closed&&P.closed.type!=="device_offline"):void 0,[t]),O=A===void 0?void 0:(A==null?void 0:A[0])??"home-014",B=!!N&&(((xe=N.warning)==null?void 0:xe.state)==="calling"||((L=N.warning)==null?void 0:L.state)==="acknowledged"||!!N.closed),Y=!!N&&(A?A.includes(N.site):N.site===O),W=N?e==="care"?"carer":Y?B?"family":"companion":"network":"",se=t==null?void 0:t.sites.find(R=>R.site===O),j=((t==null?void 0:t.sites)??[]).filter(R=>R.kind==="carehome").sort((R,P)=>Number(R.floor)-Number(P.floor));if(!T)return ie.jsx("p",{className:"p-6",children:"Only an admin can open the stage."});if(!tu(e))return ie.jsxs("p",{className:"p-6",children:["This address plays the other village. The ",e==="care"?"care home's":"city's"," stage is on its own port."]});const te=t?{people:t.sites.reduce((R,P)=>R+P.people.filter(V=>V.posture!=="away"&&V.home!=="visitor"&&V.home!=="carer").length,0),out:t.sites.reduce((R,P)=>R+P.people.filter(V=>V.posture==="away"&&V.home!=="visitor"&&V.home!=="carer").length,0),wrong:t.sites.filter(R=>R.warning&&R.warning.type!=="device_offline").length,off:t.sites.reduce((R,P)=>R+P.down.length,0)}:null,ee=t?Number(t.clock.time.slice(0,2)):12,ge=t==null?void 0:t.sites.find(R=>R.site===i.site),pe=t?p2(t):null,Fe={background:"rgba(10,15,26,.78)",backdropFilter:"blur(10px)"},Se="px-1.5 py-0.5 rounded bg-white/10 text-[10.5px] font-mono text-slate-300",Oe="pointer-events-auto h-9 px-3 rounded-lg text-[13px] font-semibold border border-white/10 text-slate-100 hover:bg-white/15 transition-colors";return ie.jsxs("div",{className:"relative h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 select-none",children:[ie.jsx("div",{className:"absolute inset-0",children:t?ie.jsx(l2,{state:t,mode:e,household:O,selected:i.site,room:i.room,inset:x,onSelect:(R,P)=>r({site:R,room:P}),onHappened:R=>{var P;return(P=y.current)==null?void 0:P.play(R)}}):ie.jsx("p",{className:"p-10 text-slate-300",children:n?"The village is not answering. Is the node up with --with-sim?":"Loading the village..."})}),ie.jsxs("div",{className:"absolute left-4 top-4 flex flex-col gap-2 pointer-events-none",children:[ie.jsxs("div",{className:"flex items-stretch gap-2",children:[!Kd&&ie.jsx(Dp,{to:"/",className:`${Oe} grid place-items-center`,style:Fe,title:"Back to the map",children:"←"}),t&&ie.jsxs("div",{className:"rounded-xl px-4 py-2 border border-white/10 shadow-xl w-[270px]",style:Fe,children:[ie.jsxs("div",{className:"flex items-baseline gap-2",children:[ie.jsx("span",{className:"text-[15px]",children:ee>=7&&ee<20?"☀":"☾"}),ie.jsx("span",{className:"text-[30px] font-bold leading-none tabular-nums",children:t.clock.time}),ie.jsx("span",{className:"text-[13px] font-semibold text-slate-400",children:t.clock.day})]}),ie.jsx("div",{className:"text-[11.5px] mt-1",style:{color:t.clock.mode==="lapse"?"#fcd34d":"#94a3b8"},children:f2(t,e)}),ie.jsx("div",{className:"text-[11.5px]",style:{color:t.pace.name==="demo"?"#7dd3fc":"#cbd5e1"},children:t.pace.name==="demo"?`demo pace: the avatar waits ${t.pace.answer_s} s, not 30`:"real pace: the avatar waits 30 s"})]})]}),te&&ie.jsxs("div",{className:"flex flex-wrap gap-2 max-w-[330px] text-[12px] font-semibold",children:[ie.jsxs("span",{className:"rounded-full px-3 py-1 border border-white/10",style:Fe,children:[t.sites.length," ",e==="care"?"floors":"homes"," · ",te.people," people in",te.out?` · ${te.out} out`:""]}),ie.jsx("span",{className:"rounded-full px-3 py-1 border border-white/10",style:{...Fe,color:te.wrong?"#fca5a5":"#86efac"},children:te.wrong?`${te.wrong} warning${te.wrong>1?"s":""}`:"no warnings"}),te.off>0&&ie.jsxs("span",{className:"rounded-full px-3 py-1 border border-white/10 text-slate-300",style:Fe,children:[te.off," device",te.off>1?"s":""," offline"]}),g&&ie.jsx("span",{className:"rounded-full px-3 py-1 border border-amber-300/40 text-amber-200",style:Fe,title:"Every map here draws the street map kept in the app and asks nothing online. K again for the online map",children:"Kept map"}),t.attract&&ie.jsxs("span",{className:"rounded-xl px-3 py-1 border border-white/10 text-sky-300 leading-snug",style:Fe,children:["attract mode",pe?` · ${pe[0]}`:"",pe&&ie.jsx("span",{className:"block font-normal text-sky-100",children:pe[1]})]})]}),ie.jsx("ol",{className:"flex flex-col gap-1 max-w-[330px] mt-1","aria-label":"What is happening","aria-live":"polite",children:((t==null?void 0:t.captions)??[]).slice(-3).map((R,P,V)=>ie.jsxs("li",{className:"rounded-lg px-3 py-1.5 border border-white/10 leading-snug",style:{background:"rgba(10,15,26,.9)",backdropFilter:"blur(10px)"},children:[ie.jsx("span",{className:"font-mono text-[11px] text-slate-400 mr-2",children:R.time}),ie.jsxs("span",{className:P===V.length-1?"text-[13.5px] font-bold":"text-[12.5px] text-slate-400",children:[R.label,": ",R.text]})]},`${R.time}-${R.site}-${R.text}-${P}`))})]}),t&&N&&ie.jsx("div",{className:"absolute top-4 pointer-events-none",style:{left:352,right:x+20},children:ie.jsx("div",{className:"mx-auto max-w-[560px]",children:ie.jsx(h2,{site:N,pace:t.pace})})}),h&&ie.jsxs("div",{className:"absolute bottom-4 flex flex-col items-center gap-1.5 pointer-events-none",style:{left:16,right:x+16},children:[ie.jsx("span",{className:"rounded-full px-3 py-1 text-[12px] border border-white/10",style:Fe,children:ge?ie.jsxs(ie.Fragment,{children:["Chosen: ",ie.jsx("b",{children:Jc(ge)}),i.room?` · ${ca(i.room)}`:""]}):`Click a ${e==="care"?"floor":"home"} to choose it`}),ie.jsxs("div",{className:"flex flex-wrap justify-center gap-1.5 rounded-xl p-1.5 border border-white/10",style:Fe,children:[[["fall","Fall","F"],["help","Help","H"],["night-door","Night door","N"],["still","Still for hours","S"],["unwell","Breathing","U"],["offline","Device off","O"],["back","Device back","B"]].map(([R,P,V])=>ie.jsxs("button",{type:"button",className:Oe,onClick:()=>void D(R),children:[P," ",ie.jsx("span",{className:Se,children:V})]},R)),ie.jsx("span",{className:"w-px bg-white/10 mx-0.5"}),ie.jsxs("button",{type:"button",className:Oe,onClick:()=>void D("pause"),children:[t!=null&&t.clock.paused?"Resume":"Pause"," ",ie.jsx("span",{className:Se,children:"P"})]}),[30,60,180].map(R=>ie.jsxs("button",{type:"button",className:Oe,style:(t==null?void 0:t.clock.speed)===R?{background:"#0369a1"}:void 0,title:`The day at ${R}× while nothing is happening. A story always plays in real time; the night, once everyone is in bed, goes faster, and a time-lapse runs at least 180×.`,onClick:()=>void I("speed",{speed:R}),children:[R,"×"]},R)),["03:00","07:30","13:00","21:30"].map(R=>ie.jsx("button",{type:"button",className:Oe,title:`Jump the village's clock to ${R}`,onClick:()=>void I("jump",{time:R}),children:R},R)),!(t!=null&&t.script)&&ie.jsx("button",{type:"button",className:Oe,title:`The next Sunday at 15:00: visitors ${e==="care"?"on the floors":"in some homes"}`,onClick:()=>void I("jump",{time:"15:00",day:"sunday"}),children:"Sun"}),ie.jsx("span",{className:"w-px bg-white/10 mx-0.5"}),ie.jsxs("button",{type:"button",className:Oe,style:t!=null&&t.attract?{background:"#0369a1"}:void 0,title:"Left alone, the village plays its day's script, one story after another where each person's routine has them, and answers each the way the family and the carers would. At the end of the day it starts again.",onClick:()=>void D("attract"),children:["Attract ",ie.jsx("span",{className:Se,children:"A"})]}),ie.jsxs("button",{type:"button",className:Oe,style:(t==null?void 0:t.pace.name)==="demo"?{background:"#0369a1"}:void 0,title:"Demo pace: every wait is shortened so a whole story fits in half a minute. Real pace: the product's own timing (the avatar waits 30 seconds, a call rings for 35).",onClick:()=>void D("pace"),children:[(t==null?void 0:t.pace.name)==="demo"?"Demo pace":"Real pace"," ",ie.jsx("span",{className:Se,children:"T"})]}),ie.jsxs("button",{type:"button",className:Oe,style:d?{background:"#0369a1"}:void 0,title:"What an avatar says is said here too, through the node's voice",onClick:()=>void D("voice"),children:["Voice ",ie.jsx("span",{className:Se,children:"V"})]}),ie.jsxs("button",{type:"button",className:Oe,style:m?{background:"#0369a1"}:void 0,title:"Chimes, the telephone, birds and crickets",onClick:()=>void D("sound"),children:["Sound ",ie.jsx("span",{className:Se,children:"M"})]}),ie.jsxs("button",{type:"button",className:Oe,style:g?{background:"#0369a1"}:void 0,title:"Every map here draws only the street map kept in the app and asks nothing online, for when the stand's network is bad. Press again for the online map",onClick:()=>void D("kept"),children:["Kept map ",ie.jsx("span",{className:Se,children:"K"})]}),ie.jsxs("button",{type:"button",className:Oe,onClick:()=>void D("reset"),children:["Reset ",ie.jsx("span",{className:Se,children:"R"})]}),ie.jsxs("button",{type:"button",className:Oe,onClick:()=>void D("tools"),children:[l?"Hide tools":"Show tools"," ",ie.jsx("span",{className:Se,children:"X"})]})]}),a&&ie.jsx("span",{role:"status",className:"rounded px-2 py-0.5 text-[12px] bg-red-900/80 text-red-100",children:a})]}),!h&&ie.jsxs("button",{type:"button",className:`${Oe} absolute bottom-4`,style:{...Fe,right:x+16},onClick:()=>u(!0),children:["Controls ",ie.jsx("span",{className:Se,children:"C"})]}),l&&ie.jsxs("aside",{ref:b,className:"absolute right-0 top-0 bottom-0 flex flex-col gap-3 p-4 pl-10","aria-label":"Tools",style:{width:"min(48vw, 900px)",background:"linear-gradient(90deg, rgba(6,10,18,0) 0%, rgba(6,10,18,.74) 14%, rgba(6,10,18,.92) 100%)"},children:[e==="city"?ie.jsxs(ie.Fragment,{children:[ie.jsxs("div",{className:"min-h-0 flex gap-4",style:{flex:"1.45 1 0"},children:[ie.jsx("div",{className:"min-h-0 flex",style:{flex:"0 0 30%"},children:ie.jsx(Dr,{kind:"phone",src:w("family"),title:"Family · phone",lit:W==="family"})}),ie.jsx(Dr,{kind:"tablet",src:O&&`/companion?stage=${O}`,title:`Companion · at home${se?` · ${Jc(se)}`:""}`,lit:W==="companion"})]}),ie.jsxs("div",{className:"min-h-0 flex gap-4",style:{flex:"1 1 0"},children:[ie.jsx("div",{className:"min-h-0 flex",style:{flex:"0 0 45%"},children:ie.jsx(Dr,{kind:"tablet",src:w("carer"),title:"Carers · tablet on the floor",lit:W==="carer"})}),ie.jsx(Dr,{kind:"screen",src:w("network"),title:"Network · map of the homes",lit:W==="network"})]})]}):j.map(R=>ie.jsx("div",{className:"min-h-0 flex",style:{flex:"1 1 0"},children:ie.jsx(Dr,{kind:"tablet",src:M===void 0?void 0:`/carer/tablet/${R.site}${M!=null&&M.carer?"?stage":""}`,title:`Carers · tablet on floor ${R.floor??R.label}`,lit:W==="carer"&&(N==null?void 0:N.site)===R.site})},R.site)),M===null&&ie.jsx("p",{role:"status",className:"text-[12px] text-amber-200",children:"This node has no demo accounts, so each device shows whoever signed in to it here. `./node seed-demo` on the node makes them."})]})]})};export{S2 as default};
