import React, { useState } from "react";
import { dbService } from "fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Comment = ({ commentObj }) => {
  const [editing, setEditing] = useState(false);
  const [newComment, setNewComment] = useState(commentObj.text);
  const onDeleteClick = async () => {
    const ok = window.prompt("댓글을 삭제하시려면 비밀번호를 입력하세요");
    if (ok === commentObj.password) {
      await dbService.doc(`comments/${commentObj.id}`).delete();
    } else {
      window.confirm("비밀번호가 잘못되었습니다.");
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    const ok = window.prompt("댓글을 수정하시려면 비밀번호를 입력하세요");
    if (ok === commentObj.password) {
      await dbService.doc(`comments/${commentObj.id}`).update({
        text: newComment,
      });
      setEditing(false);
    } else {
      window.confirm("비밀번호가 잘못되었습니다.");
    }
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewComment(value);
  };
  return (
    <div className="comment">
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="commentEdit">
            <input
              type="text"
              placeholder="댓글을 수정하십시오"
              value={newComment}
              required
              autoFocus
              onChange={onChange}
              className="formInput"
            />
            <div class="btn__container">
              <input type="submit" value="댓글 수정" className="formBtn" />
              <span onClick={toggleEditing} className="formBtn cancelBtn">
                실행취소
              </span>
            </div>
          </form>
        </>
      ) : (
        <>
          <h4 className="comment__text">
            {commentObj.creator} : {commentObj.text}
          </h4>
          <div className="comment__actions">
            <span onClick={onDeleteClick}>
              <FontAwesomeIcon icon={faTrash} />
            </span>
            <span onClick={toggleEditing}>
              <FontAwesomeIcon icon={faPencilAlt} />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Comment;
