'use strict';
import CharacterView from 'character-view';
export default class CharacterListView {
  constructor(el, person) {
    this.el = el;
    this.person = person;

    this.renderNew();
  }

  renderNew() {
    this.person.forEach((hero) => {
      const newCharacter = new CharacterView(hero);
      const characterList = this.el.querySelector(`.characters-list`);
      characterList.appendChild(newCharacter.el);
    });
  }
}
