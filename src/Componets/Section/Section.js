import React from 'react';
import PropTypes from 'prop-types';

import s from './Section.module.css';

const Section = ({ children }) => {
  return (
    <section className={s.wrapper}>
      {children}
    </section>
  );
};

Section.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Section;
