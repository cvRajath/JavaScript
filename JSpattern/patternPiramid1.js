//  piramid

let n=5
for(let i=1;i<=n;i++){
    let c=""
let space=n-i
   for(let j=1;j<=space;j++){
       c+=" "
   }
   for(let k=1;k<=i*2-1;k++){
       c+="*"
   }
   console.log(c)
}
