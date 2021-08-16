import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
	{
		title: "آسان برای استفاده",
		Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
		description: (
			<>
				Docusaurus was designed from the ground up to be easily installed and
				used to get your website up and running quickly.
			</>
		),
	},
	{
		title: "روی چیزای مهم تر تمرکز کن",
		Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
		description: (
			<>
				Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
				ahead and move your docs into the <code>docs</code> directory.
			</>
		),
	},
	{
		title: "قدرت گرفته بوسیله ری‌اکت",
		Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
		description: (
			<>
				ری‌اکت یکی از بهترین چیزایی هست که ما می توانیم درباره ی آن مطالعه کنیم
			</>
		),
	},
	{
		title: "قدرت گرفته بوسیله ری‌اکت",
		Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
		description: (
			<>
				ری‌اکت یکی از بهترین چیزایی هست که ما می توانیم درباره ی آن مطالعه کنیم
			</>
		),
	},
	{
		title: "قدرت گرفته بوسیله ری‌اکت",
		Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
		description: (
			<>
				ری‌اکت یکی از بهترین چیزایی هست که ما می توانیم درباره ی آن مطالعه کنیم
			</>
		),
	},
	{
		title: "سادگی در طراحی",
		Svg: require("../../static/img/undraw/simple.svg").default,
		description: <>ساده طراحی شده است</>,
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
