import "./App.css";
import Container from "./Container/Container";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseconfig";

const App = () => {
  const [user, setUser] = useState([]);
  const [showNav, setShowNav] = useState(false);

  const collectionOfUser = collection(db, "Admin");
  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(collectionOfUser);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  return (
    <div>
      <Container user={user} showNav={showNav} setShowNav={setShowNav} />
    </div>
  );
};

export default App;

// background  image

// https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg
