import React from "react";
import Text from "../04/Text";
import CustomBotton from "../04/CustomBotton";
import { Consumer } from "./ModalContext";

export default function ({productName}) {
    return (
        <Consumer>
            {({closeModal}) => (
                <div>
                    <div>
                        <Text>{productName}을 삭제하시겠습니까?</Text>
                    </div>
                    <CustomBotton primary>예</CustomBotton>
                    <CustomBotton onPress={closeModal}>닫기</CustomBotton>
                </div>
            )}
        </Consumer>        
    );
}