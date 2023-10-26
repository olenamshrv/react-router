// import React, { createContext, useContext } from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const Login: React.FC = () => {
//   return <div className='App-header'>Login</div>;
// }

// const Home: React.FC = () => {
//   return <div className='App-header'>Home Page</div>
// }

// const Dashboard: React.FC = () => {
//   return <div className='App-header'>Dashboard Page</div>
// }

// const Error: React.FC = () => {
//   return <div className='App-header'>Error Page</div>
// }

// type ContextType = {
//   isLogged: boolean;
//   login: (status: boolean) => void;
// }

// const AuthContext = createContext<ContextType | null>(null);

// const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const auth = useContext(AuthContext);

//   if (!auth) return <Error />;

//   return auth.isLogged ? <>{children}</> : <Login />
// };

// function App() {
//   const [isLogged, login] = React.useState(true);

//   return (
//     <AuthContext.Provider value={{ isLogged, login}}>
//       <BrowserRouter>
//         <Routes>
//           <Route index Component={Home} />
//           {/* <Route index element={<Home/>} /> */}
//           <Route path="/login" Component={Login} />
//           {/* <Route path="/login/*" Component={Login} /> */}
//           {/* <Route caseSensitive path="/LOGin/*" Component={Login} /> */}
//           {/* <Route path="/dashboard" Component={Dashboard} /> */}

//           <Route path="/dashboard"
//             element={
//               <PrivateRoute>          
//                 <Dashboard/>
//               </PrivateRoute> 
//             }
//           />

//           <Route path="*" Component={Error}/>
//         </Routes>
//       </BrowserRouter>
//     </AuthContext.Provider>
//   );
// }

// export default App;

// //==================================


// import React, { createContext, useContext } from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const Login: React.FC = () => {
//   const auth = useContext(AuthContext);

//   const handleClick = () => {
//     if (auth) auth.login(true);
//   }

//   return <div onClick={handleClick} className='App-header'>Login</div>;
// }

// const Home: React.FC = () => {
//   return <div className='App-header'>Home Page</div>
// }

// const Dashboard: React.FC = () => {
//   return <div className='App-header'>Dashboard Page</div>
// }

// const Error: React.FC = () => {
//   return <div className='App-header'>Error Page</div>
// }

// type ContextType = {
//   isLogged: boolean;
//   login: (status: boolean) => void;
// }

// const AuthContext = createContext<ContextType | null>(null);

// const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const auth = useContext(AuthContext);

//   if (!auth) return <Error />;

//   return auth.isLogged ? <>{children}</> : <Login />
// };

// function App() {
//   const [isLogged, login] = React.useState(false);

//   return (
//     <AuthContext.Provider value={{ isLogged, login}}>
//       <BrowserRouter>
//         <Routes>
//           <Route index Component={Home} />
//           {/* <Route index element={<Home/>} /> */}
//           <Route path="/login" Component={Login} />
//           {/* <Route path="/login/*" Component={Login} /> */}
//           {/* <Route caseSensitive path="/LOGin/*" Component={Login} /> */}
//           {/* <Route path="/dashboard" Component={Dashboard} /> */}

//           <Route path="/dashboard"
//             element={
//               <PrivateRoute>          
//                 <Dashboard/>
//               </PrivateRoute> 
//             }
//           />

//           <Route path="*" Component={Error}/>
//         </Routes>
//       </BrowserRouter>
//     </AuthContext.Provider>
//   );
// }

// export default App;

// //==========useParams========================


// import React, { createContext, useContext } from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

// const Login: React.FC = () => {
//   const auth = useContext(AuthContext);

//   const handleClick = () => {
//     if (auth) auth.login(true);
//   }
  
//   return <div onClick={handleClick} className='App-header'>Login</div>;
// }

// const Home: React.FC = () => {
//   return <div className='App-header'>Home Page</div>
// }

// const Dashboard: React.FC = () => {
//   return <div className='App-header'>Dashboard Page</div>
// }

// const Error: React.FC = () => {
//   return <div className='App-header'>Error Page</div>
// }

// type ContextType = {
//   isLogged: boolean;
//   login: (status: boolean) => void;
// }

// const AuthContext = createContext<ContextType | null>(null);

// const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const auth = useContext(AuthContext);

//   if (!auth) return <Error />;

//   return auth.isLogged ? <>{children}</> : <Login />
// };

// const Profile: React.FC = () => {
//   const { profileId } = useParams();

//   React.useEffect(() => {
//     alert(`Завантаження даних для ID: ${profileId}`);
//   }, [profileId]);

//   return <div className='App-Header'>Profle Page ID: {profileId}</div>
// }

// function App() {
//   const [isLogged, login] = React.useState(false);

//   return (
//     <AuthContext.Provider value={{ isLogged, login}}>
//       <BrowserRouter>
//         <Routes>
//           <Route index Component={Home} />
//           {/* <Route index element={<Home/>} /> */}
//           <Route path="/login" Component={Login} />
//           {/* <Route path="/login/*" Component={Login} /> */}
//           {/* <Route caseSensitive path="/LOGin/*" Component={Login} /> */}
//           {/* <Route path="/dashboard" Component={Dashboard} /> */}

