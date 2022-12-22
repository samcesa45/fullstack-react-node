
type ICourse={
    name:string
}
const Header =({ name }:ICourse) => {
  return(
    <h1 className="font-bold text-2xl my-3">{name}</h1>
  )
}


export default Header