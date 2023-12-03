import LoaderImg from "../../images/loader.svg";
import "./Loader.scss";

const Loader = ({ loading }) => {
    return (
        <div className="loader" loading={loading}>
            <img className="loader__img" src={LoaderImg} alt="loader circle" />
            <span className="loader__text">Loading...</span>
        </div>
    );
};

export default Loader;
