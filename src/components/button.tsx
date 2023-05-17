interface Props {
  buttonName: string;
  onClick: () => void;
  buttonType: string;
}

const Button = ({ buttonName, buttonType, onClick }: Props) => {
  return (
    <div className={buttonType} onClick={onClick}>
      {buttonName}
    </div>
  );
};
export default Button;
