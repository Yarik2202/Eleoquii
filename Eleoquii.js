const navButton = document.getElementById("button_nav");
navButton.addEventListener("click", hiddenToolsbar);

const toolsBarColumn = document.getElementById('toolsbar_link_nav_column');

const bigPicture = document.querySelector('.big_picture');

const smallPictures = document.querySelector('.content_picture_small');
smallPictures.addEventListener('click',changePicture);


const mainContainer = document.querySelector('.main_content_container');
mainContainer.addEventListener('click', starChoice);

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

const formColorSize = document.getElementById('form_color_size');

const form = document.getElementById('form_color_size');
form.addEventListener('submit', bagInfo);

// !!!!BAG!!!! 
const viewBagButton = document.getElementById('view_bag_button');


const formReview = document.getElementById('form_textarea');
formReview.addEventListener('submit', addReview);

const buttonSend = document.getElementById('button_send');
let elemTextarea = document.getElementById('textarea_review');



function hiddenToolsbar(event) {
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
         arr[i].style.display = label.id === arr[i].className ? 'flex' : 'none';
      } else {
         arr[i].style.display = 'none';
      }
   }
}

function hiddenTextarea() {
   buttonSend.className = "button_send";
   elemTextarea.placeholder = "Write your review"
   formTextarea.className = formTextarea.className === 'box_textarea_form hidden' ? 'box_textarea_form' : 'box_textarea_form hidden'; 
}

function  showReview(event) {
   let elem = event.target;

   if (elem.tagName !== "BUTTON") return;
   
   let parentBox = elem.previousElementSibling;
   parentBox.className = parentBox.className === 'review_text_hidden' ? "" : 'review_text_hidden'; 
}

function bagInfo (event) {
   event.preventDefault();
   const formData = new FormData(event.target);
   var object = {};
   formData.forEach((value, key) => {
      console.log({value, key})
      if(!Reflect.has(object, key)){
          object[key] = value;
          return;
      }
      if(!Array.isArray(object[key])){
          object[key] = [object[key]];    
      }
      object[key].push(value);
  });
     
}

function addReview (event) {
   event.preventDefault();
   let arrReview = [];

   let reviewText = elemTextarea.value;

   let date = new Date;
   let options = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };

   let formatData = new Intl.DateTimeFormat("en-US", options).format(date)

   if (reviewText.trim() === "" ) {
      console.log(elemTextarea.placeholder)
      elemTextarea.placeholder = "YOU FORGOT WRITE THE TEXT!!!";
      buttonSend.className = "button_send no_text";

      return
   };
   console.log(1)
   let newReview = `
      <div class="review">
         <h4> Subject Line Of The Review</h4>
         <p>Posted by Hollski | ${formatData}</p>
         <div class="star_box">
            <img src="./png/star.png" alt="star1" data-star="1">
            <img src="./png/star.png" alt="star2" data-star="2">
            <img src="./png/star.png" alt="star3" data-star="3">
            <img src="./png/star.png" alt="star4" data-star="4">
            <img src="./png/star.png" alt="star5" data-star="5">
         </div>
         <div class="review_text_hidden">
            ${reviewText}
         </div>
         <button>Read More ></button>
      </div>
   `;

   arrReview.push(newReview);
   let arrReviewJoin = arrReview.join('')
   let reviewBox = document.getElementById('review_box');
   reviewBox.innerHTML = arrReviewJoin;

   elemTextarea.value = "";
   formTextarea.className = 'box_textarea_form hidden'
   
}



