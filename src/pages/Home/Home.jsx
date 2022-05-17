import styled from "styled-components";
import HomeHero from "./HomeHero";
import React from "react";
import Intermezzo from "./Intermezzo";
import { Text } from "../../components/UI/Content/Texts";

const Container = styled.div``;

const MultilineText = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 10em;
	justify-content: center;
`;

const Home = ({ propsDestruct }) => {
	return (
		<Container id="Home">
			<HomeHero />
			<Intermezzo>
				<Text>
					2 gangguan yang akan kami kenalkan pertama kali berhubungan
					dengan perasaan depresi.
				</Text>
			</Intermezzo>
			<Intermezzo>
				<Text>
					JIka sebelumnya kita telah berjumpa dengan perasaan depresi,
					bagaimana dengan gangguan yang melibatkannya dengan perasaan
					manik?
				</Text>
			</Intermezzo>
			<Intermezzo>
				<Text>
					Apakah hanya BD saja yang melibatkan kedua perasaan itu?
				</Text>
			</Intermezzo>
			<Intermezzo>
				<Text>Tidak.</Text>
			</Intermezzo>
			<Intermezzo>
				<Text>Sebelum kita selesai</Text>
			</Intermezzo>
			<Intermezzo>
				<Text>Dan kita selesai</Text>
			</Intermezzo>
			<Intermezzo>
				<MultilineText>
					<Text>Sebelum kita menutupi</Text>
					<Text>Ada sedikit pesan</Text>
				</MultilineText>
			</Intermezzo>
			<Intermezzo>
				<MultilineText>
					<Text>Walaupun Anda sudah mengenal beberapa gangguan</Text>
					<Text>
						Anda masih bisa mempelajarinya lebih lanjut dari
						sumber-sumber terpecaya lainnya
					</Text>
					<Text>
						Walaupun Anda sudah memahami kriteria diagnostik menurut
						DSM-V dari laman ini
					</Text>
					<Text>
						Jangan mencoba untuk melakukan self-diagnose, ya!
					</Text>
				</MultilineText>
			</Intermezzo>
			<Intermezzo>
				<Text>bye.</Text>
			</Intermezzo>
		</Container>
	);
};

export default React.memo(Home);
