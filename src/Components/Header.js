import react from "react";

const styles = {
    container: {
        height: "8%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        background: "#323232ed",
    },
    social: {
        height: "35%",
        margin: "auto 10px auto 10px",
        opacity: "0.7"
    },
    socialContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "100%",
    },
    presentationContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "50%",
        height: "100%",
    },
    languaje: {
        height: "35%",
        margin: "auto 10px auto 10px",
        opacity: "0.7"
    },
    name: {
        fontSize: "1.3em",
        fontFamily: "sans-serif",
        color: "#bbbbbb",
    }
};

const Header = () => {
  return (
    <div style={styles.container}>
        <div style={styles.presentationContainer}>
            <img src="https://cdn-icons-png.flaticon.com/512/323/323365.png" style={styles.languaje}/>
            <img src="https://cdn-icons-png.flaticon.com/512/323/323329.png" style={styles.languaje}/>
        </div> 
        <div style={styles.socialContainer}>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" style={styles.social}/>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" style={styles.social}/>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174876.png" style={styles.social}/>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" style={styles.social}/>
      </div>
    </div>
  );
};

export default Header;
