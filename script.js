var clicks = 0;
var clickAm = 1;
var disable1 = true;
function increase() {
    clicks+=clickAm;
}

setInterval(() => {
    if (clicks >= 100) {
        disable1 = false;
    } else {
        disable1 = true;
    }
    $("#clickNum").html(clicks);
}, 10);

$("#upgrade1").on("click", function () {
    if(disable1) return;
    clickAm+=100;
    $("#upgrade1").css("background-color", "blue");
    setTimeout(() => {
        $("#upgrade1").css("background-color", "lightblue");
    }, 10);
})