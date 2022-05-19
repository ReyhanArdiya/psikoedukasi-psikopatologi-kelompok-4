import React from "react";
import ArticlePage from "../../components/UI/Layouts/ArticlePage/ArticlePage";
import buildingsSm from "../../images/content/small/buildings-640w.jpg";
import buildingsBg from "../../images/content/big/buildings-1920w.jpg";
import styled, { css } from "styled-components";
import ArticleSection from "../../components/UI/Layouts/ArticlePage/ArticleSection";
import BlurToClear from "../../components/UI/Animations/BlurToClear";
import { H2, Text } from "../../components/UI/Content/Texts";

const Section = styled(ArticleSection)`
	${({ theme }) => theme.breakpoints.big(css`
			display: grid;
			align-items: start;
			column-gap: 7em;
            grid-template-areas:
                "one two"
                "three three";

            .subsection:first-of-type {
                grid-area: one;
            }

            .subsection:nth-of-type(2) {
                grid-area: two;
            }

            .subsection:nth-of-type(3) {
                grid-area: three;
            }
	`)}
`;

const Subsection = styled(ArticleSection).attrs({ className : "subsection" })`
	width: 100%;
`;

const Suicide = () => {
	return (
		<ArticlePage
			goBackLink="/#Suicide"
			heroImg={{
				big   : buildingsBg,
				small : buildingsSm
			}}
			title="Suicide"
		>
			<Section>
				<Subsection>
					<BlurToClear>
						<H2>Fakta Seputar Suicide</H2>
					</BlurToClear>

					<BlurToClear>
						<Text>
							Keinginan bunuh diri tidak hanya dirasakan oleh kaum
							muda saja. Bahkan, beberapa lansia menganggap
							kualitas hidup mereka kurang memuaskan sehingga
							merasa tidak berdaya dan tidak memiliki harapan. Hal
							itu menyebabkan timbulnya depresi dan pemikiran
							untuk bunuh diri (Starkstein dkk. dalam Nevid dkk.,
							2018). Selain itu, banyak lansia mengalami akumulasi
							kehilangan teman dan orang yang dicintai sehingga
							menyebabkan penurunan kesehatan dan hilangnya peran
							yang penting dalam masyarakat.
						</Text>
					</BlurToClear>

					<BlurToClear>
						<Text>
							Dibandingkan dengan laki-laki, perempuan lebih
							banyak berusaha melakukan bunuh diri, tetapi tingkat
							keberhasilannya tidak lebih banyak dari laki-laki
							(Hawton dkk. dalam Nevid dkk., 2018). Hal tersebut
							mungkin disebabkan oleh kecenderungan laki-laki
							dalam memilih cara yang cepat dan lebih mematikan,
							misalnya menggunakan senjata api. Rasa tidak
							memiliki harapan dan paparan informasi tentang
							keberhasilan orang lain melakukan bunuh diri
							merupakan contoh penyebab seseorang melakukan bunuh
							diri untuk keluar dari rasa sakit psikologis.
						</Text>
					</BlurToClear>
				</Subsection>

				<Subsection>
					<BlurToClear>
						<H2>Perspektif Teoretis</H2>
					</BlurToClear>

					<BlurToClear>
						<Text>
							Berdasarkan teori psikodinamika yang melihat depresi
							sebagai pengalihan kemarahan ke dalam diri seseorang
							terhadap representasi internal hilangnya objek yang
							dicintai, bunuh diri kemudian menjadi pengalihan
							kemarahan ke dalam diri yang bersifat membunuh.
						</Text>
					</BlurToClear>

					<BlurToClear>
						<Text>
							Berdasarkan teori sosial-budaya percaya bahwa
							mobilitas tinggi yang terjadi pada masyarakat modern
							memungkinkan mereka bepergian ratusan atau ribuan
							mil sehingga banyak orang terisolasi secara sosial
							dari kelompok dukungan mereka. Hal itu menyebabkan
							beberapa orang menemukan sedikit dukungan pada saat
							kritis.
						</Text>
					</BlurToClear>

					<BlurToClear>
						<Text>
							Berdasarkan teori dalam perspektif biologis bahwa
							faktor biologis juga berperan dalam bunuh diri,
							misalnya faktor-faktor genetik dan ketidakseimbangan
							neurotransmitter yang mengatur mood, yaitu serotonin
							(Crowell dkk.; Kohli dkk.; Uher & Perroud dalam
							Nevid dkk., 2018). Serotonin berhubungan dengan
							depresi yang dapat menjadi dasar dilakukannya bunuh
							diri, tetapi dapat juga bertindak sebagai penghambat
							aktivitas sistem saraf. Apabila aktivitas serotonin
							mengalami penurunan, maka akan menyebabkan pelepasan
							perilaku impulsif pada individu yang rentan untuk
							melakukan bunuh diri.
						</Text>
					</BlurToClear>
				</Subsection>

				<Subsection>
					<BlurToClear>
						<H2>Apakah dapat Diprediksi?</H2>
					</BlurToClear>

					<BlurToClear>
						<Text>
							Bunuh diri melibatkan faktor-faktor penyebab yang
							kompleks dan sulit diprediksi. Namun, kasus bunuh
							diri dapat diatasi dengan adanya pencegahan yang
							tergantung pada jenis gangguan psikologis yang
							melatarbelakanginya. Teman dan anggota keluarga
							sering kali justru merasa tidak percaya atau merasa
							bersalah ketika mendengar kabar bunuh diri karena
							tidak dapat menangkap tanda-tanda sebelumnya.
						</Text>
					</BlurToClear>

					<BlurToClear>
						<Text>
							Shneidman (dalam Nevid dkk., 2018) menemukan bahwa
							90% orang yang melakukan bunuh diri telah memberikan
							petunjuk sebelumnya, misalnya membuang
							barang-barangnya. Selain itu, mereka juga secara
							tiba-tiba mencoba menyelesaikan urusannya dengan
							menulis surat wasiat atau membeli tanah pemakaman.
							Banyak faktor yang dapat teramati, tetapi tidak
							dapat dijadikan patokan untuk memprediksi kapan
							orang tersebut akan melakukan bunuh diri.
						</Text>
					</BlurToClear>

					<BlurToClear>
						<Text>
							Berdasarkan teori dalam perspektif biologis bahwa
							faktor biologis juga berperan dalam bunuh diri,
							misalnya faktor-faktor genetik dan ketidakseimbangan
							neurotransmitter yang mengatur mood, yaitu serotonin
							(Crowell dkk.; Kohli dkk.; Uher & Perroud dalam
							Nevid dkk., 2018). Serotonin berhubungan dengan
							depresi yang dapat menjadi dasar dilakukannya bunuh
							diri, tetapi dapat juga bertindak sebagai penghambat
							aktivitas sistem saraf. Apabila aktivitas serotonin
							mengalami penurunan, maka akan menyebabkan pelepasan
							perilaku impulsif pada individu yang rentan untuk
							melakukan bunuh diri.
						</Text>
					</BlurToClear>
				</Subsection>
			</Section>
		</ArticlePage>
	);
};

export default React.memo(Suicide);
