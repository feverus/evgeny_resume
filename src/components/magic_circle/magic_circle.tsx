import C from './magic_circle.module.scss'
import { useState } from 'react'
import { MagicCircleItemProps } from './magicCircleItemProps'

const ItemArray = [
    {name: 'ellipse_1', twist: false, shake: false, active: true},
    {name: 'cube_1', twist: true, shake: false, active: true},
    {name: 'ball_5', twist: false, shake: true, active: true},
    {name: 'ball_4', twist: false, shake: true, active: true},
    {name: 'ball_2', twist: false, shake: true, active: true},
    {name: 'square_1', twist: true, shake: false, active: true},
    {name: 'circle_1', twist: true, shake: false, active: true},
    {name: 'half_ring_1', twist: true, shake: false, active: true},
    {name: 'ball_1', twist: false, shake: true, active: true},
    {name: 'cilinder_2', twist: true, shake: false, active: true},
    {name: 'cilinder_1', twist: true, shake: false, active: true},
    {name: 'shadow_1', twist: false, shake: true, active: false},
    {name: 'rings_1', twist: true, shake: false, active: true},
    {name: 'ball_3', twist: false, shake: true, active: true},
    {name: 'ball_3', twist: false, shake: true, active: true, forcedStyle: 'ball_6'},
]

function MagicCircleItem(props: MagicCircleItemProps) {
    const [deg, setDeg] = useState(0)

    const changeColor = () => {
        setDeg(Math.floor(0 + Math.random() * (360 + 1 - 0)))
    }

    let imgClassName = C.magic_circle_img
    props.shake && (imgClassName += ' ' + C.shake)
    props.twist && (imgClassName += ' ' + C.twist)

    let divClassName = C[props.name]
    props.forcedStyle!==undefined && (divClassName = C[props.forcedStyle])
    !props.active && (divClassName += ' ' + C.inactive)

    return (
        <div className = {divClassName}>
            <img
                src={`/svg/magic_circle/${props.name}.svg`}
                className={imgClassName} alt="o" 
                style = {{filter:`hue-rotate(${deg}deg)`}}
                onMouseEnter = {changeColor}
                onTouchStart = {changeColor}
            />
        </div>
    )
}

export default function MagicCircle() {
    return (
        <div className={C.magic_circle}>
            {ItemArray.map(({name, twist, shake, active, forcedStyle}) => 
                <MagicCircleItem name={name} forcedStyle={forcedStyle} twist={twist} shake={shake} active={active} key={'MagicCircleItem_' + name + forcedStyle} />
            )}    
        </div>
    )
}
