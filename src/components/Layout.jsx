import React from 'react';
import Navbar from './Navbar';

export default function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {/*Content for each page*/}
            </div>
            <footer>
                <p>Copryright 2021 Web Warrioress</p>
            </footer>
        </div>
    )
}
