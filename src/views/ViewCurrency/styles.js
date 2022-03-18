import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #222;
  width: 100vw;
  padding-top: 150px;
  min-height: 100vh;
  font-family: 'Trebuchet MS', sans-serif;
`;

export const Body = styled.section`
  width: 100%;
  padding: 20px 60px;
  text-align: center;
  font-family: 'Courier New', monospace;
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.8rem;
 
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  color: #f9f9f9;
  font-family: Garamond, serif;
`;

export const Box = styled.div`
    border-radius:10px;
    font-family: 'Trebuchet MS', sans-serif;
`;

export const Input = styled.input`
    font-size: 16px;
    border-radius:5px;
`;

export const Button = styled.button`
    font-size:17px;
    font-family: Arial;
`;

