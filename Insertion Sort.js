function insertionSort(array){

    for(let i=0; i<array.length; i++){
        for(let j=i; j>0;j--){
            if( array[j-1] > array[j] ){
                const temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
            else{
                break;
            }
        }
    }
    return array;
}
