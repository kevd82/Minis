import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const AllMinis = (props)=>{

    const [miniList, setMiniList] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/minis")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setMiniList(res.data);
        })
        .catch((err)=>console.log(err))

    }, [])










    return(
        <div>

            mini list stuff

            {
                miniList.map((mini, index)=>(
                    <div key={mini._id}>
                        <p>{mini.name}</p>
                        <p>{mini.company}</p>
                    </div>
                ))
            }

        </div>
    )



}
export default AllMinis;