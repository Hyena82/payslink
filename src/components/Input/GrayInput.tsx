import Image from "next/image";
import styled from "styled-components";
import { notification } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Wrapper = styled.div`
  position: relative;

  .input-text {
    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    background-color: rgba(37, 37, 37, 1);
    padding: 15px 22px;
    outline: none;
    border-radius: 10px;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: #fff;
    width: 100%;
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &::placeholder {
      color: rgba(92, 92, 92, 1);
    }

    &:focus {
      border-color: #40a9ff; /* Ant Design's focus border color */
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2); /* Ant Design's focus shadow */
    }

    &.is-copy-input {
      padding-right: calc(22px + 25px);
    }
  }

  .copy-image {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

interface GrayInputProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  disabled?: boolean;
  isCopyInput?: boolean;
}

const GrayInput: React.FC<GrayInputProps> = ({
  value,
  setValue,
  placeholder = "",
  disabled = false,
  isCopyInput = false,
}) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (pauseOnHover: boolean) => () => {
    api.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      showProgress: true,
      pauseOnHover,
    });
  };

  return (
    <Wrapper className={`${isCopyInput && "is-copy-input"} `}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="input-text"
        placeholder={placeholder}
        disabled={disabled}
      />

      {isCopyInput && (
        <CopyToClipboard text={value} onCopy={() => openNotification(true)}>
          <Image
            className="copy-image hover"
            src="/images/icons/copy.svg"
            width={25}
            height={25}
            alt=""
          />
        </CopyToClipboard>
      )}
    </Wrapper>
  );
};

export default GrayInput;
