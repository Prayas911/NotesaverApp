import React, { useState } from "react";
import "./Paste.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerms] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  return (
    <div >
      <input
        className="input-container"
        type="search"
        placeholder="Search pastes "
        value={searchTerm}
        onChange={(e) => setSearchTerms(e.target.value)}
      />
      <div className="cont-1">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className="cont-2" key={paste}>
                <div>{paste.title}</div>

                <div>{paste.content}</div>

                <div className="edit-container">
                  <button>
                    <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                  </button>

                  <button>
                    <a href={`/paste/${paste?._id}`}>View</a>
                  </button>

                  <button onClick={() => handleDelete(paste)}>Delete</button>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste.content);
                      toast.success("copied to clipboard");
                    }}
                  >
                    Copy
                  </button>

                  {/* <button>Share</button> */}
                </div>
                <div>{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
