import "./App.css";
import { useState, useEffect, React } from "react";
import { getArticles } from './Fire';
import { Spin, Card } from 'antd';
import MyButton from "./components/AddButton";
import ArticleModal from "./components/ArticleModal";

function App() {
  const [isArticleModalVisible, setIsArticleModalVisible] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles(posts => {
      setArticles(posts)
      setLoading(false)
      console.log(posts);
    })
  }, [])

  return (
    <>
      <div className="root">
        <div className="top">
          <div className="box">C</div>
          <div className="box">O</div>
          <div className="box">D</div>
          <div className="box">E</div>
        </div>

        <div className="title">
          <h1>Bienvenue sur mon blog</h1>
        </div>

        <MyButton
          onClick={() => setIsArticleModalVisible(true)}
          isArticleModalVisible={() => isArticleModalVisible}
          content={"Ajouter un article"}
        ></MyButton>
        {isArticleModalVisible && <ArticleModal
          isArticleModalVisible={isArticleModalVisible}
          handleOk={() => setIsArticleModalVisible(false)}
          handleCancel={() => setIsArticleModalVisible(false)}
        />}
        {/* Si 'loading' est à 'true', affiche un icône de chargement */} 
      {loading ? ( <Spin size="large" /> ) : (
        articles.map(article => (
          <Card
            key={article.id}
            title={article.title}
            bordered={false}
            style={{ width: 300 }}
          >
            <p>{article.content}</p>
          </Card>
        ))
      )}
      </div>
    </>
  );
}
export default App;
