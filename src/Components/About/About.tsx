import { Box, Typography } from "@mui/material";

interface aboutprops {
    componentRef: React.RefObject<HTMLElement>
}

export default function About(props:aboutprops){
    return(
        <Box sx={{backgroundColor:"#641E16"}} ref={props.componentRef}>
            <Typography variant="h1">
                About
            </Typography>
        </Box>
    )
}