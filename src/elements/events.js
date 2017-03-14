import { createJson } from 'index';
import { createRow } from 'elements/row';
console.log('test')
export function controlsBinding(){
    $('.delete-row').on('click', function () {
        const id = $(this).data('id');
        $(`#${id}`).remove();
        saveDom();
    }); 
    $('.controls h1').focusout(function() {
        saveDom();
    })
     $('.group .child span').focusout(function() {
        saveDom();
    })
}
export function globalControls(){
        $('#createRow').on('click', function () {
        const container = createRow('group',false);
        $('main').append(container);
        controlsBinding();
        dragNdrop();
    });
}
export function dragNdrop(){
    // Groups
     $('main .container').shapeshift({
        selector: 'div',
        minColumns: 3,
        colWidth: 235,
        align: 'left',
     });
     // Tabs
    $('aside .tabs').shapeshift({
        selector: 'div',
        minColumns: 1,
         maxColumns: 1,
        colWidth: 300
    });
     $('.container').on( 'ss-added', function(e) {
        chrome.storage.local.clear();
        chrome.storage.local.set(createJson(), function() {
            console.info('Settings saved');
        });
    });
}
export function saveDom(){
    chrome.storage.local.clear();
    chrome.storage.local.set(createJson(), function() {
            console.info('Settings saved');
    });
}