/**
 * Created by Zengfan on 2017/10/14.
 */
window.onload = function () {
    var container = document.getElementById('carousel-module');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var timer;
    buttons[0].onclick = function () {
        list.style.marginLeft = "0px"
    };
    buttons[1].onclick = function () {
        list.style.marginLeft = "-440px"
    };
    buttons[2].onclick = function () {
        list.style.marginLeft = "-880px"
    };
    buttons[3].onclick = function () {
        list.style.marginLeft = "-1320px"
    };
    buttons[4].onclick = function () {
        list.style.marginLeft = "-1760px"
    };
    function play() {
    timer = setInterval(function () {
                list.style.marginLeft = parseInt(list.style.marginLeft)-440+'px';
                if(parseInt(list.style.marginLeft)<-1760){
                    list.style.marginLeft = '0px'
                }
    },3000);


    }
    function stop() {
        clearInterval(timer)
    }
    container.onmouseover=stop;
    container.onmouseout=play;
    play()
};