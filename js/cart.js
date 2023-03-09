const addProduct=()=>{
    const  productField= document.getElementById("product-name");
    const  quantitytField= document.getElementById("product-quantity");
    const  product= productField.value;
    const quantity= quantitytField.value;
    productField.value="";
    quantitytField.value="";
    displayProduc(product,quantity);
    console.log(product, quantity)

}
const displayProduc=(product,quantity)=>{
  
    const ul=document.getElementById("product-container");
    const li=document.createElement("li");
    li.innerText=`${product} : ${quantity}`;
    ul.appendChild(li);

}