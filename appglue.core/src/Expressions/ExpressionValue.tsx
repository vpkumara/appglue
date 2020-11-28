import {ExpressionExpectedType} from "./ExpressionExpectedType";
import {ExpressionValueType} from "./ExpressionValueType";
import {BaseExpression} from "./BaseExpression";
import {IBaseExpressionElement} from "./Utilities/IBaseExpressionElement";
import {XExpressionDefinition} from "./XExpressionDefinition";
import {generateUniqueId} from "../Common/DataUtilities";
import {ExpressionEditContext} from "./Utilities/ExpressionEditContext";

export class ExpressionValue
    implements IBaseExpressionElement {

    _id : string = generateUniqueId();
    name?: string;
    readonly canSelect: boolean = true;


    private expectedTypeValue: ExpressionExpectedType = ExpressionExpectedType.NUMBER;
    private valueTypeValue: ExpressionValueType = ExpressionValueType.UNSET;
    private subExpressionValue?: BaseExpression;
    private expressionValue: any;
    private variableNameValue?: string;

    editContext?: ExpressionEditContext ;

    static createExpressionValue(owner : BaseExpression, name: string, expectedType : ExpressionExpectedType = ExpressionExpectedType.NUMBER) : ExpressionValue{
        let v = new ExpressionValue();
        v.name = name;
        v.expectedTypeValue = expectedType;
        owner.registerExpressionValue(v);
        return v;
    }


    setEditContext(context: ExpressionEditContext, owner: IBaseExpressionElement): void {
        this.editContext = context;
        this.editContext.register(this._id, owner);

        if (this.subExpression) {
            this.subExpression.setEditContext(context, this);

        }
    }

    get variableName(): string | undefined {
        return this.variableNameValue;
    }

    set variableName(value: string | undefined) {
        this.variableNameValue = value;
        this.valueType = ExpressionValueType.VARIABLE;
    }
    get value(): any {
        return this.expressionValue;
    }

    set value(value: any) {
        this.expressionValue = value;
        this.valueType = ExpressionValueType.VALUE;

    }
    get subExpression(): BaseExpression | undefined {
        return this.subExpressionValue;
    }

    set subExpression(value: BaseExpression | undefined) {
        this.subExpressionValue = value;

        if (!value)
        {
            this.valueType = ExpressionValueType.UNSET;
        } else {
            this.valueType = ExpressionValueType.SUBEXPRESSION;
            if (this.editContext) {
                value.setEditContext(this.editContext, this)
            }
        }

    }

    clear() {
        this.valueType = ExpressionValueType.UNSET;
    }

    get valueType(): ExpressionValueType {
        return this.valueTypeValue;
    }

    set valueType(value: ExpressionValueType) {
        this.valueTypeValue = value;
    }

    get expectedType(): ExpressionExpectedType {
        return this.expectedTypeValue;
    }

    set expectedType(value: ExpressionExpectedType) {
        this.expectedTypeValue = value;
    }

}