const arr = [1, 3, 5, 7] 

function sum(arr) {
    let total = 0
    for (let i = 1; i < arr.length; i++) {
        total += arr[i]
    }   
    return total
}

console.log(sum(arr))