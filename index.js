const add = (input) => {
    if(input === ""){
        return 0
    }
    const regex = /^\/\/(.*?)\n/;
    const match = input.match(regex);

    let reg
    if(match){
        input = input.split("\n")[1]
        reg = new RegExp(`,|\\n|${match[1]}`)
    }else {
        reg = new RegExp(`,|\\n`)
    }

    if(input.split(reg).some(n => n < 0)){
        const negativeNumbers = input.split(reg).filter(n => n < 0).join(", ")
        console.log(negativeNumbers)
        throw new Error(`negative numbers not allowed ${negativeNumbers}`)
    }

    return input.split(reg).reduce((acc, curr) => {
        const currNum = Number(curr)
        if(currNum >= 1000){
            return acc
        }
        return acc + currNum
    }, 0)
}

module.exports = add