import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Orders from "./pages/Orders"
import Hubs from "./pages/Hubs"
import Pricing from "./pages/Pricing"
import Forecast from "./pages/Forecast"
import Notifications from "./pages/Notifications"

import ProtectedRoute from "./routes/ProtectedRoute"

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* 🔥 PROTECTED ADMIN AREA */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

        <Route path="/orders" element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        } />

        <Route path="/hubs" element={
          <ProtectedRoute>
            <Hubs />
          </ProtectedRoute>
        } />

        <Route path="/pricing" element={
          <ProtectedRoute>
            <Pricing />
          </ProtectedRoute>
        } />

        <Route path="/forecast" element={
          <ProtectedRoute>
            <Forecast />
          </ProtectedRoute>
        } />

        <Route path="/notifications" element={
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        } />

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App