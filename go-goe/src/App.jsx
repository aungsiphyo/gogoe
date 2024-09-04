import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import PaymentPage from './pages/PaymentPage';

const router = createBrowserRouter([{
  path: "", element: <Main/>, children: [
    {path: "/", element: <HomePage /> },
    {path: "/login", element: <LoginPage /> },
    {path: "/register", element: <RegisterPage/>},
    {path: "/payment/:type", element: <PaymentPage />}
  ]
}]);

const App = () => {
  return (
    <div className="min-h-screen relative h-full w-full overflow-hidden">
       {/* {document.documentElement.classList.contains('dark')? <div class="relative h-full w-full dark:bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full dark:bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full dark:bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
        
        </div></div> : <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div> } */}
        <div class="fixed -z-10 h-full w-full dark:bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
        <RouterProvider router={router}/>
    </div>
  );
};

export default App;
