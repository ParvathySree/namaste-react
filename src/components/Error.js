 import { useRouteError } from "react-router-dom"

const Error = () =>{
    const error = useRouteError();
 return(
    <>
    <h1>OOPS!</h1>
    <h2>{error.status + " " + error.statusText}</h2>
    <h3>{error.error.message}</h3>
    </>
 )
 }

 export default Error;