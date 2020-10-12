import React from "react";
import ReactPlayer from "react-player";

export default () => (
  <section id="home" className="home">
    <div className="title__container">
      <h1 className="home__title">2020학년도 함께 걷는 시조 동무 시화전</h1>
    </div>
    <div className="video__container">
      <ReactPlayer
        className="video__player"
        playing
        loop
        controls
        width="50%"
        height="50%"
        url={require("assets/video2.mp4")}
      />
    </div>
    <div className="greeting__container">
      <h1 className="greeting__title">‘함시동’ 시조 시화전 초대의 글</h1>
      <div className="greeting__description-container">
        <div className="greeting__description">
          ‘함시동(함께 걷는 시조 동무)’의 시조 시화전에 모십니다. 고려시대부터
          오늘까지 이어지는 까닭은 우리 민족의 얼이 담겨 있기 때문일 것입니다.
          코로나 바이러스는 충암중학교 ‘함시동’에 새로운 계기를 마련해
          주었습니다. 온라인 전시회가 앞으로도 오프라인 전시회와 함께 계속되기를
          희망합니다. ‘함시동’ 회원들과 지도하시는 선생님들이 준비한 시조 시화를
          감상하시면서 이들의 앞날을 응원해 주시면 고맙겠습니다.
        </div>
        <div className="greeting__description-date">
          <span>2020년 10월 21일 인문사회부장 조장희 올림</span>
        </div>
      </div>
    </div>
  </section>
);
