import { Tabs, Tab } from "@mui/material";
import { Box } from "@mui/material";

export default function TabsComponent({ tabValue, onChange }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", overflowX: "auto", mb: 6 }}>
      <Tabs
        orientation="vertical"
        value={tabValue}
        onChange={onChange}
        sx={{
          minWidth: 180,
          borderRight: 1,
          borderColor: "transparent",
          "& .MuiTabs-indicator": {
            left: 0,
            width: "3px",
            backgroundColor: "primary.main",
            transition: "all 0.3s ease",
          },
          "& .MuiTab-root": {
            alignItems: "flex-start",
            justifyContent: "flex-start",
            color: "#7c8aa0", // gris azulado
            textTransform: "uppercase",
            fontWeight: 600,
            fontSize: 14,
            pl: 3,
            py: 1.5,
            borderLeft: "3px solid transparent",
            transition: "all 0.3s ease",
            "&.Mui-selected": {
              color: "#ffffff",
            },
          },
        }}
      >
        <Tab label="Acerca de" />
        <Tab label="Experiencia" />
        <Tab label="Proyectos" />
      </Tabs>
    </Box>

  );
}

