import React from "react";

class Playlist extends React.Component
{
    render() {
        return (
            <div>
                <p> Плейлист</p>
                <table>
                    <tr>
                        <th>Испольнитель</th>
                        <th>Песня</th>
                        <th>Жанр</th>
                        <th>Год</th>
                    </tr>
                    <tr>
                        <td>The Kingston Trio</td>
                        <td>Toom Dooley</td>
                        <td>Folk</td>
                        <td>1958</td>
                    </tr>
                    <tr>
                        <td>Led Zeppelin</td>
                        <td>Kashmir</td>
                        <td>Rock</td>
                        <td>1975</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Playlist;
