import './ViewPaste.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";


const ViewPaste = () => {

  const {id} = useParams();

  const allPastes = useSelector((state) => state.paste.pastes)

  const paste = allPastes.filter((p) => p._id === id)[0];
  return (
     <div>
      <div className="div-1">
        <input
          className="title-container"
          type="text"
          placeholder="Enter title here"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* <button className="paste-button" onClick={createPaste}>
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button> */}
      </div>

      <div className="div-2">
        <textarea
          className="textarea-container"
          value={paste.content}
          placeholder="Enter content here"
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default ViewPaste
