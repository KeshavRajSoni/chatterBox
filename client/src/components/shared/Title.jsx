import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

function Title({
  title = "ChatterBox",
  description = "This is an chatting application.",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Title;
