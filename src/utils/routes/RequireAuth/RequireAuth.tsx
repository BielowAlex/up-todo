import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { useGetMeQuery } from "../../../core/api/userPrivateApi.ts";
import { userActions } from "../../../store";

// type Props = {
//   children: React.ReactNode;
// };
const RequireAuth: React.FC = () => {
  const location = useLocation();
  const { data, isSuccess, isError, refetch } = useGetMeQuery();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    refetch();

    if (data && isSuccess) {
      console.log(data);
      dispatch(userActions.setUser(data));
    }
  }, [data, dispatch, isSuccess, refetch]);

  if (isError) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return isSuccess && <Outlet />;
};

export { RequireAuth };
