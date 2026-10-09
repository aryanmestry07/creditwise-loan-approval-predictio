function Navbar(props){
    return (
        <nav>
            <h2>{props.title}</h2>
        </nav>
    );
}

export default Navbar;  // allows other files to use this component 