import Card from '@mui/material/Card';

import CardHeader from '@mui/material/CardHeader';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import NetworkGraph from '../Charts/NetworkGraph';

import { dark } from '../../styles/theme/M3colors';

export default function SSCM(props) {
  const { data } = props;

  return (
    <Card
      sx={{
        backgroundColor: dark.surface,
        boxShadow: 0,
        borderRadius: 3,
      }}
    >
      <CardHeader title='User Map' />
      <div>
        <NetworkGraph data={data} />
      </div>
    </Card>
  );
}
