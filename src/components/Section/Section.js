import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
 <div className="Section">
   <h2>{title}</h2>
   {children}
</div>
 );


Section.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Section;