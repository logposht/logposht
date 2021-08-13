const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: "My Site",
	tagline: "Dinosaurs are cool",
	url: "https://your-docusaurus-test-site.com",
	baseUrl: "/",
	trailingSlash: false,
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "facebook", // Usually your GitHub org/user name.
	projectName: "docusaurus", // Usually your repo name.
	i18n: { defaultLocale: "fa", locales: ["fa"] },
	themeConfig: {
		navbar: {
			title: "لاگ‌پشت",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.svg",
			},
			items: [{ to: "/blog", label: "وبلاگ", position: "right" }],
		},
		footer: {
			style: "dark",
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/edit/master/website/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/edit/master/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
