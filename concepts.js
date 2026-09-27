// Une ligne par concept : Nom du concept|point clé, point clé, ...
const RAW = {
fullstack:["Dev Full Stack",`API REST|ressources, verbes HTTP, stateless, codes de statut
GraphQL|schéma typé, une seule route, queries et mutations, évite l'over-fetching
CORS|same-origin policy, en-têtes Access-Control-*, requête preflight OPTIONS
JWT|header.payload.signature, stateless, expiration, pas de secrets dans le payload
Cookies vs localStorage|HttpOnly, risque XSS, CSRF, envoi automatique au serveur
Virtual DOM|diff, réconciliation, React, mises à jour minimales du DOM
SSR vs CSR|rendu serveur vs navigateur, SEO, hydratation, premier affichage
Hydratation|HTML rendu côté serveur, le JS attache les événements, erreurs de mismatch
Bundler (Webpack, Vite)|modules ES, HMR, tree shaking, minification
Event loop JavaScript|call stack, file de tâches, microtâches, non bloquant
Promises et async/await|asynchrone, then/catch, try/catch, Promise.all
Closures|portée lexicale, fonction qui capture ses variables, encapsulation
Hoisting|var vs let/const, déclarations remontées, temporal dead zone
Middleware (Express)|chaîne req/res, next(), auth, logs, gestion d'erreurs
ORM|mapping objet-relationnel, Prisma, Hibernate, problème N+1, migrations
WebSockets|connexion bidirectionnelle, temps réel, upgrade depuis HTTP
Responsive design|media queries, mobile first, flexbox et grid, viewport
Flexbox vs Grid|une dimension vs deux dimensions, alignement, placement
Accessibilité web|WCAG, ARIA, contraste, navigation au clavier
Gestion d'état (state management)|Redux, Context, store, flux unidirectionnel
TypeScript|typage statique, interfaces, inférence, compilé en JavaScript
Hooks React|useState, useEffect, règles des hooks, tableau de dépendances
Pagination d'API|offset/limit, curseur, performance, total
Rate limiting|quota de requêtes, code 429, token bucket, protection contre les abus
Cache HTTP|Cache-Control, ETag, réponse 304, CDN
Monorepo|plusieurs projets dans un dépôt, code partagé, Nx, Turborepo
Tests unitaires vs E2E|pyramide des tests, Jest, Playwright, mocks
PWA|service worker, manifest, hors ligne, installable`],
ia:["IA & Machine Learning",`Réseau de neurones|couches, poids et biais, fonction d'activation, rétropropagation
Rétropropagation|gradient, règle de la chaîne, mise à jour des poids
Descente de gradient|learning rate, minimum local, SGD, mini-batch
Overfitting|apprend par cœur le train, généralise mal, régularisation, jeu de validation
Régularisation|L1 et L2, dropout, pénalité, limite la complexité
Fonction d'activation|ReLU, sigmoïde, tanh, apporte la non-linéarité
CNN|convolutions, filtres, pooling, vision par ordinateur
RNN et LSTM|séquences, mémoire, gradient qui disparaît, portes
Transformer|attention, parallélisable, encodeur/décodeur, 2017
Mécanisme d'attention|query, key, value, pondération, self-attention
LLM|modèle de langage, prédiction du prochain token, pré-entraînement, milliards de paramètres
Tokenisation|découpage en tokens, BPE, vocabulaire, coût et fenêtre de contexte
Embeddings|vecteurs denses, similarité cosinus, espace sémantique
Fine-tuning|réentraînement sur données ciblées, LoRA, transfert
RAG|recherche puis génération, base vectorielle, contexte injecté, moins d'hallucinations
Hallucination|réponse fausse mais plausible, ancrage sur des sources, vérification
Prompt engineering|instructions claires, few-shot, chaîne de pensée, contexte
Apprentissage supervisé|données étiquetées, classification, régression
Apprentissage non supervisé|sans étiquettes, clustering, réduction de dimension
Apprentissage par renforcement|agent, environnement, récompense, politique
GAN|générateur contre discriminateur, jeu adversarial, images synthétiques
Modèles de diffusion|ajout puis retrait de bruit, génération d'images, Stable Diffusion
Transfer learning|modèle pré-entraîné, réutilisation, peu de données
Fonction de perte|erreur à minimiser, MSE, cross-entropy
Softmax|scores vers probabilités, somme à 1, multi-classe
Batch normalization|normalise les activations, stabilise, accélère l'entraînement
Agents IA|outils, planification, boucle action/observation, autonomie
Biais algorithmique|données biaisées, équité, discrimination, audit
Température d'un LLM|aléa de l'échantillonnage, créativité vs déterminisme`],
data:["Data Science",`Régression linéaire|relation linéaire, moindres carrés, coefficients, R²
Régression logistique|classification binaire, sigmoïde, probabilité, log-loss
Arbre de décision|découpages, entropie ou Gini, interprétable, surapprentissage
Random Forest|bagging, plusieurs arbres, vote, importance des variables
Gradient boosting|arbres successifs, corrige les erreurs, XGBoost, LightGBM
K-means|clustering, centroïdes, choix de k, méthode du coude
ACP (PCA)|réduction de dimension, variance expliquée, composantes orthogonales
Validation croisée|k-fold, estimation robuste, évite un split chanceux
Compromis biais-variance|sous-apprentissage vs sur-apprentissage, complexité du modèle
Matrice de confusion|vrais positifs, faux positifs, vrais négatifs, faux négatifs
Précision vs rappel|faux positifs vs faux négatifs, F1-score, seuil
Courbe ROC et AUC|TPR vs FPR, seuils, 0,5 = hasard
Feature engineering|créer des variables, encodage, transformation, connaissance métier
Normalisation vs standardisation|min-max, z-score, mise à l'échelle, algos sensibles aux distances
Valeurs manquantes|suppression, imputation, moyenne ou médiane, MCAR/MAR
Données déséquilibrées|classe minoritaire, SMOTE, pondération, métriques adaptées
One-hot encoding|variables catégorielles, colonnes binaires, piège des dummies
p-value|hypothèse nulle, significativité, seuil 0,05, souvent mal interprétée
Test A/B|groupe contrôle, variante, significativité, taille d'échantillon
Corrélation vs causalité|lien statistique, variable confondante, expérience contrôlée
Loi normale|courbe en cloche, moyenne, écart-type, règle 68-95-99,7
Théorème central limite|moyenne d'échantillons, tend vers une loi normale, n grand
DataFrame Pandas|tableau indexé, groupby, merge, Series
Analyse exploratoire (EDA)|visualisation, statistiques descriptives, anomalies, hypothèses
Valeurs aberrantes (outliers)|IQR, z-score, impact sur la moyenne, erreur ou vrai signal
Data leakage|info du test dans l'entraînement, scores trop beaux, pipeline
Séries temporelles|tendance, saisonnalité, stationnarité, ARIMA
Médiane vs moyenne|robustesse aux outliers, distribution asymétrique`],
secu:["Cybersécurité",`Faille XSS|injection de script, échappement des sorties, CSP, cookies HttpOnly
Injection SQL|requêtes paramétrées, entrée utilisateur, ORM, moindre privilège
CSRF|requête forgée depuis un autre site, token anti-CSRF, SameSite
Chiffrement symétrique|une seule clé, AES, rapide, problème du partage de clé
Chiffrement asymétrique|clé publique et privée, RSA, échange de clés, signature
Fonction de hachage|sens unique, SHA-256, intégrité, collisions
Salage des mots de passe|sel aléatoire, bcrypt ou argon2, contre les rainbow tables
HTTPS et TLS|certificat, handshake, chiffrement en transit, autorité de certification
Authentification vs autorisation|qui tu es vs ce que tu as le droit de faire, RBAC
MFA|plusieurs facteurs, savoir/avoir/être, TOTP, clés physiques
OAuth 2.0|délégation d'accès, access token, authorization code, scopes
Phishing|ingénierie sociale, faux site, urgence, vérifier l'expéditeur
Attaque DDoS|saturation, botnet, mitigation, CDN
Man-in-the-middle|interception, ARP spoofing, TLS, vérification de certificat
Principe du moindre privilège|droits minimaux, réduit la surface d'attaque
Pare-feu|filtrage de paquets, règles, stateful, WAF
Zero Trust|ne jamais faire confiance, toujours vérifier, micro-segmentation
Ransomware|chiffrement des données, rançon, sauvegardes hors ligne, isolation
Buffer overflow|dépassement de tampon, écrasement de la pile, ASLR, canaris
OWASP Top 10|risques web majeurs, contrôle d'accès, injection, mauvaise config
Test d'intrusion (pentest)|autorisé, reconnaissance, exploitation, rapport
Faille zero-day|inconnue de l'éditeur, pas de correctif, exploit
Signature numérique|clé privée signe, clé publique vérifie, intégrité, non-répudiation
VPN|tunnel chiffré, confidentialité, accès distant
SIEM|centralisation des logs, corrélation, alertes, SOC
Attaque par force brute|essais exhaustifs, verrouillage, rate limit, mots de passe longs`],
devops:["DevOps & Cloud",`CI/CD|intégration continue, déploiement continu, pipeline, tests automatisés
Docker|conteneur, image, Dockerfile, isolation
Conteneur vs machine virtuelle|noyau partagé vs hyperviseur, légèreté, démarrage rapide
Kubernetes|orchestration, pods, services, scaling automatique
Pod Kubernetes|plus petite unité, un ou plusieurs conteneurs, IP partagée
Infrastructure as Code|Terraform, versionnée, reproductible, déclaratif
Microservices|services indépendants, API, déploiement séparé, complexité réseau
Load balancer|répartition du trafic, haute dispo, round robin, health checks
Scalabilité horizontale vs verticale|plus de machines vs machine plus puissante
Serverless|fonctions à la demande, pas de serveur à gérer, cold start, paiement à l'usage
IaaS, PaaS, SaaS|niveaux d'abstraction, qui gère quoi, exemples concrets
Stratégies de branches Git|merge vs rebase, GitFlow, trunk-based
Blue-green deployment|deux environnements, bascule du trafic, rollback rapide
Canary release|déploiement progressif, petit pourcentage d'utilisateurs, monitoring
Observabilité|logs, métriques, traces, Prometheus et Grafana
Reverse proxy|Nginx, intermédiaire, terminaison TLS, cache, routage
CDN|serveurs proches des utilisateurs, cache des fichiers statiques, latence
Variables d'environnement|config hors du code, secrets, méthode 12-factor
Docker Compose|plusieurs conteneurs, fichier YAML, réseau local, dev
Ansible|gestion de configuration, sans agent, playbooks, idempotence
SLA, SLO, SLI|engagement contractuel, objectif, indicateur mesuré
Haute disponibilité|redondance, pas de point unique de défaillance, failover, 99,9 %
Registre d'images|Docker Hub, stockage d'images, tags et versions
Helm|gestionnaire de paquets Kubernetes, charts, templates`],
bdd:["Bases de données",`SQL vs NoSQL|relationnel vs document ou clé-valeur, schéma, scalabilité
Normalisation|formes normales, éviter la redondance, 1NF, 2NF, 3NF
Clé primaire et clé étrangère|identifiant unique, relations, intégrité référentielle
Jointures SQL|INNER, LEFT, RIGHT, FULL
Index|accélère la lecture, B-tree, ralentit l'écriture
Transactions ACID|atomicité, cohérence, isolation, durabilité
Théorème CAP|cohérence, disponibilité, tolérance au partitionnement, on en garde deux
Niveaux d'isolation|read committed, repeatable read, serializable, lectures fantômes
Interblocage (deadlock) en BDD|verrous croisés, détection, ordre d'acquisition des verrous
Réplication|primaire et réplicas, répartition des lectures, haute dispo
Sharding|partitionnement horizontal, clé de sharding, répartition des données
GROUP BY et HAVING|agrégation, filtre après regroupement, COUNT, SUM
Sous-requête|requête imbriquée, IN, EXISTS, corrélée
Vue SQL|requête enregistrée, table virtuelle, simplification, sécurité
Procédure stockée|code dans la base, réutilisable, paramètres
MongoDB|documents BSON, collections, schéma flexible
Redis|clé-valeur en mémoire, cache, TTL, pub/sub
Problème N+1|une requête par élément, eager loading, jointure
Modèle entité-association|entités, attributs, cardinalités, MCD
Dénormalisation|redondance volontaire, lectures rapides, entrepôt de données
Base de données vectorielle|embeddings, recherche par similarité, RAG
Data warehouse|OLAP, schéma en étoile, historique, analytique
OLTP vs OLAP|transactions vs analyse, stockage en lignes vs colonnes
Migration de schéma|versionner la structure, up/down, Flyway, Liquibase`],
algo:["Algo & Structures",`Complexité Big O|temps et espace, pire cas, O(n), O(log n)
Recherche dichotomique|tableau trié, divise par deux, O(log n)
Tri rapide (quicksort)|pivot, partition, O(n log n) en moyenne, O(n²) au pire
Tri fusion (merge sort)|diviser pour régner, fusion, stable, O(n log n)
Récursivité|cas de base, appel à soi-même, pile d'appels, stack overflow
Programmation dynamique|sous-problèmes qui se répètent, mémoïsation, tabulation
Algorithme glouton|choix localement optimal, pas toujours optimal globalement, rendu de monnaie
Pile (stack)|LIFO, push et pop, pile d'appels, annuler
File (queue)|FIFO, enqueue et dequeue, BFS, file d'attente
Liste chaînée|nœuds et pointeurs, insertion O(1), accès O(n)
Table de hachage|fonction de hachage, collisions, accès O(1) en moyenne
Arbre binaire de recherche|gauche < nœud < droite, O(log n) si équilibré
Tas (heap)|arbre presque complet, min ou max à la racine, file de priorité
Graphe|sommets et arêtes, orienté ou non, liste ou matrice d'adjacence
Parcours en largeur (BFS)|file, niveau par niveau, plus court chemin non pondéré
Parcours en profondeur (DFS)|pile ou récursion, détection de cycles, tri topologique
Algorithme de Dijkstra|plus court chemin, poids positifs, file de priorité
Diviser pour régner|découper, résoudre, combiner
Backtracking|exploration, retour arrière, N-reines, sudoku
Mémoïsation|cache des résultats, évite les recalculs, approche top-down
Arbre équilibré (AVL, rouge-noir)|rotations, hauteur O(log n)
Trie (arbre préfixe)|préfixes, autocomplétion, dictionnaire
Technique des deux pointeurs|deux indices, tableau trié, O(n)
Fenêtre glissante|sous-tableau contigu, on avance les bornes, O(n)
Problème NP-complet|vérifiable en temps polynomial, pas d'algo rapide connu, P vs NP`],
reseau:["Réseaux",`Modèle OSI|7 couches, de physique à application, encapsulation
TCP vs UDP|fiable et orienté connexion vs rapide et sans connexion
Handshake TCP|SYN, SYN-ACK, ACK, établissement de connexion
Adresse IP|IPv4 vs IPv6, identifie une machine, publique ou privée
Masque de sous-réseau|notation CIDR, /24, partie réseau vs partie hôte
DNS|nom de domaine vers IP, résolution, enregistrements A et CNAME, cache
DHCP|attribution automatique d'IP, bail, séquence DORA
NAT|traduction d'adresses, IP privées derrière une IP publique
HTTP vs HTTPS|texte clair vs chiffré par TLS, ports 80 et 443
Méthodes HTTP|GET, POST, PUT, PATCH, DELETE
Codes de statut HTTP|2xx succès, 3xx redirection, 4xx erreur client, 5xx erreur serveur
Routeur vs switch|couche 3 vs couche 2, adresses IP vs MAC
Adresse MAC|identifiant matériel, couche 2, ARP
Protocole ARP|IP vers MAC, broadcast, ARP spoofing
Port réseau|identifie un service, 0 à 65535, 22, 80, 443
Latence vs bande passante|délai vs débit
VLAN|réseau local virtuel, segmentation, configuré sur le switch
HTTP/2 et HTTP/3|multiplexage, QUIC, UDP, performances
Ping et traceroute|ICMP, test de connectivité, sauts entre routeurs
Proxy|intermédiaire, filtrage, anonymat, cache
Wi-Fi|norme 802.11, bandes 2,4 et 5 GHz, WPA2 et WPA3
BGP|routage entre systèmes autonomes, colonne vertébrale d'Internet`],
os:["Systèmes & OS",`Processus vs thread|mémoire séparée vs partagée, coût de création
Ordonnancement (scheduling)|round robin, priorités, préemption, temps CPU
Mémoire virtuelle|espace d'adressage, pagination, swap
Pagination mémoire|pages, table des pages, défaut de page
Interblocage (deadlock)|4 conditions de Coffman, prévention, détection
Mutex et sémaphore|exclusion mutuelle, section critique, compteur
Race condition|accès concurrent, résultat imprévisible, synchronisation
Appel système|passage en mode noyau, read, write, fork
Noyau (kernel)|cœur de l'OS, monolithique vs micro-noyau, pilotes
Système de fichiers|inodes, ext4 et NTFS, arborescence, journalisation
Appel fork()|clone le processus, parent et enfant, PID
Pile vs tas|stack automatique et LIFO vs heap dynamique, fuites
Garbage collector|libération automatique, mark and sweep, pauses
Interruptions|signal matériel ou logiciel, gestionnaire, priorité
Changement de contexte|sauvegarde des registres, coût, multitâche
Permissions Linux|rwx, user/group/others, chmod
Shell et pipes|interpréteur, redirections, pipe |, stdin et stdout
Cache CPU|L1, L2, L3, localité, cache miss
Concurrence vs parallélisme|entrelacement vs exécution simultanée, multicœur
Fuite mémoire|mémoire jamais libérée, consommation qui grimpe, outils de détection
Démon (service)|processus en arrière-plan, systemd`],
archi:["Archi & Génie logiciel",`Principes SOLID|responsabilité unique, ouvert/fermé, Liskov, ségrégation des interfaces, inversion des dépendances
MVC|modèle, vue, contrôleur, séparation des responsabilités
Pattern Singleton|instance unique, accès global, difficile à tester
Pattern Observer|abonnés, notification, événements
Pattern Factory|création d'objets déléguée, découplage
Injection de dépendances|dépendances fournies de l'extérieur, testabilité, IoC
Architecture hexagonale|ports et adaptateurs, domaine au centre, indépendance technique
Clean Architecture|couches concentriques, règle de dépendance vers l'intérieur, entités
Monolithe vs microservices|simplicité vs indépendance, déploiement, équipes
DRY, KISS, YAGNI|pas de répétition, rester simple, ne pas coder par anticipation
Couplage et cohésion|faible couplage, forte cohésion
Architecture orientée événements|producteurs et consommateurs, asynchrone, découplage
Message broker|Kafka, RabbitMQ, files de messages, découplage
CQRS|séparer lecture et écriture, modèles distincts
Domain-Driven Design|domaine métier, langage ubiquitaire, bounded context, agrégats
API Gateway|point d'entrée unique, routage, authentification, rate limiting
Programmation orientée objet|encapsulation, héritage, polymorphisme, abstraction
Programmation fonctionnelle|fonctions pures, immuabilité, fonctions d'ordre supérieur
Dette technique|raccourcis, coût futur, remboursement par refactoring
Refactoring|améliorer la structure sans changer le comportement, filet de tests
TDD|test d'abord, red-green-refactor
Agile et Scrum|sprints, backlog, rétrospective, itératif
Versionnage sémantique|MAJEUR.MINEUR.CORRECTIF, compatibilité
Idempotence|même résultat si on répète, PUT, retry sans risque
Circuit breaker|coupe les appels vers un service en panne, résilience`]
};
