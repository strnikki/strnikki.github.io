$('a[href*="#p-"]').on('click', function (e) {
    e.preventDefault()
  
    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
          800,
        'swing'
    )
});

$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})