// eslint-disable-next-line react/prop-types
function SectionContainer({ children, bgColor }) {
    return (
        <div
            className={`flex pt-20 items-center gap-20 flex-col min-h-screen ${bgColor} p-5`}
        >
            {children}
        </div>
    );
}

export default SectionContainer;
