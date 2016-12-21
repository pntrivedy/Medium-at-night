// window.addEventListener("load", function()
// {
//
// var classd = document.getElementsByClassName('u-textColorDark')[0];
//
// classd.style.backgroundColor =    'white';
//
// console.log(classd);
// }

$(window).load(function(){

$test = $('.u-textColorDark').removeClass('u-textColorDark');

$test1 = $('.u-textColorDarkest').removeClass('u-textColorDarkest');

$test2 = $('.u-textColorNormal').removeClass('u-textColorNormal');

$time = $('time').removeClass('u-textColorNormal');

// $(function () {
//     $(document).delay(3000);
//     $foot = $('.u-backgroundGrayLightest').removeClass('u-backgroundGrayLightest');
// });

$('.streamItem div').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
  alert('hi');
    $foot = $('.u-backgroundGrayLightest').removeClass('u-backgroundGrayLightest');
});

});
