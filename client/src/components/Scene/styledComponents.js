import styled from 'styled-components';
import { mediaQueriesByDevice } from '../../utils/css/breakpoints';
const { desktop } = mediaQueriesByDevice;

export const SceneContainer = styled.div`
  width: 100vw;
  height: 100vw;
  color: #000;
  flex: 0 0 auto;
  overflow: hidden;

  ${desktop} {
    height: 100vh;
    width: 100vh;
    margin-left: 160px;
  }
`;
