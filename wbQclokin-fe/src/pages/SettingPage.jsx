import React, { useState } from 'react';
 
const SettingPage = () => {
  const [isTwoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [isAuthorizedDevicesEnabled, setAuthorizedDevicesEnabled] = useState(true);
 
  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-lg font-bold mb-8">Security Settings</h2>
      
      {/* Two-Factor Authentication */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1">
          <h3 className="font-semibold text-md">Two-Factor Authentication</h3>
          <p className="text-sm text-gray-500">Enable two-factor authentication for added security.</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isTwoFactorEnabled}
            onChange={() => setTwoFactorEnabled(!isTwoFactorEnabled)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-green-500 peer-focus:ring-4 peer-focus:ring-blue-300 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
        </label>
      </div>
 
      {/* Authorized Devices */}
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-md">Authorized Devices</h3>
          <p className="text-sm text-gray-500">Manage devices with access to my account.</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isAuthorizedDevicesEnabled}
            onChange={() => setAuthorizedDevicesEnabled(!isAuthorizedDevicesEnabled)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-green-500 peer-focus:ring-4 peer-focus:ring-blue-300 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
        </label>
      </div>
    </div>
  );
};
 
export default SettingPage;
 