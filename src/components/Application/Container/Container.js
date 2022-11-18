import React from "react";
import PropTypes from 'prop-types';
import styles from './Container.module.css'

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};