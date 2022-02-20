import Navbar from "@nandwa/components/Navbar";
import Head from "next/head";


export default function Home() {
  return (
      <>
          <Head>
              <title>Nandwa  | Homepage</title>
              <meta name="description" content="" />
              <link rel="icon" href="/mylogo.png" />
          </Head>

         <Navbar/>

        <div className="py-14">
            <h1 className="text-3xl flex font-bold justify-center">
                Dropping Soon
            </h1>
        </div>

      </>

  )
}
