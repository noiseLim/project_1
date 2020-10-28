import $ from 'jquery';

// const btn = $('#btn');

// console.log(btn);

$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);
    });

    $('<div><p>Hello</p></div>').appendTo('.list');

    const el = document.getElementsByClassName("list-item");

    $(el[1]).css('height', '100px');

    $("img:eq(1)")
    // .parent()
    .css("heigth", "10px")
    .fadeTo(0, 0.5)
    .addClass("divOwner");


    const heights = [];
 
    $("div").each(function(indx, element) {
        heights.push($(element).height());
    });
    console.log(heights);

});
