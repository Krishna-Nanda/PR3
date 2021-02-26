import React, { useState } from "react"
import './Table.css'

function Table() {
    return (
        <div>
            <table>
                <tr>
                    <th>Project Name</th>
                    <th>Details</th>
                </tr>
                <tr>
                    <td><a href="https://github.com/Krishna-Nanda/CS130A-PA_1">Perfect Hashing</a></td>
                    <td>Hashing Algorithim with no collisions.</td>
                </tr>
                <tr>
                    <td><a href="https://github.com/Krishna-Nanda/PA2">Graph Implementation</a></td>
                    <td>This is an implementation which maintains infomration about a weighted, undirected, graph where each node has an integer id and a skill vector..</td>
                </tr>
            </table>
            <button class="scrolltotopbtn">Back to Top</button>

        </div>
    )
}

export default Table