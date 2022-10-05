

type IButton={
text:string,
onClick:()=>void
}


const Button =({text,onClick}:IButton)=>{
    return <button  className="px-2 py-1 mt-2 ml-2 border rounded" onClick={onClick}>{text}</button>
}

export default Button