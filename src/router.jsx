import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import Personal from "./pages/Personal";
import Firm from "./pages/firm";
import Device from "./pages/device";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/dashboard/Home";
import Analytics from "./pages/dashboard/analytics";
// import Onboarding from "../imports/Onboarding/Onboarding";
// import Onboarding1 from "../imports/Onboarding-1/Onboarding";
// import Onboarding2 from "../imports/Onboarding-2/Onboarding";
// import Dashboard from "../imports/Dashboard/Dashboard";
// import Analytics from "../imports/Analytics/Analytics";
// import Devices from "../imports/Devices/Devices";
// import Alerts from "../imports/Alerts/Alerts";
// import CollectionJobs from "../imports/CollectionJobs/CollectionJobs";
// import UserManagement from "../imports/UserManagement/UserManagement";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/onboarding",
                element: <Onboarding />,
                children: [
                    {
                        path: "/onboarding",
                        element: <Personal />
                    },
                    {
                        path: "/onboarding/firm",
                        element: <Firm />
                    },
                    {
                        path: "/onboarding/device",
                        element: <Device />
                    },

                ]
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "/dashboard",
                        element: <Home />,
                    },
                    {
                        path: "/dashboard/analytics",
                        element: <Analytics />,
                    }
                ]
            }

            //   { path: "onboarding-1", Component: Onboarding },
            //   { path: "onboarding-2", Component: Onboarding1 },
            //   { path: "onboarding-3", Component: Onboarding2 },
            //   { path: "dashboard", Component: Dashboard },
            //   { path: "analytics", Component: Analytics },
            //   { path: "devices", Component: Devices },
            //   { path: "alerts", Component: Alerts },
            //   { path: "jobs", Component: CollectionJobs },
            //   { path: "admin", Component: UserManagement },
        ],
    },
]);

export default router;