export const urls = [{ url: 'diegolundstest99@gmail.com' }, { url: 'https://github.com/Decxo360' }, { url: 'https://www.linkedin.com/in/diegolundstedt/' }]

export const competencias = [
    { id: 0, entorno: 'React', url: 'https://es.reactjs.org/docs/getting-started.html', icono: 'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734355/react_eypjcq.png' },
    { id: 1, entorno: 'Vue', url: 'https://vuejs.org/', icono: 'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734357/vue_z6mqkn.png' },
    { id: 2, entorno: 'SQL', url: 'https://www.mysql.com/', icono: 'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734352/mysql_pgoz3n.png' },
    { id: 3, entorno: 'PHP', url: 'https://www.php.net/', icono: 'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734353/php_uag8z5.png' },
    { id: 4, entorno: 'Java', url: 'https://www.java.com/es/', icono: 'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734348/java_oiu8i5.png' },
    { id: 5, entorno: 'Javascript', url: 'https://www.javascript.com/', icono: 'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734352/js_ovzjgp.png' },
    { id: 6, entorno: 'Node', url: 'https://nodejs.org/en/docs/', icono: 'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734348/node_zsm507.png' },
    { id: 7, entorno: 'Python', url: 'https://www.python.org/', icono: 'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734356/pyhton_wdmadx.png' },
    {id:8, entorno:'Angular',url:"https://angular.io/quick-start",icono:"https://res.cloudinary.com/drp7cwb8s/image/upload/v1692309767/pngwing.com_h0vdyq.png"},
    {id:9, entorno:"Sequelize Orm",url:"https://sequelize.org/",icono:"https://res.cloudinary.com/drp7cwb8s/image/upload/v1692309963/sequelize-logo-png-transparent_ullcxc.png"}
]

