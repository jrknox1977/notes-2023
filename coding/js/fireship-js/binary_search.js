function search(arr, target, start=0, end=arr.length-1) {
    console.log(start, end)

    if (start > end) {
        console.log('Not found!')
        return -1
    }

    const mid = Math.floor((start + end) / 2)

    if (arr[mid] === target) {
        console.log('Found!')
        return mid
    }

    if (arr[mid] > target) {
        return search(arr, target, start, mid - 1)
    }

    if (arr[mid] < target) {
        return search(arr, target, mid + 1, end)
    }
}

const arr = [45, 76, 21, 36, 80, 99, 110, 142, 31, 15, 6, 2, 1, 0]

console.log(search(arr, 1))