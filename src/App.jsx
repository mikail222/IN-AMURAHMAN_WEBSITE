import "./App.css";
import Container from "./Container/Container";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState([]);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { collection, getDocs } = await import("firebase/firestore");
      const { db } = await import("./firebaseconfig");

      const collectionOfUser = collection(db, "Admin");

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
