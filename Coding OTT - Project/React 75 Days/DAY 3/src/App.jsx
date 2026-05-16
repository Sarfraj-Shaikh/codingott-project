const App = () => {

  return (

    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }}>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        flexDirection: "column",
      }}>

        <h1 style={{
          fontSize: "36px",
        }}>

          Hello, World!

        </h1>

        <p style={{
          fontSize: "16px",
          color: "#2b2b2b"
        }}>

          Built By Sarfraj Shaikh

        </p>

      </div>

    </div>
  )

};

export default App