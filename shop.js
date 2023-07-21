let btnPlus=document.querySelector(".icon-plus")
btnLess=document.querySelector(".icon-minus")
let qty= document.querySelector(".icon-nil")
btnPlus.addEventListener("click",increaseQuantity)
btnLess.addEventListener("click",decreaseQuantity)

function increaseQuantity(){
   
   qty.innerHTML=parseInt(qty.innerHTML)+1;
   increase();
}

function decreaseQuantity(){
   
   if(qty.innerHTML>0){

      qty.innerHTML=parseInt(qty.innerHTML)-1;
   }
}

function increase(){
   let price=document.querySelector(".price")
   

   price.innerHTML=parseInt(price.innerHTML) *parseInt(qty.innerHTML);
}


