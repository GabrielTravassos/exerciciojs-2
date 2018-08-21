let x = 79;
let n = Number(prompt("digite aqui seu palpite"));

if((n >= 0) && (n <= 100)){
  while(n != x ){
    
    if(x > n){
        alert("numero maior");
        n = Number(prompt("digite aqui seu palpite"));

    }   else if(x < n){
        alert("numero menor");
        n = Number(prompt("digite aqui seu palpite"));
    }
      
  }  
alert("numero correto")  
}

else{
    alert("numero invalido")
}

