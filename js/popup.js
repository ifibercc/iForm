// bind new one button click event
$('#add').on('click', function() {
    var el = '<div class="row">' + '<div class="col-xs-6">' + '<div class="form-group">' + '<input type="text" class="form-control input-sm iform-name" placeholder="name">' + '</div>' + '</div>' + '<div class="col-xs-6">' + '<div class="form-group">' + '<input type="text" class="form-control input-sm iform-value" placeholder="value">' + '</div>' + '</div>' + '</div>';
    $(el).insertAfter('.row:last');
});

// bind submit button click event
$('#submit').on('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var rows = $('.row');
        var data = [];
        var subName;
        var subValue;
        for (var i = 0; i < rows.length; i++) {
            subName = rows.eq(i).find('.iform-name').val();
            subValue = rows.eq(i).find('.iform-value').val();
            if (subName !== '' && subValue !== '') {
                data.push({
                    name: subName,
                    value: subValue
                })
            }

        }

        chrome.tabs.sendMessage(tabs[0].id, data, function(response) {});
    });
});
