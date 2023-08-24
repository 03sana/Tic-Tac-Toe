let statusText = document.querySelector('.statusText');
const restartBtn = document.querySelector('#restartBtn');
const cellItem = document.querySelectorAll('.cell');
statusText.innerHTML = 'X play';

let turn = 'X';
let cells = [];
function cellColor(num1, num2, num3) {
  statusText.innerHTML = `${cells[num1]} winner`;
  document.getElementById('item' + num1).style.background = 'lightgreen';
  document.getElementById('item' + num2).style.background = 'lightgreen';
  document.getElementById('item' + num3).style.background = 'lightgreen';
}
function winner() {
  for (let i = 1; i < 10; i++) {
    cells[i] = document.getElementById('item' + i).innerHTML;
  }
  //rows
  if (cells[1] == cells[2] && cells[2] == cells[3] && cells[1] != '') {
    cellColor(1, 2, 3);
  } else if (cells[4] == cells[5] && cells[5] == cells[6] && cells[5] != '') {
    cellColor(4, 5, 6);
  } else if (cells[7] == cells[8] && cells[8] == cells[9] && cells[8] != '') {
    cellColor(7, 8, 9);
  }

  //columns
  else if (cells[1] == cells[4] && cells[4] == cells[7] && cells[1] != '') {
    cellColor(1, 4, 7);
  } else if (cells[2] == cells[5] && cells[5] == cells[8] && cells[5] != '') {
    cellColor(2, 5, 8);
  } else if (cells[3] == cells[6] && cells[6] == cells[9] && cells[6] != '') {
    cellColor(3, 6, 9);
  }

  //diagonals 
  else if (cells[1] == cells[5] && cells[5] == cells[9] && cells[5] != '') {
    cellColor(1, 5, 9);
  } else if (cells[3] == cells[5] && cells[5] == cells[7] && cells[5] != '') {
    cellColor(3, 5, 7);
  }

  //draw

  else if(!cells.includes('')){
    statusText.innerHTML ='Draw! Restart Game';
    
  }
}


function placeMark(id) {
    
  let element = document.getElementById(id);
  if (element.innerHTML == '' && !statusText.innerHTML.includes("winner")) {
   
  if (turn === 'X' && element.innerHTML == '') {
    element.innerHTML = 'X';
    turn = 'O';
    statusText.innerHTML = 'O'+ ' play';
  } else if (turn === 'O' && element.innerHTML == '') {
    element.innerHTML = 'O';
    turn = 'X';
    statusText.innerHTML ='X'+ ' play';
  }
 
  winner();
}

}
restartBtn.addEventListener("click", restartGame);

function restartGame() {
    cells = ['','','','','','','','',''];
    cellItem.forEach(cell => {
        cell.innerHTML = ""; // Clear the content of each cell
        cell.style.background = ""; // Reset cell background
    });
    setInterval(function(){ statusText.innerHTML = "Game restarted.."},1000);
    setTimeout(function(){location.reload()},2000)
   // Update status text
    turn = 'X'; // Reset the turn
}


//FIX THAT U SHOULD STOP THE CLICKING WHEN A USER WINS

