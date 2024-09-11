window.addEventListener("load", () => {
  const startButton = document.querySelector("#start-button");
  const restartButton = document.querySelector("#restart-button");
  startButton.addEventListener("click", () => {
    startGame();
  });
  restartButton.addEventListener("click", () => {
    startGame();
  });
  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
    document.getElementById("score").innerText = "0";
    document.getElementById("final-score").innerText = "Final Score: 0";
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
