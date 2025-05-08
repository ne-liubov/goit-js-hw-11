import{a as p,i as n,S as g}from"./assets/vendor-DC--pQ-G.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const f=o=>p.get("https://pixabay.com/api/",{params:{key:"49208970-c1347c58b4866d3d505700044",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}}),m=document.querySelector(".gallery"),c=document.querySelector(".loader");console.log(c);const h=o=>{const{largeImageURL:t,webformatURL:r,tags:a,likes:e,views:s,comments:i,downloads:u}=o;return`
    <li class="img-list-item">
        <a href="${t}" class="gallery-link">
        <img class="img" src="${r}" alt="${a}" width="360"/>
      </a>
      <div class="info-wrapper">
        <div class="img-info">
          <p class="label">Likes</p>
          <p class="value">${e}</p>
        </div>
        <div class="img-info">
          <p class="label">Views</p>
          <p class="value">${s}</p>
        </div>
        <div class="img-info">
          <p class="label">Comments</p>
          <p class="value">${i}</p>
        </div>
        <div class="img-info">
          <p class="label">Downloads</p>
          <p class="value">${u}</p>
        </div>
      </div>
    </li>`},y=()=>{m.innerHTML=""},v=()=>{console.log("Показать лоадер"),c.classList.remove("is-hidden")},d=()=>{console.log("Скрыть лоадер"),c.classList.add("is-hidden")},l=document.querySelector("form");console.log(l);const L=o=>{o.preventDefault();const t=o.currentTarget.elements["search-text"].value.trim();if(y(),t===""){n.show({message:"Please enter your request!",position:"topRight"});return}v(),f(t).then(r=>{d();const a=r.data.hits;if(a.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",theme:"dark"}),l.reset();return}const e=a.map(s=>h(s)).join("");m.innerHTML=e,l.reset(),new g(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250})}).catch(r=>{d(),n.error({message:r.message,position:"topRight"})})};l.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
