function insertionSort(numbers = []) {
    for (var i = 0; i < numbers.length; i++) {
        let j = i + 1;
        while (j > 0) {
            if (numbers[j] < numbers[j-1] ) {
                let temp = numbers[j-1];
                numbers[j-1] = numbers[j];
                numbers[j] = temp;
                j--;
            }
            else {
                break
            }
        }
    }
    return numbers
}

var result = insertionSort(numbersRandomOrder);
console.log(result);

/*****************************************************************************/

//Loop - i
//Nested Loop - i + 1?
//Swap!
// - Visualization with playing cards(scroll down):
https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
// - Array / bar visualization:
https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/