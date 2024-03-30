export default function getAllPosts() {
    const posts = [
        {
          "id": 0,
          "sticky": true,
          "title": "Autonomous Drone Navigation System          ",
          "name": "IOT",
          "image": "/images/projecticons/drone-quadcopter-technology-svgrepo-com.svg",
          "tag1": "Government Grant",
          "tag2": "🟡 Ongoing",
          "date": "22d",
          "content": "<p>The <strong>Autonomous Drone Navigation System</strong> project aims to develop advanced navigation algorithms and hardware solutions for drones to operate autonomously in various environments. By integrating cutting-edge technologies such as computer vision, sensor fusion, and machine learning, the system will enable drones to navigate safely and efficiently without human intervention.</p><p>This project is funded by a government grant and involves collaboration with research institutions and industry partners at the national level. The ultimate goal is to create drones capable of performing tasks such as aerial surveillance, disaster response, and package delivery with high precision and reliability.</p>"
        },
        {
          "id": 1,
          "sticky": false,
          "title": "Predictive Maintenance System for Industrial Equipment",
          "name": "Machine Learning",
          "image": "/images/projecticons/magic-ball-future-svgrepo-com.svg",
          "tag1": "Industry Grant",
          "tag2": "🟢 Completed",
          "date": "2h",
          "content": "<p>The <strong>Predictive Maintenance System for Industrial Equipment</strong> project focused on developing machine learning algorithms to predict equipment failures and optimize maintenance schedules in industrial settings. By analyzing historical data and real-time sensor readings, the system can anticipate potential issues and schedule maintenance proactively, reducing downtime and improving operational efficiency.</p><p>This project was funded by an industry grant and involved collaboration among lab members within the research facility. The developed system has been successfully implemented in various industrial environments, resulting in significant cost savings and improved equipment reliability.</p>"
        },
        {
          "id": 2,
          "sticky": false,
          "title": "Smart Home Automation System",
          "name": "IOT",
          "image": "/images/projecticons/smart-home-svgrepo-com.svg",
          "tag1": "Bootstrapped",
          "tag2": "🟡 Ongoing",
          "date": "2h",
          "content": "<p>The <strong>Smart Home Automation System</strong> project aims to create an intelligent home automation platform that enhances convenience, security, and energy efficiency for homeowners. By integrating IoT devices, sensors, and machine learning algorithms, the system can automate various tasks such as lighting control, temperature regulation, and security monitoring based on user preferences and environmental conditions.</p><p>This project is currently self-funded (bootstrapped) and involves collaboration among lab members within the research facility. The developed system offers homeowners unprecedented control and customization options, making everyday living more comfortable and efficient.</p>"
        },
        {
          "id": 3,
          "sticky": false,
          "title": "Blockchain-based Supply Chain Management",
          "name": "Full Stack Development",
          "image": "/images/projecticons/ethereum-svgrepo-com.svg",
          "tag1": "University Grant",
          "tag2": "🟡 Ongoing",
          "date": "4h",
          "content": "<p>The <strong>Blockchain-based Supply Chain Management</strong> project focuses on developing a decentralized and transparent supply chain management system using blockchain technology. By leveraging smart contracts and distributed ledger technology, the system aims to enhance traceability, security, and efficiency throughout the supply chain process.</p><p>This project is funded by a university grant and involves collaboration with researchers from other labs within the academic institution. The developed system has the potential to revolutionize supply chain operations by providing real-time visibility and accountability at every stage of the process.</p>"
        },
        {
          "id": 4,
          "sticky": false,
          "title": "Natural Language Processing for Medical Data Analysis",
          "name": "Machine Learning",
          "image": "/images/projecticons/medical-record-svgrepo-com.svg",
          "tag1": "Government Grant",
          "tag2": "🟡 Ongoing",
          "date": "7h",
          "content": "<p>The <strong>Natural Language Processing for Medical Data Analysis</strong> project aims to develop advanced machine learning models and algorithms for analyzing medical text data such as electronic health records and clinical notes. By extracting valuable insights and patterns from unstructured medical data, the system can assist healthcare professionals in diagnosis, treatment planning, and research.</p><p>This project is funded by a government grant and involves collaboration with international research partners and healthcare institutions. The developed tools have the potential to revolutionize medical research and clinical practice by unlocking valuable information hidden within vast amounts of textual data.</p>"
        },
        {
          "id": 5,
          "sticky": false,
          "title": "Renewable Energy Monitoring and Optimization",
          "name": "Systems Engineering",
          "image": "/images/projecticons/renewable-energy-solar-energy-svgrepo-com.svg",
          "tag1": "Government Grant",
          "tag2": "🟢 Completed",
          "date": "12h",
          "content": "<p>The <strong>Renewable Energy Monitoring and Optimization</strong> project focused on designing and implementing systems engineering solutions for monitoring and optimizing renewable energy sources such as solar and wind power. By integrating sensors, data analytics, and control algorithms, the system maximizes energy production, minimizes downtime, and ensures efficient utilization of renewable resources.</p><p>This project was funded by a government grant and involved collaboration among lab members within the research facility. The developed solutions have been deployed in real-world renewable energy installations, demonstrating significant improvements in energy efficiency and sustainability.</p>"
        },
        {
          "id": 6,
          "sticky": false,
          "title": "Augmented Reality for Education",
          "name": "Others",
          "image": "/images/projecticons/education-school-study-sticker-8-svgrepo-com.svg",
          "tag1": "Industry Grant",
          "tag2": "🟡 Ongoing",
          "date": "12h",
          "content": "<p>The <strong>Augmented Reality for Education</strong> project aims to explore the potential of augmented reality (AR) technology in transforming teaching and learning experiences. By developing AR applications and educational content, the project seeks to enhance engagement, interactivity, and knowledge retention in various educational settings.</p><p>This project is funded by an industry grant and involves collaboration with educational institutions and technology companies at the national level. The developed AR tools have the potential to revolutionize education by providing immersive and interactive learning experiences that appeal to students of all ages.</p>"
        },
        {
          "id": 7,
          "sticky": false,
          "title": "Autonomous Vehicle Navigation System",
          "name": "IOT",
          "image": "/images/projecticons/oncoming-automobile-svgrepo-com.svg",
          "tag1": "University Grant",
          "tag2": "🟡 Ongoing",
          "date": "20h",
          "content": "<p>The <strong>Autonomous Vehicle Navigation System</strong> project focuses on developing advanced navigation systems for autonomous vehicles, including cars, drones, and unmanned aerial vehicles (UAVs). By integrating sensors, GPS, and artificial intelligence algorithms, the system enables vehicles to navigate safely and efficiently in dynamic environments.</p><p>This project is funded by a university grant and involves collaboration among lab members within the research facility. The developed navigation systems have the potential to revolutionize transportation by enabling the widespread adoption of autonomous vehicles for various applications, including transportation, logistics, and public safety.</p>"
        }
    ];

    return posts;
}