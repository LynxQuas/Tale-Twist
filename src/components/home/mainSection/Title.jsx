// eslint-disable-next-line react/prop-types
function Title({ from, to, children }) {
    return (
        <div className="text-5xl font-extrabold mb-10">
            <span
                className={`bg-clip-text text-transparent bg-gradient-to-r ${from} ${to}`}
            >
                {children}
            </span>
        </div>
    );
}

export default Title;
