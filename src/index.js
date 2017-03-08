import shapeshift from './libs/grid';
import './libs/jquery-ui'
import { createRow, createTabs, createMarks } from './elements/row';

function load(callback){
    chrome.storage.local.get(null, callback)
}
function loadByKey(key){
    chrome.storage.local.get(key, function (result) {
        return result;
  });
}
function init(){
    createTabs();
    load(function (json){
            createMarks(json);
            dragNdrop();    
            createJson();           
            // createFromJson();
    });  
}
function createFromJson(){
    $.getJSON("index.json", function (json) {
        chrome.storage.local.set(json, function() {
            console.log('Settings saved');
            createTabs();
            createMarks(json);
            dragNdrop();            
            });
     }); 
}


function dragNdrop(){
     $(".container").shapeshift({
        selector: "div",
         minColumns: 3,
        colWidth: 200
    });
     $(".container").on( "ss-added", function(e) {
        chrome.storage.local.clear()
        chrome.storage.local.set(createJson(), function() {
            console.log('Settings saved');
        });
    });
}

function createJson() {
    let result = {};
    const groups = document.getElementsByClassName('group');
    for (var i = 0; i < groups.length; ++i) {
        const group = groups[i];
        const name = group.children[0].innerHTML;
        const marks = [];
        for (var j = 1; j < group.children.length; ++j) {
        const mark = {
                "title": group.children[j].childNodes[0].childNodes[1].innerHTML,
                "favIconUrl": group.children[j].childNodes[0].childNodes[0].src,
                "url": group.children[j].childNodes[0].href,
            }; 
        marks.push(mark);         
        }
        result[name] = marks;        
    }
    return result;
}

// RENDER
init();