import { storiesOf } from "@storybook/react";
import React from "react";
import Modal from "../06/Modal";
import CustomBotton from "../04/CustomBotton";
import Text from "../04/Text";
import ButtionWithModal from "../06/ButtionWithModal";

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
        <ButtionWithModal></ButtionWithModal>
    )
});