import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CreditCard from "./components/CreditCard";
import CardList from "./components/CardList";
import CenteredButton from "./components/CenteredButton";
import HeroButton from "./components/Hero";
import Institutional from "./components/Institutional";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import "./App.scss";

import posts from "./data/posts";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Navbar handleCreateAcc={() => setShowModal(true)} />
      <HeroButton onClick={() => setShowModal(true)}>Abra sua conta</HeroButton>

      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton onClick={() => setShowModal(true)}>
        Abra sua conta
      </CenteredButton>

      <Institutional />
      <Faq />
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};

export default App;
