'use strict';if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').then(function(registration){console.log('ServiceWorker registration successful with scope: ',registration.scope)},function(err){console.log('ServiceWorker registration failed: ',err)})})}
window.onload=()=>{if(sessionStorage.getItem('currUser')){window.location.replace("./Manage.html")}
document.querySelector("#password").addEventListener("keyup",event=>{if(event.key!=="Enter")return;document.querySelector("#login").click();event.preventDefault()});firebase.auth().onAuthStateChanged(function(user){if(user){console.log('state changed : signed in!');sessionStorage.setItem("currUser",user.uid);firebase.database().ref('users/'+user.uid).once('value').then(function(currentUser){sessionStorage.setItem('isCoach',currentUser.val().isCoach);if(currentUser.val().isCoach==!0){window.location.replace("./Manage.html")}else{window.location.replace("./Manage.html?render=players")}}).catch(function(error){console.log('failed to get the current user data!')})}else{console.log('state changed : signed out!');sessionStorage.clear()}})}
var config={apiKey:"AIzaSyAXqXv30flt8Xh7bga-wG7IaOGULMaLZ-4",authDomain:"cse-134b-cfd78.firebaseapp.com",databaseURL:"https://cse-134b-cfd78.firebaseio.com",projectId:"cse-134b-cfd78",storageBucket:"",messagingSenderId:"996134578305"};firebase.initializeApp(config);var database=firebase.database();function loginUser(){let name=document.getElementById('name').value;let pass=document.getElementById('password').value;console.log(name);console.log(typeof(name));firebase.auth().signInWithEmailAndPassword(name,pass).catch(function(error){var errorCode=error.code;var errorMessage=error.message;console.log(errorCode);console.log(errorMessage)})}