!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-63064972-2","auto"),ga("send","pageview");

//GET latest release
(function($) {
    $.fn.URLrelease = function( repo, ball ) {
        return this.each(function() {
            var $a, type, api,
                $element = $( this );

            api = 'https://api.github.com/repos/dcdeiv/' + repo + '/releases/latest';

            if ( 'a' !== $element ) {
                $a = $element.children().filter( 'a' );
            } else {
                $a = $element;
            }

            $.getJSON(api, function( data ) {
                if ( undefined === ball ) {
                    $a.attr({
                        href: data.html_url,
                        target: '_blank'
                    });
                } else if ( 'tar' === ball ) {
                    $a.attr('href',data.tarball_url);
                } else if ( 'zip' === ball ) {
                    $a.attr('href',data.zipbal_url);
                }
            });
        });
    };
})(jQuery);
