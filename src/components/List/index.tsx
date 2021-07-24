import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 700,
      height: 650,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

type Props = {
  items: Array<any>;
  action?: (item: any) => void;
};

export default function TitlebarImageList({ items }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} cols={4}  style={{ height: 'auto' }} className={classes.imageList}>
        {items.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.description}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon} >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}