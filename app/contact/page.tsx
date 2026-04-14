import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Header currentPage="contact" />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
                Get in touch with the Instrumentalist team.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Questions about participation, sponsorship, or event details? Send us a message and we&apos;ll respond as soon as possible.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-3">Ready to connect</h3>
              <p className="text-gray-600">
                We welcome all inquiries from students, alumni, and community members.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <h3 className="text-lg font-bold text-primary mb-2">Visit Us</h3>
                <p className="text-gray-600">SWESCO MACHINE BOYS campus, Swedru, Ghana.</p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <h3 className="text-lg font-bold text-primary mb-2">Email</h3>
                <p className="text-gray-600">broato0787@gmail.com</p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <h3 className="text-lg font-bold text-primary mb-2">Phone</h3>
                <p className="text-gray-600">+233 20 572 8268</p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <h3 className="text-lg font-bold text-primary mb-2">Club Meeting Date</h3>
                <p className="text-gray-600">Wednesday, 3:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">Contact Form</h2>
            <p className="text-gray-600 text-lg">
              Send us a message and we will get back to you promptly.
            </p>
          </div>
          <form
            action="https://formsubmit.co/broato0787@gmail.com"
            method="POST"
            className="bg-gray-50 p-8 rounded-lg border border-border space-y-6"
          >
            <input type="hidden" name="_subject" value="New message from SWESCO MACHINE BOYS contact form" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-medium text-primary mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-primary mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block font-medium text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your inquiry here"
                required
                rows={6}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}
