


let hisob = document.getElementById("btn")

hisob.onclick = function max1020(){
    let a = document.getElementById("son1").value
    let b = document.getElementById("son2").value
    let p = document.getElementById("par")
    if(a>b && a<21 ){
      return p.innerHTML=a;
    }
    else if(a<b && b<21){
      return p.innerHTML=b;
    }
    else if(a==10){
      return p.innerHTML=10;
    }
    else if(b==10){
      return p.innerHTML=10;
    }
    else {
      return p.innerHTML=0;
    }

  }