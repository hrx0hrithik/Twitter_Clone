
// // Initialize Firebase (ADD YOUR OWN DATA)
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyA9tqWOfst1p6qJnrpA7M0O_AkVc1pzBsA",
//     authDomain: "tweeter-clone-713cc.firebaseapp.com",
//     databaseURL: "https://tweeter-clone-713cc-default-rtdb.firebaseio.com",
//     projectId: "tweeter-clone-713cc",
//     storageBucket: "tweeter-clone-713cc.appspot.com",
//     messagingSenderId: "646741689671",
//     appId: "1:646741689671:web:c05072f983366535ee3862",
//     measurementId: "G-H5G9B3NLXM"
//   };
  
//   firebase.initializeApp(firebaseConfig);
  
//   // Reference messages collection
//   var messagesRef = firebase.database().ref('messages');
  
//   // Listen for form submit
//   document.getElementById('signup-form').addEventListener('submit', submitForm);
  
//   // Submit form
//   function submitForm(e){
//     e.preventDefault();
  
//     // Get values
//     var name = getInputVal('name');
//     var email = getInputVal('email');
//     var phone = getInputVal('phone');
//     var dob = getInputVal('dateOfBirth');
//     var pass = getInputVal('password')
  
//     // Save message
//     saveMessage(name, email, phone, dob, pass);
  
//     // Show alert
//     document.querySelector('.alert').style.display = 'block';
  
//     // Hide alert after 3 seconds
//     setTimeout(function(){
//       document.querySelector('.alert').style.display = 'none';
//     },3000);
  
//     // Clear form
//     document.getElementById('signup-form').reset();
//   }
  
//   // Function to get get form values
//   function getInputVal(id){
//     return document.getElementById(id).value;
//   }
  
//   // Save message to firebase
//   function saveMessage(name, email, phone, dob, pass){
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//       name: name,
//       email:email,
//       phone:phone,
//       dob: dob,
//       pass: pass,
//     });
//   }





const stepTwoNextBtn = document.getElementById('signup');
const partOne = document.querySelector('.part-one-cls');
const partTwo = document.querySelector('.part-two');
const useEmail = document.querySelector('.use-email');
const phoneOrMail = document.querySelector('#email-or-phn');
const usePhone = document.querySelector('.use-phn');
const nextOne = document.querySelector('#nxt-1');
const tnc = document.querySelector('.tnc');
const tncBack = document.querySelector('#tnc-back');
const tncNext = document.querySelector('#nxt-2');
const partThree = document.querySelector('.part-three');
const partThreeBack = document.querySelector('#three-back');

stepTwoNextBtn.addEventListener('click', function () {
    partOne.classList.remove('active');
    partTwo.classList.add('active');
    // console.log('Next');
});

useEmail.addEventListener('click', function(){
    phoneOrMail.placeholder = 'Email';
    phoneOrMail.type = "email";
    useEmail.innerText = '';
    usePhone.innerText = 'Use phone insted';
    // console.log('phn');
});

usePhone.addEventListener('click', function(){
    phoneOrMail.placeholder = 'Phone';
    phoneOrMail.type = "tel";
    usePhone.innerText = '';
    useEmail.innerText = 'Use email insted';
    // console.log('email');
});

nextOne.addEventListener('click', function () {
    partTwo.classList.remove('active');
    tnc.classList.add('active');
    console.log('Next');
});

tncBack.addEventListener('click', function(){
    tnc.classList.remove('active');
    partTwo.classList.add('active');
})
tncNext.addEventListener('click', function(){
    tnc.classList.remove('active');
    partThree.classList.add('active');
})

partThreeBack.addEventListener('click', function(){
    partThree.classList.remove('active');
    tnc.classList.add('active');
})
