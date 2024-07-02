const add = (input) => {
    if (input === "") {
        return 0;
    }

    const regex = /^\/\/(\[.*?\]|.)\n/;
    const match = input.match(regex);

    let reg;
    if (match) {
        let delimiters;
        if (match[1].startsWith('[')) {
            // Multiple delimiters
            delimiters = match[1]
                .slice(1, -1)
                .split('][')
                .map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        } else {
            // Single character delimiter
            delimiters = [match[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')];
        }
        input = input.split("\n")[1];
        reg = new RegExp(delimiters.join('|') + '|,|\\n');
    } else {
        reg = new RegExp(`,|\\n`);
    }

    const numbers = input.split(reg).map(Number);

    const negativeNumbers = numbers.filter(n => n < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(", ")}`);
    }

    return numbers.reduce((acc, curr) => {
        if (curr >= 1000) {
            return acc;
        }
        return acc + curr;
    }, 0);
};

module.exports = add;