// api = https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json

import {useEffect, useState} from "react" // called states from react to use them


//jaise app.jsx mei ek function hota hai jisme sabkuch hota hai waise hi yha ek function bnaya taaki use run kar ske

function useCurrencyInfo(currency){

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(res => res.json())
        .then((data) => setData(data[currency]))  // in object we can access the key as object.key or the other way is object[key] aur jo setdata hai wo kaam kar rha jo change value aaegi data[currency] se usko store karne mei
         
    }, [currency])          // useEffect(callback function, dependencies)
    console.log(data);
    return data   // jo variable humne liya data usko return kar rha hai ye
}

export default useCurrencyInfo;         // ye method pura ka pura function hi return kar deta hai taaki hum isko use kar ske as a hook.