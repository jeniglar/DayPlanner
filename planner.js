$(document).ready(function () {

    var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

    updatePage();
    hourColorblock();

    $(".saveBtn").on("click", function () {
        var task = $(this).siblings(".description").val();
        var hr = $(this).siblings(".description").attr("id");
        saveEvent(hr, task);
        updatePage();
    });

    function updatePage() {
        for (var i = 0; i < hours.length; i++) {
            var event = localStorage.getItem(hours[i]);
            $("#" + hours[i]).val(event);
        }
    };

    function saveEvent(hours, event) {
        localStorage.setItem(hours, event);
    };

    function hourColorblock() {
        var currentTime = moment().hours();
        $(".description").each(function () {
            var timeblock = JSON.parse($(this).attr("id"));
            if (currentTime > timeblock) {
                $(this).addClass("past");
            } else if (currentTime < timeblock) {
                $(this).addClass("future");
            } else {
                $(this).addClass("present");
            };
        });
    };

});