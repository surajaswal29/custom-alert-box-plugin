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
<br/>
<h2>Step 1:</h2><br/>
Download the <b>alert-box.js</b> file.<br/>
<h2>Step 2:</h2><br/>
Include the alert-box.js file to your HTML file<br/>
<script src="alert-box.js"></script>

    <script defer>
      customAlert('This is custom alert Box !');
      alertOnClick('allow', 'alert-b', 'Custom Alert Box onClick');
    </script>
