$(document).keydown(function (e) {
    if (e.key == "a") {
        var colors = ["green", "red", "yellow", "blue"];
        var row = []
        row.push(colors[Math.floor(Math.random() * 4)]);
        console.log(row)
        $("#" + row[0]).animate({ opacity: 0.5 }).animate({ opacity: 1 })
        var game_on = true;
        var counter = 0;
        while (game_on && counter<15) {
            for (var i = 0; i < row.length; i++) {
                var trigerred = false;
                while (!trigerred){
                    $(".btn").click(function (e) {
                        if ($(this).attr("id") == row[i]) {
                            //pass
                            alert("  2   ");
                        }
                        else {
                            game_on = false;
                        }
                        trigerred = e.eventFired;
                    });
                }
                
                if (game_on) {
                    continue;
                }
                else {
                    break;
                }
            }
            if (game_on) {
                var color = colors[Math.floor(Math.random() * 4)];
                row.push(color);
                console.log(color);
                console.log(counter);
                console.log(row)
                // $("#" + row[0]).animate({ opacity: 0.5 }).animate({ opacity: 1 })
                counter++;
            }
        }
    }
});