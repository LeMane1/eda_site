/*(function button_up(){
    const button_up = document.querySelector('.button_up');
    window.onscroll = () =>{
        if (window.pageYOffset < 200){
            button_up.classList.add('button_up_dis');
        } else {
            button_up.classList.remove('button_up_dis');
        }
    }
}()) */

(function header_border(){
    const header = document.querySelector('.header');
    window.onscroll = () =>{
        if (window.pageYOffset > 50){
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    }
}()) 

arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
  };

  window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
  });



  var tab; // заголовок вкладки
  var tabContent; // блок содержащий контент вкладки
   
  window.onload=function() {
      tabContent=document.getElementsByClassName('tabContent');
      tab=document.getElementsByClassName('tab');
      hideTabsContent(1);
  }

  function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
}}}}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}


function cookie_ac(){
    const section = document.querySelector('.accept_cookie_block');
    section.classList.add('accept_cookie_block_disable');
    /*alert("Hello");*/
      
}

function cookie_link(){
    document.location.href = "service.html";
}
















