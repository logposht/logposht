const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: "لاگ‌پشت",
	tagline: "اپلیکیشنی برای مدیریت شخصی مالی",
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
		colorMode: {
			// "light" | "dark"
			defaultMode: "light",
			// Hides the switch in the navbar
			// Useful if you want to support a single color mode
			disableSwitch: true,
			respectPrefersColorScheme: true,
		},
		navbar: {
			title: "لاگ‌پشت",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.svg",
			},
			items: [{ to: "/blog", label: "وبلاگ", position: "left" }],
		},
		footer: {
			style: "dark",
			copyright: `کپی‌رایت این سایت مطلق است به سایت لاگ‌پشت ، سال ‌${new Date().getFullYear()}`,
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
