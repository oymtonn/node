// Streams are an asynchronous approach
// The file is read in small pieces, and those pieces are sent to the client bit by bit, 
// without waiting for the whole file to load into memory.

//fileStream is continuously reading the file in chunks.
// Each chunk is emitted as a data event.
// pipe takes each chunk and transfers it to the response stream (res), allowing the client to see the file data as it’s being read.
// The client can start seeing the data immediately, without waiting for the entire file to be read.


var http = require('http')
var fs = require('fs')

http
    .createServer(function (req, res) {
        // const text = fs.readFileSync('./content/big.txt', 'utf-8')
        // res.end(text)
        const fileStream = fs.createReadStream('./content/big.txt', 'utf-8'); //This is a stream that reads data from the file (big.txt) in chunks
        fileStream.on('open', ()=>{ // when filestream opens the file
            fileStream.pipe(res) // Pipe listens for data from fileStream and writes it to res
        })
        fileStream.on('error', (err)=>{
            res.end(err)
        })
    })
    .listen(5000)