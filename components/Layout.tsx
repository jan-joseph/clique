import React, { FC } from "react";

import Header from "./Header";

const Layout: FC<props> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default Layout;
