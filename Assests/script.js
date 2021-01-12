function aboutPage(){
    $('.portfolio-section').hide();
    $('.contact-section').hide();
    $('.about-section').show();
} 

function portfolioPage(){
    $('.contact-section').hide();
    $('.about-section').hide();
    $('.portfolio-section').show();
}

function contactPage(){
    $('.about-section').hide();
    $('.portfolio-section').hide();
    $('.contact-section').show();
}

$('#about-me').click(function(){
    aboutPage();
})

$('#portfolio').click(function(){
    portfolioPage();
})

$('#contact').click(function(){
    contactPage();
})

aboutPage(); 

$(document).ready(function(){
    $('.slider').slider();
  });
