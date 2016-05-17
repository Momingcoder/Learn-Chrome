chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message == 'Hello World') {
        sendResponse('Hello from background.');
    }
});
