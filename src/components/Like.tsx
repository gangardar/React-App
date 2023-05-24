interface Props {
  buttonType: string;
  onClick: () => void;
}

const Like = ({ onClick, buttonType }: Props) => {
  return (
    <>
      <div className={buttonType} onClick={onClick}>
        <span className="bi bi-heart"></span>
      </div>
    </>
  );
};

export default Like;
