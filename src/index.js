
$.getJSON("index.json", function (json) {
    console.log(json); // this will show the info it in firebug console
    Object.keys(json).map(function(key, index) {
        // json[key]
        $("main").append('<div class="container"></div>');
    });
     $(".container").shapeshift({
         minColumns: 3,
        colWidth: 80
    });
});