import "./index.scss";
import { Link } from "react-router-dom";
const ToolsPage = () => {
  return (
    <>
      <div className="banner">
        <p>Our Tools</p>
      </div>
      <div className="tools">
        <div className="tool">
          <p className="tool-head">University Shortlisting Tool</p>
          <p className="tool-desc">
            Find Your Perfect Fit Discover your ideal US universities
            effortlessly with our exclusive shortlisting tool.
          </p>
          <Link to={"/"}>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="tool">
          <p className="tool-head">Universities comparision Tool</p>
          <p className="tool-desc">
            Make Informed Choices Overwhelmed by university options? Our compare
            tool allows you to effortlessly stack up universities side by side.
          </p>
          <Link to={"/"}>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ToolsPage;
