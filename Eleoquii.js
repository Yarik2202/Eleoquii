const container = document.getElementById('container');
function change(event){
   console.log(container.offsetWidth)
}
container.addEventListener('click', change)



