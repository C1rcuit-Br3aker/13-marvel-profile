

export default class ComicView {
  constructor(data) {
    this.el = document.createElement(`li`);
    this.data = data;
    this.addIssue();
  }

  addIssue() {
    this.el.classList.add(`comics-list-item`);
    this.el.innerHTML = `
    <div class="comic-picture">
    <img class="comic-pic" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}" alt="The Punisher"/></div>
    <p class="comic-number"># ${this.data.issueNumber}</p>
    <p class="comic-names">${this.data.title}</p>
    <button class="read-more">Read More</button>
    <div id="modal" class = "modal">
      <div class="modal-container">
      <button class="close">X</button>
      <p class="description">${this.data.description}</p>
      </div>
    </div>`;

    this.clickStuff();
  }

  clickStuff() {
    const popUp = this.el.querySelector(`.read-more`);
    const close = this.el.querySelector(`.close`);
    const houdini = this.el.querySelector(`#modal`);
    popUp.addEventListener(`click`, () => {
      houdini.classList.toggle(`modal--active`);
    });
    close.addEventListener(`click`, () => {
      houdini.classList.toggle(`modal--active`);
    });
  }


}
