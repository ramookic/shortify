import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import PublicLayout from "./components/PublicLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Home from "./pages/dashboard/Home";
import Links from "./pages/dashboard/Links";
import Settings from "./pages/dashboard/Settings";
import Help from "./pages/dashboard/Help";

import Redirect from "./components/Redirect";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path=":shortUrl/*" element={<Redirect />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="not-found" element={<NotFoundPage />} />
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route
            path="app"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="links" element={<Links />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#059669",
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: "var(--color-red-700)",
            },
          },
          style: {
            fontSize: "15px",
            fontWeight: "500",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
