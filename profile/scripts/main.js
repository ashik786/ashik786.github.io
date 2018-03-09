var myImage = document.querySelector('Img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Clinton.jpg') {
      myImage.setAttribute ('src','images/Ashik.jpg');
    }else {
	  myImage.setAttribute ('src','images/Clinton.jpg');
	}
   
}