import { Button } from "./StyledButton.styles";

import PropTypes from "prop-types";

const StyledButton = (props) => <Button {...props}>{props.children}</Button>;
StyledButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyledButton;
