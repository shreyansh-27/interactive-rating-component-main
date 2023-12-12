var numbers = document.querySelectorAll(".num").length;
var ratingBox = document.getElementById("rating-box");
var thanksBox = document.getElementById("thanks-box");
var num = 0;

for(var i = 0; i<numbers; i++){
    document.querySelectorAll(".num")[i].addEventListener("click", function(){
        var btnInnerHtml = this.innerHTML;
        num = btnInnerHtml;
        changeColor(btnInnerHtml); 
    });
}

function changeColor(number){
    for(var i = 0; i < numbers; i++){
        if(document.querySelectorAll(".num")[i].classList.contains("rate-color")){
            document.querySelectorAll(".num")[i].classList.remove("rate-color");
        }
    }
    
    var num = document.getElementById(number);
    num.classList.add("rate-color");
}

document.getElementById("submit-btn").addEventListener("click", function(){
    document.getElementById("rating").innerText = "You selected "+num+ " out of 5";
    ratingBox.classList.add("hidden");
    thanksBox.classList.remove("hidden");
});