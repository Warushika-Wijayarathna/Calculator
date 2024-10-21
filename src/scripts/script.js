var cal_view = document.getElementById("cal-view");
var cal_key = document.querySelectorAll('.cal-key');

for(item of cal_key){
    item.addEventListener('click', (e) => {
        key_text= e.target.innerText;
        cal_view.value += key_text;
    })
}

function sin (){
    cal_view.value = Math.sin(cal_view.value);
}

function cos (){
    cal_view.value = Math.cos(cal_view.value);
}

function pow (){
    cal_view.value = Math.pow(cal_view.value,3);
}

function sqrt (){
    cal_view.value = Math.sqrt(cal_view.value,2);
}
function log (){
    cal_view.value = Math.log(cal_view.value);
}
function pi (){
    cal_view.value = 3.14159265359;
}

function e (){
    cal_view.value = 2.71828182846;
}

function factorial (){
    var num = cal_view.value;
    var result = 1;
    for (var i = 1; i <= num; i++){
        result *= i;
    }
    cal_view.value = result;
}

function backspace (){
    cal_view.value = cal_view.value.substring(0, cal_view.value.length - 1);
}