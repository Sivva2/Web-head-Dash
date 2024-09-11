class Obstacle {
  constructor(gamescreen) {
    this.gamescreen = gamescreen;
    this.width = 90;
    this.height = 50;

    this.left = gamescreen.clientWidth;
    this.top = Math.round(Math.random() * 100) + gamescreen.clientHeight - 150;
    this.element = document.createElement("img");

    this.element.src = "/images/$Rhino.png";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.zIndex = 10;
    this.element.style.position = "absolute";
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gamescreen.appendChild(this.element);
  }

  render() {
    this.move();
    this.element.style.left = `${this.left}px`;
  }

  move() {
    this.left -= 15;
  }
  remove() {
    this.element.remove();
  }
}
