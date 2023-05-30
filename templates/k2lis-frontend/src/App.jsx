import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import NormalLayout from "./layouts/NormalLayout";
import ErrorBoundary from "./utils/ErrorBoundary";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <NormalLayout>
              <Suspense fallback={<h1>Loading ...</h1>}>
                <ErrorBoundary>
                  <LandingPage />
                </ErrorBoundary>
              </Suspense>
            </NormalLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
