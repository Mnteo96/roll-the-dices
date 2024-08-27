const rollBtn = document.getElementById("rollBtn").value; //a gomb amivel dob a felhasználó

function rollDice() {
    const number = document.getElementById("number").value; //a szám amit választ a felhasználó
    const rolledNumbers = document.getElementById("rolled-numbers"); //a számok, amiket a felhasználó dobott
    const rolledImages = document.getElementById("rolled-images"); //a képek a kockákról
    const values = []; //üres tömb a számoknak
    const images = []; //üres tömb a számokhoz tartozó képekhez

    for(let i = 0; i < number; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="img/${value}.png">`)
    }

    rolledNumbers.textContent = `Rolled numbers: ${values.join(', ')}`;
    rolledImages.innerHTML = images.join('');
    
}

