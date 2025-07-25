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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      {/* Header */}
      <header className="bg-black shadow-md sticky top-0 z-50">
        {/* ... header code unchanged ... */}
      </header>

      {/* Main Content - Wider Form */}
      <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4 gradient-text">{t("registerTitle")}</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {t("registerDescription")}
            </p>
          </div>
          
          <div className="bg-black rounded-2xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              {/* Left side - decorative */}
              <div className="hidden md:block md:w-2/5 bg-gradient-to-br from-pink-600 to-purple-700 p-10">
                {/* ... left panel content unchanged ... */}
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