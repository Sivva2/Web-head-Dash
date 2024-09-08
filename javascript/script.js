window.addEventListener("load", () => {
  const startButton = document.querySelector("#start-button");
  const restartButton = document.querySelector("#restart-button");
  startButton.addEventListener("click", () => {
    startGame();
  });

  function startGame() {
    console.log("start game");
  }
});
