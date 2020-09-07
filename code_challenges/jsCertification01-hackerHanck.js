'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

async function getCountryName(code) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
  let name = '';
  let i = 1;
  while (name == '') {
    name = await getByUrlCountryName(code, i);
    i++;
  }
  return name;
}

async function getByUrlCountryName(code, page) {
  let url = `https://jsonmock.hackerrank.com/api/countries?page=${page}`;
  let data = '';
  let country = '';
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        response.on('data', (chunk) => {
          data += chunk;
        });
        response.on('end', () => {
          country = JSON.parse(data).data.find((element) => {
            return element.alpha2Code == code;
          });
          !country ? resolve('') : resolve(country.name);
        });
      })
      .on('error', (error) => reject(error));
  });
}
