import React, { useState } from "react";
import Modal from "../../component/modal/modal";
import { AiOutlineClose } from "react-icons/ai";
import { SigninContent } from "./signin.style";
import { RiLoginCircleFill } from "react-icons/ri";
import { signinAction } from "../../action/auth/authAction";
import { useDispatch } from "react-redux";

function Signin() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => setOpenModal(true)}>open modal</button>
      <Modal open={openModal} setOpen={setOpenModal}>
        <AiOutlineClose
          size={30}
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            cursor: "pointer",
          }}
          onClick={() => setOpenModal(false)}
        />
        <SigninContent>
          <div>ล็อคอินเข้าสู่ระบบ</div>
          <hr />
          <RiLoginCircleFill size={120} style={{ color: "#4caf50" }} />
          <div className="signinZone">
            <input placeholder="Username" />
          </div>
          <div className="signinZone">
            <input placeholder="Password" />
          </div>
          <div className="loginButton">
            <button onClick={() => {dispatch(signinAction())}}>ล็อคอินเข้าสู่ระบบ</button>
          </div>
        </SigninContent>
      </Modal>
    </div>
  );
}

export default Signin;
