var requestButton = document.querySelector(".request-button");
var showButton = document.querySelector(".show-button");


//Upon clicking Allow or Block, the button should change colors indicating your choice.

function onGranted() {
   requestButton.style.background = "green";//Button will turn green if user is ok with notifications.
}

function onDenied() {
   requestButton.style.background = "red";//Button will turn red if user does not want notifications.
}
//onGranted and onDenied are both functions to be called if the user grants or denies our request to allow notifications. 
requestButton.onclick = function() {
   Push.Permission.request(onGranted, onDenied);
}


showButton.onclick = function() {
Push.create("Hey there, I'm Chase! this is a notification using push.js!", {
   body: "push.js is Awesome!",
   icon: "/chaseNY.JPG",//image file
  // imageUrl: "/chaseNY.JPG",//NOT NESSESSARY!
   vibrate: [100, 50, 100],
   timeout: 9000,//5 secs.
   onClick: function() {
      console.log(this);
   }
   
   
});



};
