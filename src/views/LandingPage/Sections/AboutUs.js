import React from "react";
// core components
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
//import styles from "assets/jss/material-kit-react/views/landingPage.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import Carrousel from "../../Components/Sections/SectionCarousel";
const useStyles = makeStyles(styles);

export default function AboutUs() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Sobre nosotros</h2>
          <Carrousel />
          <h5 className={classes.description}>
            “Somos una empresa familiar de EMPEDRADO la cual lo elegimos por la
            naturaleza de su aire y la ausencia de pesticidas, fitosanitarios y
            cultivos en sus suelos. Nuestras abejas se desarrollan en un entorno
            natural, libre de industrias, contaminación y rodeada de una rica
            flora autóctona y silvestre que la hace única y especial. La miel se
            cosecha de manera manual, obteniendo un producto artesanal de
            inigualable calidad.”
          </h5>
        </GridItem>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Parallax filter image={require("assets/img/medico.jpeg")}>
              <div className={classes.container}></div>
            </Parallax>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}></GridItem>
        </GridContainer>
      </GridContainer>
    </div>
  );
}
