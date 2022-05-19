import React from "react";
import ArticleSection from "../../../components/UI/Layouts/ArticlePage/ArticleSection";
import styled, { css } from "styled-components";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";
import { H2, Text } from "../../../components/UI/Content/Texts";

const MythFact = styled(ArticleSection)`
	width: 100%;
	display: grid;
	grid-template-areas:
		"myth"
		"fact";
	align-items: start;
	column-gap: 10em;

	${({ theme }) => theme.breakpoints.big(css`
			grid-template-areas: "myth fact";
		`)}
`;

const Myth = styled(ArticleSection)`
	width: 100%;
	grid-area: myth;
`;

const Fact = styled(ArticleSection)`
	width: 100%;
	grid-area: fact;
`;

const BDContent = ({ propsDestruct }) => {
	return (
		<ArticleSection>
			<BlurToClear>
				<H2>Apa Itu Bipolar Disorders?</H2>
			</BlurToClear>
			<BlurToClear>
				<Text>
					Gangguan bipolar/mood swing disorder merupakan gangguan mood
					dimana pasien memiliki periode gangguan depresi maupun
					gangguan manik, (Aziz, dkk. dalam Nasution & Firdausi,
					2021).
				</Text>
			</BlurToClear>
			<BlurToClear>
				<Text>
					Ada 2 macam Bipolar Disorders, yaitu: Bipolar Disorders I &
					Bipolar Disorders II. Mendiagnosa bipolar harus dilakukan
					oleh profesional, tidak disarankan self-diagnose, ya!
				</Text>
			</BlurToClear>

			<BlurToClear>
				<H2>Bagaimana Menanganinya?</H2>
			</BlurToClear>
			<BlurToClear>
				<Text>
					Penanganan yang tepat untuk bipolar juga harus dilakukan
					oleh profesional ya, dengan pemberian terapi resep obat
					litium & penstabil mood lainnya. Selain itu, bipolar juga
					dapat ditangani dengan melakukan terapi psikologi kok.
					Seperti CBT, terapi interpersonal dan terapi keluarga juga
					dapat membantu ketika diterapkan bersama dengan terapi obat.
				</Text>
			</BlurToClear>

			<MythFact>
				<Myth>
					<BlurToClear>
						<H2>Mitos</H2>
					</BlurToClear>
					<BlurToClear>
						<Text>
							Mitos atau fakta sih, katanya kalau orang yang
							perubahan moodnya cepet, hari ini sedih besok udah
							bisa senang-senang itu disebut bipolar?
						</Text>
					</BlurToClear>
				</Myth>

				<Fact>
					<BlurToClear>
						<H2>Fakta</H2>
					</BlurToClear>
					<BlurToClear>
						<Text>
							Itu mitos ya. Faktanya, perubahan mood pada bipolar
							justru terjadi dalam jangka waktu yang lama.
							Misalkan dalam 2 minggu pertama mengalami manik
							episode, 2 minggu kemudian baru merasa depresi, atau
							sebaliknya.
						</Text>
					</BlurToClear>
				</Fact>
			</MythFact>
		</ArticleSection>
	);
};

export default BDContent;
