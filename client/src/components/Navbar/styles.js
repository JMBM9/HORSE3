import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  appBar: {
    border: '5px solid #555',
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    fontfamily: 'times new roman',
  },
  heading: {
    color: 'black',
    fontFamily: 'times new roman',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '20px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '300px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    fontfamily: 'times new roman',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },

}));
