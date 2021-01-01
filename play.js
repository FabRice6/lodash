arr = [1,2,3,45,6,7, 89];
size = 3

console.log(Math.ceil(arr.length/size))

const newArr = [];

for (let i = 0; i <= Math.floor(arr.length/size); i ++) {
    console.log(i)
    newArr.push(arr.splice(0, size))
}

newArr.push(arr)

console.log(newArr)