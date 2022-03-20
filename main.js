var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://24.media.tumblr.com/ab8c512b588062dac5694c8f9ecb68ff/tumblr_mknnboP33d1r45gwao1_500.gif') {
      myImage.setAttribute ('src', 'https://thumbs.gfycat.com/GraciousFluffyDesertpupfish-size_restricted.gif');
    } else {
      myImage.setAttribute ('src','https://24.media.tumblr.com/ab8c512b588062dac5694c8f9ecb68ff/tumblr_mknnboP33d1r45gwao1_500.gif');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hakuna Matata, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hakuna Matata, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }  