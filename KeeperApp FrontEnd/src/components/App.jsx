import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Axios from "axios";

function App() {
    const baseUrl = 'http://localhost:8080/noteKeeperApp/notes';
    const url = baseUrl + '?page=0&size=20';
    const [notes, setNotes] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchNotes()
    }, [])

    async function fetchNotes() {
        let fetchData;
        fetchData = await Axios.get(url).catch(() => {
            alert("Failed to connect to server");
        })
        setNotes(fetchData.data._embedded.notes);
        console.log(fetchData);
    }

    function addNote(newNote) {
        newNote = {
            ...newNote,
            createDate: getDate()
        }
        setNotes((prevNote) => {
            return [...prevNote, newNote];
        });
        console.log(newNote);
        Axios.post(url, newNote).catch(()=>{
            alert('Connect to server failed');
        });
    }

    function deleteNote(inputNoteId) {
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
                console.log(inputNoteId);
                return noteItem.noteId !== inputNoteId;
            })
        })
        Axios.delete(`${baseUrl}/${inputNoteId}`).catch(()=>{
            alert('Connection to server failed');
        });
    }

    //A function to getDate
    function getDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = `${yyyy}-${mm}-${dd}`;
        return today
    }

    return (
        <div>
            <Header/>
            <CreateArea onAdd={addNote}/>
            {notes.map((note, index) => {
                return <Note id={note.noteId} onDelete={deleteNote} key={index} title={note.title}
                             content={note.content}/>;
            })}
            <Footer/>
        </div>
    );
}

export default App;
