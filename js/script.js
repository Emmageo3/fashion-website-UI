/* time counter */
$(document).ready(function () {
    // Set the target date
    const targetDate = new Date("2025-01-01T00:00:00").getTime();

    function updateCounter() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            $("#days").text("00");
            $("#hours").text("00");
            $("#minutes").text("00");
            $("#seconds").text("00");
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        $("#days").text(days.toString().padStart(2, '0'));
        $("#hours").text(hours.toString().padStart(2, '0'));
        $("#minutes").text(minutes.toString().padStart(2, '0'));
        $("#seconds").text(seconds.toString().padStart(2, '0'));
    }

    // Update counter every second
    setInterval(updateCounter, 1000);
    updateCounter(); // Initial call
});

$(document).ready(function () {
    const $cards = $(".card");
    let currentSlide = 0;

    function updateSlider() {
        $cards.removeClass("active");
        $cards.eq(currentSlide).addClass("active");
    }

    // Next button functionality
    $("#next").on("click", function () {
        currentSlide = (currentSlide + 1) % $cards.length;
        updateSlider();
    });

    // Previous button functionality
    $("#prev").on("click", function () {
        currentSlide = (currentSlide - 1 + $cards.length) % $cards.length;
        updateSlider();
    });

    // Initialize slider
    updateSlider();
});

$(document).ready(function () {

    $(".tab").on("click", function () {
        const tabId = $(this).data("tab");

        $(".tab").removeClass("active");
        $(this).addClass("active");

        $(".tab-content").removeClass("active");
        $(`#${tabId}`).addClass("active");
    });
})

$(document).ready(function () {
    $(".menu-display").on("click", function () {
        $(".nav-mobile").toggleClass("show"); // Ajoute ou enlève la classe "show"
    });
});