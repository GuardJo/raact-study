import React from "react";
import DeleteModalContent from "./DeleteModalContent";
import createModalProvider from "./createModalProvider";

export const CONFIRM_DELETE_MODAL = 'confirn_delete';

const CONTENT_MAP = {
    [CONFIRM_DELETE_MODAL]: DeleteModalContent,
};

export default createModalProvider(CONTENT_MAP);