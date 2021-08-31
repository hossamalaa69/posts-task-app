import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function ProgressBar() {
  return (
    <div className="center" style={{marginTop: '40px'}}>
      <CircularProgress color="secondary" />
    </div>
  );
}
