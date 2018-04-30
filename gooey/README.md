Introduction

This site is a collection of original time based digital interactions that highlight the presence of time rather than attempting to conceal it. The implemented technology is exposed by using a reductive, minimalist layout and graphic treatment to encourage contemplation and reflection by the user. Without explicitly stating what is happening on each page or guiding the user, she in encouraged to take as much or as little time as desired to draw her own conclusions.

Interaction 01 - gooey
<br>
Unless visited at the stroke of midnight, the homepage will appear skewed. A subtle “ticking” motion rotates the entire page each minute like the hand of a clock. This is intended to be discreet, the visitor might not realize what is happening unless they spend a few minutes resting on the home page, or if they visit the page at different times of the day. This was achieved in Javascript by pulling the time of day and converting it into a degree value to rotate the page.


Interaction 02 - trail
<br>
On loading this page, the visitor is introduced to a simple round circle that follows the movements and position of the cursor. Every five seconds a new circle appears and trails behind the rest. The intention behind this page is to highlight the passage of time in a way that is more nuanced and compelling than a numeral counter. As long as the page is open, regardless of whether or not the visitor is viewing the page, a new div is created every five seconds, so when the user revisits the page after five minutes for example, sixty new divs will have been created. This highlights the fact that digital objects exist and persist regardless of human presence. The collection of trailing divs encourages play.

Interaction 03 - roll
<br>
Especially online, viewers are accustomed to having information as easily accessible and quickly digestible as possible. In the third interaction, a large body of text is displayed but if the viewer doesn’t take their time to thoroughly read it and tries to scroll too quickly, the text disappears and fades back in very slowly. This motion was achieved by a function that checks the scrolls speeds and if the scroll speed is too high, the css opacity of the text changes to 0.

Interaction 04 - float
<br>
The affirmation ‘you are exactly where you are supposed to be’ appears prominently when loading this page but when the mouse glides over each letter, they disperse and are sent to a random location on the page. After a moment each letter gradually floats back to its starting location creating unexpected interactions and allows the possibility to form new words. To produce this effect, blast.js was used to break each word by letter, math.random sends the letter to a random location on the y and x axis then finally a setInterval statement slowly brings them back to their starting location.

Interaction 05 - info
<br>
To make the content appear on this page, the viewer learns that the div gradually fades in as the mouse is moving over it, not hovering but constantly moving. This massaging action creates a physical sensation for the user’s hand or finger that connects a digital reaction. To activate this, a javascript function is used that checks if the mouse is moving and gradually changes the opacity of the div.
