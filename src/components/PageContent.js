import React from "react";

function PageContent() {
	return (
		<div className="container">
			<h1 className="my-4">Taniro Rodrigues</h1>

			<div className="row">
				<div className="col-md-4">
					<img className="img-fluid" src="./profile.png" alt="" />
				</div>

				<div className="col-md-8">
					<h3 className="my-3">Formação</h3>
					<p>
						Doutor em Sistemas e Computação pela Universidade Federal do Rio
						Grande do Norte, Mestre em Sistemas e Computação pela Universidade
						Federal do Rio Grande do Norte (2011) e Bacharel em Ciência da
						Computação pela Universidade Federal do Rio Grande do Norte (2009)
					</p>
					<h3 className="my-3">Disciplinas</h3>
					<ul>
						<li>Programação para Dispositivos Móveis</li>
						<li>Programação Visual e Autoria Web</li>
						<li>Programação Web</li>
						<li>Estruturas de Dados</li>
					</ul>
				</div>
			</div>
			<hr />
		</div>
	);
}

export default PageContent;
