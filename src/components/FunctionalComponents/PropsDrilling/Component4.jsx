import PropTypes from "prop-types";
export default function Component4({ data }) {
  return (
    <>
      <h4>Component4</h4>
      <h4>Hello {data}</h4>
    </>
  );
}

Component4.propTypes = {
  data: PropTypes.string.isRequired
}

Component4.defaultProps = {
  data: ''
}
