import {useState} from "react";
import { CharacterSides } from "../types/CharacterSides";
import { mapSpots } from "../data/mapSpots";

export function useCharacter() {
    const [position, setPosition] = useState({ x: 3, y: 5 });
    const [side, setSide] = useState<CharacterSides>("down");

    function moveLeft() {
        setPosition(position => ({
            x: canMove(position.x -1, position.y) ? position.x -1 : position.x,
            y: position.y
        }));

        setSide("left");
    }

    function moveRight() {
        setPosition(position => ({
            x: canMove(position.x +1, position.y) ? position.x +1 : position.x,
            y: position.y
        }));

        setSide("right");
    }

    function moveDown() {
        setPosition(position => ({
            x: position.x,
            y: canMove(position.x, position.y +1) ? position.y +1 : position.y
        }));

        setSide("down");
    }

    function moveUp() {
        setPosition(position => ({
            x: position.x,
            y: canMove(position.x, position.y -1) ? position.y -1 : position.y
        }));

        setSide("up");
    }

    function canMove(x: number, y: number) {
        if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
            return (mapSpots[y][x] === 1);
        }

        return false;
    }

    return {
        x: position.x,
        y: position.y,
        side,
        moveLeft,
        moveRight,
        moveDown,
        moveUp
    };
}