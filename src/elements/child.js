export default function createChild(css, obj) {
    const tabTag = $('<div>', { 'class': css });
    const wrapper = $('<a>', { 'target':'_blank', 'class': 'wrapper','href': obj.url  });
    wrapper.append($('<img>',
        {
            'src': obj.favIconUrl,
             'height':'30px',
             'width':'30px'

        }));
    wrapper.append($('<span contenteditable="true">'+obj.title+'</span>'));
    tabTag.append(wrapper);
    return tabTag;
}

