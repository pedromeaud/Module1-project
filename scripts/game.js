class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasCtx = this.canvas.getContext('2d');
    this.fps = 60;

    this.ball = new Ball(this);
    this.divider = new Divider(this);
    this.player1Platform = new Platform(this, 0);
    this.player2Platform = new Platform(this, 0);
    this.player2Platform.x = this.canvas.width - this.player2Platform.width;
    this.currenLife = 5;
    this.lost = false;
    this.backgroundMusic = document.getElementById('background-music');
    this.backgroundMusic.currentTime = 0;
    this.setControlBindings();
  }
  //Not working well
  lose() {
    if (this.lost === true) {
      alert('YOU LOSE!');
    }
  }
  //need to work on pause
  togglePause() {
    this.isRunning = !this.isRunning;
  }
  //buttons
  setControlBindings() {
    const $buttonStart = document.getElementById('btn-start');
    $buttonStart.addEventListener('click', () => {
      this.ball.reset();
    });
    const $buttonStop = document.getElementById('btn-stop');
    $buttonStop.addEventListener('click', () => {
      this.togglePause();
      alert('Pause');
    });
  }

  run() {
    this.player1MouseEvents(this.isRunning);
    setInterval(() => {
      this.backgroundMusic.play();
      this.update();
      this.paint();
    }, 1250 / this.fps);
  }

  update() {
    this.npcMovement();
    this.ball.update();
    this.detectCollision();
  }
  //paint on canvas
  paint() {
    this.paintBackground();
    this.divider.paint();
    this.ball.paint();
    this.player1Platform.paint();
    this.player2Platform.paint();
  }
  // cursor position
  player1MouseEvents() {
    document.addEventListener('mousemove', event => {
      let mousePosition = this.mousePosition(event);
      this.player1Platform.y = mousePosition.y - this.player1Platform.height / 2;
    });
  }

  mousePosition(event) {
    let rect = this.canvas.getBoundingClientRect(+1);
    let root = document.documentElement;

    return {
      x: event.clientX - rect.left - root.scrollLeft,
      y: event.clientY - rect.top - root.scrollTop
    };
  }
  //canavs background with opacity
  paintBackground() {
    this.canvasCtx.fillStyle = 'black';
    this.canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  // detecting collisions current lose function not working, currentLife nao diminui as vidas
  detectCollision() {
    if (this.ball.x + this.player1Platform.width < 0) {
      if (
        this.ball.y >= this.player1Platform.y &&
        this.ball.y <= this.player1Platform.y + this.player1Platform.height
      ) {
        //this.ball.x = this.ball.radius * 2 + this.player1Platform.width;
        this.ball.xSpeed *= -1;
        let deltaY = this.ball.y - (this.player1Platform.y + this.player1Platform.height / 2);
        this.ball.ySpeed = deltaY * 0.35;
      } else {
        if (this.currenLife === 0) {
          this.lost = true;
          this.lose();
          this.ball.reset();
        } else {
          this.currenLife--;
        }
      }
    }

    if (this.ball.y < 0) {
      this.ball.ySpeed *= -1;
    }

    if (this.ball.x > this.canvas.width) {
      if (
        this.ball.y >= this.player2Platform.y &&
        this.ball.y <= this.player2Platform.y + this.player2Platform.height
      ) {
        this.ball.xSpeed *= -1;
        let deltaY = this.ball.y - (this.player2Platform.y + this.player2Platform.height / 2);
        this.ball.ySpeed = deltaY * 0.45;
      } else {
        this.ball.reset();
        alert('You Win');
      }
    }

    if (this.ball.y > this.canvas.height) {
      this.ball.ySpeed *= -1;
    }
  }
  //player2 platform movement following the ball
  npcMovement() {
    if (this.ball.y + 10 < this.player2Platform.y + this.player2Platform.height / 2) {
      this.player2Platform.y -= 10;
    }

    if (this.ball.y + 10 > this.player2Platform.y + this.player2Platform.height / 2) {
      this.player2Platform.y += 10;
    }
  }
}
