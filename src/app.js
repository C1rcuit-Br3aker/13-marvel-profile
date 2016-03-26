'use strict';
import SeriesInfoView from 'series-info-view';
import CharacterListView from 'character-list-view';

export default function () {
  fetch(`http://gateway.marvel.com:80/v1/public/series/436?apikey=45ec48065956a166a50dcd3fe892c053`)

    .then((response) => response.json())
    .then((info) => {
      const sideBar = document.querySelector(`.side-bar`);
      const profile = new SeriesInfoView(sideBar, info.data.results[0]);
    });

    fetch(`http://gateway.marvel.com:80/v1/public/series/436/characters?apikey=45ec48065956a166a50dcd3fe892c053`)

      .then((response) => response.json())
      .then((info) => {
        const x = document.querySelector(`.characters__container`);
        const heroes = new CharacterListView(x, info.data.results);
      });
}
