import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Cookies from 'js-cookie';

import { userActions } from '../../store/user/user-slice';
import useHttp from '../../hooks/use-http';
import NavBar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import { host } from '../../store/store';

// ==================================================

const MainLayout = () => {
  const token = Cookies.get('token');
  const dispatch = useDispatch();
  const sendRequest = useHttp();

  useEffect(() => {
    if (!token) {
      return;
    } else {
      sendRequest({ url: `${host}/user` })
        .then((result) => {
          if (result.error) {
            return;
          }

          Object.keys(result).map((key) =>
            dispatch(
              userActions.replaceUserState({ name: key, value: result[key] })
            )
          );
        })
        .catch((err) => console.log(err));
    }
  }, [token, sendRequest, dispatch]);

  return (
    <>
      <NavBar />

      <main className='container-lg'>
        <Outlet />
      </main>

      <Footer />

      <ScrollRestoration />
    </>
  );
};

export default MainLayout;