//           <Route path="/profile/:profileId"
//             element={
//               <PrivateRoute>          
//                 <Profile/>
//               </PrivateRoute> 
//             }
//           />

//           <Route path="*" Component={Error}/>
//         </Routes>
//       </BrowserRouter>
//     </AuthContext.Provider>
//   );
// }

// export default App;


// //==========useParams========================


// import React, { createContext, useContext } from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

// const Login: React.FC = () => {
//   const auth = useContext(AuthContext);

//   const handleClick = () => {
//     if (auth) auth.login(true);
//   }
  
//   return <div onClick={handleClick} className='App-header'>Login</div>;
// }

// const Home: React.FC = () => {
//   return <div className='App-header'>Home Page</div>
// }

// const Dashboard: React.FC = () => {
//   return <div className='App-header'>Dashboard Page</div>
// }

// const Error: React.FC = () => {
//   return <div className='App-header'>Error Page</div>
// }

// type ContextType = {
//   isLogged: boolean;
//   login: (status: boolean) => void;
// }

// const AuthContext = createContext<ContextType | null>(null);

// const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const auth = useContext(AuthContext);

//   if (!auth) return <Error />;

//   return auth.isLogged ? <>{children}</> : <Login />
// };

// const Profile: React.FC = () => {
//   const { profileId, menuId } = useParams();

//   React.useEffect(() => {
//     alert(`Завантаження даних для ID: ${profileId}`);
//   }, [profileId]);

//   return <div className='App-Header'>Profle Page ID: {profileId} Menu: {menuId}</div>
// }

// function App() {
//   const [isLogged, login] = React.useState(false);

//   return (
//     <AuthContext.Provider value={{ isLogged, login}}>
//       <BrowserRouter>
//         <Routes>
//           <Route index Component={Home} />
//           {/* <Route index element={<Home/>} /> */}
//           <Route path="/login" Component={Login} />
//           {/* <Route path="/login/*" Component={Login} /> */}
//           {/* <Route caseSensitive path="/LOGin/*" Component={Login} /> */}
//           {/* <Route path="/dashboard" Component={Dashboard} /> */}

//           <Route path="/profile/:profileId/menu/:menuId"
//             element={
//               <PrivateRoute>          
//                 <Profile/>
//               </PrivateRoute> 
//             }
//           />

//           <Route path="*" Component={Error}/>
//         </Routes>
//       </BrowserRouter>
//     </AuthContext.Provider>
//   );
// }

// export default App;


// //==========Link========================


// import React, { createContext, useContext } from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
// import { Link } from "react-router-dom";

// const Login: React.FC = () => {
//   const auth = useContext(AuthContext);

//   const handleClick = () => {
//     if (auth) auth.login(true);
//   }
  
//   return <div onClick={handleClick} className='App-header'>Login</div>;
// }

// const Home: React.FC = () => {
//   // return <div className='App-header'>Home Page</div>

//   return (
//     <div className='App-header'>
//       <div>
//         <Link className='App-Link' to="/dashboard">Dashboard</Link>
//       </div>
//       <div>
//         <Link className='App-Link' to="/login">Login</Link>
//       </div>
//     </div>
//   )
// }

// const Dashboard: React.FC = () => {
//   return <div className='App-header'>Dashboard Page</div>
// }

// const Error: React.FC = () => {
//   return <div className='App-header'>Error Page</div>
// }

// type ContextType = {
//   isLogged: boolean;
//   login: (status: boolean) => void;
// }

// const AuthContext = createContext<ContextType | null>(null);

// const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const auth = useContext(AuthContext);

//   if (!auth) return <Error />;

//   return auth.isLogged ? <>{children}</> : <Login />
// };

// const Profile: React.FC = () => {
//   const { profileId, menuId } = useParams();

//   React.useEffect(() => {
//     alert(`Завантаження даних для ID: ${profileId}`);
//   }, [profileId]);

//   return <div className='App-Header'>Profle Page ID: {profileId} Menu: {menuId}</div>
// }

// function App() {
//   const [isLogged, login] = React.useState(false);

//   return (
//     <AuthContext.Provider value={{ isLogged, login}}>
//       <BrowserRouter>
//         <Routes>
//           <Route index Component={Home} />
//           {/* <Route index element={<Home/>} /> */}
//           <Route path="/login" Component={Login} />
//           {/* <Route path="/login/*" Component={Login} /> */}
//           {/* <Route caseSensitive path="/LOGin/*" Component={Login} /> */}
//           <Route path="/dashboard" Component={Dashboard} />

//           <Route path="/profile/:profileId/menu/:menuId"
//             element={
//               <PrivateRoute>          
//                 <Profile/>
//               </PrivateRoute> 
//             }
//           />

