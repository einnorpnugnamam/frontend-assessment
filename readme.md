#### Requirements
* NodeJS (https://nodejs.org/en/)
* Gulp (http://gulpjs.com/)

To make sure you have Node, npm, and gulp installed, run three simple commands to see what version of each is installed:
* To see if Node is installed, type `node -v` in Terminal. This should print the version number.
* To see if NPM is installed, type `npm -v` in Terminal. This should print the version number.
* To see if gulp is installed, type `gulp -v` in Terminal. This should print the version number.

#### Installation
1. **Download the file**  
  Clone or download [ZIP](https://github.com/einnorpnugnamam/frontend-assessment.git)


2. **Run npm for one-time installation of development dependencies**  
  `sudo npm install`

3. **Run 'gulp/npm start' to compile and watch**  
  `gulp` or `npm start`





Introduction
---
Thanks for taking the time to complete this frontend technical assessment. We will be focusing on software quality (scalability, readability, maintainability, etc.) and your eye for detail. You may include any libraries. Bonus points if SASS/LESS is used and jQuery is not used.

Exercise 1
---
Build a responsive page based on the designs.

##### Requirements
1. Match the designs exactly.
2. Needs to be responsive.

##### Designs
* exercise1-desktop.png
* exercise1-mobile.png

##### Assets
* Desktop banner - http://via.placeholder.com/1920x650
* Mobile banner - http://via.placeholder.com/600x600
* Content images - http://via.placeholder.com/400x300

Exercise 2
---
Read the `data.json` file and display the data as tabs on desktop and an accordion on mobile.

##### Requirements
1. Display data in tabs on desktop.
2. Display data in an accordion on mobile.
3. Only 1 accordion/tab should be open at a time.
4. Open the first accordion/tab on load.
5. If the open accordion is selected, close it.

###### Bonus points
* Improve the user experience with meaningful animations/transitions.
* Design and styling.
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.
	
	* the unary operator + attempts to convert its operand into a number, the value NaN is returned, which is then converted into a string when concatenated with the original ba - thus resulting in baNaN. baNaN + 'a' returns baNaNa you add the ".toLowerCase()" function which will transform the text into a lowercase.

Submission
---
We recommend submitting your completed assessment as a forked repository. Please replace README content with instructions and relevant documentation.

