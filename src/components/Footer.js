import React from 'react'

function About() {
    let footerStyle = {
        position: "fixed",
        backgroundColor: "#1d1d1d",
        alignItems: "center",
        color: "white",
        display: "flex",
        width: "100%",
        bottom: "0",
        left: "0",
        padding: "8px",
        margin: "auto"
    }

    let textParaStyle = {
        margin: "auto",
        cursor: "default"
    }
  return (
 <>
    <footer>
        <div className="box" style={footerStyle}>
            <p style={textParaStyle}>All Rights Reserved &copy;TextUtils.com</p>
        </div>
    </footer>
 </>
  )
}

export default About
