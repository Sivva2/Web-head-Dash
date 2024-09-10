class Obstacle {
  constructor(gamescreen, maxObstableHeight) {
    this.gamescreen = gamescreen;
    this.width = 90;
    this.height = 50;

    this.left = gamescreen.clientWidth;
    this.top = Math.round(Math.random() * maxObstableHeight);
    this.element = document.createElement("img");

    this.element.src = "../images/$Rhino.png";
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
    this.element.style.top = `${this.top}px`;
  }

  move() {
    this.left += 3;
    if (this.left + this.height < 0) {
      this.remove();
    }
  }
  remove() {
    this.element.remove();
  }
}
