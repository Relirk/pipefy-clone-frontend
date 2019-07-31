import styled from "styled-components";

export const Container = styled.div`
  height: 90px;
  min-width: 100em;
  padding: 0 30px;
  background: #3b5bfd;
  color: #fff;
  position: fixed;
  z-index: 9;

  display: flex;
  align-items: center;
`;

export const GoHome = styled.a`
  height: 90px;
  width: 140px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: all 0.2s ease;
  -webkit-transition-delay: 0s;
  -webkit-transition: all 0.2s ease false;
  transition: all 0.2s ease false;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    -webkit-transition: background 0.2s ease;
    -webkit-transition-delay: 0s;
    -webkit-transition: background 0.2s ease false;
    transition: background 0.2s ease false;
  }

  img {
    border: 0;
  }
`;
