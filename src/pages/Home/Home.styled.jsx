import styled from '@emotion/styled';

import imgHomeMobile1x from '../../assets/images/background/homePage/mobile/bubbleMob.png';
import imgHomeMobile2x from '../../assets/images/background/homePage/mobile/bubbleMob@2x.png';
import imgHomeTablet1x from '../../assets/images/background/homePage/tablet/bubbleTablet.png';
import imgHomeTablet2x from '../../assets/images/background/homePage/tablet/bubbleTablet@2x.png';
import imgHomeDesktop1x from '../../assets/images/background/homePage/desktop/bubbleDesk.png';
import imgHomeDesktop2x from '../../assets/images/background/homePage/desktop/bubbleDesk@2x.png';

import imgBottleMobile1x from '../../assets/images/background/homePage/mobile/bottleMob.png';
import imgBottleMobile2x from '../../assets/images/background/homePage/mobile/bottleMob@2x.png';
import imgBottleTablet1x from '../../assets/images/background/homePage/tablet/bottleTabl.png';
import imgBottleTablet2x from '../../assets/images/background/homePage/tablet/bottleTabl@2x.png';
import imgBottleDesktop1x from '../../assets/images/background/homePage/desktop/bottleDesc.png';
import imgBottleDesktop2x from '../../assets/images/background/homePage/desktop/bottleDesc@2x.png';

export const Section = styled.section`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;

  background-image: -webkit-image-set(
    url(${imgHomeMobile1x}) 1x,
    url(${imgHomeMobile2x}) 2x,
    
  );
  background-image: image-set(
    url(${imgHomeMobile1x}) 1x,
    url(${imgHomeMobile2x}) 2x
  );

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: -webkit-image-set(
      url(${imgHomeTablet1x}) 1x,
      url(${imgHomeTablet2x}) 2x
    );
    background-image: image-set(
      url(${imgHomeTablet1x}) 1x,
      url(${imgHomeTablet2x}) 2x
    );
  }

  @media screen and (min-width: 1440px) {
    background-image: -webkit-image-set(
    url(${imgHomeDesktop1x}) 1x,
    url(${imgHomeDesktop2x}) 2x
  );
  background-image: image-set(
    url(${imgHomeDesktop1x}) 1x,
    url(${imgHomeDesktop2x}) 2x
  }
`;

export const Container = styled.div`
  padding: 0
  width: 100%;
  align-items: center;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`;

export const WaterDescription = styled.div`
  background-color: #ecf2ff;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  max-width: 280px;
  margin: 40px 20px;
  padding: 24px 8px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin: 61px 32px 43px 32px;
    max-width: 688px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    margin: 20px 110px 40px 32px;
    max-width: 680px;
  }
`;
