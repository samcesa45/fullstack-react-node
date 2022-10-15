
type IMessages={
    error:string,
    success:string
}
type IProps={
    messages:IMessages,
    
}

const Notification=({messages}:IProps)=> {
    if(messages.error === null){
        return null;
    }
    if(messages.success === null ){
        return null;
    };

    if(messages.success) {
        return (
        <li className="my-2 border-2  p-2 bg-gray-100 border-green-400">
            {messages.success}
        </li>
        )
    }
   
    if(messages.error){
        return(
        <li className="text-red-500   my-2 border border-red-500 rounded p-2 bg-gray-300">
            {messages.error}
        </li>
            
        )

    }


    return (
    <ul className="grid">
       {messages.success || messages.error}  
    </ul>
    )

}


export default Notification