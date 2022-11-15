import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getStars, microwaves } from "../../../components/data";
import credit from "../../../utils/credit";





const index: React.FC = () => {

	return (
		<div>
			{microwaves.map((item: any,index:any) => (
				<div key={index} className="bg-white p-4 mt-2 rounded-md shadow-md flex justify-between items-center max-w-[1000px] mx-auto">
					<img
						// width={200}
						// height={200}
                        // width={100}
                        // height={100}
                        
						src={`${item.images[0]}`}
                        className="w-[200px] h-fit"
                        // layout='responsive'
                        // objectFit="contain"
                        // objectFit="cover"
                        // quality={100}
						alt=""
					/>
					<div className="p-4">
						<div className="flex justify-between">
							<div className="w-full text-black">
								<Link href={`/products/microwave/${item.code}`} className="text-md cursor-pointer hover:text-orange-good">
									{item.name}{' '}
									<span>
										[{item.mainFeatures[0].value},{" "}
										{item.electricityAndProtection[2].value}
										, переключатели -{" "}
										{item.mainFeatures[4].value},{" "}
										{item.mainFeatures[7].value &&
											"дисплей, "}
										{item.dimensionsAndWeight[0].value}
										{" х "}
										{item.dimensionsAndWeight[1].value}
										{" х "}
										{item.dimensionsAndWeight[2].value}]
									</span>
								</Link>
							</div>
							<div className="text-black w-[200px] self-end text-right">
								<p className="text-xl font-semibold">
									{item.price}
									{" Р"}
								</p>
								<p className="text-sm">
									{`от ${credit(item.price)} Р/ мес.`}
								</p>
								<button className="border mt-2 border-black/20 py-2 px-6 rounded-lg hover:bg-orange-good hover:text-white">
									Купить
								</button>
							</div>
						</div>

						<div>
							<div className="flex justify-start">
								<div className="py-1 px-2 border border-black/10 rounded-md flex justify-start w-fit h-fit text-black items-center cursor-pointer mx-1 hover:border-orange-good">
									{["", "", "", "", ""].map(
										(item2: any, index: any) => (
											
												<Image
													// src='/img/star.svg'
                                                    key={index}
													className="h-fit mr-1"
													width={15}
													height={15}
													src={getStars(
														item.reviews.rate,
														index + 1
													)}
													alt="star"
												/>
											
										)
									)}
									<p className="ml-2">{item.reviews.count}</p>
								</div>

								<div className="py-1 px-2 border border-black/10 rounded-md flex justify-start w-fit h-fit text-black items-center cursor-pointer mr-1 hover:border-orange-good">
									<Image
										// src='/img/star.svg'
										className="h-fit mr-1"
										width={20}
										height={20}
										src='/img/shield.svg'
										alt=""
									/>
                                    <span>{item.reviews.safety}</span>
								</div>
							</div>
							<p className="text-black">
								В магазинах:{" "}
								<span className="text-blue-500 cursor-pointer hover:text-orange-good">
									{item.inStock.bool
										? "В наличии"
										: item.inStock.when}
								</span>
							</p>
						</div>
					</div>
				</div>
			))}

			{/* <img src={`${microwaves[0].images[1]}`} alt="" /> */}
		</div>
	);
};

export default index;
