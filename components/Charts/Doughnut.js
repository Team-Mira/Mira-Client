import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from "@mui/system";

export default function DoughnutChart(){
  ChartJS.register(ArcElement, Tooltip, Legend);

  const testData = {
    labels: ['Channel1', 'Channel2', 'Channel3', 'Channel4'],
    datasets: [
      {
        label: '# of Votes',
        data: [27, 21, 32, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return(
    <Box sx={{height: 300, position: 'relative'}}>
      <Doughnut data={testData} options={options} />
    </Box>
  )
}
