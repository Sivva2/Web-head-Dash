class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameCtn = document.getElementById("game-container");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end");
    this.scoreElement = document.getElementById("score");
    this.finalScoreElement = document.getElementById("final-score");
    this.bestScoreElement = document.getElementById("best-score");
    this.player;
    this.obstacles = [];
    this.score = 0;
    this.bestScore = localStorage.getItem("bestScore") || 0;
    this.isGameOver = false;
    this.framesPerSecond = 1000 / 60;
    this.currentFrames = 0;
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";

    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;

    this.player = new player(this.gameScreen, this.height);
    this.gameLoop();
  }

  gameLoop() {
    let baseSpeed = 2;
    const speedIncrement = 0.5;
    const loop = setInterval(() => {
      this.player.render();
      this.currentFrames += 1;

      let currentSpeed =
        baseSpeed + Math.floor(this.currentFrames / 100) * speedIncrement;
      console.log(currentSpeed);

      if (this.currentFrames % 80 === 0) {
        this.obstacles.push(
          new Obstacle(
            this.gameScreen,
            this.player.jumpHeight,
            this.currentSpeed
          )
        );
      }

      const nextObstacles = [];
      this.obstacles.forEach((currentObstacle) => {
        currentObstacle.render();
        if (this.player.didCollide(currentObstacle)) {
          currentObstacle.remove();
          this.isGameOver = true;
        } else if (currentObstacle.left + currentObstacle.width > 0) {
          nextObstacles.push(currentObstacle);
        } else {
          currentObstacle.remove();
          this.score += 50;
          this.scoreElement.innerText = this.score;
        }
      });

      this.obstacles = nextObstacles;
      if (this.isGameOver) {
        clearInterval(loop);
        this.gameScreen.style.display = "none";
        this.endScreen.style.display = "block";
        this.finalScoreElement.innerText = `Final Score: ${this.score}`;

        if (this.score > this.bestScore) {
          this.bestScore = this.score;
          localStorage.setItem("bestScore", this.bestScore);
        }
        this.bestScoreElement.innerText = `Best Score: ${this.bestScore}`;

        this.player.element.remove();
        this.obstacles.forEach((currentObstacles) => {
          currentObstacles.remove();
        });
      }
    }, this.framesPerSecond);
  }
}
