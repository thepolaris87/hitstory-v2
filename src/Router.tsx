import { Navigate, Route, Routes } from 'react-router-dom';

import Appbar from './components/Appbar';
import MainPage from './pages/MainPage';
import ContentsPage from './pages/ContentsPage';
import ComponentsPage from './pages/ComponentsPage';

export default function Router() {
    return (
        <Appbar>
            <Routes>
                <Route path='/main' element={<MainPage />} />
                <Route path='/contents' element={<ContentsPage />} />
                <Route path='/components' element={<ComponentsPage />} />
                <Route path='/*' element={<Navigate replace to='/main'></Navigate>} />
            </Routes>
        </Appbar>
    );
}
