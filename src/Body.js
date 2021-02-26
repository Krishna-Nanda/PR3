import React, { useState } from "react"
import Text from './Text'
import Video from './Video'
import Image from './Image'
import Table from './Table'
import Email from './Email'

function Body(props) {
    return (
        <div className="bodyContainer">
            { props.activeTab == "Text" ? <Text /> : null}
            { props.activeTab == "Image" ? <Image /> : null}
            { props.activeTab == "Video" ? <Video /> : null}
            { props.activeTab == "Table" ? <Table /> : null}
            { props.activeTab == "Email" ? <Email /> : null}

        </div>
    )
}

export default Body