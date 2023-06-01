import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./Styles";
import img from "../../assets/pngegg.png";

interface HomeProps {
  componentRef: React.RefObject<HTMLElement>;
}

const Home: React.FC<HomeProps> = (props) => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const showDelay = 7000; // 7 segundos de retraso antes de mostrar la imagen
    const showDuration = 100; // 0.5 segundos de duración de visualización de la imagen

    const interval = setInterval(() => {
      setShowImage(true); // Mostrar la imagen
      setTimeout(() => {
        setShowImage(false); // Ocultar la imagen después de la duración de visualización
      }, showDuration);
    }, showDelay + showDuration);

    return () => {
      clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    };
  }, []);

  return (
    <Box
      sx={{ ...styles.container, textAlign: "center", position: "relative" }}
      marginTop={2}
    >
      {showImage && (
        <Box
          component="img"
          src={img}
          alt="img"
          position="absolute"
          sx={{ width: "100%", height: "100%", objectFit: "cover", left: 0,}}
        />
      )}
      <Typography variant="h1" sx={{ color: "#F7FF00" }} ref={props.componentRef}>
        ¡Bienvenido a mi portfolio!
      </Typography>
      <Typography variant="h3" sx={{ ...styles.typography, margin: "7%" }}>
        Aquí encontrarás una muestra de mi trabajo y mi pasión por el desarrollo web. Espero que disfrutes explorando mis proyectos y descubriendo lo que puedo ofrecer. ¡No dudes en contactarme si tienes alguna pregunta o si estás interesado en colaborar!
      </Typography>
    </Box>
  );
};

export default Home;