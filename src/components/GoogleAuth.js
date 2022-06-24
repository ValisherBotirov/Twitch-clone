import React, { useEffect, useState } from "react";

// ===========================================
// Function componenta bilan
// ===========================================

// const GoogleAuth = () => {
//   // let kirishMalumotlari;

//   let [kirishMalumotlar, setKirishMalumotlar] = useState("");
//   let [kirganmi, setKirganmi] = useState(null);

//   useEffect(() => {
//     window.gapi.load("auth2", function () {
//       window.gapi.auth2
//         .init({
//           client_id:
//             "626894082646-5j5tfame83n3j1ktdug4mpg514i23dgo.apps.googleusercontent.com",
//           scope: "email",
//           plugin_name: "TwitchClone",
//         })
//         .then(() => {
//           setKirishMalumotlar(window.gapi.auth2.getAuthInstance());
//           console.log(kirishMalumotlar);
//         });
//     });
//   }, []);

//   const kirishFunc = async (e) => {
//     e.preventDefault();

//     if (kirishMalumotlar && !kirishMalumotlar.isSignedIn.get()) {
//       await kirishMalumotlar.signIn();
//       return (
//         <div>
//           <p>
//             {kirishMalumotlar.currentUser.get().getBasicProfile().getName()}
//           </p>
//           <button>Sign Out</button>
//         </div>
//       );
//     }
//     if (kirishMalumotlar && kirishMalumotlar.isSignedIn.get()) {
//       kirishMalumotlar.signOut();
//     } else return <p>Waiting...</p>;
//   };

//   return (
//     <div>
//       <form className="ui form">
//         <button className="ui button google blue green " onClick={kirishFunc}>
//           <i className="google icon"> Sign In </i>
//         </button>
//       </form>
//     </div>
//   );
// };

// ======================
// class componenta bilan
// =======================

class GoogleAuth extends React.Component {
  render() {
    return <div></div>;
  }
}
export default GoogleAuth;
