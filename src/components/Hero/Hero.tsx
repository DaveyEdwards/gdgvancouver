import * as React from 'react';
import { createStyles, Typography, withStyles } from '@material-ui/core';
import { url } from 'inspector';

interface Props {
  classes: {
    container: string;
    textContainer: string;
    backdrop: string;
  };
  img: string;
  height?: string;
  backdrop?: boolean;
  backgroundColor?: string;
  backgroundOpacity?: number;
}

const styles = () =>
  createStyles({
    container: {
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
    },
    textContainer: {
      position: 'absolute',
      width: '70%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    backdrop: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0.4,
      background: 'black',
    },
  });

const Hero: React.SFC<Props> = ({
  classes,
  height,
  children,
  img,
  backdrop,
  backgroundColor,
  backgroundOpacity,
}) => {
  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url(${img})`,
        maxHeight: height || 600,
        height: height || 600,
      }}
    >
      {backdrop ? (
        <div
          className={classes.backdrop}
          style={
            backgroundColor
              ? { backgroundColor, opacity: backgroundOpacity || 0.6 }
              : {}
          }
        />
      ) : null}
      <div className={classes.textContainer}>{children}</div>
    </div>
  );
};

export default withStyles(styles)(Hero);
