var app = angular.module('myApp', []);

app.controller('MyController', function ($scope, $window) {
  // Dados gerais
  $scope.logoSrc = 'img copy/Captura_de_tela_2023-11-12_163100-removebg-preview.png';
  $scope.menuItems = ['Inicio', 'Pneus', 'Serviços', 'Encontre-nos', 'Sobre nós'];
  $scope.videoSource = 'midia/WhatsApp Video 2023-11-13 at 23.54.12.mp4';

  // Função para abrir o WhatsApp
  $scope.abrirWhatsApp = function (title) {
    const numeroTelefone = '11994888013';
    const mensagem = title ? `Quero saber mais sobre ${title}` : 'Olá, estou interessado nos pneus';
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagem)}`;
    $window.
    open(urlWhatsApp, '_blank');
  };

  // Mapeamento de títulos para medidas
  $scope.medidasPneus = {
    'ARO 13': '175/70 R13',
    'Pneu 14': '185/65 R14',
    'Pneu 15': '195/60 R15',
    'Pneu 16': '205/55 R16'
    // Adicione mais conforme necessário
  };

  // Dados sobre pneus
  $scope.pneus = [
    { title: 'Aro 13', imgSrc: 'img copy/f2121411-d90b-41f9-b69b-18d88be56925-removebg-preview.png', description: 'A partir de R$:199,90 ' },
    { title: 'Aro 14 ', imgSrc: 'img copy/f2121411-d90b-41f9-b69b-18d88be56925-removebg-preview.png', description: 'A partir de R$:219,90 ' },
    { title: 'Aro 15', imgSrc: 'img copy/f2121411-d90b-41f9-b69b-18d88be56925-removebg-preview.png', description: 'A partir de R$:229,90 ' },
    { title: 'Aro 16', imgSrc: 'img copy/f2121411-d90b-41f9-b69b-18d88be56925-removebg-preview.png', description: 'A partir de R$:259,90  '}
    // Adicione mais pneus conforme necessário
  ];

  // Dados sobre serviços
  $scope.servicos = [
    { title: 'Pneus', description: 'Pneus novos e com 5 anos de garantia. Pneus nacionais (Michelin, Goodyear, Pirelli, Dunlop, Continental, Bridgestone, Firestone) e importados (Xbri, Provato, Yokohama, Ling Long, Nexen, Delinte), medidas do Aro 13 ao Aro 24, você só encontra aqui na Impacto Prime, o maior centro automotivo do Brasil..' },
    { title: 'Troca De Óleo', description: 'Aqui na Impacto Prime também fazemos a troca de óleo, que é FUNDAMENTAL para o funcionamento do motor do veículo, ele garante a lubrificação das peças do motor, mantém a temperatura e, além disso, ajuda na limpeza, para que as partículas de sujeira não fiquem alojadas no motor, para não causar entupimentos.' },
    { title: 'Revisão Completa', description: 'O motorista consciente entende que a revisão é tão importante quanto usar o cinto de segurança no carro. Ela deve ser feita a cada 3 meses ou 10.000km, e a melhor oficina mecânica para você efetuar esse serviço, é aqui na Impacto Prime!' },
    { title: 'Limpeza De Bico', description: 'A limpeza de bicos injetores é uma manutenção preventiva importante para garantir o bom funcionamento do motor do seu carro, é um procedimento relativamente simples, que consiste na remoção de obstruções que comprometem o funcionamento da válvula injetora (também chamada de bico injetor), e aqui no MAIOR autocenter do Brasil, possuímos esse serviço.' },
  ];

  // Dados adicionais
  $scope.carImgSrc = 'img/875.png';
  $scope.pneuImgSrc = "img/pneu-certo-removebg-preview.png";
  $scope.txt = "Bem-vindo ao nosso Centro Automotivo ! Somos um estabelecimento especializado em serviços automotivos, com uma equipe de profissionais altamente capacitados para atender às suas necessidades. Oferecemos uma ampla gama de serviços, desde manutenção preventiva e reparos básicos até serviços mais complexos, como diagnósticos eletrônicos e reparos de transmissão. Além disso, trabalhamos com todas as marcas e modelos de veículos.Nosso objetivo é proporcionar aos nossos clientes a melhor experiência possível, oferecendo serviços de alta qualidade, eficiência e preços acessíveis. Estamos comprometidos em fornecer o melhor atendimento ao cliente, mantendo a transparência em todas as etapas do processo.Venha nos visitar e conhecer nossas instalações modernas e equipamentos de última geração ";
  $scope.txt1 = "Sobre nós";

  // Mais serviços
  $scope.maisServicos = [
    { title: 'Suspensão', description: 'Somos um centro automotivo especialista em deixar a suspensão do seu carro com especificações de fábrica, trabalhamos com todas as peças que compõem a estrutura do seu carro: Amortecedor, mola, pivô, coxim, barra estabilizadora e as buchas, e o melhor de tudo, te damos garantia de 1 ano em todas as peças trocadas.' },
    { title: 'Sistema De Freio', description: 'O sistema de freio é responsável diretamente pela segurança do veículo, e a Impacto Prime oferece todas as peças e serviços, incluindo: Pastilhas de freio, sangria, disco de freio, fluído de freio, lonas, sapata e muito mais, para você rodar numa boa e sem preocupações!' },
    { title: 'Alinhamento', description: 'Na Impacto Prime o Alinhamento 3D é feito através da ajuda de softwares e conta com uma tecnologia avançada para proporcionar um alinhamento impecável para o veículo ajudando na precisão aprimorada, estabilidade, segurança, geometria correta e principalmente a vida útil do pneu.' },
    { title: 'Balanceamento', description: 'O balanceamento de roda evita vibrações e preserva a vida útil do pneu por meio do equilíbrio do conjunto pneu/roda. E se você tem dúvidas de quando balancear as rodas do seu veículo, nós da Impacto Prime possuímos os melhores equipamentos e ferramentas do mercado para garantir que o balanceamento esteja adequado, pois é fundamental para a sua segurança e desempenho do veículo.' }
  ];

  // Ícones
  $scope.icons = [
    { src: 'img copy/payment.png', title: 'PARCELE EM ATÉ 10X' },
    { src: 'img copy/car-service.png', title: 'MAIS DE 100 LOJAS' },
    { src: 'img copy/mechanic.png', title: '1 ANO DE GARANTIA' },
    { src: 'img copy/tires.png', title: '5 ANOS DE GARANTIA' }
  ];

  // Define os dados dinâmicos para o rodapé
  $scope.country = 'Brasil';
  $scope.flag = 'img copy/BR.webp';
  $scope.currentYear = new Date().getFullYear();
});


 