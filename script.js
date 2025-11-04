var clicks = 0;
var clickAm = 1;
var autoClickAm = 0;
var cost1 = 100;
var cost2 = 100000;
function increase() {
    clicks+=clickAm;
}

setInterval(() => {
    if (clicks >= cost1) {
        $("#upgrade1").attr("disabled", false);
        $("#upgrade1").css("background-color", "lightblue");
        $("#upgrade1").css("cursor", "pointer");
    } else {
        $("#upgrade1").attr("disabled", true);
        $("#upgrade1").css("background-color", "grey");
    }

    if (clicks >= cost2) {
        $("#upgrade2").attr("disabled", false);
        $("#upgrade2").css("background-color", "lightblue");
        $("#upgrade2").css("cursor", "pointer");
    } else {
        $("#upgrade2").attr("disabled", true);
        $("#upgrade2").css("background-color", "grey");
    }
    $("#clickNum").html(clicks);
    $("#cost1").html(cost1);
    $("#cost2").html(cost2);
}, 10);

setInterval(() => {
    clicks+=autoClickAm;
}, 1000);

function inClickAm() {
    clicks-=cost1;
    cost1 = Math.round(cost1*1.25);
    clickAm+=100;
    $("#upgrade1").css("background-color", "blue");
    setTimeout(() => {
        $("#upgrade1").css("background-color", "lightblue");
    }, 10);
}

function autoClick1() {
    clicks-=cost2;
    cost2 = Math.round(cost2*1.25);
    autoClickAm+=100;
    $("#upgrade2").css("background-color", "blue");
    setTimeout(() => {
        $("#upgrade2").css("background-color", "lightblue");
    }, 10);
}