import React from "react";
export const Greeting = ({umer}) => {
    const [names, setNames] = React.useState([])
    React.useEffect(()=>{
        setNames(umer());
    },[umer])
    return  names.map((s)=><p>{s}</p>)
}
