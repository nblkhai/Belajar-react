import React from "react";

const Component = () => {
    // penulisan function ada di dalam komponen
    const btnHandler = () => {
        alert("You Click Me!");
    };

    let hello = "testing";

    return (
        <div>
            {/* Nulisnya gak boleh --> penulisan salah btnHandler() */}
            <input onClick={btnHandler} type="button" value="ClickMe"/>
        </div>
    );
};

const NewScreen = () => {
    return (
    <div>
        <h1>Ini screen baru</h1>
        <Component/>
    </div>
    );
};

export default NewScreen;