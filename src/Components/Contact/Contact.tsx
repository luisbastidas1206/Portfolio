import { Box, Typography } from "@mui/material";

interface contactprops {
    componentRef: React.RefObject<HTMLElement>
}

export default function Contact(props:contactprops){
    return(
        <Box sx={{backgroundColor:"#3300FF "}} ref={props.componentRef}>
            <Typography variant="h1">
                Contact
            </Typography>
        </Box>
    )
}