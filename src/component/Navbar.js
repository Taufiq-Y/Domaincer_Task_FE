import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" style={{fontWeight:'bold',fontSize:'40px'}} className={classes.title}>
       <div style={{display:'flex'}}>  
          <span style={{color:'white',fontWeight:'bold',fontSize:'40px',margin:'0 10px'}}>Domaincer</span> Careers</div>
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="inherit"  ><Link to='/home' style={{textDecoration:"none",color:"white"}}>
                Home
              </Link></Button>
              <Button color="inherit" ><Link to='/addjobs' style={{textDecoration:"none",color:"white"}}>
                Add Jobs</Link></Button>
              <Button color="inherit" >
                <Link to='/myjobs' style={{textDecoration:"none",color:"white"}}>
                  My Jobs</Link>
              </Button>
              {/* <Button color="inherit" >
                <Link to='/employees' style={{textDecoration:"none",color:"white"}}>
                  Employees</Link>

              </Button> */}
              <Button color="inherit" >
                <Link to='/profile' style={{textDecoration:"none",color:"white"}}>
                  Profile</Link>

              </Button>
              <Button color="inherit" >
                <Link to='/logout' style={{textDecoration:"none",color:"white"}}>
                  Logout</Link>

              </Button>
            </>
          ) : (
            <>
             <Button color="inherit" >
                <Link to='/home' style={{textDecoration:"none",color:"white"}}>
                  Home
                  </Link>
                </Button>
                <Button
                  color="inherit"
                  
                >
                  <Link to='/applications' style={{textDecoration:"none",color:"white"}}>
                  Applications</Link>
                  
                </Button>
              <Button color="inherit" >
                <Link to='/profile' style={{textDecoration:"none",color:"white"}}>
                  Profile</Link>

              </Button>
              <Button color="inherit" >
                <Link to='/logout' style={{textDecoration:"none",color:"white"}}>
                  Logout</Link>

              </Button>
              </>
          )
        ) : (
          <>
            <Button color="inherit">
              <Link to='/login' style={{textDecoration:"none",color:"white"}}>Login</Link>
            </Button>
            <Button color="inherit">
              <Link to='/signup' style={{textDecoration:"none",color:"white"}}>Signup</Link>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;