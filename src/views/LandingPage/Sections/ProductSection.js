import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Description";
import VerifiedUser from "@material-ui/icons/Healing";
import Fingerprint from "@material-ui/icons/LocalHospital";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Nuestros servicios</h2>
          <h5 className={classes.description}>
            Trabajamos para cubrir todas sus necesidades médico laborales.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Exámenes de Salud"
              description="Un servicio diferencial de Exámenes de Salud Laboral basados en la capacidad, eficiencia y aptitud de nuestro personal."
              icon={Chat}
              iconColor="info"
              vertical
            />
            <Button color="primary" simple>
              Conocer más
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Servicio Médico en Planta"
              description="Medicina del Trabajo dentro de la compañía, brinando asi  médicos del trabajo, enfermeros, y emergencias, entre otros."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
            <Button color="primary" simple>
              Conocer más
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Asesoría Médico Legal"
              description="Consiste en evaluar los servicios externos e internos de medicina laboral e higiene y seguridad presentes en cada empresa."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
            <Button color="primary" simple>
              Conocer más
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
