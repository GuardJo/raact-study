import { storiesOf } from "@storybook/react";
import React from "react";
import Modal from "../06/Modal";
import CustomBotton from "../04/CustomBotton";
import Text from "../04/Text";
import ButtonWithModal from "../06/ButtonWithModal";
import ModalProvider, { Consumer } from "../06/ModalProvider";
import ModalProviderWithKey, { CONFIRM_DELETE_MODAL } from "../06/ModalProviderWithKey";
import { Consumer as ModalConsumer } from "../06/ModalContext";

storiesOf('Modal', module)
.addWithJSX('기본 설정', () => {
    return (
        <Modal>
            <div>
                <Text>정말로 삭제하시겠습니까?</Text>
            </div>
            <CustomBotton primary>예</CustomBotton>
            <CustomBotton secondary>닫기</CustomBotton>
        </Modal>
    );
})
.addWithJSX('Buttion 예시', () => {
    return (
        <ButtonWithModal></ButtonWithModal>
    );
})
.addWithJSX('ModalProvider 예시', () => {
    return (
        <ModalProvider>
            <div>
                <Text>모달 실행</Text>
                <Consumer>
                    {({openModal}) => <CustomBotton onPress={() => openModal()}>삭제</CustomBotton>}
                </Consumer>
            </div>
        </ModalProvider>
    );
})
.addWithJSX('ModalProvider With Key', () => {
    return (
        <ModalProviderWithKey>
            <div>
                <Text>버튼 클릭</Text>
                <ModalConsumer>
                    {({openModal}) => (
                        <CustomBotton onPress={() => openModal(CONFIRM_DELETE_MODAL)}>삭제 모달</CustomBotton>
                    )}
                </ModalConsumer>
            </div>
        </ModalProviderWithKey>
    )
});