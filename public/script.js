 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD4uUpGiNlFBqxuU6GIE3lDNXnX2A3n0MY",
    authDomain: "contactform-24996.firebaseapp.com",
    projectId: "contactform-24996",
    storageBucket: "contactform-24996.appspot.com",
    messagingSenderId: "548448932319",
    appId: "1:548448932319:web:0628d6269f4279aebd346a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref('submissions');//reference to contact info collection

document.querySelector('.contact-form').addEventListener('submit',
submitForm);

function submitForm(e){
    e.preventDefault();
    
    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const message = document.querySelector('.message').value;
   
    saveContactInfo(name, email, message);
    document.querySelector('.contact-form').reset();
}

function saveContactInfo(name, email, message){
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        Name: name,
        eMail: email,
        Message: message
    });
}