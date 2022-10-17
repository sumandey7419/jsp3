//For Loop

let val = 0;
let arr2 = [];

for(val = 0; val<5; val++){
    ip = prompt("Enter the Marks: ");
    arr2[val] = ip;

}
document.write("<br>"+arr2)

// While Loop
let count = 0;
let arr = [];

while(count<5){
    ip = prompt("Enter the Marks: ");
    arr[count] = ip;
    count++;

}
document.write(arr)




// While Loop

let count = 0;
let total = 0;
let arr = []

while(count<5){
arr[count]=parseInt(prompt("Enter the Value:"))
total = parseInt(total+arr[count])
count++
}
document.write(arr)
document.write("<br>"+total)
