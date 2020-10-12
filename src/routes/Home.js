import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Comment from "components/Comment";
import Video from "components/Video";
import Poem from "components/Poem";

const Home = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    dbService.collection("comments").onSnapshot((snapshot) => {
      const commentArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentArray);
    });
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    const {
      target: { nameinput, passwordinput },
    } = event;
    if (nameinput.value === "" || passwordinput.value === "") {
      window.confirm("이름과 비밀번호를 입력하세요");
    } else {
      await dbService.collection("comments").add({
        text: comment,
        createdAt: Date.now(),
        creator: name,
        password: password,
      });
      setComment("");
      setName("");
      setPassword("");
    }
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setComment(value);
  };
  const onChangeName = (event) => {
    const {
      target: { value },
    } = event;
    setName(value);
  };
  const onChangePassword = (event) => {
    const {
      target: { value },
    } = event;
    setPassword(value);
  };
  return (
    <main className="main">
      <Video />
      <Poem />
      <section className="comment__container">
        <h1 className="comment__title">방명록</h1>
        <form onSubmit={onSubmit}>
          <div className="comment__box">
            <div className="comment__input-container">
              <input
                className="comment__input"
                value={comment}
                onChange={onChange}
                type="text"
                placeholder="댓글달기"
                maxLength={120}
              />
              <input type="submit" value="&rarr;" className="comment__arrow" />
            </div>
            <div className="comment__user">
              <input
                value={name}
                onChange={onChangeName}
                type="text"
                placeholder="이름"
                maxLength={15}
                className="comment__name"
                name="nameinput"
              />

              <input
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder="비밀번호"
                maxLength={15}
                className="comment__password"
                name="passwordinput"
              />
            </div>
          </div>
        </form>
        <div>
          {comments.map((comment) => (
            <Comment key={comment.id} commentObj={comment} />
          ))}
        </div>
      </section>
    </main>
  );
};
export default Home;
