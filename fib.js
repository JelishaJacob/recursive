function fib(num) {
    let arr = [0, 1]
    if (num == 0) {
        arr[0]
    }
    else if (num == 1) {
        arr[0, 1]
    }
    else {
        for (let i = 2; i < num; i++) {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        }
        return arr
    }
}

console.log(fib(5));

// fib Recursive

function fibRecurse(num) {
    if (num <= 0) {
        return 0
    }
    else if (num == 1) {
        return [0, 1]
    }
    else {
        fibseq = fibonacciRecurse(num - 2)
        fibseq.push(fibseq[fibseq.length - 1] + fibseq[fibseq.length - 2])
        return fibseq
    }
}

console.log(fibRecurse(5));