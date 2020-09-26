import React, { useEffect, useRef, useState } from 'react';

interface WindowData {
  width: number,
  height: number,
  isWideScreen: boolean
}


export const ResizeContext = React.createContext<WindowData>({width: 0, height: 0, isWideScreen: false})

const ResizeContextProvider = (props:any) => {

  const [state, setState] = useState<{}>({})

  useEffect(() => {    
    addResizeEvent()
    return () => {
      removeResizeEvent();  
    }
  }, [])

  function addResizeEvent(){
    window.addEventListener('resize', resizeHandler);
  }

  function removeResizeEvent(){
    window.removeEventListener('resize', resizeHandler);
  }


  function resizeHandler(event: any){ //ResizeEvent
    console.log(event);
  }



  return (
    <ResizeContext.Provider value={{width:0, height:0, isWideScreen:false}}>
      {props.children}
    </ResizeContext.Provider>
  );
};

export default ResizeContextProvider;



