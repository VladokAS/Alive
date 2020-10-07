import React, {useState} from "react";
import classes from "./NavigationItem.css";

const NavigationItem = (props) => {

    const [state, setState] = useState({
        active:false
    });


    const lineHandler = () => {
        setState(() => {
            return{
                active: !state.active
            }
        });
    };

    let lineStyle = {
        width: (state.active)? "100%":"0%"
    }

    return(
        <div onClick={lineHandler} className={classes.NavigationItem}>
            <span className={classes.text}>{props.label}</span>
            <div style={lineStyle} className={classes.line}></div>
        </div>
    );
};

export default NavigationItem;