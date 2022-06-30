import Head from "next/head";
import Navbar from "@nandwa/components/Navbar";
import Homepage from "@nandwa/components/homepage";
import Services from "@nandwa/components/services";
import Work from "@nandwa/components/work";
import Clients from "@nandwa/components/clients";
import Contact from "@nandwa/components/contact";
import Footer from "@nandwa/components/Footer";
import {NextPage} from "next";
const Home: NextPage = () => {
    return (
        <div className="bg-primary">
            <Head>
                <title>EHN | Homepage</title>
                <meta name="description" content=""/>
                <link rel="icon" href="/my-logo.png"/>
            </Head>
            <Navbar />
            <Homepage />
            <Services />
            <Work />
            <Clients />
            <Contact />
            <Footer />
        </div>
    )
};
export default Home
