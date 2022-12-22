import styled from "styled-components";

export const StyledContainerSite = styled.div`
    width: 1375px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    gap: 68px;
    @media (max-width: 700px) {
      width: 414px;
      height: 736px;
      display: flex;
      flex-direction: column;
      padding-left: 16px;
      overflow-x: scroll;
    }
`;
