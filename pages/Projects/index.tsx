import TopBar from "components/TopBar";
import styles from "./styles.module.scss";

import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Projects = () => {
  const classes = useStyles();

  return (
    <>
      <TopBar active="Projects" />

      <div className={styles.cardGallery}>
        <div className={`${styles.card} ${styles.card1}`}>
          <Image
            src="/images/buddyTreeImage2.png"
            width="252"
            height="147"
            layout="intrinsic"
          />
          <div className={styles.textContainer}>
            <h4>Voting feature</h4>
            <p>
              A reusable component that allows users to vote on new features.
              Implemented in React, Flask and Psql.
            </p>
            <div className={styles.buttonContainer}>
              <Link href="https://github.com/jonnyz32/BuddyTree-FeatureVote/blob/master/README.md">
                <button>Github</button>
              </Link>
              <Link href="https://buddytree-feature-vote.herokuapp.com/10">
                <button>Heroku</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card2}`}>
          <Image
            src="/images/shapy.png"
            width="303"
            height="130"
            layout="intrinsic"
          />
          <div className={styles.textContainer}>
            <h4>Shapy.js</h4>
            <p>
              Javascript library implemented in vannila js that aids in applying
              geometric dom manipulation to websites.
            </p>
            <div className={styles.buttonContainer}>
              <Link href="https://github.com/jonnyz32/Shapy">
                <button>Github</button>
              </Link>
              <Link href="https://stark-bastion-08658.herokuapp.com/examples.html">
                <button>Heroku</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card3}`}>
          <Image
            src="/images/uoftfriendslogin2.png"
            width="300"
            height="179"
            layout="intrinsic"
          />
          <div className={styles.textContainer}>
            <h4>U of T Friends</h4>
            <p>
              Social media site built using React, Node, and MongoDB. Supports
              live chatting with other students, as well as in groups for
              courses.
            </p>
            <div className={styles.buttonContainer}>
              <Link href="https://github.com/jonnyz32/UofTFriends">
                <button>Github</button>
              </Link>
              <Link href="https://floating-brook-03042.herokuapp.com/">
                <button>Heroku</button>
              </Link>
            </div>
          </div>
        </div>
        {/* <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              width="100"
              className={classes.media}
              image="/images/uoftfriendslogin2.png"
              title="Social media site in React"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                U of T Friends
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h3">
                Social media site built using React, Node, and MongoDB. Supports
                live chatting with other students, as well as in groups for
                courses.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="primary"
              href="https://github.com/jonnyz32/UofTFriends"
            >
              Github
            </Button>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              href="https://floating-brook-03042.herokuapp.com/"
            >
              Heroku
            </Button>
          </CardActions>
        </Card> */}
        {/* <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/images/buddyTreeImage2.png"
              title="Voting on user features"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Voting feature
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h3">
                A reusable component that allows users to vote on new features.
                Implemented in React, Flask and Psql.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="primary"
              href="https://github.com/jonnyz32/BuddyTree-FeatureVote/blob/master/README.md"
            >
              Github
            </Button>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              href="https://buddytree-feature-vote.herokuapp.com/10"
            >
              Heroku
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              width="100"
              className={classes.media}
              image="/images/shapy.png"
              title="Social media site in React"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Shapy.js
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h3">
                Javascript library implemented in vannila js that aids in
                applying geometric dom manipulation to websites.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="primary"
              href="https://github.com/jonnyz32/UofTFriends"
            >
              Github
            </Button>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              href="https://floating-brook-03042.herokuapp.com/"
            >
              Heroku
            </Button>
          </CardActions>
        </Card> */}
      </div>
    </>
  );
};

{
  /* <Script
        src="https://kit.fontawesome.com/6ae1387e4c.js"
        crossOrigin="anonymous"
      ></Script> */
}

{
  /* <TopBar active="Projects" />
      <div className={styles.cardGallery}>
        <div className={styles.cardContainer}>
          <h2>Social Media Site</h2>
          <i className="fab fa-react fa-5x"></i>
          <Images
            src="/images/uoftfriendslogin2.png"
            width={426}
            height={255}
            layout="intrinsic"
            quality={100}
          ></Images>
        </div>
      </div> */
}

export default Projects;
