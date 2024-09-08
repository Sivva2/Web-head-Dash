class player {
  constructor(gamescreen) {
    this.gamescreen = gamescreen;
    this.width = 800;
    this.height = 400;
    this.left = gamescreen.clientWidth / 2 - this.width / 2;
    this.top = gamescreen.clientHeight / 2 - this.height / 2;
    this.directionX = 0;
    this.speed = 5;
    this.element = document.createElement("img");

    this.element.src = "../images/Spider-Man SV Battler 03.png";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.position = "absolute";
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gamescreen.appendChild(this.element);
  }
}
