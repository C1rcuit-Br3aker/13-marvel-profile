'use strict';
import ComicView from 'comic-view';
export default class ComicListView {
  constructor(el, comic) {
    this.el = el;
    this.comic = comic;

    this.makeNew();
  }

  makeNew() {
    this.comic.forEach((issue) => {
      const newComic = new ComicView(issue);
      const comicList = this.el.querySelector(`.comics-list`);
      comicList.appendChild(newComic.el);
    });
  }

}
