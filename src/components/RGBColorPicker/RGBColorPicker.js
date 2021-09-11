import React from 'react';

function RGBColorPicker({onChangeColor}) {
    return (
        <div>
            <form onSubmit={onChangeColor} className="color-form-container">
                <input type="number" placeholder="red" name="red"/>
                <input type="number" placeholder="green" name="green"/>
                <input type="number" placeholder="blue" name="blue"/>
                <button type="sumbit">Submit</button>  
            </form>
        </div>
    )
}

export default RGBColorPicker