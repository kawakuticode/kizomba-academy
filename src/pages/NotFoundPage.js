// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation(); // Hook for translations

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-lg">
        {/* Large 404 Text */}
        <h1 className="text-9xl font-extrabold animated-gradient mb-4">404</h1>
        
        {/* Page Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pageNotFoundTitle')}</h2>
        
        {/* Description */}
        <p className="text-gray-300 mb-8 text-lg">
          {t('pageNotFoundDescription')}
        </p>
        
        {/* Link back to Home */}
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-purple-700 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 focus:ring-offset-gray-900"
        >
          {t('backToHome')}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;