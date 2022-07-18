import { Creator } from '@prisma/client'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import classNames from '@utils/classNames'

type CreatorProfileProps = {
	creators: Array<Creator>
}

export default function CreatorProfile({ creators }: CreatorProfileProps) {
	return (
		<Tab.Group vertical>
			<div className="flex flex-col lg:flex-row">
				<Tab.List className="h-[30vh] w-full lg:order-2 lg:w-1/2 flex flex-col">
					{creators.map((creator) => (
						<Tab
							key={creator.name}
							className={({ selected }) =>
								classNames(selected ? 'bg-primary text-white' : '', 'rounded-xl')
							}
						>
							<table className="flex flex-col justify-between w-full p-4 text-left rounded-xl">
								<tbody>
									<tr className="flex justify-between w-full">
										<th className="text-xs font-medium uppercase">Creator</th>
										<th className="text-xs font-medium uppercase">Therapy Sessions Donated</th>
									</tr>
									<tr className="flex justify-between w-full text-xl font-bold">
										<td className="">{creator.name}</td>
										<td>{creator.therapySessionsPaid}</td>
									</tr>
								</tbody>
							</table>
						</Tab>
					))}
				</Tab.List>
				{Object.values(creators).map((creator) => (
					<Tab.Panel key={creator.name} className="flex flex-col items-center mx-auto">
						<Image src={creator.profilePhoto!} height={600} width={199} alt="" quality="100" />
					</Tab.Panel>
				))}
			</div>
		</Tab.Group>
	)
}