import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CodeIcon from "@mui/icons-material/Code";
import BookIcon from "@mui/icons-material/Book";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { motion, AnimatePresence } from "framer-motion";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BuildIcon from "@mui/icons-material/Build";
import '@fontsource/poppins';
import '@fontsource/montserrat';
import '@fontsource/roboto';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Stack,
  IconButton,
  Avatar,
  Paper,
  ThemeProvider,
  CssBaseline,
  Tooltip,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Divider

} from "@mui/material";
import { darkTheme, lightTheme } from "./temas/Theme";
import TabsComponent from './components/TabsComponent';


function App() {
  const [isDark, setIsDark] = React.useState(true);
  const [tab, setTab] = React.useState(0);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      {/* Fondo degradado/difuminado */}
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          bgcolor: "background.default",
          background: isDark
            ? "radial-gradient(ellipse at 20% 20%, #162032 60%, #0a1a18 100%)"
            : "radial-gradient(ellipse at 20% 20%, #e3f6f3 60%, #b0d1cb 100%)",
          color: "text.primary",
          fontFamily: "Montserrat, Poppins, Roboto, Arial, sans-serif",
          px: { xs: 2, md: 10 },
          py: 6,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          boxSizing: "border-box",
          overflowX: "hidden",
          transition: "background 0.5s",
        }}

      >
        {/* Botón de cambio de tema */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
          <Tooltip title={isDark ? "Modo claro" : "Modo oscuro"}>
            <IconButton
              onClick={() => setIsDark((v) => !v)}
              sx={{
                color: "primary.main",
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: 2,
                "&:hover": { bgcolor: "primary.main", color: "#fff" },
                transition: "all 0.2s",
              }}
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
        </Box>
        {/* Layout principal */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flex: 1,
            width: "100%",
            minWidth: 0,
            justifyContent: "center",
            gap: { xs: 2, md: 8 },
          }}
        >
          {/* Sidebar */}
          <Box
            sx={{
              width: { xs: "100%", sm: 350, md: 400, lg: 500 },  // ancho flexible
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              px: { xs: 1, sm: 2, md: 3 },
              pt: { xs: 3, sm: 4, md: 8 },
              pb: { xs: 4, md: 0 },
              mx: { xs: 0, md: 2 },
              py: { xs: 0, md: 8 },
              minHeight: 50,
            }}
          >

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: 28, sm: 36, md: 48 },
                color: "primary.main",
                letterSpacing: 1,
                mb: 1,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Pedro Juan Sarmiento Julio.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 500,
                color: "text.primary",
                mb: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Ingeniero de Sistemas
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                mb: 4,
                fontSize: 18,
                textAlign: { xs: "center", md: "left" },
                maxWidth: 340,
              }}
            >
              Portafolio profesional y experiencia.
            </Typography>
            {/* Tabs horizontales */}
            <TabsComponent
              tabValue={tab}
              onChange={(e, newValue) => setTab(newValue)}
            />

          </Box>
          {/* Contenido principal */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", sm: 700, md: 800 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              px: { xs: 2, sm: 3, md: 0 },
            }}
          >

            {/* Contenido dinámico según tab */}
            <AnimatePresence mode="wait">
              <motion.div
                key="about"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                style={{ width: "100%" }}
              >
                {tab === 0 && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: "100%" }}
                  >

                    <Paper
                      elevation={3}
                      sx={{
                        p: 4,
                        borderRadius: 4,
                        bgcolor: "background.paper",
                        boxShadow: 4,
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
                        <Avatar
                          src="./assets/perfil.jpg" // asegúrate de que la imagen esté en /public/assets/
                          alt="logo"
                          sx={{
                            width: 120,
                            height: 120,
                            mb: 2,
                            boxShadow: 3,
                            border: "4px solid",
                            borderColor: "primary.main",
                          }}
                        />
                        <Typography sx={{ color: "primary.main", fontSize: 28, fontWeight: 700 }}>
                          Perfil Profesional
                        </Typography>
                      </Box>

                      <Typography sx={{ color: "text.secondary", fontSize: 18, mb: 2 }}>
                        Ingeniero de Sistemas con formación complementaria en <b>Gestión de Sistemas de Información y Redes de Cómputo</b>. Experiencia en administración de sistemas, soporte técnico, desarrollo de software y mantenimiento de infraestructura tecnológica. Capaz de liderar la implementación de soluciones informáticas, gestionar bases de datos y coordinar equipos técnicos. Apasionado por la tecnología, la mejora continua y el cumplimiento de normativas en entornos empresariales.
                      </Typography>

                      <Typography sx={{ color: "text.secondary", fontSize: 18, mb: 2 }}>
                        Me destaco por estar orientado a resultados, tener iniciativa para evaluar nuevas tecnologías y optimizar procesos, y por mi capacidad de adaptación y trabajo en equipo.
                      </Typography>

                      <Typography sx={{ color: "primary.main", fontSize: 20, fontWeight: 600, mt: 3, mb: 1 }}>
                        Habilidades
                      </Typography>

                      <Typography sx={{ color: "text.secondary", fontSize: 18 }}>
                        • Redes de telecomunicaciones y configuración de infraestructura básica. <br />
                        • Mantenimiento preventivo y correctivo de sistemas informáticos. <br />
                        • Desarrollo de software a medida y actualización de aplicaciones existentes. <br />
                        • Resolución efectiva de problemas técnicos y soporte a usuarios. <br />
                        • Trabajo en equipo y colaboración en entornos multidisciplinarios. <br />
                        • Rápida adaptación a nuevas tecnologías y herramientas digitales.
                      </Typography>

                    </Paper>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key="about"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                style={{ width: "100%" }}
              >
                {tab === 1 && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.4 }}
                    style={{ width: "100%" }}
                  >
                    <Box sx={{ width: "100%", maxWidth: 800, px: 2, py: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <Typography sx={{ color: "primary.main", fontWeight: 700, fontSize: 28, mb: 4 }}>
                        Experiencia Laboral
                      </Typography>
                      <Stack spacing={4}>
                        {/* Trabajo: Desarrollador de Software */}
                        <Paper elevation={4} sx={{ p: 3, borderRadius: 4, bgcolor: "background.paper" }}>
                          <Stack direction="row" spacing={2}>
                            <Avatar sx={{ bgcolor: "primary.main" }}>
                              <EngineeringIcon />
                            </Avatar>
                            <Box>
                              <Typography sx={{ fontWeight: 700, fontSize: 20, color: "primary.main" }}>
                                Desarrollador de Software · Tiserion
                              </Typography>
                              <Typography sx={{ fontSize: 14, color: "text.secondary", mb: 1 }}>
                                2020 — 2021
                              </Typography>
                              <Typography sx={{ color: "text.secondary", fontSize: 16, mb: 2 }}>
                                Encargado del mantenimiento de sistemas, desarrollo de aplicaciones personalizadas,
                                soporte a usuarios, pruebas de calidad y documentación técnica.
                              </Typography>
                              <Stack
                                direction={{ xs: "row", sm: "row" }}
                                spacing={1}
                                sx={{ mt: 1, mb: 2, flexWrap: "wrap", justifyContent: "center" }}
                              >
                                {["Desarrollo", "Documentación", "React", "CSS", "JavaScript", "Node.js", "Express",].map((tag) => (
                                  <Box
                                    key={tag}
                                    sx={{
                                      bgcolor: "primary.main",
                                      color: "#fff",
                                      px: 1.5,
                                      py: 0.5,
                                      borderRadius: 2,
                                      fontSize: 13,
                                      fontWeight: 600,
                                      mb: 4,
                                    }}
                                  >
                                    {tag}
                                  </Box>
                                ))}
                              </Stack>
                            </Box>
                          </Stack>
                        </Paper>

                        {/* Trabajo: Técnico en mantenimiento */}
                        <Paper elevation={4} sx={{ p: 3, borderRadius: 4, bgcolor: "background.paper" }}>
                          <Stack direction="row" spacing={2}>
                            <Avatar sx={{ bgcolor: "primary.main" }}>
                              <BuildIcon />
                            </Avatar>
                            <Box>
                              <Typography sx={{ fontWeight: 700, fontSize: 20, color: "primary.main" }}>
                                Técnico en mantenimiento · Servitek
                              </Typography>
                              <Typography sx={{ fontSize: 14, color: "text.secondary", mb: 1 }}>
                                2023 — 2025
                              </Typography>
                              <Typography sx={{ color: "text.secondary", fontSize: 16, mb: 2 }}>
                                Realicé mantenimiento preventivo y correctivo de equipos, instalación de software,
                                soporte remoto y presencial, y gestión de redes empresariales.
                              </Typography>
                              <Stack
                                direction={{ xs: "row", sm: "row" }}
                                spacing={1}
                                sx={{ mt: 1, mb: 2, flexWrap: "wrap", justifyContent: "center" }}
                              >
                                {["Mantenimiento", "Instalación", "Redes", "Soporte"].map((tag) => (
                                  <Box
                                    key={tag}
                                    sx={{
                                      bgcolor: "primary.main",
                                      color: "#fff",
                                      px: 1.5,
                                      py: 0.5,
                                      borderRadius: 2,
                                      fontSize: 13,
                                      fontWeight: 600,
                                      mb: 1,
                                    }}
                                  >
                                    {tag}
                                  </Box>
                                ))}
                              </Stack>
                            </Box>
                          </Stack>
                        </Paper>
                      </Stack>
                    </Box>
                  </motion.div>
                )}
              </motion.div>

            </AnimatePresence>

            {/* Proyectos destacados */}
            <AnimatePresence mode="wait">
              <motion.div
                key="proyectos"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                style={{ width: "100%" }}
              >
                {tab === 2 && (
                  <motion.div
                    key="proyectos"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: "100%" }}
                  >
                    <Grid container spacing={4}
                    >
                      {[
                        {
                          title: "App de Clima",
                          description: "Registro y manejo de análisis del comportamiento humano.",
                          image: "/assets/imagen22.jpg", // asegúrate que esté en /public/assets/
                          github: "https://github.com/PESAJU23/analisis",
                          tech: ["React", "API REST", "CSS", "JavaScript", "mySQL", "Node.js", "Express", "material-ui"],
                        },
                        {
                          title: "Portafolio Personal",
                          description: "Este portafolio está hecho con React y MUI, con animaciones y diseño responsive.",
                          image: "/assets/imagen2.png", // usa una imagen válida o la de placeholder
                          github: "https://github.com/PESAJU23/analicisdecomprotamiento",
                          tech: ["React", "MUI", "Framer Motion"],
                        },
                      ].map((project) => (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          key={project.title}
                          sx={{ p: 1, display: "flex", justifyContent: "center" }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            style={{ width: "100%" }}
                          >
                            <Card
                              container spacing={6}
                              sx={{
                                borderRadius: 4,
                                boxShadow: 6,
                                bgcolor: "background.paper",
                                transition: "transform 0.3s",
                              }}
                            >
                              <CardMedia
                                component="img"
                                height="150"
                                image={project.image}
                                alt={project.title}
                                sx={{
                                  objectFit: "cover"
                                }}
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h6" sx={{ fontWeight: 700 }}>
                                  {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                  {project.description}
                                </Typography>
                                <Stack
                                  direction={{ xs: "row", sm: "row" }}
                                  spacing={1}
                                  sx={{ mt: 1, mb: 2, flexWrap: "wrap", justifyContent: "center" }}
                                >
                                  {project.tech.map((tech) => (
                                    <Box
                                      key={tech}
                                      sx={{
                                        bgcolor: "primary.main",
                                        color: "#fff",
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 2,
                                        fontSize: 12,
                                        fontWeight: 500,
                                        mr: 1,
                                        mb: 1,
                                      }}
                                    >
                                      {tech}
                                    </Box>
                                  ))}
                                </Stack>
                              </CardContent>
                              <CardActions>
                                <Button
                                  size="small"
                                  variant="outlined"
                                  startIcon={<GitHubIcon />}
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener"
                                  sx={{
                                    textTransform: "none",
                                    fontWeight: 500,
                                    borderRadius: 2,
                                    ":hover": {
                                      bgcolor: "primary.main",
                                      color: "#fff",
                                    },
                                  }}
                                >
                                  Ver código
                                </Button>
                              </CardActions>
                            </Card>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </Box>
        </Box>

      </Box>
      {/* Footer */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          color: "text.primary",
          py: 4,
          px: { xs: 2, md: 10 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 700, mb: 2 }}>
            Contacto
          </Typography>
          {/* Redes sociales */}
          <Stack direction="row" spacing={2} sx={{ mt: "auto", mb: 2 }}>
            <IconButton component="a" href="https://github.com/" target="_blank" sx={{ color: "text.secondary" }}>
              <GitHubIcon />
            </IconButton>
            <IconButton component="a" href="https://linkedin.com/" target="_blank" sx={{ color: "text.secondary" }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton component="a" href="https://codepen.io/" target="_blank" sx={{ color: "text.secondary" }}>
              <CodeIcon />
            </IconButton>
            <IconButton component="a" href="https://instagram.com/" target="_blank" sx={{ color: "text.secondary" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton component="a" href="https://goodreads.com/" target="_blank" sx={{ color: "text.secondary" }}>
              <BookIcon />
            </IconButton>
          </Stack>
        </Box>
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
            © {new Date().getFullYear()} Pedro Juan Sarmiento Julio. Todos los derechos reservados.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider >
  );
}

export default App;