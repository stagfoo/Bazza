import shapeshift from './grid';
import './jquery-ui'
$.ajax({
  url: 'https://www.google.co.jp/?gfe_rd=cr&ei=IWK-WJuaCoX-8wfXn7DACA&gws_rd=ssl',
  async: true,
  success: function(data) {
    var matches = data.match(/<title>(.*?)<\/title>/);
    alert(matches[0]);
  }
});

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