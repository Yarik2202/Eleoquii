const navButton = document.getElementById("button_nav");
const toolsBarColumn = document.getElementById('toolsbar_link_nav_column');

navButton.addEventListener("click", hiddenToolsbar);


function hiddenToolsbar(event) {
   event.preventDefault();

   toolsBarColumn.style.display = toolsBarColumn.style.display === 'flex' ? 'none' : 'flex';  
}
