import React from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";



// const LayOut=({children})=>{
//     return(
//     <>
//         <TopNav/>
//         {children}
//         <Footer/>
//     </>     
//     );
// };
// export default LayOut;



const LayOut = ({children}) => {
  return (
    <div className="wrapper">
      {/* <header className="header">I am the Header</header> */}
      <TopNav className="header"/> {children}
      {/* <main className="main">I am the Main</main> */}
      {/* <footer className="footer">I am the Footer</footer> */}
      <Footer className="footer"/>
    </div>
  );
}

export default LayOut;
