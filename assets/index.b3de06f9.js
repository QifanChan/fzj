import{R as e,l as t,f as a,r as s}from"./vendor.f6baed35.js";import{A as r,a as n,b as l,L as m,E as o,d as c}from"./fzj.e2c52c89.js";const i=({data:t})=>{const{author:a}=t;return e.createElement("div",{className:"comment-item",key:t.id},e.createElement(r,{className:"comment-author",avatar:a.avatarUrl,name:a.login}),e.createElement("div",{className:"comment-body",dangerouslySetInnerHTML:{__html:t.bodyHTML}}))};function d(){const{issues:r}=t(),[d,u]=n(),f=l(),[E,{loading:v,error:p,data:y}]=a(c,{variables:{number:parseInt(r)}});if(s.exports.useEffect((()=>{f.has(r)||E()}),[]),s.exports.useEffect((()=>{y&&u(d.set(r,y))}),[y]),v)return e.createElement(m,null);if(p)return e.createElement(o,null);const b=y||f.get(r);if(!b)return null;const{title:g,bodyHTML:h,comments:N}=b.repository.discussion;return e.createElement("div",{className:"issues-view view"},e.createElement("div",{className:"post"},e.createElement("h1",{className:"title"},g),e.createElement("div",{dangerouslySetInnerHTML:{__html:h}}),N.edges.map((({node:t})=>e.createElement(i,{key:t.id,data:t})))))}export default d;