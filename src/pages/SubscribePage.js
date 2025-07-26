// src/SubscribePage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../css/phoneinput.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function SubscribePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    phone: '',
    level: 'Beginner'
  });
  const [phoneError, setPhoneError] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const { t, i18n } = useTranslation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value) => {
    // Validate phone number length
    if (value) {
      const phoneNumber = value.replace(/[^0-9]/g, ''); // Remove non-digits
      const nationalNumber = phoneNumber.substring(1); // Remove country code
      // Set appropriate limits based on country (example limits)
      let maxLength = 15; // Default max
      let minLength = 7;  // Default min
      if (value.startsWith('+1')) { // US/Canada
        maxLength = 11; // 10 digits + 1 for country code
        minLength = 11;
      } else if (value.startsWith('+44')) { // UK
        maxLength = 13; // 10-12 digits + 1 for country code
        minLength = 11;
      } else if (value.startsWith('+33')) { // France
        maxLength = 12; // 9 digits + 1 for country code
        minLength = 12;
      }
      // Check if number is within valid range
      if (nationalNumber.length > (maxLength - 1)) {
        setPhoneError(t("phoneTooLong"));
      } else if (nationalNumber.length > 0 && nationalNumber.length < (minLength - 1)) {
        setPhoneError(t("phoneTooShort"));
      } else {
        setPhoneError('');
      }
    } else {
      setPhoneError('');
    }
    setFormData(prev => ({
      ...prev,
      phone: value || ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Final phone validation
    if (formData.phone && phoneError) {
      alert(t("pleaseCorrectPhone"));
      return;
    }
    console.log('Registration data:', formData);
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header with Language Selector */}
      <header className="bg-black shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Title - You might want to link this to the homepage '/' */}
          <h1 className="animated-gradient text-2xl inline-block">
            {t("title")} 
          </h1>
          {/* Desktop Navigation + Language Selector */}
          <div className="hidden md:flex items-center space-x-6">
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
        {/* Mobile Navigation Menu (Currently Empty, can be expanded) */}
        {isMenuOpen && (
          <nav className="absolute top-16 left-0 right-0 bg-black p-4 md:hidden shadow-lg">
            <ul className="flex flex-col space-y-4">
              {/* You can add navigation links here if needed, similar to LoginPage */}
              {/* Example:
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-pink-500 transition"
                >
                  Home
                </Link>
              </li>
              */}
              {/* For now, it's just an empty container that opens/closes */}
            </ul>
          </nav>
        )}
      </header>

      {/* Main Content - Wider Form */}
      <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Intro Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4 gradient-text">{t("registerTitle")}</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {t("registerDescription")}
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Benefit 1 */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-pink-600 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("structuredLevels")}</h3>
                  <p className="text-gray-300">{t("fromBeginnerToTeacher")}</p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-purple-600 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("hdVideoLessons")}</h3>
                  <p className="text-gray-300">{t("streamOnAnyDevice")}</p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-pink-500 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("affordablePricing")}</h3>
                  <p className="text-gray-300">{t("monthlyAccessAllLevels")}</p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-purple-500 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("personalFeedback")}</h3>
                  <p className="text-gray-300">{t("exclusiveBonusContent")}</p> {/* Combined description for brevity */}
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-black rounded-2xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              {/* Left side - decorative */}
              <div className="hidden md:block md:w-2/5 bg-gradient-to-br from-pink-600 to-purple-700 p-10">
                {/* You can add decorative content or information here */}
                <div className="text-white text-center">
                  <h2 className="text-2xl font-bold mb-4">{t("startLearning")}</h2>
                  <p className="mb-6">{t("heroDescription")}</p>
                  <button className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition">
                    {t("watchDemo")}
                  </button>
                </div>
              </div>
              {/* Right side - form */}
              <div className="md:w-3/5 p-8 md:p-12">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1">{t("firstName")} *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder={t("firstNamePlaceholder")}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                      />
                    </div>
                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1">{t("lastName")} *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder={t("lastNamePlaceholder")}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                      />
                    </div>
                  </div>
                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-medium mb-1">{t("gender")} *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    >
                      <option value="">{t("selectGender")}</option>
                      <option value="male">{t("male")}</option>
                      <option value="female">{t("female")}</option>
                      <option value="other">{t("other")}</option>
                      <option value="prefer-not-to-say">{t("preferNotToSay")}</option>
                    </select>
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-1">{t("email")} *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t("emailPlaceholder")}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    />
                  </div>
                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium mb-1">{t("password")} *</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder={t("passwordPlaceholder")}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    />
                  </div>
                  {/* Phone with Country Code - Using Library */}
                  <div>
                    <label className="block text-sm font-medium mb-1">{t("phone")}</label>
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="phone-input-wrapper"
                      inputClassName="!w-full !px-4 !py-3 !rounded-lg !bg-gray-800 !text-white !border !border-gray-700 !focus:outline-none !focus:ring-2 !focus:ring-pink-500"
                    />
                    {phoneError && (
                      <p className="mt-1 text-sm text-red-500">{phoneError}</p>
                    )}
                    <p className="mt-1 text-xs text-gray-400">
                      {t("phoneFormatHint")}
                    </p>
                  </div>
                  {/* Level Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-1">{t("selectLevel")} *</label>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    >
                      <option value="Beginner">{t("beginner")}</option>
                      <option value="Intermediate">{t("intermediate")}</option>
                      <option value="Advanced">{t("advanced")}</option>
                      <option value="Teacher">{t("teacher")}</option>
                    </select>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-[1.02] text-lg"
                    >
                      {t("createAccount")}
                    </button>
                  </div>
                  <div className="text-center pt-4">
                    <p className="text-gray-400">
                      {t("alreadyHaveAccount")}{' '}
                      <Link to="/login" className="text-pink-500 hover:text-pink-400 font-medium">
                        {t("signIn")}
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}