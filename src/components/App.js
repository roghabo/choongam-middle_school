import React from "react";
import AppRouter from "components/Router";

function App() {
  return (
    <>
      <AppRouter />
      <footer className="footer">
        <div>&copy; {new Date().getFullYear()} Jinyoung</div>
      </footer>
    </>
  );
}

export default App;
