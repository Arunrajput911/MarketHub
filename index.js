var buttonSelect=document.getElementsByClassName("select-btn");
for(var i=0;i<buttonSelect.length;i++){
    var z=buttonSelect[i];
    var cartArray=[];
    z.addEventListener("click",function(event){
        var button=event.target;
        var text,count=0;
        var detailBox=button.parentElement.parentElement;
        var item=detailBox.getElementsByClassName('item')[0].innerText;
        var price=detailBox.getElementsByClassName('price')[0].innerText;
        cartArray.push(item,price);
       
        text = "<ul>";
    for (var j = 0; j < cartArray.length; j++) {
      text += "<li>" + cartArray[j] + "</li>";
    }
    text += "</ul>";
            document.getElementById("demo").innerHTML=text;  
            count++;
    });
    
}


$(".a1").on("click",function(){
    $("#b1").toggle();
});

$(".a2").on("click",function(){
    $("#b2").toggle();
});

$(".a3").on("click",function(){
    $("#b3").toggle();
});

$(".a4").on("click",function(){
    $("#b4").toggle();
});

$(".a5").on("click",function(){
    $("#b5").toggle();
});

$(".a6").on("click",function(){
    $("#b6").toggle();
});

$(".a7").on("click",function(){
    $("#b7").toggle();
});

$(".a8").on("click",function(){
    $("#b8").toggle();
});

$(".a9").on("click",function(){
    $("#b9").toggle();
});

$(".a10").on("click",function(){
    $("#b10").toggle();
});

$(".a11").on("click",function(){
    $("#b11").toggle();
});

$(".a12").on("click",function(){
    $("#b12").toggle();
});

$(".a13").on("click",function(){
    $("#b13").toggle();
});

$(".a14").on("click",function(){
    $("#b14").toggle();
});

$(".a15").on("click",function(){
    $("#b15").toggle();
});

$(".a16").on("click",function(){
    $("#b16").toggle();
});

$(".a17").on("click",function(){
    $("#b17").toggle();
});

$(".a18").on("click",function(){
    $("#b18").toggle();
});

$(".a19").on("click",function(){
    $("#b19").toggle();
});

$(".a20").on("click",function(){
    $("#b20").toggle();
});

$(".a21").on("click",function(){
    $("#b21").toggle();
});

$(".a22").on("click",function(){
    $("#b22").toggle();
});

$(".a23").on("click",function(){
    $("#b23").toggle();
});

$(".a24").on("click",function(){
    $("#b24").toggle();
});

$(".a25").on("click",function(){
    $("#b25").toggle();
});

$(".a26").on("click",function(){
    $("#b26").toggle();
});

$(".a27").on("click",function(){
    $("#b27").toggle();
});

$(".a28").on("click",function(){
    $("#b28").toggle();
});

$(".a29").on("click",function(){
    $("#b29").toggle();
});

$(".a30").on("click",function(){
    $("#b30").toggle();
});

$(".a31").on("click",function(){
    $("#b31").toggle();
});

$(".a32").on("click",function(){
    $("#b32").toggle();
});

$(".a33").on("click",function(){
    $("#b33").toggle();
});

$(".a34").on("click",function(){
    $("#b34").toggle();
});

$(".a35").on("click",function(){
    $("#b35").toggle();
});

$(".a36").on("click",function(){
    $("#b36").toggle();
});

$(".a37").on("click",function(){
    $("#b37").toggle();
});

$(".a38").on("click",function(){
    $("#b38").toggle();
});

$(".a39").on("click",function(){
    $("#b39").toggle();
});

$(".a40").on("click",function(){
    $("#b40").toggle();
});

