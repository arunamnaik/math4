function loginPlayers(){
    var player1= document.getElementById("player_1_name_input").value;
    var player2= document.getElementById("player_2_name_input").value;
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2)
    window.location="game_hub.html";
}