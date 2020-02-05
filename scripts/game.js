class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasCtx = this.canvas.getContext('2d');
    this.fps = 60;
