import { Box, Typography } from "@mui/material";

interface skillsprops {
    componentRef: React.RefObject<HTMLElement>
}

export default function Skill(props:skillsprops){
    return(
        <Box sx={{backgroundColor:"#FF0099"}} ref={props.componentRef}>
            <Typography variant="h1">
                Skill
            </Typography>
        </Box>
    )
}