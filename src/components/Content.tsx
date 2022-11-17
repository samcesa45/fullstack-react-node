

type IContent={
   name:string,
   exercises:number
}

const Content=({name,exercises}:IContent)=>{
    
  return (
      <>
        <p>{name} {exercises}</p>
      </>
    )
}


export default Content