import React, {Component} from "react";


class Timer extends Component {

    constructor (props){
        super(props)
        this.state = {
            count:0
        }
    }
 render (){
    const {count} = this.state

    return (
        <div>

<h1  style={{color: "white"}}>
    Current Count: {count}
</h1>
        </div>
    )
 }
}
export default Timer