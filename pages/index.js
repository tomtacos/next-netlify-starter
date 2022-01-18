import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Tom Tacos!" />
        <p className="description">
          Sandy is my boo boo
        </p>
      </main>

      <Footer />
    </div>
  )
}
