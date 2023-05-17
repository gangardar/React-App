import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  alertClass: string;
  onClose: () => void;
}

const Alert = ({ children, alertClass, onClose }: Props) => {
  return (
    <div className={alertClass}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
