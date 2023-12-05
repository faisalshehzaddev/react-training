import Component4 from "./Component4";
import PropTypes from "prop-types";
export default function Component3({ data }) {
  return (
    <>
      <h4>Component3</h4>
      <Component4 data={data} />
    </>
  );
}

Component3.propTypes = {
  data: PropTypes.string.isRequired
}

Component3.defaultProps = {
  data: ''
}
