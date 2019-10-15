setTimeout(function() {
	var time = 0;
	var animate = ScrollReveal();
	animate.reveal('.reveal-bottom', { distance: '100px', origin: 'bottom', delay: 250, interval: 250 });
    animate.reveal('#reveal-right', { distance: '100px', origin: 'bottom', delay: 250, interval: 250 });
    animate.reveal('#reveal-bottom', { distance: '100px', origin: 'bottom', delay: 250, interval: 250 });
}, 3000);
