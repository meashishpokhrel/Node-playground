const doWorkback = (callback) => {
    setTimeout(() => {
        // callback ("this is callback", undefined)
        callback (undefined, [1,4,5])
    }, 2000)
}

doWorkback((err, result) => {
    if (err){
        console.log(err);
    }
    else{
        console.log(result);
        
    }
})