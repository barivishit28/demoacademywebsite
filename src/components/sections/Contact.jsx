import { useState, useEffect } from "react";
import Container from "../common/Container";
import { courses } from "../../data/content";

function Contact() {
    const [form, setForm] = useState({
        parentName: "",
        phone: "",
        studentName: "",
        className: "",
        course: "",
        message: "",
    });

    useEffect(() => {
        const updateCourse = () => {
            const selectedCourse = localStorage.getItem("selectedCourse");

            if (selectedCourse) {
                setForm((prev) => ({
                    ...prev,
                    course: selectedCourse,
                }));
            }
        };

        updateCourse(); // Initial load

        window.addEventListener("courseSelected", updateCourse);

        return () => {
            window.removeEventListener("courseSelected", updateCourse);
        };
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappMessage = `
Hello Apex Academy,

I would like to enquire about admission.

👤 Parent Name: ${form.parentName}
📞 Phone: ${form.phone}
🎓 Student Name: ${form.studentName}
🏫 Class: ${form.className}
📚 Interested Course: ${form.course}

📝 Message:
${form.message || "N/A"}

Thank you.
`;

        const phoneNumber = "917276639836"; // Replace with your WhatsApp number

        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                whatsappMessage
            )}`,
            "_blank"
        );
    };

    return (
        <section
            id="contact"
            className="bg-slate-50 py-6 md:py-10 lg:py-14 scroll-mt-12 md:scroll-mt-12"
        >
            <Container>
                <div className="mx-auto max-w-3xl rounded-3xl bg-white p-3.5 shadow-lg md:p-7 lg:p-9">
                    {/* Heading */}
                    <div className="text-center">
                        <h2 className="text-xl font-extrabold leading-tight text-slate-900 md:mt-4 md:text-5xl">
                            Let's Build Your Child's Future Together
                        </h2>

                        <p className="mx-auto mt-1.5 max-w-xl text-xs text-slate-600 md:mt-3 md:text-base">
                            Fill out the form below and we'll connect with you on WhatsApp.
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="mt-5 grid gap-2.5 md:mt-8 md:grid-cols-2 md:gap-5"
                    >
                        <input
                            type="text"
                            name="parentName"
                            placeholder="Parent Name *"
                            value={form.parentName}
                            onChange={handleChange}
                            required
                            className="rounded-xl border border-slate-300 px-3.5 py-2 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 md:px-4 md:py-3 md:text-base"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number *"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            className="rounded-xl border border-slate-300 px-3.5 py-2 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 md:px-4 md:py-3 md:text-base"
                        />

                        <input
                            type="text"
                            name="studentName"
                            placeholder="Student Name *"
                            value={form.studentName}
                            onChange={handleChange}
                            required
                            className="rounded-xl border border-slate-300 px-3.5 py-2 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 md:px-4 md:py-3 md:text-base"
                        />

                        <input
                            type="text"
                            name="className"
                            placeholder="Class *"
                            value={form.className}
                            onChange={handleChange}
                            required
                            className="rounded-xl border border-slate-300 px-3.5 py-2 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 md:px-4 md:py-3 md:text-base"
                        />

                        <select
                            name="course"
                            value={form.course}
                            onChange={handleChange}
                            required
                            className="rounded-xl border border-slate-300 px-3.5 py-2 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 md:col-span-2 md:px-4 md:py-3 md:text-base"
                        >
                            <option value="">Select Course *</option>

                            {courses.map((course) => (
                                <option key={course.id} value={course.title}>
                                    {course.title}
                                </option>
                            ))}
                        </select>

                        <textarea
                            name="message"
                            rows="3"
                            placeholder="Additional Message (Optional)"
                            value={form.message}
                            onChange={handleChange}
                            className="rounded-xl border border-slate-300 px-3.5 py-2 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 md:col-span-2 md:px-4 md:py-3 md:text-base"
                        />

                        <button
                            type="submit"
                            className="md:col-span-2 flex items-center justify-center rounded-xl bg-green-600 px-5 py-2.5 text-sm font-bold text-white transition duration-300 hover:bg-green-700 md:py-3 md:text-base"
                        >
                            💬 Send Enquiry on WhatsApp
                        </button>
                    </form>
                </div>
            </Container>
        </section>
    );
}

export default Contact;