import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import Genrate from "./pages/Generate";
import MyGeneration from "./pages/MyGeneration"
import YtPreview from "./pages/YtPreview"
import Login from "./components/Login"

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/generate" element={<Genrate />} />
                <Route path="/generate/:id" element={<Genrate />} />
                <Route path="/my-generation" element={<MyGeneration />} />
                <Route path="/preview" element={<YtPreview />} />
                <Route path="/login" element={<Login/>} />
            </Routes>
            <Footer />
        </>
    );
}