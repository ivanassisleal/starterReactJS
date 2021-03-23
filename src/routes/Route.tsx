import React from 'react';
import {
    Route as ReactDOMRoute,
    RouteProps as ReactDOMRouteProps,
    Redirect
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import Private from '../layouts/Private';
import Public from '../layouts/Public';

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component:Component, ...rest }) => {

    const { user } = useAuth();

    const Layout = isPrivate ? Private : Public;

    return (
        <ReactDOMRoute 
            {...rest} 
            render={()=>{
                return isPrivate === !!user ? (
                    <Layout>
                        <Component/>
                    </Layout>
                ) : (
                    <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }}/>
                )
            }} />
    );
}

export default Route;