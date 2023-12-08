// eslint-disable-next-line react/prop-types
function Button({ children, className, onClick, ...props }) {
    return (
        <button className={className} onClick={onClick} {...props}>
            {children}
        </button>
    );
}

export default Button;
