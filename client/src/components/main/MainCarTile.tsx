import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledTile = styled.li`
  height: 216px;
  width: 220px;
  &:hover {
    background-color: white;
    :last-child {
      visibility: visible;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 15px;
  height: 100%;
  width: auto;
`;

const StyledImg = styled.img`
  height: auto;
  width: 100%;
`;

const StyledLinkBtn = styled.div`
  visibility: hidden;
  :last-child {
    &::before {
      content: '|';
      padding: 0px 8px 0px 8px;
    }
  }
`;

export function MainCarType({ carName, startPrice, carImg }: any) {
  return (
    <StyledTile>
      <StyledLink to="/">
        <StyledImg src={carImg} alt="carImg" />
        <div>{carName}</div>
        <div>{(startPrice / 1000).toLocaleString('ko-KR')}만원~</div>
        <StyledLinkBtn>
          <Link to="/">자세히 보기</Link>
          <Link to="/">내 차 만들기</Link>
        </StyledLinkBtn>
      </StyledLink>
    </StyledTile>
  );
}
