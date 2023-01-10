import React from "react";
import { CalenderHead, Wrapper } from "./styled.js";

export const Calender = () => {
  return (
    <Wrapper>
      <CalenderHead>
        <i class="fa-solid fa-chevron-left"></i>
        <p>Oct 22</p>
        <i class="fa-solid fa-chevron-right"></i>
      </CalenderHead>
    </Wrapper>
  );
};
