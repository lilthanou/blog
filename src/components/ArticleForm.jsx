import React from "react";
import { Input } from "antd";

export default function MyForm({ title, content, setTitle, setContent }) {

  const handleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "content":
        setContent(e.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <form>
      <label htmlFor="title">Titre</label>
      <Input
        placeholder="Le titre de mon article"
        aria-label="Titre"
        name="title"
        onChange={handleChange}
        value={title}
      />
      <label htmlFor="content">Contenu</label>
      <Input.TextArea
        placeholder="Le contenu de mon article ..."
        aria-label="Contenu"
        name="content"
        onChange={handleChange}
        value={content}
      />
    </form>
  )
}