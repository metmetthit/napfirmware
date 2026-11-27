const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./usb-serial-CAItRhMR.js","./rolldown-runtime-XKyaHtl9.js","./install-dialog-BYHOJxry.js","./styles-DNbzdsho.js","./rom-GkxcFgpz.js","./esp32-Drz1x7NQ.js","./esp32c3-BpTA9W4Y.js","./esp32c6-BUvL9OyF.js","./no-port-picked-BWm4W9KS.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`modulepreload`,t=function(e,t){return new URL(e,t).href},n={},r=function(e){return e.pathname.endsWith(`.css`)},i=function(i,a,o){let s=Promise.resolve();if(a&&a.length>0){let i,c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);function u(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function d(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}s=u(a.map(a=>{a=t(a,o);let s=d(a);if(s.href in n)return;n[s.href]=!0;let c=r(s);if(i===void 0){i={all:new Set,styles:new Set};let e=document.getElementsByTagName(`link`);for(let t=e.length-1;t>=0;t--){let n=e[t];i.all.add(n.href),n.rel===`stylesheet`&&i.styles.add(n.href)}}if((c?i.styles:i.all).has(s.href))return;let u=document.createElement(`link`);if(u.rel=c?`stylesheet`:e,c||(u.as=`script`),u.crossOrigin=``,u.href=s.href,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),c)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${s}`)))})}).filter(e=>e!==void 0))}function c(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return s.then(e=>{for(let t of e||[])t.status===`rejected`&&c(t.reason);return i().catch(c)})},a=()=>`usb`in navigator&&(!(`serial`in navigator)||/Android/.test(navigator.userAgent)),o=()=>`serial`in navigator||`usb`in navigator,s,c=()=>s??(s=i(()=>import(`./usb-serial-CAItRhMR.js`).then(e=>e.t),__vite__mapDeps([0,1]),import.meta.url)),l=()=>{a()&&c().catch(()=>{s=void 0})},u=async()=>{if(!a())return navigator.serial.requestPort();let{requestUsbSerialPort:e}=await c();return e()},d=async e=>{i(()=>import(`./install-dialog-BYHOJxry.js`),__vite__mapDeps([2,1,3,4,5,6,7]),import.meta.url);let t;try{t=await u()}catch(t){if(t.name===`NotFoundError`){i(()=>import(`./no-port-picked-BWm4W9KS.js`).then(t=>t.openNoPortPickedDialog(()=>d(e))),__vite__mapDeps([8,3]),import.meta.url);return}alert(`Error: ${t.message}`);return}if(!t)return;try{await t.open({baudRate:115200,bufferSize:8192})}catch(e){alert(e.message);return}let n=document.createElement(`ewt-install-dialog`);n.port=t,n.manifestPath=e.manifest||e.getAttribute(`manifest`),n.overrides=e.overrides,n.addEventListener(`closed`,()=>{t.close()},{once:!0}),document.body.appendChild(n)},f=class e extends HTMLElement{connectedCallback(){if(this.renderRoot)return;if(this.renderRoot=this.attachShadow({mode:`open`}),!e.isSupported||!e.isAllowed){this.toggleAttribute(`install-unsupported`,!0),this.renderRoot.innerHTML=e.isAllowed?`<slot name='unsupported'>Your browser does not support installing things on ESP devices. Use Mozilla Firefox, Google Chrome, Microsoft Edge or Google Chrome on Android.</slot>`:`<slot name='not-allowed'>You can only install ESP devices on HTTPS websites or on the localhost.</slot>`;return}this.toggleAttribute(`install-supported`,!0),l();let t=document.createElement(`slot`);t.addEventListener(`click`,async e=>{e.preventDefault(),d(this)}),t.name=`activate`;let n=document.createElement(`button`);if(n.innerText=`Connect`,t.append(n),`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype){let t=new CSSStyleSheet;t.replaceSync(e.style),this.renderRoot.adoptedStyleSheets=[t]}else{let t=document.createElement(`style`);t.innerText=e.style,this.renderRoot.append(t)}this.renderRoot.append(t)}};f.isSupported=o(),f.isAllowed=window.isSecureContext,f.style=`
  button {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 24px;
    color: var(--esp-tools-button-text-color, #fff);
    background-color: var(--esp-tools-button-color, #03a9f4);
    border: none;
    border-radius: var(--esp-tools-button-border-radius, 9999px);
  }
  button::before {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.2;
    border-radius: var(--esp-tools-button-border-radius, 9999px);
  }
  button:hover::before {
    background-color: rgba(255,255,255,.8);
  }
  button:focus {
    outline: none;
  }
  button:focus::before {
    background-color: white;
  }
  button:active::before {
    background-color: grey;
  }
  :host([active]) button {
    color: rgba(0, 0, 0, 0.38);
    background-color: rgba(0, 0, 0, 0.12);
    box-shadow: none;
    cursor: unset;
    pointer-events: none;
  }
  .hidden {
    display: none;
  }`,customElements.define(`esp-web-install-button`,f);var p=e=>document.querySelector(e),m=e=>(e/1048576).toLocaleString(`vi-VN`,{maximumFractionDigits:1})+` MB`,h=e=>e>17e8?new Date(e*1e3).toLocaleDateString(`vi-VN`):``,g=[];p(`#lic`).href=`licenses.html`,p(`#secure`).hidden=location.protocol!==`https:`;function _(e){let t=g.find(t=>t.slot===e);if(!t)return;if(p(`#version`).textContent=t.version||t.name,p(`#meta`).textContent=[`ESP32-S3 N16R8`,m(t.size),h(t.uploaded)].filter(Boolean).join(` · `),p(`#notes`).hidden=!t.notes,p(`#notes`).textContent=``,t.notes){let e=document.createElement(`b`);e.textContent=`Có gì mới: `,p(`#notes`).append(e,t.notes)}let n=g.reduce((e,t)=>t.uploaded>e.uploaded?t:e,g[0]);p(`#latest`).hidden=n.slot!==t.slot,p(`#installer`).manifest=new URL(`firmware/${t.slot}/manifest.json`,location.href).href}async function v(){try{let e=await(await fetch(`firmware/firmware.json`,{cache:`no-store`})).json();if(g=e.items||[],e.downloads&&(p(`#count`).textContent=`Đã nạp ${e.downloads.toLocaleString(`vi-VN`)} lần`),p(`#empty`).hidden=g.length>0,p(`#picker`).hidden=g.length===0,!g.length)return;let t=p(`#fw`);t.replaceChildren(...g.map(e=>{let t=document.createElement(`option`);return t.value=e.slot,t.textContent=e.version?`${e.name||`Firmware`} — ${e.version}`:e.name,t}));let n=g.some(t=>t.slot===e.default)?e.default:g[0].slot;t.value=n,t.onchange=()=>_(Number(t.value)),_(n)}catch{p(`#empty`).hidden=!1,p(`#empty`).textContent=`Không tải được danh sách firmware. Hãy tải lại trang.`}}v();export{i as t};