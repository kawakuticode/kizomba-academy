// src/pages/LoginPage.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../css/loginpage.css';
import Dashboard from "./Dashboard"; // Assuming you have a Dashboard component

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Basic validation
    if (!formData.email) {
      setError(t("emailRequired"));
      setIsLoading(false);
      return;
    }

    if (!formData.password) {
      setError(t("passwordRequired"));
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      // Replace this with your actual authentication logic
      // Example API call:
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // For demo purposes, simulate different responses
      setTimeout(() => {
        // Simulate successful login
        if (formData.email === "user@example.com" && formData.password === "password123") {
          // Successful login - redirect to dashboard or home
          navigate("/dashboard");
        } 
        // Simulate invalid credentials
        else if (formData.email && formData.password) {
          setError(t("invalidCredentials"));
        }
        setIsLoading(false);
      }, 1000);
      
    } catch (err) {
      setError(t("loginFailed"));
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="animated-gradient text-2xl inline-block">
            {t("title")}
          </h1>

          {/* Desktop Navigation + Language Selector */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6 text-sm font-medium">
              <a href="#features" className="hover:text-pink-500 transition">
                {t("features")}
              </a>
              <a href="#levels" className="hover:text-pink-500 transition">
                {t("levels")}
              </a>
              <a href="#pricing" className="hover:text-pink-500 transition">
                {t("pricing")}
              </a>
              <a href="#lessons" className="hover:text-pink-500 transition">
                {t("lessons")}
              </a>
              <a href="#contact" className="hover:text-pink-500 transition">
                {t("contact")}
              </a>
            </nav>

            {/* Language Selector Buttons */}
            <div className="flex space-x-2">
              {["en", "fr", "pt"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                  className={`px-3 py-1 rounded text-sm ${
                    i18n.language === lang
                      ? "bg-pink-600 text-white"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-16 left-0 right-0 bg-black p-4 md:hidden shadow-lg">
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#features"
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-pink-500 transition"
                >
                  {t("features")}
                </a>
              </li>
              <li>
                <a
                  href="#levels"
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-pink-500 transition"
                >
                  {t("levels")}
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-pink-500 transition"
                >
                  {t("pricing")}
                </a>
              </li>
              <li>
                <a
                  href="#lessons"
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-pink-500 transition"
                >
                  {t("lessons")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-pink-500 transition"
                >
                  {t("contact")}
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Login Form Section */}
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-12 px-4 sm:px-6">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold gradient-text">
              {t("signInTitle")}
            </h2>
            <p className="mt-2 text-gray-300">
              {t("signInDescription")}
            </p>
          </div>

          <div className="mt-8 bg-black py-8 px-4 shadow-2xl rounded-2xl sm:px-10">
            {error && (
              <div className="mb-4 rounded-lg bg-red-900/30 p-4 border border-red-700">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-200">
                      {error}
                    </h3>
                  </div>
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {t("emailAddress")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder={t("emailPlaceholder")}
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium mb-1">
                    {t("password")}
                  </label>
                  <div className="text-sm">
                    <Link to="/forgot-password" className="font-medium text-pink-500 hover:text-pink-400">
                      {t("forgotPassword")}
                    </Link>
                  </div>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder={t("passwordPlaceholder")}
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition transform hover:scale-[1.02]"
                >
                  {isLoading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  {isLoading ? t("signingIn") : t("signIn")}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black text-gray-400">
                    {t("or")}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/subscribe" className="w-full flex justify-center py-3 px-4 border border-gray-700 rounded-lg shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                  <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                  </svg>
                  {t("createAccount")}
                </Link>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                {t("dontHaveAccount")}{' '}
                <Link to="/subscribe" className="font-medium text-pink-500 hover:text-pink-400">
                  {t("registerNow")}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}