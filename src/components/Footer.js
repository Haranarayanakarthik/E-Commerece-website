import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <hr style={styles.hr} />
      <div style={styles.container}>
        <div style={styles.text}>
          <p style={styles.footerText}></p>
        </div>
        <div style={styles.socialIcons}>
          <a
            href="https://github.com/PoornaSandeepAnde"
            style={styles.iconLink}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              style={styles.icon}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/charan-lakkimsetti-744888258/"
            style={styles.iconLink}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              style={styles.icon}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    width: "100%",
    backgroundColor: "#7fffd4",
    padding: "10px",
  },
  // hr: {
  //   border: 0,
  //   height: "1px",
  //   backgroundColor: "#ccc",
  //   margin: "1rem 0",
  // },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    flex: 1,
    textAlign: "left",
  },
  footerText: {
    fontSize: "20px",
    color: "#555",
  },
  socialIcons: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconLink: {
    marginLeft: "15px",
  },
  icon: {
    width: "30px",
    height: "30px",
  },
};
