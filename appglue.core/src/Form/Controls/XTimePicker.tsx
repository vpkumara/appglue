import React from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';

import {RegisterUIControl, ControlType} from "../Utilities/RegisterUIControl";
import {BaseTextEntryControl} from "./BaseTextEntryControl";
import {TimePickerIcon} from "../../CommonUI/Icon/TimePickerIcon";
import { StyledInputLabel, StyledFormHelperText } from "./XCommonStyled";


@RegisterUIControl('Data (Entry)', 'Time Picker', ControlType.Control, <TimePickerIcon />)
export class XTimePicker extends BaseTextEntryControl {

    render () {
        let customWidth = this.fullWidth ? '100%' : this.width ? `${this.width}px` : '200px';
        return (
            <form noValidate>
                <>
                    {
                        this.label && (
                            <StyledInputLabel>{this.label}</StyledInputLabel>
                        )
                    }            
                    <StyledTextField
                        type="time"
                        value={this.valueName?this.getFormDataValue(this.valueName): String}
                        onChange={this.handleChange}
                        data-testid={this.valueName}
                        width={customWidth}
                    />
                    {
                        this.hintText && (
                            <StyledFormHelperText>{this.hintText}</StyledFormHelperText>
                        )
                    }
                </>
            </form>
        );
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(this.valueName) {
            this.setFormDataValue(this.valueName, event.currentTarget.value);
        }
    }

    renderEditUI(): JSX.Element | null {
        return <XTimePickerEditUI editMe={this} />;
    }
}



class XTimePickerEditUI extends React.Component<{editMe: XTimePicker}> {
    render () {
        return (
            <>
                {this.props.editMe.renderBaseDataControlEditor()}
                {this.props.editMe.renderTextControlBasePropertyEditor()}
                {this.props.editMe.renderTextStyleSelectionEditor()}
            </>
        )
    }
}

const StyledTextField = styled(TextField)`
    width: ${props => props.width} !important;
    input {
        display: flex !important;
        justify-content: space-around !important;
        height: 59px !important;
        padding: 14px 20px !important;
        border: 1px solid #E6E9ED !important;
        box-sizing: border-box !important;
        border-radius: 5.65107px !important;
        color: #677C95 !important;    
        &:focus {
            color: #01244E !important; 
            border: 1.35302px solid #1873B9 !important;
        }
    }
`