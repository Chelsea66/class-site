function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Hello") {
    x.innerHTML = "Passion!";
  } else {
    x.innerHTML = "Hello";
  }
}

function Questionfunction() {
  var x = document.getElementById("myQuestion");
  if (x.innerHTML === "What am I interested in?") {
    x.innerHTML = "What makes me move forward?";
  } else {
    x.innerHTML = "What am I interested in?";
  }
}

// ABout Page


// Their me Page
function clickButton() {
	var name = document.getElementById("name").value;
	alert("Hello, " + name + "!");
}

function addPost() {
	var postText = document.getElementById("post").value;
	
	// I'm going to create a new paragraph <li>
	var li = document.createElement("li");
	li.innerHTML = postText;
	
	// Get my list
	var posts = document.getElementById("posts");
	posts.appendChild(li);
    
    
}

//Back to Top
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Original Style
function OriginalStyle(){
	var PageStyle = document.getElementById("PageStyle");
	PageStyle.setAttribute("class","Original_Style");
}

//Style 1
function ChangePageStyle1(){
	var PageStyle = document.getElementById("PageStyle");
	PageStyle.setAttribute("class","Style1");
}