import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from "@storybook/react/types-6-0";
import {XFormDesigner} from "../../Form/XFormDesigner";
import {PropertyEditorText, PropertyEditorTextInterface} from "./PropertyEditorText";



export default {
    title: "Shared/Property Editors",
    component: XFormDesigner,
} as Meta;


const MissingTemplate: Story<{}> = () => (
    <div>
        Missing
    </div>
);


class TextData implements PropertyEditorTextInterface {
    editObject: object = {};
    hint: string = 'hint';
    label: string = 'TextEditor';
    parentDefaultValue: string | null = null;
    propertyName: string | number = 'textValue';
    requiredText: string = 'required text';

    updateCallback() {
    }

}

const TextTemplate: Story<PropertyEditorTextInterface> = (args) => <PropertyEditorText {...args} />;

export const TextEditor = TextTemplate.bind({}, new TextData());
