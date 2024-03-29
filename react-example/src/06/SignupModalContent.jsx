import React from "react";
import { Consumer } from "./ModalContext";
import Text from "../04/Text";
import Input from "../03/Input";
import CustomBotton from "../04/CustomBotton";

export default function() {
    return (
        <Consumer>
            {({closeModal}) => (
                <div>
                    <div>
                        <Text>회원가입</Text>
                        <Input label='이메일' name='email'></Input>
                        <Input label='이름' name='name'></Input>
                        <Input label='비밀번호' name='password'></Input>
                    </div>
                    <CustomBotton primary>가입하기</CustomBotton>
                    <CustomBotton onPress={closeModal}>닫기</CustomBotton>
                </div>
            )}
        </Consumer>
    );
}