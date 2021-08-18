import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  FormCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "700px",
    width: "500px",
    overflowY: "auto",
    padding: "5%",
    textAlign: "center",
    borderRadius: "3%",
    backgroundImage: "linear-gradient(#7badb0, #bcbafc)",
    boxShadow: "1px 3px 8px 1px, -1px 2px 10px 2px",
    "& .button": {
      "&:hover": {
        backgroundColor: "red",
      },
    },
    "& .cta": {
      fontSize: "1rem",
    },
    "& .h3": {
      fontSize: "2rem",
      color: "#4974a5",
      textDecoration: "underline",
    },
    "& .text": {
      fontSize: "1rem",
      borderBottom: "1px solid black",
      marginBottom: "10px",
    },
    "& .textField": {
      margin: "10px 0px",
      borderRadius: "4px",
      "&:last-of-type": {
        marginBottom: "20px",
      },
    },
  },
}));

export default useStyles;
