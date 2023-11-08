
let nameValue = document.querySelector("#pName").value;
const result = document.querySelector(".result");
let priceValue = document.querySelector("#price").value;
let qtyValue = document.querySelector("#quantity").value;
let form = document.querySelector("#quotationForm")
let btn=document.querySelector('#btn')


class Products{
  constructor(nameValue,priceValue,qtyValue){
    this.name=nameValue;
    this.quantity=qtyValue;
    this.price=priceValue;
    this.total=[];

    this.totalPrice=function(){
      const priceTotal= this.quantity*this.price
     return priceTotal;
}
}
}
let newProducts= new Products(nameValue,priceValue,qtyValue)



btn.addEventListener("click", updateValue);

function updateValue(e) {
   e.target.value=`${newProducts}`
}


// const product=new Products()

// nameValue.addEventListener("change", updateValue);

// function updateValue(e) {
//   result.textContent = e.target.value;
// }
// priceValue.addEventListener("change", updateValue);

// function updateValue(e) {
//   result.textContent = e.target.value;