export const proyectos = [
    { id: 1, titulo: 'JournalApp',web:"https://journal-app-mu-seven.vercel.app/auth/login", codigo: 'https://github.com/Decxo360/JournalApp', etiquetas: ['yarn', 'vite', 'react', 'react-redux', 'redux-toolkit', 'firebase', 'social Login', 'fetch', 'Javascript', 'Auth', 'Material UI', 'Swet Alert 2', 'react rooter dom'], descripcion: 'Esta es una aplicacion de notas donde puedes guardar tu nota actual, subir imagenes de lo que haz hecho, eliminar notas, crear, actualizar. Cuenta con login local y social login de google.', url: 'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734353/proyecto1_pngnuf.png' },
    { id: 2, titulo: 'Buscador de Gifs',web:"https://react-gif-expert-app-mauve.vercel.app/", codigo: 'https://github.com/Decxo360/react-gif-expertApp', etiquetas: ['npm', 'react', 'fetch'], descripcion: 'Proyecto donde consumo una api rest de Giphy, la cual consiste en buscar el gif relacionado con lo escrito por el usuario', url: 'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734358/proyecto2_pqpkeo.png' },
    { id: 3, titulo: 'Ricks And Mortys',web:"https://ricks-and-morty-s.vercel.app/", codigo: 'https://github.com/Decxo360/RicksAndMorty-s', etiquetas: ['yarn', 'vite', 'react-redux', 'react', 'RTQuerys', 'bootstrap', 'react router dom'], descripcion: 'Una web que permite buscar y ver las descripciones de los personajes de ricks and mortys la serie. Esto implementando una tecnologia la cual proviene de las RTQuerys', url: 'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734352/proyecto_3_h0l7go.png' },
    { id: 4, titulo: 'Indecisions', codigo: 'https://github.com/Decxo360/indecisions.github.io', etiquetas: ['yarn', 'vue', 'fetch'], descripcion: 'Una web la cual consumo una api res, la cual retorna un gif el cual responde si o no a la pregunta ingresada por el usuario', url: 'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734363/proyecto4_jaqatu.png' },
    { id: 5, titulo: 'Backend node js', codigo: 'https://github.com/Decxo360/blog-app-mysql-nodejs', etiquetas: ['yarn', 'node', 'express', 'mysql', 'passport', 'jwt', 'brcyrpts', 'dotenv', 'nodemon', 'CRUD', 'express-session'], descripcion: 'Este es un backend hecho com mysql, workbench, xampp. Es un backend hecho para una pagina web futura la cual constara de creacion de publicaciones, perfil, entre otras cosas. Por curiosidad implemente este backend tanto en java+springboot y tambien en laravel+php', url: 'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734356/proyecto5_yrpj1b.png' },
    { id: 6, titulo: 'VotacionesApp-Backend', codigo: 'https://github.com/Decxo360/votacionesapp-backend', etiquetas: ["Python", "FastApi", "JWT", "bcrypt", "mysql"], descripcion: "Backend realizado con el proposito de alimentar datos a mi pagina web de votaciones, la cual consta de alimentar, votaciones creadas, votaciones votadas, consulta de seguidores, entre otros. El cual cumple con el proposito de alimentar y mejorar mi portafolio", url: 'https://res.cloudinary.com/drp7cwb8s/image/upload/v1674236368/Captura_xjijk2.png' },
    { id:7,  titulo:"Bondpland", web:"http://dev.bonpland.site/",codigo:"sin codigo", etiquetas:["Yarn","github","javascript","node.js","express","cors","SSL","JWT","Sequelize Orm","React","tailwindcss","Mysql","bcrypt","https",], descripcion:"Proyecto en desarrollo. es una web dónde me he encargado de toda la funcionalidad del back-end, asignación de tareas al resto del equipo del bac-end. He tenido que realizar mantenciones al front, debido a caídas al sitio web con la configuración de ci/cd y manipulación y creació de base de datos. Además este proyecto ha sido manejado con metodologías agiles con asignación de tarjetas en trello y jira, con dailys e sprints reviews. Este proyecto esta enfocado a inmobilarias que necesiten subir sus inmuebles a un sitio para poder lograr mayor visibilidad",url:"https://res.cloudinary.com/drp7cwb8s/image/upload/v1692306123/bonpland_pgs2wo.png"},
    { id:8,titulo:"todotrabajo",codigo:"https://github.com/Decxo360/todotrabajo",etiquetas:["Github","javascript vanilla","XAMPP","Mysql","CSS","HTML","php vanilla","UML","DML","BPMN","ERP"],descripcion:"Proyecto realizado para titutalación. En este proyecto me dedique a la construccion tanto Front-end y Back-end y recopilacion de datos para la creación de este. Este proyecto tiene como finalidad la busqueda de emplo tanto formal como informal, aplicando una forma de pago y código para indicar que el trabajo fue realizado con éxito. Todo trabajado con metodología ágil con scrum, para la asignación de tarea tanto como documentación, creación de software y creación de diagramas.", url:"https://res.cloudinary.com/drp7cwb8s/image/upload/v1692149666/descarga_kytgic.png"},
    { id:9,titulo:"ramsa", codigo:"en desarrollo", etiquetas:["pnpm","node.js","express","jwt","bcrypt","sequelize ORM","github projects","github"],descripcion:"Este proyecto corresponde a una consecionaria de vehiculos, la cual contara con una página donde clientes podrán ver vehiculos y ponerse en contacto para poder realizar la visita y compra del vehículo. También cuenta con una página administrativa para poder crear estos vehículos, tanto liviano como pesado, ademas de crear usuario y muchas otras cosas más. En este proyecto estoy a cargo del back-end para alimentar con datos ambas páginas. Todo ha sido manejado con metododología ágil con github projects",url:"https://res.cloudinary.com/drp7cwb8s/image/upload/v1692149666/descarga_kytgic.png"}
]

export const nombre = 'Diego Ignacio Lundstedt Muñoz'
export const descripcion = `!Hola! Me Llamo Diego Ignacio Lundstedt Muñoz y tengo 23 años. En la actualidad me dedico a ser desarrollador, tanto como Front-end como Back-end, cuento con un título técnico como Analista Programador desde hace ya un año. Soy una persona con muchos objetivos y suelo cumplirlos. Me encuentro en bùsqueda activa de empleo en el mundo IT. Me gusta investigar constantemente respecto a tecnologías nuevas y lenguajes que no conozco, soy bastante curioso, perfeccionista, proactivo, motivado, perseverante, autodidacta, entre otras más. Actualmente cuento con algunos proyectos en base a mis conocimientos adquiridos de cursos y la curiosidad propia. Los cuales serán mostrados en la sección de proyectos. En la siguiente sección muestro mis competencias prácticas.`;


