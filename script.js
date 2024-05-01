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

document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelectorAll('.review');
    let currentReviewIndex = 0;

    function showReview(index) {
        reviews.forEach(review => {
            review.style.display = 'none';
        });
        reviews[index].style.display = 'block';
    }

    function changeReview(direction) {
        currentReviewIndex += direction;
        if (currentReviewIndex < 0) {
            currentReviewIndex = reviews.length - 1;
        } else if (currentReviewIndex >= reviews.length) {
            currentReviewIndex = 0;
        }
        showReview(currentReviewIndex);
    }

    showReview(currentReviewIndex);

    window.changeReview = changeReview;
});

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
