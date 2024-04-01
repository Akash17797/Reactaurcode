import { useEffect, useState} from "react";

function useCurrency(currency) // currency is the name of the variable
 {  const [data, setData] = useState({}) //useState has empty braces so that if we do not get any value then also the command can run and app does not crashes.
 useEffect(() => {
     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
     .then((res) => res.json()) // braces {} are not used here because, if braces are used then we have to return as well to get single output.
     .then((res) => setData(res[currency]))  // in this the value in (res) is in .json format
     console.log(data);
 }, [currency])  // currency is the dependency
 console.log(data);   // this console log is written to call the data so that we can access it
 return data
}

export default useCurrency;