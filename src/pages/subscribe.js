import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<div className="container">
			<div className={styles.buttons}>
				<Link className="button button--secondary button--lg" to="/docs/intro">
					می خوای زودتر از بقیه امتحانش کنی ؟
				</Link>
			</div>
			<main>
				<HomepageFeatures />
			</main>
		</div>
	);
}
