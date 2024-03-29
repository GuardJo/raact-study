import React, { Children } from "react";
import createLoadingConsumer from "./createLoadingConsumer";
import CustomBotton from "../04/CustomBotton";

const DefaultConsumer = createLoadingConsumer();
const Loading2Consumer = createLoadingConsumer('loading2');

export default function ButtonWithConsumer({children}) {
    return (
        <DefaultConsumer render={
            ({loading, setLoading}) => (
                <Loading2Consumer render={
                    ({loading: loading2}) => (
                        <CustomBotton onPress={() => setLoading(!loading)}>
                            {loading || loading2 ? 'loading...' : children}
                        </CustomBotton>
                    )
                }/>
            )
        }/>
    );
}