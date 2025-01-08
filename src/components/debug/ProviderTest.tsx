"use client";

import { useContext } from 'react';
import { AuthContext } from '@/components/modules/auth/AuthProvider';

export function ProviderTest() {
  const context = useContext(AuthContext);
  
  return (
    <div className="fixed bottom-4 right-4 p-4 bg-gray-100 rounded-lg">
      <p>Auth Context: {context ? 'Available' : 'Not Available'}</p>
      <pre className="text-xs mt-2">
        {JSON.stringify(context, null, 2)}
      </pre>
    </div>
  );
} 