import react from "react";

//!eg:1
const Home = (props) =>{
    let name = "chikodi";
    let salary = props.salary;

    return(
        <div>
            <h2>Home page</h2><br/>
            <h3>name</h3>
            <button>click me!!</button>
        </div>
    )
}
export default Home