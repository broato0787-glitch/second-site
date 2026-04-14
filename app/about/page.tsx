import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function About() {
  return (
    <>
      <Header currentPage="about" />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
                About the 23rd Instrumentalist
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                For over two decades, SWESCO MACHINE BOYS has celebrated its instrumental program with pride, bringing together students, alumni, and the wider community through music.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/program" className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-opacity-90 transition">
                  Explore the Program
                </Link>
                <a href="#mission" className="inline-flex items-center justify-center px-6 py-3 border-2 border-secondary text-secondary font-medium rounded-lg hover:bg-secondary hover:text-white transition">
                  Our Mission
                </a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-3">Inspired by tradition</h3>
              <p className="text-gray-600">
                SWESCO MACHINE BOYS&apos;s instrumental program builds musical skill, leadership, and lifelong memories.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To be a leading hub for young musicians, creativity, and community celebration in Ghana.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <Image
                  src="/images/swesco.jpg"
                  alt="SWESCO MACHINE BOYS Logo"
                  width={120}
                  height={120}
                  className="w-24 h-24 rounded-lg mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  Empower students through music education, performance opportunities, and cultural exchange.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">Our Values</h3>
                <p className="text-gray-600">
                  Creativity, excellence, unity, and respect are the core values that guide every event.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History & Achievements */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-3">Club History</h3>
              <p className="text-gray-600">
                Since the first instrumentalist club meeting, our club has grown into a signature school tradition, blending performance with alumni connection.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-3">School Achievements</h3>
              <p className="text-gray-600">
                SWESCO MACHINE BOYS has earned recognition for excellence in music, academics, and community leadership.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">Leadership Team</h2>
              <p className="text-gray-600 text-lg">
                Meet the organizers shaping the club experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Director', title: 'Mr. Arthur', desc: 'Head of Music Department and lead organizer of the Instrumentalist club.' },
                { label: 'Coordinator', title: 'Mr. Akombasom', desc: 'Student affairs coordinator ensuring every performance is timely and polished.' },
                { label: 'Alumni', title: 'Alumni Council', desc: 'Alumni members supporting mentorship, finance, and community outreach for the event.' },
              ].map((member, i) => (
                <div key={i} className="bg-white p-8 rounded-lg border border-border">
                  <p className="text-secondary font-semibold text-sm mb-2">{member.label}</p>
                  <h3 className="text-xl font-bold text-primary mb-3">{member.title}</h3>
                  <p className="text-gray-600">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
