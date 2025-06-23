import { React, useState } from "react";
import { Modal, Card, Input, Popconfirm } from "antd";
import MyButtonModal from "./AddButtonModal";
import { updateArticle } from "../Fire";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const CommentModal = (props) => {
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    let article = {};
    article.id = props.selectedArticle.id;
    article.title = props.selectedArticle.title;
    article.content = props.selectedArticle.content;
    article.createdAt = props.selectedArticle.createdAt;
    article.comments = props.selectedArticle.comments;
    article.comments.push(comment);
    updateArticle(article);
    setComment("");
  };
  const handleChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <Modal
        title={props.selectedArticle.title}
        centerd="true"
        open={props.isCommentModalVisible}
        onCancel={props.handleClose}
        footer={""}
        className="comment-modal"
      >
        <p>{props.selectedArticle.content}</p>
        <i>Commentaires :</i>

        <div className="comment-form">
          <Input
            type="text"
            value={comment}
            onChange={handleChange}
            placeholder="Ajouter un commentaire"
            className="content-input"
          />
          <MyButtonModal
            content={"Ajouter"}
            onClick={handleSubmit}
          ></MyButtonModal>
        </div>

        <div className="commentContainer">
          {props.selectedArticle.comments.map((comment, index) => (
            <div className="comment">{comment}</div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default CommentModal;
