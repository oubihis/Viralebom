/* Ads */
/*------- ads-------*/
$(window).scroll(function() {
  if($(this).scrollTop() >= 50) {
    $('.ads-desktop').addClass('scrolled');
    $('.ads-mobile').addClass('scrolled');
  }
});
/*-------desktop ads-------*/

$(document).ready(function() {
    $(".hide").click(function(){
        $(".ads").hide();
    });
});
/* End ads*/

/* Start Maximum amount of characters for post cards */
var maxAmountCharacters = $('.max-char');
maxAmountCharacters.text(maxAmountCharacters.text().substring(0,55) + '...')
/* End Maximum amount of characters for post cards */


