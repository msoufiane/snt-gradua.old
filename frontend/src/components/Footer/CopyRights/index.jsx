import React from 'react';

const CopyRights = function CopyRights() {
  const date = new Date();
  return (
    <div>
      <strong>Copyright &copy; {(date.getFullYear() > 2018) ? `2018-${date.getFullYear()}` : '2018'}
        <a href="https://sentad.com">&nbsp;SentAd Media</a>.&nbsp;
      </strong>
      <span>All rights reserved.</span>
    </div>
  );
};

export default CopyRights;
