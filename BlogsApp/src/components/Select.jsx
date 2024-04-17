import React, {useId} from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {options?.map((option) => ( // options se hme waise toh array hi milta hai but agar koi bhi error aajaye toh usse handle karne ke liye humne map use kiya taaki array hi mile hme
            // also agar hum directly options ko use karte toh error aata kyuki agar options null hota toh uspe map nhi chalta isliye humne ? use kiya hai taaki agar options null hota toh map na chale
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div> 
  )
}

export default React.forwardRef(Select)

// Input.jsx mei hmne React.forwardRef upar use kiya tha jha function start hua tha n yha hmne neeche select kiya hai.