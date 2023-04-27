
const DisplayTodo = (props:any)=>{
    const {todo} : any = props;

    return(
        <p style={{ color : todo?.completed ? 'green' : 'blue'}}>
            {todo?.title}
        </p>
    )
}
export default DisplayTodo