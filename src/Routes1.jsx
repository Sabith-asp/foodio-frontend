// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Layout from "./components/Common/Layout/Layout";
// import Home from "./pages/home/Home";
// import SpecialDish from "./components/special dish/SpecialDish";

// const Routes1 = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route element={<SpecialDish />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default Routes1;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Common/Layout/Layout";
import Home from "./pages/home/Home";
import Menu from "./pages/Menu/Menu";

const Routes1 = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routes1;
