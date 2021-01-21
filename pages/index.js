import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
import Link from '@material-ui/core/Link';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../app/components/Header/Header.js";
import Footer from "../app/components/Footer/Footer.js";
import GridContainer from "../app/components/Grid/GridContainer.js";
import GridItem from "../app/components/Grid/GridItem.js";
import Button from "../app/components/CustomButtons/Button.js";
import Parallax from "../app/components/Parallax/Parallax.js";
import HeaderLinks from "../app/components/Header/HeaderLinks.js";
// sections for this page
import SectionBasics from "../app/views/Components/SectionBasics.js";
import SectionNavbars from "../app/views/Components/SectionNavbars.js";
import SectionTabs from "../app/views/Components/SectionTabs.js";
import SectionPills from "../app/views/Components/SectionPills.js";
import SectionNotifications from "../app/views/Components/SectionNotifications.js";
import SectionTypography from "../app/views/Components/SectionTypography.js";
import SectionJavascript from "../app/views/Components/SectionJavascript.js";
import SectionCarousel from "../app/views/Components/SectionCarousel.js";
import SectionCompletedExamples from "../app/views/Components/SectionCompletedExamples.js";
import SectionLogin from "../app/views/Components/SectionLogin.js";
import SectionExamples from "../app/views/Components/SectionExamples.js";
import SectionDownload from "../app/views/Components/SectionDownload.js";

import styles from "../app/assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("../app/assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link href={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
      </div>
      <Footer />
    </div>
  );
}
