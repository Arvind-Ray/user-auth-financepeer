import React from 'react';
import { useHistory, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import {Onregister, Onlogin} from '../../actions';
import Modal from '../Modal';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header({ Onregister, Onlogin, register, login }) {
  let history = useHistory();
  const classes = useStyles();
  const [modalOpen, setModal] = React.useState(false);
  const [registerbool, setRegisterBool] = React.useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");
  const [password2, setPass2] = React.useState("");
  const [logoutbool, setLogout] = React.useState(false);

  React.useEffect(() => {
    if(logoutbool === true) {
      localStorage.removeItem("permission data")
      history.push('/financepeer')
    } 
  },[logoutbool]);

  const handleUser = (e) => {
    setName(e.target.value)
  }

  const handleEail = (e) => {
    setEmail(e.target.value)
  }
  const handlepassWord = (e) => {
    setPass(e.target.value)
  }
  const handlePass2 = (e) => {
    setPass2(e.target.value);
  };

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleSubmit = () => {
    registerbool ? Onlogin(email, password, password2) :  Onregister(name, email, password, password2);
  }

  const handleLogout = () => {
    setLogout(true)
  }
  if(login && login.success) {
    history.push('/home')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome to Financepeer 
          </Typography>
          {!login.success ? <Button onClick={handleModalOpen} color="inherit">Login</Button>:
          <Button onClick={handleLogout} color="inherit">Login out</Button>}
        </Toolbar>
      </AppBar>
      <Modal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
      >
        <DialogTitle id="alert-dialog-slide-title">{registerbool ? "Login Here": "Register Here"}</DialogTitle>
        <DialogContent>
          {!registerbool  && <TextField
            required
            value={name}
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="text"
            onChange={handleUser}
            fullWidth
          />}
          <TextField
            required
            value={email}
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            onChange={handleEail}
            fullWidth
          />
          <TextField
            required
            value={password}
            margin="dense"
            id="password"
            label="Password"
            type="password"
            onChange={handlepassWord}
            fullWidth
          />
          <TextField
            required
            value={password2}
            margin="dense"
            id="password"
            label="Confirm Password"
            type="password"
            onChange={handlePass2}
            fullWidth
          />
          <p>or {registerbool ? <Button onClick={() => setRegisterBool(!registerbool)}>Register</Button>: <Button onClick={() => setRegisterBool(!registerbool)}>Login</Button>}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {!registerbool ? "Register" : "Login"}
          </Button>
        </DialogActions>
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  const { register, login } = state;
  return {
   login,
   register
  }
};
export default connect(mapStateToProps, {
 Onregister,
 Onlogin
})(Header);