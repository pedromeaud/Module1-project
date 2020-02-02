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
    var mainMaze = document.getElementById('mainMaze');

    mainMaze.innerHTML = "";

    //Creating the maze

    for(let i = 0; i < mazeRow; i++) {
      for (let a = 0; a < mazeCol; a++) {

        let iconUrl = "";

        switch(pacMaze[i][a]) {
          case BEER:
              iconUrl = "?";
              totalDrink++;
              break;

          case WALL:
              iconUrl = "?";
              break;

          case COCKTAIL:
              iconUrl = "?";
              totalDrink;
              break;

          case GATE:
              iconUrl = "?";
              break;
        }

        var tiles =

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
    pacboy.id = "pacIMG"
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

    }


};
