let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container buttons');
let messageContainers = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

// contador de jogadas

let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes

for(let i =0; i< boxes.length; i++) {
    // quando alguem clica na caixa
    boxes[i].addEventListener('click', function(){
        let el = checkEl(player1, player2);

        // verica se ja foi jogada

        if(this.childNodes.length == 0) {
            let cloneEL = el.cloneNode(true);
            this.appendChild(cloneEL);
    
            // computar jogadas

            if(player1 == player2) {
                player1++;
            } else {
                player2++;
            }
            // check quem venceu
            
        }

    });
}

// Verifica quem vai jogar

let checkEl = (player1, player2) => {
    if(player1 == player2) {
        // x 
        el = x;
    }else {
        // o
        el = o;
    }
    return el;
}



