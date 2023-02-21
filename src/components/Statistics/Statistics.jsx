import PropTypes from "prop-types";
import {StatList} from "./Statistics.styled";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (<StatList>
    <li>
      <p>Good_{good}</p>
    </li>
    <li>
      <p>Neutral_{neutral}</p>
    </li>
    <li>
      <p>Bad_{bad}</p>
    </li>
    <li>
      <p>Total_{total}</p>
    </li>
    <li>
      <p>Positive feedback___{positivePercentage}%</p>
    </li>
  </StatList>)
}
export default Statistics

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}
