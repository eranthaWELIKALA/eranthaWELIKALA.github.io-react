import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
          <Helmet>
        <title>Erantha Welikala</title>
        <meta name="description" content="Erantha Welikala's web portfolio showcases a range of innovative and high-quality web development projects. With expertise in frontend and backend technologies, Erantha creates responsive, user-centric websites and applications. Explore the portfolio to see creative solutions and cutting-edge technology in action." />
        <meta property="og:title" content="Erantha Welikala - Web Developer & Software Engineer" />
        <meta property="og:description" content="Explore the portfolio of Erantha Welikala, showcasing high-quality web development projects with expertise in both frontend and backend technologies." />
        <meta property="og:image" content="https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-6/411273451_6968762866547066_3875378642062443312_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFrxMiaSj_Y7DdmSwgWgev8WX9MD2T1l3RZf0wPZPWXdDQsUBJ5u2tffjVi4U_51Poj62flR2D2F7UJp9RIYSj9&_nc_ohc=slgGpizL8ckQ7kNvgEBDVPI&_nc_zt=23&_nc_ht=scontent.fcmb4-2.fna&oh=00_AYASM3cDD4rWxzvYugOcD_lKbKTUnXfqXRqM6KBjLhz5pw&oe=66A0902F" />
        <meta property="og:url" content="https://eranthawelikala.github.io/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Erantha Welikala - Web Developer & Software Engineer" />
        <meta name="twitter:description" content="Explore the portfolio of Erantha Welikala, showcasing high-quality web development projects with expertise in both frontend and backend technologies." />
        <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1037679197626355712/PWWvB7Ec_400x400.jpg" />
      </Helmet>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
