(function () {

    var notSuported = function (selector) {
        var element = document.querySelector(selector);
        if (element) {
            element.addEventListener('click', function (e) {
                element.textContent = 'Not supported in v0.0.1';
                e.preventDefault();
            }, false);
        }
    }('.login a');

    //resize mainHeight to be totalHeight - (headerHeight + footerHeight)
    var resizeMain = function (selector) {
        var toBeResized = document.querySelector(selector);
        if (toBeResized) {
            window.addEventListener('resize', this.resize);
            function resize() {
                var height = window.innerHeight - (document.querySelector('header[role=banner]').clientHeight + document.querySelector('footer[role=contentinfo]').clientHeight);
                toBeResized.style.height = height > toBeResized.clientHeight ? height + 'px' : toBeResized.clientHeight + 'px';
            }
            resize();
        }
    }('div[role=main].stretch')

    Services = {
        "garbage-pickup": "Leaf and Garbage Pickup",
        "plant-trimming": "Plant Trimming",
        "dead-plant-replacement": "Dead Plant Replacement",
        "weed-spraying": "Weed Spraying",
    }

    var pictures = function () {
        //select all before and after inputs
        var inputButtons = document.querySelectorAll('#activities input');

        //add on change events
        for (var i = 0, j = inputButtons.length; i < j; i++) {
            inputButtons[i].addEventListener('change', upload, false);
        }
        function upload(e) {
            var fileToLoad = e.target.files[0];
            var fileType = e.target.name;
            var fileSource = 'service';
            var serviceName = e.target.parentNode.parentNode.parentNode.parentNode.className.split(' ')[0];

            var reader = new FileReader();
            reader.onload = function (fileReadEvent) {
                e.target.parentNode.parentNode.firstElementChild.src = fileReadEvent.target.result
            }
            //read only first file
            reader.readAsDataURL(fileToLoad);
            //create form data
            var formData = new FormData();
            formData.append(fileType, fileToLoad);
            formData.append(fileSource, serviceName);
            //xhr
            var xhr = new Xhr('POST', 'fileHandler.php', formData);
            //upload file
            setTimeout(function () {
                var response = xhr.getResponse();
                console.log(response);
            }, 500);
        }
    }()

    var Accordion = function (selector) {
        //get sections
        sectionElements = document.querySelectorAll(selector);
        //link sections
        for (var i = 0, j = sectionElements.length; i < j; i++) {
            sectionElements[i].parentElement.addEventListener('click', this.toggle, false);
        }
    }

    Accordion.prototype.toggle = function (e) {
        var toBeopened = typeof e.target != 'undefined' ? e.target : document.querySelector(e).firstElementChild;
        if (e.target) {
            if (e.target.tagName != 'H3') {
                return;
            }
        }
        //check which section is expanded; close it
        for (var i = 0, j = sectionElements.length; i < j; i++) {
            if (helperFunctions.hasClass(sectionElements[i].parentElement,'expanded') != -1) {
                helperFunctions.removeClass(sectionElements[i].parentElement, 'expanded');
            }
        }
        helperFunctions.addClass(toBeopened.parentElement, 'expanded');
    }

    var accordion = typeof accordion != 'undefined' ? accordion : new Accordion('#activities section h3');


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
        started = false;
        paused = false;

        //link nav
        this.linkNav = function() {

            var serviceNav = document.querySelectorAll('.services a');
            for (var i = 0, j = serviceNav.length; i < j; i++) {
                serviceNav[i].addEventListener('click', function (e) {
                    if (!started) {
                        //clear timer
                        clearTimer();
                        //get service
                        serviceTimed = e.target.parentNode.dataset['service'] ? e.target.parentNode.dataset['service'] : e.target.parentNode.getAttribute('service');
                        //hide others, create animation
                        helperFunctions.addClass(e.target.parentNode.parentNode.parentNode, 'active');
                        //open accordion
                        accordion.toggle('.'+e.target.parentNode.dataset['service']);
                        //
                        clearServices();
                        started = true;
                    }
                    togglePlayPause();
                    e.preventDefault();
                }, false);
            }
        }();
        //end link nav

        function togglePlayPause() {
            if (paused) {
                paused = false;
                button = 'play';
                pauseTimer();
            }
            else {
                paused = true;
                button = 'pause';
                startTimer();
            }
            var activeElement = document.querySelector('.services .active');
            activeElement.firstElementChild.firstElementChild.lastElementChild.src = 'images/icons/' + button + '.png';
        }

        function clearServices() {
            var sectionElements = document.querySelectorAll('.services section:not(.active)');
            for (var i = 0, j = sectionElements.length; i < j; i++) {
                sectionElements[i].setAttribute('hidden', '');
            }
            var activeElement = document.querySelector('.services .active');
            activeElement.firstElementChild.firstElementChild.lastElementChild.src = 'images/icons/pause.png';
            //activeElement.parentNode.style.backgroundColor = 'black';
            activeElement.parentNode.previousElementSibling.textContent = Services[serviceTimed];
        }

        //start the timer
        function startTimer() {
            timeHandler = setInterval(updateTimer, 1000);
        }
        //pause it
        function pauseTimer() {
            clearInterval(timeHandler);
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
            var timerElement = document.getElementById('timer').innerHTML = '<p>00:00:00</p>';

            //save duration here?

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
        },
        hasClass: function (node, classname) {
            //get current class/es
            var classes = node.className;
            //split it at " "
            var classArray = classes.split(" ");
            //get index
            var index = classArray.indexOf(classname);
            return index;
        }
    }

    //AJA*
    var Xhr = function (type, url, send) {

        var m_xhr = createXhr();
        var m_responseContent = null;
        var m_error = null;
        var m_send = send || null
        var m_url = url;
        var m_type = type || 'GET';

        //create our xhr
        function createXhr() {
            try {
                xmlHttp = new XMLHttpRequest()
            }
            catch (e) {
                try {
                    xmlHttp = new ActiveXObject('Windows.XMLHttp');
                }
                catch (e) {
                    m_error = e.message;
                }
            }
            return xmlHttp;
        }

        //open the file
        var open = function () {
            if (m_xhr) {
                var REQUEST_FINISHED = 4;
                var OK = 200;
                //always async, otherwise what's the point
                m_xhr.open(m_type, m_url, true);
                //when on ready state change we know it's time for action
                m_xhr.onreadystatechange = function () {
                    //if we could open the file
                    if (m_xhr.readyState == REQUEST_FINISHED) {
                        if (m_xhr.status == OK) {
                            //we can try to read response
                            try {
                                //figure out what type of response we have
                                var header = m_xhr.getResponseHeader("Content-Type");
                                switch (header) {
                                    case "application/json":
                                        m_responseContent = m_xhr.responseText;
                                        break;
                                    case "application/xml":
                                        m_responseContent = m_xhr.responseXML;
                                        break;
                                        //default is just plain text
                                    default:
                                        m_responseContent = m_xhr.responseText;
                                        break;
                                }//switch
                            }//try
                            catch (e) {
                                m_error = e.message;
                            }//catch
                        }//status
                    }//ready status
                }//onreadystate
                if (!m_error) {
                    //send data, by default it is null
                    m_xhr.send(m_send);
                }//error
            }//if xhr
        }//open

        this.getResponse = function () {
            return m_responseContent;
        }
        //do the deed
        open();
    }

    serviceTimer = typeof serviceTimer != 'undefined' ? serviceTimer : new Timer("#timer", this.helpers);

    var cacheImages = function(arrayOfImages) {
        //create hidden div
        var hidden = document.createElement("div");
        //hide it
        hidden.style.display = 'none';
        //for each image
        for (imageIterator in arrayOfImages) {
            //create it
            var newImage = document.createElement('img');
            //point to to the right image
            newImage.src = arrayOfImages[imageIterator];
            //append it to hidden
            hidden.appendChild(newImage);
        }
        //append hidden to body
        document.body.appendChild(hidden);
    }(['images/icons/dead_plant_replacement.png', 'images/icons/plant_trimming.png', 'images/icons/weed_spraying.png', 'images/icons/garbage_pickup.png', 'images/icons/pause.png', 'images/icons/play.png']);


    //Pie Chart with D3
    var pieChart = function (selector, width, height) {
        var width = width, height = height, radius = width / 2;
        var colors = ['#e74c3c', '#2980b9', '#3498db', '#2c3e50'];

        var pieData = [
            {
                service: 'Leaf and Garbage Pickup',
                timeSpent: 30
            },
            {
                service: 'Plant Trimming',
                timeSpent: 20
            },
            {
                service: 'Dead Plant Replacement',
                timeSpent: 10
            },
            {
                service: 'Weed Spraying',
                timeSpent: 40
            }
        ]

        var pie = d3.layout.pie()
        .value(function (d) {
            return d.timeSpent;
        });

        var arc = d3.svg.arc()
        .outerRadius(radius);

        var myChart = d3.select(selector).append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + (width - radius) + ',' + (height - radius) + ')')
            .selectAll('path').data(pie(pieData))
            .enter().append('path')
            .attr('fill', function (d, i) {
                return colors[i];
            })
            .attr('d', arc);

        var legend = d3.select(selector).append('ol');
        for (counter in pieData) {
            legend.append('li').text(pieData[counter].service);
        }

    }('#pieChart', 300, 300);
})();

 
