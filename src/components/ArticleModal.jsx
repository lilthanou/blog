import {React, useState} from "react";
import ArticleForm from "./ArticleForm";
import MyButton from "./AddButton";
import { Modal } from "antd";

const ArticleModal = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleOk = () => {
    props.handleOk();
    alert(`Titre: ${title} \n Contenu: ${content}`);
  };
  return (
    <Modal
      title="Rédiger un article"
      centerd="true"
      open={props.isArticleModalVisible}
      onCancel={props.handleCancel}
      footer={
        <MyButton
        content={"Valider"} onClick={handleOk}></MyButton>
      }
    >
      <ArticleForm title={title} content={content} setTitle={setTitle} setContent={setContent} >
      </ArticleForm>
    </Modal>
  );
};

export default ArticleModal;
