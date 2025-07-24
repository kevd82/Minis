import React, {useEfffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const CreateMini = (props)=>{

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [imageTwo, setImageTwo] = useState("");
  const [company, setCompany] = useState("");
  const [line, setLine] = useState("");
  const [code, setCode] = useState("");
  const [year, setYear] = useState("");
  const [sculptor, setSculptor] = useState("");
  const [painted, setPainted] = useState(false);
  const [painter, setPainter] = useState("");
  const [notes, setNotes] = useState("");
  const [wishlist, setWishlist] = useState(false);











    return(
        <div>

          <header>
            <h1>Create New Miniature</h1>
            <Link to = "/"> Return Home </Link>
          </header>
        </div>
    )



}
export default CreateMini;