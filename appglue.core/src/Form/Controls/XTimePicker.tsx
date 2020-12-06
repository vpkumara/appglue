import React from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

import {RegisterUIControl, ControlType} from "../Utilities/RegisterUIControl";
import {BaseTextEntryControl} from "./BaseTextEntryControl";
import {TextControlStyle} from "../FormDesignConstants";
import {TimePickerIcon} from "../../CommonUI/Icon/TimePickerIcon";
import { StyledInputLabel, StyledFormHelperText } from "./XCommonStyled";
import {IssueData} from "../Utilities/FormEditContext";
import {TextFieldProps} from "./XControlProps";


@RegisterUIControl('Data (Entry)', 'Time Picker', ControlType.Control, <TimePickerIcon />)
export class XTimePicker extends BaseTextEntryControl {

    render () {

        let style = (this.getFormRuntimeContext()?.form)?.defaultTextStyle;

        if (this.overrideStyle && this.style)
            style = this.style;

        let size : 'medium' | 'small' = (this.getFormRuntimeContext()?.form)?.defaultTextSize ?? 'medium';

        if (this.overrideStyle && this.size)
            size = this.size;

        const issueData : IssueData | null =  this.getFormRuntimeContext()!.getControlContext(this)!.getRuntimeIssueData();
        const issueText: string = issueData?.text || '';
        const customWidth = this.fullWidth ? '100%' : this.width ? `${this.width}px` : '200px';

        switch(style) {
            case TextControlStyle.LABELED :
                return (
                    <form noValidate>
                        <>
                            {this.label && <StyledInputLabel data-role={TextControlStyle.LABELED}>{this.label}</StyledInputLabel>}
                            <StyledTextField
                                size={size}
                                data-size={size}
                                variant={"outlined"}
                                fullWidth={this.fullWidth}
                                type="time"
                                value={this.valueName?this.getFormDataValue(this.valueName): String}
                                onChange={this.handleChange}
                                data-testid={this.valueName}
                                width={customWidth}
                                error={Boolean(issueText)}
                            />
                            {
                                (issueText && issueText.length > 30)  && (
                                    <Tooltip title={issueText} arrow placement="bottom">
                                        <StyledFormHelperText error={Boolean(issueText)} data-testid={`${this.valueName || 'timepicker'}-hinttext`}>
                                            {issueText.slice(0, 30) + '...'}
                                        </StyledFormHelperText>
                                    </Tooltip>
                                ) 
                            }
                            {
                                ((issueText && issueText.length < 31) || this.hintText) && (
                                    <StyledFormHelperText error={Boolean(issueText)} data-testid={`${this.valueName || 'timepicker'}-hinttext`}>
                                        {issueText ? issueText: this.hintText}
                                    </StyledFormHelperText>
                                )
                            }
                        </>
                    </form>
                );
            case TextControlStyle.SHADED :
                return (
                    <form noValidate>
                        <>
                            <StyledTextField
                                size={size}
                                data-size={size}
                                variant={"filled"}
                                fullWidth={this.fullWidth}
                                type="time"
                                value={this.valueName?this.getFormDataValue(this.valueName): String}
                                onChange={this.handleChange}
                                data-testid={this.valueName}
                                width={customWidth}
                                error={Boolean(issueText)}
                                label={this.valueName}
                            />
                            {
                                (issueText && issueText.length > 30)  && (
                                    <Tooltip title={issueText} arrow placement="bottom">
                                        <StyledFormHelperText error={Boolean(issueText)} data-testid={`${this.valueName || 'timepicker'}-hinttext`}>
                                            {issueText.slice(0, 30) + '...'}
                                        </StyledFormHelperText>
                                    </Tooltip>
                                ) 
                            }
                            {
                                ((issueText && issueText.length < 31) || this.hintText) && (
                                    <StyledFormHelperText error={Boolean(issueText)} data-testid={`${this.valueName || 'timepicker'}-hinttext`}>
                                        {issueText ? issueText: this.hintText}
                                    </StyledFormHelperText>
                                )
                            }
                        </>
                    </form>
                );
            case TextControlStyle.UNDERLINED :
                return (
                    <form noValidate>
                        <>
                            <StyledTextField
                                size={size}
                                data-size={size}
                                variant={"standard"}
                                fullWidth={this.fullWidth}
                                type="time"
                                value={this.valueName?this.getFormDataValue(this.valueName): String}
                                onChange={this.handleChange}
                                data-testid={this.valueName}
                                width={customWidth}
                                error={Boolean(issueText)}
                                label={this.valueName}
                            />
                            {
                                (issueText && issueText.length > 30)  && (
                                    <Tooltip title={issueText} arrow placement="bottom">
                                        <StyledFormHelperText error={Boolean(issueText)} data-testid={`${this.valueName || 'timepicker'}-hinttext`}>
                                            {issueText.slice(0, 30) + '...'}
                                        </StyledFormHelperText>
                                    </Tooltip>
                                ) 
                            }
                            {
                                ((issueText && issueText.length < 31) || this.hintText) && (
                                    <StyledFormHelperText error={Boolean(issueText)} data-testid={`${this.valueName || 'timepicker'}-hinttext`}>
                                        {issueText ? issueText: this.hintText}
                                    </StyledFormHelperText>
                                )
                            }
                        </>
                    </form>
                );  
            case TextControlStyle.OUTLINE :
                return (
                    <form noValidate>
                        <>
                            <StyledTextField
                                size={size}
                                data-size={size}
                                variant={"standard"}
                                fullWidth={this.fullWidth}
                                type="time"
                                value={this.valueName?this.getFormDataValue(this.valueName): String}
                                onChange={this.handleChange}
                                data-testid={this.valueName}
                                width={customWidth}
                                error={Boolean(issueText)}
                                label={this.valueName}
                            />
                            {
                                (issueText && issueText.length > 30)  && (
                                    <Tooltip title={issueText} arrow placement="bottom">
                                        <StyledFormHelperText error={Boolean(issueText)} data-testid={`${this.valueName || 'timepicker'}-hinttext`}>
                                            {issueText.slice(0, 30) + '...'}
                                        </StyledFormHelperText>
                                    </Tooltip>
                                ) 
                            }
                            {
                                ((issueText && issueText.length < 31) || this.hintText) && (
                                    <StyledFormHelperText error={Boolean(issueText)} data-testid={`${this.valueName || 'timepicker'}-hinttext`}>
                                        {issueText ? issueText: this.hintText}
                                    </StyledFormHelperText>
                                )
                            }
                        </>
                    </form>
                );
        }

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
    width: ${(props: TextFieldProps) => props.width} !important;
    fieldset {
        border: unset !important;
    }
    input {
        display: flex !important;
        justify-content: space-around !important;
        align-items: center;
        border-radius: 5.65107px !important;
        color: #677C95 !important;
        padding-left: 20px;
        padding-right: 20px;
        &:focus {
            color: #01244E !important; 
            border: ${({variant}) => variant === "outlined" ? '1.35302px':'0px'} solid ${({error}) => error? '#F65C66' : '#1873B9'} !important;
        }
        border: ${({variant}) => variant === "outlined" ? '1.35302px':'0px'} solid ${({error}) => error? '#F65C66' : '#E6E9ED'} !important;
    }
`   as React.ComponentType<TextFieldProps>