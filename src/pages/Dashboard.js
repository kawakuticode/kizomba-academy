// src/pages/UserDashboardPage.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function UserDashboardPage() {
  const [user, setUser] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Mock video data organized by level
  const videoData = {
    "Beginner": [
      { id: 1, title: "Basic Footwork Fundamentals", duration: "12:45", thumbnail: "https://placehold.co/300x200/4f46e5/white?text=Video+1" },
      { id: 2, title: "Introduction to Kizomba Rhythm", duration: "15:30", thumbnail: "https://placehold.co/300x200/ec4899/white?text=Video+2" },
      { id: 3, title: "Basic Partner Connection", duration: "18:20", thumbnail: "https://placehold.co/300x200/8b5cf6/white?text=Video+3" },
      { id: 4, title: "Simple Turn Patterns", duration: "14:15", thumbnail: "https://placehold.co/300x200/0ea5e9/white?text=Video+4" },
      { id: 5, title: "Body Movement Basics", duration: "16:40", thumbnail: "https://placehold.co/300x200/f97316/white?text=Video+5" },
      { id: 6, title: "Introduction to Musicality", duration: "20:10", thumbnail: "https://placehold.co/300x200/10b981/white?text=Video+6" },
      { id: 7, title: "Basic Position Changes", duration: "13:55", thumbnail: "https://placehold.co/300x200/ef4444/white?text=Video+7" },
      { id: 8, title: "First Kizomba Choreography", duration: "22:30", thumbnail: "https://placehold.co/300x200/8b5cf6/white?text=Video+8" }
    ],
    "Intermediate": [
      { id: 9, title: "Advanced Footwork Combinations", duration: "19:25", thumbnail: "https://placehold.co/300x200/4f46e5/white?text=Video+9" },
      { id: 10, title: "Musical Interpretation Techniques", duration: "17:40", thumbnail: "https://placehold.co/300x200/ec4899/white?text=Video+10" },
      { id: 11, title: "Complex Turn Sequences", duration: "21:15", thumbnail: "https://placehold.co/300x200/8b5cf6/white?text=Video+11" },
      { id: 12, title: "Partner Communication Skills", duration: "16:30", thumbnail: "https://placehold.co/300x200/0ea5e9/white?text=Video+12" },
      { id: 13, title: "Body Isolation Exercises", duration: "14:50", thumbnail: "https://placehold.co/300x200/f97316/white?text=Video+13" },
      { id: 14, title: "Rhythm Variations", duration: "18:20", thumbnail: "https://placehold.co/300x200/10b981/white?text=Video+14" },
      { id: 15, title: "Advanced Position Changes", duration: "20:05", thumbnail: "https://placehold.co/300x200/ef4444/white?text=Video+15" },
      { id: 16, title: "Intermediate Choreography", duration: "24:15", thumbnail: "https://placehold.co/300x200/8b5cf6/white?text=Video+16" }
    ],
    "Advanced": [
      { id: 17, title: "Expert Footwork Mastery", duration: "22:40", thumbnail: "https://placehold.co/300x200/4f46e5/white?text=Video+17" },
      { id: 18, title: "Musical Storytelling", duration: "19:55", thumbnail: "https://placehold.co/300x200/ec4899/white?text=Video+18" },
      { id: 19, title: "Complex Partner Dynamics", duration: "23:30", thumbnail: "https://placehold.co/300x200/8b5cf6/white?text=Video+19" },
      { id: 20, title: "Improvisation Techniques", duration: "21:45", thumbnail: "https://placehold.co/300x200/0ea5e9/white?text=Video+20" },
      { id: 21, title: "Performance Quality", duration: "18:20", thumbnail: "https://placehold.co/300x200/f97316/white?text=Video+21" },
      { id: 22, title: "Advanced Musicality", duration: "20:10", thumbnail: "https://placehold.co/300x200/10b981/white?text=Video+22" },
      { id: 23, title: "Stage Presence", duration: "17:35", thumbnail: "https://placehold.co/300x200/ef4444/white?text=Video+23" },
      { id: 24, title: "Advanced Choreography", duration: "26:45", thumbnail: "https://placehold.co/300x200/8b5cf6/white?text=Video+24" }
    ],
    "Teacher": [
      { id: 25, title: "Teaching Methodology", duration: "25:30", thumbnail: "https://placehold.co/300x200/4f46e5/white?text=Video+25" },
      { id: 26, title: "Class Structure Planning", duration: "22:15", thumbnail: "https://placehold.co/300x200/ec4899/white?text=Video+26" },
      { id: 27, title: "Student Assessment Techniques", duration: "20:40", thumbnail: "https://placehold.co/300x200/8b5cf6/white?text=Video+27" },
      { id: 28, title: "Advanced Pedagogy", duration: "24:20", thumbnail: "https://placehold.co/300x200/0ea5e9/white?text=Video+28" },
      { id: 29, title: "Workshop Facilitation", duration: "19:50", thumbnail: "https://placehold.co/300x200/f97316/white?text=Video+29" },
      { id: 30, title: "Performance Coaching", duration: "23:10", thumbnail: "https://placehold.co/300x200/10b981/white?text=Video+30" },
      { id: 31, title: "Curriculum Development", duration: "21:35", thumbnail: "https://placehold.co/300x200/ef4444/white?text=Video+31" },
      { id: 32, title: "Master Class Teaching", duration: "28:15", thumbnail: "https://placehold.co/300x200/8b5cf6/white?text=Video+32" }
    ]
  };

  // Simulate fetching user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Simulate API delay
        setTimeout(() => {
          // Mock user data - in real app, fetch from backend
          const mockUser = {
            id: 1,
            firstName: "Maria",
            lastName: "Silva",
            email: "maria.silva@example.com",
            level: "Intermediate", // This would come from user profile
            joinDate: "2023-03-15",
            lessonsCompleted: 15
          };
          
          setUser(mockUser);
          
          // Get videos for user's level
          const userVideos = videoData[mockUser.level] || [];
          setVideos(userVideos);
          
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Failed to fetch user data", error);
        setLoading(false);
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    // Clear user session/token
    navigate("/login");
  };

  const playVideo = (videoId) => {
    // In a real app, this would navigate to a video player page
    console.log("Playing video:", videoId);
    // navigate(`/video/${videoId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin h-12 w-12 text-pink-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-4 text-gray-300">{t("loading")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="animated-gradient text-2xl inline-block">
            {t("title")}
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6 text-sm font-medium">
              <Link to="/dashboard" className="hover:text-pink-500 transition">
                {t("dashboard")}
              </Link>
              <Link to="/lessons" className="hover:text-pink-500 transition">
                {t("lessons")}
              </Link>
              <Link to="/progress" className="hover:text-pink-500 transition">
                {t("progress")}
              </Link>
            </nav>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                  <span className="text-sm font-medium">
                    {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                  </span>
                </div>
                <span className="hidden md:inline text-sm">
                  {user?.firstName} {user?.lastName}
                </span>
                <svg className="hidden md:block w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-700">
                    {t("profile")}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
                  >
                    {t("logout")}
                  </button>
                </div>
              )}
            </div>

            {/* Language Selector */}
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
                <Link
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-pink-500 transition"
                >
                  {t("dashboard")}
                </Link>
              </li>
              <li>
                <Link
                  to="/lessons"
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-pink-500 transition"
                >
                  {t("lessons")}
                </Link>
              </li>
              <li>
                <Link
                  to="/progress"
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-pink-500 transition"
                >
                  {t("progress")}
                </Link>
              </li>
              <li className="pt-4 border-t border-gray-800">
                <button
                  onClick={handleLogout}
                  className="w-full text-left hover:text-pink-500 transition"
                >
                  {t("logout")}
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">
            {t("welcomeBack")}, {user?.firstName}!
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="bg-gray-800 rounded-lg px-4 py-2">
              <span className="text-gray-400 text-sm">{t("yourLevel")}: </span>
              <span className="font-semibold text-pink-400">{user?.level}</span>
            </div>
            <div className="bg-gray-800 rounded-lg px-4 py-2">
              <span className="text-gray-400 text-sm">{t("lessonsCompleted")}: </span>
              <span className="font-semibold">{user?.lessonsCompleted}</span>
            </div>
            <div className="bg-gray-800 rounded-lg px-4 py-2">
              <span className="text-gray-400 text-sm">{t("memberSince")}: </span>
              <span className="font-semibold">
                {new Date(user?.joinDate).toLocaleDateString(i18n.language, {
                  year: 'numeric',
                  month: 'short'
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Videos Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {t("yourLevelVideos", { level: user?.level })}
            </h2>
            <Link to="/lessons" className="text-pink-500 hover:text-pink-400 text-sm font-medium">
              {t("viewAll")}
            </Link>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => playVideo(video.id)}
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 rounded px-2 py-1 text-xs">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
                    <div className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white line-clamp-2 mb-1">
                    {video.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm mt-2">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                    {t("video")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">{t("yourProgress")}</h2>
          <div className="flex items-center">
            <div className="w-full bg-gray-700 rounded-full h-2.5 mr-4">
              <div 
                className="bg-gradient-to-r from-pink-500 to-purple-600 h-2.5 rounded-full" 
                style={{ width: `${Math.min(100, (user?.lessonsCompleted / 24) * 100)}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium whitespace-nowrap">
              {Math.round((user?.lessonsCompleted / 24) * 100)}% {t("complete")}
            </span>
          </div>
          <p className="mt-3 text-gray-300">
            {t("progressMessage", { 
              completed: user?.lessonsCompleted, 
              total: 24,
              nextLevel: user?.level === "Beginner" ? "Intermediate" : 
                        user?.level === "Intermediate" ? "Advanced" : 
                        user?.level === "Advanced" ? "Teacher" : "Master"
            })}
          </p>
        </div>
      </main>
    </div>
  );
}