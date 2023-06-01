const navButton = document.getElementById("button_nav");
const toolsBarColumn = document.getElementById('toolsbar_link_nav_column');

navButton.addEventListener("click", changeToolsbar);



function changeToolsbar(event) {
   event.preventDefault();
  
   if(navButton.value === "0") {
      navButton.value = "1";
      toolsBarColumn.className = "toolsbar_link_nav_column";
   } else if (navButton.value === "1") {
      navButton.value = "0";
      toolsBarColumn.className = "elements_hidden";
   }
   
}
