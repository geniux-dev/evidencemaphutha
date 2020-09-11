// $(document).mouseup(function(e) {
//     var container = $('#menubar');
//     if (!container.is(e.target) && container.has(e.target).length === 0) {
//         document.getElementById('menubar').style.cssText="transform: translateX(-115%);";
//     }

// });

function view_tab(d){
    $('#profileTab').removeClass('active');
    $('#projectTab').removeClass('active');
    $('#cvTab').removeClass('active');
    if(d=="profile"){
        $('.contents-center').html('<div class="loader-p"><div class="ld ld-ring ld-spin"></div></div>');
        var delayInMilliseconds = 700;  
            setTimeout(function() {
            $('.contents-center').load('contents/profile.html');
        }, delayInMilliseconds);
    }
    if(d=="projects"){
        $('.contents-center').html('<div class="loader-p"><div class="ld ld-ring ld-spin"></div> </div>');
        var delayInMilliseconds = 700;  
            setTimeout(function() {
            $('.contents-center').load('contents/projects.html');
        }, delayInMilliseconds);
    }
    if(d=="cv"){
        $('.contents-center').html('<div class="loader-p"><div class="ld ld-ring ld-spin"></div> </div>');
        var delayInMilliseconds = 700;  
            setTimeout(function() {
            $('.contents-center').load('contents/cv.html');
        }, delayInMilliseconds);
    }
}

function menutoggle(){
    var menubar = document.getElementById('menubar');
    if(menubar.style.cssText=="transform: translateX(0%);" || menubar.style.cssText==""){
        menubar.style.cssText = "transform: translateX(-115%);"

    }else{
        menubar.style.cssText = "transform: translateX(0%);";
   
    }
}
$(document).ready(function(){
    view_tab('profile');
});
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.menu-btn').addClass('menu-bg');
    } else {
        $('.menu-btn').removeClass('menu-bg');
    }
}); 