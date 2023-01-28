import { Link } from "react-router-dom";
import * as C from "./styles";
import { RiUser5Fill, RiBookOpenFill, RiMailFill, RiCheckboxCircleFill } from "react-icons/ri";

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export function SidebarItem({ title, description, icon, path, active }: Props) {
    return(
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === "profile" && <RiUser5Fill color="white" size={24} />}
                    {icon === "book" && <RiBookOpenFill color="white" size={24} />}
                    {icon === "mail" && <RiMailFill color="white" size={24} />}
                    {icon === "final" && <RiCheckboxCircleFill color="white" size={24} />}
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}