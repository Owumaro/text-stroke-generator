Text-stroke-generator
=====================

[Check the online demo here.](http://owumaro.github.io/text-stroke-generator/)

## About

The goal of this tool is to be able to create a text stroke effect, like Photoshop's layer stroke style, directly on a web text.

Webkit has a similar CSS property since 2006, [-webkit-text-stroke](https://www.webkit.org/blog/85/introducing-text-stroke/), but it never became a standard. It looks nice, but doesn't provide a way to choose if the stroke will be inside, on the middle, or outside of the text.

The feature was added to the CSS3 text properties in 2007 as [text-outline](http://www.w3.org/TR/2007/WD-css3-text-20070306/#text-outline) but was never supported by browsers (see [w3schools](http://www.w3schools.com/cssref/css3_pr_text-outline.asp)) and disappeared later (see current [CSS text decoration](http://www.w3.org/TR/css-text-decor-3/)).

On the other hand, the [text-shadow](http://www.w3schools.com/cssref/css3_pr_text-shadow.asp) CSS property works on most modern browsers. This tool uses multiple text-shadows to simulate an outer stroke. This solution is 100% CSS.

## Known limits

* When the size of the stroke exceeds the width of the stroke of the font, there will be a blank space between the text and the outline. This could be solved by generating more text-shadows, but it would rapidly become too slow for the browser (and a lot of processing for such an easy feature...).
* The stroke is an outer stroke (because it's a hack based on text-shadow, it will never be able to generate middle/inner stroke).
* The stroke's opacity is forced to 100% (again, that's because of the hack).
