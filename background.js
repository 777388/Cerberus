chrome.contextMenus.create({
    id: 'cerberus',
    title: 'cerberus',
    contexts: ['selection']
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
    if(info.menuItemId === 'cerberus'){
        var selection = info.selectionText;
        chrome.tabs.create({url: `data:text/plain,${selection}`});
    };
});