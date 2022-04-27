import Head from "next/head";
import {NextPage} from "next";

const Home : NextPage = ( ) => {
    return(
        <div className="flex min-h-screen  bg-primary">
            <Head>
                <title>EHN  | Homepage</title>
                <meta name="description" content="" />
                <link rel="icon" href="/mylogo.png" />
            </Head>

        </div>
    )
};
export default Home