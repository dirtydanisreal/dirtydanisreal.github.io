(function() {
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
            document.createTextNode("@-ms-viewport{width:auto!important}")
        );
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }
    if (!window.location.href.match(/\?genie=true/))
        window.location.href = window.location.href + '?genie=true';
})();

var mqAdjusted = 'mqAdjusted: ',
			max319 = mqAdjust('(max-width: 19.9375em)'),
			min320 = mqAdjust('(min-width: 20em)'),
			min500 = mqAdjust('(min-width: 500px)'),
			min750 = mqAdjust('(min-width: 750px)'),
			min809 = mqAdjust('(min-width: 50.5625em)'),
			min900max950 = mqAdjust('(min-width: 900px) and (max-width: 950px)');
		
		enquire.register(max319, {
			match: function() {
				console.log('No MQ', mqAdjusted + max319);
			}
		}).register(min320, {
			match: function() {
				console.log('20em (320px)', mqAdjusted + min320);
			}
		}).register(min500, {
			match: function() {
				console.log('500px', mqAdjusted + min500);
			}
		}).register(min750, {
			match: function() {
				console.log('750px', mqAdjusted + min750);
			}
		}).register(min809, {
			match: function() {
				console.log('50.5625em (809px)', mqAdjusted + min809);
			}
		}).register(min900max950, {
			match: function() {
				console.log('900px and 950px', mqAdjusted + min900max950);
			}
		}).listen(100);