import React from "react";
import AppRouter from "components/Router";

function App() {
  return (
    <>
      <AppRouter />
      <footer className="footer">
        <div className="footer__names">
          <img src={require("assets/logo.png")} alt="logo" />

          <div>
            <div className="footer__content">
              학생: 조현근, 안성주, 이시안, 김준수, 강서현, 김지연, 강민서,
              김유원, 하서현, 이민영, 조은수, 이서윤, 임성연, 엄지후, 이효제,
              김재혁, 윤희상, 김민지
            </div>
            <div className="footer__content">
              지도교사: 조장희, 조성태, 성현정, 이주원, 최지혜, 박하은, 한다솜
            </div>
          </div>
        </div>
        <div className="jinyoung">
          &copy; {new Date().getFullYear()} Jinyoung
        </div>
      </footer>
    </>
  );
}

export default App;
