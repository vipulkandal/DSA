const linearSearch = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == num) {
        return i;
      }
    }
  
    return -1;
  };
  
  let arr = [2, 3, 4, 5, 6, 7, 8],
    num = 5;
  
  console.log("first", linearSearch(arr, num));