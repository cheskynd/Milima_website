import React from "react";
import { Button } from '@material-ui/core'
import { withStyles, WithStyles } from "@material-ui/styles"

const styledButton = withStyles({
    root: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        borderRadius: "#4f25f7",
        color: "#fff",
        transform: "none",
        boxShadow: "background .3s, border-color .3s, color .3s",
        "&:hover":{backgroundcolor:"4f25f7"},
    },
    label:{textTransform: 'capitalize'},
})(Button);

function CustomBtn(props){
    return(
        <styledButton varient ='contained'> {props.text} </styledButton>
    )
}
export default CustomBtn