const navButton = document.getElementById("button_nav");
navButton.addEventListener("click", hiddenToolsbar);

const toolsBarColumn = document.getElementById('toolsbar_link_nav_column');

const bigPicture = document.querySelector('.big_picture');


const smallPictures = document.querySelector('.content_picture_small');
smallPictures.addEventListener('click',changePicture);

function hiddenToolsbar(event) {
   event.preventDefault();
   toolsBarColumn.style.display = toolsBarColumn.style.display === 'flex' ? 'none' : 'flex';  
}

function changePicture(event) {
   event.preventDefault();

   const elem = event.target;
   const smallElemSrc = elem.src;
   console.log(smallElemSrc)
   bigPicture.src = smallElemSrc;
}
