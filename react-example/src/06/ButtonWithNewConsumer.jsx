import React from "react";
import { Consumer } from "./LoadingProviderWithNewContext";
import CustomBotton from "../04/CustomBotton";

export default ({children}) => {
    return (
        <>
            <Consumer>
                {(contextValue) => (
                    <CustomBotton onPress={() => contextValue.setLoading('loading', !contextValue.loading)}>
                        {contextValue.loading ? 'loading...' : children}
                    </CustomBotton>
                )}
            </Consumer>
            <Consumer children={({loading2 = false, setLoading}) => (
                <CustomBotton onPress={() => setLoading(!loading2)}>
                    {loading2 ? 'loading...' : children}
                </CustomBotton>
            )}
            />
            <Consumer children={({loading = false, loading2= false, setLoading}) => (
                <CustomBotton onPress={() => setLoading(!loading)}>
                    {loading && loading2 ? 'loading...' : children}
                </CustomBotton>
            )}
            />
        </>
    );
}