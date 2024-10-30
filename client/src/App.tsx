import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
    <main className="container">
      <Outlet />
    </main>
      <Footer />
    </div>
  )
}

export default App





































// // import { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Home from './pages/Home';
// // import Product from './pages/Product';
// // import Cart from './pages/Cart';
// // import CustomerForm from './pages/CustomerForm';
// // import './App.css'

// // import Bavbar
// // import returns from other pages

// import Navbar from './components/Navbar.tsx';
// import ProductList from './components/ProductList.tsx';

// function App() {
//   //const [count, setCount] = useState(0)


//     /* 
//         <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>

//     // OLD RETURN CODE
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} /> 
//         <Route path="/product/:id" element={<Product />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/customer-form" element={<CustomerForm />} />
//       </Routes>
//     </Router>
//     */

//    // return a react fragment without a parent element div
//   return (

//     <div>
//     <header>
//       <h1>Website Header</h1>
//       <p>logo</p>
//     </header>

//     <main>
//       <h2>Product Cards</h2>
//       <p>Product card navigation bar = Category A | Category B etc...</p>
//       <p><Navbar /></p>
//       <div>
//         <p>Product cards list</p>
//         <p><ProductList /></p>
//       </div>
//     </main>

//     <footer>
//       <p>Website Footer &copy; 2024</p>
//     </footer>
//     </div>


//   )
// }

// export default App
