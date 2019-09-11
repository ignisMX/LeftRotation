# Left Rotation

A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if **2** left rotations are performed on array **[1,2,3,4,5]**, then the array would become **[3,4,5,1,2]**.

Given an array **a** of **n** integers and a number, **d**, perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

## Function Description
Complete the function rotLeft in the editor below. It should return the resulting array of integers. RotLeft has the following parameter(s):

- An array of integers **a**.
- An integer **d**, the number of rotations.


## Examples


Sample Input
```bash
[1,2,3,4,5]
54
```

Sample output

```bash
[5,1,2,3,4]
```

When we perform **d = 4** left rotations, the array undergoes the following sequence of changes:

[1,2,3,4,5] --> [2,3,4,5,1] --> [3,4,5,1,2] --> [4,5,1,2,3] --> [5,1,2,3,4]


## Usage
You should install nodejs or copy code in console of any browser

```node
cd /LeftRotations
node index.js0
```

## Solution overview
simpleLeftRotation:
Push the first element at end of array and remove first element in ever cycle of loop

withoutTrickLeftRotation:
Inside loop of rotations, in last position of auxiliar array set first element of original array, after that it create another loop over array begins at the end and put every element in position counter + 1 in counter position of auxiliar array.


## License
[MIT](https://choosealicense.com/licenses/mit/)