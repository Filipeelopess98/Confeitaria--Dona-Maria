const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})


document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll('.stars');

    stars.forEach(star => {
        const rating = parseInt(star.getAttribute('data-rating'));

        star.style.width = `${rating * 20}%`;
    });
});

let currentReviewIndex = 0;
const reviews = document.querySelectorAll('.customer-reviews .review');
const totalReviews = reviews.length;


function showNextReview() {
    reviews[currentReviewIndex].classList.remove('active');
    currentReviewIndex = (currentReviewIndex + 1) % totalReviews;
    reviews[currentReviewIndex].classList.add('active');
}


setInterval(showNextReview, 1500);


$(document).ready(function () {

    $('.nav-menu a').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });


    $('.nav-menu li').on('click', function (e) {
        e.preventDefault();
        var target = $(this).find('a').attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});
