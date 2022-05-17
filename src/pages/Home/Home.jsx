import styled from "styled-components";
import HomeHero from "./HomeHero";
import React from "react";
import Intermezzo from "./Intermezzo";
import { Text } from "../../components/UI/Content/Texts";
import BlurToClear from "../../components/UI/Animations/BlurToClear";
import MDDDYSTHYMIA from "./Summary/MDDDYSTHYMIA/MDDDYSTHYMIA";
import BD from "./Summary/BD/BD";

const Container = styled.div``;

const MultilineText = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 10em;
	justify-content: center;
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

			<Intermezzo>
				<BlurToClear>
					<Text>Sebelum kita selesai</Text>
				</BlurToClear>
			</Intermezzo>

			<Intermezzo>
				<BlurToClear>
					<Text>Dan kita selesai</Text>
				</BlurToClear>
			</Intermezzo>

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

			<Intermezzo>
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
			</Intermezzo>

			<Intermezzo>
				<BlurToClear>
					<Text>bye.</Text>
				</BlurToClear>
			</Intermezzo>

		</Container>
	);
};

export default React.memo(Home);
