import styled from 'styled-components';

export const SearchbarContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  background: #4682b4;
`;

export const GalleryContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 20px 0;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ErrorMessage = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  align-items: center;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(46, 47, 66, 0.4);

  .modal {
    max-height: 500px;
    max-width: 900px;
    width: 100%;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 30px 0;

  .loadMoreBtn {
    background: #4682b4;
    height: 25px;
    border: none;
    border-radius: 3px;
    color: #fff;
    font-weight: 500;
    font-size: 15px;
  }
`;
