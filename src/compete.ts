import { collection, getDocs } from 'firebase/firestore/lite';
import { auth, db } from './main';
let name = document.getElementById('names')!;
let win = document.getElementById('Wins')!;

const colRef = collection(db, 'leaderboard');
getDocs(colRef).then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    let li = document.createElement('li');
    li.innerText = doc.data().name;
    name.appendChild(li);
    li = document.createElement('li');
    li.innerText = doc.data().Wins;
    win.appendChild(li);
  });
});

let p1 = document.getElementById('player1')!;
let p1Name = document.getElementById('user1')!;
let p2 = document.getElementById('player2')!;
let p2Name = document.getElementById('user2')!;
let problemArea = document.getElementById('problem-area')!;
let form = document.getElementById('answer')!;
let userVal = <HTMLInputElement>document.getElementById('value')!;
p1.onclick = () => {
  p1.style.backgroundColor = 'green';
  console.log(auth.currentUser);
  if (auth.currentUser == null) {
    p1Name.innerText = 'Please Sign In';
  } else {
    p1Name.innerText =
      auth.currentUser.displayName || auth.currentUser.email || 'No Name';
  }
};
p2.onclick = () => {
  p2.style.backgroundColor = 'green';
  console.log(auth.currentUser);
  if (auth.currentUser == null) {
    p2Name.innerText = 'Please Sign In';
  } else {
    p2Name.innerText =
      auth.currentUser.displayName || auth.currentUser.email || 'No Name';
    problemArea.innerText = problems[0].problem;
  }
};

let problems = [
  {
    problem:
      'Ariel was playing basketball. 1 of her shots went in the hoop. 2 of her shots did not go in the hoop. How many shots were there in total?',
    answer: '3',
  },
];

form.onsubmit = (e) => {
  e.preventDefault();
  if (userVal.value == problems[0].answer) {
    console.log('c');
  }
};
