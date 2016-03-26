'use strict';
import CharacterView from 'character-view';
export default class CharacterListView {
  constructor(el, person) {
    this.el = el;
    this.person = person;

    this.renderNew();
  }

  renderNew() {
    debugger;
    this.person.forEach((hero) => {
      const z = new CharacterView(hero);
      const wtf = this.el.querySelector(`.characters-list`);
      wtf.appendChild(z.el);
    });
  }
}
