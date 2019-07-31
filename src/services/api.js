export function loadLists() {
  return [
    {
      title: "Backlog",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Estudar módulo 01 de NodeJS",
          labels: ["#3b5bfd"],
          user:
            "https://firebasestorage.googleapis.com/v0/b/catch-your-party.appspot.com/o/eu.png?alt=media&token=5048a6cc-7b5b-4373-8503-2db14e155909"
        },
        {
          id: 2,
          content:
            "Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy",
          labels: ["#3b5bfd"],
          user:
            "https://firebasestorage.googleapis.com/v0/b/catch-your-party.appspot.com/o/eu.png?alt=media&token=5048a6cc-7b5b-4373-8503-2db14e155909"
        },
        {
          id: 3,
          content: "Estudar módulo 03 de React Native",
          labels: ["#3b5bfd"],
          user:
            "https://firebasestorage.googleapis.com/v0/b/catch-your-party.appspot.com/o/eu.png?alt=media&token=5048a6cc-7b5b-4373-8503-2db14e155909"
        },
        {
          id: 4,
          content:
            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ["#70cc00"],
          user:
            "https://firebasestorage.googleapis.com/v0/b/catch-your-party.appspot.com/o/eu.png?alt=media&token=5048a6cc-7b5b-4373-8503-2db14e155909"
        },
        {
          id: 5,
          content: "Gravar testes e deploy ReactJS",
          labels: ["#70cc00"],
          user:
            "https://firebasestorage.googleapis.com/v0/b/catch-your-party.appspot.com/o/eu.png?alt=media&token=5048a6cc-7b5b-4373-8503-2db14e155909"
        }
      ]
    },
    {
      title: "To-do",
      creatable: true,
      cards: [
        {
          id: 6,
          content: "Recriando clone do Pipefy",
          labels: [],
          user:
            "https://firebasestorage.googleapis.com/v0/b/catch-your-party.appspot.com/o/eu.png?alt=media&token=5048a6cc-7b5b-4373-8503-2db14e155909"
        }
      ]
    },
    {
      title: "In Progress",
      creatable: false,
      cards: [
        {
          id: 7,
          content: "Gravar sobre Geolocalização e mapas com React Native",
          labels: ["#3b5bfd"],
          user:
            "https://firebasestorage.googleapis.com/v0/b/catch-your-party.appspot.com/o/eu.png?alt=media&token=5048a6cc-7b5b-4373-8503-2db14e155909"
        },
        {
          id: 8,
          content: "Gravar testes e deploy ReactJS",
          labels: ["#70cc00"],
          user:
            "https://firebasestorage.googleapis.com/v0/b/catch-your-party.appspot.com/o/eu.png?alt=media&token=5048a6cc-7b5b-4373-8503-2db14e155909"
        },
        {
          id: 9,
          content: "Ajustes na biblioteca unform",
          labels: []
        }
      ]
    },
    {
      title: "Done",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Gravar aula sobre deploy e CI com React Native",
          labels: []
        },
        {
          id: 12,
          content: "Gravar testes e deploy ReactJS",
          labels: ["#70cc00"]
        },
        {
          id: 13,
          content:
            'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ["#3b5bfd"]
        }
      ]
    }
  ];
}
