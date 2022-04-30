import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './app.css';
import Telegram from './Components/Telegram/Telegram'
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './Firebase/Firebase'
import Login from './Components/Login/Login'
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid:authUser.uid,
          displayName:authUser.displayName,
          email:authUser.email,
          photoUrl:authUser.photoURL
        }))
      } else {
        dispatch(logout())
      }
      console.log(authUser);
    })
  }, [dispatch])
  return (
    <div className="app">
      {user ? <Telegram /> : <Login />}

    </div>
  );
}

export default App;
