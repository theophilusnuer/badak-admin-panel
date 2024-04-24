import React from 'react';

export default function Sidebar() {
  return (
    <div className="sidebar bg-blue-700 w-full sm:w-1/6">
      <aside className="px-8 py-4">
        <div className="flex mb-8">
          <span className="text-white text-2xl font-bold">Badak</span>
        </div>
        <nav>
          <ul className="text-white py-2">
            <li>
              <span className="block py-2">Home</span>
            </li>
            <li>
              <span className="block py-2">About Us</span>
            </li>
            <li>
              <span className="block py-2">Services</span>
            </li>
            <li>
              <span className="block py-2">Contact</span>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}