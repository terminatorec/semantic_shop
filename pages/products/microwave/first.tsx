import Image from "next/image";
import React from "react";

const first: React.FC = () => {
	return (
		<div>
			<div
				itemScope
				itemType="https://schema.org/Product"
				className="grid grid-cols-2 bg-orange-300"
			>
				<Image
					width={400}
					height={300}
					itemProp="image"
					src="/img/123.jpg"
					alt='Kenmore 17" Microwave'
				/>
                <div>
				    <span itemProp="name">Kenmore White 17" Microwave</span>

                </div>
				<div
					itemProp="aggregateRating"
					itemScope
					itemType="https://schema.org/AggregateRating"
				>
					Rated <span itemProp="ratingValue">3.5</span>/5 based on{" "}
					<span itemProp="reviewCount">11</span> customer reviews
				</div>
				<div
					itemProp="offers"
					itemScope
					itemType="https://schema.org/Offer"
				>
					price is 1000, a number, with locale-specific thousands
					separator and decimal mark, and the $ character is marked up
					with the machine-readable code "USD"
					<meta itemProp="priceCurrency" content="USD" />
					<meta itemProp="price" content="1000.00" />
					<span itemProp="priceCurrency">$</span>
					<span itemProp="price">1,000.00</span>
					<link
						itemProp="availability"
						href="https://schema.org/InStock"
					/>
					In stock
				</div>
				Product description:
				<span itemProp="description">
					0.7 cubic feet countertop microwave. Has six preset cooking
					categories and convenience features like Add-A-Minute and
					Child Lock.
				</span>
				Customer reviews:
				<div
					itemProp="review"
					itemScope
					itemType="https://schema.org/Review"
				>
					<span itemProp="name">Not a happy camper</span> - by{" "}
					<span itemProp="author">Ellie</span>,
					<meta itemProp="datePublished" content="2011-04-01" />
					April 1, 2011
					<div
						itemProp="reviewRating"
						itemScope
						itemType="https://schema.org/Rating"
					>
						<meta itemProp="worstRating" content="1" />
						<span itemProp="ratingValue">1</span>/
						<span itemProp="bestRating">5</span>stars
					</div>
					<span itemProp="reviewBody">
						The lamp burned out and now I have to replace it.{" "}
					</span>
				</div>
				<div
					itemProp="review"
					itemScope
					itemType="https://schema.org/Review"
				>
					<span itemProp="name">Value purchase</span> - by{" "}
					<span itemProp="author">Lucas</span>,
					<meta itemProp="datePublished" content="2011-03-25" />
					March 25, 2011
					<div
						itemProp="reviewRating"
						itemScope
						itemType="https://schema.org/Rating"
					>
						<meta itemProp="worstRating" content="1" />
						<span itemProp="ratingValue">4</span>/
						<span itemProp="bestRating">5</span>stars
					</div>
					<span itemProp="reviewBody">
						Great microwave for the price. It is small and fits in
						my apartment.
					</span>
				</div>
				...
			</div>
		</div>
	);
};

export default first;
