// Wrapper script to handle localStorage issue
// Require the localStorage polyfill before starting react-scripts
require('../setup-localStorage.js');

// Start react-app-rewired
const { spawn } = require('child_process');
const path = require('path');
const reactScriptsPath = path.join(__dirname, '..', 'node_modules', 'react-app-rewired', 'bin', 'react-app-rewired.js');

const child = spawn('node', [reactScriptsPath, 'start'], {
  stdio: 'inherit',
  shell: true,
  env: process.env
});

child.on('exit', (code) => {
  process.exit(code || 0);
});
