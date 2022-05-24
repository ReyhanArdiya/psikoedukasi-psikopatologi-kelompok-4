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
			grid-template-rows: 1fr 1fr;
			column-gap: 7em;
		`)}
`;

const Subsection = styled(ArticleSection).attrs({ className : "subsection" })`
	width: 100%;
`;

const Depression = () => {
	return (
		<ArticleSection>
			<BlurToClear>
				<H2>Penanganan Depresi</H2>
			</BlurToClear>

			<Section>
				<Subsection>
					<BlurToClear>
						<H2>Terapi Psikodinamika</H2>
					</BlurToClear>
					<BlurToClear>
						<Text>
							Salah satu model penanganan psikodinamika adalah
							<i>Interpersonal Psychotherapy</i> (IPT). Terapi ini
							berfokus pada masalah interpersonal dalam depresi
							dan membantu klien membuat hubungan yang sehat.
							Terapis akan membantu klien untuk mengidentifikasi
							area konflik dalam hubungan, memahami dasar masalah,
							dan mencari solusi.
						</Text>
					</BlurToClear>
				</Subsection>
				<Subsection>
					<BlurToClear>
						<H2>Terapi Perilaku</H2>
					</BlurToClear>
					<BlurToClear>
						<Text>
							Salah satu model terapi perilaku adalah{" "}
							<i>Behavioral Activation</i>. Terapi ini berfokus
							untuk membantu mengembangkan kemampuan sosial atau
							interpersonal yang lebih efektif dan meningkatkan
							partisipasinya dalam kegiatan yang menyenangkan.
						</Text>
					</BlurToClear>
				</Subsection>
				<Subsection>
					<BlurToClear>
						<H2>Terapi Kognitif Perilaku</H2>
					</BlurToClear>
					<BlurToClear>
						<Text>
							Salah satu model terapi kognitif perilaku adalah{" "}
							<i>Cognitive Behavior Therapy</i> (CBT). Terapi ini
							berfokus untuk membantu individu mengenali dan
							memperbaiki pola pikir yang disfungsional.
							Hakikatnya, individu yang depresi akan lebih
							mengutamakan perasaan daripada pikiran. Oleh sebab
							itu, perbaikan pola pikir diperlukan karena
							berdampak pada perilaku.
						</Text>
					</BlurToClear>
				</Subsection>
				<Subsection>
					<BlurToClear>
						<H2>Obat-Obatan & ECT</H2>
					</BlurToClear>
					<BlurToClear>
						<Text>
							Cara kerja antidepresan adalah dengan meningkatkan
							ketersediaan neurotransmitter tertentu di dalam
							otak, di mana neurotransmitter ini berperan untuk
							membantu meredakan depresi. Sementara itu, terapi
							elektrokonvulsif bekerja dengan mengalirkan arus
							listrik antara 70-130 volt ke kepala sehingga
							membantu menormalkan aktivitas neurotransmitter di
							dalam otak.
						</Text>
					</BlurToClear>
				</Subsection>
			</Section>
		</ArticleSection>
	);
};

export default Depression;
