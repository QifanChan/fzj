import{e,R as t,u as n,r}from"./vendor.5933ff1c.js";import{c as a,h as o,u as i,E as s,a as c,e as l,A as u,L as f,s as m,d as v}from"./fzj.f4f9c933.js";var d=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},p="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,b=p||g||Function("return this")(),y=b,E=function(){return y.Date.now()},j=/\s/;var h=function(e){for(var t=e.length;t--&&j.test(e.charAt(t)););return t},N=/^\s+/;var x=function(e){return e?e.slice(0,h(e)+1).replace(N,""):e},w=b.Symbol,O=w,k=Object.prototype,T=k.hasOwnProperty,C=k.toString,I=O?O.toStringTag:void 0;var z=function(e){var t=T.call(e,I),n=e[I];try{e[I]=void 0;var r=!0}catch(o){}var a=C.call(e);return r&&(t?e[I]=n:delete e[I]),a},P=Object.prototype.toString;var S=z,$=function(e){return P.call(e)},L=w?w.toStringTag:void 0;var A=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":L&&L in Object(e)?S(e):$(e)},M=function(e){return null!=e&&"object"==typeof e};var U=x,W=d,q=function(e){return"symbol"==typeof e||M(e)&&"[object Symbol]"==A(e)},D=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,R=/^0o[0-7]+$/i,_=parseInt;var B=d,G=E,H=function(e){if("number"==typeof e)return e;if(q(e))return NaN;if(W(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=W(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=U(e);var n=F.test(e);return n||R.test(e)?_(e.slice(2),n?2:8):D.test(e)?NaN:+e},J=Math.max,K=Math.min;var Q=function(e,t,n){var r,a,o,i,s,c,l=0,u=!1,f=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,o=a;return r=a=void 0,l=t,i=e.apply(o,n)}function d(e){return l=e,s=setTimeout(g,t),u?v(e):i}function p(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-l>=o}function g(){var e=G();if(p(e))return b(e);s=setTimeout(g,function(e){var n=t-(e-c);return f?K(n,o-(e-l)):n}(e))}function b(e){return s=void 0,m&&r?v(e):(r=a=void 0,i)}function y(){var e=G(),n=p(e);if(r=arguments,a=this,c=e,n){if(void 0===s)return d(c);if(f)return clearTimeout(s),s=setTimeout(g,t),v(c)}return void 0===s&&(s=setTimeout(g,t)),i}return t=H(t)||0,B(n)&&(u=!!n.leading,o=(f="maxWait"in n)?J(H(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),y.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=a=s=void 0},y.flush=function(){return void 0===s?i:b(G())},y};const V=({className:e,name:n,color:r})=>{const i=`https://github.com/lencx/fzj/discussions?discussions_q=label%3A${n}`;return t.createElement("span",{style:{background:`#${r}`},className:a("fzj-label",e),onClick:e=>{e.stopPropagation(),o(i)}},t.createElement("span",null,n))};function X(){const e=n(),[a,d]=i(),[p,g]=a,[b,{loading:y,error:E,data:j}]=d,h=r.exports.useCallback(Q((()=>{m((()=>{p.pageInfo.hasNextPage&&b({variables:{cursor:p.pageInfo.cursor}})}))}),500,{leading:!0}),[p.pageInfo]);r.exports.useEffect((()=>(window.addEventListener("scroll",h,!1),()=>{window.removeEventListener("scroll",h,!1)})),[p.pageInfo]),r.exports.useEffect((()=>{!p.list.length&&b()}),[]),r.exports.useEffect((()=>{if(j){const{endCursor:e,hasNextPage:t}=j.repository.discussions.pageInfo;g({pageInfo:{cursor:e,hasNextPage:t},list:[...p.list,...j.repository.discussions.edges||[]]})}}),[j]);if(E)return t.createElement(s,null);const N=p.list;return t.createElement("div",{className:"home-view view"},t.createElement("div",{className:"fzj-list-box"},t.createElement("div",{className:"fzj-list"},N.map((({node:n,cursor:r})=>{const{category:a,author:i,number:s,labels:f}=n;return t.createElement("div",{key:r,className:"fzj-item",onClick:t=>((t,n)=>{t.stopPropagation(),e.push(`/issues/${n}`)})(t,s)},t.createElement("div",{className:"title"},t.createElement("em",{className:"issues",onClick:()=>o(v(s))},"#",s),t.createElement("span",null,n.title)),t.createElement("div",{className:"info"},t.createElement("span",{className:"category",onClick:()=>o(c(a.name))},l[a.emoji]," ",a.name),t.createElement(u,{avatar:i.avatarUrl,name:i.login,onClick:()=>o(i.url)}),t.createElement("div",{className:"labels"},f.edges.map((({node:e})=>t.createElement(V,{key:e.id,name:e.name,color:e.color}))))))})),y&&N.length>0&&t.createElement("p",{className:"data-loading"},"Loading..."))),t.createElement(f,{visible:y&&0===N.length}))}export default X;
