import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="lava-lamp">
        <div className="bubble" />
        <div className="bubble1" />
        <div className="bubble2" />
        <div className="bubble3" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;

  @keyframes drop {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(80px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .lava-lamp {
    position: relative;
    width: 60px;
    height: 120px;
    background: #000;
    border-radius: 30px;
    overflow: hidden;
  }

  .bubble, .bubble1, .bubble2, .bubble3 {
    position: absolute;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .bubble {
    background: linear-gradient(to bottom, #e64980, #ff8787);
    left: 15px;
    animation: drop 5s ease-in-out infinite;
  }

  .bubble1 {
    background: linear-gradient(to bottom, #82c91e, #3bc9db);
    left: 1px;
    animation: drop 3s ease-in-out infinite;
  }

  .bubble2 {
    background: linear-gradient(to bottom, #7950f2, #f783ac);
    left: 30px;
    animation: drop 4s ease-in-out infinite;
  }

  .bubble3 {
    background: linear-gradient(to bottom, #4481eb, #04befe);
    left: 20px;
    animation: drop 6s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    .lava-lamp {
      width: 50px;
      height: 100px;
    }

    .bubble, .bubble1, .bubble2, .bubble3 {
      width: 15px;
      height: 15px;
    }
  }
`;

export default Loader;
