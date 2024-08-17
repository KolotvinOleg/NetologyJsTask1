getHole = index => document.getElementById(`hole${index}`);

countDead = document.getElementById('dead');
countLost = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = () => {
        if (getHole(i).className.includes( 'hole_has-mole' )) {
            countDead.textContent = Number(countDead.textContent) + 1;
        } else {
            countLost.textContent = Number(countLost.textContent) + 1;
        };
        if (countDead.textContent == 10) {
            alert('Вы победили');
            countDead.textContent = 0;
            countLost.textContent = 0;
        } else if (countLost.textContent == 5) {
            alert('Вы проиграли');
            countDead.textContent = 0;
            countLost.textContent = 0;
        }

    }   
}