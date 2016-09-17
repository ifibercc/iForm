chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request)
    for (var i = 0; i < request.length; i++) {
       var target = $('[name=' + request[i].name + ']');
       var tag = target[0].tagName || '';
       switch (tag) {
            case 'INPUT':
                switch (target[0].type) {
                    case 'text':
                        target.eq(0).val(request[i].value);
                        break;
                    case 'radio':
                        $('[name=' + request[i].name + '][value=' + request[i].value + ']').attr("checked", "true");
                        break;
                    case 'checkbox':
                        var values = (request[i].value).split(',');
                        for (var j = 0; j < values.length; j++) {
                            $('[name=' + request[i].name + '][value=' + values[j] + ']').attr("checked", "true");
                        }
                        break;
                    default:
                }
                break;
            case 'SELECT':
                target.eq(0).val(request[i].value);
                break;
            case 'TEXTAREA':
                $('[name=' + request[i].name + ']').text(request[i].value);
                break;
            default:

       }
    }
});
