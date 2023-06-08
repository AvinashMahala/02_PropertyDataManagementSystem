import React from 'react';
import MasterViewPage from './../../pages/MasterViewPage';
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DashboardPageLoggedInViewProps {
  title: string;
  loggedInUser: any;
}

// Styles
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Dashboard: React.FC = () => {
  const classes = useStyles();

  // Sample static data
  const data = [
    { name: 'Properties', value: 350 },
    { name: 'Owners', value: 200 },
    { name: 'Rent Collected', value: 10000 },
    { name: 'Maintenance Works', value: 50 },
  ];

  return (
    <Grid container spacing={3}>
      {data.map(item => (
        <Grid item xs={12} sm={6} md={3} key={item.name}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography variant="body1">{item.value}</Typography>
          </Paper>
        </Grid>
      ))}
      <Grid item xs={12}>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
}

const DashboardPageLoggedInView: React.FC<DashboardPageLoggedInViewProps> = ({ title, loggedInUser }) => (
    <Dashboard />
);

export default DashboardPageLoggedInView;
