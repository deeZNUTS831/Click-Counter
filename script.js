let score = 0;

const myBtn = document.getElementById('button'); 

myBtn.addEventListener('click', point);

function point(){
    score += 1;
    const myScore = document.getElementById('myScore');
    myScore.textContent = score;

    if (score == 20) {
        score -= score;
        myScore.textContent = score;
    }
}

