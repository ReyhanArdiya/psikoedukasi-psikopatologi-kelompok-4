import BD from "./Summary/BD/BD";
import BlurToClear from "../../components/UI/Animations/BlurToClear";
import CD from "./Summary/CD/CD";
import HomeHero from "./HomeHero";
import Intermezzo from "./Intermezzo";
import MDDDYSTHYMIA from "./Summary/MDDDYSTHYMIA/MDDDYSTHYMIA";
import React from "react";
import Suicide from "./Summary/Suicide/Suicide";
import Treatment from "./Summary/Treatment/Treatment";
import styled from "styled-components";
import whiteFlowerBg from "../../images/content/big/white-flower-1920w.jpg";
import whiteFlowerSm from "../../images/content/small/white-flower-640w.jpg";
import { Text } from "../../components/UI/Content/Texts";
import StatueIntermezzo from "./StatueIntermezzo";
import Credits from "./Credits/Credits";

const Container = styled.div`
	/* CMT Im still on the fence about this */
	/* body {
		overflow: hidden;
	}
	max-height: 100vh;
	overflow: auto;
	scroll-snap-type: y proximity;

	> * {
		scroll-snap-stop: always;
		scroll-snap-align: center;
	} */
`;

const MultilineText = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 10em;
	justify-content: center;
`;

const WhiteFlower = styled.div`
	${({ theme }) => theme.others.responsiveBg(whiteFlowerSm, whiteFlowerBg)}
	width: 100%;
	height: 100%;
	transform: rotate(180deg);
`;

const Home = () => {
	return (
		<Container id="Home">
			<HomeHero />

			<Intermezzo>
				<BlurToClear>
					<Text>
						2 gangguan yang akan kami kenalkan pertama kali
						berhubungan dengan perasaan depresi.
					</Text>
				</BlurToClear>
			</Intermezzo>

			<MDDDYSTHYMIA/>

			<Intermezzo>
				<BlurToClear>
					<Text>
						Jika sebelumnya kita telah berjumpa dengan perasaan
						depresi, bagaimana dengan gangguan yang melibatkannya
						dengan perasaan manik?
					</Text>
				</BlurToClear>
			</Intermezzo>

			<BD/>

			<Intermezzo>
				<BlurToClear>
					<Text>
						Apakah hanya BD saja yang melibatkan kedua perasaan itu?
					</Text>
				</BlurToClear>
			</Intermezzo>

			<Intermezzo>
				<BlurToClear>
					<Text>Tidak.</Text>
				</BlurToClear>
			</Intermezzo>

			<CD />

			<Intermezzo>
				<BlurToClear
					once
					options={{ threshold : 0.5 }}
				>
					<WhiteFlower/>
				</BlurToClear>
			</Intermezzo>

			<Treatment/>

			<Intermezzo>
				<BlurToClear>
					<Text>Sebelum kita selesai</Text>
				</BlurToClear>
			</Intermezzo>

			<Suicide/>

			<StatueIntermezzo>
				<BlurToClear>
					<Text>Dan kita selesai</Text>
				</BlurToClear>
			</StatueIntermezzo>

			<Intermezzo>
				<MultilineText>
					<BlurToClear>
						<Text>Sebelum kita menutupi</Text>
					</BlurToClear>
					<BlurToClear>
						<Text>Ada sedikit pesan</Text>
					</BlurToClear>
				</MultilineText>
			</Intermezzo>

			<StatueIntermezzo pos="right">
				<MultilineText>
					<BlurToClear>
						<Text>
							Walaupun Anda sudah mengenal beberapa gangguan
						</Text>
					</BlurToClear>
					<BlurToClear>
						<Text>
							Anda masih bisa mempelajarinya lebih lanjut dari
							sumber-sumber terpecaya lainnya
						</Text>
					</BlurToClear>
					<BlurToClear>
						<Text>
							Walaupun Anda sudah memahami kriteria diagnostik
							menurut DSM-V dari laman ini
						</Text>
					</BlurToClear>
					<BlurToClear>
						<Text>
							Jangan mencoba untuk melakukan self-diagnose, ya!
						</Text>
					</BlurToClear>
				</MultilineText>
			</StatueIntermezzo>

			<Intermezzo>
				<BlurToClear>
					<Text>bye.</Text>
				</BlurToClear>
			</Intermezzo>

			<Credits/>

		</Container>
	);
};

export default React.memo(Home);
