import React, { useState } from 'react'

function Counter() {
	const [count, setCount] = useState(0);
	const [countOther, setCountOther] = useState(0);
	
	const increase = () => setCount(count + 1);
	const decrease = () => setCount(count - 1);
	
	const increaseOther = () => setCountOther(countOther + 1);
	const decreaseOther = () => setCountOther(countOther + 1);
	
	return (
			<>
				<div>Count: {count}</div>
				<button onClick={increase}>+</button>
				<button onClick={decrease}>-</button>

				<div>Count other: {countOther}</div>
				<button onClick={increaseOther}>+</button>
				<button onClick={decreaseOther}>-</button>
			</>
	)
}

export default Counter;