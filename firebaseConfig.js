import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: 'AIzaSyArj98taPLtYk86WqYnbIkSJGLlU0w4vmE',
  authDomain: 'camshorrorquiz.firebaseapp.com',
  databaseURL: 'https://camshorrorquiz.firebaseio.com',
  projectId: 'camshorrorquiz',
  storageBucket: 'camshorrorquiz.appspot.com',
  messagingSenderId: '271823232905'
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)
