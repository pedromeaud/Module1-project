// player platform
class Platform {
  constructor(game, xLocation) {
    this.game = game;
    this.height = 105;
    this.width = 6;
    this.x = xLocation;
    this.y = this.game.canvas.height;
  }

  paint() {
    this.game.canvasCtx.fillStyle = '#7B7979';
    this.game.canvasCtx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function main() {
  const gameCanvas = document.getElementById('gameArea');
  window.game = new Game(gameCanvas);
  window.game.run();
}

window.onload = function() {
  main();
};
