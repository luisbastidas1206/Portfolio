import { Box, Typography } from "@mui/material";

interface projectsprops {
    componentRef: React.RefObject<HTMLElement>
}

export default function Projects(props:projectsprops){
    return(
        <Box sx={{backgroundColor:"#9933FF"}} ref={props.componentRef}>
            <Typography variant="h1">
                Projects
            </Typography>
        </Box>
    )
}