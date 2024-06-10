import Input from "../atoms/Input";
import Label from "../atoms/Label";

function Field(props) {
    return <div>
        <Label text={props.text}></Label>
        <Input type={props.type} placeholder={props.placeholder} value={props.val} fnVal={props.fnVal}></Input>
    </div>
}

export default Field;