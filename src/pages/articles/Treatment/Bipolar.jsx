import styled, { css } from "styled-components";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";
import { H2, Text } from "../../../components/UI/Content/Texts";
import ArticleSection from "../../../components/UI/Layouts/ArticlePage/ArticleSection";

const Section = styled(ArticleSection)`
	width: 100%;

	${({ theme }) => theme.breakpoints.big(css`
			display: grid;
			align-items: start;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr;
			column-gap: 7em;
		`)}
`;

const Subsection = styled(ArticleSection).attrs({ className : "subsection" })`
	width: 100%;
`;

const Bipolar = () => {
	return (
		<ArticleSection>
			<BlurToClear>
				<H2>Penanganan Bipolar</H2>
			</BlurToClear>

			<Section>
				<Subsection>
					<BlurToClear>
						<H2>Litium & Penstabil Mood</H2>
					</BlurToClear>
					<BlurToClear>
						<Text>
							Litium dapat membantu meredakan manik dan
							menstabilkan mood, serta mengurangi risiko kambuh.
							Individu yang memiliki gangguan bipolar harus
							menggunakan litium secara terus-menerus untuk
							mengendalikan perubahan mood-nya, sama halnya dengan
							penderita diabetes yang harus menggunakan insulin
							terus-menerus.
						</Text>
					</BlurToClear>
				</Subsection>
				<Subsection>
					<BlurToClear>
						<H2>Penanganan Psikologis</H2>
					</BlurToClear>
					<BlurToClear>
						<Text>
							Penanganan psikologis, misalnya CBT, terapi
							interpersonal, dan terapi keluarga dapat membantu
							ketika diterapkan bersama terapi obat, serta dapat
							meningkatkan kepatuhan pasien terhadap program
							pengobatan.
						</Text>
					</BlurToClear>
				</Subsection>
			</Section>
		</ArticleSection>
	);
};

export default Bipolar;
