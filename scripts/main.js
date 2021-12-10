let myHeading = document.querySelector("h1")
myHeading.textContent = "hello world!"


// document.querySelector('html').onclick = function() {
//     alert('别戳我，我怕疼。');
// }


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/web.png') {
      myImage.setAttribute('src', 'img/abc.gif');
    } else {
      myImage.setAttribute('src', 'img/web.png');
    }
}


function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

let myButton = document.querySelector("button")
myButton.onclick = function() {
  setUserName();
}