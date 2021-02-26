import React, { useState } from 'react'
import Tab from './Tab'
function TabList(props) {
    console.log(props)
    function changeActiveTab(tab) {
        props.setActiveTab(tab)
    }
    const tabs = ["Text", "Image", "Video", "Table", "Email"]
    return (
        <div>
            <ul>
                {tabs.map(tab => {
                    return (
                        <Tab tabtoset={tab} activeTab={props.activeTab} changeActiveTab={changeActiveTab} />
                    )
                })}

            </ul>
        </div>
    )
}

export default TabList;