import { useNavigate } from "react-router-dom";
import Cancel from "../assets/svgs/btns/cancel.svg";

const Modal = ({ children, onDeleteStory, padding }) => {
  const navigate = useNavigate();

  const onCancel = () => {
    onDeleteStory && onDeleteStory();
    navigate(-1);
  };

  return (
    <div className="modal">
      <img src={Cancel} alt="exit" className="cancel" onClick={onCancel} />
      <div className="modal-container" data-padding={padding ? true : padding}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
