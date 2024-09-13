/*
 * Created Date: 2024-09-12T19:21:14                                           *
 * Author: Lei Fuentes                                                         *
 * Modified By: Lei Fuentes                                                    *
 * Last Modified: 2024-09-12T19:21:14                                          *
 */




import React from 'react';
const Button = ({ onClick, children, type = 'button', className = '', disabled = false, loading = false, ...props }) => {

  const color = props.color || 'lime'
  const kind = props.kind || 'info'

  return (
    <button
      type = {type}
      onClick = {loading || disabled ? null : onClick}
      className = {`btn ${kind} ${className}`}
      disabled = {disabled || loading}
      {...props}
    >
      {children}
    </button>

  );
};

export default Button;

