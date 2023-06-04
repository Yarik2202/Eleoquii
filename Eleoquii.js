const navButton = document.getElementById("button_nav");
navButton.addEventListener("click", hiddenToolsbar);

const toolsBarColumn = document.getElementById('toolsbar_link_nav_column');

const bigPicture = document.querySelector('.big_picture');

const smallPictures = document.querySelector('.content_picture_small');
smallPictures.addEventListener('click',changePicture);

const starBox = document.querySelector('.star_box');
starBox.addEventListener('click', starChoise);

const checkBox20 = document.getElementById('checkbox_20').disabled=true;


function hiddenToolsbar(event) {
   event.preventDefault();
   toolsBarColumn.style.display = toolsBarColumn.style.display === 'flex' ? 'none' : 'flex';  
}

function changePicture(event) {
   event.preventDefault();

   const elem = event.target;
   const smallElemSrc = elem.src;
   bigPicture.src = smallElemSrc;
}

function starChoise(event) {
   event.preventDefault();
   
   let arrStar = starBox.querySelectorAll('img');
   
   let starChoice = event.target;
   let starNum = starChoice.dataset.star;
   

      for (let i = 0; i < arrStar.length; i++) {
         if (i < starNum) {
            arrStar[i].src = "./png/Paomedia-Small-N-Flat-Star.512.png";
         } else {
            arrStar[i].src = "./png/star.png";
         }
      }     
}
