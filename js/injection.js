chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var selectors = request.selectors;
    var values = request.values;
    var i;
    var domObj;
    for (i = 0; i < selectors.length; i++) {
        domObj = $(selectors[i]);
        console.log(domObj)
        if (domObj) {
            domObj.val(values[i]);
        }
    }
});
