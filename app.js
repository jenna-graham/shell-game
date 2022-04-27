// import functions and grab DOM elements
const button1 = document.getElementById('shell-one-button');
const button2 = document.getElementById('shell-two-button');
const button3 = document.getElementById('shell-three-button');

const shell1 = document.getElementById('shell-one');
const shell2 = document.getElementById('shell-two');
const shell3 = document.getElementById('shell-three');

const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');



// let state
let wins = 0;
let losses = 0;



// set event listeners 
button1.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
  
    console.log('clicked button 1');
  // decide which item the ball is under
    const winningShell = Math.ceil(Math.random() * 3);

    console.log('the winning shell is', winningShell);
    if (winningShell === 1) {
        shell1.classList.add('reveal');
        wins++;
    } else if (winningShell === 2) {
        shell2.classList.add('reveal');
        losses++;
    } else {
        shell3.classList.add('reveal');
        losses++;
    }
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});    
button2.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');

    console.log('clicked button 2');
    const winningShell = Math.ceil(Math.random() * 3);

    console.log('the winning shell is', winningShell);
    if (winningShell === 2) {
        shell2.classList.add('reveal');
        wins++;
    } else if (winningShell === 1) {
        shell1.classList.add('reveal');
        losses++;
    } else {
        shell3.classList.add('reveal');
        losses++;
    }
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
}); 

button3.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');

    console.log('clicked button 3');
    const winningShell = Math.ceil(Math.random() * 3);

    console.log('the winning shell is', winningShell);
    if (winningShell === 3) {
        shell3.classList.add('reveal');
        wins++;
    } else if (winningShell === 1) {
        shell1.classList.add('reveal');
        losses++;
    } else {
        shell2.classList.add('reveal');
        losses++;
    }
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
}); 


