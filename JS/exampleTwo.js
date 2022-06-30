function exampleTwo() {
    
    function one() {
        doWork()
    }

    async function two() {
        doWork()
        await sleep(500)
        doWork()
        await sleep(500)
        doWork()
    }

    one()
    return two()
}