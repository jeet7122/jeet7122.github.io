export const projects = [
  {
    "title": "Monolith To Microservice Refactor",
    "stack": ["Java", "Spring Boot", "Microservices", "Docker", "API Gateway", "Git/GitHub"],
    "repo": "https://github.com/jeet7122/Monolith-To-Microservice",
    "description": "Strategic refactor of a monolithic Java backend into decoupled Spring Boot microservices, designed for deployment automation, scalability, and independent service lifecycles.",
    "details": [
      "Led the decomposition into decoupled services (Auth, Orders, Product domains).",
      "Implemented API Gateway for unified access and service routing.",
      "Managed version control, acting as the final debugger and merge issue fixer (100+ commits).",
      "Dockerized services for containerization and isolated scaling."
    ],
    "role_focus": "Architecture, Leadership, Performance"
  },
  {
    "title": "Store-Mate (Desktop POS System)",
    "stack": ["JavaFX", "MySQL", "JDBC", "DAO", "Performance Tuning"],
    "repo": "https://github.com/jeet7122/Store-Mate",
    "description": "Desktop Point-of-Sale built in JavaFX, featuring product management, supplier modules, sales transactions, inventory tracking, and real-time UI dashboards.",
    "details": [
      "Optimized database interaction code, **reducing reload time** for 4 critical endpoints **from 3-4 seconds to $\\approx 500ms$**.",
      "Implemented a modular DAO (Data Access Object) architecture with JDBC for clean separation of concerns.",
      "Developed Purchase & Inventory modules with supplier binding and dynamic transaction charts.",
      "Designed and enforced the development path, allocating and distributing tasks among team members."
    ],
    "role_focus": "Performance Optimization, Leadership, Full-Stack"
  },
  {
    "title": "DR-DESK (Clinic Management App)",
    "stack": ["JavaFX", "PostgreSQL", "Java", "MVC"],
    "repo": "https://github.com/jeet7122/DR-DESK",
    "description": "Clinic management desktop application to efficiently manage patient records, appointments, medical history, billing, and visit tracking with clean UI components.",
    "details": [
      "Implemented structured data models using the MVC pattern for maintainability.",
      "Developed persistent patient history and time-based reporting features.",
      "Provided smooth session management, multi-view navigation, and user authentication.",
      "Led the team, distributed tasks, and ensured adherence to real-world healthcare workflows."
    ],
    "role_focus": "Leadership, Database Design, MVC Architecture"
  },
  {
    "title": "JavaJacks (Blackjack Game)",
    "stack": ["JavaFX", "Java", "File I/O"],
    "repo": "https://github.com/starboundtd12/JavaJacks",
    "description": "Blackjack desktop game built using JavaFX, showcasing UI state transitions, card animations, and robust game logic.",
    "details": [
      "Implemented a reliable turn-based card engine and dealer logic.",
      "Developed a dynamic scoring system with smooth hand animations and deck handling.",
      "Focused on intuitive controls and simple UI layers."
    ],
    "role_focus": "UI/UX, Game Logic"
  }
]