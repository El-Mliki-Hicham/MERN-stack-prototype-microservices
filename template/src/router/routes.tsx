import path from 'path';
import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
const PostsIndex = lazy(() => import('../pages/posts/index'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <Index />,
        layout: 'default',
    },
    {
        path :"posts",
        element: <PostsIndex />,
        layout : 'default'
    }

];

export { routes };
