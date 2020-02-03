// PacBoy project
//starting with the game function, creating the maze, creating the Class Character( for pacboy and enemies)
//then creat draw function, initialize function ans inplemente the movement for pacboy and enemies

const game = () => {
  var mazeRow = 17;
  var mazeCol = 28;

  //objects
  var pacBOY;
  var enemies = [];


  //others
  var totalDrink = 0;

  var movePosition = 5;

  var mazeObj;


  const BEER = 0;
  const WALL = 1;
  const COCKTAIL = ; //?
  const GATE = ;//?

  var totalDrink = 0;

  var currentTopPosition;
  var currentLeftPosition;
  var currentTop;
  var currentLeft;

  var newTop = 0;
  var newLeft = 0;

  var extraLeft = 0;
  var extraTop = 0;

  var dimension = 30; //?


  var pacMaze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 7, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 5, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [8, 8, 2, 0, 0, 0, 0, 0, 1, 1, 0, 1, 4, 3, 9, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 8, 8, 8],
    [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 6, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 7, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];

  const paintMaze = () => {
        //Creating the maze

    var mainMaze = document.getElementById('mainMaze');
    mainMaze.innerHTML = "";
    mazeObj = document.getElementById('mainMaze');

    for(let i = 0; i < mazeRow; i++) {
      for (let a = 0; a < mazeCol; a++) {
        var tiles = document.createElement('div');
        tiles.id = '' + i + '' + a;
        if(pacMaze[i][a] === BEER) {
          tiles.style.backgroundImage = ''; //drink image go here
          totalDrink++;
        } else if (pacMaze[i][a] === WALL) {
          tiles.style.backgroundImage = '/images/05muronero.jpg'; //wall image go here
        }  else if (pacMaze[i][a] === COCKTAIL) {
          tiles.style.backgroundImage = '';//coktail image go here(to make pacboy go superpacboy)
          totalDrink; //4 to 6 cocktails per lvl
        } else if (pacMaze[i][a] === GATE) 
          tiles.style.backgroundImage = '' //gate img for the enemies room go here
        
        mazeObj.appendChild(tiles)

      }
    }

    //missing the sprites
    //create the monsterers
    for(let k = 1; k <= 4; k++) {
      let enemies = document.createElement("img");
      enemies.src = `sprits go here`;
      enemies.id = `enemies`;
      mainMaze.appendChild(enemies);
    }



    //create pacboy
    let pacboy = document.createElement("img");
    pacboy.src = "sprites go here";
    pacboy.id = "pacIMG";
    mazeObj.appendChild(pacboy)
  };

    class Character{
      constructor(characterType, topPosition, leftPosition, direction){

        this.characterType = characterType;
        this.topPosition = topPosition;
        this.leftPosition = leftPosition;
        this.direction = direction;
        this.moves = [0, 0, 0, 0];



      }
    }

    //inicialize function to creat the new Character pacbot and enemies
    function initialize() {
      pacBoy = new Character('pacIMG', 240, 60, 0, 0);
      enemies[0] = new Character('enemie1');
      enemies[1] = new Character('enemie2');
      enemies[2] = new Character('enemie3');
      enemies[3] = new Character('enemie4');
    
    }

    function keyPress(event) {
      //store the previous move on the 2nd position
      pacBOY.moves[1] = pacBOY.moves[0];
      //store the new ate first location
      pacBOY.moves[0] = event.keyCode;
      if (start === true) {
        pacBoyDies = document.getElementById('PacBoyDies');
        pacBoyDrinks = document.getElementById('');
        pacBoyWins = document.getElementById('');

      }
    }

    function gameLoop() {
      //pacboy movement
      //IF first direction = true, keep going, else
      //go in secund direction 
      for (let i = 0; i < 2; i++) {
        pacBOY.direction = pacBOY.moves[i];
        if(moveCheck(pacBOY)) {

        }
      }
    }


    function movePacBoy() {
      var characterDOM = Element.getElementById(characterObj.characterType)
      switch(characterObj.direction) {
        case leftKey:
          characterObj.leftPosition = currentLeftPosition - movePosition;
          characterDOM.style.transform = '';// rotation
          characterDOM.style.left = characterObj.leftPosition + 'px';
          break;

        case upKey:
          characterObj.topPosition = currentTopPosition - movePosition;
          characterDOM.style.transform = '';// rotation
          characterDOM.style.top = characterObj.topPosition + 'px';
          break;

        case rightKey:
          characterObj.leftPosition = currentLeftPosition + movePosition;
          characterDOM.style.transform = ''; //rotation
          characterDOM.style.left = characterObj.leftPosition + 'px';
          break;

        case downKey:
          characterObj.topPosition = currentTopPosition + movePosition;
          characterDOM.style.transform = ''; //rotation
          characterDOM.style.top = characterObj.topPosition + 'px'; 
          break;  

      }
        
    }

    function moveEnemies(characterObj) {
      var characterDOM = Element.getElementById(characterObj.characterType);
      switch(characterObj.direction) {
        case leftKey:
          characterObj.leftPosition = currentLeftPosition - movePosition;
          characterDOM.style.left = characterObj.leftPosition + 'px';
          break;

        case upKey:
          characterObj.topPosition = currentTopPosition - movePosition;
          characterDOM.style.top = characterObj.topPosition + 'px';
          break;
        
        case rightKey:
          characterObj.leftPosition = currentLeftPosition + movePosition;
          characterDOM.style.left = characterObj.leftPosition + 'px';
          break;

        case downKey:
          characterObj.topPosition = currentTopPosition + movePosition;
          characterDOM.style.top = characterObj.topPosition + 'px';
      }

    }


    function moveCheck(characterObj) {
      var fitsTop = false;
      var fitsLeft = false;

      currentTopPosition = characterObj.topPosition;
      currentLeftPosition = characterObj.leftPosition;

      currentTop = Math.floor(currentTopPosition / dimension)
      currentLeft = Math.floor(currentLeftPosition / dimension)

      if (currentTopPosition % dimension === 0) {
        fitsTop = true;
      }

      if (currentLeftPosition % dimension === 0) {
        fitsLeft = true;
      }

      newLeft = currentLeft;
      newTop = currentTop;

      switch (characterObj.direction) {
        case leftKey:
          if (fitsLeft) newLeft = currentLeft - 1;
          break;

        case upKey:
          if (fitsTop) newTop = currentTop -1;
          break;
        
        case rightKey:
          if (fitsLeft) currentLeft +1;
          break;

        case downKey:
          if (fitsTop) currentTop +1;
      }
      tunnelConditionals();

    }



    function Obstacles() {
      if (pacMaze[newTop][newLeft] === WALL || pacMaze[extraTop][extraLeft] === WALL) 
        return true;
          return false;
      
    }

    function tunnelConditionals() {
      if (newLeft < 0){
        newLeft = mazeCol - 1;
        currentLeftPosition = newLeft * dimension;
      }
      if (newTop < 0) {
        newTop = mazeRow - 1;
        currentTopPosition = newTop * dimension;
      }
      if (newLeft > 0 - 1) {
        newLeft = 0;
        currentLeftPosition = 0;
      }
      if (newTop > mazeRow - 1) {
        newTop = 0;
        currentTopPosition = 0;
      }
    }


    //check overlap of cols ond rows
    function checkOverLapse() {
      extraTop = newTop;
      extraLeft = newLeft;

      var overLapRows = false;
      var overLapCols = false;

      if(currentTopPosition % dimension != 0) {
        overLapRows = true;
      }
      if(currentLeftPosition % dimension != 0) {
        overLapCols = true;
      }
      switch(direction) {
        case leftKey:
        case rightKey:
          if (overLapRows) {
            extraTop = newTop + 1;
          break;
          }
        case upKey:
        case downKey:
          if(overLapCols) {
            extraLeft = newLeft +1;
            break;
          }
      }

    }

    function goOppositeDirection(characterObj) {
      switch(characterObj.direction) {
        case leftKey:
          characterObj.moves = [rightKey, upKey, downKey, leftKey];
          break;

        case rightKey:
          characterObj.moves = [leftKey, upKey, downKey, rightKey];
          break;

        case upKey:
          characterObj.moves = [downKey, leftKey, rightKey, upKey];
          break;

        case downKey:
          characterObj.moves = [upKey, leftKey, rightKey, downKey];
          break;
      }
    }


    function random(characterObj) {
      let m = characterObj.moves.length -1;
      while (m) {
        var i = Math.floor(Math.random() * m);
        var t = characterObj.moves[m];
        characterObj.moves[m] = characterObj.moves[i];
        characterObj.moves[i] = t;
      }
    }

    function goRandomDirection(characterObj) {
      switch(characterObj) {
        case leftKey:
          characterObj.moves = [leftKey, upKey, downKey, rightKey];
          break;

        case rightKey:
          characterObj.moves =[rightKey, upKey, downKey, leftKey];
          break;
        
        case upKey:
          characterObj.moves = [upKey, leftKey, rightKey, downKey];
          break;

        case downKey:
          characterObj.moves = [downKey, leftKey, rightKey, upKey];
          break;
      }
      random(characterObj);
      for (let i = 0; i < 4; i++) {
        characterObj.direction = characterObj.moves[i];
        if(moveCheck(characterObj)) {
          moveEnemies(characterObj);
          break;
        }
      }
    }

    function checkCollision(character1, character2) {
      if(
      character1.leftPosition >= character2.leftPosition + dimension ||
      character2.leftPosition >= character1.leftPosition + dimension ||
      character1.topPosition >= character2.topPosition + dimension ||
      character2.topPosition >= character1.topPosition + dimension
      )
      return true;
    return false;

    }
      //enemies out of safe zone
    function getOutOfSafeZone(characterObj) {
      switch(characterObj.characterType) {
        //1 and 2 go right until out of safe zone
        case 'enemie1':
        case 'enemie2':
          characterObj.direction = rightKey;
        //3 first do down then go right until out of the safe zone
        case 'enemie3':
          if (characterObj.topPosition < 240) {
            characterObj.direction = downKey;
          }
          else characterObj.direction = rightKey;
          break;
        // 4 first go up then go right until out of safe zone
        case 'enemie4':
          if(characterObj.topPosition > 240) {
              characterObj.direction = upKey;
            }
          else characterObj.direction = rightKey;
          break;  
      }
    }


};
