const showAlert=()=>{
    alert("dhar de")
}
const lendMoney=()=>{
   const result= confirm("will you?");
   if(result==true){
    alert("dosto,,")
   }
   else{
    alert("shotru..")
   }
}
const getInfo=()=>{
    const name=prompt("name bol?");
    if(name=== null){
        alert("kam nai")
    }
    else{console.log(name, "welcome!!!")}
}