import React from "react";
import DeleteModalContent from "./DeleteModalContent";
import createModalProvider from "./createModalProvider";
import SignupModalContent from "./SignupModalContent";

export const CONFIRM_DELETE_MODAL = 'confirn_delete';
export const SIGN_UP_MODAL = 'signup';

const CONTENT_MAP = {
    [CONFIRM_DELETE_MODAL]: DeleteModalContent,
    [SIGN_UP_MODAL]: SignupModalContent,
};

export default createModalProvider(CONTENT_MAP);