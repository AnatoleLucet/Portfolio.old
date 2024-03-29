jQuery.event.special.scrolldelta = {
    delegateType: "scroll",
    bindType: "scroll",
    handle: function (event) {
        var handleObj = event.handleObj;
        var targetData = jQuery.data(event.target);
        var ret = null;
        var elem = event.target;
        var isDoc = elem === document;
        var oldTop = targetData.top || 0;
        targetData.top = isDoc ? elem.documentElement.scrollTop + elem.body.scrollTop : elem.scrollTop;
        targetData.left = isDoc ? elem.documentElement.scrollLeft + elem.body.scrollLeft : elem.scrollLeft;
        event.scrollTopDelta = targetData.top - oldTop;
        event.scrollTop = targetData.top;
        event.type = handleObj.origType;
        ret = handleObj.handler.apply(this, arguments);
        event.type = handleObj.type;
        return ret;
    }
};

$(window).on('scrolldelta', function (e) {

    var top = e.scrollTop;
    var topDelta = e.scrollTopDelta;

    //console.log(top.toString() + 'px (' + (topDelta >= 0 ? '+' : '') + topDelta.toString() + 'px)');


    /*
     * Character Animation
     */

    // If scroll top / down : animate the character
    if (0 <= topDelta) {
        $('.character').addClass('ch-run').removeClass('mirror');
    } else if (0 >= topDelta) {
        $('.character').addClass('ch-run').addClass('mirror');
    } else {
        $('.character').removeClass('ch-run');
    }

    // If no scroll : do not animate the character
    $(window).scroll(_.debounce(function(){
        $('.character').removeClass('ch-run');
    }, 150));
});
