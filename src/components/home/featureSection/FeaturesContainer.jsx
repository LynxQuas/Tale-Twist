import easyAccess from "/easy-access.png";
import community from "/community.png";
import profile from "/profile.png";
import Features from "./Features";

// eslint-disable-next-line react/prop-types
function FeaturesContainer() {
    return (
        <div className="w-[90%] flex gap-6 justify-center md:py-20 flex-col lg:flex-row">
            <Features
                title="Easy to Access"
                img={easyAccess}
                text="Our Easy-to-Access feature is a user-centric approach to
                navigating and utilizing the full potential of our platform
                effortlessly. We believe that accessing the tools and features
                you need should be as intuitive as possible, allowing you to
                focus on what you do best—creating exceptional content."
            />

            <Features
                title="Community Engagement"
                img={community}
                text="Community Engagement goes beyond the written word;
                its about connecting with your audience, sparking
                conversations, and celebrating the diverse
                perspectives that make our platform unique. With
                features like likes and comments, we're
                transforming your blog into a dynamic space where
                interaction and engagement take center stage."
            />

            <Features
                title="Profile Management"
                img={profile}
                text="Create comprehensive user profiles that allow
                content creators to showcase their work, interests,
                and expertise. Include customizable profile pages
                where users can upload a profile picture, and link
                to their social media accounts. Implementing a
                rating or endorsement system for content creators
                can also help build credibility within the
                community."
            />
        </div>
    );
}

export default FeaturesContainer;
