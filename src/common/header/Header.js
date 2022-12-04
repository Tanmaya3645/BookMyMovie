import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const Header = () => {
  const [modal, setModal] = useState({
    modalOpen: false,
    value: 0,
    username: "",
    loginPassword: "",
  });

  const openModalHandler = () => {
    setModal({
      modalOpen: true,
      value: 0,
      username: "",
      loginPassword: "",
    });
  };

  const closeModalHandler = () => {
    setModal({ modalOpen: false });
  };

  return (
    <div>
      <header>
        <img src={logo} className="logo" alt="Logo" />

        <div className="login-btn">
          <Button
            variant="contained"
            color="default"
            onClick={openModalHandler}
          >
            Login
          </Button>
        </div>
        <div className="bookshow-btn">
          <Button
            variant="contained"
            color="primary"
            onClick={openModalHandler}
          >
            Book Show
          </Button>
        </div>
      </header>
      <Modal
        ariaHideApp={false}
        isOpen={modal.modalOpen}
        contentLabel="Login"
        onRequestClose={closeModalHandler}
        style={customStyles}
      >
        <Tabs className="tabs">
          <Tab label="Login" />
        </Tabs>

        {modal.value === 0 && (
          <div className="modal-style">
            <FormControl required>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input id="username" type="text" username={modal.username} />
            </FormControl>
            <br />
            <br />
            <FormControl required>
              <InputLabel htmlFor="loginPassword">Password</InputLabel>
              <Input
                id="loginPassword"
                type="password"
                loginpassword={modal.loginPassword}
              />
            </FormControl>
            <br />
            <br />
            <Button variant="contained" color="primary">
              LOGIN
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Header;