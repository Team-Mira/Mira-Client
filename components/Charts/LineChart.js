import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box } from "@mui/system";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  cutoutPercentage: 80,
  color: '#ffffff',
  scales: {
    color: '#ffffff'
  },
  layout: { padding: 0 },
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  responsive: true,
};

const labels = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
  '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];

export default function LineChart({ data }) {

  const { channels } = data

  const chartData = {
    labels,
    color: '#ffffff',
    datasets: channels.map(channel => ({
      label: channel.name,
      data: channel.activity,
      borderColor: channel.colors.border,
      backgroundColor: channel.colors.main,
      borderWidth: 2
    }))
  };

  return (
    <Box sx={{height: 300, position: 'relative'}}>
      <Line options={options} data={chartData} />
    </Box>
  )
}
