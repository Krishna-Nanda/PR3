function Tab(props) {
    return (
        <li onClick={() => props.changeActiveTab(props.tabtoset)}><a class={"navlink " + (props.activeTab == props.tabtoset ? "activePage" : "")} >{props.tabtoset}</a></li>
    )
}

export default Tab