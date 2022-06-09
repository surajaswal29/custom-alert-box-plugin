# customAlertBoxPlugin
Custom Alert Box Plugin Using JavaScript and CSS.
Just Download the JS file and use it in your project.

Must Include CSS Code/Default Custom Alert Box Class:
<br/>
/* must include css */<br/>
.custom-alert-box {<br/>
  position: absolute;<br/>
  top: 0%;<br/>
  padding: 20px;<br/>
  font-size: 16px;<br/>
  color: #ffffff;<br/>
  font-family: Arial, Helvetica, sans-serif;<br/>
  background-color: #58a6eb;<br/>
  animation: alert-box 1s ease;<br/>
}<br/>
<br/>
@keyframes alert-box {<br/>
  0% {<br/>
    top: -10%;<br/>
  }<br/>
  100% {<br/>
    top: 0%;<br/>
  }<br/>
}<br/>
<br/>

You can also include your CSS to the custom alert box. <br/>
<br/>
This Plugin has two type of Alert Boxes: <br/>
<br/>
1). Alert Box on page load <br/>
2). Alert Box on Click the button. <br/>
<br/>
Alert Box will automatically disappear after 4 seconds.
