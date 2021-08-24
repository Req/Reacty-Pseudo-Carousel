import { useState, useReducer, useEffect } from "react";
import './App.css';

function chunk(array) {
    const result = []
    const chunkSize = 4;
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

function renderRecords(chunked, page) {
    return chunked.map((setOfRecords, i) => {
        const classes = "recordChunk " + (i === page ? "active" : "");
        return (
            <div className={classes} key={i}>
                <h2>Records page {i+1}</h2>
                {setOfRecords.map((record, j) => 
                    <div key={j}>
                        {record.artist}: {record.album}
                    </div>
                )}
            </div>
        )
    })
}

export default function Records() {
    const [page, setPage] = useState(0);
    const records = [
        { artist: "Tyler, the Creator", album: "Goblin 00000" },
        { artist: "Tyler, the Creator", album: "Goblin 69892" },
        { artist: "Tyler, the Creator", album: "Goblin 50165" },
        { artist: "Tyler, the Creator", album: "Goblin 82004" },
        { artist: "Tyler, the Creator", album: "Goblin 61336" },
        { artist: "Tyler, the Creator", album: "Goblin 53688" },
        { artist: "Tyler, the Creator", album: "Goblin 62372" },
        { artist: "Tyler, the Creator", album: "Goblin 29844" },
        { artist: "Tyler, the Creator", album: "Goblin 56144" },
        { artist: "Tyler, the Creator", album: "Goblin 63367" },
        { artist: "Tyler, the Creator", album: "Goblin 27514" },
        { artist: "Tyler, the Creator", album: "Goblin 74822" },
        { artist: "Tyler, the Creator", album: "Goblin 28073" },
        { artist: "Tyler, the Creator", album: "Goblin 8423x" },
        { artist: "Tyler, the Creator", album: "Goblin 37806" },
        { artist: "Tyler, the Creator", album: "Goblin 46442" },
        { artist: "Tyler, the Creator", album: "Goblin 99999" }
    ];
    const chunked = chunk(records);
    const firstPage = page > 0;
    const lastPage = page < chunked.length-1;
    return (
        <div>
            {lastPage ? <button onClick={() => setPage(page + 1)}>Next</button> : <button disabled>Next</button>}
            {firstPage ? <button onClick={() => setPage(page - 1)}>Prev</button> : <button disabled>Prev</button>}
            {renderRecords(chunked, page)}
        </div>
    )
}