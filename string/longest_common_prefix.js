function longestCommonPrefix(arr,n){
    if(n == 0) return -1
    let temp = arr[0]
    for(let i=1; i< n; i++){
        if(temp.length >= arr[i]){
            for(let j = 0; j < arr[i]; j++){
                if(temp.indexOf(arr[i]) > 0){
                    temp = arr[i]
                    break
                }else{
                    
                }
            }
        }else{
            for(let j = 0; j < temp.length; j++){
                
            }
        }
    }

}