import { Input } from "antd";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* border-width: 1px;
  --b: 1.4px;
  position: relative;
  color: #313149;
  display: block;
  margin: 10px;
  width: 450px;
  height: fit-content;
  position: relative;
  z-index: 0;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    z-index: -2;
    inset: 0;
    background: var(--c, linear-gradient(90deg, #0093fe 0%, #50ffd5 100%));
    padding: var(--b);
    border-radius: 10px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  } */

  .ant-input,
  & > :first-child {
    padding: 22px;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: rgba(157, 178, 191, 1);
    border-radius: 10px;

    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    background-color: rgba(37, 37, 37, 1);
  }

  .ant-input::placeholder,
  & > :first-child::placeholder {
    color: rgba(92, 92, 92, 1);
  }
  .ant-input-affix-wrapper .anticon.ant-input-password-icon {
    color: #fff;
  }

  .ant-input-outlined:focus-within,
  .ant-input:focus,
  .ant-input-outlined:hover,
  & > :first-child:focus {
    background-color: rgba(37, 37, 37, 1);
  }
`;

interface TextInputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  isPassword?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  onChange,
  value,
  placeholder,
  isPassword,
}) => {
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Wrapper>
      {isPassword ? (
        <Input.Password
          value={value}
          onChange={onChangeText}
          placeholder={placeholder}
        />
      ) : (
        <Input
          value={value}
          onChange={onChangeText}
          placeholder={placeholder}
        />
      )}
    </Wrapper>
  );
};

export default TextInput;
