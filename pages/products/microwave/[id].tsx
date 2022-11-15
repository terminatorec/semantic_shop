import Image from "next/image";
import React from "react";
import { getStars, microwaves } from "../../../components/data";
import credit from "../../../utils/credit";
import { ProductJsonLd } from "next-seo";
import { NextSeo, DefaultSeo } from "next-seo";

export const getStaticPaths = async () => {
	let data = microwaves;
	const paths = data.map((item: any) => {
		return {
			params: { id: item.code.toString() },
		};
	});
	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps = async (context: any) => {
	const id = context.params.id;
	console.log(id);
	let data = microwaves.find((item: any) => item.code == id);

	return {
		props: { data: data },
	};
};

interface props {
	name: any;
	value: any;
}

const Prop: React.FC<props> = ({ name, value }) => {
	return (
		<div className="grid grid-cols-2 mt-2 text-sm">
			<p className="border-b  pb-1 mr-5">{name}</p>
			<p>{value === true ? "есть" : value === false ? "нет" : value}</p>
		</div>
	);
};

const MicroWave = ({ data }: any) => {
	return (
		<>
			<DefaultSeo
				title={data.name}
				description={data.desc}
				openGraph={{
					url: "https://www.dns-shop.ru/",
					title: data.name + " купить",
					description:
						data.desc.split("").slice(0, 20).join("") + "...",
					type: "shop",
					images: [
						{
							url: data.images[0],
							width: 800,
							height: 600,
							alt: "Microwave",
							type: "image/jpeg",
						},
					],
					siteName: "DNS SHOP RU",
				}}
				twitter={{
					handle: "@Microwave",
					site: "@DNSHOPRU",
					cardType: "image",
				}}
			/>
			<ProductJsonLd
				productName={data.name}
				images={[data.images[0], data.images[1]]}
				description={data.desc}
				brand={data.seo.brand}
				color={data.seo.color}
				aggregateRating={{
					ratingValue: data.reviews.rate,
					reviewCount: data.reviews.count,
				}}
				offers={[
					{
						price: data.price,
						priceCurrency: "Руб.",
						itemCondition: "https://schema.org/UsedCondition",
						availability: "https://schema.org/InStock",
						url: "https://www.example.com/executive-anvil",
						seller: {
							name: "DNS",
						},
					},
				]}
				mpn={data.code}
			/>

			<div className="bg-light h-full text-black px-8">
				<div
					itemScope
					itemType="https://schema.org/Product"
					className="max-w-[1000px] h-full mx-auto"
				>
					<h1 className="text-2xl font-semibold text-black">
						{data.name}
					</h1>

					<div className="bg-white h-full rounded-b-lg shadow-md p-4 flex justify-between max-w-[1000px] mx-auto">
						<div className="flex flex-col h-full relative">
							<div className="flex justify-between min-w-[400px] w-1/2">
								<div className="min-w-[40px]">
									{data.images.map(
										(image: any, index: any) => (
											<Image
												key={index}
												src={image}
												width={40}
												className="h-fit mb-4 cursor-pointer"
												height={100}
												alt=""
											/>
										)
									)}
								</div>
								<Image
									className="h-fit pl-4"
									src={data.images[0]}
									width={350}
									height={1000}
									alt=""
								/>
							</div>

							<p className="text-sm text-blue-800  mt-8 hover:text-orange-good cursor-pointer">
								Код товара: {data.code}
							</p>
						</div>
						<div className="ml-4">
							<div>
								<p className="text-md pr-[100px]">
									{data.mainFeatures[0].value},{" "}
									{data.electricityAndProtection[2].value},
									переключатели - {data.mainFeatures[4].value}
									,{" "}
									{data.mainFeatures[7].value && "дисплей, "}
									{data.dimensionsAndWeight[0].value}
									{" х "}
									{data.dimensionsAndWeight[1].value}
									{" х "}
									{data.dimensionsAndWeight[2].value}{" "}
									<span className="cursor-pointer hover:text-orange-good text-blue-500">
										подробнее
									</span>
								</p>
							</div>
							<div className="flex justify-start mt-4">
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
													data.reviews.rate,
													index + 1
												)}
												alt="star"
											/>
										)
									)}
									<p className="ml-2">{data.reviews.count}</p>
								</div>
								<div className="py-1 px-2 border border-black/10 rounded-md flex justify-start w-fit h-fit text-black items-center cursor-pointer mr-1 hover:border-orange-good">
									<Image
										// src='/img/star.svg'
										className="h-fit mr-1"
										width={20}
										height={20}
										src="/img/shield.svg"
										alt=""
									/>
									<span>{data.reviews.safety}</span>
								</div>
							</div>
							<div className="bg-white p-4 rounded-b-md  mt-8 shadow-md">
								<div className="flex justify-between">
									<div className="text-black self-end text-left">
										<p className="text-xl font-semibold">
											{data.price}
											{" Р"}
										</p>
										<p className="text-sm">
											{`от ${credit(data.price)} Р/ мес.`}
										</p>
									</div>
									<button className="border mt-2 border-black/20 py-2 px-6 rounded-lg bg-orange-good text-white hover:bg-orange-good/90">
										Купить
									</button>
								</div>
								<div>
									<p className="text-black flex flex-col text-sm mt-4">
										В магазинах:{" "}
										<span className="text-blue-500 cursor-pointer hover:text-orange-good">
											{data.inStock.bool
												? "В наличии"
												: data.inStock.when}
										</span>
									</p>
								</div>
							</div>
							<div className="mt-4">
								<button className="py-2 px-3 bg-white rounded-md shadow-md font-semibold mr-2">
									Аксессуары
								</button>
								<button className="py-2 px-3 bg-light hover:bg-gray-200/80 rounded-md mr-2">
									Гарантия: {data.factoryData[0].value}
								</button>
								<button className="py-2 px-3 bg-light hover:bg-gray-200/80 rounded-md mr-2">
									Аналоги
								</button>
							</div>
							<div className="mt-4 grid grid-cols-2 gap-4">
								<div className="bg-light p-2 rounded-md shadow-md border">
									<p>Крышка для СВЧ Полимербыт d=235мм</p>
									<div className="flex items-center mt-4 h-auto">
										<button className="py-1 px-6 border rounded-xl bg-white hover:bg-orange-good hover:text-white">
											Купить
										</button>
										<p className="text-lg font-semibold ml-4">
											199 Р
										</p>
									</div>
								</div>
								<div className="bg-light p-2 rounded-md shadow-md border flex flex-col h-auto ">
									<p>Крышка Aceline M001, 30 см</p>
									<div className="flex  mt-4 h-full ">
										<div className="self-end flex">
											<button className="py-1 self-center px-6 border rounded-xl bg-white hover:bg-orange-good hover:text-white">
												Купить
											</button>
											<p className="text-lg self-center font-semibold ml-4">
												50 Р
											</p>
										</div>
									</div>
								</div>
							</div>
							<button className="py-1 px-4 border rounded-lg mt-4 hover:bg-light">
								Все аксессуары
							</button>
						</div>
					</div>
				</div>

				<div className="bg-white p-4  rounded-md shadow-md max-w-[1000px] mx-auto my-4">
					<h1 className="text-xl font-semibold text-black">
						Характеристики {data.name}
					</h1>

					<div className="mt-4">
						<h3 className="font-semibold">Заводские данные</h3>
						{data.factoryData.map((dataItem: any, index: any) => (
							<Prop
								key={index}
								name={dataItem.name}
								value={dataItem.value}
							/>
						))}
					</div>

					<div className="mt-4">
						<h3 className="font-semibold">Общие параметры</h3>
						{data.generalData.map((dataItem: any, index: any) => (
							<Prop
								key={index}
								name={dataItem.name}
								value={dataItem.value}
							/>
						))}
					</div>

					<div className="mt-4">
						<h3 className="font-semibold">
							Основные характеристики
						</h3>
						{data.mainFeatures.map((dataItem: any, index: any) => (
							<Prop
								key={index}
								name={dataItem.name}
								value={dataItem.value}
							/>
						))}
					</div>

					<div className="mt-4">
						<h3 className="font-semibold">Питание и защита</h3>
						{data.electricityAndProtection.map(
							(dataItem: any, index: any) => (
								<Prop
									key={index}
									name={dataItem.name}
									value={dataItem.value}
								/>
							)
						)}
					</div>

					<div className="mt-4">
						<h3 className="font-semibold">Режимы и функции</h3>
						{data.functions.map((dataItem: any, index: any) => (
							<Prop
								key={index}
								name={dataItem.name}
								value={dataItem.value}
							/>
						))}
					</div>

					<div className="mt-4">
						<h3 className="font-semibold">
							Дополнительная информация
						</h3>
						{data.additionalInformation.map(
							(dataItem: any, index: any) => (
								<Prop
									key={index}
									name={dataItem.name}
									value={dataItem.value}
								/>
							)
						)}
					</div>

					<div className="mt-4">
						<h3 className="font-semibold">Габариты и вес</h3>
						{data.dimensionsAndWeight.map(
							(dataItem: any, index: any) => (
								<Prop
									key={index}
									name={dataItem.name}
									value={dataItem.value}
								/>
							)
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default MicroWave;
