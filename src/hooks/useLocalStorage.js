import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue){

    // creating use state hook
    const [storedValue, setStoredValue]= useState(()=>{
        try{
            // get local storage value and update it
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch(err){
            console.log("error in switching theme",err);
            return initialValue;
        }
    });

    // using effect hook
    useEffect(()=>{
        try{
            const valueToString = typeof storedValue == 'function' ? setStoredValue(storedValue) : storedValue;
            window.localStorage.setItem(key, JSON.stringify(valueToString))
        }
        catch(err){
            console.log('error in use effect switch theme', err);
        }
    }, [key, storedValue]);
    return [storedValue, setStoredValue];
}

export default useLocalStorage;