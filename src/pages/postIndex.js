import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/intro"
					>
						نحوه کار با لاگ‌پشت - ۱۵دقیقه ⏱️
					</Link>
				</div>
			</div>
		</header>
	);
}

function HomeEx() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={` Logposht | ${siteConfig.title}`} description="مدیریت شخصی">
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}

export default function Home() {
	return (
		<div className="container">
			<div className={styles.buttons}>
				<Link className="button button--secondary button--lg" to="/docs/intro">
					نحوه کار با لاگ‌پشت - ۱۵دقیقه ⏱️
				</Link>
			</div>
			<main>
				<HomepageFeatures />
			</main>
		</div>
	);
}
