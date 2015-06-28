(function () {

    //resize mainHeight to be totalHeight - (headerHeight + footerHeight)
    var resizeMain = function (selector) {
        var toBeResized = document.querySelector(selector) || document.querySelector('div[role=main]');
        window.addEventListener('resize', resize);
        function resize () {
            var height = window.innerHeight - (document.querySelector('header[role=banner]').clientHeight + document.querySelector('footer[role=contentinfo]').clientHeight);
            toBeResized.style.height = height > toBeResized.clientHeight ? height + 'px' : '';
        }
        resize();
    }('div[role=main]')

    Services = {
        "garbage-pickup": "Leaf and Garbage Pickup",
        "plant-trimming": "Plant Trimming",
        "dead-plant-replacement": "Dead Plant Replacement",
        "weed-spraying": "Weed Spraying",
    }

    var Timer = function (selector, helpers) {

        helperFunctions = helpers || null;

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

                    //hide others, create animation
                    helperFunctions.addClass(e.target.parentNode.parentNode.parentNode, 'active');
                    clearServices();

                    //start timer
                    startTimer();
                    e.preventDefault();
                }, false);
            }
        }();
        //end link nav

        function clearServices() {
            var sectionElements = document.querySelectorAll('.services section:not(.active)');
            for (var i = 0, j = sectionElements.length; i < j; i++) {
                sectionElements[i].setAttribute('hidden', '');
            }
            var activeElement = document.querySelector('.services .active');
            activeElement.parentNode.style.backgroundColor = 'black';
            activeElement.parentNode.previousElementSibling.textContent = Services[serviceTimed];
        }

        //start the timer
        function startTimer() {
            var timerElement = document.getElementById('timer').innerHTML = '<p>00:00:00</p>';
            timeHandler = setInterval(updateTimer, 1000);
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

    //my little helpers
    this.helpers = {
            //helpers
        addClass: function (node, newClass) {
            //get current classes
            var classes = node.className;
            //add the new class
            classes += ' ' + newClass;
            node.className = classes;
        },
        removeClass : function (node, removeClass) {
            //get current class/es
            var classes = node.className;
            //split it at " "
            var classArray = classes.split(" ");
            //get index
            var removeIndex = classArray.indexOf(removeClass);
            //delete from index
            classArray.splice(removeIndex, 1);
            //re create string and add it as a class name
            node.className = classArray.join(" ");
        }
    }

    serviceTimer = typeof serviceTimer != 'undefined' ? serviceTimer : new Timer("#timer", this.helpers);

})();

 