// const http = require('http');
// const fs = require('fs');

// // fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
// //     fs.writeFile('./txt/sukhi.txt', `${data}`, 'utf-8', (err) => {
// //         console.log('your file is created and the text is written')
// //     })
// // })



// const server = http.createServer(
//     (req, res) => {
//         const url = req.url;
//         if (url === '/' || url === '/main') {
//             res.end('This is the main page');
//         } else if (url === '/contact-us') {
//             res.end('This is the contact page');
//         }

//     }
// );

// server.listen(8000, '127.0.0.1');

////////////////////////////////////////////////////
//SECOND DAY REV - 1

// const fs = require('fs');
// const http = require('http');
// const data = fs.readFile('./txt/sukhi.txt', 'utf-8', (err, data) => {
//     fs.writeFile('./txt/malika.txt', `${data}`, 'utf-8', (err, data) => {
//         console.log('file is crated')
//     })
// });

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.writeHead(200, {
//         'your-own-header': 'hello world'
//     });
//     const pathName = req.url;
//     if (pathName === "/" || pathName === "/hello") {
//         res.end('this is the main page');
//     } else {
//         res.writeHead(404, {
//             'Content-type': 'text/html'
//         });
//         res.end('<h1>page not found</h1>');
//     }

// });

// server.listen(8000, '127.0.0.1');
///////////////////////////////////////////////


// const EventEmitter = require('events');
// class name extends EventEmitter {

// }

// const myName = new name();

// myName.on('hello', () => {
//     console.log('my name is Sukhjit Singh')
// });




// myName.emit('hello');


//////////////////


// const http = require('http');


// const server = http.createServer();

// server.on('request', (req, res) => {
//     console.log(res.end('hello world'));
// });

// server.listen(8000, '127.0.0.1', () => {
//     console.log(`hello`)
// });

///////////////////////////////////////////////////


// const fs = require('fs');



// fs.readFile(`./txt/sukhi.txt`, 'utf-8', (err, data) => {
//     fs.writeFile(`./txt/mehar.txt`, `${data}`, 'utf-8', (err) => {
//         console.log('flile is created')
//         console.log(err)
//     });
// })



////////////////////////////////////////////////////
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('hello mannat and mehar');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on port no 8000')
});