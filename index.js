import{a as h,S as u,i as n}from"./assets/vendor-CTQfvZb8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const y=r=>h.get("https://pixabay.com/api/",{params:{key:"49208970-c1347c58b4866d3d505700044",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}}),m=document.querySelector(".gallery"),p=document.querySelector(".loader");let c=new u(".gallery a");const v=r=>{const t=r.map(({largeImageURL:o,webformatURL:i,tags:e,likes:s,views:a,comments:g,downloads:f})=>`
    <li class="img-list-item">
        <a href="${o}" class="gallery-link">
        <img class="img" src="${i}" alt="${e}" width="360"/>
      </a>
      <div class="info-wrapper">
        <div class="img-info">
          <p class="label">Likes</p>
          <p class="value">${s}</p>
        </div>
        <div class="img-info">
          <p class="label">Views</p>
          <p class="value">${a}</p>
        </div>
        <div class="img-info">
          <p class="label">Comments</p>
          <p class="value">${g}</p>
        </div>
        <div class="img-info">
          <p class="label">Downloads</p>
          <p class="value">${f}</p>
        </div>
      </div>
    </li>`).join("");m.innerHTML=t,c?c.refresh():c=new u(".gallery a")},b=()=>{m.innerHTML=""},L=()=>{console.log("Показать лоадер"),p.classList.remove("is-hidden")},d=()=>{console.log("Скрыть лоадер"),p.classList.add("is-hidden")},l=document.querySelector("form");console.log(l);const w=r=>{r.preventDefault();const t=r.currentTarget.elements["search-text"].value.trim();if(b(),t===""){n.show({message:"Please enter your request!",position:"topRight"});return}L(),y(t).then(o=>{d();const i=o.data.hits;if(i.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",theme:"dark"}),l.reset();return}v(i),l.reset()}).catch(o=>{d(),n.error({message:o.message,position:"topRight"})})};l.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
