const fsPromise = require('fs').promises
const path = require('path')

const fileOps = async () => {
    try {
        const data = await fsPromise.readFile(path.join(__dirname, 'starter.txt'), 'utf8')
        await fsPromise.unlink(path.join(__dirname, 'starter.txt'))
        await fsPromise.writeFile(path.join(__dirname, 'promisesWrite.txt'), data)
        await fsPromise.appendFile(path.join(__dirname, 'promisesWrite.txt'), '\n\nPromisesAppend')
        await fsPromise.rename(path.join(__dirname, 'promisesWrite.txt'), path.join(__dirname, 'promisesComplete.txt'))

        const newData = await fsPromise.readFile(path.join(__dirname, 'promisesComplete.txt'), 'utf8')
        console.log(newData)
    } catch (err) {
        console.error(err)
    }
}


fileOps()

// Read File
// fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

/**
 * This is Callback Hell !!!
 */

// // Write File
// fs.writeFile(path.join(__dirname, 'reply.txt'), 'Nice To Meet you ', (err) => {
//     if (err) throw err
//     console.log('Write Complete')

//     // Append File 
//     fs.appendFile(path.join(__dirname, 'reply.txt'), 'Its just a test', (err) => {
//         if (err) throw err
//         console.log('Append Complete')
//     })

//     // Rename File 
//     fs.rename(path.join(__dirname, 'reply.txt'), path.join(__dirname, 'greeting.text'), (err) => {
//         if (err) throw err
//         console.log('Rename Complete')
//     })

// })


// Exit on uncaught errors 
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})