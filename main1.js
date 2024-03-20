const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  menu.classList.remove("active");
};
  fetch('https://jsonplaceholder.typicode.com/photos',{
method: 'GET'

  })
  .then(res => {
   return res.json()
  })
  .then(data => console.log(data))
  .catch(error => console.log('Error'))
  
const 





  

 
