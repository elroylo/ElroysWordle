There are 6 commands you must run in order if you are to download the project.
Prior to these commands, make sure you have NPM as well as the entire project installed on your computer.

1. npm install
2. npm install react-dom
3. npm install -g json-server
4. json-server ./data/db.json --port 3001
5. npm run build
6. npm start


list of other commands:
"test":     "npm test",
"eject":    "npm eject"

If you want to run this on github,
you must type this in cmd prompt
1. npm install react-dom

The component files host details for what needs to be displayed.
Component files:
Answer.js, Boxes.js, Keyboard.js, Row.js, Wordle.js

The elroyDle.js file hosts the useful functions that are needed for running this project.
They are essential to the project and allow for set up and keyboard events.
Hooks:
elroyDle.js

The Core files are primarily used for rendering and displaying the wordle app.
Core files:
App.js
index.css
index.js
