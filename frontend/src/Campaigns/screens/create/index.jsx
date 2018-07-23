import React from 'react';

import { ContentWrapper }  from '../../../Layout/components/Wrappers';
import { NewCampaignForm } from '../../';

const CampaignsCreate = function Campaigns() {
  return (
    <ContentWrapper title="Campaigns - New">
      <div />
      <NewCampaignForm />
    </ContentWrapper>
  );
};

export default CampaignsCreate;
