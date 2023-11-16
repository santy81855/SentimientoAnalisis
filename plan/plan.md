### Plan de Proyecto para el Desarrollo del Sitio de Análisis de Sentimiento

#### **1. Definición del Proyecto**

-   **Objetivo:**

    -   Desarrollar un sitio web para el análisis de sentimiento que permita a los usuarios explorar datos de sentimiento para diversos municipios en Colombia.

-   **Entregables:**
    -   Sitio web funcional con capacidad de análisis de sentimiento.
    -   Documentación del proyecto.

#### **2. Fase de Planificación**

-   **Identificación de Requisitos:**

    -   Definir los requisitos específicos del sitio web.
    -   Determinar las funcionalidades clave, como la visualización de datos, y selección de municipios.

-   **Planificación de Recursos:**
    -   Establecer el equipo de desarrollo y asignar roles y responsabilidades.
    -   Identificar recursos tecnológicos y de desarrollo necesarios.

#### **3. Desarrollo de la Base de Datos**

-   **Diseño de la Base de Datos:**

    -   Crear la estructura de la base de datos con tablas para municipios y publicaciones.
    -   Definir relaciones entre tablas.

        #### Tabla de Municipios:

        -   Campos: municipioID (Clave Primaria), municipioNombre

        #### Tabla de Publicaciones:

        -   Campos: PubID (Clave Primaria), municipioID (Clave Foránea que referencia la Tabla de Municipios), pubTexto, sentimientoCalificacion, timestamp

-   **Desarrollo del Esquema de Datos:**
    -   Implementar el diseño de la base de datos.
    -   Incorporar campos necesarios para almacenar datos de sentimiento y usuario.

#### **4. Desarrollo del Sitio Web**

-   **Desarrollo Frontend:**

    -   Crear la interfaz de usuario (UI) del sitio web.
    -   Implementar la visualización de datos y el menú de municipios.

-   **Desarrollo Backend:**

    -   Configurar la lógica del servidor para manejar las solicitudes del frontend.
    -   Integrar la base de datos para almacenar y recuperar datos.

-   **Stack Tecnológico**
    -   **Framework:** Next.js & React.js
    -   **Base de Datos:** ?
    -   **Hospedaje:** ?

#### **5. Flujo de Usuario:**

-   **Panel de Control:**
    -   Los usuarios son dirigidos a un panel de control que muestra un resumen de datos de sentimiento para todas las ciudades o una ciudad predeterminada.
    -   Mostrar gráficos y estadísticas resumiendo datos de sentimiento para todas las ciudades.
    -   Selección de Ciudad:
        -   Incluir un menú desplegable o una lista donde los usuarios puedan seleccionar una ciudad específica.
            Al seleccionar una ciudad, actualizar dinámicamente el panel de control para mostrar datos de sentimiento para la ciudad elegida.
    -   Vista Detallada de la Ciudad:
        -   Proporcionar una vista detallada para la ciudad seleccionada, incluyendo gráficos específicos, tablas y gráficos que muestren datos de sentimiento para diversas categorías (por ejemplo, seguridad, entretenimiento, gastronomía).
            Los usuarios pueden explorar publicaciones, calificaciones y otros detalles relacionados con la ciudad seleccionada.

#### **6. Implementación del Análisis de Sentimiento**

-   **Integración del Modelo de Aprendizaje de Idiomas:**
    -   Incorporar el modelo de análisis de sentimiento para evaluar publicaciones.
    -   Establecer la funcionalidad de calificación automática.

#### **7. Desarrollo del Panel de Administración (Opcional)**

-   **Funcionalidades del Administrador:**
    -   Desarrollar características específicas para administradores, como la abilidad de agregar y borrar datos de los municipios.

#### **8. Pruebas y Ajustes**

-   **Pruebas de Funcionalidad:**

    -   Realizar pruebas exhaustivas del sitio web en un entorno controlado.
    -   Identificar y corregir posibles errores y problemas.

-   **Pruebas de Usabilidad:**
    -   Obtener retroalimentación de usuarios para evaluar la usabilidad.
    -   Realizar ajustes según sea necesario.

#### **9. Implementación y Despliegue**

-   **Despliegue del Sitio:**
    -   Preparar la infraestructura para el lanzamiento del sitio web.
    -   Realizar el despliegue en un entorno de producción.

#### **10. Documentación y Capacitación**

-   **Documentación del Proyecto:**

    -   Crear documentación detallada sobre el funcionamiento del sitio web y la estructura de la base de datos.

-   **Capacitación del Usuario (Opcional):**
    -   Proporcionar capacitación para usuarios, especialmente para administradores si se han implementado funciones específicas para ellos.

#### **11. Evaluación del Proyecto**

-   **Evaluación del Rendimiento:**

    -   Monitorear el rendimiento del sitio web después del lanzamiento.
    -   Realizar ajustes y mejoras según sea necesario.

-   **Revisión del Proyecto:**
    -   Realizar una revisión general del proyecto para identificar lecciones aprendidas y áreas de mejora.
