import C from './magic_circle.module.scss';

export default function Magic_circle() {
    return <div className={C.magic_circle}>
        <div className={C.ellipse_1}><img src="/svg/magic_circle/ellipse-1.svg" className={C.magic_circle_img} alt="o" /></div>
        <div className={C.cube_1}><img src="/svg/magic_circle/cube-1.svg" className={C.magic_circle_img + ' ' + C.twist} alt="o" /></div>
        <div className={C.ball_5}><img src="/svg/magic_circle/ball-5.svg" className={C.magic_circle_img + ' ' + C.shake} alt="o" /></div>
        <div className={C.ball_4}><img src="/svg/magic_circle/ball-4.svg" className={C.magic_circle_img + ' ' + C.shake} alt="o" /></div>
        <div className={C.ball_2}><img src="/svg/magic_circle/ball-2.svg" className={C.magic_circle_img + ' ' + C.shake} alt="o" /></div>
        <div className={C.square_1}><img src="/svg/magic_circle/square-1.svg" className={C.magic_circle_img + ' ' + C.twist} alt="o" /></div>
        <div className={C.circle_1}><img src="/svg/magic_circle/circle-1.svg" className={C.magic_circle_img + ' ' + C.twist} alt="o" /></div>
        <div className={C.half_ring_1}><img src="/svg/magic_circle/half-ring-1.svg" className={C.magic_circle_img + ' ' + C.twist} alt="o" /></div>
        <div className={C.ball_1}><img src="/svg/magic_circle/ball-1.svg" className={C.magic_circle_img + ' ' + C.shake} alt="o" /></div>
        <div className={C.cilinder_2}><img src="/svg/magic_circle/cilinder-2.svg" className={C.magic_circle_img + ' ' + C.twist} alt="o" /></div>
        <div className={C.cilinder_1}><img src="/svg/magic_circle/cilinder-1.svg" className={C.magic_circle_img + ' ' + C.twist} alt="o" /></div>
        <div className={C.inactive + ' ' + C.shadow_1}><img src="/svg/magic_circle/shadow-1.svg" className={C.shake} alt="o" /></div>
        <div className={C.rings_1}><img src="/svg/magic_circle/rings-1.svg" className={C.magic_circle_img + ' ' + C.twist} alt="o" /></div>
        <div className={C.ball_3}><img src="/svg/magic_circle/ball-3.svg" className={C.magic_circle_img + ' ' + C.shake} alt="o" /></div>
        <div className={C.ball_6}><img src="/svg/magic_circle/ball-3.svg" className={C.magic_circle_img + ' ' + C.shake} alt="o" /></div>
    </div>;
}
