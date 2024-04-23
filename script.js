var heart = document.querySelector('.heart'),
    reload = document.querySelector('.reload'),
    hearts = document.querySelector('.hearts'),
    allHearts = document.querySelectorAll('.hearts div'),
   heartAnime = document.querySelector('.heart.anime')
    

heart.addEventListener('click', animation);

reload.addEventListener('click', refresh)


function animation() {
   heart.classList.add("active");
   reload.setAttribute("style", "opacity: 1; cursor: pointer; pointer-events: auto;  ");
   heartAnime.style.opacity = "0";

   allHearts.forEach(function(element) {
      element.classList.add("active");
   })
}

function refresh() {
  heart.classList.remove("active");
      reload.setAttribute("style", "opacity: 0; pointer-events: none;");
   heartAnime.style.opacity = "1";;

   allHearts.forEach(function(element) {
      element.classList.remove("active");
   })
   
}
   /* by encodedmabel 
 linktr.ee/mabelolivera10
   */
