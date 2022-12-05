import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

type BoxProps = {
  defaultTheme?: boolean;
};

export const Box = (props: BoxProps) => {
  const { defaultTheme = false } = props;

  const theme = useContext(ThemeContext);
  return (
    <div
      style={
        defaultTheme
          ? { backgroundColor: theme.primary.main, color: theme.primary.text }
          : {
              backgroundColor: theme.secondary.main,
              color: theme.secondary.text,
            }
      }
    >
      Theme Context
    </div>
  );
};
