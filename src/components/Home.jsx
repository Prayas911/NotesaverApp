import React, { useEffect, useState } from "react";
import "./Home.css";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";


const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch()
  const allPastes = useSelector((state) => state.paste.pastes)
  useEffect(() => {
      if(pasteId){
        const paste = allPastes.find((p) => p._id === pasteId);
         setTitle(paste.title);
         setValue(paste.content)
      }
    
    }, [pasteId])

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId ||
            Date.now().toString(35),
      createdAt:new Date().toISOString(),      
    }

    
    

    if(pasteId){
         // update
         dispatch(updateToPastes(paste));


    }
    else{
      // create
      dispatch(addToPastes(paste));

    }

    // after creation or updation 
    setTitle('');
    setValue('');
    setSearchParams({});


  }

  return (
    <div>
      <div className="div-1">
        <input
          className="title-container"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className="paste-button" onClick={createPaste}>
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>

      <div className="div-2">
        <textarea
          className="textarea-container"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
