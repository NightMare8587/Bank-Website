import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCrYPh4VudS9CLFu3KzfthF-qmDpa5RBmg",
    authDomain: "pulkit-bank.firebaseapp.com",
    projectId: "pulkit-bank",
    storageBucket: "pulkit-bank.appspot.com",
    messagingSenderId: "725565568335",
    appId: "1:725565568335:web:b9ac21e4f139bed728c13a",
    measurementId: "G-YTXNSC3E7M"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const App = () => {
  return (
    <>
    <Navbar/>
    <Login/>
    </>
  )
}

export default App