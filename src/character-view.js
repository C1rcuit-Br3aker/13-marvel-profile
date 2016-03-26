'use strict';

export default class CharacterView {
  constructor(data) {
    this.el = document.createElement(`li`);
    this.data = data;
    this.addPicture();
  }

  addPicture() {
    this.el.classList.add(`.character-list-item`);
    this.el.innerHTML = `
    <div class="character-picture">
    <img class="character-pic" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}" alt="The Punisher"/></div>
    <p class="character-names">${this.data.name}</p>`;
  }

}
