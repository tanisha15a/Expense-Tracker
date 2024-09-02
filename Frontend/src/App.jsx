import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Components/Home/HomePage";
import PublicNavbar from "./Components/Navbar/PublicNavbar";
import LoginForm from "./Components/Users/Login";
import { useSelector } from "react-redux";
import RegistrationForm from "./Components/Users/Register";
import PrivateNavbar from "./Components/Navbar/PrivateNavbar";
import AddCategory from "./Components/Category/AddCategory";
import CategoriesList from "./Components/Category/CategoriesList";
import UpdateCategory from "./Components/Category/UpdateCategory";
import TransactionForm from "./Components/Transaction/TransactionForm";
import Dashboard from "./Components/Users/Dashboard";
import UserProfile from "./Components/Users/UserProfile";
import AuthRoute from "./Components/Auth/AuthRoute";

function App() {
  //get the token

  const user = useSelector((state) => state?.auth?.user);

  return (
    <BrowserRouter>
      {/*Navbar*/}

      {user ? <PrivateNavbar /> : <PublicNavbar />}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route
          path="/add-category"
          element={
            <AuthRoute>
              <AddCategory />
            </AuthRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <AuthRoute>
              <CategoriesList />
            </AuthRoute>
          }
        />
        <Route
          path="/update-category/:id"
          element={
            <AuthRoute>
              <UpdateCategory />
            </AuthRoute>
          }
        />
        <Route
          path="/add-transaction"
          element={
            <AuthRoute>
              <TransactionForm />
            </AuthRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthRoute>
              <Dashboard />
            </AuthRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthRoute>
              <UserProfile />
            </AuthRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
