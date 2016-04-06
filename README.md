# genedavis
Autogen art like Gene Davis

Example output:
![alt tag](https://raw.githubusercontent.com/agravitis/genedavis/master/Screen%20Shot%202016-04-06%20at%2010.50.36%20AM.png)
![alt tag](https://raw.githubusercontent.com/agravitis/genedavis/master/Screen%20Shot%202016-04-06%20at%2011.23.20%20AM.png)
![alt tag](https://raw.githubusercontent.com/agravitis/genedavis/master/Screen%20Shot%202016-04-06%20at%2011.24.58%20AM.png)

What the variables do:
* *width* is the output width divided by 50 (the pxMultiplier)
* *height* is the output height divided by 50 (the pxMultiplier)  -  This was a silly conversion so I could input inches of my paintings and have them scaled to a computer monitor at a reasonable resolution.
* *numColors* is the number of color hues to interpolate over the supplied spectral control colors (see https://vis4.net/blog/posts/mastering-multi-hued-color-scales/)
* *narrowColor* is the average width in pixels of a narrow strip
* *wideColor* is the average width in pixels of a wide strip

Other things you can tweak:
* **0.97** currently refers to the probabiliy of a narrow vs wide strip being painted
* The references to **0.6** vs **0.4** currently refer to an attempt to ensure that only colours in the latter 40% of the selected color spectrum are used for wide colors.  Using bright colors for wide bands looks bad.
* The input array to `chroma.scale` is currently `['rgb(45, 186, 242)', 'royalBlue', 'navy'])`.  Change this to use different colours.  There is no limit to the number of supplied colours, but without writing more code they will all be equidistant in the color spectrum and therefore have equal probability of being selected for use in a narrow strip.  Note also that the exact supplied colours might not necessarily be used since they will be subjected to lightnessEqualization (can be switched off).  Note finally, they should be supplied in order of lightest to darkest due to assumptions everywhere.

What's wrong with it:
* No UI
* Not really like Gene Davis art:
   * Narrow bands were more significantly auto-correlated; you didn't have a "wide" band just pop up between them
   * Wide bands didn't really exist; it was more of a consistent background color if narrow bands didn't cover the whole painting.
   
