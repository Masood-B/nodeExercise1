const {writeFile, readFile,
    appendFile} = require('fs')
    readFile('./data.txt', 'utf-8', 
    (err, data)=> {
            if(!err)
                console.log(data);
            else
            console.log('An error occurred');
        })

        writeFile('data.txt', 'Good Day', (err)=>{
            if (!err)
                console.log('It was successful')
            else
            console.log('faulty')
        })

        writeFile('data.txt', 'Good Evening', (err)=>{
            if (!err)
                console.log('It was successful')
            else
            console.log('faulty')
        })

        // The second content overrided the first content 

        appendFile('data.txt', ' Good Night', (err)=>{
            if (!err)
                console.log('It was successful')
            else
            console.log('faulty')
        });