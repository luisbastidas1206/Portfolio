const styles = {
  container: {
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 1px 3px #C8CCD8",
    margintop:"0%"
  },
  typography: {
    color: "#7C00EA",
    marginLeft: "6%",
  },
  buttonContainer: {
    marginLeft: "auto",
    Button:{
      justifyContent: "center",
        alignItems: "center",
        margin: "1%",
        color: "#7C00EA",
        // backgroundColor: "#1E1C4E",
        // borderRadius: "10px",
        // boxShadow: "0 5px 5px #C8CCD8",
        "&:hover": {
            color: "white",
            backgroundColor: "#7C00EA"
        }
    },
    display:"flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export { styles };