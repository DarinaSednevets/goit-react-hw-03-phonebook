import PropTypes from 'prop-types';
import styles from "./Filter.module.css"

const Filter = ({ value, onChange }) => (
    < label >
        Find contact by name
        < input className={styles.input} type="text" value={value} onChange={onChange} ></input >
    </label >

);
export default Filter;
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};