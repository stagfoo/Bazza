import createChild from './child';

export function createRow(extraClass){
    return $("<div>", { "class": `container ${extraClass}` });
}

export function createTabs(){
    chrome.tabs.query({
        lastFocusedWindow: true     // In the current window
        }, function(tabs) {
            const container = createRow('tabs');

            tabs.map(function(tab, index) {
                const tabTag = createChild('child tab', tab);
                console.log(tab);
                container.append(tabTag)
            });

            $("main").prepend(container);
        });
}

export function createMarks(json){
    // load(function (json) {
        Object.keys(json).map(function(key, index) {
            var container = createRow('group');
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