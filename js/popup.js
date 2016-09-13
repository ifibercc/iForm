$('#add').on('click', function() {
    var el = '<div class="row">' + '<div class="col-xs-6">' + '<div class="form-group">' + '<input type="text" class="form-control input-sm iform-selector" placeholder="selector">' + '</div>' + '</div>' + '<div class="col-xs-6">' + '<div class="form-group">' + '<input type="text" class="form-control input-sm iform-value" placeholder="value">' + '</div>' + '</div>' + '</div>';
    $(el).insertAfter('.row:last');
});



$('#submit').on('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var selectors= [];
        var values = [];
        var selectorObj = document.getElementsByClassName('iform-selector');
        var valueObj = document.getElementsByClassName('iform-value');
        var i;
        for (i = 0; i < selectorObj.length; i++) {
            if (selectorObj[i].value !== "") {
                selectors.push(selectorObj[i].value);
                values.push(valueObj[i].value);
            }
        }
        chrome.tabs.sendMessage(tabs[0].id, { selectors: selectors, values: values }, function(response) {
        });
    });
});
