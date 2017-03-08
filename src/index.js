import shapeshift from './grid';
import './jquery-ui'

function createChild(css, obj) {
    const tabTag = $("<div>", { "class": css });
    const wrapper = $("<a>", { "class": "wrapper","href": obj.url  });
    wrapper.append($("<img>",
        {
            "src": obj.favIconUrl,
             "height":"30px",
             "width":"30px"

        }));
    wrapper.append($("<span contenteditable='true'>"+obj.title+"</span>"));
    tabTag.append(wrapper);
    return tabTag;
}



function createRow(extraClass){
    return $("<div>", { "class": `container ${extraClass}` });
}


function createTabs(){
// Do NOT forget that the method is ASYNCHRONOUS
chrome.tabs.query({
    lastFocusedWindow: true     // In the current window
    }, function(tabs) {
        const container = createRow('tabs');

        tabs.map(function(tab, index) {
            const tabTag = createChild('child tab', tab);
            container.append(tabTag)
        });

        $("main").append(container);
    });
}
createTabs();

$.getJSON("index.json", function (json) {
    Object.keys(json).map(function(key, index) {
        var container = createRow('group');
        if (json[key].length > 0) {
            container.append($("<h1>"+key+"</h1>"))

            json[key].map(function (data, index) {
                const child = createChild('child',data);
                container.append(child);
            });
        }
        $("main").append(container);

    });
     $(".container").shapeshift({
        selector: "div",
         minColumns: 3,
        colWidth: 200
    });
});

function createJson() {
    let result = {};
    const groups = document.getElementsByClassName('group');
    for (var i = 0; i < groups.length; ++i) {
        const group = groups[i];
        const name = group.children[0].innerHTML;
        console.log(group.children[0].innerHTML);
        result[name] = {};
        for (var j = 1; j < group.children.length; ++j) {
            console.log(group.children[j].childNodes[0].href);
        }
    }
    console.log(result);
}
createJson();

function save(object) {
    chrome.storage.local.set(object);
}
function load(){
    chrome.storage.local.get(null, function (result) {
        return result;
  });
}
function loadByKey(key){
    chrome.storage.local.get(key, function (result) {
        return result;
  });
}