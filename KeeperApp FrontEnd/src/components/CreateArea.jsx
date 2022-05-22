import React, {useState} from "react";
import {Fab, Zoom} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
    const [note, setNote] = useState({
        createDate:"",
        title: "",
        content: ""
    });
    const [isExpanded, setIsExpanded] = useState(false);

    function handleChange(e) {
        const {name, value} = e.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    //TODO: Implement edit and sign in functionality
    function submitNote(e) {
        if (note.title !== "" && note.content !== "") {
            props.onAdd(note)
            setNote({
                createDate: "",
                title: "",
                content: ""
            })
        }
        if(note.title !=="") {
            setIsExpanded(preVal => setIsExpanded(!preVal));
        }
        // expand();
        if (e !== null) {
            e.preventDefault();
        }
    }

    function expand() {
        // setIsExpanded(preVal=>setIsExpanded(!preVal));
        setIsExpanded(true);
    }

    function closeEle() {
        let ele = document.querySelector(".create-note")
        if(note.content === ""){
            setIsExpanded(preVal => setIsExpanded(!preVal));
        }
        submitNote(null);
    }

    return (
        <div onFocus={expand} onBlur={closeEle}>
            <form className="create-note">
                {isExpanded && (
                    <input
                        onChange={handleChange}
                        name="title"
                        placeholder="Title"
                        value={note.title}
                        onClick={()=>{setIsExpanded(true)}}
                    />
                )}
                <textarea
                    onChange={handleChange}
                    name="content"
                    placeholder="Take a note..."
                    value={note.content}
                    rows={isExpanded ? 3 : 1}
                    // onClick={expand}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}><AddIcon/></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
