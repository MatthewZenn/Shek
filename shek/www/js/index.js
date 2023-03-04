var x = 0;
var y = 0;

var moneys = "10.00";
var names = "Steve Erkel";

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}

document.getElementById('menu').addEventListener('click', function() {
    if(x == 0) {
        document.getElementById('list').style.display = 'block';
        x=1;
    }
    else {
        document.getElementById('list').style.display = 'none';
        x=0;
    }
});

document.getElementById('S').addEventListener('click', function() {
    document.getElementById('shek').style.display = 'block';
    document.getElementById('paypal').style.display = 'none';
    document.getElementById('zelle').style.display = 'none';
    document.getElementById('cashapp').style.display = 'none';
});

document.getElementById('P').addEventListener('click', function() {
    document.getElementById('shek').style.display = 'none';
    document.getElementById('paypal').style.display = 'block';
    document.getElementById('zelle').style.display = 'none';
    document.getElementById('cashapp').style.display = 'none';
});

document.getElementById('Z').addEventListener('click', function() {
    document.getElementById('shek').style.display = 'none';
    document.getElementById('paypal').style.display = 'none';
    document.getElementById('zelle').style.display = 'block';
    document.getElementById('cashapp').style.display = 'none';
});

document.getElementById('C').addEventListener('click', function() {
    document.getElementById('shek').style.display = 'none';
    document.getElementById('paypal').style.display = 'none';
    document.getElementById('zelle').style.display = 'none';
    document.getElementById('cashapp').style.display = 'block';
});

document.getElementById('circle').addEventListener('click', function() {
    var colors = ['rgb(0, 172, 7)', 'rgb(128, 128, 128)', 'rgb(255, 155, 0)', 'rgb(255, 0, 44)', 'rgb(188, 0, 255)', 'rgb(0, 3, 106)'];
    var color = colors[Math.floor(Math.random()*colors.length)];
    document.getElementById('circle').style.backgroundColor = color;
});

document.getElementById('circle2').addEventListener('click', function() {
    if(y == 0) {
        document.getElementById('box').style.display = 'block';
        y=1;
    }
    else {
        document.getElementById('box').style.display = 'none';
        y=0;
    }
});

document.getElementById('message').addEventListener('click', function() {
    moneys = document.getElementById('money').value;
    names = document.getElementById('name').value;
    document.getElementById('message').innerHTML = "You Sent $"+moneys+" to "+names;
});