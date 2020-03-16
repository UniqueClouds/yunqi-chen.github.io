let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName ===null){
	  setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = '狮子 真可爱，' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '狮子 真可爱，' + storedName;
}
myButton.onclick = function() {
   setUserName();
}
/*let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/lion.jfif';){
		myImage.setAttribute('src', 'images/lion2.jfif');
	}else{
		myImage.setAttribute('src', 'images/lion.jfif');
	}
}*/