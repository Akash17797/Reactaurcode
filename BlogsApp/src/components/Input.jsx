import React, {useId} from 'react'

//yha hmne forwardRef ka use kiya hai jo ki react ke ek inbuilt hook hai uska kaam hota hai ki wo ek component ka reference kisi bhi dusre component mei pass kar deta hai taaki hum us component ko access kar ske.


const Input = React.forwardRef( function Input({
    label, // label hum isiliye dete hai taaki hume pta chl ske ki ye input field kis chiz ke liye hai koi hum ye input field kai jagah use karenge. 
    type = "text",
    className = "",
    ...props
}, ref){ // yha pe hmne a ref bhi paas kiyaa hai... 
    const id = useId() //useId ek custom hook hai jo ki ek unique id generate karta hai taaki hume kisi bhi input field ke liye unique id mil ske
    return (
        <div className='w-full'>
            {/* neeche waala code tabhi run hoga agar label paas hoga */}
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}> {/* htmlFor attribute use karte hum accessabilty ke liye and agar nhi smjh aata toh isse nhi bhi use kar skte hai */}
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}  // ye wapis aake smjhana hai
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input