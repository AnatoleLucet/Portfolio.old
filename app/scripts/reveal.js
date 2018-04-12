// function isScrolledIntoView(elem)
// {
//     var centerY = Math.max(0,((jQuery(window).height()-jQuery(elem).outerHeight()))
//     + jQuery(window).scrollTop());
//
//     var elementTop = jQuery(elem).offset().top;
//     var elementBottom = elementTop + jQuery(elem).height();
//
//     return elementTop <= centerY && elementBottom >= centerY;
// }
//
// jQuery(window).on("scroll resize", function() {
//     jQuery(".reveal").each(function(index, element) {
//         if (isScrolledIntoView(element)) {
//             jQuery(element).animate({opacity: 1.0}, 500);
//             console.log('show');
//         }
//     });
// });

var reveal = $('.reveal');
//reveal.css('margin', '10px');
var resulte = window.getComputedStyle(reveal[0], null).getPropertyValue('margin-left');

console.log(resulte);
