// components/UserHeader.tsx

'use client'; 

import React, { useState } from 'react';
import { useUserStore } from '@/store/useUserStore'; 

function UserHeader() {
  const { isLoggedIn, username, login, logout } = useUserStore();
  const [inputName, setInputName] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async () => {
    if (!inputName) return;
    setIsLoggingIn(true);
    await login(inputName);
    setIsLoggingIn(false);
    setInputName('');
  };

  if (isLoggingIn) {
    return <p className="text-blue-500">Logging in...</p>;
  }

  if (isLoggedIn) {
    return (
      <div className="p-4 bg-green-100 rounded-md">
        <p className="font-semibold">Welcome back, {username}!</p>
        <button 
          onClick={logout} 
          className="text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded mt-2"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 border border-gray-300 rounded-md flex gap-2">
      <input
        type="text"
        placeholder="Enter name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        className="border border-gray-400 p-2 rounded w-40"
      />
      <button 
        onClick={handleLogin} 
        disabled={!inputName}
        className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded disabled:opacity-50"
      >
        Login
      </button>
    </div>
  );
}

export default UserHeader;