//           <Route path="*" Component={Error}/>
//         </Routes>
//       </BrowserRouter>
//     </AuthContext.Provider>
//   );
// }

// export default App;

// //==========useNavigate========================


// import React, { createContext, useContext } from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
// import { Link, useNavigate } from "react-router-dom";

// const Login: React.FC = () => {
//   const auth = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleClick = () => {
//     if (auth) {
//       auth.login(true);
//       navigate("/dashboard");
//     }
//   }
  
//   return <div onClick={handleClick} className='App-header'>Login</div>;
// }

// const Home: React.FC = () => {
//   // return <div className='App-header'>Home Page</div>

//   return (
//     <div className='App-header'>
//       <div>
//         <Link className='App-Link' to="/dashboard">Dashboard</Link>
//       </div>
//       <div>
//         <Link className='App-Link' to="/login">Login</Link>
//       </div>
//     </div>
//   )
// }

// const Dashboard: React.FC = () => {
//   return <div className='App-header'>Dashboard Page</div>
// }

// const Error: React.FC = () => {
//   return <div className='App-header'>Error Page</div>
// }

// type ContextType = {
//   isLogged: boolean;
//   login: (status: boolean) => void;
// }

// const AuthContext = createContext<ContextType | null>(null);

// const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const auth = useContext(AuthContext);

//   if (!auth) return <Error />;

//   return auth.isLogged ? <>{children}</> : <Login />
// };

// const Profile: React.FC = () => {
//   const { profileId, menuId } = useParams();

//   React.useEffect(() => {
//     alert(`Завантаження даних для ID: ${profileId}`);
//   }, [profileId]);

//   return <div className='App-Header'>Profle Page ID: {profileId} Menu: {menuId}</div>
// }

// function App() {
//   const [isLogged, login] = React.useState(false);

//   return (
//     <AuthContext.Provider value={{ isLogged, login}}>
//       <BrowserRouter>
//         <Routes>
//           <Route index Component={Home} />
//           {/* <Route index element={<Home/>} /> */}
//           <Route path="/login" Component={Login} />
//           {/* <Route path="/login/*" Component={Login} /> */}
//           {/* <Route caseSensitive path="/LOGin/*" Component={Login} /> */}
//           <Route path="/dashboard" Component={Dashboard} />

//           <Route path="/profile/:profileId/menu/:menuId"
//             element={
//               <PrivateRoute>          
//                 <Profile/>
//               </PrivateRoute> 
//             }
//           />

//           <Route path="*" Component={Error}/>
//         </Routes>
//       </BrowserRouter>
//     </AuthContext.Provider>
//   );
// }

// export default App;

//==========Navigate========================


import React, { createContext, useContext } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { Link, useNavigate, Navigate } from "react-router-dom";

const Login: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (auth) {
      auth.login(true);
      navigate("/dashboard");
    }
  }
  
  return <div onClick={handleClick} className='App-header'>Login</div>;
}

const Home: React.FC = () => {
  // return <div className='App-header'>Home Page</div>

  return (
    <div className='App-header'>
      <div>
        <Link className='App-Link' to="/dashboard">Dashboard</Link>
      </div>
      <div>
        <Link className='App-Link' to="/login">Login</Link>
      </div>
    </div>
  )
}

const Dashboard: React.FC = () => {
  return <div className='App-header'>Dashboard Page</div>
}

const Error: React.FC = () => {
  return <div className='App-header'>Error Page</div>
}

type ContextType = {
  isLogged: boolean;
  login: (status: boolean) => void;
}

const AuthContext = createContext<ContextType | null>(null);

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const auth = useContext(AuthContext);

  if (!auth) return <Error />;

    // return auth.isLogged ? <>{children}</> : <Login />
  // return auth.isLogged ? <>{children}</> : <Navigate to="/login" />
  return auth.isLogged ? <>{children}</> : <Navigate to="/login" replace />


};

const Profile: React.FC = () => {
  const { profileId, menuId } = useParams();

  React.useEffect(() => {
    alert(`Завантаження даних для ID: ${profileId}`);
  }, [profileId]);

  return <div className='App-Header'>Profle Page ID: {profileId} Menu: {menuId}</div>
}

function App() {
  const [isLogged, login] = React.useState(false);

  return (
    <AuthContext.Provider value={{ isLogged, login}}>
      <BrowserRouter>
        <Routes>
          <Route index Component={Home} />
          {/* <Route index element={<Home/>} /> */}
          <Route path="/login" Component={Login} />
          {/* <Route path="/login/*" Component={Login} /> */}
          {/* <Route caseSensitive path="/LOGin/*" Component={Login} /> */}
          {/* <Route path="/dashboard" Component={Dashboard} /> */}

          <Route path="/profile/:profileId/menu/:menuId"
            element={
              <PrivateRoute>          
                <Profile/>
              </PrivateRoute> 
            }
          />


          <Route path="/dashboard" 
            element={
              <PrivateRoute>          
                <Dashboard/>
              </PrivateRoute> 
            }
          />

          <Route path="*" Component={Error}/>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
