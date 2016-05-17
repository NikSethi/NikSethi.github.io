var time;
var color;

$(document).ready(function() {

    (function update_time(){
        var dt = new Date();
        h = dt.getHours();
        m = dt.getMinutes();
        s = dt.getSeconds();
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }

        time = h + ":" + m + ":" + s;
        color = "#" + h + m + s;

        $("#clock").html(time);
        $("body").css("background-color", color);

        setTimeout(update_time, 1000);
    })();
});

