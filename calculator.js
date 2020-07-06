function myfunction(){
    var h = document.getElementById("height")
    var w =document.getElementById("width")
    if((h.value) && (w.value)>=0){
        var area= (h.value)*(w.value);
        alert(" the area is " + area);
    }
    else{
        alert("invalid number");
    }
   

}