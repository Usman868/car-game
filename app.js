var car_gif = document.getElementById("car");
var car = document.getElementById("car-png");
var startbtn = document.getElementById("start");
var stopbtn = document.getElementById("stop");

// signal lights
var redlight = document.getElementById("red")
var yellowLight = document.getElementById("yellow")
var greenLight = document.getElementById("green")

var lights = [redlight, yellowLight, greenLight]
var signalColour = ["red", "yellow", "green"];

// values
var move = false;
var value = 20;
var abc;
var num = 0

lights[0].style.backgroundColor = "red"

function start() {
    car.style.display = "none"
    car_gif.style.display = "block"
    move = true
    if (move && lights[0].style.backgroundColor == "red") {
        stop()
        Swal.fire({
            title: "🚨 Signal is OFF! You tried to move when signal was not open.\nPlease wait for the signal to turn ON.",
            showClass: {
                popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
            },
            hideClass: {
                popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
            }
        });
        return
    } else {
        abc = setInterval(function () {
            value += 1
            car_gif.style.left = value + "px"
            car.style.left = value + "px"
            if (value == 750) {
                value = 20
                car.style.left = value + "px"
                car_gif.style.left = value + "px"
                stop()
            }
        }, 8)
    }
    startbtn.style.display = "none"
    stopbtn.style.display = "block"

}

// stop function
function stop() {
    clearInterval(abc)
    stopbtn.style.display = "none"
    startbtn.style.display = "block"
    car.style.display = "block"
    car_gif.style.display = "none"
    move = false;
}

// checking funvtion
setInterval(function () {
    if (move && lights[0].style.backgroundColor == "red") {
        stop()
        // value = 20
        Swal.fire({
            title: "🚨 Signal is OFF! You tried to move when signal was not open.\nPlease wait for the signal to turn ON.",
            showClass: {
                popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
            },
            hideClass: {
                popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
            }
        });
    }
}, 2)

// signal function
var sec = 3000
function signal() {
    for (var i = 0; i < lights.length; i++) {
        lights[i].style.backgroundColor = "#555";
    }

    lights[num].style.backgroundColor = signalColour[num];

    if (signalColour[num] === "yellow") {
        sec = 500;
    } else {
        sec = 3000;
    }
    num++;
    if (num === 3) num = 0;

    //  for signal loap
    setTimeout(signal, sec);
}

//  signal start
signal();

document.addEventListener("keydown", function (event) {
    if (lights[0].style.backgroundColor == "red") {
        stop();
        Swal.fire({
            title: "🚨 Signal is OFF! You tried to move when signal was not open.\nPlease wait for the signal to turn ON.",
            showClass: {
                popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
            },
            hideClass: {
                popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
            }
        });
        return;
    }

    car.style.display = "none";
    car_gif.style.display = "block";

    var distance = 5;

    if (event.key === "ArrowRight") {
        value += distance;
    }

    if (value > 750) { value = 20 };
    car_gif.style.left = value + "px";
    car.style.left = value + "px";
});




