import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  background: linear-gradient(153deg, #fff 0.28%, rgb(70 97 115 / 47%) 178.65%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  font-family: Poppins;
  && h1 {
    font-size: 2.2em;
    line-height: 0.8;
  }
  && p {
    color: #292929;

    font-size: 20px;
    font-style: normal;
    font-weight: 600;
  }
`;

export const Search__form = styled.form`
  max-width: 1044px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    margin-left: auto;
    max-width: 1044px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
`;

export const Search__text = styled.input`
  width: 58%;
  height: 32px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: transparent;
  padding: 13px 19px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  &::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  :-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  ::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  ::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  ::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: 1024px) {
    display: inline-block;
    width: 100%;
    height: 32px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    background-color: transparent;
    padding: 13px 19px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  ::-webkit-input-placeholder {
    background-color: transparent;
    color: #b3b3b3;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
  :-ms-input-placeholder {
    background-color: transparent;
    color: #b3b3b3;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
  ::-ms-input-placeholder {
    background-color: transparent;
    color: #b3b3b3;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
  ::placeholder {
    background-color: transparent;
    color: #b3b3b3;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
`;

export const Search__btn = styled.button`
  margin-left: 10px;
  width: 125px;
  height: 34px;
  background: #d9d9d9;
  border-radius: 30px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  &:hover {
    background-color: #0080c1;
  }
  // @media screen and (max-width: 1024px) {
  //   display: none;
  // }
`;

export const divWeather = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const cityBox = styled.div`
  border-radius: 30px;
  background: #d9d9d9;
  width: 300px;
  height: auto;
  box-shadow: 9px 9px 10px rgb(95 97 135 / 50%);
`;

export const customTemp = styled.div`
  border-radius: 30px;
  background: #d9d9d9;
  width: 720px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: 9px 9px 10px rgb(95 97 135 / 50%);

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: auto;
  }
`;
export const weatherToday = styled.div`
  gap: 120px;
  display: flex;
  flex-direction: row;
  // flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  align-items: flex-start;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    gap: 40px;
  }
`;

export const windandOther = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "header header"
    "main main";
  justify-items: center;
  align-items: center;
`;

export const Header = styled.header`
  grid-area: header;
`;

export const Main = styled.main`
  grid-area: main;
`;

export const errorStatus = styled.span`
  color: red;
  font-size: smaller;
  align-self: start;
  margin-left: 135px;
  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const pTempMain = styled.span`
  font-family: Poppins;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(
    80deg,
    #292929 -2.93%,
    rgba(255, 255, 255, 0) 212.44%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const fiveDaysDiv = styled.div`
border-radius: 30px;
    background: #d9d9d9;
    width: 300px;
    height: max-content;
    box-shadow: 9px 9px 10px rgb(95 97 135 / 50%);
}`;

export const firstWind = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
