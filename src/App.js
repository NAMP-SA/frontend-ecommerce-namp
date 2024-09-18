import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AdminLayout from './layout/admin/AdminLayout';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import SubcategoryPage from './pages/SubcategoryPage';
import CategoryForm from './components/admin/category/AddCategoryModal';
import ClientLayout from './layout/client/ClientLayout';
import Home from './pages/client/Home';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout/>}>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="products" element={<ProductPage/>}/>
            <Route path="categories" element={<CategoryPage/>}/>
            <Route path="subcategories" element={<SubcategoryPage/>}/>
            <Route path="add-category" element={<CategoryForm/>}/>
          </Route>

          <Route path="/" element={<ClientLayout/>}>
            <Route path="home" element={<Home/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

