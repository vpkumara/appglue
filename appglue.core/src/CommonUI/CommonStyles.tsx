import styled from "styled-components";
import {AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import MovementIcon from "../assets/images/icons/movement.svg";

export const EditLayerConfigArea = styled.div`
  position: absolute;
  border: 2px solid lightgrey;
  border-radius: 4px;
  overflow: auto;
  background: #fff;
  max-height: calc(100% - 10px);
  right: 0;
  top: 5px;
  width: 350px;
  z-index: 101;
`;

export const EditLayerStyledTypography = styled(Typography)`
    && {
        width: 100%;
        padding: 20px 0;
        &:hover {
            cursor: url(${MovementIcon}), auto;
        }
    }
`;

export const EditLayerStyledAccordionSummary = styled(AccordionSummary)`
    && {
        &.Mui-expanded {
            border-bottom: 1px solid #E6E9ED;
        }
        
        .MuiAccordionSummary-content,
        .MuiAccordionSummary-content.Mui-expanded {
            margin: 0;
        }
    }
`;

export const EditLayerStyledAccordionDetails = styled(AccordionDetails)`
    && {
        padding-top: 20px;
        overflow: auto;
        max-height: 500px;

        > * {
            margin-bottom: 18px;
        }

        .MuiTypography-caption {
            margin-bottom: 10px;
        }

        .MuiCollapse-wrapperInner > div {
            margin-bottom: 18px;
            width: 100%;
        }
    }
`;