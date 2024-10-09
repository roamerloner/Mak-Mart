import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

const Router = ({ allRoutes }) => {
  const routes = useRoutes([...allRoutes]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {routes || <div>Page not found</div>}
    </Suspense>
  );
};

export default Router;
