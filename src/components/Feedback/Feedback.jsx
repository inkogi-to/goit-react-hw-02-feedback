import PropTypes from "prop-types";
import {Btn} from "./Feedback.styled";
import {BiLike, BiDislike} from 'react-icons/bi'
import {BsEmojiNeutral} from 'react-icons/bs'


const Feedback = ({options, onClick}) => {
  return (
    <div>
      {options.map((option, index) => (
        <Btn type='button' key={index} onClick={() => onClick(option)}>{
          option === 'good' ? <BiLike style={{color: 'green'}}/> : option === 'bad' ?
            <BiDislike style={{color: 'red'}}/> : option === 'neutral' ?
              <BsEmojiNeutral style={{color: 'grey'}}/> : null
        }</Btn>))}
    </div>)


}
export default Feedback;


Feedback.propTypes = {
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string)
}
