export function flatten(inputArray: any[]): any[] {

  if(!Array.isArray(inputArray)){
    throw new TypeError("Function only accepts type arrays as a parameter.");
  }

  let flatArray: any[] = [];  

  inputArray.forEach((element: number | any[]) => {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(flatten(element));
    } 
    else {
      flatArray.push(element);
    }
  });

  return flatArray; 
}