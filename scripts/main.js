//
class Platform {
  constructor(game, xLocation) {
    this.game = game;
    this.height = 100;
    this.width = 10;
    this.x = xLocation;
    this.y = this.game.canvas.height / 2 - this.height / 2;
  }

  paint() {
    this.game.canvasCtx.fillStyle = 'white';
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
