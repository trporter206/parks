import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  clusterMarker: {
    color: '#fff',
    background: '#1978c8',
    borderRadius: '50%',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker: {
    background: 'none',
    border: 'none',
  },
}));
