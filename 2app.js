function insertionSort(arr) {
    // Loop through the array from the second element to the end
    for (let i = 1; i < arr.length; i++) {
        // Store the current element (the one we want to insert)
        let current = arr[i];
        
        // Start from the end of the sorted portion (i-1) and move left
        let j = i - 1;
        
        // Shift elements of the sorted portion of the array to the right
        // until we find the correct spot for the current element
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];  // Shift element to the right
            j--;
        }
        
        // Insert the current element into the correct position
        arr[j + 1] = current;
    }
    
    // Return the sorted array
    return arr;
}

// Example usage:
let array = [5, 2, 9, 1, 5, 6];
console.log("Original array:", array);
let sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
