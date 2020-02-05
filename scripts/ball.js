class Ball {
  constructor(game) {
    this.game = game;
    this.reset();
    this.radius = 10;
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  paint() {
    this.game.canvasCtx.fillStyle = 'white';
    this.game.canvasCtx.beginPath();
    this.game.canvasCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.game.canvasCtx.fill();
  }

  reset() {
    this.x = this.game.canvas.width / 2;
    this.y = this.game.canvas.height / 2;
    this.xSpeed = 5 * (Math.random() > 0.5 ? 1 : -1);
    this.ySpeed = 5 * (Math.random() > 0.5 ? 1 : -1);
  }
}

class Divider {
  constructor(game) {
    this.game = game;
  }

  paint() {
    for (let i = -2; i < this.game.canvas.height; i += 45) {
      this.game.canvasCtx.fillStyle = 'grey';
      this.game.canvasCtx.fillRect(this.game.canvas.width / 2 - 1, i, 2, 20);
    }
  }
}

class Platform {
  constructor(game, xLocation) {
    this.game = game;
    this.height = 80;
    this.width = 20;
    this.x = xLocation;
    this.y = this.game.canvas.height / 2 - this.height / 4;
  }

  paint() {
    this.game.canvasCtx.fillStyle = 'grey';
    this.game.canvasCtx.fillRect(this.x, this.y, this.width, this.height);
  }
}
