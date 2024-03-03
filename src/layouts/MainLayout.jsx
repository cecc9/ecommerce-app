import { Toaster } from "sonner";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ModalContent from "../components/ModalContent/ModalContent";

import "./MainLayout.scss";

const MainLayout = ({ children }) => {
    return (
        <div className='container'>
            <Header />
            <ModalContent />
            {children}
            <Toaster richColors />
            <Footer />
        </div>
    );
};

export default MainLayout;
