

export default class ComicView {
  constructor(data) {
    this.el = document.createElement(`li`);
    this.data = data;
    this.addIssue();
  }

  addIssue() {
    this.el.classList.add(`.comics-list-item`);
    this.el.innerHTML = `
    <div class="comic-picture">
    <img class="comic-pic" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}" alt="The Punisher"/></div>
    <h4 class="comic-names">${this.data.issueNumber}</h4>
    <h4 class="comic-names">${this.data.title}</h4>
    <p class="description">${this.data.description}</p>
    <button class="read-more">Read More</button>`;
  }

}
