'use strict';
import SeriesInfoView from 'series-info-view';
import CharacterListView from 'character-list-view';
import ComicListView from 'comic-list-view';
const id = `18572`

export default function () {
  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}?apikey=45ec48065956a166a50dcd3fe892c053`)

    .then((response) => response.json())
    .then((info) => {
      const sideBar = document.querySelector(`.side-bar`);
      const profile = new SeriesInfoView(sideBar, info.data.results[0]);
    });

    fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/characters?apikey=45ec48065956a166a50dcd3fe892c053`)

      .then((response) => response.json())
      .then((info) => {
        const characters = document.querySelector(`.characters__container`);
        const heroes = new CharacterListView(characters, info.data.results);
      });

      fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/comics?apikey=45ec48065956a166a50dcd3fe892c053`)

        .then((response) => response.json())
        .then((info) => {
          const comics = document.querySelector(`.comics__container`);
          const books = new ComicListView(comics, info.data.results);
        });
}
