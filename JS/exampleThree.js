function exampleThree() {

    function one() {
        doWork()
    }

    async function two() {
        await sleep(500)
        doWork()
        await sleep(500)
        doWork()
    }

    async function three() {
        await sleep(500)
        doWork()
        await sleep(500)
        doWork()
    }

    one()
    return [two(), three()]
}