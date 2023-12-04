import { useContext } from 'react';
import { statsContext } from '../store/statsContext';
import Table from './Table';

function BestPlayerInTheTeam() {
  const { stats } = useContext(statsContext);

  let tableData;
  if (stats.length > 0) {
    const teams = {};

    stats.forEach(row => {
      if (!teams.hasOwnProperty(row[1])) {
        teams[row[1]] = {
          [row[0]]: +row[3],
        };
      } else {
        if (!teams[row[1]].hasOwnProperty(row[0])) {
          teams[row[1]][row[0]] = +row[3];
        } else {
          teams[row[1]][row[0]] += +row[3];
        }
      }
    });

    for (let key in teams) {
      teams[key] = Object.entries(teams[key]).sort((a, b) => b[1] - a[1]);
    }

    const teamsWithBestPlayer = [];
    for (let key in teams) {
      const row = [key, teams[key][0][0], teams[key][0][1]];
      teamsWithBestPlayer.push(row);
    }
    teamsWithBestPlayer.sort((a, b) => b[2] - a[2]);

    tableData = teamsWithBestPlayer;
  }

  return (
    <>
      {tableData ? (
        <Table
          columns={['Team', 'Player name', 'Points scored']}
          data={tableData}
          showPlacement
        />
      ) : null}
    </>
  );
}

export default BestPlayerInTheTeam;
