function generatenum(){

   var randnum = Math.ceil(Math.random()*20);
   return randnum;

}

function time(mins){

    minutes=mins%60;
    hours=Math.floor(mins/60);
    return hours + " hour/s and " + minutes + " minute/s";

}

function storyline(){

    var num1=generatenum();
    var num2=generatenum();
    var num3=generatenum();
    var rating
    var alphabet="abcdefghijklmnopqrstuvwxyz";

    if(num1==0){
        rating=alphabet[0];
    }else{
        rating=alphabet[num1-1];
    }
   

    var greatestnum=Math.max(num1,num2,num3);
    

    var mins=num2*num3;
    var finaltime=time(mins);


    document.getElementById("sub_title").innerText = "Daily Finds :)" ;
    document.getElementById("num1").innerText = "Leirocks - "+num1 ;
    document.getElementById("num2").innerText = "Amethyst Shards - " + num2 ;
    document.getElementById("num3").innerText = "Glory Weapons - " + num3 ;

    if(num1==num2&&num1==num3&&num2==num3){
        document.getElementById("numplayers").innerText = "Online adventurers, Best finds: " + greatestnum+ " >>> All treasures were best finds today! ("+num1+","+num2+","+num3+")";
    } 
    else if(num1 === num2 && num1 === greatestnum){
        document.getElementById("numplayers").innerText = "Online adventurers, Best finds: " + greatestnum+ " >>> Leirocks - "+num1+" and Amethyst Shards - "+num2+" were the best finds TODAY! ";
    }else if(num1 === num3 && num1 === greatestnum){
        document.getElementById("numplayers").innerText = "Online adventurers, Best finds: " + greatestnum+ " >>> Leirocks - "+num1+" and Glory Weapons - "+num3+" were the best finds TODAY! ";
    }else if(num2 === num3 && num2 === greatestnum){
        document.getElementById("numplayers").innerText = "Online adventurers, Best finds: " + greatestnum+ " >>> Amethyst Shards - "+num2+" and Glory Weapons - "+num3+" were the best finds TODAY! ";
    }
        else{
        document.getElementById("numplayers").innerText = "Online adventurers: " + greatestnum ;
    }
    
    document.getElementById("rating").innerText = "Your adventure rating: " + rating;
    document.getElementById("time").innerText = "Duration of your adventure ("+mins+" minutes)"+": " + finaltime;
    
}