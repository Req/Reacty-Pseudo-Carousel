import { useState } from "react";
import './App.css';

// "Chunk" - term often used for a part of data, let's say records 1-8 out of a total of 30
function chunk(array) {
    const result = []
    const chunkSize = 4;
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

// Extracting this just makes our Component a little bit shorter and easier to read for me
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
    // Which "page" of the carousel are we on
    const [page, setPage] = useState(0);

    // Data does not change for this demo
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

    // For a real carousel, you might want to change the pages automatically and style the buttons / content with CSS a little...
    return (
        <div>
            {lastPage ? <button onClick={() => setPage(page + 1)}>Next</button> : <button disabled>Next</button>}
            {firstPage ? <button onClick={() => setPage(page - 1)}>Prev</button> : <button disabled>Prev</button>}
            {renderRecords(chunked, page)}
        </div>
    )
}