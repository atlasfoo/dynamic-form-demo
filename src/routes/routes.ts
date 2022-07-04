import { lazy, LazyExoticComponent } from "react";

type JSXComponent = (props: any) => JSX.Element;

interface Route {
	path: string;
	to: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

export const routes: Array<Route> = [
	{
		path: "/dyna-fields",
		to: "dyna-fields",
		Component: lazy(() => import("../pages/DynamicFieldsView")),
		name: "Dynamic Fields",
	},
	{
		path: "/dyna-validations",
		to: "dyna-validations",
		Component: lazy(() => import("../pages/DynamicValidationView")),
		name: "Dynamic Validations",
	},
];
