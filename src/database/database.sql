-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Tempo de geração: 10/05/2024 às 19:44
-- Versão do servidor: 5.7.34
-- Versão do PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `imdb`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `evaluation_movies`
--

CREATE TABLE `evaluation_movies` (
  `voteID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `movieID` int(11) NOT NULL,
  `evaluation` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `evaluation_movies`
--

INSERT INTO `evaluation_movies` (`voteID`, `userID`, `movieID`, `evaluation`) VALUES
(1, 3, 1, 4),
(2, 3, 2, 1),
(3, 3, 3, 1),
(4, 3, 8, 4),
(5, 3, 7, 4),
(6, 3, 4, 2),
(7, 3, 9, 4);

-- --------------------------------------------------------

--
-- Estrutura para tabela `genres`
--

CREATE TABLE `genres` (
  `generID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `genres`
--

INSERT INTO `genres` (`generID`, `name`) VALUES
(1, 'Ação'),
(2, 'Aventura'),
(3, 'Comédia'),
(4, 'Comédia romântica'),
(5, 'Documentário'),
(6, 'Drama'),
(7, 'Fantasia'),
(8, 'Ficção científica'),
(9, 'Musical'),
(10, 'Romance'),
(11, 'Terror'),
(12, 'Suspense'),
(13, 'Guerra'),
(14, 'Biografia');

-- --------------------------------------------------------

--
-- Estrutura para tabela `genres_movies`
--

CREATE TABLE `genres_movies` (
  `id` int(11) NOT NULL,
  `movieID` int(11) NOT NULL,
  `generID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `genres_movies`
--

INSERT INTO `genres_movies` (`id`, `movieID`, `generID`) VALUES
(1, 1, 6),
(2, 1, 14),
(3, 1, 3),
(4, 2, 1),
(5, 2, 2),
(6, 2, 6),
(7, 3, 6),
(8, 3, 2),
(9, 3, 5),
(10, 4, 3),
(11, 4, 6),
(12, 4, 10),
(13, 5, 10),
(14, 5, 3),
(15, 6, 1),
(16, 6, 2),
(17, 6, 6),
(18, 7, 3),
(19, 7, 6),
(20, 7, 10),
(21, 8, 14),
(22, 8, 6),
(23, 9, 2),
(24, 9, 1),
(25, 9, 6);

-- --------------------------------------------------------

--
-- Estrutura para tabela `movies`
--

CREATE TABLE `movies` (
  `movieID` int(11) NOT NULL,
  `name` text NOT NULL,
  `year` year(4) NOT NULL,
  `time` time NOT NULL,
  `sinopse` text NOT NULL,
  `image` text,
  `directors` text NOT NULL,
  `actors` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `movies`
--

INSERT INTO `movies` (`movieID`, `name`, `year`, `time`, `sinopse`, `image`, `directors`, `actors`) VALUES
(1, 'Bebê Rena', 2024, '00:30:00', 'Segue o distorcido relacionamento do roteirista e ator Richard Gadd com sua stalker e o impacto que isso causa quando ele é forçado a enfrentar um trauma profundo e muito sombrio.', '92fb11aebf349966e1f8ea710a7298f21c8178f3671674a8f400b8291ea7116684b1ec156144802a1f09d22f1320841722835ff430a06907841c54444fb84288.37', 'Richard Gadd', ' Richard Gadd, Jessica Gunning, Nava Mau'),
(2, 'Fallout', 2024, '01:00:00', '218 anos após o apocalipse, uma habitante pacífica de um agradável refúgio é forçada a se aventurar na superfície e fica chocada quando descobre a terra devastada que a espera.', 'ca4584d6295400cc8827f2e1ad3b041bb752cbf060febff21fe72138be59935302d0b7637cd0f9d628eb817165679cf34fd6577c732aba5c9d7758fee63f4d22.37', 'Geneva Robertson-Dworet, Graham Wagner', 'Ella Purnell, Aaron Moten e Walton Goggins'),
(3, 'Xógun: A Gloriosa Saga do Japão', 2024, '01:00:00', 'Ambientado no século XVII, John Blackthorne, um marinheiro que passa de forasteiro a samurai, enquanto é usado como peão na luta do líder japonês Toranaga para chegar ao topo da cadeia governamental, ou Shogun.', '5aef44a8905223a189069f6b29237c298e8eda688a48b581e731c5348b7746b991ff2edd02044476b047bde71a1bcb7add3fde500c9272d37439972e406cdc0a.37', 'Justin Marks', 'Cosmo Jarvis, Anna Sawai, Tadanobu Asano'),
(4, 'Uma Ideia de Você', 2024, '01:55:00', 'Enquanto acompanha a viagem de sua filha adolescente ao Coachella, Solène, uma mãe solteira de 40 anos, começa um romance inesperado com Hayes Campbell, de 24 anos, o vocalista da August Moon, a boy band mais badalada do planeta.', 'b8d296ab98162bc4536fdd8a5126a1cf42ecf70978229652016085608714d00770289b4c8867cd3ac52b205a35666d9b04f9e06b4bf27b63baebc5fd3d7638ee.37', ' Michael Showalter', ' Anne Hathaway, Nicholas Galitzine e Ella Rubin'),
(5, 'Todos Menos Você', 2024, '01:43:00', 'Bea e Ben parecem o casal perfeito, mas depois de um incrível primeiro encontro, algo aconteceu que esfriou a atração dos dois. Até que eles são colocados inesperadamente juntos em um casamento na Austrália.', '7cbf7e0ef51bca2886751476b3ea9cf63abdc0a5a990e434d09f3085d7903a8f922698d5fe1c958c3e8cb10b71925d89b64ab4a17fa3cc9feb394e6253b547ea.37', 'Will Gluck', 'Ilana Wolpert e Will Gluck'),
(6, 'Godzilla Minus One', 2023, '02:04:00', 'Em um Japão social e economicamente devastado após o término da Segunda Guerra Mundial, a situação chega a um nível ainda mais crítico quando uma gigantesca e misteriosa criatura surge do mar para assolar o país.', '691aa34c070d2761f7a1649a14e153dff44400be51690419acc6e04382516c040e4a9a5703669bab575d72d42680db075703954d8396749149abc0ae69f6386b.37', 'Takashi Yamazaki', 'Minami Hamabe, Ryunosuke Kamiki e Sakura Andô'),
(7, 'Pobres Criaturas', 2023, '02:21:00', 'Uma jovem é trazida de volta à vida por um brilhante e heterodoxo cientista.', '92878321cf4acf5aae4e9e4f00a0593b15d82aa82a39e9be98831aca95b9c0788385683c2d77d7e99882dd59ce6ba825c3f278a251b6255c79ec6af237c21a92.37', 'Yorgos Lanthimos', ' Emma Stone, Mark Ruffalo e Willem Dafoe'),
(8, 'Oppenheimer', 2023, '03:00:00', 'A história do cientista J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica.', 'da675822612d34fa56ec560441b83ad409bc9ba66463449d255218031fde92499786f3c9ef4d7dab53da3ab88f12f54f51600335c9553a6cdb761dee708a11a4.37', 'Christopher Nolan', ' Cillian Murphy, Emily Blunt e Matt Damon'),
(9, 'Game of Thrones', 2011, '01:00:00', 'Nove famílias nobres lutam pelo controle sobre as terras míticas de Westeros, enquanto um antigo inimigo retorna depois de estar adormecido por milhares de anos.', '47747d3215f6ca73025060fe4bb9234ca55e3ac544d0fa8211d1349193dbd88e244de4f75d28624be64daaccd38ec26fc034dbbff96f1d8ea4eb1b28c30aeb1d.37', 'David Benioff e D.B. Weiss', ' Emilia Clarke, Peter Dinklage e Kit Harington');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `type` int(11) NOT NULL,
  `delete_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`userID`, `name`, `email`, `password`, `type`, `delete_at`) VALUES
(1, 'Thays L Correa', 'thays.lacerdac@gmail.com', '$2a$10$vsLrk1V2BMrT/Hd7p1Q9x.ZC.5EKnvmfzZWR4aXPN2IaOPxBWEoNW', 1, '2024-05-09 09:58:08'),
(2, 'Admin', 'admin@admin.com', '$2a$10$vsLrk1V2BMrT/Hd7p1Q9x.ZC.5EKnvmfzZWR4aXPN2IaOPxBWEoNW', 1, NULL),
(3, 'Usuário', 'user@user.com', '$2a$10$vsLrk1V2BMrT/Hd7p1Q9x.ZC.5EKnvmfzZWR4aXPN2IaOPxBWEoNW', 0, NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `evaluation_movies`
--
ALTER TABLE `evaluation_movies`
  ADD PRIMARY KEY (`voteID`);

--
-- Índices de tabela `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`generID`);

--
-- Índices de tabela `genres_movies`
--
ALTER TABLE `genres_movies`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`movieID`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `evaluation_movies`
--
ALTER TABLE `evaluation_movies`
  MODIFY `voteID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `genres`
--
ALTER TABLE `genres`
  MODIFY `generID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `genres_movies`
--
ALTER TABLE `genres_movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de tabela `movies`
--
ALTER TABLE `movies`
  MODIFY `movieID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
