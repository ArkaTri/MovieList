import React, { Children } from 'react';
import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route, Routes, createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Routing from './config/Routing';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';


// function App() {
//     return (
//         // <BrowserRouter>
//         //   <Routes>
//         //     {/* <Route>
//         //       <Header/>
//         //       <Routing/>
//         //       <Footer/>
//         //     </Route> */}
//         //    {/* <Route path='/' element={<Header/>}/>
//         //    <Route path='/Footer' element={<Footer/>}/> */}
//         // {/* <Route render={props => (
//         //         <>
//         //             <Header {...props}/>
//         //             <Routing/>
//         //             <Footer/>
//         //         </>
//         //     )}/> */}
//         //   </Routes>
          
          
    
//         // </BrowserRouter>
// <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Catalog" element={<Catalog />} />
//         <Route path="/Detail" element={<Detail />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>

//     );
// }

function App() {
  const Layout = () =>{
    return(
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"/",
          element:<Home/>,
        },
        {
          path: "/movie",
          element: <Catalog/>,
        },
        { 
          path: "/:category/search/:keyword", 
          element: <Catalog />, 
        },
        { 
          path: "/:category/:id", 
          element: <Detail />, 
        },
      ],
    },
  ])
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
  
}

export default App;
