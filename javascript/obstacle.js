class Obstacle {
  constructor(gamescreen) {
    this.gamescreen = gamescreen;
    this.width = 40;
    this.height = 80;

    this.right = -80;
    this.element = document.createElement("img");

    this.element.src = "../images/redCar.png";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

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
    this.top += 3;
  }
}
