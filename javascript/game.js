class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameCtn = document.getElementById("game-container");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end");
    this.width = 900;
    this.height = 500;
    this.player;
    this.obstacles = [];
    this.framesPerSecond = 1000 / 60;
    this.currentFrame = 0;
    this.lives = 3;
    this.score = 0;
    this.isGameOver = false;
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameCtn.style.display = "flex";

    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;

    this.player = new Player(this.gameScreen);
    this.gameLoop();
  }

  gameLoop() {
    const intervalId = setInterval(() => {
      this.currentFrame += 1;
      this.player.render();

      if (this.currentFrame % 120 === 0) {
        this.obstacles.push(new Obstacle(this.gameScreen));
      }

      const nextObstacles = [];
      this.obstacles.forEach((currentObstacle) => {
        currentObstacle.render();
        if (this.player.didCollide(currentObstacle)) {
          console.log("crash");
          currentObstacle.element.remove();
          this.lives -= 1;
          if (this.lives < 0) {
            this.isGameOver = true;
          }
        } else if (currentObstacle.top < this.gameScreen.clientHeight) {
          nextObstacles.push(currentObstacle);
        } else {
          currentObstacle.element.remove();
          this.score += 100;
        }
      });
      this.obstacles = nextObstacles;

      document.querySelector("#score").innerText = this.score;

      if (this.isGameOver) {
        clearInterval(intervalId);
        this.gameCtn.style.display = "none";
        this.endScreen.style.display = "block";
        this.player.element.remove();
        this.obstacles.forEach((currentObstacle) => {
          currentObstacle.element.remove();
        });
      }
    }, this.framesPerSecond);
  }
}
