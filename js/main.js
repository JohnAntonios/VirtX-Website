(function() {
    var containerSelector = '#container360';
    this.viewer = new Kaleidoscope.Video({
        source: 'vr.mp4',
        containerId: containerSelector,
        height: window.innerHeight,
        width: window.innerWidth
    });
    this.viewer.render();
    window.onresize = function() {
        this.viewer.setSize({ height: window.innerHeight, width: window.innerWidth });
    }.bind(this);
    document.querySelector(containerSelector).addEventListener('touchend', this.viewer.play.bind(this.viewer));
    document.body.addEventListener('click', function() {
        this.viewer.play();
    }.bind(this));
})();