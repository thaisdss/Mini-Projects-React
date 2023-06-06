import * as C from "./style";

type Props = {
    text: string;
    type: "button" | "submit";
    color: string;
    action?: string;
    handleButtons?: (action: string) => void;
}

export default function Button({text, type, color, action, handleButtons} : Props){
    return(
        <C.Button 
        type={type} 
        color={color}
        onClick={() => { if(action && handleButtons) {handleButtons(action)} }}
        >
            {text}
        </C.Button>
    );
}