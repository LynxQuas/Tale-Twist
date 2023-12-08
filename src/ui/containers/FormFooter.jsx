import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function FormFooter({ text, link, name }) {
    return (
        <p className="text-sm text-center">
            {text}{" "}
            <Link className="text-blue-400" to={`/${link}`}>
                {name}
            </Link>
        </p>
    );
}

FormFooter.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string,
};

export default FormFooter;
