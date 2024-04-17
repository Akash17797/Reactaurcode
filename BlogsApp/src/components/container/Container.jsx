import React from 'react'

function Container({children}) { // container mei hum styling ke components paas karenge taaki baad mei hum basic layout kahi bhi use kar sake
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  // agar return mei ek line ka code paas kar rhe hai toh parenthisis ki jarurat nhi hoti hai
}

export default Container
