import React from "react";

class Filter extends React.Component
{
    render() {
        return (
            <div>
                <p> Фильтр</p>
                <label for="performer">Испольнитель:</label>
                <select name="performer" id="performer">
                    <option value="mercury">John Mercury</option>
                    <option value="mike">Michael Jackson</option>
                    <option value="queen">Queen</option>
                    <option value="ledzepplin">Led Zeppelin</option>
                </select>
            </div>
        );
    }
}

export default Filter;
