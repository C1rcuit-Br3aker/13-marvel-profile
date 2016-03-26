

export default class SeriesInfoView {
  constructor(element, data, startingItems = []) {
    this.element = element;
    this.data = data;
    this.items = [];


    this.addImage();
    this.addTitle();
    this.addYears();
    startingItems.forEach(() => {
      this.addCreators();
    });
  }

  addImage() {
    this.element.querySelector(`.profile-pic__container`).innerHTML = `
    <img class="profile-pic" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}" alt=""/>`;
  }

  addTitle() {
    this.element.querySelector(`.character-name__main`).innerText = this.data.title;
  }

  addYears() {
    this.element.querySelector(`.years-active`).innerText = `${this.data.startYear} - ${this.data.endYear}`;
  }

  addCreators() {
    this.items = [
      ...this.items,
      this.element.querySelector(`.creators-list`).list.appendChild(`li`).innerText = `
      ${this.data.creators.name}`,

    ];
  }
}
