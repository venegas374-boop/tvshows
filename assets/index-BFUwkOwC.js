(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const d="https://placehold.co/210x295",l=async s=>{const o=`https://api.tvmaze.com/shows/${s}`,n=await fetch(o).then(r=>r.json());return{name:n.name,rating:n.rating,image:n.image?.medium??d}},u=async s=>{const o=`https://api.tvmaze.com/shows/${s}/episodes`,r=(await fetch(o).then(e=>e.json())).map(e=>({number:e.number,season:e.season,rating:e.rating.average}));return Object.groupBy(r,e=>e.season)},c="2993",a=await l(c),m=await u(c),p=document.querySelector("header"),f=document.querySelector(".episodes");p.setHTMLUnsafe(`
  <img class="poster" src="${a.image}" alt="Póster de ${a.name}">
  <div>
    <h1>${a.name}</h1>
    <p>Valoración: ${a.rating.average??"Sin valoración"}</p>
  </div>
`);const h=s=>`
  <div class="episode episode-${s.number} rating-${Math.round(s.rating??0)}"
       title="Episodio ${s.number} - Valoración: ${s.rating??"Sin valoración"}">
    ${s.number??"-"}
  </div>
`,g=(s,o)=>`
  <article class="season">
    <header class="season-header">T${o}</header>
    ${s.map(n=>h(n)).join("")}
  </article>
`,y=Object.values(m).map((s,o)=>g(s,o+1));f.setHTMLUnsafe(y.join(""));
