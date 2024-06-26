import { useState } from "react"


function App() {

  const [color, setColor] = useState("black")

  return (
    <div className="width: 100% h-screen duration-200"

      //className is nothing but class that we use to use in the vanilla CSS. Here in React as class is a already a used variable so we cannot use and hence we use className or idName intead of id and class

      style={{ backgroundColor: color }} // giving two curly braces is the syntax if we want to give the value in vanilla CSS and is used in this way only
    > 
    {/* why the above syntax was used: toh tailwind mei normal hum background color de skte hai bt use value nhi change kar paate kyunki wo react mei hum jaise {} is value store krwa ke karte wo tailwind mei compatible nhi hai n HTML mei style ko inject karte hai style = and jo bhi style dena hota.... yha bhi wahi hai. bs do brackett hai kyunki wo syntax hai  */}

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
        <div className="flex flex-wrap justify-center gap-3 font-bold shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button
          onClick={() => setColor("Red")} 
          // ab yha pe ques aa skta ki onclick hi tha toh direct setcolo kyunhi paas kiya. toh uska answer hai ki onclick ek callback function mangta hai. agar koi function bhi paas karte hai jaise setcolor toh usme hum values nhi paas kar paenge and agar setcolor() use kiya value paas karne ke liye toh function run hi ho jaega. isiliye ek function bnaya taaki usme setcolor ko run karke values paas kar ske.

          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Red"}}
          >Red</button>

          <button
          onClick={() => setColor("green")} //setColor is the conditions in which we enter the value that we want
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick={() => setColor("blue")} //setColor is the conditions in which we enter the value that we want
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>

          <button
          onClick={() => setColor("Purple")} //setColor is the conditions in which we enter the value that we want
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Purple"}}
          >Purple</button>

          <button
          onClick={() => setColor("Lavender")} //setColor is the conditions in which we enter the value that we want
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "Lavender"}}
          >Lavender</button>

          <button
          onClick={() => setColor("Grey")} //setColor is the conditions in which we enter the value that we want
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Grey"}}
          >Grey</button>

        </div>
      </div>
    </div>
  )
}


export default App