import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK0IWKIuZQVSkAAd_LdeDeIGUqb3xezSo",
  authDomain: "blog-react-af6ea.firebaseapp.com",
  projectId: "blog-react-af6ea",
  storageBucket: "blog-react-af6ea.firebasestorage.app",
  messagingSenderId: "778712952419",
  appId: "1:778712952419:web:53fd27390747b7d9045256",
  measurementId: "G-QMRY4W8J3B",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getArticles = (callback) => {
  const q = query(collection(db, "articles"), orderBy("createdAt", "desc"));
  onSnapshot(q, (snapshot) => {
    let articles = [];
    snapshot.forEach((doc) => {
      articles.push({ id: doc.id, ...doc.data() });
    });
    callback(articles);
  });
};

export const addArticle = (article) => {
  addDoc(collection(db, "articles"), article);
};

export const updateArticle = (article) => {
  updateDoc(doc(db, "articles", article.id), article);
};

export const deleteArticle = (article) => {
  deleteDoc(doc(db, "articles", article.id));
};
