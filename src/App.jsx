import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import AuthProvider from "./context/AuthProvider";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;