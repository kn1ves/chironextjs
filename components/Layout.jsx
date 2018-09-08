import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function Layout(props){
	const { classes } = props;

	return(
		<div className={classes.root}>
			<style jsx global>{`
				body{ 
				margin: 0;
				}
			`}
			</style>
		  	<Grid container>
		  		<Grid item xs={12}>
		  			<Header />
		  		</Grid>
		  		<Grid item xs={12}>
		  			{props.children}
		  		</Grid>
		  		<Grid item xs={12}>
		  			<Footer />
		  		</Grid>
		  	</Grid>
		</div>
	);
}


Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);