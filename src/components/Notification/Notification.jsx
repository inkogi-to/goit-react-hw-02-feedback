import PropTypes from "prop-types";
import {TitleText} from "./Notification.styled";

const Notification = ({message}) => {
  return (
    <TitleText>{message}!!!</TitleText>
  )
}
export default Notification

Notification.propTypes = {
  message: PropTypes.string.isRequired
}
