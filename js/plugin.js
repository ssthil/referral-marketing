
jQuery.fn.snsShare = function(message, url) {

    var getAtagElement, makeMouseClickEvent, types;

    /**
     * Get ths a tag singleton
     * @returns {HTMLElement}
     */
    getAtagElement = function () {
        var element = document.getElementById('share-a-tag');
        if (element === null) {
            element = document.createElement('a');
            element.style = "display: none;";
            element.id = 'share-a-tag';
            //element.target = "_blank";
            //element.onclick = window.open('','mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
            document.getElementsByTagName('body')[0].appendChild(element);
        }
        return element;
    };

    /**
     * Create a mouse click event
     * @returns {Event}
     */
    makeMouseClickEvent = function () {
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        return clickEvent;
    };

    mouseClickEvent = function () {
        
        window.open(this.href,'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
 
    };
    /**
     * Implement SNS types
     * @type {string[]}
     */
    types = ['facebook', 'google+', 'line', 'twitter', 'whatsapp', 'mailto'];

    // fix URL
    if (typeof(url) === 'undefined') {
        url = window.location;
    }

    return this.each(function () {
        jQuery(this).click(function () {
            var element, snsType = jQuery(this).attr('data-sns'), protocol;
            if (typeof(snsType) === 'string' && jQuery.inArray(snsType, types) !== -1) {
                if (typeof(message) === 'undefined') {
                    message = window.location;
                }
                protocol = location.protocol;
                var url = "https://survey.emailappsuat.emea.citi.com/connectweb/demo/invite.html";
                switch (snsType) {
                    case 'facebook':
                        element = getAtagElement();

                        var href = element.href = protocol + '//www.facebook.com/sharer.php?u=' + url + '&t=' + encodeURIComponent(message);
                        //var href = element.href = 'fb://sharer.php?u=' + url + '&t=' + encodeURIComponent(message);
                        //var href = element.href = 'www.deeplink.me//facebook.com/sharer.php?u=' + url + '&t=' + encodeURIComponent(message);
                        element.onclick = window.open(href,'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
                        break;
                    case 'google+':
                        element = getAtagElement();
                        //var url = "https://survey.emailappsuat.emea.citi.com/connectweb/demo/invite.html";
                        var href = element.href = 'https://plus.google.com/share?url=' + encodeURIComponent(message + ' ' + url);
                        element.onclick = window.open(href,'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
                        break;
                    case 'line':
                        element = getAtagElement();
                        var href = element.href = protocol + '//line.naver.jp/R/msg/text/?' + encodeURIComponent(message + ' ' + url);
                        element.onclick = window.open(href,'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
                        break;
                    case 'twitter':
                        element = getAtagElement();
                        var href = element.href = protocol + '//twitter.com/home/?status=' + encodeURIComponent(message + ' ' + url);
                        //var href = element.href = 'twitter://?status=' + encodeURIComponent(message + ' ' + url);
                        element.onclick = window.open(href,'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
                        break;
                    /*case 'linkedin':
                        element = getAtagElement();
                        var href= 'http://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.citibank.com.sg/gcb/static/all_promo.htm';
                        //var href = element.href = protocol + '//linkedin.com/shareArticle?mini=true&amp;url=' + url + '&t=' + encodeURIComponent(message);
                        //var href = element.href = protocol + '//linkedin.com/shareArticle?mini=true&amp;url=' + encodeURIComponent(message + ' ' + url);
                        element.onclick = window.open(href,'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
                        break;*/
                    case 'whatsapp':
                        element = getAtagElement();
                        console.log(protocol);
                        var href = element.href = 'whatsapp://send?text=' + encodeURIComponent(message + ' ' + url);
                        element.onclick = window.open(href,'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
                        break;
                    case 'mailto':
                        element = getAtagElement();
                        console.log(protocol);
                        var href = element.href = 'mailto:?body=' + encodeURIComponent(message + ' ' + url) + '&subject=' + encodeURIComponent('Check out this interesting promotion!');
                        element.onclick = window.open(href,'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
                        break;
                    default:
                        alert('SNS type not found. (' + options + ')');
                }
            } else {
                alert('data-sns attribute not set.');
            }
        });
    });
};
