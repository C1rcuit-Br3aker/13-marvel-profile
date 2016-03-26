

export default class SeriesInfoView {
  constructor(element, data) {
    this.element = element;
    this.data = data;



    this.addImage();
    this.addTitle();
    this.addYears();
    this.addCreators();
  }

  addImage() {
    this.element.querySelector(`.profile-pic__container`).innerHTML = `
    <img class="profile-pic" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}" alt="The Punisher"/>`;
  }

  addTitle() {
    this.element.querySelector(`.character-name__main`).innerText = this.data.title;
  }

  addYears() {
    this.element.querySelector(`.years-active`).innerText = `${this.data.startYear} - ${this.data.endYear}`;
  }

  addCreators() {
    this.data.creators.items.forEach((who) => {
      const creator = document.createElement(`li`);
      const creatorsList = document.querySelector(`.creators-list`);
      creatorsList.appendChild(creator).innerText = who.name;

    });
  }
}
