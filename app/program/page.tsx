import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Program() {
  return (
    <>
      <Header currentPage="program" />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
                Program details for the 23rd Instrumentalist club.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover the full schedule, featured performances, and how the day will unfold in celebration of SWESCO MACHINE BOYS music.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#schedule" className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-opacity-90 transition">
                  See the Schedule
                </a>
                <a href="#performers" className="inline-flex items-center justify-center px-6 py-3 border-2 border-secondary text-secondary font-medium rounded-lg hover:bg-secondary hover:text-white transition">
                  Featured Performers
                </a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-3">Creative agenda</h3>
              <p className="text-gray-600">
                Designed to highlight musical excellence, community spirit, and inspiring alumni connections.
              </p>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">Church Service</h2>
              <p className="text-gray-600 text-lg">
                Explore the complete club timeline, including all main sessions, worship, and fellowship activities.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { time: '02:00 PM', title: 'Opening hymns and worships', desc: 'Begin with choral music and a warm welcome.' },
                { time: '02:30 PM', title: 'Message & Sermon', desc: 'Hear an inspiring sermon focused on faith, unity, and community service.' },
                { time: '03:30 PM', title: 'Communion & Prayer', desc: 'Participate in communion, guided prayer, and a time of reflection.' },
                { time: '04:00 PM', title: 'Fellowship', desc: 'Connect with friends, family, and church members after the service.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 pb-6 border-b border-border last:border-0 bg-white p-6 rounded-lg">
                  <div className="font-bold text-secondary min-w-fit text-lg">{item.time}</div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Performers */}
        <section id="performers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">Featured Performers</h2>
            <p className="text-gray-600 text-lg">
              Meet the groups which usually performs in church services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Lead', title: 'Symphony Ensemble', desc: 'Our senior orchestra performing classical and contemporary pieces with precision.' },
              { label: 'Guest', title: 'Alumni Soloists', desc: 'Talented former students returning to share their musical journeys and performances.' },
              { label: 'Spotlight', title: 'Jazz Band', desc: 'A vibrant lineup of brass, percussion, and rhythm talent.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg border border-border">
                <p className="text-secondary font-semibold text-sm mb-2">{item.label}</p>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">Club FAQs</h2>
              <p className="text-gray-600 text-lg">
                Everything guests need to know before attending the celebration.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { q: 'What time should I come to rehearsal?', a: 'Please we start rehearsal by 03:00 PM during wednessdays.' },
                { q: 'Is there room for rehearsal?', a: 'Rehearsal room is available on campus for students and members in the music club.' },
                { q: 'Can all students join the club?', a: 'Yes. The club is open to all students, and members of the school community.' },
                { q: 'How do I join the club?', a: 'Contact the music club via the contact page for audition and participation details.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-lg border border-border">
                  <h3 className="text-lg font-bold text-primary mb-3">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
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
