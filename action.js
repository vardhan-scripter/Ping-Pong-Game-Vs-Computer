var a = 220;
var c = 40;
var b = 5;
var d = 40;
var e = 40;
var f = 40;
var g = 400;
var h = 5;
var i = 0;
var j = 0;
var computer = 3;
var player = 3;
function start() {
    var canvas = document.getElementById('canvas');
    var can = canvas.getContext("2d");
    can.fillStyle = "black";
    can.fillRect(0, 0, 900, 500);
    can.fillStyle = "red";
    can.fillRect(1, 40, 15, 40);
    can.fillStyle = "red";
    can.fillRect(1, 0, 15, 40);
    can.fillStyle = "red";
    can.fillRect(885, e, 15, 40);
    can.fillStyle = "red";
    can.fillRect(885, j, 15, 40);
    can.beginPath();
    can.arc(a, g, 5, 0, 2 * Math.PI);
    can.fillStyle = "yellow";
    can.fill();
    can.fillStyle = "red";
    can.fillRect(450, 0, 1, 500);
    setInterval(function() {
        fun();
        fun1();
    }, 20);
    function fun1() {
        a = a + b;
        g = g - h;
        if (a == 20 && (Math.abs(d - g) <= 0 || Math.abs(d - g) <= 40)) {
            b = -b;
        } else if (a == 880 && (Math.abs(e - g) <= 0 || Math.abs(e - g) <= 40)) {
            b = -b;
        } else if (g == 0 || g == 500) {
            h = -h;
        } else {
            if (a == 890) {
                a = 450;
                g = 250;
                b = b;
                if (player > 0) {
                    player = player - 1;
                    document.getElementById('result').innerHTML = player;
                } else if (player == 0) {
                    document.getElementById('canvas').style.display = 'none';
                    $("#h3").show();
                    $("#h4").show();
                    $("#stop").hide();
                    document.getElementById('h4').innerHTML = "computer won the game";
                }
            }
            if (a == 0) {
                a = 450;
                g = 250;
                b = b;
            }
            if (g == 490) {
                autogear();
                h = -h;
            }
            if (g == 10) {
                auto();
                h = -h;
            }
        }
    }
}
function stop() {
    // body...
}
function fun() {
    j = e - 40;
    var canvas = document.getElementById('canvas');
    var can = canvas.getContext("2d");
    can.fillStyle = "black";
    can.fillRect(0, 0, 900, 500);
    can.fillStyle = "red";
    can.fillRect(1, d, 15, 40);
    can.fillStyle = "red";
    can.fillRect(1, i, 15, 40);
    can.fillStyle = "red";
    can.fillRect(885, e, 15, 40);
    can.fillStyle = "red";
    can.fillRect(885, j, 15, 40);
    can.beginPath();
    can.arc(a, g, 5, 0, 2 * Math.PI);
    can.fillStyle = "yellow";
    can.fill();
    can.fillStyle = "red";
    can.fillRect(450, 0, 1, 500);
}
function funned2() {
    if (e >= 0 && e <= 440) {
        e = e + f;
        fun();
    }
}
function funned3() {
    if (e > 40) {
        e = e - f;
        fun();
    }
}
function auto() {
    if (a < 500) {
        d = a;
        i = d - 40;
    }
}
function autogear() {
    if (a < 500) {
        d = g - a;
        i = d - 40;
    }
}
$(document).ready(function() {
    $("#stop").hide();
    $("#h3").hide();
    $(document).keydown(function(e) {
        if (e.keyCode == 38) {
            funned3();
        } else if (e.keyCode == 40) {
            funned2();
        }
    });
    $("#start").click(function() {
        $("#start").hide();
        document.getElementById('canvas').style.cssText = 'border: 2px solid seagreen;';
        $("#stop").show();
    });
    $("#stop").click(function() {
        $("#canvas").hide();
        $("#h3").show();
        $("#stop").hide();
        document.getElementById('h4').innerHTML = "match drawn";
    });
});