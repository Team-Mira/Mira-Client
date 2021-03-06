import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import LineChartSingle from '../Charts/LineChartSingle';
import NetworkGraph from '../Charts/NetworkGraph';
import Heatmap from '../Charts/Heatmap'
import WordCloud from '../Charts/WordCloud';


import { dark } from '../../styles/theme/M3colors';

export default function SSCM(props) {
  const { name } = props.chartType;
  const { data } = props;

  function cardChart(name) {
    switch (name) {
      case 'Messages Per Channel':
        return <DoughnutChart data={data} />;
      case 'Activity Per Channel':
        return <LineChart data={data} />;
      case 'Activity':
        return <LineChartSingle data={data} />;
      case 'User Map':
        return <NetworkGraph data={data} />
      case 'Heat Map':
        return <Heatmap data = {data} />
      case 'Word Use':
        return <WordCloud data={data} />

      default:
        return <></>;
    }
  }

  return (
    <Card
      sx={{
        backgroundColor: dark.surface,
        boxShadow: 0,
        borderRadius: 3,
      }}
    >
      <CardHeader title={name}/>
      <CardContent >{cardChart(name)}</CardContent>
    </Card>
  );
}
