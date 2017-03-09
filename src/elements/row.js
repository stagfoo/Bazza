import createChild from './child';
import { createJson } from '../index';


export function dragNdrop(){
     $("main .container").shapeshift({
        selector: "div",
         minColumns: 3,
        colWidth: 300
     });
    $("aside .tabs").shapeshift({
        selector: "div",
        minColumns: 1,
         maxColumns: 1,
        colWidth: 300
    });
     $(".container").on( "ss-added", function(e) {
        chrome.storage.local.clear();
        chrome.storage.local.set(createJson(), function() {
            console.log('Settings saved');
        });
    });
}

export function createRow(extraClass, type){
    const container =  $("<div>", { "class": `container ${extraClass}` });
    if (type === true){
        return container
    } else {
        container.append($("<h1 contenteditable='true'>untitled</h1>"))
        $("main").append(container);
    }
}
$('#createRow').on('click', function () {
    createRow('group', false);
    dragNdrop();
});

export function createTabs(){
    chrome.tabs.query({
        lastFocusedWindow: true     // In the current window
        }, function(tabs) {
            const container = createRow('tabs',true);

            tabs.map(function(tab, index) {
                const tabTag = createChild('child tab', tab);
                console.log(tab);
                container.append(tabTag)
            });

            $("aside").prepend(container);
        });
}

export function createMarks(json){
    // load(function (json) {
    console.log(json);
        Object.keys(json).map(function(key, index) {
            var container = createRow('group',true);
                if (json[key].length > 0) {
                    container.append($("<h1 contenteditable='true'>"+key+"</h1>"))

                    json[key].map(function (data, index) {
                        const child = createChild('child',data);
                        container.append(child);
                    });
                }
            $("main").append(container);
        });
    // });

}