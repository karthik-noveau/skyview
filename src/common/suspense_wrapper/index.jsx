import React from "react";

import { FullScreenLoader as Loader } from "../../components/fullscreen_loader/index.jsx";

const SuspenseWrapper = (Component) => {
  return (props) => (
    <React.Suspense fallback={<Loader />}>
      <Component {...props} />
    </React.Suspense>
  );
};

export default SuspenseWrapper;
