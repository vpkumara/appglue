import {BaseExpression} from "../../BaseExpression";
import {ExpressionValue} from "../../ExpressionValue";
import {ExpressionExpectedType} from "../../ExpressionExpectedType";
import {ExpressionValueRenderer} from "../../ExpressionValueRenderer";
import React from "react";
import {RegisterExpression} from "../../Utilities/RegisterExpression";
import {BracketedDiv, ExpressionPiece} from "../../ExpressionStyles";
import {FunctionsOutlined} from "@material-ui/icons";

@RegisterExpression('Math', 'Sum', <FunctionsOutlined fontSize={'small'}/>, ExpressionExpectedType.NUMBER)
export class SumExpression extends BaseExpression {
    value1: ExpressionValue;

    constructor() {
        super({}, {});

        this.expressionValueType = ExpressionExpectedType.NUMBER;
        this.value1 = ExpressionValue.createExpressionValue(this, 'sumValue', ExpressionExpectedType.NUMBER_LIST);
    }

    render() {
        return (
            <>
                <ExpressionPiece>
                    sum
                    <BracketedDiv>
                        <ExpressionValueRenderer el={this.value1!}/>
                    </BracketedDiv>
                </ExpressionPiece>
            </>
        );
    }
}