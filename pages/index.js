import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>JKohl Intern Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Hi. I bought a domain." />
      </main>

    </div>
  )
}
