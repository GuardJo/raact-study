import React, { PureComponent, createContext } from "react";
import Modal from "./Modal";
import Text from "../04/Text";
import CustomBotton from "../04/CustomBotton";

const {Provider, Consumer} = createContext({});
export {Consumer};

export default class ModalProvider extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {showModal: false};
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen() {
        this.setState({showModal: true});
    }

    handleClose() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <Provider value={{openModal: this.handleOpen, closeModal: this.handleClose}}>
                {this.props.children}
                {this.state.showModal && (
                    <Modal>
                        <div>
                            <Text>모달입니다</Text>
                        </div>
                        <CustomBotton primary>예</CustomBotton>
                        <CustomBotton onPress={() => this.setState({showModal : false})}>닫기</CustomBotton>
                    </Modal>
                )}
            </Provider>
        );
    }
}