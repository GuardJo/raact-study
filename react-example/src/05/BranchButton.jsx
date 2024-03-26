import React from "react";
import CustomBotton from "../04/CustomBotton";
import branch from "recompose/branch";

export default branch(
    ({isLoading}) => isLoading,
    () => () => <CustomBotton disabled>loading...</CustomBotton>
)(CustomBotton);