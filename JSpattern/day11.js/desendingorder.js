let arr=[1,8,4,3,5];
let limit=arr.length
let temp=""
 for(let i=0;i<limit;i++){
     for(let j=i+1;j<limit;j++){
         if (arr[i]<arr[j]){
             temp=arr[i]
             arr[i]=arr[j]
             arr[j]=temp
         }
     }
 }console.log(arr)