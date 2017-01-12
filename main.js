<script type="application/javascript">
    function getip(json){
      alert(json.ip); // alerts the ip address
    }
</script>

<script type="application/javascript" src="http://www.telize.com/jsonip?callback=getip"></script>

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = getip(json);

letterColors = [red, orange, green, blue, purple];

  bubbleShape = "circle";




drawName(myName, letterColors);
bounceBubbles();
