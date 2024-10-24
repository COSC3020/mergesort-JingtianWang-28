function mergeInPlace(array, left, middle, right) {
    let start2 = middle + 1;
    if (array[middle] <= array[start2]) {
        return;
    }
    while (left <= middle && start2 <= right) {
        if (array[left] <= array[start2]) {
            left++;
        } else {
            let value = array[start2];
            let index = start2;

            while (index != left) {
                array[index] = array[index - 1];
                index--;
            }
            array[left] = value;

            left++;
            middle++;
            start2++;
        }
    }
}

function mergesort(array) {
    let n = array.length;
    for (let curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
        for (let left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
            let mid = Math.min(left_start + curr_size - 1, n - 1);
            let right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);
            mergeInPlace(array, left_start, mid, right_end);
        }
    }
    return array;
}

