import React from "react";
import { BodyBackGround, BoxContainer, Content } from "./modal.style";
function Modal(props) {
  return (
    <>
      {props.open && (
        <BodyBackGround>
          <BoxContainer>
            <Content>
              {props.children}
              </Content>
          </BoxContainer>
        </BodyBackGround>
      )}
    </>
  );
}

export default Modal;
