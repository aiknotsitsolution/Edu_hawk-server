import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/authLogin/Login";
import Dashboard from "./Pages/authLogin/Dashboard";
import Layout from "./Component/Layout";
import ProtectedRoute from "./Component/ProtectedRoute";
import Createpost from "./Pages/Home/Createpost";
import ProductList from "./Pages/product/ProductList";
import ContactList from "./Pages/contact/Contact";
import TechCategory from "./Pages/technology/category";
import Technology from "./Pages/technology/technology";
import CategoryBlog from "./Pages/Home/category/category";
import Query from "./Pages/contact/query";
import Profile from "./Pages/authLogin/Profile";
import ForgotPassword from "./Pages/authLogin/ForgotPassword";
import ResetPassword from "./Pages/authLogin/ResetPassword";
import CreateNews from "./Pages/news/CreateNews";
import NewsList from "./Pages/news/NewsList";
import NewsCategory from "./Pages/news/NewsCategory";
// import Gallery from './Pages/gallery/Gallery';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Protected routes - wrapped with Layout */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/homepage" element={<Createpost />} />
            <Route path="/getpost" element={<ProductList />} />
            <Route path="/contact" element={<ContactList />} />
            <Route path="/query" element={<Query />} />

            <Route path="/techcategory" element={<TechCategory />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/blogcategory" element={<CategoryBlog />} />

            {/* News Module Routes */}
            <Route path="/create-news" element={<CreateNews />} />
            <Route path="/news-list" element={<NewsList />} />
            <Route path="/news-categories" element={<NewsCategory />} />

            {/* <Route path="/gallery" element={<Gallery/>}/> */}
          </Route>
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
