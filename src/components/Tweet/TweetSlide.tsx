import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'
import * as Icons from './TweetIcons'

/* TweetBody is the main exported function for the collective Tweet function. It contains all sections of a Twitter post, leaving us with a template that can be filled to emulate the full function of a Twitter post. In the future, we'd love to imporve the TweetBody by parsing through the actual tweetBody data and being able to hyper link where @youarerad is tagged. */

interface TweetBodyTypes {
	userProfileImage: string
	userName: string
	userHandle: string
	isVerified?: boolean
	tweetId?: string | undefined
	tweetBody: string
	tweetTime?: string
	tweetDate?: string
	tweetLikes?: string
	tweetRetweets?: string
	tweetComments?: string
}

type TwitterPostInput = {
	TwitterPostData: Array<TweetBodyTypes>
}

export default function TweetSlide({ TwitterPostData }: TwitterPostInput) {
	return (
		<>
			{TwitterPostData.map((tweet) => (
				<div
					className="relative w-full min-h-full py-4 overflow-hidden group min-w-[400px] keen-slider__slide group"
					key={tweet.userName}
				>
					<a
						className="flex flex-col max-w-lg p-5 space-y-3 duration-200 bg-white border rounded-xl opacity-60 hover:opacity-100 hover:drop-shadow-xl hover:min-w-full hover:-translate-y-2"
						href={`https://twitter.com/${tweet.userHandle}/status/${tweet.tweetId}`}
					>
						<div className="flex items-stretch justify-between">
							<div className="flex items-center">
								<a
									href={`https://twitter.com/${tweet.userHandle}/status/${tweet.tweetId}`}
									className="w-12 h-12 rounded-full relative overflow-hidden outline-[#1d9bf0]"
								>
									<Image
										className="transition-all duration-150 rounded-full focus:brightness-90 hover:brightness-90"
										src={tweet.userProfileImage}
										alt=""
										layout="fill"
										objectFit="fill"
									/>
								</a>
								<a
									href={`https://twitter.com/${tweet.userHandle}/status/${tweet.tweetId}`}
									className="flex flex-col ml-1.5 outline-[#1d9bf0] focus:bg-[#1d9bf0]/10"
								>
									<h1 className="flex items-center text-sm font-bold leading-5">
										{tweet.userName}
										{tweet.isVerified && (
											<span className="inline-flex ml-1">
												<Icons.Verified />
											</span>
										)}
									</h1>
									<h2 className="text-sm font-normal leading-5">@{tweet.userHandle}</h2>
								</a>
							</div>
							<a
								href={`https://twitter.com/${tweet.userHandle}/status/${tweet.tweetId}`}
								className=" outline-[#1d9bf0] focus:bg-[#1d9bf0]/10"
							>
								<Icons.TwitterLogo />
							</a>
						</div>
						{/* Tweet body */}
						<div className="flex flex-col">
							<p className="text-base max-w-prose">{tweet.tweetBody}</p>
						</div>
					</a>
				</div>
			))}
		</>
	)
}
