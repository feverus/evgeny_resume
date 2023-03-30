import defaultStore from '~/store/defaultStore'
import useMyWorks from "./myWorks.service";
import C from './myWorks.module.scss'
import data from './myWorks.json'
import WorkItem from './WorkItem';

export function MyWorks() {
	const [state, api] = useMyWorks() 

	return (
    <section id="my_works" className={C.content}>
        <div className={C.title}>
            мои работы
        </div>
        
        {data.map((item, index) => 
            <WorkItem data={item} index={index} key={item.name} />
        )}
		
        </section>
	)
}

