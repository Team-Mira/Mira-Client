import { Box } from "@mui/system";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false})

export default function Heatmap({data}) {
  const options = {
      dataLabels: {
        enabled: false
      },
      colors: ['#5865F2'],
      title: {
        text: `${data.name} HeatMap`,
        style: {
          color: '#FFFFFF'
        }
      },
      xaxis: {
        categories: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
      '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'],
        labels: {
            style: {
              colors: '#FFFFFF'
            }
          }
      },
      chart: {
        height: '100%',
        width: '100%'
      },
      plotOptions: {
        heatmap: {
          distributed: true
        }
      },
      grid: {
        show: true,
        borderColor: '#000000',
        strokeDashArray: 0,
        position: 'front',
        xaxis: {
          lines: {
              show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          },
          labels: {
            style: {
              colors: '#FFFFFF'
            }
          }
      },
    },
    tooltip: {
      enabled: false
    }
  }


  const {channels} = data

  const series = channels.map(channel => ({
    name: channel.name,
    data: channel.activity,
  }))


  return (
    <Box sx={{height: 300, position: 'relative'}}>
      <Chart
        options={options}
        series={series}
        type="heatmap"
        height={300}
        />
    </Box>

  )

}

