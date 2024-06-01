$(document).ready(function() {
    let index = 0;

    function showSlide(n) {
        const $slides = $('.slides');
        const totalSlides = $slides.find('img').length;
        index = (n + totalSlides) % totalSlides;
        $slides.css('transform', 'translateX(' + (-index * 100) + '%)');
    }

    $('#prev').click(function(event) {
        event.preventDefault();
        showSlide(index - 1);
    });

    $('#next').click(function(event) {
        event.preventDefault();
        showSlide(index + 1);
    });

    showSlide(index);

    $('.slides img').click(function() {
        const src = $(this).attr('src');
        $('#fullscreenImg').attr('src', src);
        $('#fullscreen').fadeIn();
    });

    $('#close').click(function(event) {
        event.preventDefault();
        $('#fullscreen').fadeOut();
    });
});