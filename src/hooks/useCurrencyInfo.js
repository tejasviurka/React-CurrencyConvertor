// custom hook banana means function banana, hooks alwaysa return javascript
// custom hooks can use built in effect
// whenever ur using hooks just write use in front of the word
import {useEffect, useState} from "react"

// here i want to call api , we can do this by directly fetch, but we want when hooks load and someone use it then call api
function useCurrencyInfo(currency){
    // use effect can automatically do api call
    // use effect want 2 thing i.e callback{} and dependecies array[]
    
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}
export default useCurrencyInfo;
