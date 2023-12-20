var numberArr=[23,56,89,78,45,23];
var len=numberArr.length;
var i;
var sum=0;

for(i=0;i<len;i++){
    document.write('value'+i+'is:'+numberArr[i]+'<br>');
    sum=sum+numberArr[i];
}
document.write('sum is:'+sum);