import {React, useState} from "react";
import ArticleForm from "./ArticleForm";
import MyButtonModal from "./AddButtonModal";
import { Modal } from "antd";
import { addArticle, updateArticle } from "../Fire";

const ArticleModal = (props) => {
  const [title, setTitle] = useState(props.selectedArticle ? props.selectedArticle.title : "");
  const [content, setContent] = useState(props.selectedArticle ? props.selectedArticle.content : "");

  const handleSubmit = (e) => {
    let article = {
      "title": title,
      "content": content,
      createdAt: new Date(),
      "comments": []
    };
    if(props.selectedArticle) {
      // On récupère les valeurs initiales de l'article à modifier
      article.id = props.selectedArticle.id
      article.comments = props.selectedArticle.comments
      article.createdAt = props.selectedArticle.createdAt
      updateArticle(article)
    } else { // Sinon, il doit être créé
      addArticle(article)
      console.log(article)
    }
    // Ferme la modale
    props.handleClose()
  };
  return (
    <Modal
      className="article-modal"
      title="Rédiger un article"
      centerd="true"
      open={props.isArticleModalVisible}
      onCancel={props.handleClose}
      footer={
        <MyButtonModal
        content={"Valider"} onClick={handleSubmit} className="my-button-modal"></MyButtonModal>
      }
    >
      <ArticleForm title={title} content={content} setTitle={setTitle} setContent={setContent}>
      </ArticleForm>
    </Modal>
  );
};

export default ArticleModal;
