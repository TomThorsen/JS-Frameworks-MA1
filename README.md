Super Simple Slider with example

How to use:
1. Make sure you are running jQuery on your website. You can load this via a CND by adding this in the header:
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

2. Add the sliderizer.js file to a folder named "js" in the root of the website, and include the script on your webpage right before the </body> tag like so:
<script type="text/javascript" src="js/sliderize.js"></script>

3. Directly after this, and before the </body> tag add your main javascript file, for example main.js:
<script type="text/javascript" src="js/main.js"></script>

4. To use the plugin, run the function from your main javascript file using: $('#sliderIDname').sliderize(3000);
The "#sliderIDname" is where you insert the id of your unordered list containing the images you want in your slider, and the "3000" at the end is the time it uses to cycle trough one image. There are examples of CSS stylings included in the example, but these can obviously be changed although the display:none and display:block settings has to be included for it to work properly.

