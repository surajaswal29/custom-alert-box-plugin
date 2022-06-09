# customAlertBoxPlugin
<h1>Custom Alert Box Plugin Using JavaScript and CSS </h1>

Must Include CSS Code/Default Custom Alert Box Class:
<br/>

<pre>
/* must include css */
.custom-alert-box {
  position: absolute;
  top: 0%;
  padding: 20px;
  font-size: 16px;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #58a6eb;
  animation: alert-box 1s ease;
}

@keyframes alert-box {
  0% {
    top: -10%;
  }
  100% {
    top: 0%;
  }
}
</pre>
</br>
You can also include your CSS to the custom alert box. <br/>
<br/>
This Plugin has two type of Alert Boxes: <br/>
<br/>
1). Alert Box on page load <br/>
2). Alert Box on Click the button. <br/>
<br/>
Alert Box will automatically disappear after 4 seconds.<br/>
<br/>
Demo link => <a href="https://surajaswal-dev.github.io/customAlertBoxPlugin/">Click for Demo</a>
<br/>
<h1>How to use this plugin?</h1>
<h2>Step 1:</h2>
Download the <b>alert-box.js</b> file.<br/>
<h2>Step 2:</h2>
Include the alert-box.js file to your HTML file<br/>
<pre>
   <script src="alert-box.js"></script>
</pre>
<h2>Step 3:</h2>
(1) Call customAlert() function for alert box on page load. <br/>
(2) Call alertOnClick() function for alert box on click. <br/>
<br>
<pre>
<script defer>
   customAlert('This is custom alert Box !'); //alert box on load
   alertOnClick('alert-b', 'Custom Alert Box onClick'); //alert box on click
 </script>  
</pre>

<b>customAlert() function will take three arguments</b>
1. message
2. allow custom css (optional)
3. custom css className (optional)

Example:

<pre>
<script defer>
  customAlert('This is custom alert Box !','allow','custom-class-name');
</script>
</pre>

<b>alertOnClick() function wil take four arguments</b>
1. Id Name of the element on which you want to apply onclick event.
2. message
3. allow custom css (optional)
4. custom css className (optional

Example:

<pre>
<script defer>
  alertOnClick('alert-b', 'Custom Alert Box onClick','allow','custom-class-name');
</script>
</pre>

<em>Note: By allowing custom css you give your own styling to the alert box.</em>
