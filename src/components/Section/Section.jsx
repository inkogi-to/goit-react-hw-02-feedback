import PropTypes from "prop-types";
import {SectinConteiner, Title} from "./Section.style"

const Section = ({title, children}) => {
  return (
    <SectinConteiner>
      {title && <Title>{title}</Title>}
      {children}
    </SectinConteiner>
  )
}
export default Section

Section.propTypes = {
  title: PropTypes.string
}
