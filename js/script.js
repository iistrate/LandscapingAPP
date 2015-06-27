(function () {
    var resizeMain = function (selector) {
        var toBeResized = document.querySelector(selector) || document.querySelector('div[role=main]');
        window.addEventListener('resize', resize);
        function resize () {
            var height = window.innerHeight - (document.querySelector('header[role=banner]').clientHeight + document.querySelector('footer[role=contentinfo]').clientHeight);
            toBeResized.style.height = height + 'px';
        }
        resize();
    }('div[role=main]')
})();

 