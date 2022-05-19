import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Navigate replace to='/'></Navigate>}></Route>
                <Route path='*' element={<Navigate replace to='/'></Navigate>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
