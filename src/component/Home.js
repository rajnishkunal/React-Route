import { useNavigate } from "react-router-dom";

function Home(){
    const navigate=useNavigate();
    function clickHandler(){
        console.log(navigate);
        navigate("/about");
    }
    function backHandler(){
        navigate(-1);
    }
    return (
        <div>
        <div>This is Home page</div>
        <button onClick={clickHandler}>Go To About</button>
        <button onClick={backHandler}>Go Back</button>
        </div>
        
    );
}
export default Home;