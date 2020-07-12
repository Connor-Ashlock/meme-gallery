var imageUrls = [];

var imageUrlInput = document.querySelector('input')
var addImageButton = document.querySelector('button')

addImageButton.addEventListener('click',function(){
  console.log(imageUrlInput.value)
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = ''
})
