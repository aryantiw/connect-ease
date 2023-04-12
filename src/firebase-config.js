/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */

  apiKey: "AIzaSyDRc5Z2_a7jsVzho0mvb7K0KfRyWUQUrxQ",
  authDomain: "friendlychat-d445c.firebaseapp.com",
  projectId: "friendlychat-d445c",
  storageBucket: "friendlychat-d445c.appspot.com",
  messagingSenderId: "719847174115",
  appId: "1:719847174115:web:21a22acff858812ecd7ad6",
  measurementId: "G-F73YGMWDR8"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}