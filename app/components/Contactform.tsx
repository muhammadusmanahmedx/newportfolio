import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-br from-[#FDF2F8] via-[#FCE7F3] to-[#FBCFE8] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#BE185D] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[#BE185D]/70 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Let's create something amazing together!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#BE185D] mb-6">
                Let's Connect
              </h3>
              <p className="text-[#BE185D]/70 mb-8 leading-relaxed">
                I'm Fatima Nazir, a passionate Graphic and UI/UX Designer with a
                deep love for creating user-centered digital experiences.
                Currently pursuing my Bachelor's in Computer Science at Riphah
                International University. Let’s connect!
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/80 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <Mail className="w-5 h-5 text-[#BE185D]" />
                </div>
                <div>
                  <p className="font-medium text-[#BE185D]">Email</p>
                  <p className="text-[#BE185D]/70">fatimanaziir32@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/80 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <Phone className="w-5 h-5 text-[#BE185D]" />
                </div>
                <div>
                  <p className="font-medium text-[#BE185D]">Phone</p>
                  <p className="text-[#BE185D]/70">0341 5433994</p>
                </div>
              </div>

              {/* About / Location */}
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/80 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <MapPin className="w-5 h-5 text-[#BE185D]" />
                </div>
                <div>
                  <p className="font-medium text-[#BE185D]">About Me</p>
                  <p className="text-[#BE185D]/70">
                    UI/UX Designer • CS Student at Riphah • Entrepreneur
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#BE185D] mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-[#BE185D] focus:ring-2 focus:ring-[#BE185D]/20 outline-none transition-all duration-300 bg-white/80"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#BE185D] mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-[#BE185D] focus:ring-2 focus:ring-[#BE185D]/20 outline-none transition-all duration-300 bg-white/80"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#BE185D] mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-[#BE185D] focus:ring-2 focus:ring-[#BE185D]/20 outline-none transition-all duration-300 bg-white/80"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#BE185D] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-[#BE185D] focus:ring-2 focus:ring-[#BE185D]/20 outline-none transition-all duration-300 resize-none bg-white/80"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#BE185D] to-[#EC4899] text-white font-semibold py-4 px-6 rounded-xl hover:from-[#9D174D] hover:to-[#DB2777] transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-center">
                  Thank you! Your message has been sent successfully. I'll get
                  back to you soon!
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
