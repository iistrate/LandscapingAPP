<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta name="description" content="landscaping.com">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	<title>Bob's Awesome APP</title>
	<link rel="stylesheet" media="screen" href="css/default.css" />
</head>
<body>
    <header role="banner">
        <div class="container">
            <div class="pic">
                <h1><a href="index.php">Landscaping APP <em>v:0.0.1</em></a></h1>
            </div><!-- pic -->        
            <nav role="navigation">
                <ul>
                    <li><a href="work.php">Work</a></li>
                    <li><a href="overview.php" class="selected">Overview</a></li>
                </ul>
            </nav><!-- menu -->
        </div><!-- container -->
    </header>
    <div role="main">
        <div class="container">
            <article id="view">
                <h1>Work done view:</h1>
                <section class="pie-chart-container">
                <!-- hidden  custom css3 pie I created, not dynamic so trash it-->
<!--                     <div class="pie-chart" hidden>
                            <div class="time-slice" data-size='30' data-type='plant-trimming' style=""></div>
                            <div class="time-slice" data-size='10' data-type='garbage-pickup'></div>
                            <div class="time-slice" data-size='20' data-type='dead-plant-replacement'></div>
                            <div class="time-slice" data-size='40' data-type='weed-spraying'></div> -->
<!--                     </div> -->
                    <!-- pie chart -->                    
                <!-- end hidden -->
                    <div id="pieChart"></div><!-- pie chart -->
                </section><!-- pie chart container -->
                <section id="info">
                    <!-- Tabular data so Tabel -->
                    <table>
                        <tr>
                            <td>Date: </td>
                            <td>15/06/2015</td>
                        </tr>
                        <tr>
                            <td>Billed: </td>
                            <td>$200</td>
                        </tr>
                    </table>
                    <div class="feedback">
                        <h2>Job feedback: </h2>
                        <blockquote>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt distinctio deleniti aliquid non! Doloribus, accusamus architecto sunt temporibus incidunt praesentium!
                                <cite>- Important client</cite>
                            </p>
                        </blockquote>
                    </div><!-- feedback -->                    
                </section><!-- info -->
            </article><!-- view -->
        </div><!-- container -->
    </div><!-- role main -->
    <footer role="contentinfo">
        <div class="container">
            <div class="content">
                <p>
                    <small>copyright 2015, <a href="mailto:ioan@htmlthis.com">Bob's APP</a></small>                    
                </p>
            </div><!-- content -->
        </div><!-- content -->
    </footer><!-- footer -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js" charset="utf-8"></script>    
    <script src="js/script.js" type="text/javascript"></script>
</body>
</html>
