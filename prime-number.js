var num = 100
for(let i = 0; i <= num; i++){

    for(let j = 2; j<=i; j++){
        if(i%j=== 0 && i != j){
            break;
        }
        if(i === j){
            console.log(i)
        }
    }
}
