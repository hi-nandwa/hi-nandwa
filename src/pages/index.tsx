import Navbar from "@nandwa/components/Navbar";
import Head from "next/head";


export default function Home() {
  return (
      <>
          <Head>
              <title>nandwa</title>
              <meta name="description" content="" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar/>
          <h1 className="text-3xl font-bold">
              Coming Soon
          </h1>
      </>

  )
}
