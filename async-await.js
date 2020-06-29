const add = (a,b) => {
    return new Promise ((resolve,reject) => {
        setTimeout( ()=>{
            if (a<0 || b< 0){
                reject("Enter Greater than Zero!")
            }
            resolve(a+b)
        }, 2000)
    })
}

doWork = async() => {
    const sum = await add (1,4)
    const sum2 = await add (sum, 9)
    const sum3 = await add (sum2, -9)
    return sum3
}
doWork().then((result) =>{
    console.log(result); 
}).catch((err) => {
    console.log(err)
    
})