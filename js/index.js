  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAlrpMXj0y46_16JSHwLInowjBMOJuVKUA",
    authDomain: "sign-in-new-page.firebaseapp.com",
    databaseURL: "https://sign-in-new-page.firebaseio.com",
    projectId: "sign-in-new-page",
    storageBucket: "sign-in-new-page.appspot.com",
    messagingSenderId: "454383002776",
    appId: "1:454383002776:web:262da526b281ac4fff1ced"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  function signup()
  {
	var email = document.getElementById("email");  
	var password = document.getElementById("password");  
	const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
	promise.catch(e =>alert(e.message));
	alert("Sign Up");
  }
  function signin()
  {
	var email = document.getElementById("email");  
	var password = document.getElementById("password"); 
	const promise = auth.signInWithEmailAndPassword(email.value, password.value);
	promise.catch(e =>alert(e.message));
	alert("Sign In " + email.value);
  }
  function signout()
  {
	  auth.signOut();
	 alert("Sign Out");
  }
  auth.onAuthStateChanged(function(user)
  {
	  if(user)
	  {
		  var email = user.email;
		  alert("Active User " + email);
	  }
	  else
	  {
		  alert("NO activate User");
	  }
  });