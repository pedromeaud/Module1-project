// ball class
class Ball {
  constructor(game) {
    this.game = game;
    this.reset();
    this.radius = 8;
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  paint() {
    this.game.canvasCtx.fillStyle = '#f2f2f2';
    this.game.canvasCtx.beginPath();
    this.game.canvasCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.game.canvasCtx.fill();
  }

  reset() {
    this.x = this.game.canvas.width / 2;
    this.y = this.game.canvas.height / 2;
    this.xSpeed = 7 * (Math.random() > 0.5 ? 1 : -1);
    this.ySpeed = 7 * (Math.random() > 0.5 ? 1 : -1);
    this.game.currenLife = 5;
    this.isRunning = true;
  }
}

class Divider {
  constructor(game) {
    this.game = game;
  }

  paint() {
    for (let i = -2; i < this.game.canvas.height; i += 45) {
      this.game.canvasCtx.fillStyle = 'white';
      this.game.canvasCtx.fillRect(this.game.canvas.width / 2 - 1, i, 25, 5);
    }
  }
}
