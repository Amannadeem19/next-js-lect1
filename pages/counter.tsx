import { useEffect, useState } from "react";
import Link from 'next/link'
const Counter = ()=>{

    const [counter, setCounter] = useState<number>(0)

    // componentlife cyle using function
    // mount -> render(using props, setState) -> didmount -> didUpdate -> unmount -> didUnmount   
    // 1.    any update it will work
    // useEffect(()=>{
    //     console.log('any update this useEffect work');
        
    // })

    // 2. any specific variable update it will work 
    // useEffect(()=>{
    //     console.log('useEffect counter', counter);
        
    // }, [counter])
    // 3. whenever the component is mount 
    // useEffect(()=>{
    //     console.log('counter component is mounted');
        
    // },[])

    // unmount run when the specific component destroy and new component mounted
    useEffect(()=>{
        // should work on return statement 
        return ()=> {console.log('unmounted');
        }
        
    })

    const increment = ():void=>{
        setCounter(counter + 1);
    }
    const decrement = ():void=>{
        if(counter > 0){
        setCounter(counter - 1);
        }
    }
    return (
        <>
        <h1>Counter:{counter} </h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <Link href="/blog">Blog</Link>
        </>
    );
}
export default Counter;
