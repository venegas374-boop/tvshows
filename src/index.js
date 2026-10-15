import { getShowData, getEpisodeList } from "./services/tvmaze.js";

const ID = "2993";
const show = await getShowData(ID);
const seasons = await getEpisodeList(ID);

const $header = document.querySelector("header");
const $episodes = document.querySelector(".episodes");

$header.setHTMLUnsafe(`
  <img class="poster" src="${show.image}" alt="Póster de ${show.name}">
  <div>
    <h1>${show.name}</h1>
    <p>Valoración: ${show.rating.average ?? "Sin valoración"}</p>
  </div>
`);

const createEpisodeHTML = (episode) => `
  <div class="episode episode-${episode.number} rating-${Math.round(episode.rating ?? 0)}"
       title="Episodio ${episode.number} - Valoración: ${episode.rating ?? 'Sin valoración'}">
    ${episode.number ?? "-"}
  </div>
`;

const createSeasonHTML = (data, number) => `
  <article class="season">
    <header class="season-header">T${number}</header>
    ${data.map(episode => createEpisodeHTML(episode)).join("")}
  </article>
`;

const list = Object.values(seasons).map((season, index) => createSeasonHTML(season, index + 1));
$episodes.setHTMLUnsafe(list.join(""));
