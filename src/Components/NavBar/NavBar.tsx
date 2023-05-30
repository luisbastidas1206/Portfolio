import { styles } from "./Styles";
import { Box, Button, Typography, AppBar, Toolbar } from "@mui/material";

interface navprops {
  homeScroll: () => void,
  aboutScroll: () => void,
  skillsScroll: () => void,
  projectsScroll: () => void,
  contactScroll: () => void,
}

export default function NavBar(props: navprops) {

  return (
    <AppBar position="sticky">
      <Toolbar sx={{...styles.container, bgcolor:"black"}}>
        <Box>
          <Typography variant="h4" sx={styles.typography}>
            Luis Bastidas
          </Typography>
        </Box>
        <Box sx={{ ...styles.buttonContainer, gap: "35px" }}>
          <Button onClick={props.homeScroll}>Inicio</Button>
          <Button onClick={props.aboutScroll}>About</Button>
          <Button onClick={props.skillsScroll}>Tecnologías</Button>
          <Button onClick={props.projectsScroll}>Proyectos</Button>
          <Button onClick={props.contactScroll}>Contactame</Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
}