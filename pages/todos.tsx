import { useEffect, useState } from "react"
import { DisplayTodo } from "@/components"
import useSWR from 'swr';

const fetcher = (url:string) : any => fetch(url). then (r => r.json());

const Todos = ()=>{
    const [todos, setTodos] = useState<any[]>([])
    const [item, setItem] = useState<string>('')
    const {data, isLoading , error} = useSWR('https://jsonplaceholder.typicode.com/todos',fetcher);
    console.log('Isloading', isLoading)
    console.log('data', data);
        
    useEffect (()=>{
        if (!isLoading) {
            setTodos([...data])
        }
            // callApi();
    }, [data, isLoading])
    // const callApi = (()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(json => setTodos([...json]))
    // })
    const addTodo = ():void=>{
            let obj : object = {
                    completed: false,
                    userId:1,
                    title: item,
                    id : todos?.length + 1,

            }
        todos.push(obj)
        setTodos([...todos])
        setItem('')
    }
    return (
        <>
        <h1>Todo</h1>
        <input placeholder="add task" onChange={(e)=> setItem(e?.target?.value)}
        value={item} />
        <button onClick={addTodo}>Add</button>
        {
            todos.map((v,i)=>{
                return(
                <DisplayTodo todo={v} key={i}/>
                )
            })
        }
        </>
    )
}

export default Todos