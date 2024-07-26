import styled, { css } from "styled-components/native";
import { ArrowLeft, ShoppingCart } from "phosphor-react-native";

export const Container = styled.View`
  padding-top: 44px;
  background-color: ${({ theme }) => theme.colors.GRAY_900};
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 76px;
`;

export const BackButton = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.GRAY_100,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_200};
    font-size: ${theme.fonts.BALOO_2_SM.size}px;
    font-family: ${theme.font_family.BALOO_2};
    line-height: ${theme.fonts.BALOO_2_SM.lineHeight *
    theme.fonts.BALOO_2_SM.size}px;
  `}
`;

export const EmptyView = styled.View`
  width: 24px;
`;

export const Section = styled.View`
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: 28px 32px 40px 32px;
  margin-top: auto;
  gap: 20px;
`;

export const GroupValue = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_200};
    font-size: ${theme.fonts.ROBOTO_TEXT_MD.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_MD.lineHeight *
    theme.fonts.ROBOTO_TEXT_MD.size}px;
  `}
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_200};
    font-size: ${theme.fonts.BALOO_2_MD.size}px;
    font-family: ${theme.font_family.BALOO_2};
    line-height: ${theme.fonts.BALOO_2_MD.lineHeight *
    theme.fonts.BALOO_2_MD.size}px;
  `}
`;

export const EmptyCartMessage = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 64px;
`;

export const ShoppingCartIcon = styled(ShoppingCart).attrs(({ theme }) => ({
  color: theme.colors.GRAY_500,
  size: 24,
  weight: "fill",
}))``;

export const MessageText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_400};
    font-size: ${theme.fonts.ROBOTO_TEXT_SM.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_SM.lineHeight *
    theme.fonts.ROBOTO_TEXT_SM.size}px;
  `}
  margin-bottom: 8px;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 32px;
  left: 32px;
  right: 32px;
`;

export const RemoveButton = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.RED};
  justify-content: center;
  padding-left: 32px;
  flex: 1;
`;
