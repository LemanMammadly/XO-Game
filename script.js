let x = "X";
let o = "O";
let arr = [];
let count = 1;
let player1;
let player2;
let point1 = 0;
let point2 = 0;

let first = document.getElementById("first");
let second = document.getElementById("second");
let pointFirst = document.getElementById("point1");
let pointSecond = document.getElementById("point2");
let winner=document.getElementById("winner");
let same=document.getElementById("same");

Start();

function Start() {
  player1 = player1 == undefined ? prompt("Player1", "X") : player1;
  player2 = player2 == undefined ? prompt("Player2", "O") : player2;

  first.innerHTML = player1;
  second.innerHTML = player2;
  Arr();
  table();
}

Arr();
table();

function table() {
  let tbl = document.getElementById("tbl");
  let tr = "";

  for (let i = 0; i < 3; i++) {
    tr += `<tr>`;

    for (let j = 0; j < 3; j++) {
      tr += `<td onclick="Click(${i},${j} )"> ${
        arr[i][j] == undefined ? "" : arr[i][j]
      } </td>`;
    }
    tr += `</tr>`;
  }
  tbl.innerHTML = tr;
}

function Arr() {
  for (let i = 0; i < 3; i++) {
    arr[i] = [];
  }
}

function Click(i, j) {
  if (arr[i][j] == undefined) {
    if (count % 2 == 0) {
      arr[i][j] = o;
    } else {
      arr[i][j] = x;
    }
    count++;
    table();
    setTimeout(() => {
      check();
    }, 500);
    if (count == 10) {
    same.innerHTML="Beraberlik var."
       setTimeout(() => {
        Start();
      }, 500);
    }
  }
}

function check() {
  for (let i = 0; i < 3; i++) {
    if (
      arr[i][0] !== undefined &&
      arr[i][0] === arr[i][1] &&
      arr[i][1] === arr[i][2]
    ) {
      alert(arr[i][0] == x ? player1 : player2);
      count = 0;
      console.log(arr[i][0] == x ? ++point1 : ++point2);
      pointFirst.innerHTML = point1;
      pointSecond.innerHTML = point2;
      Start();
      return;
    } else if (
      arr[0][i] !== undefined &&
      arr[0][i] === arr[1][i] &&
      arr[1][i] === arr[2][i]
    ) {
      alert(arr[0][i] == x ? player1 : player2);
      count = 0;
      console.log(arr[0][i] == x ? ++point1 : ++point2);
      pointFirst.innerHTML = point1;
      pointSecond.innerHTML = point2;
      Start();
      return;
    } else if (
      arr[0][0] !== undefined &&
      arr[0][0] === arr[1][1] &&
      arr[1][1] === arr[2][2]
    ) {
      alert(arr[0][0] == x ? player1 : player2);
      count = 0;
      console.log(arr[0][0] == x ? ++point1 : ++point2);
      pointFirst.innerHTML = point1;
      pointSecond.innerHTML = point2;
      Start();
      return;
    } else if (
      arr[0][2] !== undefined &&
      arr[0][2] === arr[1][1] &&
      arr[1][1] === arr[2][0]
    ) {
      alert(arr[0][2] == x ? player1 : player2);
      count = 0;
      console.log(arr[0][2] == x ? ++point1 : ++point2);
      pointFirst.innerHTML = point1;
      pointSecond.innerHTML = point2;
      Start();
      return;
    }
  }
  Congrats();
}

function Congrats() {
  if (point1 == 2) {
    winner.innerHTML=`Congrats! ${player1} win!`;
    setTimeout(()=>{
        window.location.reload()
    },3000);
  } else if (point2 == 2) {
    winner.innerHTML=`Congrats! ${player2} win!`
    setTimeout(()=>{
        window.location.reload()
    },3000);
  }
}
