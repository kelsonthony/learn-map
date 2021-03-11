/**
 * Learn maps
 */
console.log('Learn map');


/**
 * how the for works
 */
console.log('Method For')
var arr = [1,2,3,4,5]

console.log('my arr', arr)

for(var i = 0; i < arr.length; i++) {
    console.log('my array with for', arr[i]);
}
console.log('my array after for', arr);


/**
 * how the forEach works
 */
console.log('Method forEach')  

var arr2 = [1,2,3,4,5]

var sum = 0;

console.log('my var sum before forEach', sum)

arr2.forEach(function(newItem) {
    //sum += newItem
    sum = newItem*10
    console.log('my var sum after forEach', sum)
})

console.log('my var sum after forEach again', sum)
console.log('forEach changes the original array')



/**
 * how the Map works
 * Map is a high order function
 */
 console.log('Method Map')  

 var arr3 = [1,2,3,4,5]

 console.log('my array before map', arr3)

 var myMap = arr3.map(function(item, index, array) {
    return item * 10;
 })

 console.log('my array after map', arr3)

 console.log('my Mymap', myMap)

 console.log('Can you see? my original array still the same', arr3)

