import React from "react";

function Header() {
	return (
		<header>
			<nav className="navbar navbar-dark bg-dark navbar-expand-sm">
				<a href="#" className="navbar-brand">
					Currículo
				</a>
				<button
					className="navbar-toggler"
					data-toggle="collapse"
					data-target="#webmenu"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="webmenu">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a href="#" className="nav-link">
								Dados Pessoais
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								Interesses
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								Contato
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;
