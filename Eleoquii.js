const navButton = document.getElementById("button_nav");
navButton.addEventListener("click", hiddenToolsbar);

const toolsBarColumn = document.getElementById('toolsbar_link_nav_column');

const bigPicture = document.querySelector('.big_picture');

const smallPictures = document.querySelector('.content_picture_small');
smallPictures.addEventListener('click',changePicture);


const mainContainer = document.querySelector('.main_content_container');
mainContainer.addEventListener('click', starChoice);

const checkBox20 = document.getElementById('checkbox_20').disabled=true;

const bookmark = document.querySelector(".container_bookmark_menu");
bookmark.addEventListener('click', showInfo);

const arrInputBookmarkMenu = bookmark.querySelectorAll('input');


const fashionText = document.querySelector('.fashion_text');
const fabricText = document.querySelector('.fabric_text');
const fitText = document.querySelector('.fit_text');

const formTextarea = document.getElementById('form_textarea');
const buttonWriteReview = document.getElementById('write_review');
buttonWriteReview.addEventListener('click', hiddenTextarea);

const reviewBox = document.querySelector('.review_box');
reviewBox.addEventListener('click', showReview);


function hiddenToolsbar(event) {
   console.log(toolsBarColumn.className);
   toolsBarColumn.style.display = toolsBarColumn.style.display === 'flex' ? 'none' : 'flex';  
}

function changePicture(event) {

   const elem = event.target;
   const smallElemSrc = elem.src;
   bigPicture.src = smallElemSrc;
}

function starChoice(event) {
   let elem = event.target;
   let starBox = elem.parentNode;

   if (starBox.className !== 'star_box') return;
      
   let arrStar = starBox.querySelectorAll('img');
   let starNum = elem.dataset.star;

   for (let i = 0; i < arrStar.length; i++) {
      if (i < starNum) {
         arrStar[i].src = "./png/Paomedia-Small-N-Flat-Star.512.png";
      } else {
         arrStar[i].src = "./png/star.png";
      }
   }       
}

function showInfo(event) {
   let label= event.target;
   let arr = [fashionText, fabricText, fitText];
   
   if (label.tagName !== 'LABEL') return;
  
   for (let i = 0; i < arr.length; i++) {
      if (label.id === arr[i].className) {
         arr[i].style.display = 'flex';   
      } else {
         arr[i].style.display = 'none';
      }
   }
}

function hiddenTextarea() {
   formTextarea.className = formTextarea.className === 'box_textarea_form hidden' ? 'box_textarea_form' : 'box_textarea_form hidden'; 
}

function  showReview(event) {
   let elem = event.target;
   console.log(elem.previousElementSibling.className);

   if (elem.tagName !== "BUTTON") return;
   
   let parentBox = elem.previousElementSibling;
   parentBox.className = parentBox.className === 'review_text' ? "" : 'review_text';    

}