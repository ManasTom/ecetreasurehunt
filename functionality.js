function ip1() {
    var input1 = document.getElementById("ipanswer1").value;

    if(input1 == "QWE"||input1 == "RRT"){
        window.location.href = "level1.html"
    }
    else{
        document.getElementById('errormessage').innerHTML = 'Invallid code, please try again..';
    }
}

function ipl1() {
    var inputl1 = document.getElementById("ipanswerl1").value;

    if(inputl1 == "code1"){
        window.location.href = "level2.html"
    }
    else{
        document.getElementById('errormessage').innerHTML = ' Wrong passcode, please try again..';
    }
}

function ipl2() {
    var inputl2 = document.getElementById("ipanswerl2").value;

    if(inputl2 == "code2"){
        window.location.href = "level3.html"
    }
    else{
        document.getElementById('errormessage').innerHTML = ' Wrong passcode, please try again..';
    }
}

function ipl3() {
    var inputl3 = document.getElementById("ipanswerl3").value;

    if(inputl3 == "code3"){
        window.location.href = "level4.html"
    }
    else{
        document.getElementById('errormessage').innerHTML = ' Wrong passcode, please try again..';
    }
}

function ipl4() {
    var inputl4 = document.getElementById("ipanswerl4").value;

    if(inputl4 == "code4"){
        window.location.href = "level5.html"
    }
    else{
        document.getElementById('errormessage').innerHTML = ' Wrong passcode, please try again..';
    }
}

function ipl5() {
    var inputl5 = document.getElementById("ipanswerl5").value;

    if(inputl5 == "code5"){
        window.location.href = "level6.html"
    }
    else{
        document.getElementById('errormessage').innerHTML = ' Wrong passcode, please try again..';
    }
}

function ipl6() {
    var inputl6 = document.getElementById("ipanswerl6").value;

    if(inputl6 == "code6"){
        window.location.href = "level7.html"
    }
    else{
        document.getElementById('errormessage').innerHTML = ' Wrong passcode, please try again..';
    }
}

function ipl7() {
    var inputl7 = document.getElementById("ipanswerl7").value;

    if(inputl7 == "code7"){
        window.location.href = "finish.html"
    }
    else{
        document.getElementById('errormessage').innerHTML = ' Wrong passcode, please try again..';
    }
}