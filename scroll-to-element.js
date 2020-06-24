/*
Title: How to Smoothly Scroll to a Specific Element using jQuery
Author: Daddy Design
Date:
Code version:
Availability:
Location: https://www.daddydesign.com/wordpress/how-to-smoothly-scroll-to-a-specific-element-using-jquery/
*/
jQuery('.scroll_to').click(function(e){
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
    e.preventDefault();
});
