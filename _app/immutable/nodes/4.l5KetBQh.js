import{r as q,s as K,n as j,o as Q}from"../chunks/scheduler.zMJaRgub.js";import{t as Y,S as J,i as X,e as A,s as B,c as I,j as R,a as L,g as Z,d as M,n as v,b as z,l as S,z as N,A as T,h as b,k as H,m as W}from"../chunks/index.Bzf0yDzl.js";function F(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function $(n,s){n.d(1),s.delete(n.key)}function ee(n,s,t,e,f,r,u,p,o,i,y,w){let h=n.length,m=r.length,g=h;const l={};for(;g--;)l[n[g].key]=g;const a=[],d=new Map,P=new Map,k=[];for(g=m;g--;){const c=w(f,r,g),C=t(c);let _=u.get(C);_?e&&k.push(()=>_.p(c,s)):(_=i(C,c),_.c()),d.set(C,a[g]=_),C in l&&P.set(C,Math.abs(g-l[C]))}const x=new Set,V=new Set;function E(c){Y(c,1),c.m(p,y),u.set(c.key,c),y=c.first,m--}for(;h&&m;){const c=a[m-1],C=n[h-1],_=c.key,O=C.key;c===C?(y=c.first,h--,m--):d.has(O)?!u.has(_)||x.has(_)?E(c):V.has(O)?h--:P.get(_)>P.get(O)?(V.add(_),E(c)):(x.add(O),h--):(o(C,u),h--)}for(;h--;){const c=n[h];d.has(c.key)||o(c,u)}for(;m;)E(a[m-1]);return q(k),a}const D={Admissions:"5140",Ambulance:"911 (2nd step: Call Security at 5073 & report info)","ATP (Nursing station)":"5300","Bellaire office":"5615","Brain Stimulation":"5118","Budget, Cashier & Accounting":"5037","Building 6 Welcome Desk":"5266","Care Coordination Center":"5400",Chaplaincy:"5067","Commons Classrooms":"5183","Compass (Nursing station)":"5200","Compliance Safe Hotline":"855-662-7233","Continuing Education":"5529",CPAS:"5316",Engineering:"5013","Emergency/Security":"5770","Executive Offices":"5028","Facilities Office":"5075","Faculty & Medical Staff Affairs":"5016","Finance Department-entire team":"5037","Gym/Wellness Center":"5656","Game & Weight Room":"5654","Exercise/Yoga Room":"5127","HIMS (medical records)":"5077 & 5150","Hope/Adult Treatment Program":"5410","House Supervisor/Staffing":"5051",Housekeeping:"5014","Human Resources":"5313","Infection Control":"5036","Internal Medicine":"5072","IT Help Desk/IT Support/MyIT":"5141","Kitchen/Dining":"5655, 5650","Mail Room":"5190",Marketing:"5060","Multipurpose Room":"5167","Menninger 360 office":"5031","Navigator recovery program":"5422","On-call Internist":"5400",Pharmacy:"5151","On-call Psychiatrist":"View on-call schedule in Quick Links on The Link","On-call Executive":"281-796-3834","Outpatient Assessments":"5498","Outpatient Services office":"5307","Outpatient Services Center":"5906","Pathfinder office":"5222","Pathfinder RA on duty":"281-220-9081","Patient Advocate":"5035",Payroll:"5243","Pharmacy (during regular hours)":"5155","Philanthropy (development)":"5270",Policies:"5645","Reception/Welcome Desk":"5020",Research:"5339","Utilization Review":"Ron Dancy, 5445 – Professionals, Hope & Compass","Coding/Auditing":"5050 - Professionals, Hope & Compass","Claims/Credentialing/Past Due Collections":"5260 - all services","Financial Assistance/Active Collections":"5046 - financial assistance applications; collections for units & Pathfinder","Security non-emergency":"5073","Sleep Medicine":"5637","Solutions Outpatient Services":"214-369-1155","Strategic Management":"5002","The Gathering Place":"5731","Welcome Desk in Commons":"5020"};function G(n,s,t){const e=n.slice();return e[6]=s[t][0],e[7]=s[t][1],e}function U(n,s){let t,e=s[6]+"",f,r,u=s[7]+"",p;return{key:n,first:null,c(){t=A("div"),f=b(e),r=b(": "),p=b(u),this.h()},l(o){t=I(o,"DIV",{class:!0});var i=R(t);f=H(i,e),r=H(i,": "),p=H(i,u),i.forEach(M),this.h()},h(){v(t,"class","contactItem svelte-1x1d4cl"),this.first=t},m(o,i){z(o,t,i),S(t,f),S(t,r),S(t,p)},p(o,i){s=o,i&2&&e!==(e=s[6]+"")&&W(f,e),i&2&&u!==(u=s[7]+"")&&W(p,u)},d(o){o&&M(t)}}}function te(n){let s,t,e,f,r,u="Reset",p,o,i=[],y=new Map,w,h,m=F(n[1]);const g=l=>l[6];for(let l=0;l<m.length;l+=1){let a=G(n,m,l),d=g(a);y.set(d,i[l]=U(d,a))}return{c(){s=A("div"),t=A("div"),e=A("input"),f=B(),r=A("button"),r.textContent=u,p=B(),o=A("div");for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){s=I(l,"DIV",{id:!0,class:!0});var a=R(s);t=I(a,"DIV",{id:!0,class:!0});var d=R(t);e=I(d,"INPUT",{type:!0,placeholder:!0,class:!0}),f=L(d),r=I(d,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(r)!=="svelte-v8m74q"&&(r.textContent=u),d.forEach(M),p=L(a),o=I(a,"DIV",{id:!0,class:!0});var P=R(o);for(let k=0;k<i.length;k+=1)i[k].l(P);P.forEach(M),a.forEach(M),this.h()},h(){v(e,"type","text"),v(e,"placeholder","Search departments"),e.autofocus=!0,v(e,"class","svelte-1x1d4cl"),v(r,"class","svelte-1x1d4cl"),v(t,"id","row"),v(t,"class","svelte-1x1d4cl"),v(o,"id","contacts"),v(o,"class","svelte-1x1d4cl"),v(s,"id","contactList"),v(s,"class","svelte-1x1d4cl")},m(l,a){z(l,s,a),S(s,t),S(t,e),N(e,n[0]),S(t,f),S(t,r),S(s,p),S(s,o);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(o,null);e.focus(),w||(h=[T(e,"input",n[4]),T(e,"input",n[2]),T(r,"click",n[3])],w=!0)},p(l,[a]){a&1&&e.value!==l[0]&&N(e,l[0]),a&2&&(m=F(l[1]),i=ee(i,a,g,1,l,m,y,o,$,U,null,G))},i:j,o:j,d(l){l&&M(s);for(let a=0;a<i.length;a+=1)i[a].d();w=!1,q(h)}}}function ne(n,s,t){let e="",f=Object.entries(D);function r(){t(1,f=Object.entries(D))}function u(i){const y=i.target.value.toLowerCase();t(1,f=Object.entries(D).filter(([w,h])=>w.toLowerCase().includes(y)||h.includes(y)))}function p(){t(0,e=""),t(1,f=Object.entries(D)),e!==null&&e.focus()}Q(r);function o(){e=this.value,t(0,e)}return[e,f,u,p,o]}class le extends J{constructor(s){super(),X(this,s,ne,te,K,{})}}export{le as component};