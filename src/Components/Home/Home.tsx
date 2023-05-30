import { Box, Typography } from "@mui/material";
import { styles } from "./Styles";

interface homeprops {
    componentRef: React.RefObject<HTMLElement>
}

export default function Home(props:homeprops) {
    return (
        <Box sx={styles.container} marginTop={2} ref={props.componentRef}>
            <Typography variant="h1" sx={{color: "#F7FF00"}} >
                ¡Bienvenido a mi portfolio!
            </Typography>
            <Typography variant="h3" sx={styles.typography}>
                Aquí encontrarás una muestra de mi trabajo y mi pasión por el desarrollo web. Espero que disfrutes explorando mis proyectos y descubriendo lo que puedo ofrecer. ¡No dudes en contactarme si tienes alguna pregunta o si estás interesado en colaborar!
            </Typography>
        </Box>
    )
}