const add = (numbers) => {
    if(numbers === ""){
        return 0
    }
    return numbers.split(",").reduce((acc, curr) => acc+Number(curr), 0)
}

module.exports = add