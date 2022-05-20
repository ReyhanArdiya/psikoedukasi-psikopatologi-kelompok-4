import ArticleSection from "../../../components/UI/Layouts/ArticlePage/ArticleSection";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";
import React from "react";
import styled, { css } from "styled-components";
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

const DysthymiaContent = () => {
	return (
		<ArticleSection>
			<BlurToClear>
				<Text>
						Depresi yang berlangsung hingga bertahun-tahun disebut
						“distimia”.
				</Text>
			</BlurToClear>
			<BlurToClear>
				<H2>Distimia itu apa, sih?</H2>
			</BlurToClear>
			<BlurToClear>
				<Text>
						Distimia adalah suasana hati tertekan/depresi (merasa
						sedih, hilang semangat, dan putus asa) yang terjadi
						hampir sepanjang hari dan berlangsung minimal 1 tahun
						(pada anak-anak dan remaja) atau 2 tahun (pada orang
						dewasa), tetapi gejalanya tidak separah depresi mayor.
				</Text>
			</BlurToClear>

			<MythFact>
				<Myth>
					<BlurToClear>
						<H2>Mitos</H2>
					</BlurToClear>
					<BlurToClear>
						<Text>
								Distimia mulai terjadi ketika individu sudah
								dewasa.
						</Text>
					</BlurToClear>
				</Myth>

				<Fact>
					<BlurToClear>
						<H2>Fakta</H2>
					</BlurToClear>
					<BlurToClear>
						<Text>
								Distimia yang terjadi ketika dewasa merupakan
								kelanjutan distimia yang sudah berlangsung sejak
								kanak-kanak/remaja.
						</Text>
					</BlurToClear>
				</Fact>
			</MythFact>
		</ArticleSection>
	);
};

export default React.memo(DysthymiaContent);
