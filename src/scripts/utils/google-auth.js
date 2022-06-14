import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult, signOut, onAuthStateChanged } from "firebase/auth";
import setUserLevel from './setUserLevel';
const provider = new GoogleAuthProvider();

const auth = getAuth();

getRedirectResult(auth)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access Google APIs.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;

  // The signed-in user info.
  const userData = result.user;
  sessionStorage.setItem('user', JSON.stringify(userData));
  location.reload();
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorCode, errorMessage);
  // The email of the user's account used.
  const email = error.customData.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
});

const authInit = () => {
  signInWithRedirect(auth, provider);
}

const signOutInit = () => {
  signOut(auth).then(() => {
    sessionStorage.removeItem('user');
    location.reload();
  }).catch((error) => {
    alert(error.message);
  });
}

function authStateObserver (user) {
  if (user) {
    console.log('user signed in', user);
    setUserLevel(user.uid);
  } else {
  }
}

function initFirebaseAuth () {
  onAuthStateChanged(getAuth(), authStateObserver)
}


export { authInit, signOutInit, initFirebaseAuth };