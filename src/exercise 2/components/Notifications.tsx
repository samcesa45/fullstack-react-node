
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
        <li className="my-2 border-2 w-[50%] mx-auto p-2 bg-gray-100 border-green-400">
            {messages.success}
        </li>
        )
    }
   
    if(messages.error){
        return(
        <li className="text-red-500 w-[50%] mx-auto my-2 border-2 p-2 bg-gray-100 border-red-400">
            {messages.error}
        </li>
            
        )

    }


    return (
    <p>
       {messages.success || messages.error}  
    </p>
    )

}


export default Notification