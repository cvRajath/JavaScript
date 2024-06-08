let n=5
for(let i=1;i<=n;i++){
    let c=""
    for(let j=1;j<=n*2-i;j++){
        if((i==j) ||(i==1)||(j==n*2-i) ){
            c+="*"
        }else{
            c+=" "
        }
    }console.log(c)
}