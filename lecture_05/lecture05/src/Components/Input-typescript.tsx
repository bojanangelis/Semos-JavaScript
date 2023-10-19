import React from 'react'
import PropTypes from 'prop-types';

// typescript interface

interface Props {
    tip: string;
    ime?: string;
    pisiNesto?: string;
    vrednost: string;
    pratiMiIzmeni: void;
}

const Input = ({
        tip,
        ime,
        pisiNesto,
        vrednost,
        pratiMiIzmeni,
}: Props) => {
  return (
    <p>Input</p>
  )
}

export default Input


Input.propTypes = {
    tip: PropTypes.string.isRequired,
    ime: PropTypes.string,
    pisiNesto: PropTypes.string,
    vrednost: PropTypes.string.isRequired,
    pratiMiIzmeni: PropTypes.func.isRequired,
}