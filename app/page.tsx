import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header currentPage="home" />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
                A memorable celebration of music, culture, and school pride.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the 23rd Instrumentalist event at SWESCO MACHINE BOYS: student performances, alumni reunion, awards, and community collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/program" className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-opacity-90 transition">
                  View Program
                </Link>
                <a href="#highlights" className="inline-flex items-center justify-center px-6 py-3 border-2 border-secondary text-secondary font-medium rounded-lg hover:bg-secondary hover:text-white transition">
                  Event Highlights
                </a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <Image
                src="/images/swesco.jpg"
                alt="SWESCO MACHINE BOYS Logo"
                width={200}
                height={200}
                className="w-48 h-48 rounded-lg mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-primary mb-3">Our mission</h3>
              <p className="text-gray-600">
                Empowering young musicians through performance, teamwork, and creative expression.
              </p>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section id="highlights" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">Live Performances</h3>
                <p className="text-gray-600">
                  Enjoy vibrant solos and ensemble pieces from the school&apos;s finest instrumentalists.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">Alumni Reunion</h3>
                <p className="text-gray-600">
                  Reconnect with former students and celebrate the legacy of Swedru&apos;s musical tradition.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">Awards & Recognition</h3>
                <p className="text-gray-600">
                  Honoring excellence in music, dedication, and leadership across the school community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">Full Schedule</h2>
            <p className="text-gray-600 text-lg">
              Explore the complete event timeline, including all main sessions, worship, and fellowship activities.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { time: '02:00 PM', title: 'Opening hymns and worships', desc: 'Begin with choral music and a warm welcome.' },
              { time: '02:30 PM', title: 'Message & Sermon', desc: 'Hear an inspiring sermon focused on faith, unity, and community service.' },
              { time: '03:30 PM', title: 'Communion & Prayer', desc: 'Participate in communion, guided prayer, and a time of reflection.' },
              { time: '04:00 PM', title: 'Fellowship', desc: 'Connect with friends, family, and church members after the service.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 pb-6 border-b border-border last:border-0">
                <div className="font-bold text-secondary min-w-fit">{item.time}</div>
                <div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Performers */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">Featured Performers</h2>
              <p className="text-gray-600 text-lg">
                Meet the groups which usually performs in church services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Machine boys', title: 'School Orchestra', desc: 'A full ensemble performance celebrating the progress of our music club.' },
                { label: 'Soloist', title: 'Top Instrumentalists', desc: 'Individual performers chosen from top talents across the school.' },
                { label: 'Classical', title: 'Piano & Strings', desc: 'Elegant arrangements from performers with strong classical training.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-lg border border-border">
                  <p className="text-secondary font-semibold text-sm mb-2">{item.label}</p>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">Community Testimonials</h2>
            <p className="text-gray-600 text-lg">
              Voices from students, alumni, and educators.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'This club brings everyone together and highlights the depth of musical talent at SWESCO MACHINE BOYS.',
              'The 23rd Instrumentalist is the perfect club of creativity, culture, and school spirit.',
            ].map((text, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg border border-border">
                <p className="text-gray-700 mb-4 italic">"{text}"</p>
                <p className="font-semibold text-primary">
                  {i === 0 ? '- Former Student' : '- Music Faculty'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-secondary text-white py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe for event news, performer announcements, and schedule changes.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-accent text-white font-medium rounded hover:bg-opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
