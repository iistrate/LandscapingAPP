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
                    <li><a href="work.php" class="selected">Work</a></li>
                    <li><a href="overview.php">Overview</a></li>
                </ul>
            </nav><!-- menu -->
        </div><!-- container -->
    </header>
    <div role="main">
        <div class="container">
            <article class="services">
                <h1>Pick Service:</h1>
                <div>
                    <section>
                	    <h2><a href="#" data-service="plant-trimming"><span hidden>Plant trimming</span> <img src="images/icons/plant_trimming.png" alt="Plant Trimming" /></a></h2>
                    </section>
                    <section>
                	    <h2><a href="#" data-service="garbage-pickup"><span hidden>Leaf and garbage pickup</span> <img src="images/icons/garbage_pickup.png" alt="Garbage and Leaf Picku[" /></a></h2>
                    </section>
                    <section>
                	    <h2><a href="#" data-service="dead-plant-replacement"><span hidden>Dead plant replacement</span> <img src="images/icons/dead_plant_replacement.png" alt="Dead Plant Replacement" /></a></h2>
                    </section>
                    <section>
                	    <h2><a href="#" data-service="weed-spraying"><span hidden>Weed spraying</span> <img src="images/icons/weed_spraying.png" alt="Weed Spraying" /></a></h2>
                    </section>
                </div>
            </article><!-- services -->
            <div id="timer"></div>
            <article id="activities">
                <section class="plant-trimming">
                    <h3>Plant Trimming:</h3>
                    <div class="body">
                        <figure class="before">
                            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97250&w=300&h=250" alt="placeholder" />
                            <figcaption>Before pic <input type="file" accept="image/*;capture=camera" name="before" /></figcaption>                            
                        </figure>
                        <figure class="after">
                            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97250&w=300&h=250" alt="placeholder" />
                            <figcaption>After pic <input  type="file" accept="image/*;capture=camera" name="after" /></figcaption>                            
                        </figure>                  
                    </div><!-- body -->
                </section><!-- plant trimming -->
                <section class="garbage-pickup">
                    <h3>Garbage Pickup:</h3>
                    <div class="body">
                        <figure class="before">
                            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97250&w=300&h=250" alt="placeholder" />
                            <figcaption>Before pic <input type="file" accept="image/*;capture=camera" name="before" /></figcaption>                            
                        </figure>
                        <figure class="after">
                            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97250&w=300&h=250" alt="placeholder" />
                            <figcaption>After pic <input  type="file" accept="image/*;capture=camera" name="after" /></figcaption>                            
                        </figure>                     
                    </div><!-- body -->
                </section><!-- plant trimming -->
                <section class="dead-plant-replacement">
                    <h3>Dead Plant Replacement:</h3>
                    <div class="body">
                        <figure class="before">
                            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97250&w=300&h=250" alt="placeholder" />
                            <figcaption>Before pic <input type="file" accept="image/*;capture=camera" name="before" /></figcaption>                            
                        </figure>
                        <figure class="after">
                            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97250&w=300&h=250" alt="placeholder" />
                            <figcaption>After pic <input  type="file" accept="image/*;capture=camera" name="after" /></figcaption>                            
                        </figure>                  
                    </div><!-- body -->
                </section><!-- plant trimming -->
                <section class="weed-spraying">
                    <h3>Weed Spraying:</h3>
                    <div class="body">
                        <figure class="before">
                            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97250&w=300&h=250" alt="placeholder" />
                            <figcaption>Before pic <input type="file" accept="image/*;capture=camera" name="before" /></figcaption>                            
                        </figure>
                        <figure class="after">
                            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97250&w=300&h=250" alt="placeholder" />
                            <figcaption>After pic <input  type="file" accept="image/*;capture=camera" name="after" /></figcaption>                            
                        </figure>                    
                    </div><!-- body -->
                </section><!-- plant trimming -->                
            </article><!-- overview -->
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
