var gallery = document.querySelector('main')

var imageUrls = ['https://pbs.twimg.com/media/EctY-jKU4AAyc4f?format=jpg&name=900x900',
                 'https://img-9gag-fun.9cache.com/photo/aBm2rNQ_700bwp.webp',
                 'https://img-9gag-fun.9cache.com/photo/aAebRVE_700bwp.webp'
                  ];

var imageUrlInput = document.querySelector('input')
var addImageButton = document.querySelector('button')

addImageButton.addEventListener('click',function(){
  console.log(imageUrlInput.value)
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = ''
  updateGallery()
})

function updateGallery() {
  gallery.innerHTML = ''
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.classList.add('gallery-image');
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
