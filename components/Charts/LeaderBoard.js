import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box'

export default function LeaderBoard({ data, header }) {
  
    const { name, key } = header;
  let ranks = data[key]

  
  if (key === 'mostUsedReaction') {
    ranks = ranks?.map(rank => [rank.key, rank.value]) || [["No Scores"]];
  } else {
    ranks = ranks?.map((rank) => {
      return [data.users[rank.key].title, rank.value];
    }) || [["No Scores"]];
  }
  console.log(ranks)
  return (
    <Box sx={{height: 300, position: 'relative'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>{name}</TableHead>
        {ranks.map((rank, id) => (
          <TableRow key={"row" + id}>
            {rank.map((cell, i) => (
              <TableCell key={"cell" + i}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </Table>
    </Box>
  );
}
