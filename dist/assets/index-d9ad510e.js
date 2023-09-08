import{render as L}from"https://esm.sh/solid-js/web";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(l){if(l.ep)return;l.ep=!0;const s=r(l);fetch(l.href,s)}})();let O=N;const a=1,g=2,P={owned:null,cleanups:null,context:null,owner:null};var u=null;let m=null,c=null,i=null,f=null,d=0;function T(t,e,r){const n=D(t,e,!1,a);x(n)}function _(t){if(c===null)return t();const e=c;c=null;try{return t()}finally{c=e}}function U(t,e,r){let n=t.value;return(!t.comparator||!t.comparator(n,e))&&(t.value=e,t.observers&&t.observers.length&&b(()=>{for(let l=0;l<t.observers.length;l+=1){const s=t.observers[l],o=m&&m.running;o&&m.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?i.push(s):f.push(s),s.observers&&S(s)),o||(s.state=a)}if(i.length>1e6)throw i=[],new Error},!1)),e}function x(t){if(!t.fn)return;w(t);const e=u,r=c,n=d;c=u=t,k(t,t.value,n),c=r,u=e}function k(t,e,r){let n;try{n=t.fn(e)}catch(l){return t.pure&&(t.state=a,t.owned&&t.owned.forEach(w),t.owned=null),t.updatedAt=r+1,C(l)}(!t.updatedAt||t.updatedAt<=r)&&(t.updatedAt!=null&&"observers"in t?U(t,n):t.value=n,t.updatedAt=r)}function D(t,e,r,n=a,l){const s={fn:t,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:u,context:null,pure:r};return u===null||u!==P&&(u.owned?u.owned.push(s):u.owned=[s]),s}function E(t){if(t.state===0)return;if(t.state===g)return v(t);if(t.suspense&&_(t.suspense.inFallback))return t.suspense.effects.push(t);const e=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<d);)t.state&&e.push(t);for(let r=e.length-1;r>=0;r--)if(t=e[r],t.state===a)x(t);else if(t.state===g){const n=i;i=null,b(()=>v(t,e[0]),!1),i=n}}function b(t,e){if(i)return t();let r=!1;e||(i=[]),f?r=!0:f=[],d++;try{const n=t();return I(r),n}catch(n){r||(f=null),i=null,C(n)}}function I(t){if(i&&(N(i),i=null),t)return;const e=f;f=null,e.length&&b(()=>O(e),!1)}function N(t){for(let e=0;e<t.length;e++)E(t[e])}function v(t,e){t.state=0;for(let r=0;r<t.sources.length;r+=1){const n=t.sources[r];if(n.sources){const l=n.state;l===a?n!==e&&(!n.updatedAt||n.updatedAt<d)&&E(n):l===g&&v(n,e)}}}function S(t){for(let e=0;e<t.observers.length;e+=1){const r=t.observers[e];r.state||(r.state=g,r.pure?i.push(r):f.push(r),r.observers&&S(r))}}function w(t){let e;if(t.sources)for(;t.sources.length;){const r=t.sources.pop(),n=t.sourceSlots.pop(),l=r.observers;if(l&&l.length){const s=l.pop(),o=r.observerSlots.pop();n<l.length&&(s.sourceSlots[o]=n,l[n]=s,r.observerSlots[n]=o)}}if(t.owned){for(e=t.owned.length-1;e>=0;e--)w(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}t.state=0,t.context=null}function C(t){throw t}function F(t,e){return _(()=>t(e||{}))}function M(t,e,r){let n;const l=()=>{const o=document.createElement("template");return o.innerHTML=t,r?o.content.firstChild.firstChild:o.content.firstChild},s=e?()=>_(()=>document.importNode(n||(n=l()),!0)):()=>(n||(n=l())).cloneNode(!0);return s.cloneNode=s,s}function R(t,e,r){r==null?t.removeAttribute(e):t.setAttribute(e,r)}function p(t,e){e==null?t.removeAttribute("class"):t.className=e}const j="/assets/logo-123b04bc.svg",B="_App_9g4xh_1",G="_logo_9g4xh_5",H="_header_9g4xh_11",K="_link_9g4xh_22",h={App:B,logo:G,"logo-spin":"_logo-spin_9g4xh_1",header:H,link:K},Q=M('<div><header><img alt="logo"><p>Edit <code>src/App.tsx</code> and save to reload.</p><a href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer">Learn Solid'),V=()=>(()=>{const t=Q(),e=t.firstChild,r=e.firstChild,n=r.nextSibling,l=n.nextSibling;return R(r,"src",j),T(s=>{const o=h.App,A=h.header,y=h.logo,$=h.link;return o!==s._v$&&p(t,s._v$=o),A!==s._v$2&&p(e,s._v$2=A),y!==s._v$3&&p(r,s._v$3=y),$!==s._v$4&&p(l,s._v$4=$),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),t})(),W=document.getElementById("root");L(()=>F(V,{}),W);