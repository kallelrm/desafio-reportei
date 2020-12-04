import fetch from 'node-fetch';

fetch('http://instagram.com/kallel_fm?__a=1')
  .then(res => res.json())
  .then(json => console.log(JSON.stringify(json)));

export default fetch('http://instagram.com/kallel_fm?__a=1')
  .then(res => res.json())
  .then(json => console.log(JSON.stringify(json)));
