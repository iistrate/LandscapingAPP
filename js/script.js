(function () {

    //resize mainHeight to be totalHeight - (headerHeight + footerHeight)
    var resizeMain = function (selector) {
        var toBeResized = document.querySelector(selector) || document.querySelector('div[role=main]');
        window.addEventListener('resize', resize);
        function resize () {
            var height = window.innerHeight - (document.querySelector('header[role=banner]').clientHeight + document.querySelector('footer[role=contentinfo]').clientHeight);
            toBeResized.style.height = height + 'px';
        }
        resize();
    }('div[role=main]')

    var Timer = function (selector) {
        timerElement = document.querySelector("#timer");
        serviceTimed = '';
        duration = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        timeHandler = '';

        //link nav
        this.linkNav = function() {

            var serviceNav = document.querySelectorAll('.services a');

            for (var i = 0, j = serviceNav.length; i < j; i++) {
                serviceNav[i].addEventListener('click', function (e) {
                    //clear timer
                    clearTimer();
                    //get service
                    serviceTimed = e.target.parentNode.dataset['service'];
                    //start timer
                    startTimer();
                    e.preventDefault();
                }, false);
            }
        }();
        //end link nav

        //start the timer
        function startTimer() {
            timeHandler = setInterval(updateTimer, 10);
        }

        function updateTimer(time) {

            //handle time
            duration.seconds++;
            if (duration.seconds % 60 == 0) {
                duration.seconds = 0;
                duration.minutes++;
                if (duration.minutes % 60 == 0) {
                    duration.minutes = 0;
                    duration.hours++;
                    if (duration.hours > 12) {
                        alert("Overtime detected!");
                    }
                }
            }

            //format time
            var shownHours = duration.hours >= 10 ? duration.hours : '0' + duration.hours;
            var shownMinutes = duration.minutes >= 10 ? duration.minutes : '0' + duration.minutes;
            var shownSeconds = duration.seconds >= 10 ? duration.seconds : '0' + duration.seconds;

            //display time
            var html = "<p>"
            html += '' + shownHours + ':' + shownMinutes + ':' + shownSeconds;
            html += "</p>"
            timerElement.innerHTML = html;
        }

        function clearTimer() {

            //save suration here?

            clearInterval(timeHandler);
            duration = {
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }
        
    } //end timer class

    serviceTimer = typeof serviceTimer != 'undefined' ? serviceTimer : new Timer("#timer");


})();

 