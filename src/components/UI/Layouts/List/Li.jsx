import styled from "styled-components";
import { Text } from "../../Content/Texts";

const Li = styled(Text).attrs({ as : "li" })`
    text-align: justify;
    line-height: 1.5em;
`;

// const Li = ({ children }) => {
//     return (
//         <Container>
//             {children}
//         </Container>
//     );
// };

export default Li;