import './Feedback.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul> 
            {options.map(option => (
                <li key={option} className="buttonList">
                  <button type="button" onClick={() => onLeaveFeedback(option)}>
                    {option.slice(0, 1).toLocaleUpperCase() + option.slice(1)}
                </button>  
            </li>
     ))}
        </ul>
    );
}
        
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;