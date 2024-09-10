class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameCtn = document.getElementById("game-container");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end");
    this.player;
    this.obstacles = [];
    this.score = 0;
    this.isGameOver = false;
    this.framesPerSecond = 1000 / 60;
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";

    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;
    /*this.obstacle.push(new obstacle());*/
    this.player = new player(this.gameScreen);
    this.gameLoop();
  }
  gameLoop() {
    setInterval(() => {
      this.player.render();
    }, this.framesPerSecond);
  }
}
