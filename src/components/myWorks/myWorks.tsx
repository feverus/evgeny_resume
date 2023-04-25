import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import C from './myWorks.module.scss'
import data from './myWorks.json'
import WorkItem from './WorkItem';

gsap.registerPlugin(ScrollTrigger)

export function MyWorks() {
	const main = useRef<HTMLDivElement>(null)
	
	useLayoutEffect(() => {
		const ctx = gsap.context((self) => {
			if (self.selector === undefined) return

			const workItems = self.selector('.' + C.gsapWorkItem)
			workItems.forEach((item: gsap.DOMTarget) => {
				gsap.to(item, {
					x: '0',
					scrollTrigger: {
						trigger: item,
						start: 'top 80%',
						end: 'top 30%',
						scrub: 0.3,
					},
				})
				gsap.to(item, {
					opacity: '100%',
					scrollTrigger: {
						trigger: item,
						start: 'top 100%',
						end: 'top 30%',
						scrub: 0.3,
					},
				})
			})
			
			const cards = self.selector('.' + C.card)
			cards.forEach((item: gsap.DOMTarget) => {
				gsap.to(item, {
					transform: 'rotate(0deg)',
					scrollTrigger: {
							trigger: item,
							start: 'top 80%',
							end: 'top 40%',
							scrub: 0.3,
					},
				})	
			})

			const screenshots = self.selector('.' + C.screenshots)
			screenshots.forEach((item: gsap.DOMTarget) => {
				gsap.to(item, {
					transform: 'scale(1) translate(0, 0)',
					scrollTrigger: {
							trigger: item,
							start: 'top 70%',
							end: 'top 30%',
							scrub: true,
					},
				})	
				gsap.to(item, {
					opacity: '100%',
					scrollTrigger: {
						trigger: item,
						start: 'top 50%',
						end: 'top 30%',
						scrub: true,
					},
				})
			})
		}, main); // <- Scope!
		
		return () => ctx.revert(); // <- Cleanup!
	}, [])

	return (
		<section id="my_works" className={C.content} ref={main}>
			<div className={C.title}>
				мои работы
			</div>
			
			{data.map((item, index) => 
				<div
					className = {C.gsapWorkItem}
					key={item.name}
				>
					<WorkItem data={item} index={index} />
				</div>
			)}
	
		</section>
	)
}

