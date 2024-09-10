class player {
  constructor(gamescreen) {
    this.gamescreen = gamescreen;
    this.width = 100;
    this.height = 100;
    this.left = 100;
    this.top = gamescreen.clientHeight - this.height;
    this.speed = 5;
    this.jumpHeight = 190;
    this.isJumping = false;
    this.gravity = 10;
    this.jumpSpeed = 20;
    this.element = document.createElement("img");

    this.element.src = "../images/Spider-Man debout.png";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.zIndex = 10;
    this.element.style.position = "absolute";
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gamescreen.appendChild(this.element);
  }

  render() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  fall() {
    const ground = this.gamescreen.clientHeight - this.height;
    const fallInterval = setInterval(() => {
      if (this.top < ground) {
        this.top += this.gravity;
        this.render();
      } else {
        clearInterval(fallInterval);
        this.top = ground;
        this.render();
        this.isJumping = false;
      }
    }, 20);
  }

  jump() {
    if (this.isJumping) {
      return;
    }
    this.isJumping = true;

    let initialTop = this.top;
    let targetTop = initialTop - this.jumpHeight;

    const jumpInterval = setInterval(() => {
      if (this.top > targetTop) {
        this.top -= this.jumpSpeed;
        this.render();
      } else {
        clearInterval(jumpInterval);
        this.fall();
      }
    }, 20);
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();
    return (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    );
  }
}
