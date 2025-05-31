import { Tabs, Tab } from "@mui/material";
import { Box } from "@mui/material";

export default function TabsComponent({ tabValue, onChange }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", overflowX: "auto", mb: 6 }}>
      <Tabs
        value={tabValue}
        onChange={onChange}
        variant="scrollable" // hace que en móviles se pueda deslizar
        scrollButtons="auto" // muestra botones si hace falta
        sx={{
          "& .MuiTabs-flexContainer": {
            justifyContent: { xs: "flex-start", md: "center" }, // alineación distinta según el tamaño
            flexWrap: "wrap", // permite que se ajusten en varias líneas si hay espacio
          },
          "& .MuiTab-root": {
            color: "text.secondary",
            fontWeight: 700,
            fontSize: { xs: 14, sm: 16, md: 18 },
            textTransform: "uppercase",
            minWidth: 100,
            px: 1,
            mr: { xs: 2, sm: 3, md: 4 },
            letterSpacing: 1,
            transition: "color 0.3s cubic-bezier(.4,0,.2,1)",
            transform: "scale(1)",
            "&.Mui-selected": {
              transform: "scale(1.1)",
              color: "primary.main",
            },
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

