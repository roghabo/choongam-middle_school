import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    backgroundColor: "#ffeaa7",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [modalIsOpen4, setIsOpen4] = useState(false);
  const [modalIsOpen5, setIsOpen5] = useState(false);
  const [modalIsOpen6, setIsOpen6] = useState(false);
  const [modalIsOpen7, setIsOpen7] = useState(false);
  const [modalIsOpen8, setIsOpen8] = useState(false);
  const [modalIsOpen9, setIsOpen9] = useState(false);
  const [modalIsOpen10, setIsOpen10] = useState(false);
  const [modalIsOpen11, setIsOpen11] = useState(false);
  const [modalIsOpen12, setIsOpen12] = useState(false);
  const [modalIsOpen13, setIsOpen13] = useState(false);
  const [modalIsOpen14, setIsOpen14] = useState(false);
  const [modalIsOpen15, setIsOpen15] = useState(false);
  const [modalIsOpen16, setIsOpen16] = useState(false);
  const [modalIsOpen17, setIsOpen17] = useState(false);
  const [modalIsOpen18, setIsOpen18] = useState(false);
  const [modalIsOpen19, setIsOpen19] = useState(false);
  const [modalIsOpen20, setIsOpen20] = useState(false);
  const [modalIsOpen21, setIsOpen21] = useState(false);
  const [modalIsOpen22, setIsOpen22] = useState(false);
  const [modalIsOpen23, setIsOpen23] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function openModal2() {
    setIsOpen2(true);
  }
  function closeModal2() {
    setIsOpen2(false);
  }
  function openModal3() {
    setIsOpen3(true);
  }
  function closeModal3() {
    setIsOpen3(false);
  }
  function openModal4() {
    setIsOpen4(true);
  }
  function closeModal4() {
    setIsOpen4(false);
  }
  function openModal5() {
    setIsOpen5(true);
  }
  function closeModal5() {
    setIsOpen5(false);
  }
  function openModal6() {
    setIsOpen6(true);
  }
  function closeModal6() {
    setIsOpen6(false);
  }
  function openModal7() {
    setIsOpen7(true);
  }
  function closeModal7() {
    setIsOpen7(false);
  }
  function openModal8() {
    setIsOpen8(true);
  }
  function closeModal8() {
    setIsOpen8(false);
  }
  function openModal9() {
    setIsOpen9(true);
  }
  function closeModal9() {
    setIsOpen9(false);
  }
  function openModal10() {
    setIsOpen10(true);
  }
  function closeModal10() {
    setIsOpen10(false);
  }
  function openModal11() {
    setIsOpen11(true);
  }
  function closeModal11() {
    setIsOpen11(false);
  }
  function openModal12() {
    setIsOpen12(true);
  }
  function closeModal12() {
    setIsOpen12(false);
  }
  function openModal13() {
    setIsOpen13(true);
  }
  function closeModal13() {
    setIsOpen13(false);
  }
  function openModal14() {
    setIsOpen14(true);
  }
  function closeModal14() {
    setIsOpen14(false);
  }
  function openModal15() {
    setIsOpen15(true);
  }
  function closeModal15() {
    setIsOpen15(false);
  }
  function openModal16() {
    setIsOpen16(true);
  }
  function closeModal16() {
    setIsOpen16(false);
  }
  function openModal17() {
    setIsOpen17(true);
  }
  function closeModal17() {
    setIsOpen17(false);
  }
  function openModal18() {
    setIsOpen18(true);
  }
  function closeModal18() {
    setIsOpen18(false);
  }
  function openModal19() {
    setIsOpen19(true);
  }
  function closeModal19() {
    setIsOpen19(false);
  }
  function openModal20() {
    setIsOpen20(true);
  }
  function closeModal20() {
    setIsOpen20(false);
  }
  function openModal21() {
    setIsOpen21(true);
  }
  function closeModal21() {
    setIsOpen21(false);
  }
  function openModal22() {
    setIsOpen22(true);
  }
  function closeModal22() {
    setIsOpen22(false);
  }
  function openModal23() {
    setIsOpen23(true);
  }
  function closeModal23() {
    setIsOpen23(false);
  }
  function afterOpenModal() {}

  return (
    <section id="poem" className="poem">
      <h2 className="poem__title">코로나</h2>
      <div className="poem__container">
        <div className="poem__card">
          <div className="poem__photo" id="p-10226" onClick={openModal}></div>
          <div className="poem__description">
            <h4 className="description__title">점심시간</h4>
            <h4 className="description__name">10226 조현근</h4>
          </div>
        </div>
        <div className="poem__card">
          <div className="poem__photo" id="p-10330" onClick={openModal2}></div>
          <div className="poem__description">
            <h4 className="description__title">코로나가 얄밉더라</h4>
            <h4 className="description__name">10330 이시안</h4>
          </div>
        </div>
        <div className="poem__card">
          <div className="poem__photo" id="p-10804" onClick={openModal3}></div>
          <div className="poem__description">
            <h4 className="description__title">표정</h4>
            <h4 className="description__name">10804 김지연</h4>
          </div>
        </div>
        <div className="poem__card">
          <div className="poem__photo" id="p-20104c" onClick={openModal4}></div>
          <div className="poem__description">
            <h4 className="description__title">어깨동무 등굣길</h4>
            <h4 className="description__name">20104 김유원</h4>
          </div>
        </div>
        <div className="poem__card">
          <div className="poem__photo" id="p-20915" onClick={openModal5}></div>
          <div className="poem__description">
            <h4 className="description__title">집 밖 풍경 속 마스크</h4>
            <h4 className="description__name">20915 임성연</h4>
          </div>
        </div>
        <div className="poem__card">
          <div className="poem__photo" id="p-30315" onClick={openModal6}></div>
          <div className="poem__description">
            <h4 className="description__title">한적한 오후 강가에 앉아서</h4>
            <h4 className="description__name">30315 윤희상</h4>
          </div>
        </div>
      </div>
      <h2 className="poem__title">가을</h2>
      <div className="poem__container">
        <div className="poem__card">
          <div className="poem__photo" id="p-20104f" onClick={openModal7}></div>
          <div className="poem__description">
            <h4 className="description__title">가을마당</h4>
            <h4 className="description__name">20104 김유원</h4>
          </div>
        </div>
        <div className="poem__card">
          <div className="poem__photo" id="p-21016" onClick={openModal8}></div>
          <div className="poem__description">
            <h4 className="description__title">가을맞이</h4>
            <h4 className="description__name">21016 이효제</h4>
          </div>
        </div>
      </div>
      <h2 className="poem__title">추억 및 일상</h2>
      <div className="poem__container">
        <div className="poem__card">
          <div className="poem__photo" id="p-10901" onClick={openModal9}></div>
          <div className="poem__description">
            <h4 className="description__title">바닷가</h4>
            <h4 className="description__name">10901 강민서</h4>
          </div>
        </div>
        <div className="poem__card">
          <div className="poem__photo" id="p-20618" onClick={openModal10}></div>
          <div className="poem__description">
            <h4 className="description__title">구름</h4>
            <h4 className="description__name">20618 하서현</h4>
          </div>
        </div>
        <div className="poem__card">
          <div className="poem__photo" id="p-20713" onClick={openModal11}></div>
          <div className="poem__description">
            <h4 className="description__title">가장 아름다운 샛별</h4>
            <h4 className="description__name">20713 이민영</h4>
          </div>
        </div>
        <div className="poem__card">
          <div className="poem__photo" id="p-20819" onClick={openModal12}></div>
          <div className="poem__description">
            <h4 className="description__title">장난감</h4>
            <h4 className="description__name">20819 조은수</h4>
          </div>
        </div>
        <div className="poem__card">
          <div className="poem__photo" id="p-30603" onClick={openModal13}></div>
          <div className="poem__description">
            <h4 className="description__title">양초</h4>
            <h4 className="description__name">30603 김민지</h4>
          </div>
        </div>
      </div>
      <h2 className="poem__title">사랑 및 우정</h2>
      <div className="poem__container">
        <div className="poem__card">
          <div className="poem__photo" id="p-10315" onClick={openModal14}></div>
          <div className="poem__description">
            <h4 className="description__title">친구</h4>
            <h4 className="description__name">10315 안성주</h4>
          </div>
        </div>
        <div className="poem__card">
          <div className="poem__photo" id="p-10507" onClick={openModal15}></div>
          <div className="poem__description">
            <h4 className="description__title">잔소리 사랑</h4>
            <h4 className="description__name">10507 김준수</h4>
          </div>
        </div>
        <div className="poem__card">
          <div className="poem__photo" id="p-30206" onClick={openModal16}></div>
          <div className="poem__description">
            <h4 className="description__title">물길</h4>
            <h4 className="description__name">30206 김재혁</h4>
          </div>
        </div>
      </div>
      <h2 className="poem__title">희망</h2>
      <div className="poem__container">
        <div className="poem__card">
          <div className="poem__photo" id="p-10801" onClick={openModal17}></div>
          <div className="poem__description">
            <h4 className="description__title">너를 위해</h4>
            <h4 className="description__name">10801 강서현</h4>
          </div>
        </div>
        <div className="poem__card">
          <div className="poem__photo" id="p-20913" onClick={openModal18}></div>
          <div className="poem__description">
            <h4 className="description__title">무지개</h4>
            <h4 className="description__name">20913 이서윤</h4>
          </div>
        </div>
        <div className="poem__card">
          <div className="poem__photo" id="p-21011" onClick={openModal19}></div>
          <div className="poem__description">
            <h4 className="description__title">이미 내게</h4>
            <h4 className="description__name">21011 엄지후</h4>
          </div>
        </div>
      </div>
      <h2 className="poem__title">2020 시화 전시회</h2>
      <div className="poem__container2">
        <div className="poem__card">
          <div className="poem__photo2" id="img1" onClick={openModal20}></div>
        </div>
        <div className="poem__card">
          <div className="poem__photo2" id="img2" onClick={openModal21}></div>
        </div>
        <div className="poem__card">
          <div className="poem__photo2" id="img3" onClick={openModal22}></div>
        </div>
        <div className="poem__card">
          <div className="poem__photo2" id="img4" onClick={openModal23}></div>
        </div>
      </div>

      <div>
        <Modal
          appElement={document.getElementById("10226")}
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/10226.png")}
            alt="10226"
          />
          <button className="modal__btn" onClick={closeModal}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("10330")}
          isOpen={modalIsOpen2}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal2}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/10330.png")}
            alt="10330"
          />
          <button className="modal__btn" onClick={closeModal2}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("10804")}
          isOpen={modalIsOpen3}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal3}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/10804.png")}
            alt="10804"
          />
          <button className="modal__btn" onClick={closeModal3}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("20104c")}
          isOpen={modalIsOpen4}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal4}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/20104c.png")}
            alt="20104c"
          />
          <button className="modal__btn" onClick={closeModal4}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("20915")}
          isOpen={modalIsOpen5}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal5}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/20915.png")}
            alt="20915"
          />
          <button className="modal__btn" onClick={closeModal5}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("30315")}
          isOpen={modalIsOpen6}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal6}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/30315.png")}
            alt="30315"
          />
          <button className="modal__btn" onClick={closeModal6}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("20104f")}
          isOpen={modalIsOpen7}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal7}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/20104f.jpg")}
            alt="20104f"
          />
          <button className="modal__btn" onClick={closeModal7}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("21016")}
          isOpen={modalIsOpen8}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal8}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/21016.png")}
            alt="21016"
          />
          <button className="modal__btn" onClick={closeModal8}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("10901")}
          isOpen={modalIsOpen9}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal9}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/10901.jpg")}
            alt="10901"
          />
          <button className="modal__btn" onClick={closeModal9}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("20618")}
          isOpen={modalIsOpen10}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal10}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/20618.png")}
            alt="20618"
          />
          <button className="modal__btn" onClick={closeModal10}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("20713")}
          isOpen={modalIsOpen11}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal11}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/20713.png")}
            alt="20713"
          />
          <button className="modal__btn" onClick={closeModal11}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("20819")}
          isOpen={modalIsOpen12}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal12}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/20819.png")}
            alt="20819"
          />
          <button className="modal__btn" onClick={closeModal12}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("30603")}
          isOpen={modalIsOpen13}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal13}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/30603.png")}
            alt="30603"
          />
          <button className="modal__btn" onClick={closeModal13}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("10315")}
          isOpen={modalIsOpen14}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal14}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/10315.png")}
            alt="10315"
          />
          <button className="modal__btn" onClick={closeModal14}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("10507")}
          isOpen={modalIsOpen15}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal15}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/10507.png")}
            alt="10507"
          />
          <button className="modal__btn" onClick={closeModal15}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("30206")}
          isOpen={modalIsOpen16}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal16}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/30206.png")}
            alt="30206"
          />
          <button className="modal__btn" onClick={closeModal16}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("10801")}
          isOpen={modalIsOpen17}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal17}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/10801.png")}
            alt="10801"
          />
          <button className="modal__btn" onClick={closeModal17}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("20913")}
          isOpen={modalIsOpen18}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal18}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/20913.png")}
            alt="20913"
          />
          <button className="modal__btn" onClick={closeModal18}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("21011")}
          isOpen={modalIsOpen19}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal19}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/21011.png")}
            alt="21011"
          />
          <button className="modal__btn" onClick={closeModal19}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("img1")}
          isOpen={modalIsOpen20}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal20}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/img1.jpeg")}
            alt="img1"
          />
          <button className="modal__btn" onClick={closeModal20}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("img2")}
          isOpen={modalIsOpen21}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal21}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/img2.jpeg")}
            alt="img2"
          />
          <button className="modal__btn" onClick={closeModal21}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("img3")}
          isOpen={modalIsOpen22}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal22}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/img3.jpeg")}
            alt="img3"
          />
          <button className="modal__btn" onClick={closeModal22}>
            닫기
          </button>
        </Modal>
        <Modal
          appElement={document.getElementById("img4")}
          isOpen={modalIsOpen23}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal23}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            className="modal__image"
            src={require("../assets/img4.jpeg")}
            alt="img4"
          />
          <button className="modal__btn" onClick={closeModal23}>
            닫기
          </button>
        </Modal>
      </div>
    </section>
  );
};
