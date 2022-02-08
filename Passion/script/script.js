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