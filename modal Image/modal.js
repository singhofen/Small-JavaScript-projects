//get the modal

var modal = document.getElementById('myModal');

//get the image and insert it inside the modal use its alt text as caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;

}

//get the <span> element that closes the modal

var span = document.getElementsByClassName("close")[0];

//when user clicks on <span>  (x), close the modal
span.onclick = function() {
   modal.style.display = "none";
}

//*********************2nd modal******************// 
//*********************2nd modal******************// 
//*********************2nd modal******************// 

//get the modal

var modal = document.getElementById('myModal-2');

//get the image and insert it inside the modal use its alt text as caption
var img = document.getElementById('myImg-1');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption-1");
img.onclick = function(){
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;

}

//get the <span> element that closes the modal

var span = document.getElementsByClassName("close-1")[0];

//when user clicks on <span>  (x), close the modal
span.onclick = function() {
   modal.style.display = "none";
}