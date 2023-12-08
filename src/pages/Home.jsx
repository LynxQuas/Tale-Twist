import { Link, useRouteLoaderData } from "react-router-dom";

import Panginitor from "../components/home/mainSection/Panginitor";
import Title from "../components/home/mainSection/Title";
import InfoText from "../components/home/mainSection/InfoText";

import Footer from "../components/home/footer/Footer";
import SectionContainer from "../ui/containers/SectionContainer";
import LandingPageContainer from "../ui/containers/LandingPageContainer";
import FeaturesContainer from "../components/home/featureSection/FeaturesContainer";

function Home() {
    const data = useRouteLoaderData("root");

    return (
        <>
            <SectionContainer bgColor={"bg-stone-800"}>
                <Title from="from-amber-200" to="to-amber-400">
                    Elevate Your Blogging Experience with <i>TaleTwist</i>
                </Title>

                <LandingPageContainer>
                    <Panginitor />
                    <InfoText data={data} />
                </LandingPageContainer>
            </SectionContainer>

            <SectionContainer bgColor="bg-stone-700">
                <Title from="from-amber-500" to="to-amber-600">
                    Features
                </Title>

                <FeaturesContainer />
                <Link
                    to="blogs"
                    className="bg-green-600 md:-mt-20 p-3 rounded text-white font-bold text-xl  hover:-translate-y-1  hover:text-amber-500  transition-transform duration-3s active:translate-y-0"
                >
                    Explore Now
                </Link>
            </SectionContainer>

            <Footer />
        </>
    );
}

export default Home;

{
    /* <div>Easy to Access</div>
<div>Community Engagement</div>
<div>Robust Profile Management</div> */
}

// Community Engagement goes beyond the written word; it's about connecting with your audience, sparking conversations, and celebrating the diverse perspectives that make our platform unique. With features like likes and comments, we're transforming your blog into a dynamic space where interaction and engagement take center stage.
