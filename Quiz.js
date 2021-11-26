player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");

player1_score=0;
player2_score=0;

document.getElementById("p1n").innerHTML=player1_name + " : ";
document.getElementById("p2n").innerHTML=player2_name + " : ";

document.getElementById("p1s").innerHTML=player1_score;
document.getElementById("p2s").innerHTML=player2_score;

document.getElementById("playerQuestion").innerHTML= "Question turn:" + player1_name;
document.getElementById("playerAnswer").innerHTML= "Answer turn:" + player2_name;

function send(){
    number1= document.getElementById("num1").value
    number2= document.getElementById("num2").value
    actualAns=parseInt(number1)*parseInt(number2)
    question_word = "<h4 id='num_display'>"+number1+"X"+number2+"</h4>";
    inputBox = "<br>Answer : <input type='text' id='input_check_box'>";
    checkButton="<br><br><button class='btn btn-danger' onclick='check()'>check</button>";
    row = question_word+inputBox+checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("numForm").style.display="none";
}
questionTurn="player1";
answerTurn="player2";
function check(){
    answer=document.getElementById("input_check_box").value;
    if(answer == actualAns){
        if(answerTurn == "player1"){
            player1_score=player1_score+1;
            document.getElementById("p1s").innerHTML=player1_score;
        }
        else{
            player2_score=player1_score+1;
            document.getElementById("p2s").innerHTML=player2_score;
        }
    }
    if(questionTurn == "player1"){
        questionTurn="player2"
        document.getElementById("playerQuestion").innerHTML="Question turn="+player2_name;
    }
    else{
        questionTurn="player1"
        document.getElementById("playerQuestion").innerHTML="Question turn="+player1_name;
    }
    if(answerTurn == "player1"){
        answerTurn="player2"
        document.getElementById("playerAnswer").innerHTML="Answer turn="+player2_name;
    }
    else{
        answerTurn="player1"
        document.getElementById("playerAnswer").innerHTML="Answer turn="+player1_name;
    }
    document.getElementById("output").innerHTML="";
    document.getElementById("numForm").style.display="block";
}