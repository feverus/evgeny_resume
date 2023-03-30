import { WorkItemProps } from './myWorks.props';
import C from './myWorks.module.scss'

export default function WorkItem(props: { data: WorkItemProps; index: number; }) {
    return (
        <div className={C.my_works_block}>
            <div className={C.number}>
                <div>{props.index}</div>
            </div>
            <div className={C.card}>
                <div className={C.name}>
                    <div className={C.name_number}>{props.index}</div>
                    <div>{props.data.name}</div>
                </div>
                <div className={C.text}
                    dangerouslySetInnerHTML={{ __html: props.data.text }}
                >
                </div>

                <div className={C.column}>
                    <div className={C.column_block + ' ' + C.column_block_2}>
                        <div className={C.column_block_title}>
                            Платформа
                        </div>
                        <div className={C.column_text}>
                            {props.data.platform}
                        </div>
                    </div>
                    <div className={C.column_block + ' ' + C.column_block_2}>
                        <div className={C.column_block_title}>
                            Технологии
                        </div>
                        <div className={C.column_text}>
                            {props.data.tech.map((item) => <div className={C.tag} key={props.index + '_tech_' + item}>{item}</div>
                            )}
                        </div>
                    </div>
                </div>

                <a target="_blank" href={props.data.link} className={C.card_a}>
                    <div className={C.button}>
                        <div className={C.button_img}><img src="svg/cloud_btn.svg" /></div>
                        <div className={C.button_text}>Открыть приложение</div>
                    </div>
                </a>
                <a target="_blank" href={`https://github.com/${props.data.git_link}`} className={C.card_a}>
                    <div className={C.button}>
                        <div className={C.button_img}><img src="svg/github_btn.svg" /></div>
                        <div className={C.button_text}>Открыть исходный код</div>
                    </div>
                </a>
            </div>

            <div className={C.img}>
                <a target="_blank" href={props.data.link}><img src={props.data.screenshots[0]} alt="Скриншот" /></a>
            </div>
        </div>
    );
}
