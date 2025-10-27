import React from 'react';
import truncate from 'lodash/truncate';
import useResponsiveTruncation from '../../../hooks/useResponsiveTruncation';

import { Chip, Link } from 'components';
import { TerraformIcon } from 'components/icons';

const TerraformChip = ({ terraformPackage, label, color = 'terraform-purple', ...rest }) => {
  const length = useResponsiveTruncation();
  if (!terraformPackage) return null;

  // Terraform package names are typically in format "namespace/name"
  const finalLabel = label || truncate(terraformPackage, { length });

  return (
    <Link to={`https://registry.terraform.io/providers/${terraformPackage}`} className="inline-block">
      <Chip
        label={finalLabel}
        icon={<TerraformIcon className="h-[1.5rem] w-[1.5rem] inline mr-1" />}
        color={color}
        {...rest}
      />
    </Link>
  );
};

export default TerraformChip;
