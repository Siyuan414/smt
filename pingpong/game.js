let score1 = 0;
let score2 = 0;
 
let winner = document.getElementById("win");
let add = document.getElementById("point_button1");
let scores = document.getElementById("player_score1");

var x = document.getElementById("player1_nav");

var y = document.getElementById("player2_nav");
       
add.addEventListener('click',()=>{
        score1 += 1;
        scores.innerHTML = score1;
        if((score1+score2)%2 == 0){
            // console.log("good")
            if(x.style.display=="none" && y.style.display=="block"){
                
                document.getElementById("player1_nav").style.display = "block";
                document.getElementById("player2_nav").style.display = "none";
                // console.log("good1")
            }
            else if (x.style.display=="block" && y.style.display=="none"){
                // console.log("good2")
                document.getElementById("player1_nav").style.display = "none";
                document.getElementById("player2_nav").style.display = "block";
            }
        }
        if(score1 >=11 && score2<10){
            alert("Player 1 Win")
            
        }else if (score1 >= 10 && score2 >=10){
            if (score1 - score2 ==2){
                alert("Player 1 Win")
            }
            else if(score2 - score1==2){
                alert("Player 2 Win")
            }
        }
        
    })
let add2 = document.getElementById("point_button2");
let scores2 = document.getElementById("player_score2");
add2.addEventListener('click',()=>{
        score2 +=1;
        scores2.innerHTML = score2;
        if((score1+score2)%2 == 0){
            
            if(x.style.display=="none" && y.style.display=="block"){
                
                document.getElementById("player1_nav").style.display = "block";
                document.getElementById("player2_nav").style.display = "none";
                // console.log("good1")
            }
            else if (x.style.display=="block" && y.style.display=="none"){
                // console.log("good2")
                document.getElementById("player1_nav").style.display = "none";
                document.getElementById("player2_nav").style.display = "block";
            }
        }
        if(score2 >=11 && score1<=9){
            alert("Player 2 Win")
        }else if (score1 >= 10 && score2 >=10){
            if (score2 - score1 ==2){
                alert("Player 2 Win")
            }else if(score1 - score2 ==2){
                alert("Player 1 win")
            }
            
        }
    })




