var compute = 0;
var clickAm = 1;
var roboClickAm = 0;
var cost1 = 100;
var cost2 = 100000;
let updatesPerSecond = 5;
let autoInterval;


function increase() {
    compute+=clickAm;
}

setInterval(() => {
    if (compute >= cost1) {
        $("#upgrade1").attr("disabled", false);
        $("#upgrade1").css("background-color", "lightblue");
        $("#upgrade1").css("cursor", "pointer");
    } else {
        $("#upgrade1").attr("disabled", true);
        $("#upgrade1").css("background-color", "grey");
    }

    if (compute >= cost2) {
        $("#upgrade2").attr("disabled", false);
        $("#upgrade2").css("background-color", "lightblue");
        $("#upgrade2").css("cursor", "pointer");
    } else {
        $("#upgrade2").attr("disabled", true);
        $("#upgrade2").css("background-color", "grey");
    }
    $("#clickNum").html(compute);
    $("#cost1").html(cost1);
    $("#cost2").html(cost2);
}, 10);

function startAuto() {
  // clear old interval if already running
  clearInterval(autoInterval);

  // calculate how much to add per tick
  let interval = 1000 / updatesPerSecond;

  autoInterval = setInterval(() => {
    let increment = roboClickAm / updatesPerSecond;
    compute += increment;
    document.querySelector(".odometer").innerHTML = Math.floor(compute);
  }, interval);
}

// start it
startAuto();

// whenever roboClickAm changes, just restart to use new value
function updateRoboClickAm(newAmount) {
  roboClickAm = newAmount;
  startAuto(); // restarts with updated speed
}


function inClickAm() {
    compute-=cost1;
    cost1 = Math.round(cost1*1.25);
    clickAm+=100;
    $("#upgrade1").css("background-color", "blue");
    setTimeout(() => {
        $("#upgrade1").css("background-color", "lightblue");
    }, 10);
}

function roboClick1() {
    compute-=cost2;
    cost2 = Math.round(cost2*1.25);
    updateRoboClickAm(roboClickAm + 100);
    $("#upgrade2").css("background-color", "blue");
    setTimeout(() => {
        $("#upgrade2").css("background-color", "lightblue");
    }, 10);
}

function hide1() {
    $("#info1").attr("hidden", true);
}

function show1() {
    $("#info1").attr("hidden", false);
}

function hide2() {
    $("#info2").attr("hidden", true);
}

function show2() {
    $("#info2").attr("hidden", false);
}