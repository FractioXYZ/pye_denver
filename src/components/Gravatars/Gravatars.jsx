import React from 'react'
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
  createStyles,
  withStyles,
} from '@material-ui/core'

const gravatarStyles = theme =>
  createStyles({
    actionArea: {
      maxWidth: 300,
    },
    image: {
      height: 150,
    },
    artistName: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    id: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    artist: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  })

const Gravatar = ({ classes, id, artistName, pyeObject, artist }) => (
  <Grid item>
    <Card>
      <CardActionArea className={classes.actionArea}>
        {pyeObject && (
          <CardMedia className={classes.image} image={pyeObject} title={artistName} />
        )}
        <CardContent>
          <Typography variant="h6" component="h3" className={classes.artistName}>
            {artistName || '—'}
          </Typography>
          <Typography color="textSecondary">ID</Typography>
          <Typography component="p" className={classes.id}>
            {id}
          </Typography>
          <Typography color="textSecondary">artist</Typography>
          <Typography component="p" className={classes.artist}>
            {artist}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
)

const StyledGravatar = withStyles(gravatarStyles)(Gravatar)

const gravatarsStyles = theme =>
  createStyles({
    title: {
      marginTop: theme.spacing.unit * 2,
    },
  })

const Gravatars = ({ classes, gravatars }) => (
  <Grid container direction="column" spacing={16}>
    <Grid item>
      <Typography variant="title" className={classes.title}>
        {gravatars.length} Gravatars
      </Typography>
    </Grid>
    <Grid item>
      <Grid container direction="row" spacing={16}>
        {gravatars.map(gravatar => (
          <StyledGravatar key={gravatar.id} {...gravatar} />
        ))}
      </Grid>
    </Grid>
  </Grid>
)

export default withStyles(gravatarsStyles)(Gravatars)
