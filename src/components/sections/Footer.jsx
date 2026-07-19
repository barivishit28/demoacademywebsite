import {
    GraduationCap,
    MapPin,
    Phone,
    Mail,
    Clock,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

import Container from "../common/Container";

function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-100">
            <Container>
                <div className="py-12">

                    {/* Top Section */}
                    <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">

                        {/* Academy Info */}
                        <div>
                            <div className="flex items-center justify-center gap-2 md:justify-start">
                                <GraduationCap
                                    className="text-blue-600"
                                    size={30}
                                />
                                <h2 className="text-2xl font-extrabold text-slate-900">
                                    Apex Academy
                                </h2>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                Empowering students with expert guidance,
                                structured learning, and personalized mentorship
                                to excel in JEE, NEET, MHT-CET and Board
                                examinations.
                            </p>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">
                                Contact Us
                            </h3>

                            <div className="mt-5 space-y-4">

                                <div className="flex items-start justify-center gap-3 md:justify-start">
                                    <MapPin
                                        className="mt-0.5 text-blue-600"
                                        size={18}
                                    />
                                    <span className="text-sm text-slate-600">
                                        Your Academy Address,
                                        <br />
                                        City, State
                                    </span>
                                </div>

                                <div className="flex items-center justify-center gap-3 md:justify-start">
                                    <Phone
                                        className="text-blue-600"
                                        size={18}
                                    />
                                    <a
                                        href="tel:+919876543210"
                                        className="text-sm text-slate-600 hover:text-blue-600"
                                    >
                                        +91 98765 43210
                                    </a>
                                </div>

                                <div className="flex items-center justify-center gap-3 md:justify-start">
                                    <Mail
                                        className="text-blue-600"
                                        size={18}
                                    />
                                    <a
                                        href="mailto:info@apexacademy.in"
                                        className="text-sm text-slate-600 hover:text-blue-600"
                                    >
                                        info@apexacademy.in
                                    </a>
                                </div>

                                <div className="flex items-center justify-center gap-3 md:justify-start">
                                    <Clock
                                        className="text-blue-600"
                                        size={18}
                                    />
                                    <span className="text-sm text-slate-600">
                                        Mon – Sat : 9:00 AM – 8:00 PM
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Links */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">
                                Quick Links
                            </h3>

                            <div className="mt-5 flex flex-col gap-3">

                                <a
                                    href="#home"
                                    className="text-sm text-slate-600 transition hover:text-blue-600"
                                >
                                    Home
                                </a>

                                <a
                                    href="#courses"
                                    className="text-sm text-slate-600 transition hover:text-blue-600"
                                >
                                    Courses
                                </a>

                                <a
                                    href="#faculties"
                                    className="text-sm text-slate-600 transition hover:text-blue-600"
                                >
                                    Faculties
                                </a>

                                <a
                                    href="#results"
                                    className="text-sm text-slate-600 transition hover:text-blue-600"
                                >
                                    Achievements
                                </a>

                                <a
                                    href="#contact"
                                    className="text-sm text-slate-600 transition hover:text-blue-600"
                                >
                                    Contact
                                </a>

                            </div>

                            {/* Social */}
                            <div className="mt-8">
                                <h4 className="font-semibold text-slate-900">
                                    Follow Us
                                </h4>

                                <a
                                    href="https://instagram.com/your_username"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-pink-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-orange-400 hover:text-white hover:shadow-lg"
                                >
                                    <FaInstagram size={22} />
                                </a>

                            </div>
                        </div>

                    </div>

                    {/* Bottom */}
                    <div className="mt-10 border-t border-slate-300 pt-6 text-center">
                        <p className="text-sm text-slate-500">
                            © 2026 Apex Academy. All Rights Reserved.
                        </p>
                    </div>

                </div>
            </Container>
        </footer>
    );
}

export default Footer;