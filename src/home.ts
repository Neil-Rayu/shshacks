import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './main';
console.log('hello');
let button = document.querySelector<HTMLButtonElement>('#signIn')!;
const provider = new GoogleAuthProvider();
let signedIn = false;
button.onclick = function sign() {
  if (signedIn) {
    signOut(auth);
    signedIn = false;
    button.innerText = 'Sign In';
  } else {
    signInWithPopup(auth, provider);

    signedIn = true;
    button.innerText = 'Sign Out';
  }
};
