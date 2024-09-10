window.addEventListener("load", () => {
  const startButton = document.querySelector("#start-button");
  const restartButton = document.querySelector("#restart-button");
  startButton.addEventListener("click", () => {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") {
    game.player.jump();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowDown") {
    game.player.crouch();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowDown") {
    game.player.standUp();
  }
});
