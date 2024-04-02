import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",

    // the below ones are optional
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

   const amountInputId = useId()  // do not call useId to generate keys in the list. keys should be generated from your data

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/*/ ye upar wali css {} mei isliye likhi hui hai kyunki hum user se className mei CSS maang rhe hai agar user dena chahta hai toh... taki hu wo yha update kar ske */}

            <div className="w-1/2 ">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 "
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}  // this is optional
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}   //Imp-study this
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
            {/* jab bhi jsx ke andar hum loop lagate hai toh uske andar hume compulsory ek key pass karni hoti hai better optimisation and performance ke liye. Nhi use karte hai toh react rokega nhi bt warning de dega, bt performance bahot degrade ho jaegi */}

                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;