import "./App.css";
import { useState, useEffect, React } from "react";
import { getArticles, deleteArticle } from "./Fire";
import { Spin, Input } from "antd";
import MyButton from "./components/AddButton";
import ArticleModal from "./components/ArticleModal";
import CommentModal from "./components/CommentModal";
import ArticleCard from "./components/ArticleCard";

function App() {
  const [isArticleModalVisible, setIsArticleModalVisible] = useState(false);
  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getArticles((posts) => {
      setArticles(posts);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="root">
        <header className="header">
          <h1>DECODE</h1>

          <div>
            <input
              type="text"
              placeholder="Rechercher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-bar"
            />
          </div>
        </header>

        <main>
          <MyButton
            onClick={() => {
              setIsArticleModalVisible(true), setSelectedArticle(null);
            }}
            isArticleModalVisible={() => isArticleModalVisible}
            content={"Ajouter un article"}
            className="add-button"
          ></MyButton>

          {isArticleModalVisible && (
            <ArticleModal
              selectedArticle={selectedArticle}
              isArticleModalVisible={isArticleModalVisible}
              handleSubmit={() => setIsArticleModalVisible(false)}
              handleClose={() => setIsArticleModalVisible(false)}
            />
          )}

          {isCommentModalVisible && (
            <CommentModal
              selectedArticle={selectedArticle}
              isCommentModalVisible={isCommentModalVisible}
              handleSubmit={() => setIsCommentModalVisible(false)}
              handleClose={() => setIsCommentModalVisible(false)}
            />
          )}

          <div className="card-container">
            {loading ? (
              <Spin size="large" />
            ) : (
              articles
                .filter(
                  (article) =>
                    article.title
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    article.content.toLowerCase().includes(search.toLowerCase())
                )
                .map((article) => (
                  <ArticleCard
                    key={article.id}
                    title={article.title}
                    content={article.content}
                    createdAt={article.createdAt}
                    style={{ width: 300 }}
                    handleEdit={() => {
                      setIsArticleModalVisible(true);
                      setSelectedArticle(article);
                    }}
                    handleDelete={() => {
                      setSelectedArticle(article), deleteArticle(article);
                    }}
                    handleComment={() => {
                      setSelectedArticle(article);
                      setIsCommentModalVisible(true);
                    }}
                    className="card"
                  ></ArticleCard>
                ))
            )}
          </div>
        </main>
      </div>
    </>
  );
}
export default App;
