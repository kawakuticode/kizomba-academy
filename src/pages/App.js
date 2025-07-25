import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import SubscribePage from "./SubscribePage";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import { useTranslation } from "react-i18next";

export default function App() {
	const [selectedLevel, setSelectedLevel] = useState("Beginner");
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { t, i18n } = useTranslation();

	// Mock video lessons per level
	const lessons = {
		Beginner: [
			{ id: 1, title: t("introToKizomba"), duration: "8:30" },
			{ id: 2, title: t("basicMovements"), duration: "12:45" },
			{ id: 3, title: t("partnerBasics"), duration: "9:20" },
			{ id: 4, title: t("basicSaida"), duration: "9:20" },
		],
		Intermediate: [
			{ id: 1, title: t("advancedBodyIsolation"), duration: "10:15" },
			{ id: 2, title: t("musicalityTiming"), duration: "14:30" },
			{ id: 3, title: t("intermediatePartnerWork"), duration: "11:25" },
		],
		Advanced: [
			{ id: 1, title: t("complexRhythmInterpretation"), duration: "15:00" },
			{ id: 2, title: t("performanceTechnique"), duration: "18:40" },
			{ id: 3, title: t("freestyleFlow"), duration: "16:20" },
		],
		Teacher: [
			{ id: 1, title: t("teachingMethodology"), duration: "20:00" },
			{ id: 2, title: t("classStructureDesign"), duration: "22:30" },
			{ id: 3, title: t("correctingCommonMistakes"), duration: "17:15" },
		],
	};

	return (
		<div className="min-h-screen bg-gray-900 text-white">
			{/* Header */}
			<header className="bg-black shadow-md sticky top-0 z-50">
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<h1 className="animated-gradient text-2xl inline-block">
						{t("title")}
					</h1>

					{/* Desktop Navigation + Language Selector + Subscribe Button */}
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
						{/* Subscribe Button */}

						<Link to="/login">
							<button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-5 py-2 rounded-full font-semibold transition transform hover:scale-105">
								{t("login")}
							</button>
						</Link>
						{/* Subscribe Button */}

						<Link to="/subscribe">
							<button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-5 py-2 rounded-full font-semibold transition transform hover:scale-105">
								{t("subscribeNow")}
							</button>
						</Link>
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
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
				<div className="absolute inset-0 bg opacity-10 bg-repeat bg-cover"></div>
				<div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
							{t("heroLine1")}
							<br />
							<span className="gradient-text">{t("title")}</span>
						</h2>
						<p className="text-xl md:text-2xl text-gray-300 mb-10">
							{t("heroDescription")}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
							<button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full font-bold text-lg transition-all transform hover:scale-105">
								{t("startLearning")}
							</button>
							<button className="px-8 py-4 border border-pink-500 hover:border-pink-400 rounded-full font-bold text-lg transition-all">
								{t("watchDemo")}
							</button>
						</div>
					</div>
				</div>
			</section>
			{/* Features Section */}
			<section id="features" className="py-20 bg-gray-800">
				<div className="container mx-auto px-4">
					<h3 className="text-3xl font-bold text-center mb-16">
						{t("whyChooseTitle")}
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						<div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
							<div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
									/>
								</svg>
							</div>
							<h4 className="text-xl font-bold mb-2">
								{t("affordablePricing")}
							</h4>
							<p className="text-gray-400">{t("monthlyAccessAllLevels")}</p>
						</div>
						<div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
							<div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h4 className="text-xl font-bold mb-2">
								{t("structuredLevels")}
							</h4>
							<p className="text-gray-400">{t("fromBeginnerToTeacher")}</p>
						</div>
						<div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
							<div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h4 className="text-xl font-bold mb-2">{t("hdVideoLessons")}</h4>
							<p className="text-gray-400">{t("streamOnAnyDevice")}</p>
						</div>
					</div>
				</div>
			</section>
			{/* Levels Section */}
			<section id="levels" className="py-20">
				<div className="container mx-auto px-4">
					<h3 className="text-3xl font-bold text-center mb-16">
						{t("selectYourLevel")}
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{["Beginner", "Intermediate", "Advanced", "Teacher"].map(
							(level) => (
								<div
									key={level}
									onClick={() => setSelectedLevel(level)}
									className={`cursor-pointer p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 ${
										selectedLevel === level ? "bg-pink-600" : "bg-gray-800"
									}`}
								>
									<h4 className="text-xl font-bold mb-2">
										{t(level.toLowerCase())}
									</h4>
									<p className="text-gray-400 mb-4">
										{level === "Beginner" && t("beginnerDesc")}
										{level === "Intermediate" && t("intermediateDesc")}
										{level === "Advanced" && t("advancedDesc")}
										{level === "Teacher" && t("teacherDesc")}
									</p>
									<button
										className={`mt-4 px-4 py-2 rounded-full text-sm font-medium ${
											selectedLevel === level
												? "bg-pink-500 text-white"
												: "bg-gray-700 text-gray-300"
										}`}
									>
										{t("viewLessons")}
									</button>
								</div>
							)
						)}
					</div>
				</div>
			</section>
			{/* Video Lessons Section */}
			<section id="lessons" className="py-20 bg-gray-800">
				<div className="container mx-auto px-4">
					<h3 className="text-3xl font-bold text-center mb-12">
						{t("videoLessons")} - {t(selectedLevel.toLowerCase())}
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{lessons[selectedLevel].map((lesson) => (
							<div
								key={lesson.id}
								className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition"
							>
								<h4 className="font-bold mb-1">{lesson.title}</h4>
								<p className="text-sm text-gray-400">{lesson.duration}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Pricing Section */}
			<section id="pricing" className="py-20">
				<div className="container mx-auto px-4">
					<h3 className="text-3xl font-bold text-center mb-16">
						{t("subscriptionPlans")}
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Monthly Plan */}
						<div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
							<h4 className="text-xl font-bold mb-2">{t("monthly")}</h4>
							<p className="text-3xl font-extrabold mb-4">
								$19<span className="text-sm text-gray-400">/mo</span>
							</p>
							<ul className="space-y-3 text-gray-400 mb-6">
								<li className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 mr-2 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									{t("accessToAllLevels")}
								</li>
								<li className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 mr-2 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									{t("hdVideoStreaming")}
								</li>
								<li className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 mr-2 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									{t("downloadableResources")}
								</li>
							</ul>
							<button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full font-bold transition">
								{t("subscribe")}
							</button>
						</div>

						{/* Yearly Plan */}
						<div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 border-2 border-pink-500">
							<h4 className="text-xl font-bold mb-2">{t("yearly")}</h4>
							<p className="text-3xl font-extrabold mb-4">
								$199<span className="text-sm text-gray-400">/yr</span>
							</p>
							<ul className="space-y-3 text-gray-400 mb-6">
								<li className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 mr-2 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									{t("exclusiveBonusContent")}
								</li>
								<li className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 mr-2 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									{t("personalFeedback")}
								</li>
								<li className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 mr-2 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									{t("privateQASessions")}
								</li>
							</ul>
							<button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full font-bold transition">
								{t("subscribe")}
							</button>
						</div>

						{/* Premium Plan */}
						<div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
							<h4 className="text-xl font-bold mb-2">{t("premium")}</h4>
							<p className="text-3xl font-extrabold mb-4">
								$299<span className="text-sm text-gray-400">/yr</span>
							</p>
							<ul className="space-y-3 text-gray-400 mb-6">
								<li className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 mr-2 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									{t("allFeaturesFromYearly")}
								</li>
								<li className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 mr-2 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									{t("privateQASessions")}
								</li>
								<li className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 mr-2 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									{t("customLessonPlan")}
								</li>
							</ul>
							<button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full font-bold transition">
								{t("subscribe")}
							</button>
						</div>
					</div>
				</div>
			</section>
			{/* Contact Section */}
			<section id="contact" className="py-20 bg-gray-800">
				<div className="container mx-auto px-4">
					<h3 className="text-3xl font-bold text-center mb-12">
						{t("getInTouch")}
					</h3>
					<div className="max-w-3xl mx-auto">
						<form className="bg-gray-900 p-8 rounded-xl shadow-lg">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-300 mb-2"
									>
										{t("name")}
									</label>
									<input
										type="text"
										id="name"
										className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
										placeholder={t("yourName")}
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-300 mb-2"
									>
										{t("email")}
									</label>
									<input
										type="email"
										id="email"
										className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
										placeholder={t("yourEmail")}
									/>
								</div>
							</div>
							<div className="mb-6">
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-300 mb-2"
								>
									{t("message")}
								</label>
								<textarea
									id="message"
									rows="5"
									className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
									placeholder={t("messageplaceholder")}
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg font-bold transition"
							>
								{t("sendMessage")}
							</button>
						</form>
					</div>
				</div>
			</section>
			{/* Footer */}
			<footer className="bg-black py-12">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div>
							<h4 className="text-white font-bold text-lg mb-4">
								{t("title")}
							</h4>
							<p className="text-sm text-gray-400">{t("footerDesc")}</p>
						</div>
						<div>
							<h5 className="text-white font-bold mb-4">{t("quickLinks")}</h5>
							<ul className="space-y-2 text-sm">
								<li>
									<a
										href="#features"
										className="hover:text-pink-500 transition"
									>
										{t("features")}
									</a>
								</li>
								<li>
									<a href="#levels" className="hover:text-pink-500 transition">
										{t("levels")}
									</a>
								</li>
								<li>
									<a href="#pricing" className="hover:text-pink-500 transition">
										{t("pricing")}
									</a>
								</li>
								<li>
									<a href="#lessons" className="hover:text-pink-500 transition">
										{t("lessons")}
									</a>
								</li>
								<li>
									<a href="#contact" className="hover:text-pink-500 transition">
										{t("contact")}
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h5 className="text-white font-bold mb-4">{t("legal")}</h5>
							<ul className="space-y-2 text-sm">
								<li>
									<a href="#" className="hover:text-pink-500 transition">
										{t("termsAndConditions")}
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-pink-500 transition">
										{t("privacyPolicy")}
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-pink-500 transition">
										{t("cookiePolicy")}
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h5 className="text-white font-bold mb-4">
								{t("connectWithUs")}
							</h5>
							<div className="flex space-x-4 mt-2">
								<a
									href="#"
									className="text-gray-400 hover:text-pink-500 transition"
								>
									Facebook
								</a>
								<a
									href="#"
									className="text-gray-400 hover:text-pink-500 transition"
								>
									Instagram
								</a>
								<a
									href="#"
									className="text-gray-400 hover:text-pink-500 transition"
								>
									YouTube
								</a>
							</div>
						</div>
					</div>
					<div className="mt-12 text-center text-sm text-gray-500">
						&copy; {new Date().getFullYear()} {t("title")}.{" "}
						{t("allRightsReserved")}
					</div>
				</div>
			</footer>
			<Routes>
				<Route path="/" element={<div>Home Page</div>} />
				<Route path="/subscribe" element={<SubscribePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
			;
		</div>
	);
}
