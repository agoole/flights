
var plan = require('flightplan');
var flights = require('./flights');

// configuration
plan.target('staging', {
  host: 'staging.example.com',
  username: 'pstadler',
  agent: process.env.SSH_AUTH_SOCK
});

plan.target('production', [
  {
    host: 'www1.example.com',
    username: 'pstadler',
    agent: process.env.SSH_AUTH_SOCK
  },
  {
    host: 'www2.example.com',
    username: 'pstadler',
    agent: process.env.SSH_AUTH_SOCK
  }
]);