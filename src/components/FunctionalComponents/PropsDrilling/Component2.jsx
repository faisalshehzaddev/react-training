import Component3 from "./Component3";
import PropTypes from "prop-types";
export default function Component2({ data }) {
  return (
    <>
      <h4>Component2</h4>
      <Component3 data={data} />
    </>
  );
}

Component2.propTypes = {
  data: PropTypes.string.isRequired
}

Component2.defaultProps = {
  data: ''
}
