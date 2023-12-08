// eslint-disable-next-line react/prop-types
function LandingPageContainer({ children }) {
    return (
        <div className="flex flex-col gap-20 px-10 md:flex-row md:items-center md:justify-center">
            {children}
        </div>
    );
}

export default LandingPageContainer;
