import { Tabs, Tab } from "@mui/material";
import { Box } from "@mui/material";

export default function TabsComponent({ tabValue, onChange }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", }}>
      <Tabs
        value={tabValue}
        onChange={onChange}
        sx={{
          alignItems: "center",
          mb: 6,
          "& .MuiTab-root": {
            color: "text.secondary",
            fontWeight: 700,
            fontSize: 18,
            textTransform: "uppercase",
            minWidth: 120,
            px: 0,
            mr: 4,
            letterSpacing: 1,
            transition: "color 0.3s cubic-bezier(.4,0,.2,1)",
            transform: "scale(1)",
            "&.Mui-selected": {
              transform: "scale(1.1)",
              color: "primary.main",
            }
          },
        }}
      >
        <Tab label="ACERCA DE" />
        <Tab label="EXPERIENCIA" />
        <Tab label="PROYECTOS" />
      </Tabs>
    </Box>
  );
}

