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

    return input.split(reg).reduce((acc, curr) => acc+Number(curr), 0)
}

add("//;\n1;2")

module.exports = add