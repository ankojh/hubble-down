function debounce(func: Function, timeInMS: number, contextThis?: any): Function {

  let timeoutID: NodeJS.Timer;
  
  return (...args: any) => {
    clearTimeout(timeoutID);
  
    timeoutID = setTimeout(() => {
      func.call(contextThis, ...args);
    }, timeInMS);
  
  }

}

export default debounce;