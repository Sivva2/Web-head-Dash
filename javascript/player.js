class player {
  constructor(gamescreen) {
    this.gamescreen = gamescreen;
    this.width = 100;
    this.height = 100;
    this.left = 100;
    this.top = gamescreen.clientWidth / 2 - 150;
    this.speed = 5;
    this.jumpHeight = 150;
    this.isJumping = false;
    this.jumpSpeed = 20;
    this.element = document.createElement("img");

    this.element.src = "../images/Spider-Man debout.png";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.zIndex = 5;
    this.element.style.position = "absolute";
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gamescreen.appendChild(this.element);
  }

  render() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}
