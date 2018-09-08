import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from 'react-icons/lib/fa/facebook-square';
import InstagramIcon from 'react-icons/lib/ti/social-instagram';
import TwitterIcon from 'react-icons/lib/fa/twitter-square';

const styles = {
  root: {
    flexGrow: 1,
  }}

function SMButtons(props) {
  const {
    classes
  } = props;
  return (
    <div className={classes.root}>
    <Link href='/'>
      <IconButton>
        <FacebookIcon size="24" color="#fff" />
      </IconButton>
    </Link>
    <Link href='/'>
      <IconButton>
        <InstagramIcon size="24" color="#fff" />
      </IconButton>
    </Link>
    <Link href='/'>
      <IconButton>
        <TwitterIcon size="24" color="#fff" />
      </IconButton>
    </Link>
    </div>
  );
}

SMButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SMButtons);