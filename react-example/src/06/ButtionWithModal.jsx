import React, { PureComponent } from 'react';
import CustomBotton from '../04/CustomBotton';
import Modal from './Modal';
import Text from '../04/Text';

class ButtionWithModal extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { showModal: false};
    }

    render() {
        return (
            <>
                <CustomBotton onPress={() => this.setState({showModal: true})}>modal</CustomBotton>
                {this.state.showModal && (
                    <Modal>
                        <div>
                            <Text>모달 등장</Text>
                        </div>
                        <CustomBotton primary>예</CustomBotton>
                        <CustomBotton onPress={() => this.setState({showModal: false})}>닫기</CustomBotton>
                    </Modal>
                )}
            </>
        );
    }
}

export default ButtionWithModal;