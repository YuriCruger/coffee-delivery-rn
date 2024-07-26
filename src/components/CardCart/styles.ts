import { Image, ImageSourcePropType } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  imageSrc: ImageSourcePropType;
};

export const Container = styled.View`
  height: 117px;
  width: 100%;
  padding: 16px 32px;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.GRAY_900};
  border: 1px solid ${({ theme }) => theme.colors.GRAY_700};
`;

export const ImageStyled = styled(Image).attrs<Props>(({ imageSrc }) => ({
  source: imageSrc,
}))`
  width: 64px;
  height: 64px;
`;

export const Section = styled.View`
  gap: 8px;
  flex: 1;
`;

export const Group = styled.View`
  gap: 9px;
  flex-direction: row;
  align-items: center;
`;

export const TitleAndSizeContainer = styled.View`
  flex: 1;
  gap: 2px;
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_100};
    font-size: ${theme.fonts.BALOO_2_SM.size}px;
    font-family: ${theme.font_family.BALOO_2};
    line-height: ${theme.fonts.BALOO_2_SM.lineHeight *
    theme.fonts.BALOO_2_SM.size}px;
  `}
  margin-bottom: auto
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_100};
    font-size: ${theme.fonts.ROBOTO_TEXT_MD.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_MD.lineHeight *
    theme.fonts.ROBOTO_TEXT_MD.size}px;
  `}
`;

export const Size = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_400};
    font-size: ${theme.fonts.ROBOTO_TEXT_SM.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_SM.lineHeight *
    theme.fonts.ROBOTO_TEXT_SM.size}px;
  `}
`;

export const InputNumberContainer = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.GRAY_600};
  border-radius: 6px;
  align-self: flex-start;
`;
