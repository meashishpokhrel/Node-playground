const doWorkback = new Promise ((resolve, reject) => {
    setTimeout( () => {
        //resolve([1,4,6])
        reject("THis is errot")
    }, 2000)
})

doWorkback.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})