import shapeshift from './libs/grid';
import './libs/jquery-ui'
import { createRow, createTabs, createMarks, dragNdrop } from './elements/row';

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
    load(function (json) {

            createMarks(json);
            dragNdrop();
            createJson();
    });
}
export function createFromJson(){
    $.getJSON("index.json", function (json) {
        chrome.storage.local.set(json, function() {
            console.log('Settings saved');
            createTabs();
            createMarks(json);
            dragNdrop();
            });
     });
}




export function createJson() {
    let result = {};
    // const groups = document.getElementsByClassName('group');
    const groups = $('.group');
    console.log(groups);
    $.each( groups, function( key, group ) {
        const children = $(group).find('.child');
        const name = $(group).find('.controls h1').text();
        const marks = [];

        console.log('parent',group);
        console.log('childs',children);
        $.each(children, function(key, child){
             const mark = {
                "title": $(child).find('span').text(),
                "favIconUrl": $(child).find('img').attr('src'),
                "url": $(child).find('a').attr('href'),
            };
            marks.push(mark);
        });
        result[group.dataset.id] = {
                                name:name,
                                marks: marks
                            };
    });
    console.log(result);
    return result;
}


// RENDER
init();
