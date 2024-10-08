    let currMole;
    let currPlant;
    let score = 0;
    let gameOver = false;
    let prev;
    let best = 0;



    window.onload = function() {
    setgame();
    }

    function setgame(){
        for(let i =0;i<9;i++){
            let tile= document.createElement("div");
            tile.id = i.toString();
            tile.addEventListener("click",selectTile);
            document.getElementById("board").appendChild(tile);
        }
        setInterval(setMole,1000)
        setInterval(setPlant,2000)
    }

    function getRandomTile(){
        let num = Math.floor(Math.random()*9);
        return num.toString();
    }
    function setMole(){
        if(gameOver){
            return;
        }
        if(currMole){
            currMole.innerHTML = "";
        }
        let mole = document.createElement("img");
        mole.src= "./assets/monty-mole.png";  
        let num = getRandomTile();  
        if(currPlant && currPlant.id == num){
            return;
        }
        currMole = document.getElementById(num);
        currMole.appendChild(mole);
    }

    function setPlant(){
        if(gameOver){
            return;
        }
        if(currPlant){
            currPlant.innerHTML="";
        }
        let plant = document.createElement("img");
        plant.src = "./assets/piranha-plant.png";
        let num = getRandomTile();
        if(currMole && currMole.id == num){
            return;
        }
        currPlant = document.getElementById(num);
        currPlant.appendChild(plant)
    }

    function selectTile(){
        if(gameOver){
            return;
        }
        if(this == currMole){
            score+=10
            document.getElementById("score").innerText = score.toString();
        }
        else if (this == currPlant){
            best = best > score ? best : score;
            document.getElementById("score").innerText = "GAME OVER : Your Score is " + score.toString();
            gameOver=true;
            let btn = document.createElement("button")
            btn.innerText="Play Again";
            btn.addEventListener("click", resetGame);  
            document.body.appendChild(btn);
           
            
        }
    }


    function resetGame() {
        score = 0;
        gameOver = false;
        document.getElementById("score").innerText = "Score: 0";
    
        if (currMole) {
            currMole.innerHTML = "";
        }
        if (currPlant) {
            currPlant.innerHTML = "";
        }
    
        let btn = document.querySelector("button");
        if (btn) {
            document.body.removeChild(btn);
        }
    }