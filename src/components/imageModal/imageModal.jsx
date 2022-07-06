import { Modal } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { Portal } from "../portal/portal";
import "./imageModal.scss";

export const ImageModal = (props) => {
  return (
    <Portal>
      <Modal
        size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.hide}
        show={props.show}
        className='imageModal'
      >
        <Modal.Body className="imageModalBody">
          <img src={props.imagesrc} />
          <div className="closeIcon" onClick={props.hide}>
            <IoClose size="1.5em" color="#495057" />
          </div>
        </Modal.Body>
      </Modal>
    </Portal>
  );
};
