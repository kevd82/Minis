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
  const [wishList, setWishList] = useState(false);
  const [quantity, setQuantity] = useState("");


  const submitHandler = (e)=>{
      e.preventDefault();
      axios.post()
  }







    return(
        <div>

          <header>
            <h1>Create New Miniature</h1>
            <Link to = "/"> Return Home </Link>
          </header>

          <form onSubmit={submitHandler}>
            <div>
              <label>Name</label>
              <input value={name} onChange = {(e)=> setName(e.target.value)} type="text"/>
            </div>
            <div>
              <label>Image</label>
              <input value={image} onChange = {(e)=> setImage(e.target.value)} type="text" />
            
              <label>Image Two</label>
              <input value={imageTwo} onChange = {(e)=> setImageTwo(e.target.value)} type="text" />
            </div>
            <div>
              <label>Company</label>
              <input value={company} onChange = {(e)=> setCompany(e.target.value)} type="text" />
            
            
              <label>Line</label>
              <input value={line} onChange = {(e)=> setLine(e.target.value)} type="text" />
            
            
              <label>Code</label>
              <input value={code} onChange = {(e)=> setCode(e.target.value)} type="text" />
            </div>
            <div>
              <label>Year</label>
              <input value={year} onChange = {(e)=> setYear(e.target.value)} type="text" />
            </div>
            <div>
              <label>Sculptor</label>
              <input value={sculptor} onChange = {(e)=> setSculptor(e.target.value)} type="text" />
            </div>
            <div>
              <label>Painted?</label>
              <input checked={painted} onChange = {(e)=> setPainted(e.target.checked)} type="checkbox" />
            
              {
                (painted==true)?
                <div>
                <label>Painter: </label>
                <input value={painter} onChange = {(e) => setPainter(e.target.value)} type="text" />
                </div>
                :null
              }
            </div>
            <div>
              <label>Notes: </label>
              <input value={notes} onChange = {(e) => setNotes(e.target.value)} type="text" />
            </div>
            <div>
              <label>Wish List? </label>
              <input checked={wishList} onChange = {(e) => setWishList(e.target.checked)} type="checkbox" />
            </div>
            <div>
              <label>Quantity: </label>
              <input value={quantity} onChange = {(e) => setQuantity(e.target.value)} type="text" />
            </div>

            <button>Create New Mini</button>
            
          </form>

        </div>
    )



}
export default CreateMini;