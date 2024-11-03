// BottomNavigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
    const location = useLocation();

    return (
        <nav className="sticky bottom-0 left-0 right-0 bg-gray-200 dark:bg-gray-800 shadow-lg z-50">
            <div className="flex justify-around p-3 xs:pb-8 md:pb-3 xl:pb-3 2xl:pb-3">
                <Link to="/" className={`flex flex-col items-center ${location.pathname === '/' ? 'text-emerald-500' : 'text-gray-600 dark:text-gray-300'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    <span className="text-xs">Home</span>
                </Link>
                <Link to="/Month" className={`flex flex-col items-center ${location.pathname === '/Month' ? 'text-emerald-500' : 'text-gray-600 dark:text-gray-300'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    <span className="text-xs">Month</span>
                </Link>
                <Link to="/Lookup" className={`flex flex-col items-center ${location.pathname === '/Lookup' ? 'text-emerald-500' : 'text-gray-600 dark:text-gray-300'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <span className="text-xs">Lookup</span>
                </Link>
            </div>
        </nav>
    );
};

export default BottomNavigation;
