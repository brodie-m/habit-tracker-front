# Team Habitab Lap 2 Project-Front End

## Installation
* -Site has been deployed on netlify, therefore if using for viewing purposes, to be accessed on the following address
* -Otherwise, please fork and clone repo
* -Run npm install in the terminal to install all of the dependencies

## Usage
-npm test, to launch all test suites (use npm run coverage to obtain coverage)

## Changelog
### Index.html
- [x] Adding habitab logo
- [x] Adding particle animation in background using javascript
- [x] Create the login and register buttons
- [x] Create the login and register modals, to allow for user to input details

### Dashboard.html
- [x] Create navbar containing the website logo and the logout button
- [x] Use bootstrap grids to create habit list container and single habit information container
- [x] Inside the habit list container, add individual habit cards and a create button at the bottom
- [x] Inside each individual habit card add 'habit title', 'streak', circle buttn to allow for specific info on clicked habit
- [x] Inside single habit container, use connected chart.js to create bar chart displaying percentage of completetion for that given day
- [x] Inside single habit container, add 2x2 grid to view specific details of habit such as: streak, target etc
- [x] Add footer with copyrught, company slogan and social media icons with links

## Login.js & Register.js
- [x] Token Validation
- [x] Check Username/Check Password
- [x] Error Messages
- [x] Text captcha

## Script.js and Dashboard.js
- [x] Progress Bar
- [x] Both line and bar charts (chart.js)
- [x] Incrementing the progress
- [x] Streak calculator
- [x] Beaver Mascot logic
- [x] Create new habit
- [x] Edit/Delete habit
- [x] Habit units
- [x] Addition of notes to each individual habit

## Bugs
- [x] Getting the graph and percentage completed to update when incrementing, without having to connect with the server
- [x] Getting habit notes to stay within information container
- [x] Getting the flame svg to move

## Wins & Challenges
### Wins
* -Managed to implement all features in the spec
* -Extra features include: 
   * - Bar fill displaying percentrage of target completed
   * - Graph allowing user to compare the progress of habits
   * - Use of cookies
   * - Habit information zoom feature- more in deoth look   into specific habit
   * -Email reminder?
* -Working in team of 5 was hard, however effectively distrubuted the weeks tasks through clear and open communication
* -Learnt more about svg's and how to use graph's, interactive mascot
* -Very few issues with conflicts as everyone workd on seperate feauture branches

### Challenges
* -Getting the progress percentage bar to update without having to wait for server to load
* -Incorporating the fire svg which displays the streak into newly created habits
* -Finding working style which suited the team best