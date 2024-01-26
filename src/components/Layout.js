import './Layout.scss';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    const [location, setLocation] = useState([]);

    return (
        <Outlet context={{location, setLocation}} />
    );
}