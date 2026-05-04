import { Navigate } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";
import ShadowLoader from "./ShadowLoader";

function ProtectedRoute(
  { children }
) {
  const { user, isAuthReady } = useAuthStore();

  if ( !isAuthReady )
    return (
    <div className="h-screen w-screen flex justify-center items-center">
      <ShadowLoader />
    </div>
  ); // wait for refresh() to complete

  if (!user) return <Navigate to="/sign-in" replace />; // redirect to login/landing

  return children;
}

export default ProtectedRoute;
