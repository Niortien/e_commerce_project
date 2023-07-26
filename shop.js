let btnPlus=document.querySelector(".icon-plus")
btnLess=document.querySelector(".icon-minus")
let qty= document.querySelector(".icon-nil")
btnPlus.addEventListener("click",increaseQuantity)
btnLess.addEventListener("click",decreaseQuantity)

function increaseQuantity(){
   
   qty.innerText=parseInt(qty.innerText)+1;
   increase();

}

function decreaseQuantity(){
   
   if(qty.innerHTML>0){

      qty.innerHTML=parseInt(qty.innerHTML)-1;
      increase();
   }
}

function increase(){
   let price=document.querySelector(".price");
   let qty =  document.querySelector(".icon-nil");
   

   price.innerHTML=parseInt(price.innerHTML) *parseInt(qty.innerHTML);
}



let iconMenu = document.querySelector('.menu');
let iconClose = document.querySelector('.icon-close');

iconMenu.addEventListener('click', showMenu);
iconClose.addEventListener('click', closeMenu);

function showMenu() {
   let small_menu = document.querySelector('.small_menu');
   small_menu.classList.add('show-small-menu');
}

function closeMenu() {
   let small_menu = document.querySelector('.small_menu');
   small_menu.classList.remove('show-small-menu');
}

let image=document.querySelectorAll(".image")
image.forEach((buttn)=>{buttn.addEventListener("click",change)})

function change(){

   let currentScr = this.children[0].src;
   let newScr = currentScr.substr(22, 22) + '.jpg';
   let mainImg = document.querySelector('.img-main');
   mainImg.setAttribute('src', newScr);

}
