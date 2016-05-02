import fs from 'fs';

export function readFile(filename) {
  return new Promise(resolve, reject) {
    fs.readFile(filename, (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  }
}

export function writeFile(filename, data) {
  return new Promise(resolve, reject) {
    fs.writeFile(filename, JSON.stringify(data, null, 2), err => {
      if (err) {
        reject(err);
      }
      resolve();
    })
  }
}

// var fs = require('fs');

// exports.readFile = filename => {
//   return new Promise(resolve, reject) {
//     fs.readFile(filename, (err, data) {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     })
//   }  
// }

// exports.writeFile = (filename, data) => {
//   return new Promise(resolve, reject) {
//     fs.writeFile(filename, JSON.stringify(data, null, 2), err => {
//       if (err) {
//         reject(err);
//       }
//       resolve();
//     })
//   }  
// }
