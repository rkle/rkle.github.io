/*global $ */

$(function () {
    'use strict';
    $('.info-list li').click(function () {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info-content p').hide();
        $($(this).attr('data-class')).fadeIn();

    });
    $('.nav-toggle').click(function(){
    	$('.navbar ul').toggle();
    	$(this).toggleClass("rotate");
   	
    });
});



