
var arr=[0, 1, 2, 20, 77, 300];


 function lowHigh(arr) {
var oddNum = 0;
for (var i = 0; i< arr.length; i++){
	if (arr[i] % 2 !== 0){
		oddNum = arr[i]
	}

}
console.log(oddNum);
return arr[arr.length - 2]
}

lowHigh(arr);