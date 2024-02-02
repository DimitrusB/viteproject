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
    line-height: normal;
  }
`;

export const Search__form = styled.form`
  max-width: 1044px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 590px) {
    margin-left: 10px;
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
  @media screen and (max-width: 590px) {
    display: inline-block;
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 30px;
    background-color: #ffffff;
    padding: 5px 17px;
    font-size: 14px;
    line-height: 21px;
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
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 20px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &:hover {
    background-color: #0080c1;
  }
  @media screen and (max-width: 590px) {
    display: none;
  }
`;

export const divWeather = styled.div`
  display: flex;
  justify-content: center;
`;

export const cityBox = styled.div`
  border-radius: 30px;
  background: #d9d9d9;
  width: 200px;
  height: max-content;
`;

export const customTemp = styled.div`
  border-radius: 30px;
  background: #d9d9d9;
  width: 720px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const weatherToday = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

export const windandOther = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

export const errorStatus = styled.p`
  color: red;
  font-size: smaller;
  align-self: start;
  margin-left: 135px;
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
