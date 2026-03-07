import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useAppTheme } from "../../theme/AppThemeProvider";
import { DEFAULT_THEME, themeOptions } from "../../theme/themeConfig";

const Colorsidebar = ({
    setisActive,
    isActive,
}) => {
    const { currentTheme, setTheme, resetTheme } = useAppTheme();

    const ref = useRef(null);

    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setisActive(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [setisActive]);

    const darkThemeOption = themeOptions.find((option) => option.key === "dark");
    const accentThemeOptions = themeOptions.filter((option) => option.key !== "dark");

    return (
        <Overlay $isActive={isActive}>
            <Panel $isActive={isActive} ref={ref}>
                <CloseButtonWrapper className="mb-20">
                    <CloseButton
                        type="button"
                        aria-label="Close theme panel"
                        onClick={() => setisActive(false)}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </CloseButton>
                </CloseButtonWrapper>

                <SectionTitle>{darkThemeOption.group}</SectionTitle>
                <ThemeOption
                    type="button"
                    $isActive={currentTheme === darkThemeOption.key}
                    onClick={() => setTheme(darkThemeOption.key)}
                >
                    <ThemeSwatch
                        $isActive={currentTheme === darkThemeOption.key}
                        $swatch={darkThemeOption.swatch}
                    />
                    <ThemeLabel $isActive={currentTheme === darkThemeOption.key}>
                        {darkThemeOption.label}
                    </ThemeLabel>
                </ThemeOption>

                <Divider />

                <SectionTitle>Accent Colors</SectionTitle>
                <ThemeGrid>
                    {accentThemeOptions.map((option) => (
                        <ThemeOption
                            key={option.key}
                            type="button"
                            $isActive={currentTheme === option.key}
                            onClick={() => setTheme(option.key)}
                        >
                            <ThemeSwatch
                                $isActive={currentTheme === option.key}
                                $swatch={option.swatch}
                            />
                            <ThemeLabel $isActive={currentTheme === option.key}>
                                {option.label}
                            </ThemeLabel>
                        </ThemeOption>
                    ))}
                </ThemeGrid>

                <ResetWrapper>
                    <ResetButton
                        type="button"
                        $isDefault={currentTheme === DEFAULT_THEME}
                        onClick={resetTheme}
                    >
                        Reset
                    </ResetButton>
                </ResetWrapper>
            </Panel>
        </Overlay>
    )
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: flex-end;
  z-index: ${({ $isActive }) => ($isActive ? 999 : -1)};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  pointer-events: ${({ $isActive }) => ($isActive ? "auto" : "none")};
  transition: opacity 0.2s ease-in;
`;

const Panel = styled.aside`
  max-width: 280px;
  width: 100%;
  min-height: 100vh;
  background: var(--white);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transform: translateX(${({ $isActive }) => ($isActive ? "0" : "100%")});
  transition: transform 0.4s ease-in-out;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  background: transparent;
  color: var(--black);
  font-size: 22px;
  border: none;

  &:hover {
    background: transparent;
  }
`;

const SectionTitle = styled.p`
  color: var(--black);
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #949292;
  margin: 15px 0;
`;

const ThemeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ThemeOption = styled.button`
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: fit-content;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: transparent;
  }

  &:hover span:first-child {
    transform: scale(1.03);
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const ThemeSwatch = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 1px solid var(--black);
  background: ${({ $swatch }) => $swatch};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: ${({ $isActive }) => ($isActive ? "0 0 0 3px var(--yellow-1)" : "none")};
  transform: ${({ $isActive }) => ($isActive ? "scale(1.06)" : "scale(1)")};

  @media (max-width: 480px) {
    width: 44px;
    height: 44px;
  }
`;

const ThemeLabel = styled.span`
  color: var(--black);
  font-weight: 500;
  font-size: 14px;
  font-family: var(--poppins);
  color: ${({ $isActive }) => ($isActive ? "var(--yellow)" : "var(--black)")};
`;

const ResetWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const ResetButton = styled.button`
  background: ${({ $isDefault }) => ($isDefault ? "var(--black)" : "transparent")};
  color: ${({ $isDefault }) => ($isDefault ? "var(--white)" : "var(--black)")};
  border: 1px solid var(--black);
  padding: 8px 30px;
  width: 100%;
  border-radius: 6px;

  &:hover {
    background: var(--black);
    color: var(--white);
  }
`;

export default Colorsidebar
