'use strict';
import SeriesInfoView from 'series-info-view';

export default function () {
  fetch(`http://gateway.marvel.com:80/v1/public/series/436?apikey=45ec48065956a166a50dcd3fe892c053`)

    .then((response) => response.json())

    .then((info) => {
      const x = document.querySelector(`.side-bar`);
      const y = new SeriesInfoView(x, info.data.results[0]);
    });
}
