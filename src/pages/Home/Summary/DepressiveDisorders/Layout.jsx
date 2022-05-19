import styled from "styled-components";
import BlurToClear from "../../../../components/UI/Animations/BlurToClear";
import ReadMore from "../../../../components/UI/Buttons/ReadMore";
import { Text } from "../../../../components/UI/Content/Texts";
import TitleCard from "../../../../components/UI/Content/TitleCard";

const Container = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-areas: ${({ imgLoc }) => imgLoc === "right" ? "\"content img\"" : "\"img content\""};
	justify-items: center;
	align-items: center;
`;

const Image = styled.aside`
	${({ theme, smallImg, bigImg }) => theme.others.responsiveBg(smallImg, bigImg)}
	grid-area: img;
	width: 100%;
	height: 100%;
	border-radius: ${({ imgLoc }) => imgLoc === "right" ? "1rem 0 0 1rem" : "0 1rem 1rem 0"};
`;

const Content = styled.div`
	grid-area: content;
	align-items: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 1.3em 1.2em;
	gap: 3.1em;
`;

const LimitedText = styled(Text)`
	width: 9.57145em;
`;

const Layout = ({
	bigImg,
	children: text,
	id = "",
	imgLoc = "right",
	readTo = `/articles/${id}`,
	smallImg,
	title = id,
	className = ""
}) => {
	return (
		<Container
			className={`layout ${className}`}
			id={id}
			imgLoc={imgLoc}
		>
			<Image
				bigImg={bigImg}
				className="img"
				imgLoc={imgLoc}
				smallImg={smallImg}
			/>
			<Content className="content">
				<TitleCard>{title}</TitleCard>
				<BlurToClear>
					<LimitedText>{text}</LimitedText>
				</BlurToClear>
				<ReadMore path={readTo} />
			</Content>
		</Container>
	);
};

export default Layout;
