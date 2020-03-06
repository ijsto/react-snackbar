import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledSnackbar = styled.div`
  align-items: center;
  background: ${({ theme, error }) => (error ? theme.alertCol : theme.blueCol)};
  color: white;
  display: flex;
  justify-content: center;
  height: 64px;
  position: absolute;
  top: 64px;
  width: 100%;
`;
const StyledSnackbarContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1240px;
  padding: 0 92px;
  z-index: 4;
`;

const Snackbar = ({ children, message, error, onClear, onClearAll }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      onClear();
    }, 3000);

    return () => clearTimeout(timeOut);
  });

  return (
    <StyledSnackbar error={error}>
      <StyledSnackbarContent>
        <div>{error || children || message}</div>

        <div>
          {onClearAll && (
            <button type="button" onClick={onClearAll}>
              Clear ALL
            </button>
          )}
          <button type="button" onClick={onClear}>
            Dismiss
          </button>
        </div>
      </StyledSnackbarContent>
    </StyledSnackbar>
  );
};

export default Snackbar;
