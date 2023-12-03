import { useContext } from 'react';
import { convertArrayToMatrix, convertStringToArray } from '../utils/utils';
import { statsContext } from '../store/statsContext';

function FileLoader() {
  const { stats, setStats } = useContext(statsContext);

  function handleFileUpload(ev) {
    ev.preventDefault();

    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (readerEv) => {
      const data = readerEv.target.result;
      const arr = convertStringToArray(data);
      const matrix = convertArrayToMatrix(arr);

      // error checking
      matrix.forEach((row, index) => {
        if (row.length !== 4) {
          alert(`Invalid data on line ${index + 1}`);
        }

        for (let i = 2; i < 4; i++) {
          if (isNaN(+row[i])) {
            alert(`Data on line ${index + 1}, position ${i + 1} must be a number.`);
          }
        }
      });

      setStats(matrix);
    }
  }

  return <input type="file" onChange={handleFileUpload} />
}

export default FileLoader;
