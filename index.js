// Sliders
$('#fontSize, #strokeSize').slider({
	formatter: function(value) {
		return value + 'px';
	}
});

$('#fontSize, #strokeSize').on('slide', function() {
  update();
});

// Colorpickers
$('#fontColor, #strokeColor').colorpicker().on('changeColor', function() {
  update();
});

// Other

$('#fontFamily').change(function() {
  update();
});

// Functions
var update = function() {
  // get form values
  var fontFamily = $('#fontFamily').val();
  var fontSize = $('#fontSize').slider('getValue');
  var strokeSize = $('#strokeSize').slider('getValue');
  
  var fontColor = $('#fontColor').val();
  var strokeColor = $('#strokeColor').val();
  
  // update css
  var $preview = $('#preview');
  $preview.css('font-family', fontFamily);
  $preview.css('color', fontColor);
  $preview.css('font-size', fontSize);
  
  $preview.css('text-shadow', '');
  
  for (var angle=0; angle<2*Math.PI; angle+=1/strokeSize) {
    appendShadow($preview, Math.cos(angle) * strokeSize, Math.sin(angle) * strokeSize, strokeColor);
  }
  
  // update code preview
  $('pre').html('text-shadow: ' + $preview.css('text-shadow') + ';');
}

var appendShadow = function(item, x, y, col) {
  // compute new text-shadow property
  var textShadow = '';
  if (item.css('text-shadow') !== 'none') {
    textShadow = item.css('text-shadow') + ', ';
  }
  textShadow = textShadow + x + 'px ' + y + 'px ' + col;
  
  // apply new text-shadow property
  item.css('text-shadow', textShadow);
}

update();