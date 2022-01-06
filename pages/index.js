import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import pic from './resources/JKohlProfile.jpg'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>JKohl Intern Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Hi. I bought a domain." />
        <img src={pic}></img>
      </main>

      <Footer />
    </div>
  )
}
