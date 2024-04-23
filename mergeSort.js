function mergeSort(array) {
    if (array.length <= 1) {
        return array
    }
    else {
        let half = Math.floor(array.length / 2)
        let firstHalf = array.slice(0, half)
        let secondHalf = array.slice(half, array.length)

        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
}

function merge(firstHalf, secondHalf) {
    let sorted = []
    let firstIndex = 0
    let secondIndex = 0

    while (firstIndex < firstHalf.length && secondIndex < secondHalf.length) {
        if (firstHalf[firstIndex] < secondHalf[secondIndex]) {
            sorted.push(firstHalf[firstIndex])
            firstIndex++;
        }
        else {
            sorted.push(secondHalf[secondIndex]);
            secondIndex++;
        }
    }


    while (firstIndex < firstHalf.length) {
        sorted.push(firstHalf[firstIndex])
        firstIndex++;
    }

    while (secondIndex < secondHalf.length) {
        sorted.push(secondHalf[secondIndex])
        secondIndex++;
    }

    return sorted;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
