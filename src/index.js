import shapeshift from './grid';
import './jquery-ui'

$.getJSON("index.json", function (json) {
    console.log(json); // this will show the info it in firebug console
    Object.keys(json).map(function(key, index) {
        // json[key]
        var container = $("<div>", { "class": "container" });
        if (json[key].length > 0) {
            json[key].map(function (key, index) {
                container.append($("<div>", { "class": "child" }))
            });
        }
        $("main").append(container);

    });
     $(".container").shapeshift({
         minColumns: 3,
        colWidth: 80
    });
});