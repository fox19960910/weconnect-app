import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "@components/Loading";
// Supports weights 100-900
import '@fontsource-variable/public-sans';
const RootLayout = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootLayout;
