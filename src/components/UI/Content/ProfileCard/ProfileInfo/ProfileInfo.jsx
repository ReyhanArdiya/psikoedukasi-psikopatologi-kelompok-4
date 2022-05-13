import styled from "styled-components";

const Container = styled.section`
    padding: 0.8em 0.5em;
    display: flex;
    flex-direction: column;
    row-gap: 1.2em;
`;

const Name = styled.p`
    font: 900 1.6em "Lato", sans-serif;
    line-height: unset;
    height: 100%;
    color: ${({ theme }) => theme.colors.primary[1]};
`;

const Nim = styled.small`
    ${({ theme }) => theme.text.note};
    line-height: unset;
    text-align: right;
    color: ${({ theme }) => theme.colors.secondary[2]};
`;

const ProfileInfo = ({ name, nim }) => {
	return (
		<Container className="profile-info">
			<Name className="profile-name">{name}</Name>
			<Nim className="profile-nim">{nim}</Nim>
		</Container>
	);
};

export default ProfileInfo;