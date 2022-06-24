import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
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
  state = { kirganmisan: null };
  auth1 = null;
  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "626894082646-qkt565ptln62ll8b8iunkug00sga263o.apps.googleusercontent.com",
          plugin_name: "TwitchClone",
          scope: "email",
        })
        .then(() => {
          console.log(window.gapi.auth2.getAuthInstance());
          this.auth1 = window.gapi.auth2.getAuthInstance();
          this.setState({ kirganmisan: this.auth1.isSignedIn.get() });
          this.auth1.isSignedIn.listen(this.changeIsSignedIn);
        });
    });
  }

  changeIsSignedIn = (qanday) => {
    this.setState({ kirganmisan: qanday });
  };

  signInClick = () => {
    return this.auth1.signIn();
  };
  signOutClick = () => {
    return this.auth1.signOut();
  };

  renderHtml = () => {
    if (this.state.kirganmisan === null) {
      return <div>Kuting...</div>;
    } else if (this.state.kirganmisan === true) {
      return (
        <div>
          <button className="ui button google red" onClick={this.signOutClick}>
            <i className="google icon"> Sign out</i>
          </button>
        </div>
      );
    } else if (this.state.kirganmisan === false) {
      return (
        <div>
          <button className="ui button google green" onClick={this.signInClick}>
            <i className="google icon"> Sign in</i>
          </button>
          <img
            src={this.auth1.currentUser.get().getBasicProfile().getImageUrl()}
          />
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderHtml()}</div>;
  }
}
export default GoogleAuth;
