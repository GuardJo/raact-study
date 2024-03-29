import React, { PureComponent } from "react";
import { Provider } from "./ModalContext";
import Modal from "./Modal";

export default function (ContentMap = {}) {
    return class ModalProvider extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {showModal: false};
            this.handleClose = this.handleClose.bind(this);
            this.handleOpen = this.handleOpen.bind(this);
        }

        handleClose() {
            this.setState({showModal: false});
        }

        handleOpen(contentId) {
            this.contentId = contentId;
            this.setState({showModal: true});
        }

        render() {
            const {children} = this.props;
            const {showModal} = this.state;
            const ModalContent = ContentMap[this.contentId];

            return (
                <Provider value={{
                    openModal: this.handleOpen,
                    closeModal: this.handleClose
                }}>
                    {children}
                    {showModal && ModalContent && (
                        <Modal>
                            <ModalContent/>
                        </Modal>
                    )}
                </Provider>
            );
        }
    };
}