const {readFile, writeFile} = require('fs');
console.log('start')

readFile('./content/first.txt', 'utf-8',(err, result)=>{
    if (err){
        console.log(err)
        return;
    }
    const first = result
    console.log(first)
    readFile('./content/second.txt', 'utf-8', (err, result)=>{
        if (err){
            console.log(err)
            return;
        }
        const second = result
        console.log(second)
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result)=>{
                if (err){
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
         )
    })
})
console.log('starting next task')
