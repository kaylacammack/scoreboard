let home = 0;
let away = 0;

function startGame() {
    drawScoreBoard();
}

function resetScoreBoard() {
    home = 0;
    away = 0;
    drawScoreBoard();
}

function drawScoreBoard() {
    document.getElementById('home').innerHTML = home;
    document.getElementById('away').innerHTML = away;
}

function updateScore(string, number) {
    if (string === 'home') {
        home += number;
    }
    else {
        away += number;
    }

    drawScoreBoard();
}
