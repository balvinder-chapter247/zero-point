import React from 'react';
import { Route } from 'react-router-dom';

export const RestrictRoute = (props) => {
    const { layout: Layout, component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(routeRenderProps) => (
                <Layout>
                    <Component {...routeRenderProps} />
                </Layout>
            )}
        />
    );
    
};
