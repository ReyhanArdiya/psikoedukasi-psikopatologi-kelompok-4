import styled from "styled-components";
import { Text } from "../../Content/Texts";

const Li = styled(Text).attrs({ as : "li" })`
    text-align: justify;
    line-height: 1.5em;
    padding-left: 0.3em;

    b {
        font-weight: bold;
    }
`;

// const Li = ({ children }) => {
//     return (
//         <Container>
//             {children}
//         </Container>
//     );
// };

export default Li;