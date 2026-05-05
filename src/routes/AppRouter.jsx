import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Book from "../pages/Book";
import Checkout from "../pages/Checkout";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />

        {/* PUBLICAS */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/home" element={<Home />} />
        <Route path="/book/:id" element={<Book />} />

        {/*PRIVADAS */}
        <Route element={<PrivateRoute />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
