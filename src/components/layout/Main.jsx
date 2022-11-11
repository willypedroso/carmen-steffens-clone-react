import { RiH1 } from "react-icons/ri";

function Main(props) {
    return (
        <div className="flex justify-center flex-wrap">
            {props.mobile ?
            <h1>Mobile</h1> : <h1>PC</h1>}
        </div>
    )
};

export default Main;