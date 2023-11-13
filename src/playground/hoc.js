import react from 'react'
import ReactDOM from "react-dom";

const info = (props) => {
    <div>
        <h1>Info</h1>
        <p>the info is : {props.info}</p>

    </div>
}

ReactDOM.render(<info info="there are the details" /> , document.getElementById('app'));