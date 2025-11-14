import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from './context/AppContext.jsx';
import AdminContextProvider from './context/AdminContext.jsx';
import DoctorContextProvider from './context/DoctorContext.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AdminContextProvider>
            <DoctorContextProvider>
                <AppContext>
                    <App />
                </AppContext>
            </DoctorContextProvider>
        </AdminContextProvider>
    </BrowserRouter>
);
