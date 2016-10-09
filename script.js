$(document).ready(function() {
    $("html")
        .on("click", ".js-open-modal", function() {
            var className = "." + $(this).attr("href");

            $(className).addClass("modal_active");

            return false;
        })
        .on("click", ".modal-close", function() {
            $(this).closest(".modal_active").removeClass("modal_active");

            return false;
        });
});