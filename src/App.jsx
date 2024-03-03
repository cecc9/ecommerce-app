import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import ProductsContextProvider from "./context/ProductsContext";
import CartContextProvider from "./context/CartContext";

function App() {
    return (
        <ProductsContextProvider>
            <CartContextProvider>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </CartContextProvider>
        </ProductsContextProvider>
    );
}

export default App;
