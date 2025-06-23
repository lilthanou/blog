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
  apiKey: "AIzaSyAQeEGQei3WDoga0MYRBzu0vSWXjgUiq5U",
  authDomain: "blog-511fb.firebaseapp.com",
  projectId: "blog-511fb",
  storageBucket: "blog-511fb.firebasestorage.app",
  messagingSenderId: "654264125673",
  appId: "1:654264125673:web:467c468238b48246d10878"
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
