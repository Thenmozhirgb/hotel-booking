import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import routes from "./routes";
import LoginPage from "../login/LoginPage";
import AppLayout from "../AppLayout";
import RegisterPage from "../register/RegisterPage";
import HomePage from "../pages/home-page/HomePage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.REGISTER} element={<RegisterPage />} />
        <Route path={routes.ROOT} element={<AppLayout />}>
          <Route path={routes.ROOT} element={<HomePage />} />
        </Route>

        {/* <Route path={routes.JOB_DETAILS(":id")} element={<JobDetailsPage />} />
          <Route path={routes.JOB_UPDATE(":id")} element={<AddJobPage />} />
          <Route path={routes.APPLIED_JOB} element={<AppliedJobs />} />
          <Route path={routes.JOB_TYPE} element={<JobTypeComponent />} />
          <Route path={routes.APPLY_JOB(":id")} element={<AppliedJobs />} />
          <Route path={routes.PART_TIME} element={<PartTimeComponent />} />
          <Route path={routes.NOTIFICATION} element={<NotificationPage />} /> */}
        {/* <Route path={routes.LOGOUT} element={<LogoutPage />} /> */}
        {/* <Route
            path={routes.ROOT}
            element={
              <AuthenticatedRoute
                role={PortalUserRole.HRBP}
                fallbackRoute={routes.ROOT}
              >
                <AppLayout />
              </AuthenticatedRoute>
            }
          >
           
           
          </Route> */}
      </Routes>
    </Router>
  );
}
