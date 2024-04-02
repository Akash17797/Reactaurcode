// api = https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json

import {useEffect, useState} from "react"



function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))  // in object we can access the key as object.key or the other way is object[key]
         
    }, [currency])          // useEffect(callback function, dependencies)
    console.log(data);
    return data
}

export default useCurrencyInfo;         // ye method pura ka pura function hi return kar deta hai