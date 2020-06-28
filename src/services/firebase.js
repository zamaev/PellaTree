import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

firebase.initializeApp({
  apiKey: "AIzaSyA2mJzjGtJbT1DxFqR0BksPrJkkCxfbL2M",
  authDomain: "pellatree.firebaseapp.com",
  databaseURL: "https://pellatree.firebaseio.com",
  projectId: "pellatree",
  storageBucket: "pellatree.appspot.com",
  messagingSenderId: "160032959635",
  appId: "1:160032959635:web:a19c9d8fd0aca4e926f166"
})

export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth() // это функция передается

export const db = firebase.firestore()